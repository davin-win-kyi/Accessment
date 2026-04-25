#!/usr/bin/env python3
import json
import os
import re
import subprocess
import tempfile
from pathlib import Path
from typing import Dict, List

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

DEQUE_DIR = Path("deque_md")
SITES_DIR = Path("site_sources")
OUT_DIR = Path("injected_sites")
MANIFEST_PATH = OUT_DIR / "generated_injections.json"

MAX_RULES = int(os.getenv("MAX_RULES", "30"))
MAX_SITES = int(os.getenv("MAX_SITES", "10"))
SOURCE_FILENAME = "source.html"

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-5")
OPENAI_TIMEOUT = float(os.getenv("OPENAI_TIMEOUT", "300"))

if not OPENAI_API_KEY:
    raise RuntimeError("OPENAI_API_KEY is required.")

client = OpenAI(api_key=OPENAI_API_KEY, timeout=OPENAI_TIMEOUT)

SYSTEM_PROMPT = """
You generate JavaScript that mutates an existing HTML document to inject a specific accessibility defect.

Return JSON only with this exact schema:
{
  "expected_rule_id": "string",
  "injection_script": "string containing executable JavaScript",
  "rationale": "brief explanation"
}

Rules:
- injection_script must be executable JavaScript.
- The script will run in a jsdom browser-like environment.
- Mutate document directly.
- Do not use markdown fences.
- Do not return a description; return actual JavaScript.
- Prefer one principal mutation, but make it strong enough to trigger the rule.
- If the rule requires multiple elements, create or modify enough elements to actually trigger the error.
- Do not fetch external resources.
- Do not use browser APIs unavailable in jsdom.
- Do not include text before or after the JSON.
""".strip()

MAX_ATTEMPTS_PER_COMBO = int(os.getenv("MAX_ATTEMPTS_PER_COMBO", "3"))


def combo_already_succeeded(combo_dir: Path) -> bool:
    return (
        (combo_dir / "source.html").exists()
        and (combo_dir / "meta.json").exists()
        and (combo_dir / "injection_script.js").exists()
    )


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def safe_filename(name: str) -> str:
    return re.sub(r"[^a-zA-Z0-9._-]+", "_", name).strip("_")


def list_rule_files() -> List[Path]:
    files = sorted([p for p in DEQUE_DIR.glob("*.md") if p.name != "rules.json"])
    return files[:MAX_RULES] if MAX_RULES > 0 else files


def list_site_files() -> List[Path]:
    files = sorted(SITES_DIR.glob(f"*/{SOURCE_FILENAME}"))
    return files[:MAX_SITES] if MAX_SITES > 0 else files


def extract_rule_id_from_md(md_text: str, fallback_name: str) -> str:
    match = re.search(r'"rule_id"\s*:\s*"([^"]+)"', md_text)
    return match.group(1) if match else fallback_name.replace(".md", "")


def extract_json_from_text(text: str) -> dict:
    text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        bare = re.search(r"(\{.*\})", text, re.DOTALL)
        if bare:
            return json.loads(bare.group(1))
        raise ValueError(f"Could not extract valid JSON from model output:\n{text}")


def build_user_prompt(rule_md: str, html_source: str, rule_id: str, site_name: str) -> str:
    return f"""
Rule ID:
{rule_id}

Site name:
{site_name}

Rule documentation:
{rule_md}

HTML source:
{html_source}
""".strip()


def call_gpt_json(system_prompt: str, user_prompt: str, site_name: str, rule_id: str) -> dict:
    print(f"[CALL] model={OPENAI_MODEL} | site={site_name} | rule={rule_id}")

    response = client.responses.create(
        model=OPENAI_MODEL,
        input=[
            {"role": "system", "content": [{"type": "input_text", "text": system_prompt}]},
            {"role": "user", "content": [{"type": "input_text", "text": user_prompt}]},
        ],
    )

    print(f"[RETURN] model={OPENAI_MODEL} | site={site_name} | rule={rule_id}")
    return extract_json_from_text(response.output_text)


def gpt_injection_script_generator(
    rule_md: str,
    html_source: str,
    rule_id: str,
    site_name: str,
) -> Dict:
    user_prompt = build_user_prompt(
        rule_md=rule_md,
        html_source=html_source,
        rule_id=rule_id,
        site_name=site_name,
    )

    return call_gpt_json(
        system_prompt=SYSTEM_PROMPT,
        user_prompt=user_prompt,
        site_name=site_name,
        rule_id=rule_id,
    )


