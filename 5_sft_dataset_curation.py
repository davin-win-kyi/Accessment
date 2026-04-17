#!/usr/bin/env python3
import json
import os
import time
from pathlib import Path
from typing import Any, Dict, List

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

INPUT_JSON = Path("injected_sites/generated_injections.json")

OUT_DIR = Path("sft_repair_dataset")
OUTPUT_JSONL = OUT_DIR / "repair_sft_dataset_minimal.jsonl"
OUTPUT_JSON = OUT_DIR / "repair_sft_dataset_minimal.json"
ERROR_JSON = OUT_DIR / "repair_sft_errors.json"

MODEL_NAME = os.getenv("OPENAI_MODEL", "gpt-5")
MAX_RETRIES = 3
SLEEP_BETWEEN_RETRIES_SEC = 2.0


def build_repair_prompt(item: Dict[str, Any], injected_html: str) -> str:
    a11y_error = item.get("a11y_error", "")
    rule = item.get("rule", "")
    injection_script = item.get("injection_script", "")
    rationale = item.get("rationale", "")

    return f"""You are an accessibility HTML repair assistant.

Your task is to fix the specified accessibility issue in the provided HTML.

Accessibility issue type: {a11y_error}
Rule: {rule}
Injection script: {injection_script}
Rationale: {rationale}

Instructions:
- Fix the specified accessibility issue in the HTML.
- Preserve the rest of the HTML as much as possible.
- Do not make unrelated cleanup, refactors, or formatting changes.
- Return only the repaired HTML.
- Do not include markdown fences.
- Do not include explanations.
"""


def build_training_input(item: Dict[str, Any], injected_html: str) -> str:
    a11y_error = item.get("a11y_error", "")
    rule = item.get("rule", "")
    injection_script = item.get("injection_script", "")
    rationale = item.get("rationale", "")

    return f"""Fix the following accessibility issue in the HTML and return only the repaired HTML.

Accessibility issue type: {a11y_error}
Rule: {rule}
Injection script: {injection_script}
Rationale: {rationale}

HTML:
{injected_html}
"""


def extract_text_from_response(response: Any) -> str:
    if hasattr(response, "output_text") and response.output_text:
        return response.output_text.strip()

    # Fallback extraction
    parts: List[str] = []
    for output_item in getattr(response, "output", []) or []:
        for content_item in getattr(output_item, "content", []) or []:
            text_val = getattr(content_item, "text", None)
            if text_val:
                parts.append(text_val)

    return "\n".join(parts).strip()


def call_gpt_repair(client: OpenAI, item: Dict[str, Any], injected_html: str) -> str:
    repair_prompt = build_repair_prompt(item, injected_html)
    training_input = build_training_input(item, injected_html)

    response = client.responses.create(
        model=MODEL_NAME,
        input=[
            {
                "role": "system",
                "content": repair_prompt,
            },
            {
                "role": "user",
                "content": training_input,
            },
        ],
    )

    repaired_html = extract_text_from_response(response)
    if not repaired_html:
        raise ValueError("Model returned empty output.")

    return repaired_html


def repair_with_retries(client: OpenAI, item: Dict[str, Any], injected_html: str) -> str:
    last_error = None

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            return call_gpt_repair(client, item, injected_html)
        except Exception as e:
            last_error = e
            print(
                f"[WARN] attempt={attempt}/{MAX_RETRIES} "
                f"site={item.get('site_name')} "
                f"rule={item.get('rule')} "
                f"error={str(e)}"
            )
            if attempt < MAX_RETRIES:
                time.sleep(SLEEP_BETWEEN_RETRIES_SEC)

    raise last_error


def build_sft_example(item: Dict[str, Any], injected_html: str, repaired_html: str) -> Dict[str, str]:
    return {
        "input": build_training_input(item, injected_html),
        "output": repaired_html,
    }


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not INPUT_JSON.exists():
        raise FileNotFoundError(f"Missing input file: {INPUT_JSON}")

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise EnvironmentError("Missing OPENAI_API_KEY in environment.")

    client = OpenAI(api_key=api_key)

    items = json.loads(INPUT_JSON.read_text(encoding="utf-8"))
    if not isinstance(items, list):
        raise ValueError(f"Expected {INPUT_JSON} to contain a JSON list.")

    examples: List[Dict[str, str]] = []
    errors: List[Dict[str, Any]] = []

    for idx, item in enumerate(items, start=1):
        injected_path_str = item.get("injected_path")
        if not injected_path_str:
            print(f"[SKIP] Missing injected_path in item index {idx}")
            errors.append(
                {
                    "index": idx,
                    "site_name": item.get("site_name"),
                    "rule": item.get("rule"),
                    "a11y_error": item.get("a11y_error"),
                    "error": "Missing injected_path field",
                }
            )
            continue

        injected_path = Path(injected_path_str)
        if not injected_path.exists():
            print(f"[SKIP] Missing injected HTML: {injected_path}")
            errors.append(
                {
                    "index": idx,
                    "site_name": item.get("site_name"),
                    "rule": item.get("rule"),
                    "a11y_error": item.get("a11y_error"),
                    "injected_path": injected_path_str,
                    "error": f"Injected file does not exist: {injected_path_str}",
                }
            )
            continue

        injected_html = injected_path.read_text(encoding="utf-8")

        print(
            f"[PROCESS] {idx}/{len(items)} | "
            f"site={item.get('site_name')} | "
            f"rule={item.get('rule')} | "
            f"error={item.get('a11y_error')}"
        )

        try:
            repaired_html = repair_with_retries(
                client=client,
                item=item,
                injected_html=injected_html,
            )

            examples.append(
                build_sft_example(
                    item=item,
                    injected_html=injected_html,
                    repaired_html=repaired_html,
                )
            )

        except Exception as e:
            print(
                f"[ERROR] site={item.get('site_name')} | "
                f"rule={item.get('rule')} | "
                f"error={str(e)}"
            )
            errors.append(
                {
                    "index": idx,
                    "site_name": item.get("site_name"),
                    "rule": item.get("rule"),
                    "a11y_error": item.get("a11y_error"),
                    "injected_path": injected_path_str,
                    "error": str(e),
                }
            )

    with OUTPUT_JSONL.open("w", encoding="utf-8") as f:
        for example in examples:
            f.write(json.dumps(example, ensure_ascii=False) + "\n")

    OUTPUT_JSON.write_text(
        json.dumps(examples, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    ERROR_JSON.write_text(
        json.dumps(errors, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    print(f"[DONE] Wrote {len(examples)} examples to {OUTPUT_JSONL}")
    print(f"[DONE] Wrote {len(examples)} examples to {OUTPUT_JSON}")
    print(f"[DONE] Wrote {len(errors)} errors to {ERROR_JSON}")


if __name__ == "__main__":
    main()