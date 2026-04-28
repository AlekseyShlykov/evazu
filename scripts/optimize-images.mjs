import sharp from 'sharp';
import { readdir, stat, rename, unlink, access } from 'fs/promises';
import { constants as fsConstants } from 'fs';
import { join, extname, basename } from 'path';

const IMAGES_DIR = join(import.meta.dirname, '..', 'public', 'images');

// Visually-lossless settings (well above the threshold of perceptual difference
// for photographs/illustrations as used on the site).
const JPG_QUALITY = 86;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 86;
const WEBP_EFFORT = 6;
const MAX_DIMENSION = 1920;

function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function fileExists(p) {
  try {
    await access(p, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function recompressInPlace(filePath, ext) {
  const before = (await stat(filePath)).size;
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
  } else if (ext === '.webp') {
    // Re-compress only when it actually saves bytes (no quality drop).
    buf = await pipeline
      .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT, smartSubsample: true })
      .toBuffer();
  } else {
    buf = await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toBuffer();
  }

  const after = buf.length;
  if (after < before) {
    const tmpPath = filePath + '.tmp';
    const { writeFile } = await import('fs/promises');
    await writeFile(tmpPath, buf);
    await rename(tmpPath, filePath);
    return { before, after, changed: true };
  }
  return { before, after: before, changed: false };
}

async function ensureWebpCompanion(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;
  const target = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const targetExists = await fileExists(target);

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
  const buf = await pipeline
    .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT, smartSubsample: true })
    .toBuffer();

  const sourceSize = (await stat(filePath)).size;
  const webpSize = buf.length;

  if (targetExists) {
    const existingSize = (await stat(target)).size;
    // Only overwrite if our new build is smaller; otherwise keep the existing one.
    if (webpSize >= existingSize) {
      return { skipped: true, sourceSize, webpSize: existingSize };
    }
  }

  // If the WebP companion isn't smaller than the source, don't bother — the
  // browser would fall back to the source anyway via <picture>.
  if (webpSize >= sourceSize) {
    if (targetExists) {
      await unlink(target);
    }
    return { tooLarge: true, sourceSize, webpSize };
  }

  const { writeFile } = await import('fs/promises');
  await writeFile(target, buf);
  return { written: true, sourceSize, webpSize };
}

async function optimizeImages() {
  const files = await readdir(IMAGES_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  let totalWebpAdded = 0;
  let processed = 0;

  for (const file of files) {
    const filePath = join(IMAGES_DIR, file);
    const ext = extname(file).toLowerCase();

    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

    try {
      const { before, after, changed } = await recompressInPlace(filePath, ext);
      totalBefore += before;
      totalAfter += after;
      if (changed) {
        const pct = ((1 - after / before) * 100).toFixed(1);
        console.log(`  ✓ ${file}: ${fmt(before)} → ${fmt(after)} (−${pct}%)`);
      }

      // Generate WebP companion for JPG / PNG sources.
      if (ext !== '.webp') {
        const result = await ensureWebpCompanion(filePath);
        if (result?.written) {
          totalWebpAdded += result.webpSize;
          const pct = ((1 - result.webpSize / result.sourceSize) * 100).toFixed(1);
          console.log(
            `    ↳ webp ${basename(file, ext)}.webp: ${fmt(result.sourceSize)} → ${fmt(result.webpSize)} (−${pct}%)`,
          );
        }
      }

      processed++;
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nProcessed ${processed} images`);
  console.log(`In place: ${fmt(totalBefore)} → ${fmt(totalAfter)}`);
  console.log(`WebP companions written: ${fmt(totalWebpAdded)}`);
  if (totalBefore > 0) {
    console.log(
      `Saved (in-place): ${fmt(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`,
    );
  }
}

optimizeImages();
