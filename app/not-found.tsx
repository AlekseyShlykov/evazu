import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultSiteDescription, shareHomeOgDescription } from '@/lib/pageMetadata';
import { translations } from '@/lib/translations';
import { siteCanonicalUrl } from '@/lib/seo';

const notFoundTitleSegment = '404';

export const metadata: Metadata = {
  title: notFoundTitleSegment,
  description: defaultSiteDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: siteCanonicalUrl('/') },
  openGraph: {
    url: siteCanonicalUrl('/'),
    title: notFoundTitleSegment,
    description: shareHomeOgDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: notFoundTitleSegment,
    description: shareHomeOgDescription,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-24 flex justify-center">
      <Link href="/" className="text-accent underline-offset-2 hover:underline text-lg font-medium">
        {translations.en.hero.viewPortfolio}
      </Link>
    </div>
  );
}
