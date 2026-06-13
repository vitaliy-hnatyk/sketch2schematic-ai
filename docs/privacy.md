# Privacy and data flow

The default architecture is browser-first:

- uploaded images remain in the browser;
- ONNX inference runs locally;
- OpenCV/WASM processing runs locally;
- Tesseract OCR runs locally;
- project JSON and exports are generated locally.

No application server is required for recognition.

A deployment can change this behavior by adding remote model, analytics, logging, storage, or API services. Document such changes clearly and obtain user consent where required.
