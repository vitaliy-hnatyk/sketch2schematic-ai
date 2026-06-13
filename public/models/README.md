# Browser model files

Place the optional trained circuit detector here:

```text
circuit-yolo.onnx
labels.json
```

The application can also load both files through the browser UI without committing the model.

## Important

- Class order in `labels.json` must match ONNX output order.
- Do not commit model weights unless their license allows redistribution.
- The Git repository ignores `*.onnx` by default.
- Keep `labels.json` committed so the expected class contract is documented.

See `docs/model-contract.md` and `docs/model-training.md`.
