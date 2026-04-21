import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import { fullSiteTitle, siteCanonicalUrl } from '@/lib/seo';
import { seoPageDescriptions } from '@/lib/pageMetadata';

const segment = translations.en.sectionTitles.illustration;
const canonical = siteCanonicalUrl('/illustration');
const title = fullSiteTitle(segment);
const description = seoPageDescriptions.illustration;

export const metadata: Metadata = {
  title: segment,
  description,
  alternates: { canonical },
  openGraph: {
    url: canonical,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function IllustrationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
