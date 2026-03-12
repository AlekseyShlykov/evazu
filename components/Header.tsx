'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

const navKeys = ['services', 'illustration', 'animation', 'design', 'contact'] as const;
const navHrefs: Record<(typeof navKeys)[number], string> = {
  services: '#services',
  illustration: '#illustration',
  animation: '#animation',
  design: '#branding',
  contact: '#contact',
};

export function Header() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] border-b border-neutral-200 bg-neutral-50/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/80">
      <nav
        className="mx-auto flex max-w-content min-w-0 items-center justify-between gap-2 md:gap-4 px-4 py-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="text-lg font-semibold text-neutral-900 hover:text-accent transition-colors shrink-0 min-w-0"
        >
          {t.hero.name}
        </Link>
        <div className="flex items-center gap-2 md:gap-4 min-w-0 shrink">
          <ul className="flex flex-wrap items-center justify-end gap-1 md:gap-2 text-sm min-w-0">
            {navKeys.map((key) => (
              <li key={key}>
                <Link
                  href={navHrefs[key]}
                  className="text-neutral-600 hover:text-neutral-900 px-1.5 py-1 rounded transition-colors whitespace-nowrap"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
