import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import { siteCanonicalUrl } from '@/lib/seo';
import { seoPageDescriptions } from '@/lib/pageMetadata';

const segment = translations.en.nav.about;
const canonical = siteCanonicalUrl('/about');
const description = seoPageDescriptions.about;

export const metadata: Metadata = {
  title: segment,
  description,
  alternates: { canonical },
  openGraph: {
    url: canonical,
    title: segment,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: segment,
    description,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
