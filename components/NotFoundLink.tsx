'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

export function NotFoundLink() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <Link href="/" className="text-accent underline-offset-2 hover:underline text-lg font-medium">
      {t.notFound.backHome}
    </Link>
  );
}
