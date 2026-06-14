# Model training quick start

The complete guide is available at [docs/model-training.md](docs/model-training.md).

```bash
# 1. Install training dependencies
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\Activate.ps1
python -m pip install -r training/requirements.txt

# 2. Put YOLO-format data under dataset/
# 3. Validate the dataset
npm run model:check-data

# 4. Train and validate
npm run model:train
npm run model:validate

# 5. Export directly into public/models/
npm run model:export

# 6. Run the browser application
npm install
npm run dev
```

The exported browser files are:

```text
public/models/circuit-yolo.onnx
public/models/labels.json
```
