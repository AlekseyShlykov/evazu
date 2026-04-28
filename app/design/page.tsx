'use client';

import { SectionTitle, ProjectCard } from '@/components';
import { CaseStudyModalGate } from '@/components/CaseStudyModalGate';
import { brandingProjects } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

const designCaseStudyByIndex: Record<number, string> = {
  0: 'tea-branding',
  1: 'nekorobka-hobby-kits',
  2: 'foxy-roasters',
  3: 'music-visuals',
  4: 'hobby-matching-animation',
};

export default function DesignPage() {
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
          <SectionTitle>{t.sectionTitles.branding}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {brandingProjects.map((project, i) => {
              const caseId = designCaseStudyByIndex[i];
              return (
                <ProjectCard
                  key={project.href}
                  title={t.brandingProjectTitles[i] ?? project.title}
                  href={project.href}
                  category={t.categoryBrandingDesign}
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
