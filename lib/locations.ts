import { resolveCaseStudy, caseStudyPath } from "@/lib/caseStudyMatch";

export type LocationFaq = { question: string; answer: string };

export type LocationPage = {
  slug: string;
  path: string;
  city: string;
  /** State, territory or NZ region, e.g. "Victoria" or "Wellington region". */
  region: string;
  country: "Australia" | "New Zealand";
  /** Used in prose, e.g. "Sydney and New South Wales". */
  regionLabel: string;
  onSiteAvailable: boolean;
  metadataTitle: string;
  description: string;
  heroEyebrow: string;
  heroLead: string;
  introHeading: string;
  introBody: string;
  cardDescription: string;
  image: { src: string; alt: string };
};

export const locationsHub = {
  path: "/locations",
  metadataTitle: "Automation & Custom Software Locations | 23Labs",
  description:
    "23Labs works with growing businesses across Australia and New Zealand that need better systems, less manual work and software that fits how they actually operate.",
  hero: {
    eyebrow: "Locations",
    title: "Automation and software across ",
    highlight: "Australia and New Zealand",
    lead:
      "23Labs works with growing businesses that need better systems, less manual work and software that fits the way they actually operate.",
  },
};

export const locationCapabilityPanel = {
  eyebrow: "Why businesses work with 23Labs",
  heading: "Better systems, built around how your business works",
  intro:
    "23Labs works with the systems and workflows your business already uses, then improves them through automation, integrations and custom software.",
  columns: [
    {
      icon: "integration",
      heading: "Your systems first",
      body: "We connect and improve the tools you already use before suggesting unnecessary replacements.",
    },
    {
      icon: "team",
      heading: "Practical delivery",
      body: "You work directly with people who understand the problem, not layers of handoffs or unnecessary complexity.",
    },
    {
      icon: "clock",
      heading: "Quick to start",
      body: "Most projects begin with a focused discovery process so we can identify the right next step quickly.",
    },
  ],
} as const;

export function locationCapabilityIntroColumn(location: LocationPage) {
  const body = location.onSiteAvailable
    ? `We work with businesses across ${location.regionLabel}, remotely or on-site where appropriate.`
    : `We work with businesses across ${location.regionLabel}, delivered remotely from Melbourne in New Zealand business hours.`;

  return {
    icon: "pin",
    heading: "Built around your business",
    body,
  };
}

const successStoryDefinitions = [
  {
    match: { name: "Huntress Recruitment" },
    category: "System Integration",
    body: "23Labs connected Bullhorn, SEEK and the Huntress website so vacancy information could move through a cleaner, more consistent publishing workflow.",
    outcomes: [
      "Less duplicate administration",
      "More consistent publishing",
      "Better control of public job information",
    ],
  },
  {
    match: { name: "CorIT Tech" },
    category: "Onboarding Automation",
    body: "23Labs automated client onboarding across CorIT Tech's CRM and project tools, removing repetitive copy-paste work as new clients came on board.",
    outcomes: ["10+ hours saved each month", "Fewer manual errors", "A more scalable onboarding process"],
  },
  {
    match: { name: "Real Estate Office | Australia" },
    category: "Workflow Automation",
    body: "23Labs improved an Australian real estate office's website and connected customer enquiries with property records so follow-up is easier to track.",
    outcomes: ["Less manual follow-up", "Clearer tracking of enquiries", "Better visibility across the office workflow"],
  },
] as const;

export function getLocationSuccessStories() {
  return successStoryDefinitions.flatMap((item) => {
    const study = resolveCaseStudy(item.match);
    if (!study) return [];
    return [
      {
        href: caseStudyPath(study),
        label: study.name,
        category: item.category,
        body: item.body,
        outcomes: item.outcomes,
      },
    ];
  });
}

export const locationPractical = {
  eyebrow: "Built for real operations",
  heading: "Practical by design",
  paragraphs: [
    "Automation only helps when it is reliable, understandable and fits the people using it.",
    "We design around existing processes, permissions and systems so the result is easier to operate and maintain.",
    "That means clear scope, sensible handoffs, visibility when something needs attention and documentation your team can actually use.",
  ],
  panelEyebrow: "What we build in",
  checklist: [
    "Clear permissions and access",
    "Human approvals where needed",
    "Logging and operational visibility",
    "Reliable system handoffs",
    "Documentation and ongoing support",
  ],
} as const;

export const locationCtaExpect = [
  "A conversation about the actual business problem",
  "A clear view of the systems and processes involved",
  "A practical scope and recommended next step",
] as const;

const industriesProse =
  "freight and logistics, recruitment, professional services, construction, real estate, allied health and trades and field services";

