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
    items: { title: string; description: string }[];
  };
  howWeHelp: {
    intro: string;
    capabilities: { title: string; description: string; image: { src: string; alt: string } }[];
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
        src: "/site-images/photos/team-dashboard-presentation.png",
        alt: "A team reviewing a performance dashboard presented on a screen during a meeting",
      },
    },
    problem: {
      intro:
        "Growing businesses often reach a point where manual processes and disconnected tools start slowing everything down. These are some of the most common signs it's time to automate.",
      items: [
        {
          title: "Too Much Manual Work",
          description:
            "Staff spend hours each week manually entering information, copying data between systems and completing repetitive administrative tasks.",
        },
        {
          title: "Disconnected Systems and Information",
          description:
            "Important business information is scattered across spreadsheets and platforms, making it difficult to maintain accurate records and access the information your team needs.",
        },
        {
          title: "Slow Processes and Missed Follow-ups",
          description:
            "Approvals, updates and follow-ups depend on people remembering to act, creating unnecessary delays and increasing the risk of errors.",
        },
      ],
    },
    howWeHelp: {
      intro:
        "We eliminate repetitive manual work and improve operational efficiency through reliable automation designed around your existing business processes.",
      capabilities: [
        {
          title: "Business Workflow Automation",
          description:
            "Automate repetitive administrative tasks, approvals, follow-ups and routine business processes so your team can focus on higher-value work.",
          image: {
            src: "/site-images/photos/team-dashboard-presentation.png",
            alt: "A team reviewing a performance dashboard presented on a screen during a meeting",
          },
        },
        {
          title: "Systems & Integrations",
          description:
            "Connect your CRM, accounting, ERP and other business platforms so information moves automatically between the systems your team already uses.",
          image: {
            src: "/site-images/photos/connected-tools-overlay.png",
            alt: "A diagram showing business tools connected through an automation hub",
          },
        },
        {
          title: "Data Synchronisation & Reporting",
          description:
            "Keep information consistent across your business systems and automate the collection, consolidation and reporting of operational data.",
          image: {
            src: "/site-images/photos/growth-chart-overlay.png",
            alt: "A hand pointing to a business growth chart trending upward",
          },
        },
        {
          title: "Administrative & Operational Automation",
          description:
            "Streamline everyday operations, from invoice processing and order management to notifications, document handling and internal approvals.",
          image: {
            src: "/site-images/photos/notes-planning-desk.png",
            alt: "A person planning workflow notes at a desk",
          },
        },
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
        src: "/site-images/photos/ai-analytics-overlay.png",
        alt: "A person reviewing business analytics on a tablet and laptop",
      },
    },
    problem: {
      intro:
        "Not every business problem follows a fixed set of rules. When work involves reading, interpreting or judging information, traditional automation alone isn't enough.",
      items: [
        {
          title: "Unstructured Information",
          description:
            "Important details are buried in documents, emails and enquiries instead of structured, usable data.",
        },
        {
          title: "Manual Reading and Interpretation",
          description:
            "Staff spend significant time reading, sorting and interpreting information just to work out what needs to happen next.",
        },
        {
          title: "Slow Response Times",
          description:
            "Response times slow down because someone has to review and interpret every request before it can be actioned.",
        },
      ],
    },
    howWeHelp: {
      intro:
        "We use AI to process, interpret and organise information within your existing business workflows, handling information that doesn't always follow rigid, predefined rules.",
      capabilities: [
        {
          title: "AI-Powered Document Processing & Data Extraction",
          description:
            "Automatically read, extract and structure information from invoices, purchase orders and other business documents.",
          image: {
            src: "/site-images/photos/ai-analytics-overlay.png",
            alt: "A person reviewing business analytics on a tablet and laptop",
          },
        },
        {
          title: "Intelligent Email & Communication Workflows",
          description:
            "Categorise incoming emails and enquiries, route them to the right person and prepare information for staff review.",
          image: {
            src: "/site-images/photos/connected-tools-overlay.png",
            alt: "A diagram showing business tools connected through an automation hub",
          },
        },
        {
          title: "AI-Assisted Data Classification & Analysis",
          description:
            "Sort, classify and interpret incoming information so your team can act on it faster and with more confidence.",
          image: {
            src: "/site-images/photos/office-analytics-overlay.png",
            alt: "Business analytics charts displayed in an office setting",
          },
        },
        {
          title: "AI Integration with Existing Business Applications",
          description:
            "Connect AI capabilities directly into the tools and platforms your business already relies on every day.",
          image: {
            src: "/site-images/photos/factory-automation-review.png",
            alt: "Two people reviewing automated equipment on a production floor",
          },
        },
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
        src: "/site-images/photos/dashboard-laptop-review.png",
        alt: "A person reviewing a software dashboard on a laptop",
      },
    },
    problem: {
      intro:
        "Sometimes off-the-shelf software isn't enough, either because the process is too specific, too important or too central to how the business runs.",
      items: [
        {
          title: "Outgrown Spreadsheets and Workarounds",
          description:
            "Spreadsheets and manual workarounds are being used to manage processes that have outgrown them, creating risk and inefficiency.",
        },
        {
          title: "Software That Doesn't Fit",
          description:
            "Existing tools don't reflect how your team actually works, so staff build workarounds instead of using them properly.",
        },
        {
          title: "Limited Growth and Scalability",
          description:
            "Growth is limited by software that can't scale, adapt or offer the dedicated portals your customers and partners need.",
        },
      ],
    },
    howWeHelp: {
      intro:
        "We develop complete software solutions that address business requirements which cannot be adequately met by existing off-the-shelf tools.",
      capabilities: [
        {
          title: "Custom Business Software & Internal Tools",
          description:
            "Design and build internal tools and platforms tailored to the exact way your team works and operates.",
          image: {
            src: "/site-images/photos/dashboard-laptop-review.png",
            alt: "A person reviewing a software dashboard on a laptop",
          },
        },
        {
          title: "SaaS Platform Development",
          description: "Take a SaaS product from initial concept through design, development and deployment.",
          image: {
            src: "/site-images/photos/team-standup-tablet.png",
            alt: "A team member presenting project updates to colleagues around a table",
          },
        },
        {
          title: "Web Applications & Customer Portals",
          description:
            "Build customer-facing portals and web applications for managing accounts, requests and services online.",
          image: {
            src: "/site-images/photos/field-team-laptop-review.png",
            alt: "Two team members reviewing information together on a laptop",
          },
        },
        {
          title: "API Development & System Integrations",
          description:
            "Develop custom APIs and integrations that connect your software with the wider systems your business uses.",
          image: {
            src: "/site-images/photos/workers-system-monitors.png",
            alt: "Two engineers reviewing system data across multiple monitors",
          },
        },
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
        src: "/site-images/photos/ai-network-diagram.png",
        alt: "A diagram showing an AI system connected to business documents and reporting",
      },
    },
    problem: {
      intro:
        "Chatbots that only answer questions have limits. Many businesses need something that can actually retrieve information and take action.",
      items: [
        {
          title: "Repetitive Enquiries and Support Load",
          description:
            "Customer service teams are overwhelmed by repetitive enquiries that don't need a human response, slowing down everyone else.",
        },
        {
          title: "Manual Information Retrieval",
          description:
            "Staff spend time manually searching through documents or systems just to answer routine questions.",
        },
        {
          title: "Time Lost to Admin and Research",
          description:
            "Administrative tasks, reporting and manual research take up time that could go toward higher-value, relationship-building work.",
        },
      ],
    },
    howWeHelp: {
      intro:
        "We build AI-powered assistants that can interact with tools and execute multistep tasks, operating with human oversight, permissions and approval workflows where relevant.",
      capabilities: [
        {
          title: "Custom AI Assistants & Business Agents",
          description:
            "Build tailored AI agents designed around your specific business processes, tools and workflows.",
          image: {
            src: "/site-images/photos/ai-network-diagram.png",
            alt: "A diagram showing an AI system connected to business documents and reporting",
          },
        },
        {
          title: "AI-Powered Customer Support",
          description:
            "Handle routine customer enquiries automatically and escalate complex requests to your team when needed.",
          image: {
            src: "/site-images/photos/dashboard-review-pair.png",
            alt: "Two colleagues reviewing analytics together on a desktop monitor",
          },
        },
        {
          title: "Internal Knowledge & Information Retrieval",
          description:
            "Give your team instant access to information stored across company documents and knowledge bases.",
          image: {
            src: "/site-images/photos/team-meeting-discussion.png",
            alt: "A team discussing a project together around a meeting table",
          },
        },
        {
          title: "AI Agents Connected to Business Tools & Workflows",
          description:
            "Connect agents directly to your business systems so they can retrieve information and complete tasks with appropriate oversight.",
          image: {
            src: "/site-images/photos/workers-system-monitors.png",
            alt: "Two engineers reviewing system data across multiple monitors",
          },
        },
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
  {
    slug: "system-integrations",
    href: "/services/system-integrations",
    navLabel: "System Integrations",
    metadataTitle: "System Integrations Melbourne | Connect Your Business Systems | 23Labs",
    description:
      "We connect the CRM, accounting, operations and customer-facing platforms your business already relies on, so information moves between them automatically instead of being re-entered by hand.",
    hero: {
      eyebrow: "Services / System Integrations",
      title: "Make your systems talk to each other.",
      lead:
        "Connect the CRM, accounting, operations and customer platforms your business already relies on, so information moves between them automatically instead of being copied by hand. We build integrations that hold up as the number of tools and the volume of data grows.",
      image: {
        src: "/site-images/photos/connected-tools-overlay.png",
        alt: "A diagram showing business tools connected through an automation hub",
      },
    },
    problem: {
      intro:
        "Most growing businesses don't run on one system, they run on several, and the gaps between them are where time and accuracy get lost.",
      items: [
        {
          title: "Re-entering the Same Information",
          description:
            "The same customer, job or invoice details get typed into two or three different systems because nothing is connected.",
        },
        {
          title: "Tools That Don't Share Data",
          description:
            "Your CRM, accounting platform and operational software each hold a different version of the truth, and nobody is sure which one is current.",
        },
        {
          title: "Integrations That Break Under Load",
          description:
            "Existing connections were built quickly or rely on manual exports, and stop working reliably as the business adds more tools and more volume.",
        },
      ],
    },
    howWeHelp: {
      intro:
        "We design integrations around the systems you already use, so data moves automatically and reliably without forcing your team onto new software.",
      capabilities: [
        {
          title: "CRM, Accounting & Operations Integration",
          description:
            "Connect the platforms your team relies on every day, from CRM and accounting software to job management and operational tools.",
          image: {
            src: "/site-images/photos/connected-tools-overlay.png",
            alt: "A diagram showing business tools connected through an automation hub",
          },
        },
        {
          title: "API Development & Custom Connections",
          description:
            "Build custom APIs and connectors for platforms that don't offer an off-the-shelf integration.",
          image: {
            src: "/site-images/photos/workers-system-monitors.png",
            alt: "Two engineers reviewing system data across multiple monitors",
          },
        },
        {
          title: "Real-Time Data Synchronisation",
          description:
            "Keep records consistent across systems as information changes, instead of relying on scheduled exports or manual syncing.",
          image: {
            src: "/site-images/photos/growth-chart-overlay.png",
            alt: "A hand pointing to a business growth chart trending upward",
          },
        },
        {
          title: "Legacy & Third-Party System Connections",
          description:
            "Bring older or specialised platforms into the same connected environment, even where a modern integration doesn't already exist.",
          image: {
            src: "/site-images/photos/notes-planning-desk.png",
            alt: "A person planning workflow notes at a desk",
          },
        },
      ],
    },
    useCases: [
      "Sync customer and job records automatically between your CRM and accounting platform.",
      "Connect an industry-specific operational tool to your core business systems via a custom API.",
      "Keep inventory, pricing or customer data consistent across multiple connected platforms.",
      "Replace manual CSV exports and imports with an automated, real-time data connection.",
    ],
    relatedSlugs: ["business-process-automation", "full-stack-software-development"],
  },
  {
    slug: "ongoing-support",
    href: "/services/ongoing-support",
    navLabel: "Ongoing Support",
    metadataTitle: "Ongoing Software & Automation Support Melbourne | 23Labs",
    description:
      "We stay involved after launch, monitoring, refining and extending the automation, software and integrations we build so they keep working as your business changes.",
    hero: {
      eyebrow: "Services / Ongoing Support",
      title: "Launch is the start, not the finish.",
      lead:
        "Business needs change, teams grow and systems need attention long after the initial build. We stay involved after launch to monitor, refine and extend what we've built, so it keeps delivering value as your business changes.",
      image: {
        src: "/site-images/photos/dashboard-review-pair.png",
        alt: "Two colleagues reviewing analytics together on a desktop monitor",
      },
    },
    problem: {
      intro:
        "Software and automation that isn't maintained tends to quietly stop fitting the business it was built for.",
      items: [
        {
          title: "No One Watching What You Rely On",
          description:
            "Automations and integrations that run quietly in the background can fail silently if nobody is monitoring them.",
        },
        {
          title: "The Business Keeps Changing",
          description:
            "New products, new tools and new processes mean systems built a year ago may no longer match how the team actually works.",
        },
        {
          title: "The Original Team Has Moved On",
          description:
            "Whoever built the original solution isn't around to explain it, extend it or fix it when something needs to change.",
        },
      ],
    },
    howWeHelp: {
      intro:
        "We stay close to what we build, so it keeps working properly and keeps evolving as your business does.",
      capabilities: [
        {
          title: "Monitoring & Issue Resolution",
          description:
            "Keep an eye on the automations, integrations and software we've built, and resolve issues before they affect your team.",
          image: {
            src: "/site-images/photos/team-meeting-discussion.png",
            alt: "A team discussing a project together around a meeting table",
          },
        },
        {
          title: "Ongoing Refinement & Optimisation",
          description:
            "Review how systems are actually being used and adjust them to remove new friction as your processes evolve.",
          image: {
            src: "/site-images/photos/team-standup-tablet.png",
            alt: "A team member presenting project updates to colleagues around a table",
          },
        },
        {
          title: "Feature Extensions & New Requirements",
          description:
            "Add new capabilities to existing software and automations as your business takes on new work or new requirements.",
          image: {
            src: "/site-images/photos/field-team-laptop-review.png",
            alt: "Two team members reviewing information together on a laptop",
          },
        },
        {
          title: "Team Support & Handover",
          description:
            "Make sure your team understands how the systems work, with documentation and support so you're never dependent on one person.",
          image: {
            src: "/site-images/photos/factory-automation-review.png",
            alt: "Two people reviewing automated equipment on a production floor",
          },
        },
      ],
    },
    useCases: [
      "Ongoing monitoring of business-critical automations and integrations, with issues resolved before they cause disruption.",
      "Regular reviews of how a custom platform is being used, with refinements based on real usage.",
      "Adding a new capability to existing software as the business takes on a new service line.",
      "Documentation and handover support so internal teams can confidently manage day-to-day changes.",
    ],
    relatedSlugs: ["business-process-automation", "system-integrations"],
  },
];

export function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((service) => service.slug === slug);
}
