# Security policy

## Supported version

Security fixes are applied to the latest repository version.

## Reporting a vulnerability

Do not open a public issue for vulnerabilities involving arbitrary code execution, malicious model files, dependency compromise, cross-origin data exposure, or unsafe project-file parsing.

Send a private report to the repository maintainer with:

- affected version;
- reproduction steps;
- impact;
- proof of concept, when safe;
- suggested mitigation.

## Security considerations

- ONNX models and JSON project files should be treated as untrusted input.
- Keep dependencies updated and review lockfile changes.
- Do not load remote models from untrusted origins.
- Static deployments should serve WASM with the correct MIME type.
- Browser-first processing improves privacy but does not remove risks from malicious files or third-party libraries.
