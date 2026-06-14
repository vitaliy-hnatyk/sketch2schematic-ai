# GitHub repository About and topics

GitHub repository description and topics are configured outside the Git repository contents. This project keeps the recommended values in:

```text
.github/repository-metadata.json
```

## Recommended About description

> Browser-first AI tool that converts hand-drawn or uploaded electrical diagrams into editable schematics with React, PixiJS, ONNX, OpenCV/WASM, Tesseract, and circuit-graph reconstruction.

## Recommended topics

```text
electrical-engineering
circuit-diagram
schematic
schematic-editor
circuit-recognition
computer-vision
machine-learning
browser-ai
yolo
onnx
onnxruntime
webgpu
webassembly
pixijs
react
opencv
tesseract
ocr
electronics
diagram-editor
```

GitHub topic names use lowercase letters, numbers, and hyphens. GitHub currently permits up to 20 topics, with a maximum of 50 characters per topic.

## Apply automatically with GitHub CLI

Install and authenticate GitHub CLI, then run from the repository root:

```bash
npm run github:metadata
```

To target a repository explicitly:

```bash
npm run github:metadata -- OWNER/REPOSITORY
```

To also set the GitHub Pages URL:

```bash
GITHUB_PAGES_URL="https://OWNER.github.io/REPOSITORY/" npm run github:metadata -- OWNER/REPOSITORY
```

The command runs `gh repo edit` with the description, topics, and optional homepage URL.

## Apply manually in GitHub

1. Open the repository main page.
2. In the **About** area, select the settings gear.
3. Paste the description.
4. Add the topics listed above.
5. Add the GitHub Pages URL after deployment, when available.
6. Save changes.

Topic names are public even when they are added to a private repository.
