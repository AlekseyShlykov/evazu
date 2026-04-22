import type { Metadata } from 'next';
import { NotFoundLink } from '@/components/NotFoundLink';
import { shareMetaDescription } from '@/lib/pageMetadata';
import { siteCanonicalUrl } from '@/lib/seo';

const notFoundTitleSegment = '404';

export const metadata: Metadata = {
  title: notFoundTitleSegment,
  description: shareMetaDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: siteCanonicalUrl('/') },
  openGraph: {
    url: siteCanonicalUrl('/'),
    title: notFoundTitleSegment,
    description: shareMetaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: notFoundTitleSegment,
    description: shareMetaDescription,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-24 flex justify-center">
      <NotFoundLink />
    </div>
  );
}
