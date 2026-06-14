#!/usr/bin/env python3
"""Train an Ultralytics YOLO detector for electrical schematic symbols."""

from __future__ import annotations

import argparse
from pathlib import Path

from ultralytics import YOLO


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data", default="training/circuit-dataset.yaml")
    parser.add_argument("--model", default="yolo11n.pt", help="Starting checkpoint or model YAML.")
    parser.add_argument("--epochs", type=int, default=120)
    parser.add_argument("--imgsz", type=int, default=640)
    parser.add_argument("--batch", type=int, default=16)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--device", default=None, help="Examples: 0, 0,1, cpu, mps. Omit for auto selection.")
    parser.add_argument("--project", default="runs/circuit")
    parser.add_argument("--name", default="yolo-circuit")
    parser.add_argument("--patience", type=int, default=30)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--cache", action="store_true", help="Cache dataset images when enough RAM is available.")
    parser.add_argument("--resume", nargs="?", const=True, default=False, help="Resume the latest run or a checkpoint.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    data_path = Path(args.data)
    if not data_path.is_file():
        raise FileNotFoundError(f"Dataset YAML not found: {data_path}")

    if args.resume and args.resume is not True:
        model = YOLO(str(args.resume))
        model.train(resume=True)
        return

    model = YOLO(args.model)
    train_args = {
        "data": str(data_path),
        "imgsz": args.imgsz,
        "epochs": args.epochs,
        "batch": args.batch,
        "workers": args.workers,
        "project": args.project,
        "name": args.name,
        "patience": args.patience,
        "seed": args.seed,
        "cache": args.cache,
        "plots": True,
        "save": True,
    }
    if args.device is not None:
        train_args["device"] = args.device
    if args.resume is True:
        train_args["resume"] = True

    model.train(**train_args)


if __name__ == "__main__":
    main()
