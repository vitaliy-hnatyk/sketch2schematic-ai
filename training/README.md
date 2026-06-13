# Circuit detector training

This directory contains a minimal Ultralytics workflow for training a circuit-symbol detector and exporting it to ONNX.

## Files

- `circuit-dataset.yaml` — dataset paths and class order.
- `train.py` — baseline training configuration.
- `export_onnx.py` — ONNX export and labels manifest generation.
- `requirements.txt` — Python dependencies.

## Workflow

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r training/requirements.txt
python training/train.py
python training/export_onnx.py
```

Copy the exported model to `public/models/circuit-yolo.onnx`.

Do not commit private datasets or model weights without confirming redistribution rights.
