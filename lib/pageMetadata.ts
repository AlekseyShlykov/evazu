import { translations } from '@/lib/translations';

/** Meta + OG/Twitter description (line break for previews that support it). */
export const defaultSiteDescription =
  'Ekaterina Zueva\nIllustration, 2D animation, graphic design';

/** OG/Twitter title only — site name is set separately to avoid repeating the name in link previews. */
export const sharePreviewTitle = 'Illustration, 2D animation, graphic design';

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

/**
 * Home page OG/Twitter description only — must not repeat `siteName` + `sharePreviewTitle`
 * (Telegram and others show all three; duplicating the two-line blurb looks like repeated text).
 */
export const shareHomeOgDescription = excerpt(en.hero.intro, 160);

/** English excerpts from existing site strings for meta descriptions (no new copy). */
export const seoPageDescriptions = {
  about: excerpt(en.about.bio),
  illustration: excerpt(illustrationBody),
  animation: excerpt(en.services[1].items.join(' ')),
  design: excerpt(en.brandingProjectTitles[0]),
  services: excerpt(en.howIWork[0].text),
} as const;
