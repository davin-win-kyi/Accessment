#!/usr/bin/env python3
import json
import os
import re
from pathlib import Path

from openai import OpenAI

INPUT_JSON = Path("data/injected_sites/generated_injections.json")
OUT_DIR = Path("data/llm_detection_results")
OUTPUT_JSON = OUT_DIR / "llm_detection_results.json"

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-5")

client = OpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None


def extract_json_from_text(text: str) -> dict:
    text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        fenced = re.search(r"```json\s*(\{.*?\})\s*```", text, re.DOTALL)
        if fenced:
            return json.loads(fenced.group(1))
        bare = re.search(r"(\{.*\})", text, re.DOTALL)
        if bare:
            return json.loads(bare.group(1))
        return {"raw_output": text}


def call_gpt_detection(html: str):
    if not client:
        raise RuntimeError("OPENAI_API_KEY must be set.")
    prompt = f"""
You are auditing HTML for accessibility problems.

Only use the HTML below.
Do not assume screenshots or runtime behavior.
Use Axe-style rule IDs when possible.

Return JSON only with this exact schema:
{{
  "detected_errors": ["list of accessibility issues or rule IDs"],
  "reasoning": "brief explanation"
}}

HTML:
{html[:28000]}
"""
    response = client.responses.create(
        model=OPENAI_MODEL,
        input=prompt,
        max_output_tokens=2000,
    )
    return extract_json_from_text(response.output_text)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    items = json.loads(INPUT_JSON.read_text(encoding="utf-8"))
    results = []

    for item in items:
        injected_path = Path(item["injected_path"])
        html = injected_path.read_text(encoding="utf-8")

        print(f"[TEST] {item['site_name']} | expected={item['a11y_error']}")
        llm_output = call_gpt_detection(html)

        results.append({
            "site_name": item["site_name"],
            "source_path": item["source_path"],
            "injected_path": item["injected_path"],
            "rule": item["rule"],
            "expected_error": item["a11y_error"],
            "injection_script": item["injection_script"],
            "llm_output": llm_output,
        })

    OUTPUT_JSON.write_text(json.dumps(results, indent=2), encoding="utf-8")
    print(f"[DONE] Results written to {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
