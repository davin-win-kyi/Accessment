#!/usr/bin/env python3
import json
import os
import traceback
from pathlib import Path
from typing import Any, Dict, List

from dotenv import load_dotenv

from providers import get_detector
from utils import is_expected_detected

load_dotenv()

INPUT_JSON = Path("injected_sites/generated_injections.json")
OUT_DIR = Path("llm_detection_results")
SUMMARY_JSON = OUT_DIR / "llm_detection_summary.json"
DEBUG_JSONL = OUT_DIR / "debug_results.jsonl"

PROVIDERS = [
    p.strip().lower()
    for p in os.getenv("LLM_PROVIDERS", "openai,gemma,qwen").split(",")
    if p.strip()
]


def normalize_detection_output(raw_output: Any) -> Dict[str, Any]:
    """
    Normalize detector/model output into:
    {
        "detected_errors": [...],
        "reasoning": "...",
        "_raw_text": "..."
    }
    """

    if isinstance(raw_output, dict):
        detected_errors = raw_output.get("detected_errors", [])
        reasoning = raw_output.get("reasoning", "")
        raw_text = raw_output.get("_raw_text", "")

        if not isinstance(detected_errors, list):
            detected_errors = [str(detected_errors)]

        return {
            "detected_errors": [str(x).strip() for x in detected_errors if str(x).strip()],
            "reasoning": str(reasoning).strip(),
            "_raw_text": str(raw_text),
        }

    if isinstance(raw_output, list):
        # Case 1: [{"detected_errors": [...], "reasoning": "..."}]
        if len(raw_output) == 1 and isinstance(raw_output[0], dict):
            first = raw_output[0]
            detected_errors = first.get("detected_errors", [])
            reasoning = first.get("reasoning", "")

            if not isinstance(detected_errors, list):
                detected_errors = [str(detected_errors)]

            return {
                "detected_errors": [str(x).strip() for x in detected_errors if str(x).strip()],
                "reasoning": str(reasoning).strip(),
                "_raw_text": json.dumps(raw_output),
            }

        # Case 2: ["issue1", "issue2"]
        if all(not isinstance(x, dict) for x in raw_output):
            return {
                "detected_errors": [str(x).strip() for x in raw_output if str(x).strip()],
                "reasoning": "Top-level list interpreted as detected_errors.",
                "_raw_text": json.dumps(raw_output),
            }

        return {
            "detected_errors": [],
            "reasoning": f"Unexpected list output format: {raw_output}",
            "_raw_text": json.dumps(raw_output),
        }

    if isinstance(raw_output, str):
        try:
            parsed = json.loads(raw_output)
            return normalize_detection_output(parsed)
        except json.JSONDecodeError:
            return {
                "detected_errors": [],
                "reasoning": f"Model did not return valid JSON. Raw output: {raw_output}",
                "_raw_text": raw_output,
            }

    return {
        "detected_errors": [],
        "reasoning": f"Unsupported output type: {type(raw_output).__name__}",
        "_raw_text": str(raw_output),
    }


def append_debug_jsonl(record: Dict[str, Any]) -> None:
    with DEBUG_JSONL.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record) + "\n")
        f.flush()
        os.fsync(f.fileno())


def write_provider_files(provider_results: Dict[str, List[Dict[str, Any]]]) -> None:
    for provider, results in provider_results.items():
        output_json = OUT_DIR / f"{provider}_detection_results.json"
        output_json.write_text(json.dumps(results, indent=2), encoding="utf-8")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not INPUT_JSON.exists():
        raise FileNotFoundError(f"Missing input file: {INPUT_JSON}")

    items = json.loads(INPUT_JSON.read_text(encoding="utf-8"))

    detectors: Dict[str, Any] = {}
    for provider in PROVIDERS:
        detectors[provider] = get_detector(provider)

    provider_results: Dict[str, List[Dict[str, Any]]] = {
        provider: [] for provider in PROVIDERS
    }

    provider_stats: Dict[str, Dict[str, Any]] = {
        provider: {
            "num_runs": 0,
            "num_successful_runs": 0,
            "num_errors": 0,
            "num_expected_detected": 0,
        }
        for provider in PROVIDERS
    }

    DEBUG_JSONL.write_text("", encoding="utf-8")

    for item in items:
        injected_path = Path(item["injected_source_path"])
        if not injected_path.exists():
            print(f"[SKIP] Missing injected HTML: {injected_path}")
            continue

        html = injected_path.read_text(encoding="utf-8")

        for provider, detector in detectors.items():
            print(
                f"[TEST] provider={provider} | model={detector.model_name} | "
                f"site={item['site_name']} | expected={item['a11y_error']}"
            )

            provider_stats[provider]["num_runs"] += 1

            try:
                detector_output = detector.detect(html)
                print(f"[DEBUG] detector_output type={type(detector_output).__name__}")
                print(f"[DEBUG] detector_output value={detector_output}")

                parsed_output = normalize_detection_output(detector_output)
                print(f"[DEBUG] parsed_output={parsed_output}")

                detected_errors = parsed_output["detected_errors"]

                # IMPORTANT: is_expected_detected must accept a list[str]
                detected = is_expected_detected(item["a11y_error"], detected_errors)

                record = {
                    "detected_errors": detected_errors,
                    "reasoning": parsed_output["reasoning"],
                    "true_error": item["a11y_error"],
                    "site_name": item["site_name"],
                    "rule": item["rule"],
                    "injected_path": item["injected_source_path"],
                    "source_path": item["source_path"],
                    "detected_expected_error": detected,
                    "_raw_text": parsed_output.get("_raw_text", ""),
                }

                provider_results[provider].append(record)
                append_debug_jsonl({"provider": provider, **record})
                write_provider_files(provider_results)

                provider_stats[provider]["num_successful_runs"] += 1
                if detected:
                    provider_stats[provider]["num_expected_detected"] += 1

            except Exception as e:
                tb = traceback.format_exc()
                print("[ERROR TRACEBACK]")
                print(tb)

                record = {
                    "detected_errors": [],
                    "reasoning": f"ERROR: {str(e)}",
                    "traceback": tb,
                    "true_error": item["a11y_error"],
                    "site_name": item["site_name"],
                    "rule": item["rule"],
                    "injected_path": item["injected_source_path"],
                    "source_path": item["source_path"],
                    "detected_expected_error": False,
                }

                provider_results[provider].append(record)
                append_debug_jsonl({"provider": provider, **record})
                write_provider_files(provider_results)

                provider_stats[provider]["num_errors"] += 1

    summary: Dict[str, Any] = {"providers": {}, "total_runs": 0}

    for provider in PROVIDERS:
        stats = provider_stats[provider]
        successful_runs = stats["num_successful_runs"]
        detected_runs = stats["num_expected_detected"]

        summary["providers"][provider] = {
            "model": detectors[provider].model_name,
            "num_runs": stats["num_runs"],
            "num_successful_runs": successful_runs,
            "num_errors": stats["num_errors"],
            "num_expected_detected": detected_runs,
            "expected_detection_rate": (
                detected_runs / successful_runs if successful_runs else 0.0
            ),
            "output_file": str(OUT_DIR / f"{provider}_detection_results.json"),
        }

        summary["total_runs"] += stats["num_runs"]

    SUMMARY_JSON.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(f"[DONE] Summary written to {SUMMARY_JSON}")


if __name__ == "__main__":
    main()
