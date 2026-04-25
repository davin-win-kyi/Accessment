import os
from typing import Dict

from openai import OpenAI

from providers.base import BaseDetector
from utils import build_detection_prompts, extract_json_from_text


class OpenAIDetector(BaseDetector):
    def __init__(self):
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise RuntimeError("OPENAI_API_KEY must be set.")

        model_name = os.getenv("OPENAI_MODEL", "gpt-5")
        super().__init__(model_name)
        self.client = OpenAI(api_key=api_key)

    def detect(self, html: str) -> Dict:
        system_prompt, user_prompt = build_detection_prompts(html)

        response = self.client.responses.create(
            model=self.model_name,
            input=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "input_text",
                            "text": system_prompt,
                        }
                    ],
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "input_text",
                            "text": user_prompt,
                        }
                    ],
                },
            ],
        )

        raw_text = response.output_text
        parsed = extract_json_from_text(raw_text)
        parsed["_raw_text"] = raw_text
        return parsed