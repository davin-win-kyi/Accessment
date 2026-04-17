from abc import ABC, abstractmethod
from typing import Dict


class BaseDetector(ABC):
    def __init__(self, model_name: str):
        self.model_name = model_name

    @abstractmethod
    def detect(self, html: str) -> Dict:
        pass