import { readFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';

const width = 900;
const height = 650;
const rgba = new Uint8Array(width * height * 4);
rgba.fill(255);

function pixel(x, y) {
  const offset = (y * width + x) * 4;
  rgba[offset] = 0;
  rgba[offset + 1] = 0;
  rgba[offset + 2] = 0;
  rgba[offset + 3] = 255;
}

for (let x = 80; x < 820; x += 1) {
  for (let dy = -2; dy <= 2; dy += 1) pixel(x, 120 + dy);
  for (let dy = -2; dy <= 2; dy += 1) pixel(x, 520 + dy);
}
for (let y = 120; y < 520; y += 1) {
  for (let dx = -2; dx <= 2; dx += 1) pixel(80 + dx, y);
  for (let dx = -2; dx <= 2; dx += 1) pixel(820 + dx, y);
}

const bytes = await readFile(new URL('../src/wasm/schematic_wasm_bg.wasm', import.meta.url));
const { instance } = await WebAssembly.instantiate(bytes, {});
const { memory, reset_alloc: resetAlloc, alloc, detect_lines: detectLines } = instance.exports;
const maxLines = 512;

const runs = [];
let resultCount = 0;
for (let run = 0; run < 8; run += 1) {
  resetAlloc();
  const inputPointer = alloc(rgba.byteLength);
  const outputPointer = alloc(maxLines * 16);
  new Uint8Array(memory.buffer, inputPointer, rgba.byteLength).set(rgba);
  const started = performance.now();
  resultCount = detectLines(inputPointer, width, height, 20, 3, 42, outputPointer, maxLines);
  runs.push(performance.now() - started);
}
const measured = runs.slice(2);
const average = measured.reduce((sum, value) => sum + value, 0) / measured.length;
console.log(JSON.stringify({
  width,
  height,
  detectedLines: resultCount,
  wasmBytes: bytes.byteLength,
  averageMs: Number(average.toFixed(2)),
  runsMs: runs.map((value) => Number(value.toFixed(2))),
}, null, 2));
if (resultCount < 4) process.exitCode = 1;
