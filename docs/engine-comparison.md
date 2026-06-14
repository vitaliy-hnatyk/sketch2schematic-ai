# Comparing YOLO, OCR, and the heuristic recognizer

## Why YOLO and OCR can look identical

They do different jobs:

- **YOLO/ONNX** detects component classes and bounding boxes. It needs a trained `.onnx` file and matching `labels.json`.
- **Tesseract OCR** reads text such as `R1`, `10k`, `C2`, and `100nF`. It does not decide whether a symbol is a resistor, capacitor, zener, or SCR.
- **Heuristic/WASM** detects the baseline symbols and wires without a trained model.

Previously all optional engines were merged into the heuristic result. When YOLO had no model, or OCR found no attachable text, the canvas remained identical.

## Isolation modes in version 7.5

### Heuristic/WASM only

Runs the baseline recognizer and disables YOLO, OpenCV, and OCR. Use this as the reference result.

### YOLO-only components

- Requires a trained ONNX model.
- Keeps heuristic wires and junctions so the result remains connected.
- Removes heuristic component symbols.
- Component symbols shown on the clean canvas come only from YOLO detections.
- If no model is loaded, analysis stops and clears the previous result instead of silently showing the fallback.

### OCR-only labels

- Runs the heuristic/WASM recognizer for topology.
- Tesseract reads text and attaches matching labels or values to nearby symbols.
- Symbol shapes should remain the same. Only labels and values may change.
- The status shows words found and the number of objects receiving OCR metadata.

### Hybrid

Merges enabled YOLO, OpenCV, OCR, and heuristic results. This is the production mode, not the best mode for comparing engines.

## Recommended comparison procedure

1. Load one source image.
2. Select **Heuristic/WASM only** and analyze. Save a screenshot.
3. Load a trained model and matching labels.
4. Select **YOLO-only components** and analyze.
5. Select **OCR-only labels** and analyze.
6. Compare the status messages:

```text
YOLO-only: 8 detections, 7 schematic symbols via webgpu
OCR-only: 11 words found, 5 labels/values attached
```

If YOLO-only reports no model, the `.onnx` file is not active. If OCR-only reports zero attached objects, Tesseract found no usable designator/value near a recognized symbol.
