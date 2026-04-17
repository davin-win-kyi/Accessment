#!/usr/bin/env python3
import json
import os
from pathlib import Path
from typing import Any, Dict, List

from dotenv import load_dotenv

from providers import get_detector
from utils import is_expected_detected

load_dotenv()

INPUT_JSON = Path("injected_sites/generated_injections.json")
OUT_DIR = Path("llm_detection_results")
SUMMARY_JSON = OUT_DIR / "llm_detection_summary.json"

PROVIDERS = [
    p.strip().lower()
    for p in os.getenv("LLM_PROVIDERS", "openai,gemma,qwen").split(",")
    if p.strip()
]


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not INPUT_JSON.exists():
        raise FileNotFoundError(f"Missing input file: {INPUT_JSON}")

    items = json.loads(INPUT_JSON.read_text(encoding="utf-8"))

    detectors: Dict[str, Any] = {}
    for provider in PROVIDERS:
        detectors[provider] = get_detector(provider)

    # Store results separately for each provider
    provider_results: Dict[str, List[Dict[str, Any]]] = {
        provider: [] for provider in PROVIDERS
    }

    # Optional richer stats for summary
    provider_stats: Dict[str, Dict[str, Any]] = {
        provider: {
            "num_runs": 0,
            "num_successful_runs": 0,
            "num_errors": 0,
            "num_expected_detected": 0,
        }
        for provider in PROVIDERS
    }

    for item in items:
        injected_path = Path(item["injected_path"])
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
                llm_output = detector.detect(html)
                detected = is_expected_detected(item["a11y_error"], llm_output)

                provider_results[provider].append(
                    {
                        "response": llm_output,
                        "true_error": item["a11y_error"],
                        "notes on true error": (
                            f"site={item['site_name']}; "
                            f"rule={item['rule']}; "
                            f"injected_path={item['injected_path']}; "
                            f"source_path={item['source_path']}; "
                            f"detected_expected_error={detected}"
                        ),
                    }
                )

                provider_stats[provider]["num_successful_runs"] += 1
                if detected:
                    provider_stats[provider]["num_expected_detected"] += 1

            except Exception as e:
                provider_results[provider].append(
                    {
                        "response": f"ERROR: {str(e)}",
                        "true_error": item["a11y_error"],
                        "notes on true error": (
                            f"site={item['site_name']}; "
                            f"rule={item['rule']}; "
                            f"injected_path={item['injected_path']}; "
                            f"source_path={item['source_path']}; "
                            f"detection_failed_due_to_exception=True"
                        ),
                    }
                )

                provider_stats[provider]["num_errors"] += 1

    # Write one JSON file per provider
    for provider in PROVIDERS:
        output_json = OUT_DIR / f"{provider}_detection_results.json"
        output_json.write_text(
            json.dumps(provider_results[provider], indent=2),
            encoding="utf-8",
        )
        print(f"[DONE] Results for {provider} written to {output_json}")

    # Write summary JSON
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