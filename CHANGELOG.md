# Changelog

All notable changes are documented here.

## [7.5.0] - 2026-06-14

### Added

- Explicit Hybrid, Heuristic/WASM-only, YOLO-only, and OCR-only output modes.
- YOLO model readiness badge and hard error when YOLO-only is selected without a model.
- Per-engine status summaries with YOLO detection/symbol counts and OCR word/attachment counts.
- Engine comparison documentation and CI test.

### Changed

- YOLO-only preserves fallback wires/junctions but removes heuristic component symbols.
- OCR-only clearly states that OCR changes labels/values, not component classification.
- Missing YOLO models no longer silently show the previous/fallback result in YOLO-only mode.

## [7.3.1] - 2026-06-14

### Added

- Complete run, dataset preparation, training, validation, and ONNX deployment guide.
- Cross-platform Python environment instructions.
- Dataset checker for YOLO labels, normalized boxes, and class counts.
- Configurable training and validation command-line scripts.
- Browser-contract ONNX exporter that installs the model and labels manifest.
- npm shortcuts for the model workflow.

### Changed

- Training README and public model documentation now include the complete deployment path.
- Application package version updated to 7.3.1.

## [7.2.0] - 2026-06-14

### Added

- Fast, Balanced, and Accurate recognition profiles.
- Per-image caching for YOLO detections, OpenCV wires, and Tesseract OCR results.
- Stage and total recognition timing diagnostics.
- Performance documentation and CI coverage for profile wiring.

### Changed

- Fast mode is now the default.
- Tesseract OCR is disabled by default and automatically disabled when Fast mode is selected.
- Uploaded-image preprocessing is limited to 850 px in Fast mode.
- OpenCV is skipped when fallback recognition already contains enough wires.
- YOLO and OpenCV can run concurrently.
- Dynamic-shape YOLO models use the profile input size; fixed-shape models retain their required dimensions.
- Application version updated to 7.2.0.

## [7.1.1] - 2026-06-14

### Added

- GitHub repository About metadata, topics, and helper script.

## [7.1.0] - 2026-06-14

### Added

- GitHub-ready repository documentation.
- Portable CI scripts and local test fixtures.
- GitHub Actions workflows and issue templates.
- MIT license, contribution guide, security policy, and third-party notices.
- Central application metadata module.
- Documentation for architecture, model training, model contract, graph reconstruction, deployment, privacy, and troubleshooting.

### Changed

- Test scripts now use the local `sharp` development dependency.
- Generated test images are written under `tmp/test-output/`.
- Application header and status messages show version 7.1.0.

## [7.0.0]

- Added browser AI pipeline with ONNX Runtime Web, OpenCV.js/WASM, Tesseract.js, and the existing PixiJS circuit editor.
