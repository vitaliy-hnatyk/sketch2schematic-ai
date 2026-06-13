from pathlib import Path
import json
from ultralytics import YOLO

weights = Path("runs/circuit/yolo-circuit/weights/best.pt")
model = YOLO(str(weights))
result = model.export(format="onnx", imgsz=640, simplify=True, dynamic=False)
print(f"Exported: {result}")

labels = {
    "inputSize": 640,
    "names": [model.names[index] for index in sorted(model.names)],
}
Path("public/models").mkdir(parents=True, exist_ok=True)
Path("public/models/labels.json").write_text(json.dumps(labels, indent=2), encoding="utf-8")
print("Wrote public/models/labels.json")
print("Copy the exported ONNX file to public/models/circuit-yolo.onnx")
