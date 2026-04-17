from providers.openai_detector import OpenAIDetector
from providers.gemma_ollama_detector import GemmaOllamaDetector
from providers.qwen_ollama_detector import QwenOllamaDetector


def get_detector(provider_name: str):
    provider_name = provider_name.strip().lower()

    if provider_name == "openai":
        return OpenAIDetector()
    if provider_name == "gemma":
        return GemmaOllamaDetector()
    if provider_name == "qwen":
        return QwenOllamaDetector()

    raise ValueError(f"Unsupported provider: {provider_name}")