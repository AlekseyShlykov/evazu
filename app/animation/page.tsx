'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { SectionTitle, AnimationVideoCard } from '@/components';
import { animationItems } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { caseStudies } from '@/lib/caseStudies';
import { useCaseStudyModalUrl } from '@/lib/useCaseStudyModalUrl';

const CaseStudyModal = dynamic(
  () => import('@/components/CaseStudyModal').then((m) => m.CaseStudyModal),
  { ssr: false },
);

function AnimationPageContent() {
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
          <SectionTitle>{t.sectionTitles.animation}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {animationItems.map((item) => {
              if (item.type !== 'video' || !item.caseStudyId) return null;
              const titleKey = item.animationTitleKey ?? 'nekorobka';
              const projectTitle = t.animationTitles[titleKey];
              return (
                <AnimationVideoCard
                  key={item.caseStudyId}
                  vimeoId={item.vimeoId}
                  projectTitle={projectTitle}
                  projectHref={item.projectHref}
                  coverImage={item.coverImage}
                  onOpenCaseStudy={() => openCaseStudyModal(item.caseStudyId!)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AnimationPage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
      <AnimationPageContent />
    </Suspense>
  );
}
