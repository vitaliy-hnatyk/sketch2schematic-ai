#!/usr/bin/env python3
"""Validate a YOLO detection dataset before training."""

from __future__ import annotations

import argparse
from collections import Counter
from pathlib import Path
import sys
from typing import Iterable

import yaml

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".webp", ".tif", ".tiff"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--data",
        default="training/circuit-dataset.yaml",
        help="Path to the Ultralytics dataset YAML file.",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Treat missing label files as errors instead of background images.",
    )
    return parser.parse_args()


def load_config(path: Path) -> dict:
    if not path.is_file():
        raise FileNotFoundError(f"Dataset YAML not found: {path}")
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if "names" not in data or "train" not in data or "val" not in data:
        raise ValueError("Dataset YAML must define names, train, and val.")
    return data


def class_names(raw_names: object) -> list[str]:
    if isinstance(raw_names, list):
        return [str(name) for name in raw_names]
    if isinstance(raw_names, dict):
        ordered = sorted(((int(index), str(name)) for index, name in raw_names.items()))
        expected = list(range(len(ordered)))
        actual = [index for index, _ in ordered]
        if actual != expected:
            raise ValueError(f"Class IDs must be contiguous from 0; got {actual}.")
        return [name for _, name in ordered]
    raise TypeError("names must be a list or an ID-to-name mapping.")


def resolve_dataset_root(config_path: Path, configured_root: object) -> Path:
    root = Path(str(configured_root or "."))
    if root.is_absolute():
        return root
    yaml_relative = (config_path.parent / root).resolve()
    cwd_relative = (Path.cwd() / root).resolve()
    if yaml_relative.exists() or not cwd_relative.exists():
        return yaml_relative
    return cwd_relative


def resolve_split(root: Path, value: object) -> list[Path]:
    values = value if isinstance(value, list) else [value]
    directories: list[Path] = []
    for item in values:
        path = Path(str(item))
        directories.append(path if path.is_absolute() else root / path)
    return directories


def iter_images(paths: Iterable[Path]) -> Iterable[Path]:
    for path in paths:
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS:
            yield path
        elif path.is_dir():
            yield from sorted(
                candidate
                for candidate in path.rglob("*")
                if candidate.is_file() and candidate.suffix.lower() in IMAGE_EXTENSIONS
            )


def label_path_for(image: Path) -> Path:
    parts = list(image.parts)
    try:
        index = len(parts) - 1 - parts[::-1].index("images")
        parts[index] = "labels"
        return Path(*parts).with_suffix(".txt")
    except ValueError:
        return image.with_suffix(".txt")


def validate_label(path: Path, names: list[str], counts: Counter[str]) -> list[str]:
    errors: list[str] = []
    for line_number, raw_line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        line = raw_line.strip()
        if not line:
            continue
        fields = line.split()
        if len(fields) != 5:
            errors.append(f"{path}:{line_number}: expected 5 fields, got {len(fields)}")
            continue
        try:
            class_id = int(fields[0])
            x_center, y_center, width, height = map(float, fields[1:])
        except ValueError:
            errors.append(f"{path}:{line_number}: values are not numeric")
            continue
        if not 0 <= class_id < len(names):
            errors.append(f"{path}:{line_number}: class ID {class_id} is outside 0..{len(names) - 1}")
            continue
        values = (x_center, y_center, width, height)
        if any(value < 0 or value > 1 for value in values):
            errors.append(f"{path}:{line_number}: box values must be normalized to 0..1")
            continue
        if width <= 0 or height <= 0:
            errors.append(f"{path}:{line_number}: width and height must be greater than zero")
            continue
        counts[names[class_id]] += 1
    return errors


def main() -> int:
    args = parse_args()
    config_path = Path(args.data).resolve()
    try:
        config = load_config(config_path)
        names = class_names(config["names"])
        root = resolve_dataset_root(config_path, config.get("path"))
    except (OSError, TypeError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2

    print(f"Dataset YAML: {config_path}")
    print(f"Dataset root: {root}")
    print(f"Classes ({len(names)}): {', '.join(names)}")

    total_errors: list[str] = []
    total_counts: Counter[str] = Counter()
    split_sizes: dict[str, int] = {}

    for split in ("train", "val", "test"):
        if split not in config:
            continue
        split_paths = resolve_split(root, config[split])
        images = list(iter_images(split_paths))
        split_sizes[split] = len(images)
        missing_labels = 0
        for image in images:
            label = label_path_for(image)
            if not label.is_file():
                missing_labels += 1
                if args.strict:
                    total_errors.append(f"Missing label: {label} (image: {image})")
                continue
            total_errors.extend(validate_label(label, names, total_counts))
        print(f"{split:>5}: {len(images):5d} images, {missing_labels:5d} without label files")

    if not split_sizes.get("train"):
        total_errors.append("The training split contains no images.")
    if not split_sizes.get("val"):
        total_errors.append("The validation split contains no images.")

    print("\nObject count by class:")
    for name in names:
        print(f"  {name:<24} {total_counts[name]:6d}")

    if total_errors:
        print(f"\nFound {len(total_errors)} dataset problem(s):", file=sys.stderr)
        for error in total_errors[:100]:
            print(f"- {error}", file=sys.stderr)
        if len(total_errors) > 100:
            print(f"- ...and {len(total_errors) - 100} more", file=sys.stderr)
        return 1

    print("\nDataset structure and labels look valid.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