def inject_js_into_html(html_source: str, injection_script: str) -> str:
    runner_code = r"""
const fs = require("fs");
const { JSDOM } = require("jsdom");

const htmlPath = process.argv[2];
const jsPath = process.argv[3];

const html = fs.readFileSync(htmlPath, "utf8");
const injectionScript = fs.readFileSync(jsPath, "utf8");

const dom = new JSDOM(html, {
  runScripts: "outside-only",
  resources: "usable",
  pretendToBeVisual: true
});

const window = dom.window;
const document = window.document;

try {
  const fn = new window.Function("window", "document", injectionScript);
  fn(window, document);

  console.log(dom.serialize());
} catch (err) {
  console.error("Injection script failed.");
  console.error("Error name:", err.name);
  console.error("Error message:", err.message);
  console.error("Stack:", err.stack);
  console.error("\n--- Injection script ---\n");
  console.error(injectionScript);
  process.exit(1);
}
"""

    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)
        html_path = tmpdir / "source.html"
        js_path = tmpdir / "inject.js"
        runner_path = tmpdir / "runner.js"

        html_path.write_text(html_source, encoding="utf-8")
        js_path.write_text(injection_script, encoding="utf-8")
        runner_path.write_text(runner_code, encoding="utf-8")

        result = subprocess.run(
            ["node", str(runner_path), str(html_path), str(js_path)],
            capture_output=True,
            text=True,
            cwd=Path.cwd(),
        )

        if result.returncode != 0:
            raise RuntimeError(
                "Node/jsdom injection failed.\n\n"
                f"STDOUT:\n{result.stdout}\n\n"
                f"STDERR:\n{result.stderr}"
            )

        return result.stdout

def write_manifest(manifest: List[Dict]) -> None:
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2), encoding="utf-8")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest: List[Dict] = []

    rule_files = list_rule_files()
    site_files = list_site_files()

    for site_file in site_files:
        site_dir_name = site_file.parent.name
        site_html = read_text(site_file)

        for rule_file in rule_files:
            rule_md = read_text(rule_file)
            rule_id = extract_rule_id_from_md(rule_md, rule_file.name)

            combo_dir = OUT_DIR / safe_filename(site_dir_name) / safe_filename(rule_id)
            combo_dir.mkdir(parents=True, exist_ok=True)

            if combo_already_succeeded(combo_dir):
                print(f"[SKIP] already succeeded | site={site_dir_name} | rule={rule_id}")
                continue

            last_error = None
            result = None
            injection_script = None
            injected_html = None

            for attempt in range(1, MAX_ATTEMPTS_PER_COMBO + 1):
                try:
                    print(
                        f"[ATTEMPT {attempt}/{MAX_ATTEMPTS_PER_COMBO}] "
                        f"site={site_dir_name} | rule={rule_id}"
                    )

                    result = gpt_injection_script_generator(
                        rule_md=rule_md,
                        html_source=site_html,
                        rule_id=rule_id,
                        site_name=site_dir_name,
                    )

                    injection_script = result["injection_script"]
                    injected_html = inject_js_into_html(site_html, injection_script)

                    print(
                        f"[SUCCESS] attempt={attempt} | "
                        f"site={site_dir_name} | rule={rule_id}"
                    )
                    break

                except Exception as e:
                    last_error = e
                    print(
                        f"[RETRY FAILED] attempt={attempt} | "
                        f"site={site_dir_name} | rule={rule_id} | error={e}"
                    )

            if result is None or injection_script is None or injected_html is None:
                print(
                    f"[FAILED FINAL] site={site_dir_name} | rule={rule_id} | "
                    f"error={last_error}"
                )
                continue

            injection_script_path = combo_dir / "injection_script.js"
            injected_source_path = combo_dir / "source.html"
            meta_path = combo_dir / "meta.json"

            injection_script_path.write_text(injection_script, encoding="utf-8")
            injected_source_path.write_text(injected_html, encoding="utf-8")

            meta = {
                "site_name": site_dir_name,
                "source_path": str(site_file),
                "injected_source_path": str(injected_source_path),
                "rule_md_path": str(rule_file),
                "rule": rule_id,
                "a11y_error": result["expected_rule_id"],
                "expected_rule_id": result["expected_rule_id"],
                "injection_script_path": str(injection_script_path),
                "rationale": result["rationale"],
            }

            meta_path.write_text(json.dumps(meta, indent=2), encoding="utf-8")
            manifest.append(meta)
            write_manifest(manifest)

            print(f"[DONE] site={site_dir_name} | rule={rule_id}")

    write_manifest(manifest)
    print(f"[DONE] Manifest: {MANIFEST_PATH}")


if __name__ == "__main__":
    main()
