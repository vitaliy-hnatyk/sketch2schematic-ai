# AI recognition architecture

## Browser modules

### `src/ai/yoloOnnxDetector.js`
- letterbox preprocessing
- NCHW float tensor creation
- WebGPU-first ONNX Runtime session
- WASM fallback
- YOLOv5/v8-style output parsing
- NMS

### `src/ai/openCvWireDetector.js`
- OpenCV.js WASM initialization
- grayscale and adaptive threshold
- Canny edge detection
- probabilistic Hough transform
- axis filtering and line merging

### `src/ai/ocrService.js`
- lazy Tesseract worker
- local English traineddata
- sparse-text OCR
- nearest-component assignment for reference/value metadata

### `src/ai/aiPipeline.js`
- combines fallback recognition, YOLO symbols, OpenCV wires and OCR
- sends the merged result into the existing graph cleanup

### `src/utils/recognizer.js`
- ports and terminal normalization
- wire merging
- snapping
- junction reconstruction

### `src/components/SchematicPixi.jsx`
- PixiJS/WebGL rendering
- connected component movement
- pan and zoom
- editable ports and wires
