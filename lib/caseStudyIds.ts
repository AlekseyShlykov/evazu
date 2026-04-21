/**
 * Stable list of case study keys — used for URL validation without importing the full case study module.
 * When adding a case study, add its id here and to `caseStudies` in `caseStudies.ts` (TypeScript will error if they diverge).
 */
export const CASE_STUDY_IDS = [
  'animation-over-video',
  'belgrade-atmosphere',
  'belgrade-stories',
  'brutalist-belgrade',
  'foxy-roasters',
  'hobby-matching-animation',
  'home-personal-project',
  'learn-with-mochi-animation',
  'line-animation-frame-by-frame',
  'logo-social-media-animation',
  'mixed-media-animation',
  'music-visuals',
  'nekorobka-hobby-kits',
  'nekorobka-infographics',
  'tea-branding',
  'yerevan',
] as const;

export type CaseStudyId = (typeof CASE_STUDY_IDS)[number];

const idSet = new Set<string>(CASE_STUDY_IDS);

export function isValidCaseStudyId(id: string): id is CaseStudyId {
  return idSet.has(id);
}
