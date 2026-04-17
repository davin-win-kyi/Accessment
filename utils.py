import json
import re
from typing import Any, Dict, List


MAX_HTML_CHARS = 28000


def extract_json_from_text(text: str) -> dict:
    text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        fenced = re.search(r"```json\s*(\{.*?\})\s*```", text, re.DOTALL)
        if fenced:
            try:
                return json.loads(fenced.group(1))
            except json.JSONDecodeError:
                pass

        bare = re.search(r"(\{.*\})", text, re.DOTALL)
        if bare:
            try:
                return json.loads(bare.group(1))
            except json.JSONDecodeError:
                pass

        return {"raw_output": text}


def build_detection_prompt(html: str) -> str:
    return f"""
You are auditing HTML for accessibility problems.

Only use the HTML below.
Do not assume screenshots, CSS rendering, JavaScript runtime behavior, or browser interactions.
Use Axe-style rule IDs when possible.

Return JSON only with this exact schema:
{{
  "detected_errors": ["list of accessibility issues or rule IDs"],
  "reasoning": "brief explanation"
}}

HTML:
{html[:MAX_HTML_CHARS]}
""".strip()


def normalize_detected_errors(llm_output: Dict[str, Any]) -> List[str]:
    vals = llm_output.get("detected_errors", [])
    if not isinstance(vals, list):
        return []
    return [str(v).strip().lower() for v in vals if str(v).strip()]


def is_expected_detected(expected_error: str, llm_output: Dict[str, Any]) -> bool:
    expected = expected_error.strip().lower()
    detected = normalize_detected_errors(llm_output)

    if expected in detected:
        return True

    for item in detected:
        if expected in item or item in expected:
            return True

    reasoning = str(llm_output.get("reasoning", "")).lower()
    return expected in reasoning