import type { Metadata, Viewport } from 'next';
import { Commissioner } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SeoJsonLd } from '@/components/SeoJsonLd';
import { LanguageProvider } from './LanguageContext';
import { LocaleContent } from './LocaleContent';
import { defaultSiteDescription } from '@/lib/pageMetadata';
import { translations } from '@/lib/translations';
import { absoluteOgImageUrl, getMetadataBase, siteBase, siteCanonicalUrl } from '@/lib/seo';

const commissioner = Commissioner({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  adjustFontFallback: true,
});

const homeTitle = 'Ekaterina Zueva — Illustrator, Graphic Designer, 2D Animator';
const faviconUrl = `${siteBase()}/images/Favicon%2092x92.jpg`;

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: homeTitle,
    template: '%s — Ekaterina Zueva',
  },
  description: defaultSiteDescription,
  applicationName: translations.en.hero.name,
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
    siteName: translations.en.hero.name,
    url: siteCanonicalUrl('/'),
    title: homeTitle,
    description: defaultSiteDescription,
    images: [{ url: absoluteOgImageUrl(), type: 'image/png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@katya_evazu',
    creator: '@katya_evazu',
    title: homeTitle,
    description: defaultSiteDescription,
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://vumbnail.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://drive.google.com" />
        <link rel="dns-prefetch" href="https://vumbnail.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://drive.google.com" />
      </head>
      <body
        className={`${commissioner.variable} font-sans antialiased bg-neutral-50 text-neutral-900 min-h-screen`}
      >
        <SeoJsonLd />
        <LanguageProvider>
          <a
            href="#home"
            className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-md focus:no-underline focus:outline-none focus:[clip:auto] focus:[width:auto] focus:[height:auto] focus:[margin:0] focus:[overflow:visible]"
          >
            Skip to content
          </a>
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
