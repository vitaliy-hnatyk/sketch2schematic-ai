# Model training

## Dataset layout

Use a YOLO-format dataset:

```text
dataset/
├── images/
│   ├── train/
│   ├── val/
│   └── test/
└── labels/
    ├── train/
    ├── val/
    └── test/
```

Update `training/circuit-dataset.yaml` with the dataset path and class list.

## Install Python dependencies

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r training/requirements.txt
```

On Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

## Train

```bash
python training/train.py
```

Training output is written under `runs/circuit/`.

## Export ONNX

```bash
python training/export_onnx.py
```

Copy the exported model to:

```text
public/models/circuit-yolo.onnx
```

The export script also regenerates `public/models/labels.json`.

## Dataset guidance

Include variation in:

- IEC and ANSI symbol styles;
- scan quality and compression;
- color and monochrome diagrams;
- rotation and scale;
- handwritten and printed symbols;
- labels touching or overlapping symbols;
- connected wires and open terminals.

Keep a test set with diagrams that are not synthetic variants of training images.
