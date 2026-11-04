// Creates resized WebP copies of PNG/JPEG/GIF images in src/assets/images.
// Originals are left in place. Usage: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = 'src/assets/images';
const MAX_WIDTH = 2000;

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) continue;
  const out = file.slice(0, -ext.length) + '.webp';
  const animated = ext === '.gif';
  const before = (await stat(file)).size;
  await sharp(file, { animated })
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: animated ? 70 : 80, effort: 6 })
    .toFile(out);
  const after = (await stat(out)).size;
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}
