import { caseStudies, type CaseStudy } from "@/lib/caseStudies";

/**
 * Match a case study without storing its slug.
 * The real-estate study may move to a neutral slug in a separate change.
 * Matching on name, industry and slug text keeps the href in sync.
 */
export type CaseStudyMatch = { name: string } | { includes: string };

export function normaliseCaseStudyText(value: string) {
  return value.toLowerCase().replace(/-/g, " ");
}

export function caseStudyMatches(study: CaseStudy, match: CaseStudyMatch) {
  if ("name" in match) return study.name === match.name;
  const haystack = normaliseCaseStudyText(`${study.name} ${study.industry ?? ""} ${study.slug}`);
  return haystack.includes(normaliseCaseStudyText(match.includes));
}

export function resolveCaseStudy(match: CaseStudyMatch) {
  return caseStudies.find((study) => caseStudyMatches(study, match));
}

export function caseStudyPath(study: CaseStudy) {
  return `/case-studies/${study.slug}`;
}
