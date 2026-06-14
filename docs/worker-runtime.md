# Web Worker and WebAssembly runtime

Version 7.3 moves the expensive recognition engines away from the React thread.

## Worker layout

```text
Main thread
  React controls
  PixiJS editor
  result merge + circuit graph cleanup
       │
       ├── imageRecognizer.worker
       │     bundled Rust/C WebAssembly line prepass
       │     structured IEC and heuristic symbol classification
       │
       ├── yolo.worker
       │     ONNX Runtime WebGPU when available
       │     ONNX Runtime WASM fallback
       │
       ├── opencv.worker
       │     OpenCV.js WebAssembly
       │     threshold, Canny and HoughLinesP
       │
       └── Tesseract internal worker
             OCR engine and language data
```

## Transferable data

The application avoids sending large pixel arrays through ordinary structured cloning:

- the heuristic worker receives a transferred RGBA `ArrayBuffer`;
- the YOLO worker receives a transferred `ImageBitmap`;
- the OpenCV worker receives a separate transferred `ImageBitmap`;
- an uploaded ONNX model is copied once, then transferred to and cached by the YOLO worker.

After transfer, the worker owns the bitmap or buffer. Each bitmap is explicitly closed after processing.

## Bundled WebAssembly prepass

The small bundled WebAssembly module now runs, rather than only being warmed. It performs adaptive local thresholding and long horizontal/vertical line detection. The JavaScript IEC classifier then classifies symbols in the same worker. WASM wire candidates are merged with heuristic candidates before returning to the main thread.

Diagnostics are available under:

```text
diagnostics.worker
diagnostics.wasmWirePrepass
diagnostics.workerTimings
```

## Failure behavior

Workers are optional acceleration boundaries, not single points of failure.

- If YOLO fails, heuristic symbols remain.
- If OpenCV fails, heuristic/WASM wires remain.
- If OCR fails, labels can still be entered manually.
- If the bundled image worker fails, the application uses the JavaScript fallback.

## Deployment

Worker modules and WebAssembly files must be served over HTTP(S); opening `index.html` directly from the file system is not supported.

For ONNX Runtime multi-threaded WASM, use cross-origin isolation headers where your host supports them:

```text
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

The application still runs without these headers, but ONNX WASM normally uses fewer threads.
