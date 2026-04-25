import os
from typing import Dict

import requests

from providers.base import BaseDetector
from utils import build_detection_prompts, extract_json_from_text


class QwenOllamaDetector(BaseDetector):
    def __init__(self):
        model_name = os.getenv("QWEN_OLLAMA_MODEL", "qwen3:8b")
        super().__init__(model_name)
        self.base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")

    def detect(self, html: str) -> Dict:
        system_prompt, user_prompt = build_detection_prompts(html)

        response = requests.post(
            f"{self.base_url}/api/chat",
            json={
                "model": self.model_name,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
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
        )
        response.raise_for_status()

        data = response.json()
        raw_text = data["message"]["content"]
        parsed = extract_json_from_text(raw_text)
        parsed["_raw_text"] = raw_text
        return parsed
