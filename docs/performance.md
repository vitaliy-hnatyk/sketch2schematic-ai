# Performance and recognition speed

## Why OpenCV can feel slow

OpenCV.js is a large WebAssembly runtime. Even when it runs in a Web Worker, the browser still has to download, compile, initialize, and execute the module. The worker keeps React and PixiJS responsive, but it does not make the OpenCV algorithm itself free.

The slowest OpenCV path is:

```text
OpenCV WASM load → grayscale → blur → threshold → Canny → HoughLinesP → merge lines
```

For simple circuit sketches this is often unnecessary, because the bundled WASM/heuristic recognizer already detects most straight wires.

## Version 7.4 behavior

### Fast

- OpenCV is disabled by default.
- If enabled, OpenCV uses `scan`, not `HoughLinesP`.
- Maximum OpenCV dimension: `420 px`.
- Timeout: `1200 ms`.
- YOLO and OpenCV do not run in parallel.

### Balanced

- OpenCV uses `scan`, not `HoughLinesP`.
- Maximum OpenCV dimension: `640 px`.
- Timeout: `2500 ms`.
- YOLO and OpenCV do not run in parallel.

### Accurate

- OpenCV uses full `HoughLinesP`.
- Maximum OpenCV dimension: `1100 px`.
- Timeout: `8000 ms`.
- This mode is intended only for difficult or low-quality images.

## Recommended settings

For normal IEC screenshots:

```text
Recognition speed: Fast
OpenCV Lite worker: OFF
Tesseract OCR: OFF
YOLO: ON only if you loaded a trained model
Snap grid: 10
Recognition tolerance: 8
```

For weak wire detection:

```text
Recognition speed: Balanced
OpenCV Lite worker: ON
Tesseract OCR: OFF
```

For a difficult scanned image:

```text
Recognition speed: Accurate
OpenCV Lite worker: ON
Tesseract OCR: ON only if labels are needed
```

## How to test which stage is slow

Run the same image several times:

1. OpenCV OFF, OCR OFF, YOLO OFF.
2. OpenCV ON, OCR OFF, YOLO OFF.
3. YOLO ON with a loaded model, OpenCV OFF.
4. OCR ON by itself.

The status bar shows the total runtime and which engines were used.

## Important note

A Web Worker prevents the UI from freezing. It does not reduce CPU work. On low-end machines, running OpenCV and ONNX at the same time can be slower than running them sequentially, so Fast and Balanced modes now avoid parallel heavy stages.
