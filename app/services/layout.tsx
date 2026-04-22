import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import { siteCanonicalUrl } from '@/lib/seo';
import { seoPageDescriptions, shareOgTitle } from '@/lib/pageMetadata';

const segment = translations.en.sectionTitles.services;
const canonical = siteCanonicalUrl('/services');
const description = seoPageDescriptions.services;

export const metadata: Metadata = {
  title: segment,
  description,
  alternates: { canonical },
  openGraph: {
    url: canonical,
    title: shareOgTitle,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: shareOgTitle,
    description,
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
