export const caseStudyDetails = [
  {
    slug: "huntress-recruitment",
    metadataTitle: "Huntress Recruitment Case Study | 23Labs",
    description:
      "How 23Labs helped Huntress Recruitment connect Bullhorn, SEEK and its website, reducing duplicate admin and improving consistency across platforms.",
    hero: {
      eyebrow: "Case Study / Huntress Recruitment",
      title: "How Huntress Recruitment connected Bullhorn, SEEK and its website",
      logo: {
        src: "/work/huntress/huntress-logo.png",
        alt: "Huntress Recruitment logo",
        width: 260,
        height: 80,
      },
      image: {
        src: "/work/huntress/hero.jpg",
        alt: "Recruitment team working together on laptops in a modern office",
      },
      meta: [
        { label: "Client", value: "Huntress Recruitment" },
        { label: "Industry", value: "Recruitment" },
        { label: "Location", value: "New Zealand" },
        { label: "Systems", value: "Bullhorn, SEEK, WordPress" },
        { label: "Services", value: "System Integration, Workflow Automation, Data Management" },
      ],
    },
    challenge: {
      eyebrow: "The challenge",
      title: "Three systems, three versions of the truth",
      paragraphs: [
        "Huntress Recruitment was managing job information across Bullhorn, SEEK and its WordPress website.",
        "Because each system handled information differently, recruiters were often required to manually update job details across multiple platforms.",
        "Public-facing information such as job titles and locations could also differ from the internal information stored inside Bullhorn.",
        "This created unnecessary administration, increased the risk of inconsistencies and made the publishing process more complicated than it needed to be.",
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "A connected workflow between Bullhorn, SEEK and the website",
      paragraphs: [
        "23Labs mapped the existing workflow between Bullhorn, SEEK and the company website to understand where information was being duplicated and where the process could be simplified.",
        "We introduced dedicated public-facing fields for job titles and locations, allowing Huntress to keep its internal Bullhorn records structured correctly while controlling what candidates saw publicly.",
        "The connected workflow allowed job information to move more consistently between Bullhorn, SEEK and the website, reducing the need for manual re-entry and workarounds.",
      ],
      workflow: [
        { key: "bullhorn", label: "Bullhorn", icon: "integration" },
        { key: "fields", label: "Public Job Fields", icon: "document" },
        { key: "seek", label: "SEEK", icon: "eye" },
        { key: "website", label: "Website", icon: "wordpress" },
      ],
    },
    result: {
      eyebrow: "The result",
      title: "A cleaner, more connected recruitment workflow",
      paragraphs: [
        "Huntress gained a cleaner and more connected recruitment workflow.",
        "The team now has better control over public job information while continuing to use Bullhorn as the core recruitment system.",
        "The improvements helped reduce duplicate administration, improve consistency across platforms and create a more scalable process for publishing and managing vacancies.",
      ],
    },
    outcomes: {
      eyebrow: "Key outcomes",
      title: "What changed for Huntress",
      items: [
        {
          title: "Less duplicate administration",
          body: "Fewer repetitive updates across multiple systems.",
        },
        {
          title: "More consistent publishing",
          body: "Job information is better aligned between Bullhorn, SEEK and the website.",
        },
        {
          title: "Better control of public information",
          body: "Candidate-facing titles and locations can be managed separately from internal Bullhorn records.",
        },
        {
          title: "More scalable workflows",
          body: "The process is easier to manage as job volumes increase.",
        },
      ],
    },
    built: {
      eyebrow: "Our approach",
      title: "Built around the systems already in place",
      paragraphs: [
        "Rather than replacing the tools Huntress already relied on, the focus was on improving how those systems worked together.",
        "By connecting Bullhorn, SEEK and WordPress more effectively, Huntress was able to simplify the workflow without disrupting the recruitment process already used by the team.",
      ],
      systems: [
        { label: "Bullhorn", icon: "integration" },
        { label: "SEEK", icon: "eye" },
        { label: "WordPress", icon: "wordpress" },
      ],
    },
    cta: {
      title: "Got systems that should be working together?",
      body: "We help businesses connect existing platforms, remove repetitive admin and build cleaner workflows around the way their teams already work.",
      label: "Talk to 23Labs",
    },
  },
] as const;

export type CaseStudyDetail = (typeof caseStudyDetails)[number];

export function getCaseStudyDetail(slug: string) {
  return caseStudyDetails.find((item) => item.slug === slug);
}

export function getAllCaseStudyDetailSlugs() {
  return caseStudyDetails.map((item) => item.slug);
}