export function buildLocationFaqs(location: LocationPage): LocationFaq[] {
  const secondAnswer = location.onSiteAvailable
    ? `Yes. We can work remotely with businesses in ${location.regionLabel}. On-site collaboration can also be arranged when the project benefits from workshops, process mapping or in-person implementation support.`
    : `Yes. We work with businesses in ${location.regionLabel} remotely, on video calls booked in New Zealand business hours. You do not need to travel to Melbourne, and we do not need to be on site.`;

  return [
    {
      question: `What does 23Labs do for ${location.city} businesses?`,
      answer: `23Labs builds business automation, system integrations, AI workflows, AI agents and custom software for teams in ${location.regionLabel}. We focus on reducing manual work, connecting existing tools and building practical systems around the way the business already operates.`,
    },
    {
      question: `Do you work with businesses in ${location.city}?`,
      answer: secondAnswer,
    },
    {
      question: "Do we need to replace the systems we already use?",
      answer:
        "Usually not. Many projects start by connecting and improving the tools already in place. We only recommend replacing a platform when it is genuinely creating more friction than value.",
    },
    {
      question: "What kinds of projects does 23Labs take on?",
      answer:
        "Projects range from focused workflow automations and system integrations through to internal tools, customer portals, AI-assisted workflows and complete custom applications.",
    },
    {
      question: "Can you build AI into our existing processes?",
      answer:
        "Yes. We use AI where it solves a real operational problem, such as document processing, information retrieval, enquiry handling, classification or multi-step internal workflows. Human review and permissions can be built in where needed.",
    },
    {
      question: "How does a project start?",
      answer:
        "We start with a discovery conversation to understand the current workflow, the systems involved and the outcome you want. From there we map the practical next step and scope the work before development begins.",
    },
    {
      question: `Which industries do you work with in ${location.regionLabel}?`,
      answer: `23Labs is best suited to growing service businesses and operational teams, including ${industriesProse}, or any business dealing with repetitive admin or disconnected systems.`,
    },
  ];
}

