# ADR-0002: PixiJS for the corrected-schematic editor

- Status: accepted
- Date: 2026-06-14

## Context

The editor needs smooth pan/zoom, thousands of primitives, connected dragging, and predictable custom IEC symbols.

## Decision

Use PixiJS as the rendering layer while React remains responsible for application UI and state orchestration.

## Consequences

- WebGL acceleration for large scenes.
- Full control over symbol geometry and ports.
- More editor behavior must be implemented locally than with a diagramming framework.
- Accessibility and text editing require additional HTML/React overlays.
