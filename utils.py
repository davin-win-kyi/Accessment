import json
import re
from typing import Any, Dict, List

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


def build_detection_prompts(html: str) -> tuple[str, str]:
    system_prompt = """
        You are an accessibility auditor.

        Inspect the provided HTML and identify accessibility issues that are directly supported by the HTML alone.

        Do not assume screenshots, CSS rendering, JavaScript runtime behavior, browser interactions, or any external context.

        Return JSON only with this exact schema:
        {
        "detected_errors": ["issue_1", "issue_2"],
        "reasoning": "brief explanation"
        }

        Rules:
        - Include only accessibility issues supported by the HTML
        - Use short issue names
        - If no issue can be confidently identified from the HTML alone, return an empty list
        - Do not include markdown fences
        - Do not include any text before or after the JSON
        """.strip()

    user_prompt = f"""HTML:
        {html}"""

    return system_prompt, user_prompt


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

from typing import List


def is_expected_detected(expected_error: str, detected_errors: List[str]) -> bool:
    """
    expected_error: ground-truth label like 'accesskeys'
    detected_errors: list of model-returned issue strings
    """
    expected = expected_error.strip().lower()
    normalized = [str(x).strip().lower() for x in detected_errors]

    aliases = {
        "accesskeys": [
            "accesskey",
            "use of accesskey attribute",
            "duplicate accesskey values",
            "duplicate_accesskey_values",
            "accesskey_on_non_interactive_elements",
        ],
        "area-alt": [
            "area alt missing",
            "missing alt on area",
            "missing alt text on area",
            "image map area missing alt",
            "area-alt",
        ],
    }

    candidate_terms = [expected] + aliases.get(expected, [])

    for err in normalized:
        for term in candidate_terms:
            if term in err or err in term:
                return True

    return False