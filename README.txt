A11Y benchmark pipeline with GPT

Files:
- environment.yml
- requirements.txt
- collect_deqeue_mds.py
- collect_website_source_code.py
- generate_injection_scripts.py
- test_llm_error_detection.py

SETUP OPTION 1: environment.yml
1. conda env create -f environment.yml
2. conda activate a11y-benchmark-gpt
3. playwright install chromium

SETUP OPTION 2: conda + requirements.txt
1. conda create -n a11y-benchmark-gpt python=3.10 -y
2. conda activate a11y-benchmark-gpt
3. pip install -r requirements.txt
4. playwright install chromium

SET OPENAI API KEY
macOS / Linux:
export OPENAI_API_KEY="your_openai_api_key_here"

Optional:
export OPENAI_MODEL="gpt-5"
export MAX_RULES="10"
export MAX_SITES="0"

RUN
python collect_deqeue_mds.py
python collect_website_source_code.py
python generate_injection_scripts.py
python test_llm_error_detection.py

OUTPUTS
- data/deque_md/
- data/site_sources/
- data/injected_sites/generated_injections.json
- data/llm_detection_results/llm_detection_results.json

NOTES
- generate_injection_scripts.py falls back to a deterministic injector if OPENAI_API_KEY is not set.
- test_llm_error_detection.py requires OPENAI_API_KEY.
- For stronger evaluation, add an axe-core validation step before benchmarking detection.
