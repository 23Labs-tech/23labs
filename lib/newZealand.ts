/**
 * Approved public pricing line. Do not add an NZD figure, an exchange rate,
 * or the longer consultation sentence used on other pages.
 */
export const approvedProjectPricing =
  "Custom software and automation projects typically start from A$2,500. Final pricing depends on the systems involved, complexity and scope.";

export const newZealandPage = {
  path: "/new-zealand",
  metadataTitle: "Software & Automation for New Zealand Businesses | 23Labs",
  description:
    "23Labs works with New Zealand service businesses remotely from Melbourne: video calls in New Zealand business hours, for automation, custom software and system integrations.",
  hero: {
    eyebrow: "New Zealand",
    title: "Software and automation for ",
    highlight: "New Zealand businesses",
    subheading: "Remote delivery from Melbourne, in New Zealand business hours.",
    lead:
      "23Labs is a Melbourne software and automation studio. We work with growing service businesses in New Zealand remotely: video calls, booked during the New Zealand working day, for the same services we offer in Australia.",
    ctaLabel: "Talk to 23Labs",
    secondaryLabel: "See the services",
    image: {
      src: "/site-images/locations/new-zealand-landscape.jpg",
      alt: "Snow-capped mountains reflected in a lake in New Zealand",
    },
  },
  remote: {
    heading: "How remote work with New Zealand businesses runs",
    intro:
      "A project does not need a local office visit. Discovery, design and delivery happen on calls, against the systems your team already uses.",
    items: [
      {
        title: "Video calls",
        description:
          "Discovery and working sessions are video calls. We map the process with the people who run it, then build against the tools already in place. You do not need to travel to Melbourne, and we do not need to be on site in New Zealand.",
      },
      {
        title: "New Zealand business hours",
        description:
          "Calls are booked during the New Zealand working day. New Zealand is usually two hours ahead of Melbourne, so a morning or afternoon there still falls inside a normal Melbourne day.",
      },
      {
        title: "Clear starting point",
        description: approvedProjectPricing,
      },
    ],
  },
  services: {
    heading: "The same six services",
    intro: "Each one is delivered remotely for businesses in Australia and New Zealand.",
  },
  industries: {
    heading: "Industries that fit this work",
    intro: "The industry pages most relevant to New Zealand service businesses.",
    slugs: ["recruitment", "freight-logistics", "professional-services"] as const,
  },
  proof: {
    heading: "Published New Zealand work",
    paragraphs: [
      "Huntress Recruitment is a recruitment business in New Zealand. The team was managing job information across Bullhorn, SEEK and its WordPress website.",
      "23Labs mapped that workflow and connected it so vacancy information could move more consistently between those three systems. Public-facing details, such as job titles and locations, can be controlled separately from the internal Bullhorn record. Bullhorn stays the system of record, and duplicate administration is reduced.",
      "23Labs delivered the work remotely from Melbourne.",
    ],
    study: {
      href: "/case-studies/huntress-recruitment",
      label: "Huntress Recruitment",
      body: "Bullhorn, SEEK and the WordPress website for a New Zealand recruitment business. Public-facing job titles and locations are kept separate from the internal Bullhorn record.",
    },
  },
  faqs: [
    {
      question: "Does 23Labs have an office in New Zealand?",
      answer: "23Labs is based in Melbourne and works with New Zealand businesses remotely.",
    },
    {
      question: "How do projects with New Zealand businesses run?",
      answer:
        "On video calls. We map the process with the people who do the work, then automate, connect or build against the systems the business already uses. You do not need to visit Melbourne, and we do not need to be on site in New Zealand.",
    },
    {
      question: "Can calls happen during New Zealand business hours?",
      answer:
        "Yes. Calls are booked during the New Zealand working day. New Zealand is usually two hours ahead of Melbourne, so those hours still fall inside a normal Melbourne day.",
    },
    {
      question: "What does a project cost?",
      answer: `${approvedProjectPricing} Larger projects start with an initial consultation.`,
    },
    {
      question: "Which services can a New Zealand business use?",
      answer:
        "The same six services as for businesses in Australia: business process automation, AI workflow automation, custom software development, AI agents, system integrations and ongoing support. They are delivered remotely from Melbourne.",
    },
    {
      question: "Is there a published New Zealand case study?",
      answer:
        "Huntress Recruitment is a recruitment business in New Zealand. 23Labs connected Bullhorn, SEEK and its WordPress website remotely from Melbourne so vacancy information could move more consistently, which the case study describes.",
    },
  ],
  cta: {
    title: "Tell us where the manual work sits.",
    body: "A short conversation is enough to start. Bring the process and the systems involved. We will say whether automation, an integration or custom software is the right first step.",
    label: "Contact 23Labs",
  },
} as const;
