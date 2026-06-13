# Circuit graph

## Purpose

Object detection answers “what is visible?” The circuit graph answers “what is electrically connected?” These are separate problems.

## Main entities

- **Component:** resistor, capacitor, diode, source, SCR, and other symbols.
- **Port:** an electrical connection point on a component.
- **Wire:** an orthogonal segment connecting graph points.
- **Junction:** a point where three or more electrical paths meet.
- **Terminal:** an intentionally open connection.
- **Net:** all ports and wire segments that share electrical continuity.

## Reconstruction steps

1. Normalize component sizes and rotations.
2. Compute standard ports from the IEC symbol library.
3. Snap near-axis wire endpoints.
4. Align detected component centers with nearby wire axes.
5. Attach wire endpoints to the nearest valid component port.
6. Merge collinear wire segments.
7. Split wires at intersections.
8. Create junctions and open terminals.
9. Build the PixiJS graph adapter model.

## Editing behavior

When a component moves, attached wire endpoints follow its ports. The graph adapter keeps editor node IDs separate from recognition-array indices.

## Future work

- stable net IDs;
- electrical rule checking;
- SPICE/netlist export;
- explicit no-connect markers;
- multi-pin ICs and connectors;
- bus and hierarchical net support.
