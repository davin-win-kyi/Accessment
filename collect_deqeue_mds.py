#!/usr/bin/env python3
import json
import re
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md

BASE_DOMAIN = "https://dequeuniversity.com"
INDEX_URL = "https://dequeuniversity.com/rules/axe/4.2"
OUT_DIR = Path("data/deque_md")
INDEX_JSON = OUT_DIR / "rules.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; A11yBenchmarkBot/1.0)"
}

SESSION = requests.Session()
SESSION.headers.update(HEADERS)


def safe_filename(name: str) -> str:
    return re.sub(r"[^a-zA-Z0-9._-]+", "_", name).strip("_")


def fetch(url: str) -> str:
    response = SESSION.get(url, timeout=30)
    response.raise_for_status()
    return response.text


def extract_rule_links(index_html: str):
    soup = BeautifulSoup(index_html, "lxml")
    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        abs_url = urljoin(BASE_DOMAIN, href)
        parsed = urlparse(abs_url)

        if parsed.netloc != urlparse(BASE_DOMAIN).netloc:
            continue

        match = re.match(r"^https://dequeuniversity\.com/rules/axe/4\.2/([^/?#]+)$", abs_url)
        if match:
            rule_id = match.group(1)
            links.append((rule_id, abs_url))

    seen = set()
    deduped = []
    for rule_id, url in links:
        if rule_id not in seen:
            seen.add(rule_id)
            deduped.append((rule_id, url))
    return deduped


def page_title(soup: BeautifulSoup) -> str:
    h1 = soup.find("h1")
    if h1:
        return h1.get_text(" ", strip=True)
    if soup.title:
        return soup.title.get_text(" ", strip=True)
    return "Untitled Rule"


def extract_metadata(soup: BeautifulSoup):
    text = soup.get_text("\n", strip=True)
    metadata = {
        "impact": None,
        "wcag": [],
    }

    impact_match = re.search(r"\b(critical|serious|moderate|minor)\b", text, re.IGNORECASE)
    if impact_match:
        metadata["impact"] = impact_match.group(1).lower()

    wcag_matches = re.findall(r"\bWCAG\s*[\d.]+\b|\b\d\.\d\.\d\b", text, re.IGNORECASE)
    if wcag_matches:
        metadata["wcag"] = sorted(set(wcag_matches))

    return metadata


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"[INFO] Fetching index: {INDEX_URL}")
    index_html = fetch(INDEX_URL)
    links = extract_rule_links(index_html)
    print(f"[INFO] Found {len(links)} rule pages")

    all_rules = []

    for i, (rule_id, rule_url) in enumerate(links, start=1):
        try:
            print(f"[{i}/{len(links)}] {rule_id}")
            html = fetch(rule_url)
            soup = BeautifulSoup(html, "lxml")

            title = page_title(soup)
            metadata = extract_metadata(soup)

            main = soup.find("main") or soup.find("article") or soup.body
            main_html = str(main) if main else html
            markdown = md(main_html, heading_style="ATX")

            out_path = OUT_DIR / f"{safe_filename(rule_id)}.md"
            with out_path.open("w", encoding="utf-8") as f:
                f.write("---\n")
                f.write(json.dumps({
                    "rule_id": rule_id,
                    "title": title,
                    "source_url": rule_url,
                    "version": "axe-html-4.2",
                    "impact": metadata["impact"],
                    "wcag": metadata["wcag"],
                }, indent=2))
                f.write("\n---\n\n")
                f.write(f"# {title}\n\n")
                f.write(f"Source: {rule_url}\n\n")
                f.write(markdown)

            all_rules.append({
                "rule_id": rule_id,
                "title": title,
                "url": rule_url,
                "path": str(out_path),
                **metadata,
            })

            time.sleep(1.0)

        except Exception as exc:
            print(f"[WARN] Failed {rule_id}: {exc}")

    with INDEX_JSON.open("w", encoding="utf-8") as f:
        json.dump(all_rules, f, indent=2)

    print(f"[DONE] Wrote {len(all_rules)} markdown files to {OUT_DIR}")
    print(f"[DONE] Index JSON: {INDEX_JSON}")


if __name__ == "__main__":
    main()
