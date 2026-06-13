# AI pipeline

## Pipeline stages

### 1. Input preparation

The input is decoded into RGBA pixels and mapped into the editor coordinate system. The detector uses letterbox resizing so the image aspect ratio is preserved.

### 2. YOLO/ONNX component detection

`src/ai/yoloOnnxDetector.js`:

- creates an ONNX Runtime session;
- prefers WebGPU;
- falls back to WASM;
- converts pixels to an NCHW float tensor;
- handles common YOLOv5/YOLOv8 output shapes;
- applies confidence filtering and non-maximum suppression.

The detector is optional because trained weights are not included.

### 3. Wire detection

OpenCV.js/WASM performs grayscale conversion, thresholding, edge detection, and probabilistic Hough line extraction. The fallback recognizers also recover axis-aligned wires from color masks, monochrome masks, printed IEC structures, and vector strokes.

### 4. OCR

Tesseract identifies text regions. The application associates nearby text with component references and values. OCR is deliberately separated from geometry so labels are not converted into wires.

### 5. Candidate merge

Detector output, wire output, OCR metadata, and fallback objects are deduplicated. AI detections normally take priority over low-confidence heuristic symbols.

### 6. Circuit graph reconstruction

The merged objects are snapped, normalized, split at intersections, assigned to component ports, and grouped into nets.

## Failure strategy

The pipeline should not silently invent a high-confidence component. Unsupported or ambiguous regions become `unknown` review objects. Users can retype these objects in the review panel.

## Adding another detector

A new detector should return objects compatible with `detectionToSchematic.js` or directly return the shared schematic object format. Keep detector-specific preprocessing outside the graph layer.
