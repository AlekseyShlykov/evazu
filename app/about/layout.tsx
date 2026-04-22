import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import { siteCanonicalUrl } from '@/lib/seo';
import { seoPageDescriptions, shareOgTitle } from '@/lib/pageMetadata';

const segment = translations.en.nav.about;
const canonical = siteCanonicalUrl('/about');
const description = seoPageDescriptions.about;

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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
