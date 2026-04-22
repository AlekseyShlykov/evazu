import { translations } from '@/lib/translations';

/** First line for OG/Twitter title (same as visible site name). */
export const shareOgTitle = translations.en.hero.name;

/** Second line for OG/Twitter description and browser meta description. */
export const sharePreviewTitle = 'Illustration, 2D animation, graphic design';

/** `<meta name="description">` — both lines for search snippets (no duplicate with og:title + og:description pair). */
export const shareMetaDescription = `${shareOgTitle}\n${sharePreviewTitle}`;

/** Default `<title>` for the home page (name once). */
export const defaultDocumentTitle = 'Ekaterina Zueva — Illustration, 2D animation, graphic design';

const en = translations.en;

function excerpt(text: string, max = 160): string {
  const normalized = text.trim().replace(/\s+/g, ' ');
  if (normalized.length <= max) return normalized;
  return normalized.slice(0, max).trimEnd();
}

const greetingParts = en.hero.greeting.split('\n\n');
const illustrationBody = greetingParts[1] ?? greetingParts[0] ?? en.hero.greeting;

/** English excerpts from existing site strings for meta descriptions (no new copy). */
export const seoPageDescriptions = {
  about: excerpt(en.about.bio),
  illustration: excerpt(illustrationBody),
  animation: excerpt(en.services[1].items.join(' ')),
  design: excerpt(en.brandingProjectTitles[0]),
  services: excerpt(en.howIWork[0].text),
} as const;
