/**
 * Helpers for serving WebP companions alongside the JPG/PNG originals.
 *
 * The build pipeline (scripts/optimize-images.mjs) writes a `.webp` version
 * next to every JPG/PNG when the WebP is smaller. We use `<picture>` so
 * supporting browsers download only the WebP and the original is left as
 * a graceful fallback for the rest.
 *
 * Important: we never assume a `.webp` exists. The build script skips
 * companions when the WebP would be larger than the original. Consumers
 * should pass `webpAvailable` if they know it (we generated companions
 * for every JPG/PNG referenced from the case-study data files).
 */
const RAW_IMAGE_RE = /\.(jpe?g|png)(\?.*)?$/i;

export function webpSrcFor(src: string): string | null {
  if (!RAW_IMAGE_RE.test(src)) return null;
  return src.replace(RAW_IMAGE_RE, '.webp$2');
}

/**
 * Encode a path that may live under `/images/<filename>` so spaces / Cyrillic
 * get URL-escaped while leading `/` stays untouched.
 */
export function encodePublicPath(path: string): string {
  if (!path.startsWith('/')) return encodeURI(path);
  return '/' + path.slice(1).split('/').map(encodeURIComponent).join('/');
}
