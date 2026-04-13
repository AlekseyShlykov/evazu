'use client';

import { SectionTitle, ServiceCard, ContactCard } from '@/components';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

export default function ServicesPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <section className="py-section">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.services}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {t.services.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                items={[...service.items]}
                href={
                  i === 0
                    ? '/illustration'
                    : i === 1
                      ? '/animation'
                      : i === 2 || i === 3
                        ? '/design'
                        : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white border-y border-neutral-100 content-auto">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.howIWork}</SectionTitle>
          <div className="space-y-10 max-w-6xl">
            {t.howIWork.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-neutral-100 border-t border-neutral-200 content-auto">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="contact">{t.sectionTitles.contact}</SectionTitle>
          <ContactCard />
        </div>
      </section>
    </div>
  );
}
