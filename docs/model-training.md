# Train and deploy the circuit-symbol model

This guide covers the complete path from a folder of annotated circuit images to a browser-ready `circuit-yolo.onnx` model.

The application uses object detection for symbol bodies and separate stages for wires, text, and circuit-graph reconstruction. Train YOLO to detect the **component body**, not the long wires connected to it.

## 1. Prerequisites

### Application runtime

- Node.js 20 or newer
- npm 10 or newer

### Training environment

- Python 3 with `venv`
- A supported PyTorch device:
  - NVIDIA CUDA GPU for the fastest training;
  - Apple `mps` where supported;
  - CPU for small tests and debugging.

A GPU is optional. Start with a small model and a small dataset sanity run before committing to a long training job.

## 2. Run the application without a trained model

From the repository root:

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Without `public/models/circuit-yolo.onnx`, the application uses the bundled heuristic/WASM recognizer and the optional OpenCV/OCR stages.

Production build:

```bash
npm run build
npm run serve:dist
```

## 3. Create the Python environment

### Linux and macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r training/requirements.txt
```

### Windows PowerShell

```powershell
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r training/requirements.txt
```

You can also install the training dependencies through the npm shortcut:

```bash
npm run model:install
```

## 4. Prepare the dataset

Use this directory layout:

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

Each image must have a matching `.txt` file with the same relative path and filename stem:

```text
dataset/images/train/example-001.png
dataset/labels/train/example-001.txt
```

A label row uses normalized YOLO detection coordinates:

```text
class_id x_center y_center width height
```

Example:

```text
0 0.412500 0.385000 0.125000 0.070000
1 0.678000 0.512000 0.044000 0.138000
```

All four box values are relative to image width or height and must be between `0` and `1`.

### Class order

The default class order is defined in `training/circuit-dataset.yaml`:

| ID | Class |
|---:|---|
| 0 | resistor |
| 1 | capacitor |
| 2 | battery |
| 3 | fuse |
| 4 | diode |
| 5 | zener |
| 6 | led |
| 7 | scr |
| 8 | switch |
| 9 | lamp |
| 10 | ground |
| 11 | source |
| 12 | junction |
| 13 | terminal |
| 14 | text |

Do not reorder this list after annotation has started unless you also update every annotation file.

### Annotation rules

Use a tight box around the visible symbol body:

- include the complete resistor, capacitor plates, diode body, or SCR gate;
- exclude long connected wires;
- exclude nearby reference/value text unless the class is `text`;
- annotate every visible target symbol, including small or rotated examples;
- use one consistent rule for junction dots and terminals;
- do not annotate a whole subcircuit as one object.

### Split the data correctly

Split by **source diagram**, not by random crops from the same diagram. Otherwise nearly identical pieces of one schematic can appear in both training and validation, producing misleading validation scores.

A practical starting split is:

```text
train: 70–80%
val:   10–20%
test:  10–15%
```

Keep the test set untouched until model selection is complete.

## 5. Check the dataset before training

```bash
npm run model:check-data
```

Equivalent command:

```bash
python training/check_dataset.py --data training/circuit-dataset.yaml
```

The checker validates:

- dataset paths;
- train and validation image counts;
- matching YOLO label syntax;
- contiguous class IDs;
- normalized box coordinates;
- per-class object counts.

To treat missing label files as errors:

```bash
python training/check_dataset.py --strict
```

A missing label can intentionally represent a background image when strict mode is disabled.

## 6. First sanity training run

Before a long run, verify the pipeline with a small experiment:

```bash
python training/train.py \
  --model yolo11n.pt \
  --epochs 3 \
  --imgsz 640 \
  --batch 4 \
  --device cpu \
  --name sanity-check
```

On Windows PowerShell, write the command on one line or use PowerShell backticks instead of backslashes.

The run should:

- find the dataset;
- load annotations without errors;
- produce loss values;
- create `runs/circuit/sanity-check/`;
- save preview plots and checkpoints.

## 7. Train the model

### NVIDIA GPU

```bash
python training/train.py \
  --model yolo11n.pt \
  --epochs 120 \
  --imgsz 640 \
  --batch 16 \
  --device 0
```

### Apple Silicon

```bash
python training/train.py --model yolo11n.pt --epochs 120 --imgsz 640 --batch 8 --device mps
```

### CPU

```bash
python training/train.py --model yolo11n.pt --epochs 30 --imgsz 640 --batch 4 --device cpu
```

The default output is:

```text
runs/circuit/yolo-circuit/
├── args.yaml
├── results.csv
├── results.png
└── weights/
    ├── best.pt
    └── last.pt
