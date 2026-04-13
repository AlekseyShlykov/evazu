'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { SectionTitle, ProjectCard } from '@/components';
import { illustrationProjects, ruIllustrationHrefs } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { caseStudies } from '@/lib/caseStudies';

const CaseStudyModal = dynamic(
  () => import('@/components/CaseStudyModal').then((m) => m.CaseStudyModal),
  { ssr: false },
);

export default function IllustrationPage() {
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

      <section className="py-section">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.illustration}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {illustrationProjects.map((project, i) => (
              <ProjectCard
                key={project.href}
                title={t.illustrationProjectTitles[i] ?? project.title}
                href={locale === 'ru' && ruIllustrationHrefs[i] != null ? ruIllustrationHrefs[i]! : project.href}
                category={t.categoryIllustration}
                aspectRatio="wide"
                image={project.image}
                onClick={
                  i === 0 ? () => setOpenCaseStudy('brutalist-belgrade')
                  : i === 1 ? () => setOpenCaseStudy('belgrade-stories')
                  : i === 2 ? () => setOpenCaseStudy('foxy-roasters')
                  : i === 3 ? () => setOpenCaseStudy('yerevan')
                  : i === 4 ? () => setOpenCaseStudy('tea-branding')
                  : i === 5 ? () => setOpenCaseStudy('belgrade-atmosphere')
                  : i === 6 ? () => setOpenCaseStudy('music-visuals')
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
