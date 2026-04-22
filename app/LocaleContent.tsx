'use client';

import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { useEffect } from 'react';

/**
 * Wraps page content; syncs document lang when locale changes.
 * No key so children re-render from context instead of remounting.
 */
export function LocaleContent({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale === 'fr' ? 'fr' : 'en';
  }, [locale]);

  return (
    <div className="contents">
      <a
        href="#home"
        className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-md focus:no-underline focus:outline-none focus:[clip:auto] focus:[width:auto] focus:[height:auto] focus:[margin:0] focus:[overflow:visible]"
      >
        {t.a11y.skipToContent}
      </a>
      {children}
    </div>
  );
}
