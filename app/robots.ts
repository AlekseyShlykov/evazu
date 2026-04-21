import type { MetadataRoute } from 'next';
import { getSiteOrigin, sitemapFileUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  let host: string | undefined;
  try {
    host = new URL(getSiteOrigin()).host;
  } catch {
    host = undefined;
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapFileUrl(),
    ...(host ? { host } : {}),
  };
}
