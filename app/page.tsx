'use client';

import {
  Hero,
  SectionTitle,
  ServiceCard,
  ProjectCard,
  ContactCard,
  AnimationVideoCard,
  DriveVideoCard,
  EmbedDriveCard,
} from '@/components';
import { site, illustrationProjects, animationItems, brandingProjects, ruIllustrationHrefs, ruAnimationHrefs, ruBrandingHrefs } from '@/lib/data';
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

export default function HomePage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <Hero />

      <section id="services" className="py-section">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="services">{t.sectionTitles.services}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {t.services.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                items={[...service.items]}
                href={
                  i === 0
                    ? '#illustration'
                    : i === 1
                      ? '#animation'
                      : i === 2 || i === 3
                        ? '#branding'
                        : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-section bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <p className="text-neutral-600 text-lg md:text-xl mb-12 max-w-6xl">
            {t.portfolioIntro}
          </p>

          <SectionTitle id="illustration" className="text-xl md:text-2xl">
            {t.sectionTitles.illustration}
          </SectionTitle>
          <p className="text-sm text-neutral-500 mb-4">{t.portfolioNote}</p>
          <ul className="text-sm text-neutral-600 mb-6 space-y-1 list-disc list-inside max-w-4xl">
            {t.portfolioIllustrationIntro.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="grid gap-6 sm:grid-cols-2">
            {illustrationProjects.map((project, i) => (
              <ProjectCard
                key={project.href}
                title={t.illustrationProjectTitles[i] ?? project.title}
                href={locale === 'ru' && ruIllustrationHrefs[i] != null ? ruIllustrationHrefs[i]! : project.href}
                category={t.categoryIllustration}
                aspectRatio="wide"
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="animation" className="py-section bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="animation">{t.sectionTitles.animation}</SectionTitle>
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

      <section id="branding" className="py-section">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="branding">{t.sectionTitles.branding}</SectionTitle>
          <p className="text-sm text-neutral-500 mb-4">{t.portfolioNote}</p>
          <ul className="text-sm text-neutral-600 mb-6 space-y-1 list-disc list-inside max-w-4xl">
            {t.portfolioBrandingIntro.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
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
                  image={project.image}
                  thumbnailUrl={
                    'vimeoId' in project && project.vimeoId
                      ? `https://vumbnail.com/${project.vimeoId}.jpg`
                      : 'googleDriveFileId' in project && project.googleDriveFileId
                        ? `https://drive.google.com/thumbnail?id=${project.googleDriveFileId}&sz=w640`
                        : undefined
                  }
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-section bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.howIWork}</SectionTitle>
          <div className="space-y-10 max-w-6xl">
            {t.howIWork.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle>{t.sectionTitles.toolsAndLanguages}</SectionTitle>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 max-w-4xl">
            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {t.sectionTitles.tools}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {t.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {t.sectionTitles.languages}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-neutral-600">
                {t.languages.map((lang) => (
                  <li key={lang.name}>
                    <span className="font-medium text-neutral-900">{lang.name}:</span>{' '}
                    {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-neutral-100 border-t border-neutral-200">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <SectionTitle id="contact">{t.sectionTitles.contact}</SectionTitle>
          <ContactCard />
        </div>
      </section>

      <footer className="bg-neutral-100 border-t border-neutral-200 py-8">
        <div className="mx-auto max-w-content px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} {t.hero.name}</p>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-neutral-900 transition-colors">
              {t.footer.email}
            </a>
            <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
              {t.footer.telegram}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
