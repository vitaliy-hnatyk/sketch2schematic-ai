from ultralytics import YOLO

# Start with a small detector and fine-tune it on annotated circuit symbols.
model = YOLO("yolo11n.pt")
model.train(
    data="training/circuit-dataset.yaml",
    imgsz=640,
    epochs=120,
    batch=16,
    workers=4,
    project="runs/circuit",
    name="yolo-circuit",
)
