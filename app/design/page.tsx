'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { SectionTitle, ProjectCard, EmbedDriveCard } from '@/components';
import { brandingProjects, ruBrandingHrefs } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { caseStudies } from '@/lib/caseStudies';

const CaseStudyModal = dynamic(
  () => import('@/components/CaseStudyModal').then((m) => m.CaseStudyModal),
  { ssr: false },
);

export default function DesignPage() {
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
          <SectionTitle>{t.sectionTitles.branding}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {brandingProjects.map((project, i) => {
              const href = locale === 'ru' && ruBrandingHrefs[i] != null ? ruBrandingHrefs[i]! : project.href;
              return 'embedDriveId' in project && project.embedDriveId ? (
                <EmbedDriveCard
                  key={project.href}
                  title={t.brandingProjectTitles[i] ?? project.title}
                  href={href}
                  embedDriveId={project.embedDriveId}
                  category={t.categoryBrandingDesign}
                />
              ) : (
                <ProjectCard
                  key={project.href}
                  title={t.brandingProjectTitles[i] ?? project.title}
                  href={href}
                  category={t.categoryBrandingDesign}
                  aspectRatio="wide"
                  image={'image' in project ? project.image : undefined}
                  thumbnailUrl={
                    'vimeoId' in project && project.vimeoId
                      ? `https://vumbnail.com/${project.vimeoId}.jpg`
                      : 'googleDriveFileId' in project && project.googleDriveFileId
                        ? `https://drive.google.com/thumbnail?id=${project.googleDriveFileId}&sz=w640`
                        : undefined
                  }
                  onClick={i === 0 ? () => setOpenCaseStudy('tea-branding') : undefined}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
