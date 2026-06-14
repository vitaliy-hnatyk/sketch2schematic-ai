# Getting started

## Prerequisites

- Node.js 20+
- npm 10+
- Git
- A modern browser

WebGPU is optional. ONNX Runtime Web falls back to WebAssembly when WebGPU is unavailable.

## Install

```bash
git clone <repository-url>
cd sketch2schematic-ai
npm install
npm run dev
```

## First run

1. Open the Vite URL.
2. Load one of the included sample diagrams or upload an image.
3. Choose recognition modules in the recognition panel.
4. Press **Analyze and convert**.
5. Review uncertain objects.
6. Correct types, references, values, and connections.
7. Export SVG/PNG or save the project JSON.

## Running without a trained model

The application works without `circuit-yolo.onnx`, but only heuristic recognizers, OpenCV wire detection, and OCR are available. Complex symbols may require manual review.

## Add a model

Copy the files below and restart the development server:

```text
public/models/circuit-yolo.onnx
public/models/labels.json
```

The labels manifest must match the model output class order. See [Model contract](model-contract.md).

## Train a detector

The repository includes commands for dataset validation, training, evaluation, and ONNX export:

```bash
npm run model:check-data
npm run model:train
npm run model:validate
npm run model:export
```

See [Train and deploy the circuit-symbol model](model-training.md).
