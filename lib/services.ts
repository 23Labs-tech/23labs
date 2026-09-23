export type ServiceLandingPageData = {
  slug: string;
  href: string;
  navLabel: string;
  metadataTitle: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    image: { src: string; alt: string };
  };
  problem: {
    intro: string;
    items: string[];
  };
  howWeHelp: {
    intro: string;
    capabilities: string[];
  };
  useCases: string[];
  relatedSlugs: string[];
};

export const serviceApproachSteps = [
  {
    title: "Discovery and requirements",
    body: "We start by understanding your current processes, systems and goals, so any solution we design fits the way your business actually works.",
  },
  {
    title: "Solution design and planning",
    body: "We map out the right approach, scope the solution and plan the technical detail before any development begins.",
  },
  {
    title: "Development and implementation",
    body: "We build and implement the solution, keeping you updated and involving your team throughout the process.",
  },
  {
    title: "Testing, deployment and ongoing support",
    body: "We test thoroughly, deploy with care and stay involved after launch to refine and support the solution as your business grows.",
  },
];

export const serviceFinalCta = {
  title: "Let's build something that works for your business.",
  body: "Tell us what you're looking to improve, automate or build. We'll help you explore the right solution for your business.",
  label: "Start a Conversation",
};

export const serviceLandingPages: ServiceLandingPageData[] = [
  {
    slug: "business-process-automation",
    href: "/services/business-process-automation",
    navLabel: "Business Process Automation",
    metadataTitle: "Business Process Automation Melbourne | 23Labs",
    description:
      "We streamline repetitive tasks, manual processes and disconnected workflows, helping businesses improve efficiency, reduce errors and free up their teams to focus on higher-value work.",
    hero: {
      eyebrow: "Services / Business Process Automation",
      title: "Automate the repetitive. Focus on what matters.",
      lead:
        "Streamline business processes, eliminate repetitive manual work and connect the systems your team relies on. We build automation solutions that help your business operate more efficiently as it grows.",
      image: {
        src: "/site-images/tech-img-07.png",
        alt: "A team member reviewing operational dashboards and workflow data on dual monitors",
      },
    },
    problem: {
      intro:
        "Growing businesses often reach a point where manual processes and disconnected tools start slowing everything down. These are some of the most common signs it's time to automate.",
      items: [
        "Staff spend hours each week manually entering or transferring data between systems.",
        "Important follow-ups, approvals or updates get missed because they depend on someone remembering to act.",
        "Reporting takes days to pull together because information is scattered across spreadsheets and platforms.",
        "Errors creep in whenever a process relies on manual copying or re-keying information.",
      ],
    },
    howWeHelp: {
      intro:
        "Our work here is built around eliminating manual work and improving operational efficiency through reliable, rules-based automation.",
      capabilities: [
        "Business workflow automation",
        "CRM, ERP and finance system integrations",
        "Data synchronisation and automated reporting",
        "Administrative and operational process automation",
      ],
    },
    useCases: [
      "Automatically process incoming orders and update relevant business systems.",
      "Synchronise customer information between CRM, accounting and operational platforms.",
      "Automate invoice processing, approval workflows and financial reporting.",
      "Consolidate operational data from multiple sources into centralised reporting dashboards.",
    ],
    relatedSlugs: ["ai-workflow-automation", "full-stack-software-development"],
  },
  {
    slug: "ai-workflow-automation",
    href: "/services/ai-workflow-automation",
    navLabel: "AI Workflow Automation",
    metadataTitle: "AI Workflow Automation Melbourne | 23Labs",
    description:
      "We integrate AI into everyday business workflows to automate document processing, data extraction, communications and complex tasks that traditionally require manual intervention.",
    hero: {
      eyebrow: "Services / AI Workflow Automation",
      title: "Smarter workflows. Less manual work.",
      lead:
        "Bring AI into your everyday operations to automate information processing, document handling and complex business workflows. We build intelligent solutions that help your team work faster without adding unnecessary complexity.",
      image: {
        src: "/site-images/tech-img-06.png",
        alt: "AI system processing and organising business data across connected workflow cards",
      },
    },
    problem: {
      intro:
        "Not every business problem follows a fixed set of rules. When work involves reading, interpreting or judging information, traditional automation alone isn't enough.",
      items: [
        "Staff spend significant time reading documents, emails or enquiries just to work out what needs to happen next.",
        "Important information is buried in unstructured documents, PDFs or messages instead of structured data.",
        "Teams manually sort, categorise or prioritise incoming information every day.",
        "Response times slow down because someone has to review and interpret every request before it can be actioned.",
      ],
    },
    howWeHelp: {
      intro:
        "Our work here is built around using AI to process, interpret and organise information within existing business workflows. Unlike traditional automation, AI can handle information and tasks that don't always follow rigid, predefined rules.",
      capabilities: [
        "AI-powered document processing and data extraction",
        "Intelligent email and communication workflows",
        "AI-assisted data classification and analysis",
        "AI integration with existing business applications",
      ],
    },
    useCases: [
      "Extract information from incoming invoices, purchase orders and business documents.",
      "Categorise incoming emails and route them to the appropriate team or workflow.",
      "Process incoming customer enquiries and prepare relevant information for staff review.",
      "Extract and structure information from CVs, contracts and other unstructured documents.",
    ],
    relatedSlugs: ["business-process-automation", "ai-agents"],
  },
  {
    slug: "full-stack-software-development",
    href: "/services/full-stack-software-development",
    navLabel: "Full-Stack Software Development",
    metadataTitle: "Full-Stack Software Development Melbourne | 23Labs",
    description:
      "We design and develop custom software, SaaS platforms, internal tools and web applications tailored to your business, from initial concept through development, deployment and ongoing support.",
    hero: {
      eyebrow: "Services / Full-Stack Software Development",
      title: "Software built around your business.",
      lead:
        "From custom business applications to complete SaaS platforms, we design and develop software tailored to the way your business operates. Built to solve real problems, integrate with your existing systems and support your long-term growth.",
      image: {
        src: "/site-images/tech-img-08.png",
        alt: "A custom software dashboard showing live business analytics and performance data",
      },
    },
    problem: {
      intro:
        "Sometimes off-the-shelf software isn't enough, either because the process is too specific, too important or too central to how the business runs.",
      items: [
        "Spreadsheets and manual workarounds are being used to manage processes that have outgrown them.",
        "Existing tools don't reflect how your team actually works, so staff build workarounds instead.",
        "Customers or partners need a dedicated portal or platform that off-the-shelf software doesn't offer.",
        "Growth is limited by software that can't scale or adapt with the business.",
      ],
    },
    howWeHelp: {
      intro:
        "Our work here is built around developing complete software solutions that address business requirements which cannot be adequately met by existing off-the-shelf tools.",
      capabilities: [
        "Custom business software and internal tools",
        "SaaS platform development",
        "Web applications and customer portals",
        "API development and system integrations",
      ],
    },
    useCases: [
      "Build a custom CRM or internal management platform.",
      "Develop a SaaS product from concept through to deployment.",
      "Create customer portals for accessing services, submitting requests and managing accounts.",
      "Replace spreadsheet-based processes with a centralised custom business application.",
    ],
    relatedSlugs: ["ai-agents", "business-process-automation"],
  },
  {
    slug: "ai-agents",
    href: "/services/ai-agents",
    navLabel: "AI Agents",
    metadataTitle: "AI Agents Melbourne | Custom Business AI Agents | 23Labs",
    description:
      "We build AI agents that can interact with business systems, retrieve information, execute tasks and support your team across customer service, administration and internal operations.",
    hero: {
      eyebrow: "Services / AI Agents",
      title: "AI agents that work with your business.",
      lead:
        "Go beyond simple chatbots with AI agents that can retrieve information, interact with business systems and carry out tasks across your operations. We design agents that support your team, streamline workflows and help your business get more done.",
      image: {
        src: "/site-images/tech-img-05.png",
        alt: "A person interacting with an AI neural network interface connected to live business data",
      },
    },
    problem: {
      intro:
        "Chatbots that only answer questions have limits. Many businesses need something that can actually retrieve information and take action.",
      items: [
        "Staff spend time manually searching through documents or systems to answer routine questions.",
        "Customer service teams are overwhelmed by repetitive enquiries that don't need a human response.",
        "Administrative tasks such as preparing reports or updating records take up time that could go toward higher-value work.",
        "Sales and account teams spend hours on manual research and data entry instead of building relationships.",
      ],
    },
    howWeHelp: {
      intro:
        "Our work here is built around AI-powered assistants that can interact with tools and execute multistep tasks, rather than simply generating text or answering questions. Where relevant, agents can operate with human oversight, permissions and approval workflows.",
      capabilities: [
        "Custom AI assistants and business agents",
        "AI-powered customer support",
        "Internal knowledge and information retrieval",
        "AI agents connected to business tools and workflows",
      ],
    },
    useCases: [
      "An internal assistant that retrieves information from company documents and knowledge bases.",
      "A customer service agent that handles routine enquiries and escalates complex requests to staff.",
      "An administrative agent that retrieves records, prepares reports and performs authorised tasks within business systems.",
      "A sales support agent that researches prospects, prepares account summaries and updates CRM records with appropriate approval controls.",
    ],
    relatedSlugs: ["ai-workflow-automation", "full-stack-software-development"],
  },
];

export function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((service) => service.slug === slug);
}