```

Useful options:

```text
--model       starting checkpoint, for example yolo11n.pt
--epochs      maximum training epochs
--imgsz       square training size
--batch       batch size; lower it if memory is exhausted
--workers     data-loader worker count
--device      0, 0,1, cpu, or mps
--patience    early-stopping patience
--cache       cache images when sufficient RAM is available
--name        output run name
```

Resume training from a checkpoint:

```bash
python training/train.py --resume runs/circuit/yolo-circuit/weights/last.pt
```

## 8. Validate the trained weights

Validation split:

```bash
npm run model:validate
```

Or explicitly:

```bash
python training/validate.py \
  --weights runs/circuit/yolo-circuit/weights/best.pt \
  --data training/circuit-dataset.yaml \
  --split val \
  --imgsz 640
```

Final test split:

```bash
python training/validate.py --split test
```

Review more than one aggregate metric. Inspect:

- precision and recall;
- mAP at IoU 0.50;
- mAP across IoU 0.50–0.95;
- the confusion matrix;
- per-class metrics;
- visual prediction batches;
- failure cases on complete schematics.

For this project, class confusion between `capacitor`, `diode`, `zener`, and `scr` is especially important.

## 9. Export the model to ONNX

```bash
npm run model:export
```

Equivalent command:

```bash
python training/export_onnx.py \
  --weights runs/circuit/yolo-circuit/weights/best.pt \
  --imgsz 640
```

The export script:

1. exports a fixed-size, FP32, no-NMS ONNX detector;
2. copies it to `public/models/circuit-yolo.onnx`;
3. writes class order to `public/models/labels.json`;
4. runs the ONNX structural checker.

Expected files:

```text
public/models/circuit-yolo.onnx
public/models/labels.json
```

The browser parser expects common raw YOLO detection output. If a newer exporter changes the output tensor layout, update `src/ai/yoloOnnxDetector.js` and add a parser regression test.

## 10. Run the browser with the model

Restart the Vite server after exporting:

```bash
npm run dev
```

In the AI recognition panel:

1. enable YOLO/ONNX detection;
2. keep the default model URL or select the `.onnx` and `labels.json` files manually;
3. start with confidence `0.35`;
4. use **Fast** mode first;
5. keep OCR off while testing component detection;
6. analyze a schematic and inspect the provider shown in the status bar.

Possible providers:

```text
YOLO/WEBGPU
YOLO/WASM
```

WebGPU is preferred for compute-intensive models when available. WASM is the fallback.

## 11. Improve a weak model

Do not immediately increase epochs. First identify the failure category.

### Wrong class

- add more examples of both the confused class and its visual neighbor;
- inspect annotation consistency;
- include difficult IEC/ANSI variants;
- add hard negatives such as text and junctions near symbol bodies.

### Missed small components

- add small-symbol examples;
- increase `imgsz` carefully;
- crop large sheets into overlapping training tiles while keeping source-diagram splits separate;
- avoid boxes that include excessive empty wire area.

### Duplicate detections

- inspect overlapping or inconsistent boxes;
- adjust browser NMS IoU only after checking training labels;
- verify the model was exported without embedded NMS.

### Good validation but poor real images

- the dataset may not represent scans, screenshots, compression, blur, colors, or drawing styles used in production;
- check for train/validation leakage;
- evaluate full diagrams rather than only clean symbol crops.

## 12. Recommended iteration loop

```text
collect failures
    ↓
correct or add annotations
    ↓
check dataset
    ↓
short sanity run
    ↓
full training
    ↓
validate and inspect confusion
    ↓
export ONNX
    ↓
test in browser on complete schematics
```

Store model version, class list, dataset revision, training arguments, and evaluation results together. Do not replace a deployed model without keeping the previous working version.

## 13. Troubleshooting

### `Dataset YAML not found`

Run commands from the repository root, or pass an explicit `--data` path.

### No training images found

Check the `path`, `train`, and `val` entries in `training/circuit-dataset.yaml`.

### CUDA out of memory

Lower `--batch`, then lower `--imgsz`, or use the nano checkpoint.

### Model file loads but detections are nonsense

Confirm `public/models/labels.json` has the exact same class order as the trained weights.

### Unsupported YOLO output shape

The exported ONNX tensor layout is not supported by the current browser decoder. Export with fixed dimensions and `nms=False`, or update the decoder.

### Browser falls back to WASM

WebGPU may be unavailable, disabled, or unable to compile an operation in the model. The application intentionally falls back to ONNX Runtime WebAssembly.

### First inference is slow

The browser must download, compile, and initialize the ONNX runtime and model. Repeat inference should be faster because the worker and session are reused.

## 14. Official references

- [Ultralytics train mode](https://docs.ultralytics.com/modes/train/)
- [Ultralytics detection dataset format](https://docs.ultralytics.com/datasets/detect/)
- [Ultralytics export mode](https://docs.ultralytics.com/modes/export/)
- [ONNX Runtime Web](https://onnxruntime.ai/docs/get-started/with-javascript/web.html)
- [ONNX Runtime WebGPU execution provider](https://onnxruntime.ai/docs/tutorials/web/ep-webgpu.html)
