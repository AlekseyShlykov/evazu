import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import { siteCanonicalUrl } from '@/lib/seo';
import { seoPageDescriptions, shareOgTitle } from '@/lib/pageMetadata';

const segment = translations.en.sectionTitles.branding;
const canonical = siteCanonicalUrl('/design');
const description = seoPageDescriptions.design;

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

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
