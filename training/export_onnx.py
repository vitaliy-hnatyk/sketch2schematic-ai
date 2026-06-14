#!/usr/bin/env python3
"""Export trained circuit-symbol weights to the browser ONNX model contract."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import shutil

import onnx
from ultralytics import YOLO


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--weights", default="runs/circuit/yolo-circuit/weights/best.pt")
    parser.add_argument("--imgsz", type=int, default=640)
    parser.add_argument("--output", default="public/models/circuit-yolo.onnx")
    parser.add_argument("--labels", default="public/models/labels.json")
    parser.add_argument("--opset", type=int, default=17)
    parser.add_argument("--dynamic", action="store_true", help="Export dynamic input dimensions. Fixed size is simpler for browsers.")
    parser.add_argument("--no-simplify", action="store_true")
    return parser.parse_args()


def ordered_names(model: YOLO) -> list[str]:
    names = model.names
    if isinstance(names, dict):
        return [str(names[index]) for index in sorted(names)]
    return [str(name) for name in names]


def main() -> None:
    args = parse_args()
    weights = Path(args.weights)
    if not weights.is_file():
        raise FileNotFoundError(f"Weights not found: {weights}")

    model = YOLO(str(weights))
    exported = Path(
        model.export(
            format="onnx",
            imgsz=args.imgsz,
            simplify=not args.no_simplify,
            dynamic=args.dynamic,
            nms=False,
            half=False,
            opset=args.opset,
        )
    )

    output_path = Path(args.output)
    labels_path = Path(args.labels)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    labels_path.parent.mkdir(parents=True, exist_ok=True)
    if exported.resolve() != output_path.resolve():
        shutil.copy2(exported, output_path)

    onnx_model = onnx.load(str(output_path))
    onnx.checker.check_model(onnx_model)

    manifest = {
        "inputSize": args.imgsz,
        "names": ordered_names(model),
    }
    labels_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    print(f"ONNX model: {output_path.resolve()}")
    print(f"Labels:     {labels_path.resolve()}")
    print(f"Classes:    {len(manifest['names'])}")
    print("ONNX structural validation: OK")


if __name__ == "__main__":
    main()
