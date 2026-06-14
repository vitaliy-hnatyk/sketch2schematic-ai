# ADR-0003: Isolate recognition engines in dedicated workers

## Status

Accepted.

## Context

ONNX inference, OpenCV initialization, adaptive image analysis, and OCR can each block the browser event loop long enough to make the editor appear frozen. The runtimes also have different caching and failure behavior.

## Decision

Use separate execution boundaries:

- `imageRecognizer.worker.js` for the bundled WebAssembly line prepass and heuristic/IEC recognition;
- `yolo.worker.js` for ONNX Runtime WebGPU/WASM inference;
- `opencv.worker.js` for OpenCV.js/WASM wire extraction;
- Tesseract's internal worker for OCR.

Transfer image ownership with `ImageBitmap` or `ArrayBuffer`. Keep React, PixiJS, candidate merging, and final graph cleanup on the main thread.

## Consequences

- The editor stays responsive during recognition.
- Large runtimes load only when their worker is started.
- ONNX model data is transferred once and retained by the YOLO worker.
- Worker startup and message orchestration add complexity.
- A worker improves responsiveness but does not guarantee lower total inference time.
- Deployments must serve module-worker and WebAssembly assets over HTTP(S).
