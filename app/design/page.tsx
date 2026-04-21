'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { SectionTitle, ProjectCard } from '@/components';
import { brandingProjects } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { caseStudies } from '@/lib/caseStudies';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

const CaseStudyModal = dynamic(
  () => import('@/components/CaseStudyModal').then((m) => m.CaseStudyModal),
  { ssr: false },
);

const designCaseStudyByIndex: Record<number, string> = {
  0: 'tea-branding',
  1: 'nekorobka-hobby-kits',
  2: 'foxy-roasters',
  3: 'music-visuals',
  4: 'hobby-matching-animation',
};

function DesignPageContent() {
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

export default function DesignPage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
      <DesignPageContent />
    </Suspense>
  );
}
