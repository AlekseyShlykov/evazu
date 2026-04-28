'use client';

import { SectionTitle, ProjectCard } from '@/components';
import { CaseStudyModalGate } from '@/components/CaseStudyModalGate';
import { illustrationProjects } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

const illustrationCaseStudyByIndex: Record<number, string> = {
  0: 'brutalist-belgrade',
  1: 'belgrade-stories',
  2: 'foxy-roasters',
  3: 'yerevan',
  4: 'tea-branding',
  5: 'belgrade-atmosphere',
  6: 'music-visuals',
  7: 'nekorobka-infographics',
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
