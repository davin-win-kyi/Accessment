#!/usr/bin/env python3
import os
from dataclasses import dataclass

import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from peft import LoraConfig
from trl import SFTTrainer


@dataclass
class Config:
    # Base model
    model_name: str = "Qwen/Qwen3-4B-Instruct-2507"

    # Input dataset: JSON or JSONL with objects like:
    # {"input": "...", "output": "..."}
    train_file: str = "sft_repair_dataset/repair_sft_dataset_minimal.jsonl"

    # Output directory for adapters/checkpoints
    output_dir: str = "qwen4b_a11y_qlora"

    # Sequence / batching
    max_seq_length: int = 4096
    per_device_train_batch_size: int = 1
    gradient_accumulation_steps: int = 8

    # Training
    num_train_epochs: int = 3
    learning_rate: float = 2e-4
    warmup_ratio: float = 0.03
    logging_steps: int = 10
    save_steps: int = 100

    # LoRA
    lora_r: int = 16
    lora_alpha: int = 32
    lora_dropout: float = 0.05

    # Misc
    use_bf16: bool = torch.cuda.is_available() and torch.cuda.is_bf16_supported()
    seed: int = 42


CFG = Config()


def build_messages(example: dict) -> list[dict]:
    """
    Convert {"input": ..., "output": ...} into chat messages.
    """
    return [
        {"role": "user", "content": example["input"]},
        {"role": "assistant", "content": example["output"]},
    ]


def format_example(example: dict, tokenizer) -> dict:
    """
    Apply the model's chat template.
    We do NOT add a generation prompt during training.
    """
    messages = build_messages(example)
    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=False,
    )
    return {"text": text}


def main():
    os.makedirs(CFG.output_dir, exist_ok=True)

    # -------------------------
    # Load dataset
    # -------------------------
    dataset = load_dataset(
        "json",
        data_files={"train": CFG.train_file},
    )["train"]

    # -------------------------
    # Tokenizer
    # -------------------------
    tokenizer = AutoTokenizer.from_pretrained(
        CFG.model_name,
        use_fast=True,
    )

    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # Format all rows into a single training text field.
    original_columns = dataset.column_names
    dataset = dataset.map(
        lambda ex: format_example(ex, tokenizer),
        remove_columns=original_columns,
        desc="Applying chat template",
    )

    # -------------------------
    # QLoRA 4-bit config
    # -------------------------
    compute_dtype = torch.bfloat16 if CFG.use_bf16 else torch.float16

    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_use_double_quant=True,
        bnb_4bit_compute_dtype=compute_dtype,
    )

    # -------------------------
    # Load model
    # -------------------------
    model = AutoModelForCausalLM.from_pretrained(
        CFG.model_name,
        quantization_config=bnb_config,
        device_map="auto",
    )

    model.config.use_cache = False

    # -------------------------
    # LoRA config
    # -------------------------
    peft_config = LoraConfig(
        r=CFG.lora_r,
        lora_alpha=CFG.lora_alpha,
        lora_dropout=CFG.lora_dropout,
        bias="none",
        task_type="CAUSAL_LM",
        target_modules="all-linear",
    )

    # -------------------------
    # Training args
    # -------------------------
    training_args = TrainingArguments(
        output_dir=CFG.output_dir,
        overwrite_output_dir=True,
        per_device_train_batch_size=CFG.per_device_train_batch_size,
        gradient_accumulation_steps=CFG.gradient_accumulation_steps,
        num_train_epochs=CFG.num_train_epochs,
        learning_rate=CFG.learning_rate,
        warmup_ratio=CFG.warmup_ratio,
        logging_steps=CFG.logging_steps,
        save_steps=CFG.save_steps,
        save_total_limit=2,
        bf16=CFG.use_bf16,
        fp16=not CFG.use_bf16,
        optim="paged_adamw_8bit",
        lr_scheduler_type="cosine",
        report_to="none",
        seed=CFG.seed,
    )

    # -------------------------
    # Trainer
    # -------------------------
    trainer = SFTTrainer(
        model=model,
        train_dataset=dataset,
        args=training_args,
        peft_config=peft_config,
    )

    trainer.train()

    # Save LoRA adapter + tokenizer
    trainer.model.save_pretrained(CFG.output_dir)
    tokenizer.save_pretrained(CFG.output_dir)

    print(f"[DONE] Saved adapter and tokenizer to: {CFG.output_dir}")


if __name__ == "__main__":
    main()