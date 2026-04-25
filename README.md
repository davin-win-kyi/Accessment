# Accessment: Accessibility Benchmark Pipeline with LLM-Generated Faults

Accessment is a pipeline for **generating, injecting, and evaluating/detecting accessibility (a11y) issues in real-world webpages**.

It enables:
- Creating a dataset of **webpages with controlled accessibility defects**
- Evaluating **LLMs as accessibility issue detectors**
- Supporting future work on **fine-tuning / aligning models for accessibility**

---

## 🔧 Pipeline Overview

The pipeline consists of four main stages:

1. **Rule Collection**
   - Collect accessibility rules (e.g., Deque rules) as structured markdown.
   - Output: `data/deque_md/`

2. **Website Source Collection**
   - Scrape real-world websites and store raw HTML.
   - Output: `data/site_sources/`

3. **Injection Script Generation + Execution**
   - Use an LLM to generate **JavaScript injection scripts**
   - Scripts are executed via `jsdom` to mutate HTML and inject a11y defects
   - Output:
     - Mutated HTML: `data/injected_sites/<site>/<rule>/source.html`
     - Metadata: `generated_injections.json`

4. **LLM Detection Benchmark**
   - Evaluate whether LLMs can detect injected accessibility issues from HTML
   - Output: `data/llm_detection_results/`

---

## 📁 Repository Structure

```
.
├── environment.yml
├── requirements.txt
├── collect_deqeue_mds.py
├── collect_website_source_code.py
├── generate_injection_scripts.py
├── test_llm_error_detection.py

data/
├── deque_md/
├── site_sources/
├── injected_sites/
│   ├── <site>/<rule>/
│   │   ├── source.html
│   │   ├── injection_script.js
│   │   ├── meta.json
│   └── generated_injections.json
└── llm_detection_results/
```

---

## ⚙️ Setup

### Option 1: Conda Environment File

```
conda env create -f environment.yml
conda activate a11y-benchmark-gpt
playwright install chromium
```

### Option 2: Manual Setup

```
conda create -n a11y-benchmark-gpt python=3.10 -y
conda activate a11y-benchmark-gpt
pip install -r requirements.txt
playwright install chromium
```

### Install JS Dependencies (Required for Injection)

```
npm install jsdom
```

---

## 🔑 Environment Variables

```
export OPENAI_API_KEY="your_openai_api_key_here"
```

Optional:

```
export OPENAI_MODEL="gpt-5"
export MAX_RULES="10"
export MAX_SITES="0"
export MAX_ATTEMPTS_PER_COMBO="3"
```

---

## ▶️ Running the Pipeline

```
python collect_deqeue_mds.py
python collect_website_source_code.py
python generate_injection_scripts.py
python test_llm_error_detection.py
```

---

## 📊 Outputs

### Generated Data

- **Accessibility Rules**
  ```
  data/deque_md/
  ```

- **Website HTML Sources**
  ```
  data/site_sources/
  ```

- **Injected Accessibility Faults**
  ```
  data/injected_sites/
  ├── <site>/<rule>/
  │   ├── source.html              # mutated HTML with injected error
  │   ├── injection_script.js      # LLM-generated JS
  │   ├── meta.json
  └── generated_injections.json
  ```

- **Detection Benchmark Results**
  ```
  data/llm_detection_results/
  ```

---

## 🧠 Key Design Choices

### 1. LLM-Generated Injection Scripts
Instead of static rule-based mutations, Accessment uses an LLM to:
- Understand the rule
- Generate **minimal but realistic DOM mutations**
- Adapt to different website structures

### 2. jsdom-Based Execution
Injection scripts are executed using `jsdom` to:
- Simulate a browser DOM
- Apply mutations programmatically
- Serialize the modified HTML

### 3. Retry Mechanism
Injection failures (e.g., syntax errors, invalid DOM operations) are automatically retried:
- Helps mitigate unstable LLM outputs
- Improves dataset coverage

---

## ⚠️ Known Issues / Failure Modes

- **LLM-generated JS may be invalid**
  - e.g., `SyntaxError: Unexpected end of input`
- **DOM assumptions may fail**
  - `querySelector(...)` returns `null`
- **jsdom limitations**
  - Some browser APIs are unsupported
- **Module resolution issues**
  - Ensure `jsdom` is installed and accessible

---

## 🧪 Evaluation Notes

- `test_llm_error_detection.py` requires `OPENAI_API_KEY`
- Detection operates **purely on HTML (no rendering)**
- Output format is typically JSON:
  ```
  {
    "detected_errors": ["..."],
    "reasoning": "..."
  }
  ```

---

## 🚀 Future Improvements

- Add **axe-core validation** before benchmarking
- Improve injection robustness (multi-step mutations)
- Add **visual + DOM hybrid evaluation**
- Expand dataset:
  - LLM-generated sites
  - Generative platforms (e.g., Lovable)
- Use dataset for **SFT / alignment training**

---

## 📌 Summary

Accessment provides a reproducible pipeline to:
- Generate **realistic accessibility defects**
- Build **structured a11y datasets**
- Evaluate and improve **LLM accessibility reasoning**