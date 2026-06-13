#!/usr/bin/env sh
set -eu
PROJECT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$PROJECT_DIR/wasm-core"
cargo build --release
cp target/wasm32-unknown-unknown/release/schematic_wasm.wasm \
  "$PROJECT_DIR/src/wasm/schematic_wasm_bg.wasm"
echo "Rust WebAssembly rebuilt: src/wasm/schematic_wasm_bg.wasm"
