# Contributing

Thank you for helping improve Sketch2Schematic AI.

## Before opening an issue

Search existing issues and review the troubleshooting guide. Recognition bugs are easiest to reproduce when the report includes the original source image rather than a screenshot containing both input and output panes.

## Development setup

```bash
npm install
npm run dev
```

Before submitting a pull request:

```bash
npm run check
```

## Recognition bug reports

Include:

- original input image or vector stroke project;
- expected component list;
- actual component list;
- browser and operating system;
- application version;
- snap grid, tolerance, confidence, AI threshold, and OCR settings;
- whether a custom ONNX model was loaded;
- console errors, if any.

## Code organization

- Keep browser AI code in `src/ai/`.
- Keep circuit-domain and recognition algorithms in `src/utils/`.
- Keep UI and rendering components in `src/components/`.
- Do not make graph reconstruction depend on a specific detector.
- Add a regression fixture and test when fixing recognition behavior.

## Pull requests

Keep pull requests focused. Explain the problem, approach, tests, and known limitations. Do not commit:

- `node_modules/`;
- `dist/`;
- training runs;
- proprietary datasets;
- model weights without a clear redistributable license;
- generated test output.