export const locationPages: LocationPage[] = [
  {
    slug: "melbourne",
    path: "/locations/melbourne",
    city: "Melbourne",
    region: "Victoria",
    country: "Australia",
    regionLabel: "Melbourne and Victoria",
    onSiteAvailable: true,
    metadataTitle: "Automation & Custom Software Melbourne | 23Labs",
    description:
      "23Labs helps Melbourne businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Melbourne, Victoria",
    heroLead:
      "We help Melbourne businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate.",
    introHeading: "Practical automation and software for Melbourne teams",
    introBody:
      "23Labs is based in Melbourne. We work day to day with Melbourne and Victorian businesses that are ready to move past spreadsheets, manual admin and tools that do not talk to each other, and build systems that fit how their team actually works.",
    cardDescription:
      "23Labs is based in Melbourne, building automation, integrations and custom software for Melbourne and Victorian businesses.",
    image: {
      src: "/site-images/locations/melbourne-skyline.jpg",
      alt: "Melbourne skyline towers lit by the sunset",
    },
  },
  {
    slug: "brisbane",
    path: "/locations/brisbane",
    city: "Brisbane",
    region: "Queensland",
    country: "Australia",
    regionLabel: "Brisbane and Queensland",
    onSiteAvailable: true,
    metadataTitle: "Business Automation Brisbane | 23Labs",
    description:
      "23Labs helps Brisbane businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Brisbane, Queensland",
    heroLead:
      "We help Brisbane businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate.",
    introHeading: "Better systems for growing Brisbane businesses",
    introBody:
      "23Labs works remotely with Brisbane and Queensland businesses that are scaling past the point where spreadsheets and manual handoffs still work, building automation, integrations and software around the systems they already run.",
    cardDescription:
      "Automation, integrations and custom software for Brisbane and Queensland businesses, delivered remotely with on-site collaboration by arrangement.",
    image: {
      src: "/site-images/locations/brisbane-skyline.jpg",
      alt: "Brisbane skyline along the river at sunset",
    },
  },
  {
    slug: "sydney",
    path: "/locations/sydney",
    city: "Sydney",
    region: "New South Wales",
    country: "Australia",
    regionLabel: "Sydney and New South Wales",
    onSiteAvailable: true,
    metadataTitle: "Automation & Custom Software Sydney | 23Labs",
    description:
      "23Labs helps Sydney businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Sydney, New South Wales",
    heroLead:
      "We help Sydney businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate.",
    introHeading: "Practical automation and software for Sydney teams",
    introBody:
      "23Labs helps Sydney businesses simplify manual operations, connect business systems and build practical software that supports growth without unnecessary complexity.",
    cardDescription:
      "Automation, integrations and custom software for Sydney and New South Wales businesses, with on-site collaboration available by arrangement.",
    image: {
      src: "/site-images/locations/sydney-harbour.jpg",
      alt: "Sydney Opera House and Harbour Bridge lit up at night",
    },
  },
  {
    slug: "adelaide",
    path: "/locations/adelaide",
    city: "Adelaide",
    region: "South Australia",
    country: "Australia",
    regionLabel: "Adelaide and South Australia",
    onSiteAvailable: true,
    metadataTitle: "Custom Software Adelaide | 23Labs",
    description:
      "23Labs helps Adelaide businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Adelaide, South Australia",
    heroLead:
      "We help Adelaide businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate.",
    introHeading: "Better systems for growing Adelaide businesses",
    introBody:
      "23Labs works remotely with Adelaide and South Australian businesses to reduce manual admin, connect the tools they already rely on and build software around processes that off-the-shelf platforms cannot handle.",
    cardDescription:
      "Automation, integrations and custom software for Adelaide and South Australian businesses, delivered remotely with on-site collaboration by arrangement.",
    image: {
      src: "/site-images/locations/adelaide-skyline.jpg",
      alt: "Adelaide skyline reflected in the River Torrens at sunset",
    },
  },
  {
    slug: "perth",
    path: "/locations/perth",
    city: "Perth",
    region: "Western Australia",
    country: "Australia",
    regionLabel: "Perth and Western Australia",
    onSiteAvailable: true,
    metadataTitle: "Custom Software Perth | 23Labs",
    description:
      "23Labs helps Perth businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Perth, Western Australia",
    heroLead:
      "We help Perth businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate.",
    introHeading: "Practical automation and software for Perth teams",
    introBody:
      "23Labs supports Perth and Western Australian businesses with automation, system integrations and custom software built around existing operations, rather than asking a team to change the way it works.",
    cardDescription:
      "Automation, system integrations and custom software for Perth and Western Australian businesses, with on-site collaboration available by arrangement.",
    image: {
      src: "/site-images/locations/perth-skyline.jpg",
      alt: "Perth skyline and the Swan River at sunset",
    },
  },
  {
    slug: "auckland",
    path: "/locations/auckland",
    city: "Auckland",
    region: "Auckland region",
    country: "New Zealand",
    regionLabel: "Auckland and the wider Auckland region",
    onSiteAvailable: false,
    metadataTitle: "Automation & Custom Software Auckland | 23Labs",
    description:
      "23Labs helps Auckland businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Auckland, New Zealand",
    heroLead:
      "We help Auckland businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate, delivered remotely from Melbourne.",
    introHeading: "Better systems for growing Auckland businesses",
    introBody:
      "23Labs supports Auckland businesses with business automation, system integrations, AI workflows and custom software built around real operational needs. Work is delivered remotely from Melbourne, with calls booked in New Zealand business hours.",
    cardDescription:
      "Automation, integrations and custom software for Auckland businesses, delivered remotely from Melbourne in New Zealand business hours.",
    image: {
      src: "/site-images/locations/auckland-skyline.jpg",
      alt: "Auckland skyline with the Sky Tower lit up at dusk",
    },
  },
  {
    slug: "wellington",
    path: "/locations/wellington",
    city: "Wellington",
    region: "Wellington region",
    country: "New Zealand",
    regionLabel: "Wellington and the wider Wellington region",
    onSiteAvailable: false,
    metadataTitle: "Business Automation Wellington | 23Labs",
    description:
      "23Labs helps Wellington businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Wellington, New Zealand",
    heroLead:
      "We help Wellington businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate, delivered remotely from Melbourne.",
    introHeading: "Business automation Wellington businesses can rely on",
    introBody:
      "23Labs works with Wellington and wider-region businesses that need automation, integrations or custom software built around how their teams already operate. Discovery and delivery happen on video calls booked in New Zealand business hours.",
    cardDescription:
      "Automation, integrations and custom software for Wellington businesses, delivered remotely from Melbourne in New Zealand business hours.",
    image: {
      src: "/site-images/locations/wellington-beehive.jpg",
      alt: "The Beehive, New Zealand's Parliament building, in Wellington at sunset",
    },
  },
  {
    slug: "christchurch",
    path: "/locations/christchurch",
    city: "Christchurch",
    region: "Canterbury",
    country: "New Zealand",
    regionLabel: "Christchurch and Canterbury",
    onSiteAvailable: false,
    metadataTitle: "Software Development Christchurch | 23Labs",
    description:
      "23Labs helps Christchurch businesses automate manual processes, connect systems and build custom software and AI workflows around real operations.",
    heroEyebrow: "Christchurch, New Zealand",
    heroLead:
      "We help Christchurch businesses remove repetitive work, connect disconnected systems and build practical software around the way they actually operate, delivered remotely from Melbourne.",
    introHeading: "Software development Christchurch businesses can build on",
    introBody:
      "23Labs works with Christchurch and Canterbury businesses to automate repetitive admin, connect existing systems and build custom software where off-the-shelf tools fall short, delivered remotely from Melbourne.",
    cardDescription:
      "Automation, integrations and custom software for Christchurch and Canterbury businesses, delivered remotely from Melbourne in New Zealand business hours.",
    image: {
      src: "/site-images/locations/christchurch-cathedral.jpg",
      alt: "Christ Church Cathedral in Christchurch at dusk",
    },
  },
];

export const locationRoutePaths = [locationsHub.path, ...locationPages.map((location) => location.path)] as const;

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}

export function locationPath(slug: string) {
  return `/locations/${slug}`;
}
