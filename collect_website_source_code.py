#!/usr/bin/env python3
import json
import time
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright

OUT_DIR = Path("data/site_sources")

SITES = [
    "https://www.amazon.com/",
    "https://www.walmart.com/",
    "https://www.youtube.com/",
]

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/122.0.0.0 Safari/537.36"
)


def slug_from_url(url: str) -> str:
    parsed = urlparse(url)
    host = parsed.netloc.replace("www.", "")
    path = parsed.path.strip("/").replace("/", "_")
    return host if not path else f"{host}__{path}"


def save_text(path: Path, text: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent=USER_AGENT,
            viewport={"width": 1440, "height": 1200},
            java_script_enabled=True,
        )

        for url in SITES:
            slug = slug_from_url(url)
            site_dir = OUT_DIR / slug
            site_dir.mkdir(parents=True, exist_ok=True)

            page = context.new_page()
            metadata = {
                "url": url,
                "slug": slug,
                "timestamp_unix": time.time(),
                "status": None,
                "final_url": None,
                "title": None,
                "raw_response_path": None,
                "rendered_dom_path": None,
                "screenshot_path": None,
            }

            try:
                print(f"[INFO] Visiting {url}")
                response = page.goto(url, wait_until="domcontentloaded", timeout=60000)
                page.wait_for_timeout(5000)

                metadata["status"] = response.status if response else None
                metadata["final_url"] = page.url
                metadata["title"] = page.title()

                raw_html = None
                try:
                    if response:
                        raw_html = response.text()
                except Exception:
                    raw_html = None

                if raw_html:
                    raw_path = site_dir / "raw_response.html"
                    save_text(raw_path, raw_html)
                    metadata["raw_response_path"] = str(raw_path)

                rendered = page.content()
                rendered_path = site_dir / "source.html"
                save_text(rendered_path, rendered)
                metadata["rendered_dom_path"] = str(rendered_path)

                screenshot_path = site_dir / "page.png"
                page.screenshot(path=str(screenshot_path), full_page=True)
                metadata["screenshot_path"] = str(screenshot_path)

                (site_dir / "meta.json").write_text(
                    json.dumps(metadata, indent=2), encoding="utf-8"
                )

                print(f"[DONE] Saved {url} -> {site_dir}")

            except Exception as exc:
                metadata["error"] = str(exc)
                (site_dir / "meta.json").write_text(
                    json.dumps(metadata, indent=2), encoding="utf-8"
                )
                print(f"[WARN] Failed {url}: {exc}")

            finally:
                page.close()
                time.sleep(2)

        browser.close()


if __name__ == "__main__":
    main()
