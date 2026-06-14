# Recognition settings

## Recognition speed

- **Fast:** recommended default. Uses smaller working images, skips redundant OpenCV work, and disables OCR when selected.
- **Balanced:** uses more image detail and runs OpenCV when fallback wires are incomplete.
- **Accurate:** full-resolution path for difficult images; slowest mode.

See [Performance and recognition speed](performance.md).

## Snap grid

Controls final coordinate quantization and editor placement. A smaller grid preserves image geometry; a larger grid creates cleaner alignment but can move short components.

Suggested values:

- clean uploaded diagram: `8–10`;
- rough mouse drawing: `16–20`.

## Recognition tolerance

Controls grouping, endpoint matching, line merging, and graph cleanup. It is passed into the image-recognition worker and the vector recognizer.

Suggested values:

- clean printed image: `6–10`;
- low-resolution or rough image: `10–16`.

Very large tolerance values can join unrelated branches.

## Minimum confidence

Controls whether a candidate is accepted or converted into a `REVIEW` object.

- **Flexible:** keeps more uncertain detections.
- **Balanced:** recommended starting point.
- **Strict:** rejects more candidates; it does not make the detector more accurate.

## AI confidence

The YOLO threshold removes low-score detector boxes before graph reconstruction. Lower values improve recall but can produce duplicate or incorrect symbols.

## OCR confidence

Controls whether Tesseract text is retained and assigned to a nearby component.
