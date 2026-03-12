'use client';

import { site } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

export function ContactCard() {
  const { locale } = useLanguage();
  const t = translations[locale].contact;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm max-w-3xl">
      <p className="text-neutral-600 text-lg mb-8 max-w-2xl">
        {t.intro}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href={`mailto:${site.email}`}
          className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 transition-colors hover:border-accent hover:bg-accent/5"
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {t.email}
          </span>
          <span className="text-base font-medium text-neutral-900 group-hover:text-accent break-all">
            {site.email}
          </span>
        </a>
        <a
          href={site.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 transition-colors hover:border-accent hover:bg-accent/5"
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {t.telegram}
          </span>
          <span className="text-base font-medium text-neutral-900 group-hover:text-accent">
            {site.telegramLabel} →
          </span>
        </a>
        <a
          href={site.fiverrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 transition-colors hover:border-accent hover:bg-accent/5 sm:col-span-2 lg:col-span-1"
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {t.fiverr}
          </span>
          <span className="text-base font-medium text-neutral-900 group-hover:text-accent">
            {site.fiverrLabel} →
          </span>
        </a>
      </div>
    </div>
  );
}
