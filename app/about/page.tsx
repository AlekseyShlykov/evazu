'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLanguage } from '@/app/LanguageContext';
import { SectionTitle, ContactCard } from '@/components';
import { heroImage } from '@/lib/data';
import { translations } from '@/lib/translations';

const NewsletterSubscribe = dynamic(() =>
  import('@/components/NewsletterSubscribe').then((m) => m.NewsletterSubscribe),
);

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
              <Image
                src={`${basePath}/images/${encodeURIComponent(heroImage)}`}
                alt={t.hero.name}
                className="w-full aspect-square object-cover rounded-lg"
                width={320}
                height={320}
                priority
                sizes="(max-width: 768px) 256px, 320px"
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-600 tracking-wide mb-4 max-w-2xl">
                {t.about.tagline}
              </p>
              <div className="text-neutral-600 text-lg max-w-2xl whitespace-pre-line">
                {t.about.bio}
              </div>
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
          <div className="max-w-6xl space-y-8">
            <p className="text-neutral-600 text-lg leading-relaxed">{t.newsletter.intro}</p>
            <NewsletterSubscribe />
          </div>
        </div>
      </section>
    </div>
  );
}
