import { resolveSuccessStories } from "@/lib/successStories";

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
  /** Exact, page-specific H1 text. Never derive this from a city-swapped template. */
  heroTitle: string;
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

/**
 * New Zealand location pages prefer the one genuinely NZ-relevant case
 * study (Huntress Recruitment, tagged "recruitment") first. Australian
 * pages use the default order - there's no AU-specific case study to
 * prefer city by city, and doing so without evidence would be exactly the
 * kind of unsupported local claim this workstream avoids.
 */
export function getLocationSuccessStories(location?: LocationPage) {
  return resolveSuccessStories(location?.country === "New Zealand" ? "recruitment" : undefined);
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

/**
 * Shared fields for every city. Brisbane and Melbourne also have a bespoke
 * body in `lib/locationCityContent.ts`. Add an entry there to give another
 * city the same treatment. Cities without an entry keep the shared template.
 */
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
      "23Labs is a Melbourne automation and software studio, working on-site and remotely with Melbourne and Victorian businesses on automation, integrations and custom software.",
    heroEyebrow: "Melbourne, Victoria",
    heroTitle: "Melbourne businesses deserve systems that make work easier.",
    heroLead:
      "23Labs is based here. Most of our discovery sessions and project work happen in person or on a call with Melbourne and Victorian businesses, working against the systems your team already runs on.",
    introHeading: "Our home market",
    introBody:
      "23Labs is a Melbourne studio. On-site sessions, workshops and implementation support are genuinely available here, not offered as a token gesture, alongside the full range of automation, integrations, AI workflows and custom software we build for clients everywhere.",
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
      "23Labs helps Brisbane logistics and field service businesses connect the job-to-invoice handoff, delivered remotely with on-site collaboration by arrangement.",
    heroEyebrow: "Brisbane, Queensland",
    heroTitle: "Make daily operations easier for growing Brisbane teams.",
    heroLead:
      "We work with Brisbane logistics and field service businesses to connect the handoff from job to invoice, so a completed job doesn't sit waiting for someone to notice it before it can be billed.",
    introHeading: "The job-to-invoice gap",
    introBody:
      "For logistics and field service teams, the biggest drag is often what happens after the job is done: proof of completion, matching it to the right job, and getting it in front of accounts. We connect that chain, delivered remotely from Melbourne with on-site collaboration available by arrangement.",
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
      "23Labs helps multi-team Sydney businesses and professional services firms connect their systems, delivered remotely from Melbourne with on-site visits by arrangement.",
    heroEyebrow: "Sydney, New South Wales",
    heroTitle: "Better-connected operations for Sydney businesses.",
    heroLead:
      "We work with multi-team Sydney businesses, and with professional services firms onboarding new clients, to connect the systems different teams rely on so information doesn't have to be re-entered at every handoff.",
    introHeading: "Delivered remotely from Melbourne",
    introBody:
      "23Labs is based in Melbourne. Discovery, design and most delivery work happens on video calls, against the systems your teams already use, with on-site visits available by arrangement rather than as a default.",
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
      "23Labs helps Adelaide manufacturing and fabrication businesses connect quoting, production and reporting, delivered remotely with on-site collaboration by arrangement.",
    heroEyebrow: "Adelaide, South Australia",
    heroTitle: "Take the manual steps out of Adelaide business operations.",
    heroLead:
      "We work with Adelaide manufacturers, fabricators and workshop operators to connect quoting, production and reporting, so job status and material details don't rely on a walk to the floor.",
    introHeading: "Workshop reporting that doesn't need a walk to the floor",
    introBody:
      "Manufacturing and fabrication businesses often have good data, just scattered across a quoting tool, a production system and the accounting package. We connect that data and build the reporting view on top of it, delivered remotely from Melbourne with on-site collaboration by arrangement.",
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
      "23Labs helps Perth businesses running field teams and multi-site jobs connect their systems, delivered remotely with on-site collaboration by arrangement.",
    heroEyebrow: "Perth, Western Australia",
    heroTitle: "Keep Perth operations connected as the workload grows.",
    heroLead:
      "We work with Perth businesses running field teams and jobs across multiple sites, connecting the systems that track them so growth doesn't mean more manual coordination.",
    introHeading: "Built around how the work actually spreads out",
    introBody:
      "Western Australia runs on a different time zone to the rest of the country, so we plan discovery calls and check-ins around that rather than assuming Melbourne hours work for everyone. Delivery is remote from Melbourne, with on-site collaboration available by arrangement.",
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
      "23Labs helps Auckland recruitment and client-facing businesses connect onboarding and intake systems, delivered remotely from Melbourne in New Zealand business hours.",
    heroEyebrow: "Auckland, New Zealand",
    heroTitle: "Connected workflows for growing Auckland businesses.",
    heroLead:
      "We work with Auckland recruitment and client-facing businesses to connect the systems behind onboarding and intake, so the same information doesn't get typed into each one separately.",
    introHeading: "Published New Zealand work",
    introBody:
      "Huntress Recruitment, a New Zealand recruitment business, is a published 23Labs project: we connected Bullhorn, SEEK and the company website so vacancy information moves more consistently between them. Work for Auckland businesses is delivered the same way, remotely from Melbourne, with calls booked in New Zealand business hours.",
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
      "23Labs helps Wellington professional services firms automate client onboarding and reporting, with privacy-aware workflows built in from the start.",
    heroEyebrow: "Wellington, New Zealand",
    heroTitle: "Less repetitive admin for Wellington teams.",
    heroLead:
      "We work with Wellington professional services firms to automate the admin around client onboarding, proposals and reporting, with privacy and information handling built into the design, not added afterwards.",
    introHeading: "Privacy-aware by design",
    introBody:
      "We design workflows with the New Zealand Privacy Act 2020 in mind from the start, moving only the information each step needs. Discovery and delivery happen on video calls booked in New Zealand business hours, delivered remotely from Melbourne.",
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
      "23Labs helps Christchurch field service and fabrication businesses connect job completion with invoicing, delivered remotely from Melbourne in New Zealand business hours.",
    heroEyebrow: "Christchurch, New Zealand",
    heroTitle: "Make Christchurch operations easier to manage.",
    heroLead:
      "We work with Christchurch field service and fabrication businesses to connect job completion with invoicing, so finished work doesn't sit waiting on a phone call before it can be billed.",
    introHeading: "From job completion to invoice",
    introBody:
      "For field service and fabrication teams, the handoff from a finished job to an approved invoice is often the slowest step. We connect that chain where the evidence already exists, delivered remotely from Melbourne with calls booked in New Zealand business hours.",
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
