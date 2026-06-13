# Project structure

## Source modules

### `src/ai`

Browser AI integration:

- `aiPipeline.js` orchestrates detection, wire extraction, OCR, and graph cleanup.
- `yoloOnnxDetector.js` performs preprocessing, session creation, inference, output parsing, and NMS.
- `openCvWireDetector.js` performs image processing and line extraction.
- `ocrService.js` owns the lazy Tesseract worker and text assignment.
- `detectionToSchematic.js` converts detector boxes into schematic objects.
- `modelManifest.js` validates class labels and model settings.

### `src/components`

React UI and PixiJS editor components. `SchematicPixi.jsx` owns the interactive WebGL canvas.

### `src/utils`

Core domain logic:

- symbol definitions and IEC geometry;
- vector, color, monochrome, and structured-IEC recognizers;
- graph cleanup, snapping, terminal reconstruction, and wire merging;
- image coordinate mapping;
- exports and project serialization.

### `src/workers`

Background recognition worker. Image processing runs outside the main React thread.

### `training`

Ultralytics scripts and dataset configuration for producing a circuit-symbol ONNX detector.

### `wasm-core`

Portable low-level line-detection source and build helper.

## Generated directories

- `node_modules/` is created by npm and is ignored.
- `dist/` is created by `npm run build` and is ignored.
- `tmp/test-output/` is created by regression tests and is ignored.
- `runs/` is produced by model training and is ignored.
