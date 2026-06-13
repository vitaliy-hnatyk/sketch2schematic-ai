# WASM line-detection core

This directory contains the portable low-level line detector used by the browser worker.

## Build

```bash
rustup target add wasm32-unknown-unknown
npm run build:wasm
```

The generated browser module is placed under `src/wasm/`.

The WASM core accelerates low-level image processing. It does not classify electrical symbols by itself.
