import type { Metadata } from 'next';
import { Commissioner } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from './LanguageContext';
import { LocaleContent } from './LocaleContent';

const commissioner = Commissioner({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-sans',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://evazu.art';
const ogImagePath = `${basePath}/images/Twitter%20post%20-%201.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ekaterina Zueva — Illustrator, Graphic Designer, 2D Animator',
  description:
    'Portfolio of Ekaterina Zueva. Illustration, 2D animation, branding, and graphic design. Over 10 years of experience.',
  icons: {
    icon: [{ url: '/images/Favicon%2092x92.jpg', type: 'image/jpeg' }],
    apple: [{ url: '/images/Favicon%2092x92.jpg', type: 'image/jpeg' }],
  },
  openGraph: {
    type: 'website',
    title: 'Ekaterina Zueva — Illustrator, Graphic Designer, 2D Animator',
    description:
      'Portfolio of Ekaterina Zueva. Illustration, 2D animation, branding, and graphic design. Over 10 years of experience.',
    images: [{ url: ogImagePath, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekaterina Zueva — Illustrator, Graphic Designer, 2D Animator',
    description:
      'Portfolio of Ekaterina Zueva. Illustration, 2D animation, branding, and graphic design. Over 10 years of experience.',
    images: [ogImagePath],
  },
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
