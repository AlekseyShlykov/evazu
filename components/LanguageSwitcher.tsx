'use client';

import { useLanguage } from '@/app/LanguageContext';
import type { Locale } from '@/lib/translations';

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'fr', label: 'FR' },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const handleLocaleClick = (code: Locale) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLocale(code);
  };

  return (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label="Language">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={handleLocaleClick(code)}
          className={`px-2 py-1 rounded transition-colors min-w-[2.25rem] ${
            locale === code
              ? 'font-semibold text-neutral-900 bg-neutral-200'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
          aria-label={`Switch to ${label}`}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
