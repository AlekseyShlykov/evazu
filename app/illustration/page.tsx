'use client';

import { Suspense } from 'react';
import { SectionTitle, ProjectCard } from '@/components';
import { CaseStudyModalGate } from '@/components/CaseStudyModalGate';
import { illustrationProjects } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

function IllustrationPageContent() {
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
            {illustrationProjects.map((project, i) => (
              <ProjectCard
                key={project.href}
                title={t.illustrationProjectTitles[i] ?? project.title}
                href={project.href}
                category={t.categoryIllustration}
                aspectRatio="wide"
                image={project.image}
                onClick={
                  i === 0
                    ? () => openCaseStudyModal('brutalist-belgrade')
                    : i === 1
                      ? () => openCaseStudyModal('belgrade-stories')
                      : i === 2
                        ? () => openCaseStudyModal('foxy-roasters')
                        : i === 3
                          ? () => openCaseStudyModal('yerevan')
                          : i === 4
                            ? () => openCaseStudyModal('tea-branding')
                            : i === 5
                              ? () => openCaseStudyModal('belgrade-atmosphere')
                              : i === 6
                                ? () => openCaseStudyModal('music-visuals')
                                : i === 7
                                  ? () => openCaseStudyModal('nekorobka-infographics')
                                  : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function IllustrationPage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
      <IllustrationPageContent />
    </Suspense>
  );
}
