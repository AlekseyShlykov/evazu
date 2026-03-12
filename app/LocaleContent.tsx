'use client';

import { useLanguage } from '@/app/LanguageContext';
import { useEffect } from 'react';

/**
 * Wraps page content; syncs document lang when locale changes.
 * No key so children re-render from context instead of remounting.
 */
export function LocaleContent({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale === 'ru' ? 'ru' : locale === 'fr' ? 'fr' : 'en';
  }, [locale]);

  return <div className="contents">{children}</div>;
}
