'use client';

import { useLanguage } from '@/app/LanguageContext';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export function LanguageSwitcher({ onLocaleChange }: { onLocaleChange?: () => void } = {}) {
  const { locale, setLocale } = useLanguage();
  const t = translations[locale];

  const handleLocaleClick = (code: Locale) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLocale(code);
    onLocaleChange?.();
  };

  return (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label={t.sectionTitles.languages}>
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
          aria-label={code === 'en' ? t.a11y.switchToEnglish : t.a11y.switchToFrench}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
