# ONNX model contract

## Required files

```text
public/models/circuit-yolo.onnx
public/models/labels.json
```

## Labels manifest

```json
{
  "inputSize": 640,
  "names": [
    "resistor",
    "capacitor",
    "battery",
    "fuse",
    "diode",
    "zener",
    "led",
    "scr",
    "switch",
    "lamp",
    "ground",
    "source",
    "junction",
    "terminal",
    "text"
  ]
}
```

Class order must match the ONNX output order.

## Supported detector outputs

The current parser is designed for common YOLO detection exports. If a model exports a different tensor layout, adapt `parseYoloOutput` in `src/ai/yoloOnnxDetector.js` and add a regression test.

## Coordinate assumptions

- Boxes are mapped from the letterboxed model input back to source-image coordinates.
- Component rotation is inferred from class rules and surrounding graph geometry unless a separate orientation model is added.
- The detector should identify the symbol body, not long connected wire segments.

## Recommended classes

Start with classes that are visually stable and electrically important. Keep `text` separate so OCR and geometry do not compete.
