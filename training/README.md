# Circuit detector training tools

This folder contains the scripts used to check a YOLO dataset, train a circuit-symbol detector, validate it, and export a browser-ready ONNX model.

## Quick workflow

Run all commands from the repository root.

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\Activate.ps1
python -m pip install -r training/requirements.txt

python training/check_dataset.py
python training/train.py --model yolo11n.pt --epochs 120 --imgsz 640 --batch 16
python training/validate.py
python training/export_onnx.py

npm install
npm run dev
```

## Files

- `circuit-dataset.yaml` — paths and class order.
- `check_dataset.py` — validates paths, labels, coordinates, and class counts.
- `train.py` — configurable Ultralytics training entry point.
- `validate.py` — evaluates `best.pt` on validation or test data.
- `export_onnx.py` — exports and installs `public/models/circuit-yolo.onnx` plus `labels.json`.
- `requirements.txt` — Python dependencies.

## npm shortcuts

```bash
npm run model:install
npm run model:check-data
npm run model:train
npm run model:validate
npm run model:export
```

The complete instructions are in [`docs/model-training.md`](../docs/model-training.md).
