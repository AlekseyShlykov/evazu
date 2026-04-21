'use client';

import { site } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { ContactFormspree } from './ContactFormspree';

export function ContactCard() {
  const { locale } = useLanguage();
  const t = translations[locale].contact;

  return (
    <div className="w-full max-w-6xl space-y-8">
      <p className="text-neutral-600 text-lg leading-relaxed w-full max-w-none">
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
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 transition-colors hover:border-accent hover:bg-accent/5"
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {t.instagram}
          </span>
          <span className="text-base font-medium text-neutral-900 group-hover:text-accent break-all">
            {site.instagramLabel} →
          </span>
        </a>
      </div>
      <div className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500">{t.formTitle}</h2>
        <ContactFormspree />
      </div>
    </div>
  );
}
