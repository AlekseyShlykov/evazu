'use client';

import { site } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

export function Footer() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 py-8">
      <div className="mx-auto max-w-content px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} {t.hero.name}</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`mailto:${site.email}`} className="hover:text-neutral-900 transition-colors">
            {t.footer.email}
          </a>
          <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
            {t.footer.telegram}
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
            {t.footer.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
