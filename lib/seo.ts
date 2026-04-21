/**
 * Canonical URLs and sitemap helpers for SEO (build-time / server).
 * Uses NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_BASE_PATH from next.config / env.
 */
export function getSiteOrigin(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://evazu.art').replace(/\/$/, '');
}

/** Leading slash, no trailing slash (e.g. `/repo`) or empty string. */
export function getBasePath(): string {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!bp) return '';
  const trimmed = bp.replace(/\/$/, '');
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

export function siteBase(): string {
  const origin = getSiteOrigin();
  const bp = getBasePath();
  return bp ? `${origin}${bp}` : origin;
}

/**
 * Absolute canonical URL with trailing slash (matches next.config trailingSlash).
 */
export function siteCanonicalUrl(path: string): string {
  const base = siteBase();
  if (path === '/' || path === '') {
    return `${base}/`;
  }
  const slug = path.replace(/^\/+|\/+$/g, '');
  return `${base}/${slug}/`;
}

export function absoluteOgImageUrl(): string {
  return `${siteBase()}/images/Twitter%20post%20-%201.png`;
}

export function sitemapFileUrl(): string {
  return `${siteBase()}/sitemap.xml`;
}

export const SEO_ROUTES = ['/', '/about', '/illustration', '/animation', '/design', '/services'] as const;

/** Matches visible title pattern (em dash) for inner pages. */
export function fullSiteTitle(segment: string): string {
  return `${segment} — Ekaterina Zueva`;
}

/** Base URL for metadata resolution (includes path when NEXT_PUBLIC_BASE_PATH is set). */
export function getMetadataBase(): URL {
  const bp = getBasePath();
  if (!bp) return new URL(`${getSiteOrigin()}/`);
  return new URL(`${getSiteOrigin()}${bp}/`);
}
