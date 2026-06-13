# ADR-0001: Browser-first recognition

- Status: accepted
- Date: 2026-06-14

## Context

Circuit images may contain confidential designs. A browser-first architecture avoids requiring uploads to a recognition server and simplifies static deployment.

## Decision

Run component inference, wire detection, OCR, and graph reconstruction locally. Use WebGPU when available and WASM as the compatibility path.

## Consequences

- Better privacy and offline potential.
- No mandatory backend.
- Model size and browser memory are constrained.
- Performance varies by device.
- Large models require careful loading and caching.
