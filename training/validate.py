#!/usr/bin/env python3
"""Validate trained circuit-symbol weights on a YOLO dataset split."""

from __future__ import annotations

import argparse
from pathlib import Path

from ultralytics import YOLO


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--weights", default="runs/circuit/yolo-circuit/weights/best.pt")
    parser.add_argument("--data", default="training/circuit-dataset.yaml")
    parser.add_argument("--split", choices=("val", "test"), default="val")
    parser.add_argument("--imgsz", type=int, default=640)
    parser.add_argument("--batch", type=int, default=16)
    parser.add_argument("--device", default=None)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    weights = Path(args.weights)
    data = Path(args.data)
    if not weights.is_file():
        raise FileNotFoundError(f"Weights not found: {weights}")
    if not data.is_file():
        raise FileNotFoundError(f"Dataset YAML not found: {data}")

    model = YOLO(str(weights))
    options = {
        "data": str(data),
        "split": args.split,
        "imgsz": args.imgsz,
        "batch": args.batch,
        "plots": True,
    }
    if args.device is not None:
        options["device"] = args.device
    metrics = model.val(**options)
    print(metrics)


if __name__ == "__main__":
    main()
