import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname } from 'path';

const IMAGES_DIR = join(import.meta.dirname, '..', 'public', 'images');
const JPG_QUALITY = 82;
const PNG_QUALITY = 80;
const MAX_DIMENSION = 1920;

async function optimizeImages() {
  const files = await readdir(IMAGES_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;

  for (const file of files) {
    const filePath = join(IMAGES_DIR, file);
    const ext = extname(file).toLowerCase();

    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const before = (await stat(filePath)).size;
    totalBefore += before;

    try {
      let pipeline = sharp(filePath);
      const meta = await pipeline.metadata();

      const needsResize =
        (meta.width && meta.width > MAX_DIMENSION) ||
        (meta.height && meta.height > MAX_DIMENSION);

      if (needsResize) {
        pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, {
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      let buf;
      if (ext === '.png') {
        buf = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
      } else {
        buf = await pipeline
          .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
          .toBuffer();
      }

      const after = buf.length;

      if (after < before) {
        const tmpPath = filePath + '.tmp';
        const { writeFile } = await import('fs/promises');
        await writeFile(tmpPath, buf);
        await rename(tmpPath, filePath);
        totalAfter += after;
        const pct = ((1 - after / before) * 100).toFixed(1);
        console.log(`  ✓ ${file}: ${fmt(before)} → ${fmt(after)} (−${pct}%)`);
      } else {
        totalAfter += before;
        console.log(`  · ${file}: already optimal (${fmt(before)})`);
      }
      processed++;
    } catch (err) {
      totalAfter += before;
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nProcessed ${processed} images`);
  console.log(`Before: ${fmt(totalBefore)}`);
  console.log(`After:  ${fmt(totalAfter)}`);
  console.log(`Saved:  ${fmt(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

optimizeImages();
