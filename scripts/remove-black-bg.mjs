/**
 * Script para quitar el fondo negro del logo SPT y reemplazarlo por transparencia.
 * Ejecutar: node scripts/remove-black-bg.mjs
 * Requiere: pnpm add -D sharp
 */
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, '../public/logo-spt.png');
const outputPath = join(__dirname, '../public/logo-spt.png');

const BLACK_THRESHOLD = 40; // Pixels con RGB menor a esto se consideran negro

const buffer = readFileSync(inputPath);
const { data, info } = await sharp(buffer)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
    data[i + 3] = 0;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(outputPath);

console.log('Logo SPT procesado: fondo negro eliminado → transparencia');
