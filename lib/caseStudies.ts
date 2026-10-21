export type CaseStudyResultChip = { value: string; label: string };
export type CaseStudyOutcome = { title: string; body: string };
export type CaseStudyWorkflowStep = { label: string; icon: string };
export type CaseStudySystem = { label: string; icon: string };

export type CaseStudy = {
  slug: string;
  date: string;
  name: string;
  logo?: { src: string; alt: string; contain?: boolean };
  category: string;
  industry?: string;
  location?: string;
  services: string[];
  headline: string;
  summary: string;
  heroImage: { src: string; alt: string };
  cardResults: CaseStudyResultChip[];
  challenge: string;
  solution: string;
  workflow?: CaseStudyWorkflowStep[];
  result: string;
  outcomes: CaseStudyOutcome[];
  systems?: CaseStudySystem[];
  metadataTitle: string;
  description: string;
};

export const caseStudiesCta = {
  title: "Got systems that should be working together?",
  body: "We help businesses connect existing platforms, remove repetitive admin and build better workflows around the way their teams already work.",
  label: "Talk to 23Labs",
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "huntress-recruitment",
    date: "2026-10-21",
    name: "Huntress Recruitment",
    logo: {
      src: "/work/huntress/huntress-logo.png",
      alt: "Huntress Recruitment logo",
      contain: true,
    },
    category: "System Integration",
    industry: "Recruitment",
    location: "New Zealand",
    services: ["System Integration", "Workflow Automation", "Data Management"],
    headline: "How Huntress Recruitment connected Bullhorn, SEEK and its website",
    summary:
      "23Labs helped Huntress simplify how job information moved between its recruitment systems and public website, reducing repetitive administration and improving consistency.",
    heroImage: {
      src: "/work/huntress/hero.jpg",
      alt: "Recruitment team working together on laptops in a modern office",
    },
    cardResults: [
      { value: "3 connected systems", label: "Bullhorn, SEEK and WordPress" },
      { value: "Less manual admin", label: "Reduced duplicate data entry" },
      { value: "Better control", label: "Separate internal and public job data" },
    ],
    challenge:
      "Huntress Recruitment was managing job information across Bullhorn, SEEK and its WordPress website. Because each system handled information differently, recruiters were often required to manually update job details across multiple platforms. Public-facing information such as job titles and locations could also differ from the internal information stored inside Bullhorn. This created unnecessary administration, increased the risk of inconsistencies and made the publishing process more complicated than it needed to be.",
    solution:
      "23Labs mapped the existing workflow between Bullhorn, SEEK and the company website to understand where information was being duplicated and where the process could be simplified. We introduced dedicated public-facing fields for job titles and locations, allowing Huntress to keep its internal Bullhorn records structured correctly while controlling what candidates saw publicly. The connected workflow allowed job information to move more consistently between Bullhorn, SEEK and the website, reducing the need for manual re-entry and workarounds.",
    workflow: [
      { label: "Bullhorn", icon: "integration" },
      { label: "Public Job Fields", icon: "document" },
      { label: "SEEK", icon: "eye" },
      { label: "Website", icon: "wordpress" },
    ],
    result:
      "Huntress gained a cleaner and more connected recruitment workflow. The team now has better control over public job information while continuing to use Bullhorn as the core recruitment system. The improvements helped reduce duplicate administration, improve consistency across platforms and create a more scalable process for publishing and managing vacancies.",
    outcomes: [
      { title: "Less duplicate administration", body: "Fewer repetitive updates across multiple systems." },
      { title: "More consistent publishing", body: "Job information is better aligned between Bullhorn, SEEK and the website." },
      {
        title: "Better control of public information",
        body: "Candidate-facing titles and locations can be managed separately from internal Bullhorn records.",
      },
      { title: "More scalable workflows", body: "The process is easier to manage as job volumes increase." },
    ],
    systems: [
      { label: "Bullhorn", icon: "integration" },
      { label: "SEEK", icon: "eye" },
      { label: "WordPress", icon: "wordpress" },
    ],
    metadataTitle: "Huntress Recruitment Case Study | 23Labs",
    description:
      "How 23Labs helped Huntress Recruitment connect Bullhorn, SEEK and its website, reducing duplicate admin and improving consistency across platforms.",
  },
  {
    slug: "corit-tech",
    date: "2026-08-15",
    name: "CorIT Tech",
    logo: {
      src: "/work/corit-tech.png",
      alt: "CorIT Tech",
    },
    category: "Onboarding Automation",
    industry: "IT Services",
    services: ["AI Automation", "Data Integration"],
    headline: "How CorIT Tech automated client onboarding across its tools",
    summary:
      "23Labs automated CorIT Tech's onboarding workflow, syncing data across their CRM and project tools the moment a new client signs on.",
    heroImage: {
      src: "/work/corit-tech.png",
      alt: "CorIT Tech project image with robot technology background and logo",
    },
    cardResults: [
      { value: "10+ hrs/month", label: "Saved across onboarding" },
      { value: "Fewer errors", label: "Manual data entry reduced" },
      { value: "More scalable", label: "Onboarding process" },
    ],
    challenge:
      "The team was manually moving onboarding data between disconnected tools as client volume increased. Every new client meant copying the same information by hand into their CRM, accounting and project tools, which took time and left room for mistakes.",
    solution:
      "We mapped the onboarding workflow end to end and built automations that sync data across their CRM and project tools the moment a new client signs on, removing the manual copy-paste step entirely.",
    workflow: [
      { label: "CRM", icon: "integration" },
      { label: "Automation", icon: "automation" },
      { label: "Accounting", icon: "software" },
      { label: "Provisioning", icon: "document" },
      { label: "Notification", icon: "message" },
    ],
    result:
      "Saved 10+ hours every month, reduced manual errors, and created a more scalable onboarding process.",
    outcomes: [
      { title: "Less manual data entry", body: "Onboarding information moves automatically between systems instead of being copied by hand." },
      { title: "Time saved every month", body: "The team saves 10+ hours a month that used to go into manual onboarding admin." },
      { title: "Fewer manual errors", body: "Automating the handoff removed a common source of mistakes in the onboarding process." },
      { title: "A more scalable process", body: "Onboarding keeps working smoothly as client volume grows." },
    ],
    metadataTitle: "CorIT Tech Case Study | 23Labs",
    description:
      "How 23Labs automated CorIT Tech's client onboarding, syncing data across their CRM and project tools and saving 10+ hours a month.",
  },
  {
    slug: "first-national-real-estate",
    date: "2026-07-01",
    name: "First National Real Estate",
    logo: {
      src: "/work/first-national-real-estate.png",
      alt: "First National Real Estate",
    },
    category: "Workflow Automation",
    industry: "Real Estate",
    services: ["Automation", "Customer Experience"],
    headline: "Connecting enquiries and property records for First National Real Estate",
    summary:
      "23Labs automated the handoffs between customer enquiries and property records, reducing repetitive admin for the team.",
    heroImage: {
      src: "/work/first-national-real-estate.png",
      alt: "First National Real Estate project image with interior photography and logo",
    },
    cardResults: [
      { value: "Clearer handoffs", label: "Enquiry to property records" },
      { value: "Less manual follow-up", label: "Across customer touchpoints" },
      { value: "Better visibility", label: "Across operations" },
    ],
    challenge:
      "Customer and property workflows needed clearer handoffs and fewer repetitive administrative steps. Enquiries and property records moved between people manually, with no consistent way to make sure the right person was notified at the right step.",
    solution:
      "We automated the handoffs between customer enquiries and property records, building clear triggers so the right person is notified at the right step without anyone having to chase it manually.",
    workflow: [
      { label: "Enquiry received", icon: "message" },
      { label: "Categorised", icon: "document" },
      { label: "CRM updated", icon: "integration" },
      { label: "Assigned", icon: "user" },
      { label: "Reporting", icon: "chart" },
    ],
    result:
      "Improved operational visibility and reduced the manual follow-up required across common customer touchpoints.",
    outcomes: [
      { title: "Clearer handoffs", body: "Enquiries move to property records through clear, automatic triggers." },
      { title: "Less manual follow-up", body: "The right person is notified automatically instead of someone chasing it." },
      { title: "Better operational visibility", body: "Common customer touchpoints are easier to track across the team." },
      { title: "A more structured workflow", body: "Categorisation and reporting happen as part of the process, not after it." },
    ],
    metadataTitle: "First National Real Estate Case Study | 23Labs",
    description:
      "How 23Labs automated the handoffs between customer enquiries and property records for First National Real Estate.",
  },
  {
    slug: "lily-olsen-counselling",
    date: "2026-05-01",
    name: "Lily Olsen Counselling",
    logo: {
      src: "/work/lily-olsen-counselling.png",
      alt: "Lily Olsen Counselling",
    },
    category: "Website Rebuild",
    industry: "Counselling",
    location: "Auckland, New Zealand",
    services: ["Web Development", "Brand-led Design", "Multi-page Build"],
    headline: "A calm, considered website rebuild for Lily Olsen Counselling",
    summary:
      "23Labs rebuilt Lily Olsen Counselling's website across four pages with a calm, considered design and a clear path to booking.",
    heroImage: {
      src: "/work/lily-olsen-counselling.png",
      alt: "Lily Olsen Counselling project image with counselling session photography and logo",
    },
    cardResults: [
      { value: "4-page rebuild", label: "Home, about, services, contact" },
      { value: "Easier to update", label: "Built for a non-technical owner" },
      { value: "Clear booking path", label: "Every page leads to booking" },
    ],
    challenge:
      "The existing site didn't reflect the calm, trustworthy feel a therapy practice needs, and key pages like services and booking pathways were scattered and hard to follow.",
    solution:
      "We rebuilt the site across four pages, home, about, services, and contact, with a consistent sage and ivory palette, soft scroll-triggered animation, and a single typeface throughout to keep the whole experience calm and unhurried.",
    result:
      "A cohesive, considered site where every page leads naturally toward booking a session, with a layout that's easy for a non-technical owner to keep updated.",
    outcomes: [
      { title: "A cohesive four-page site", body: "Home, about, services and contact pages share one consistent design." },
      { title: "A clear path to booking", body: "Every page leads naturally toward booking a session." },
      { title: "Calm, considered design", body: "A sage and ivory palette and single typeface keep the experience unhurried." },
      { title: "Easy to keep updated", body: "Built so a non-technical owner can manage it going forward." },
    ],
    metadataTitle: "Lily Olsen Counselling Case Study | 23Labs",
    description:
      "How 23Labs rebuilt Lily Olsen Counselling's website across four pages with a calm, considered design and a clear path to booking.",
  },
];

export function getAllCaseStudies() {
  return [...caseStudies].sort((a, b) => b.date.localeCompare(a.date));
}

export function getCaseStudySlugs() {
  return caseStudies.map((item) => item.slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
