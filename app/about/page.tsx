'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/app/LanguageContext';
import { SectionTitle, ContactCard } from '@/components';
import { heroImage } from '@/lib/data';
import { translations } from '@/lib/translations';
import { encodePublicPath, webpSrcFor } from '@/lib/imageSources';

const NewsletterSubscribe = dynamic(() =>
  import('@/components/NewsletterSubscribe').then((m) => m.NewsletterSubscribe),
);

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const heroSrc = `${basePath}${encodePublicPath('/images/' + heroImage)}`;
  const heroWebp = webpSrcFor(heroSrc);

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14 md:items-start">
            <div className="min-w-0 w-64 md:w-80 shrink-0">
              <picture>
                {heroWebp && <source srcSet={heroWebp} type="image/webp" />}
                <img
                  src={heroSrc}
                  alt={t.hero.name}
                  className="w-full aspect-square object-cover rounded-lg"
                  width={320}
                  height={320}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </picture>
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
