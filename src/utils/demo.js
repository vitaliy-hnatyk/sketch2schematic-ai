const points = (values) => values.map(([x, y]) => ({ x, y }));

export function createDemoStrokes() {
  const strokes = [];
  strokes.push(points([[120, 180], [250, 180]]));
  strokes.push(
    points([
      [250, 180], [265, 165], [280, 195], [295, 165], [310, 195],
      [325, 165], [340, 195], [355, 180],
    ]),
  );
  strokes.push(points([[355, 180], [610, 180]]));

  const lampCircle = [];
  for (let i = 0; i <= 36; i += 1) {
    const angle = (i / 36) * Math.PI * 2;
    lampCircle.push({ x: 650 + 38 * Math.cos(angle), y: 180 + 38 * Math.sin(angle) });
  }
  strokes.push(lampCircle);
  strokes.push(points([[623, 153], [677, 207]]));
  strokes.push(points([[677, 153], [623, 207]]));
  strokes.push(points([[688, 180], [760, 180], [760, 420], [470, 420]]));
  strokes.push(points([[470, 420], [330, 420]]));
  strokes.push(points([[330, 420], [140, 420], [140, 215]]));

  const sourceCircle = [];
  for (let i = 0; i <= 32; i += 1) {
    const angle = (i / 32) * Math.PI * 2;
    sourceCircle.push({ x: 140 + 35 * Math.cos(angle), y: 180 + 35 * Math.sin(angle) });
  }
  strokes.push(sourceCircle);
  strokes.push(points([[140, 145], [140, 120], [120, 120]]));
  strokes.push(points([[140, 215], [140, 240]]));
  return strokes;
}
