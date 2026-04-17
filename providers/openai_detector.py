import os
from typing import Dict

from openai import OpenAI

from providers.base import BaseDetector
from utils import build_detection_prompt, extract_json_from_text


class OpenAIDetector(BaseDetector):
    def __init__(self):
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise RuntimeError("OPENAI_API_KEY must be set.")
        model_name = os.getenv("OPENAI_MODEL", "gpt-5")
        super().__init__(model_name)
        self.client = OpenAI(api_key=api_key)

    def detect(self, html: str) -> Dict:
        prompt = build_detection_prompt(html)

        response = self.client.responses.create(
            model=self.model_name,
            input=prompt,
            max_output_tokens=2000,
        )

        raw_text = response.output_text
        parsed = extract_json_from_text(raw_text)
        parsed["_raw_text"] = raw_text
        return parsed