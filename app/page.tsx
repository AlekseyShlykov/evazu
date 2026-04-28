'use client';

import { ContactCard, SectionTitle, ProjectHoverCard } from '@/components';
import { CaseStudyModalGate } from '@/components/CaseStudyModalGate';
import { heroImage } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';
import { encodePublicPath, webpSrcFor } from '@/lib/imageSources';

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

export default function HomePage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const { openCaseStudy, openCaseStudyModal, closeCaseStudyModal } = useCaseStudyModalUrl();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const heroSrc = `${basePath}${encodePublicPath('/images/' + heroImage)}`;
  const heroWebp = webpSrcFor(heroSrc);

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      {openCaseStudy && (
        <CaseStudyModalGate studyId={openCaseStudy} locale={locale} onClose={closeCaseStudyModal} />
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
              <picture>
                {heroWebp && <source srcSet={heroWebp} type="image/webp" />}
                <img
                  src={heroSrc}
                  alt={t.hero.name}
                  className="w-full aspect-square object-cover rounded-lg"
                  width={288}
                  height={288}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="mt-8 px-3 w-full max-w-[100vw] box-border md:hidden">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <picture>
              {heroWebp && <source srcSet={heroWebp} type="image/webp" />}
              <img
                src={heroSrc}
                alt={t.hero.name}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="py-section bg-white border-t border-neutral-100">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.selectedProjects}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, idx) => {
              const title =
                project.titleSource === 'illustration'
                  ? t.illustrationProjectTitles[project.titleIndex]
                  : t.brandingProjectTitles[project.titleIndex];
              return (
                <ProjectHoverCard
                  key={project.caseStudyId}
                  title={title}
                  image={project.image}
                  priority={idx === 0}
                  onClick={() => openCaseStudyModal(project.caseStudyId)}
                />
              );
            })}
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
