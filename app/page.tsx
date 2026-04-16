'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ContactCard, NewsletterSubscribe, SectionTitle, ProjectHoverCard } from '@/components';
import { heroImage } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { caseStudies } from '@/lib/caseStudies';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

const CaseStudyModal = dynamic(
  () => import('@/components/CaseStudyModal').then((m) => m.CaseStudyModal),
  { ssr: false },
);

const featuredProjects = [
  {
    titleIndex: 0,
    titleSource: 'illustration' as const,
    image: 'belgrade.webp',
    caseStudyId: 'brutalist-belgrade',
  },
  {
    titleIndex: 1,
    titleSource: 'illustration' as const,
    image: 'Stories Belgrade.webp',
    caseStudyId: 'belgrade-stories',
  },
  {
    titleIndex: 2,
    titleSource: 'illustration' as const,
    image: 'Foxy Roasters.webp',
    caseStudyId: 'foxy-roasters',
  },
  {
    titleIndex: 0,
    titleSource: 'branding' as const,
    image: 'TW1.jpg',
    caseStudyId: 'tea-branding',
  },
];

function HomePageContent() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const { openCaseStudy, openCaseStudyModal, closeCaseStudyModal } = useCaseStudyModalUrl();

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      {openCaseStudy && caseStudies[openCaseStudy] && (
        <CaseStudyModal
          study={caseStudies[openCaseStudy][locale]}
          onClose={closeCaseStudyModal}
        />
      )}

      <section id="home" className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-14 md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                {t.hero.name}
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl whitespace-pre-line">
                {t.hero.greeting}
              </p>
            </div>
            <div className="hidden md:block min-w-0 w-64 md:w-72 shrink-0">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${encodeURIComponent(heroImage)}`}
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
                fetchPriority="high"
                decoding="async"
                width={288}
                height={288}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 px-3 w-full max-w-[100vw] box-border md:hidden">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${encodeURIComponent(heroImage)}`}
            alt=""
            className="w-full aspect-square object-cover rounded-lg"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section className="py-section bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.selectedProjects}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => {
              const title =
                project.titleSource === 'illustration'
                  ? t.illustrationProjectTitles[project.titleIndex]
                  : t.brandingProjectTitles[project.titleIndex];
              return (
                <ProjectHoverCard
                  key={project.caseStudyId}
                  title={title}
                  image={project.image}
                  onClick={() => openCaseStudyModal(project.caseStudyId)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-16 md:py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.newsletter}</SectionTitle>
          <div className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm">
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">{t.newsletter.intro}</p>
            <NewsletterSubscribe />
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

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" aria-hidden />}>
      <HomePageContent />
    </Suspense>
  );
}
