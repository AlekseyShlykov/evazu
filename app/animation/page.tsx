'use client';

import {
  SectionTitle,
  ProjectCard,
  AnimationVideoCard,
  DriveVideoCard,
} from '@/components';
import { animationItems, ruAnimationHrefs } from '@/lib/data';
import type { AnimationItem } from '@/lib/data';
import { useLanguage } from '@/app/LanguageContext';
import { translations, type Locale } from '@/lib/translations';

function AnimationBlock({
  item,
  t,
  projectHrefOverride,
}: {
  item: AnimationItem;
  t: (typeof translations)[Locale];
  projectHrefOverride?: string;
}) {
  if (item.type === 'video') {
    const title =
      item.vimeoId === '845353993'
        ? t.animationTitles.nekorobka
        : item.vimeoId === '841664288'
          ? t.animationTitles.shcha7sec
          : item.vimeoId === '380339662'
            ? t.animationTitles.allstations
            : item.projectTitle ?? '';
    const href = projectHrefOverride ?? item.projectHref;
    return (
      <AnimationVideoCard
        vimeoId={item.vimeoId}
        projectTitle={title}
        projectHref={href}
      />
    );
  }
  if (item.type === 'driveVideo') {
    const thumbUrl = item.previewImage
      ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${encodeURIComponent(item.previewImage)}`
      : item.googleDriveFileId
        ? `https://drive.google.com/thumbnail?id=${item.googleDriveFileId}&sz=w640`
        : null;
    const href = projectHrefOverride ?? item.projectHref;
    return (
      <DriveVideoCard
        driveUrl={item.driveUrl}
        title={t.animationTitles.learnWithMochi}
        copyright={t.learnWithMochiCopyright}
        thumbnailUrl={thumbUrl}
        projectHref={href}
      />
    );
  }
  if (item.type === 'project') {
    return (
      <ProjectCard
        title={item.title}
        href={item.href}
        category={t.categoryAnimation}
        aspectRatio="wide"
      />
    );
  }
  if (item.type === 'copyright') {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-500">
        <p>{item.text}</p>
      </div>
    );
  }
  if (item.type === 'link') {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 px-6 py-8 text-center font-medium text-neutral-700 hover:border-accent hover:text-accent transition-colors"
      >
        {t.animationTitles.moreAnimation} →
      </a>
    );
  }
  return null;
}

export default function AnimationPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <section className="py-section">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.animation}</SectionTitle>
          <p className="text-sm text-neutral-500 mb-4">{t.portfolioNote}</p>
          <ul className="text-sm text-neutral-600 mb-6 space-y-1 list-disc list-inside max-w-4xl">
            {t.portfolioAnimationIntro.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="grid gap-6 sm:grid-cols-2">
            {animationItems.map((item, i) => (
              <AnimationBlock
                key={i}
                item={item}
                t={t}
                projectHrefOverride={locale === 'ru' && i < ruAnimationHrefs.length ? ruAnimationHrefs[i] : undefined}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
