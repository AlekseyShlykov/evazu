'use client';

import { SectionTitle, ContactCard, NewsletterSubscribe } from '@/components';
import { heroImage } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14 md:items-start">
            <div className="min-w-0 w-64 md:w-80 shrink-0">
              <img
                src={`${basePath}/images/${encodeURIComponent(heroImage)}`}
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
                fetchPriority="high"
                decoding="async"
                width={320}
                height={320}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                {t.about.tagline}
              </p>
              <div className="text-neutral-600 text-lg max-w-2xl whitespace-pre-line">
                {t.about.bio}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-white border-y border-neutral-100 content-auto">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.toolsAndLanguages}</SectionTitle>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 max-w-4xl">
            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {t.sectionTitles.tools}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {t.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {t.sectionTitles.languages}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-neutral-600">
                {t.languages.map((lang) => (
                  <li key={lang.name}>
                    <span className="font-medium text-neutral-900">{lang.name}:</span>{' '}
                    {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-neutral-100 border-t border-neutral-200 content-auto">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="contact">{t.sectionTitles.contact}</SectionTitle>
          <ContactCard />
        </div>
      </section>

      <section id="newsletter" className="py-16 md:py-24 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.newsletter}</SectionTitle>
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm">
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">{t.newsletter.intro}</p>
            <NewsletterSubscribe />
          </div>
        </div>
      </section>
    </div>
  );
}
