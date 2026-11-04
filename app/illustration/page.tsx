'use client';

import { SectionTitle, ProjectCard } from '@/components';
import { CaseStudyModalGate } from '@/components/CaseStudyModalGate';
import { illustrationProjects } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

const illustrationCaseStudyByIndex: Record<number, string> = {
  0: 'menopause-research',
  1: 'handmade-photo-comic',
  2: 'media-226-editorial',
  3: 'brutalist-belgrade',
  4: 'belgrade-stories',
  5: 'foxy-roasters',
  6: 'yerevan',
  7: 'tea-branding',
  8: 'belgrade-atmosphere',
  9: 'music-visuals',
  10: 'nekorobka-infographics',
};

export default function IllustrationPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const { openCaseStudy, openCaseStudyModal, closeCaseStudyModal } = useCaseStudyModalUrl();

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      {openCaseStudy && (
        <CaseStudyModalGate studyId={openCaseStudy} locale={locale} onClose={closeCaseStudyModal} />
      )}

      <section className="py-section">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.illustration}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {illustrationProjects.map((project, i) => {
              const caseId = illustrationCaseStudyByIndex[i];
              return (
                <ProjectCard
                  key={project.href}
                  title={t.illustrationProjectTitles[i] ?? project.title}
                  href={project.href}
                  category={t.categoryIllustration}
                  aspectRatio="wide"
                  image={project.image}
                  imageFit={i === 0 ? 'contain' : undefined}
                  imageBackground={i === 0 ? '#FCF4E9' : undefined}
                  priority={i === 0}
                  onClick={caseId ? () => openCaseStudyModal(caseId) : undefined}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
