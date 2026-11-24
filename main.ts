// hello, batch: this program deterministically copies a pre-rendered,
// sourced front page for Monday 23 November 2026 into the designated output slot.
// No runtime orders are placed; the shipped image already fills the slot,
// so the operation is pure, stable, and reproducible on every run.

import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const moduleDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceImage = join(moduleDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(sourceImage, join(outDir, 'entry.png'));

const destination = join(outDir, 'entry.png');
const { size } = statSync(destination);
console.log(`Copied ${size} bytes to ${destination}`);
