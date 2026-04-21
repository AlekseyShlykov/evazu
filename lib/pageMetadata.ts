import { translations } from '@/lib/translations';

/** Same default as root layout / OG (existing site summary). */
export const defaultSiteDescription =
  'Portfolio of Ekaterina Zueva. Illustration, 2D animation, branding, and graphic design. Over 10 years of experience.';

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
