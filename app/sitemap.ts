import type { MetadataRoute } from 'next';
import { SEO_ROUTES, siteCanonicalUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return SEO_ROUTES.map((path) => ({
    url: siteCanonicalUrl(path),
    lastModified: new Date(),
    changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '/' ? 1 : 0.85,
  }));
}
