#!/usr/bin/env python3
import json
import os
import re
from pathlib import Path
from typing import Dict, List

from openai import OpenAI

DEQUE_DIR = Path("data/deque_md")
SITES_DIR = Path("data/site_sources")
OUT_DIR = Path("data/injected_sites")
MANIFEST_PATH = OUT_DIR / "generated_injections.json"

MAX_RULES = int(os.getenv("MAX_RULES", "10"))
MAX_SITES = int(os.getenv("MAX_SITES", "0"))
SOURCE_FILENAME = "source.html"

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-5")

client = OpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def safe_filename(name: str) -> str:
    return re.sub(r"[^a-zA-Z0-9._-]+", "_", name).strip("_")


def list_rule_files() -> List[Path]:
    files = sorted([p for p in DEQUE_DIR.glob("*.md") if p.name != "rules.json"])
    if MAX_RULES > 0:
        files = files[:MAX_RULES]
    return files


def list_site_files() -> List[Path]:
    files = sorted(SITES_DIR.glob(f"*/{SOURCE_FILENAME}"))
    if MAX_SITES > 0:
        files = files[:MAX_SITES]
    return files


def extract_rule_id_from_md(md_text: str, fallback_name: str) -> str:
    match = re.search(r'"rule_id"\s*:\s*"([^"]+)"', md_text)
    if match:
        return match.group(1)
    return fallback_name.replace(".md", "")


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
        raise


def call_gpt_json(prompt: str) -> dict:
    if not client:
        raise RuntimeError("OPENAI_API_KEY must be set for GPT injection.")
    response = client.responses.create(
        model=OPENAI_MODEL,
        input=prompt,
        max_output_tokens=4000,
    )
    return extract_json_from_text(response.output_text)


def deterministic_injector(html_source: str, rule_id: str) -> Dict:
    injected_html = html_source
    injection_script = ""
    rationale = ""

    if "image-alt" in rule_id:
        injected_html = re.sub(
            r'<img([^>]*?)\salt="[^"]*"([^>]*?)>',
            r"<img\1\2>",
            html_source,
            count=1,
            flags=re.IGNORECASE,
        )
        injection_script = "Removed the first alt attribute from an <img> element."
        rationale = "Minimal mutation to induce image-alt."
    elif "label" in rule_id:
        injected_html = re.sub(
            r'<label([^>]*?)for="[^"]*"([^>]*?)>',
            r"<label\1\2>",
            html_source,
            count=1,
            flags=re.IGNORECASE,
        )
        injection_script = "Removed the for attribute from the first <label>."
        rationale = "Minimal mutation targeting label-related failures."
    elif "button-name" in rule_id:
        injected_html = re.sub(
            r"<button([^>]*)>.*?</button>",
            r"<button\1></button>",
            html_source,
            count=1,
            flags=re.IGNORECASE | re.DOTALL,
        )
        injection_script = "Removed the visible text from the first <button>."
        rationale = "Minimal mutation targeting button-name."
    else:
        injection_script = f"No deterministic injector implemented for {rule_id}."
        rationale = "Fallback placeholder only."

    return {
        "expected_rule_id": rule_id,
        "injection_script": injection_script,
        "injected_html": injected_html,
        "rationale": rationale,
    }


def gpt_injector(rule_md: str, html_source: str, rule_id: str, site_name: str) -> Dict:
    prompt = f"""
You are generating a minimal source-level accessibility defect in HTML.

Use Axe-style rule IDs when possible.

Inputs:
1. Documentation for one accessibility rule
2. HTML source for a webpage

Rule ID:
{rule_id}

Site name:
{site_name}

Rule documentation:
{rule_md[:14000]}

HTML source:
{html_source[:28000]}

Task:
- Modify the HTML minimally so that it is likely to trigger the intended rule.
- Do not rewrite unrelated parts.
- Prefer one principal mutation.
- Keep valid HTML syntax.
- Return JSON only with this exact schema:
{{
  "expected_rule_id": "{rule_id}",
  "injection_script": "short human-readable patch description",
  "injected_html": "full modified html",
  "rationale": "brief explanation"
}}
"""
    return call_gpt_json(prompt)


def generate_injection(rule_md: str, html_source: str, rule_id: str, site_name: str) -> Dict:
    if client:
        return gpt_injector(rule_md, html_source, rule_id, site_name)
    return deterministic_injector(html_source, rule_id)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = []

    rule_files = list_rule_files()
    site_files = list_site_files()

    print(f"[INFO] Rules: {len(rule_files)}")
    print(f"[INFO] Sites: {len(site_files)}")

    for site_file in site_files:
        site_dir_name = site_file.parent.name
        site_html = read_text(site_file)

        for rule_file in rule_files:
            rule_md = read_text(rule_file)
            rule_id = extract_rule_id_from_md(rule_md, rule_file.name)

            combo_dir = OUT_DIR / safe_filename(site_dir_name) / safe_filename(rule_id)
            combo_dir.mkdir(parents=True, exist_ok=True)

            result = generate_injection(
                rule_md=rule_md,
                html_source=site_html,
                rule_id=rule_id,
                site_name=site_dir_name,
            )

            injection_script_path = combo_dir / "injection_script.txt"
            injected_html_path = combo_dir / "injected.html"
            meta_path = combo_dir / "meta.json"

            injection_script_path.write_text(result["injection_script"], encoding="utf-8")
            injected_html_path.write_text(result["injected_html"], encoding="utf-8")

            meta = {
                "site_name": site_dir_name,
                "source_path": str(site_file),
                "rule_md_path": str(rule_file),
                "rule": rule_id,
                "a11y_error": result["expected_rule_id"],
                "expected_rule_id": result["expected_rule_id"],
                "injection_script": result["injection_script"],
                "injection_script_path": str(injection_script_path),
                "injected_path": str(injected_html_path),
                "rationale": result["rationale"],
            }

            meta_path.write_text(json.dumps(meta, indent=2), encoding="utf-8")
            manifest.append(meta)

            print(f"[DONE] {site_dir_name} + {rule_id}")

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"[DONE] Manifest: {MANIFEST_PATH}")


if __name__ == "__main__":
    main()
