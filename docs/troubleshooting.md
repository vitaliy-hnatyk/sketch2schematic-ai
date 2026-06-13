# Troubleshooting

## The model does not load

- Confirm `public/models/circuit-yolo.onnx` exists.
- Confirm `labels.json` matches model class order.
- Check the browser console for tensor-shape or execution-provider errors.
- Try WASM fallback if WebGPU initialization fails.

## Components become `REVIEW`

- Change minimum confidence from Strict to Balanced.
- Confirm the detector class exists in `labels.json`.
- Reduce text overlap around the component.
- Check whether the same region is detected by both AI and fallback recognizers.

## Text becomes wires

Enable OCR/text separation and use the hybrid image pipeline. Printed gray text should not enter the geometry mask.

## Wires do not connect

- Increase recognition tolerance slightly.
- Reduce snap grid for small diagrams.
- Verify the component was assigned the correct rotation.
- Check that the correct port type exists for the symbol.

## Old behavior remains after updating

- Stop the old development server.
- Delete `node_modules/.vite` if present.
- Run `npm install` and restart Vite.
- Hard-refresh the browser.
- Confirm the version shown in the application header.

## CI image tests fail

Run `npm ci` so the `sharp` development dependency is installed. Test fixtures are stored in `public/samples/` and test output is written to `tmp/test-output/`.
