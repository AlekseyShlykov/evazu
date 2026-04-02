'use client';

import { useState } from 'react';
import { ContactCard, SectionTitle, CaseStudyModal, ProjectHoverCard } from '@/components';
import { heroImage } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { caseStudies } from '@/lib/caseStudies';

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
    image: 'tea branding.webp',
    caseStudyId: 'tea-branding',
  },
];

export default function HomePage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      {openCaseStudy && caseStudies[openCaseStudy] && (
        <CaseStudyModal
          study={caseStudies[openCaseStudy][locale]}
          onClose={() => setOpenCaseStudy(null)}
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
                className="w-full aspect-square object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 px-3 w-full max-w-[100vw] box-border md:hidden">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${encodeURIComponent(heroImage)}`}
            alt=""
            className="w-full aspect-square object-cover rounded-sm"
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
                  onClick={() => setOpenCaseStudy(project.caseStudyId)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-neutral-100 border-t border-neutral-200">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="contact">{t.sectionTitles.contact}</SectionTitle>
          <ContactCard />
        </div>
      </section>
    </div>
  );
}
