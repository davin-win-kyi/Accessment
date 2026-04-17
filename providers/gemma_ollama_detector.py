import os
from typing import Dict

import requests

from providers.base import BaseDetector
from utils import build_detection_prompt, extract_json_from_text


class GemmaOllamaDetector(BaseDetector):
    def __init__(self):
        model_name = os.getenv("GEMMA_OLLAMA_MODEL", "gemma4:e4b")
        super().__init__(model_name)
        self.base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")

    def detect(self, html: str) -> Dict:
        prompt = build_detection_prompt(html)

        response = requests.post(
            f"{self.base_url}/api/chat",
            json={
                "model": self.model_name,
                "messages": [
                    {"role": "user", "content": prompt}
                ],
                "stream": False,
                "format": {
                    "type": "object",
                    "properties": {
                        "detected_errors": {
                            "type": "array",
                            "items": {"type": "string"}
                        },
                        "reasoning": {"type": "string"}
                    },
                    "required": ["detected_errors", "reasoning"]
                }
            },
            timeout=300,
        )
        response.raise_for_status()

        data = response.json()
        raw_text = data["message"]["content"]
        parsed = extract_json_from_text(raw_text)
        parsed["_raw_text"] = raw_text
        return parsed