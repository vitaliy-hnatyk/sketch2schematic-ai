# Browser model files

The application looks for:

```text
public/models/circuit-yolo.onnx
public/models/labels.json
```

Generate both files from trained weights:

```bash
python training/export_onnx.py \
  --weights runs/circuit/yolo-circuit/weights/best.pt \
  --imgsz 640
```

The model can also be selected through the browser UI without committing it.

## Requirements

- Class order in `labels.json` must match the training class order exactly.
- The current decoder supports common raw YOLO detection tensors.
- Export with `nms=False`; the browser performs non-maximum suppression.
- Fixed input size is the simplest deployment option.
- Do not commit model weights unless redistribution is allowed by their license and dataset terms.

The Git repository ignores `*.onnx` by default while keeping the manifest and documentation.

See:

- [`MODEL_TRAINING.md`](../../MODEL_TRAINING.md)
- [`docs/model-training.md`](../../docs/model-training.md)
- [`docs/model-contract.md`](../../docs/model-contract.md)
