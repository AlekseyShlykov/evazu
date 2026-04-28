import type { Metadata, Viewport } from 'next';
import { Commissioner } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SeoJsonLd } from '@/components/SeoJsonLd';
import { LanguageProvider } from './LanguageContext';
import { LocaleContent } from './LocaleContent';
import {
  defaultDocumentTitle,
  shareMetaDescription,
  shareOgTitle,
  sharePreviewTitle,
} from '@/lib/pageMetadata';
import { absoluteOgImageUrl, getMetadataBase, siteBase, siteCanonicalUrl } from '@/lib/seo';
import { heroImage } from '@/lib/data';
import { encodePublicPath, webpSrcFor } from '@/lib/imageSources';

const commissioner = Commissioner({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  adjustFontFallback: true,
});

const faviconUrl = `${siteBase()}/images/Favicon%2092x92.jpg`;

const GA_MEASUREMENT_ID = 'G-7QW6TXT2TR';

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: defaultDocumentTitle,
    template: '%s — Ekaterina Zueva',
  },
  description: shareMetaDescription,
  alternates: {
    canonical: siteCanonicalUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: faviconUrl, type: 'image/jpeg' }],
    apple: [{ url: faviconUrl, type: 'image/jpeg' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: siteCanonicalUrl('/'),
    title: shareOgTitle,
    description: sharePreviewTitle,
    images: [{ url: absoluteOgImageUrl(), type: 'image/png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@katya_evazu',
    creator: '@katya_evazu',
    title: shareOgTitle,
    description: sharePreviewTitle,
    images: [absoluteOgImageUrl()],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The portrait used as the hero on `/` and `/about/` is rendered above the
  // fold and is the LCP element on those pages, so we hint the browser to
  // start fetching it as early as possible. We preload the WebP variant and
  // the JPG fallback with `imageSrcSet`/`imageType` so the browser only picks
  // the format it can render.
  const heroSrc = encodePublicPath('/images/' + heroImage);
  const heroWebp = webpSrcFor(heroSrc);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {heroWebp && (
          <link
            rel="preload"
            as="image"
            href={heroWebp}
            type="image/webp"
            // @ts-expect-error – fetchpriority is a valid HTML attribute, missing from React types
            fetchpriority="high"
          />
        )}
        <link rel="preconnect" href="https://vumbnail.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://drive.google.com" />
        <link rel="dns-prefetch" href="https://vumbnail.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://drive.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${commissioner.variable} font-sans antialiased bg-neutral-50 text-neutral-900 min-h-screen`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <SeoJsonLd />
        <LanguageProvider>
          <Header />
          <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden pt-16 box-border">
            <LocaleContent>{children}</LocaleContent>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
