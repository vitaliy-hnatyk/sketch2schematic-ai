# Deployment

## Static hosting

The production application is a static Vite build:

```bash
npm ci
npm run build
```

Deploy the `dist/` directory to any static host.

## GitHub Pages

A Pages workflow is included at `.github/workflows/pages.yml`. Enable GitHub Pages with **GitHub Actions** as the source.

If the repository is hosted below a subpath, set Vite's `base` option or provide `VITE_BASE_PATH` according to your deployment setup.

## Models and OCR assets

Large model and OCR files increase first-load time. Host them with correct MIME types and long-lived cache headers after filenames are versioned.

Required WASM MIME type:

```text
application/wasm
```

## Cross-origin isolation

Some high-performance WASM threading configurations may require COOP/COEP headers. The current build can run without those headers but may use a slower execution path.

## Browser support

WebGPU acceleration depends on browser and device support. ONNX Runtime Web automatically falls back to WASM when configured execution providers fail.
