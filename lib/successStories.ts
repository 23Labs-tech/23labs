import { caseStudyPath, resolveCaseStudy, type CaseStudyMatch } from "@/lib/caseStudyMatch";

export type SuccessStoryDefinition = {
  match: CaseStudyMatch;
  category: string;
  body: string;
  outcomes: readonly string[];
  /** Industry slugs this story should lead with, when relevant. */
  relevantIndustrySlugs?: readonly string[];
};

export const successStoryDefinitions: readonly SuccessStoryDefinition[] = [
  {
    match: { name: "Huntress Recruitment" },
    category: "System Integration",
    body: "23Labs connected Bullhorn, SEEK and the Huntress website so vacancy information could move through a cleaner, more consistent publishing workflow.",
    outcomes: [
      "Less duplicate administration",
      "More consistent publishing",
      "Better control of public job information",
    ],
    relevantIndustrySlugs: ["recruitment"],
  },
  {
    match: { name: "CorIT Tech" },
    category: "Onboarding Automation",
    body: "23Labs automated client onboarding across CorIT Tech's CRM and project tools, removing repetitive copy-paste work as new clients came on board.",
    outcomes: ["10+ hours saved each month", "Fewer manual errors", "A more scalable onboarding process"],
    relevantIndustrySlugs: ["professional-services"],
  },
  {
    match: { name: "Real Estate Office | Australia" },
    category: "Workflow Automation",
    body: "23Labs improved an Australian real estate office's website and connected customer enquiries with property records so follow-up is easier to track.",
    outcomes: ["Less manual follow-up", "Clearer tracking of enquiries", "Better visibility across the office workflow"],
    relevantIndustrySlugs: ["real-estate"],
  },
] as const;

export type ResolvedSuccessStory = {
  href: string;
  label: string;
  category: string;
  body: string;
  outcomes: readonly string[];
  relevantIndustrySlugs?: readonly string[];
};

/**
 * Resolves the shared set of real case studies used in "success story"
 * sections. When `preferredSlug` is given, the story whose
 * relevantIndustrySlugs include it is moved to the front.
 */
export function resolveSuccessStories(preferredSlug?: string): ResolvedSuccessStory[] {
  const resolved = successStoryDefinitions.flatMap((item) => {
    const study = resolveCaseStudy(item.match);
    if (!study) return [];
    return [
      {
        href: caseStudyPath(study),
        label: study.name,
        category: item.category,
        body: item.body,
        outcomes: item.outcomes,
        relevantIndustrySlugs: item.relevantIndustrySlugs,
      },
    ];
  });

  if (!preferredSlug) return resolved;

  const preferred = resolved.filter((story) => story.relevantIndustrySlugs?.includes(preferredSlug));
  const rest = resolved.filter((story) => !story.relevantIndustrySlugs?.includes(preferredSlug));
  return [...preferred, ...rest];
}
