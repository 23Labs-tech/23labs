export type ServiceLandingPageData = {
  slug: string;
  href: string;
  iconSlug: string;
  metadataTitle: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight?: string;
    lead: string;
    lead2?: string;
  };
  intro: string[];
  included: {
    title: string;
    items: string[];
  };
  fit?: {
    title: string;
    goodTitle: string;
    good: string[];
    notYetTitle: string;
    notYet: string[];
  };
  relatedCaseStudies: string[];
  relatedReading: string[];
  cta: {
    title: string;
    body: string;
  };
};

export const serviceLandingPages: ServiceLandingPageData[] = [
  {
    slug: "business-automation",
    href: "/services/business-automation",
    iconSlug: "business-automation",
    metadataTitle: "Business Automation Melbourne | Workflow Automation | 23Labs",
    description:
      "Automate repetitive business processes, administration and workflows with practical automation systems built by 23Labs in Melbourne.",
    hero: {
      eyebrow: "Services / Business Automation",
      title: "Business Automation That Removes ",
      highlight: "Manual Work",
      lead:
        "Business automation replaces the repetitive, manual parts of running a business, chasing information, copying it between tools, sending the same follow-ups, with systems that quietly do it for you.",
      lead2:
        "We build workflow automation, CRM automation, customer communication and reporting systems around the processes your business already runs, so information moves on its own and your team spends time on higher-value work instead.",
    },
    intro: [
      "Most growing businesses do not have a technology problem, they have an operations problem. Work gets done, but too much of it depends on someone remembering to send a follow-up, update a spreadsheet, or copy information from one system into another.",
      "Business automation is the practice of identifying those repetitive processes and replacing them with workflows that run automatically, triggered by an event such as a new lead, a completed job, a form submission or a date on the calendar.",
      "That can mean simple workflow automation between two existing tools, or something more advanced such as an AI agent that qualifies enquiries and books appointments. We use AI where it genuinely improves the outcome, and straightforward workflow logic everywhere else.",
    ],
    included: {
      title: "What we automate",
      items: [
        "Workflow and business process automation",
        "AI automation for enquiries, admin and customer support",
        "CRM and lead management automation",
        "Customer communication, email and SMS automation",
        "Scheduling and booking automation",
        "Reporting and internal notification automation",
        "Document processing and data entry automation",
        "Finance and accounting workflow automation",
        "Integration with the tools you already use",
      ],
    },
    fit: {
      title: "When automation makes sense",
      goodTitle: "Good signs automation will help",
      good: [
        "The same task is repeated the same way, often enough to be worth removing",
        "Information is being copied manually between two or more systems",
        "Follow-ups or updates depend on someone remembering to do them",
        "Response times slip when the team is busy or short-staffed",
      ],
      notYetTitle: "When it is not the right first step",
      notYet: [
        "The underlying process itself is inconsistent or still changing regularly",
        "The task happens rarely enough that manual handling is genuinely faster",
        "The real issue is missing data or a tool that needs replacing first",
      ],
    },
    relatedCaseStudies: ["corit-tech", "first-national-real-estate"],
    relatedReading: [
      "ai-automation-service-businesses-save-time",
      "signs-your-business-is-ready-for-ai-automation",
      "ai-vs-hiring-another-admin",
    ],
    cta: {
      title: "Ready to remove the manual work?",
      body: "Tell us which processes are eating the most time and we'll show you a practical path to automating them, no obligation.",
    },
  },
  {
    slug: "custom-software-development",
    href: "/services/custom-software-development",
    iconSlug: "custom-software-development",
    metadataTitle: "Custom Software Development Melbourne | 23Labs",
    description:
      "Custom software development for Melbourne and Australian businesses, including internal tools, web apps, portals, dashboards and business platforms.",
    hero: {
      eyebrow: "Services / Custom Software Development",
      title: "Custom Software Built ",
      highlight: "Around Your Business",
      lead:
        "Off-the-shelf software is built for the average business. Custom software is built for yours, shaped around how your team actually works instead of forcing your team to work around the software.",
      lead2:
        "We design and build internal tools, dashboards, customer portals and complete business platforms, using the same engineering discipline whether it's a small internal tool or a full product.",
    },
    intro: [
      "Every business eventually hits a point where spreadsheets, generic tools or a patchwork of subscriptions stop being enough, either because a process is too specific, too important, or too central to how the business runs to leave to a tool that wasn't built for it.",
      "Custom software development means designing and building software specifically around your workflows, your data and the way your team operates, rather than adapting your operations to fit someone else's product.",
      "That can be a simple internal dashboard, a customer-facing portal, or a complete platform your business runs on. We build software that is meant to be maintained and extended over years, not a one-off project that gets abandoned once it ships.",
    ],
    included: {
      title: "What we build",
      items: [
        "Internal tools and dashboards",
        "Customer and business portals",
        "CRM development",
        "SaaS and business platforms",
        "Mobile applications",
        "Legacy system modernisation",
        "Integrations with your existing systems",
        "Ongoing development and support after launch",
      ],
    },
    relatedCaseStudies: ["corit-tech"],
    relatedReading: ["buy-vs-build-custom-software", "building-a-production-ready-business-website"],
    cta: {
      title: "Have an idea for custom software?",
      body: "Tell us what you're trying to build and we'll help you work out the right scope, no obligation.",
    },
  },
  {
    slug: "systems-integrations",
    href: "/services/systems-integrations",
    iconSlug: "systems-integrations",
    metadataTitle: "Systems Integration & API Development Melbourne | 23Labs",
    description:
      "Connect your CRM, accounting, databases and business platforms with API integration and automated data workflows from 23Labs.",
    hero: {
      eyebrow: "Services / Systems & Integrations",
      title: "Make Your Business ",
      highlight: "Systems Work Together",
      lead:
        "Most businesses do not run on one system, they run on a CRM, an accounting platform, a handful of spreadsheets, and whatever tool each team picked up along the way.",
      lead2:
        "We connect those systems so data moves automatically between them, removing the manual double-entry and the gaps where information quietly goes missing.",
    },
    intro: [
      "Systems integration means connecting the software your business already uses, so information entered once shows up everywhere it needs to, without someone copying it across manually.",
      "In practice that usually means API integration between platforms, custom API development where a public one doesn't exist, and webhooks that trigger updates the moment something changes.",
      "We explain the technical side in plain English throughout, and we always try to work with the tools you already use rather than replacing them with something new.",
    ],
    included: {
      title: "What we connect",
      items: [
        "API integration and custom API development",
        "CRM integration",
        "Accounting software integration",
        "ERP integration",
        "Database integration",
        "Third-party platform integration",
        "Webhooks and automated data sync",
        "Reporting integration",
        "Data migration between systems",
        "System architecture and technical planning",
      ],
    },
    relatedCaseStudies: ["corit-tech", "first-national-real-estate"],
    relatedReading: ["disconnected-business-tools"],
    cta: {
      title: "Tired of systems that don't talk to each other?",
      body: "Tell us which tools you're using and we'll show you what's realistic to connect, no obligation.",
    },
  },
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    iconSlug: "ai-automation",
    metadataTitle: "AI Automation Melbourne | Business AI Solutions | 23Labs",
    description:
      "Practical AI automation for Australian businesses, including intelligent workflows, document processing, customer communication and AI integrations.",
    hero: {
      eyebrow: "Services / AI Automation",
      title: "Practical AI Automation, ",
      highlight: "Not Hype",
      lead:
        "We use AI when it genuinely improves the outcome, answering a call, reading a document, qualifying a lead, and plain workflow logic everywhere else.",
      lead2:
        "AI automation sits underneath our broader business automation work: a capability we reach for when it solves a real problem, not the whole story on its own.",
    },
    intro: [
      "A lot of AI automation on the market is a demo, not a business system. We build the kind that runs quietly in the background and is judged on the same terms as any other system we ship: does it save time, reduce errors, and hold up in production.",
      "In practice that means AI agents that can answer calls and qualify leads, tools that read and route incoming documents, and assistants that draft or triage customer communication before a person reviews it.",
      "We are equally comfortable telling you when a traditional workflow, an integration, or a simple rule will do the job better and more reliably than an AI model. AI is one tool in the kit, not the whole toolbox.",
    ],
    included: {
      title: "Where AI fits",
      items: [
        "AI receptionists and voice agents",
        "Document processing and data extraction",
        "Customer enquiry qualification and routing",
        "AI-assisted customer communication",
        "Intelligent workflow triggers",
        "AI features inside custom software",
        "Integrations between AI tools and your existing systems",
      ],
    },
    relatedCaseStudies: ["corit-tech"],
    relatedReading: [
      "ai-vs-hiring-another-admin",
      "signs-your-business-is-ready-for-ai-automation",
      "how-ai-helps-trades-businesses-win-more-jobs",
    ],
    cta: {
      title: "Curious what AI automation could realistically do for you?",
      body: "Tell us about the process you're considering and we'll give you a straight answer, no obligation.",
    },
  },
  {
    slug: "web-app-development",
    href: "/services/web-app-development",
    iconSlug: "digital-products-web-applications",
    metadataTitle: "Web Application Development Melbourne | 23Labs",
    description:
      "Custom web application development for business platforms, customer portals, dashboards and internal tools built by 23Labs Melbourne.",
    hero: {
      eyebrow: "Services / Digital Products & Web Applications",
      title: "Digital Products & ",
      highlight: "Web Applications",
      lead:
        "Business websites, web applications and customer portals, built as part of the same systems thinking we apply to automation and custom software.",
      lead2:
        "We take on website and web application projects when they're the right fit, but our focus is on building the systems behind them, not standalone brochure sites.",
    },
    intro: [
      "Not every business needs a full custom platform. Sometimes the right solution is a fast, well-built website, a customer-facing portal, or a focused web application, and we still bring the same engineering standards to that work.",
      "We build for speed, search visibility and maintainability from the start, and we design with the systems around the site in mind, so a website can connect cleanly to a CRM, booking system or internal tool rather than sitting on its own.",
    ],
    included: {
      title: "What we build",
      items: [
        "Business and product websites",
        "Web applications",
        "Customer portals",
        "SaaS interfaces",
        "Conversion-focused landing pages",
      ],
    },
    relatedCaseStudies: ["lily-olsen-counselling"],
    relatedReading: ["building-a-production-ready-business-website"],
    cta: {
      title: "Need a website or web application built properly?",
      body: "Tell us about the project and we'll let you know if it's the right fit, no obligation.",
    },
  },
];

export function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((service) => service.slug === slug);
}
