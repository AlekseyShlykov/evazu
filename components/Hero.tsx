'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import { site, heroImage } from '@/lib/data';
import { translations } from '@/lib/translations';

export function Hero() {
  const { locale } = useLanguage();
  const t = translations[locale].hero;

  return (
    <section
      id="home"
      className="pt-8 pb-16 md:pt-12 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 md:items-center">
          <div>
            <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              {t.name}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-6 max-w-2xl">
              {t.tagline}
            </p>
            <p className="text-neutral-600 mb-8 max-w-2xl whitespace-pre-line">
              {t.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 transition-colors"
              >
                {t.viewPortfolio}
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                {t.contact}
              </Link>
            </div>
          </div>
          <div className="min-w-0">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${encodeURIComponent(heroImage)}`}
              alt=""
              className="w-full max-w-full aspect-square object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
