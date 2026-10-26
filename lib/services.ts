export type ServiceLandingPageData = {
  slug: string;
  href: string;
  navLabel: string;
  metadataTitle: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    subheading?: string;
    lead: string;
    image: { src: string; alt: string };
  };
  proof?: { text: string; href?: string }[];
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
  industries?: { href: string; title: string; body: string }[];
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
    metadataTitle: "Business Process Automation Services Australia | 23Labs",
    description:
      "Automate quoting, onboarding, reporting, job allocation and data entry. We map the process first, then automate the steps your team repeats every day.",
    hero: {
      eyebrow: "Services / Business Process Automation",
      title: "Business process automation that removes repetitive admin",
      subheading: "Automate the repetitive. Focus on what matters.",
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
    relatedSlugs: ["ai-workflow-automation", "custom-software-development"],
    industries: [
      {
        href: "/freight-logistics",
        title: "Transport & Logistics",
        body: "Quoting, job allocation, proof of delivery and invoicing, and the handoff from the TMS into accounting.",
      },
      {
        href: "/recruitment",
        title: "Recruitment",
        body: "Candidate and job intake, publishing from the ATS to a job board and the website, plus onboarding and reporting.",
      },
      {
        href: "/professional-services",
        title: "Professional Services",
        body: "Client onboarding, proposals, project setup and reporting, without typing the client into the next tool.",
      },
    ],
    proof: [
      { text: "Two recent projects follow this pattern. " },
      { text: "CorIT Tech's onboarding", href: "/case-studies/corit-tech" },
      { text: " connects CRM information with project records, and a " },
      { text: "real estate office in Australia", href: "/case-studies/real-estate-workflow-automation" },
      { text: " has a clearer path from a website enquiry to the property record and the person who needs to act." },
    ],
  },
  {
    slug: "ai-workflow-automation",
    href: "/services/ai-workflow-automation",
    navLabel: "AI Workflow Automation",
    metadataTitle: "AI Workflow Automation for Business Processes | 23Labs",
    description:
      "Add AI to the steps where it actually helps: document processing, data extraction and classification inside workflows your team already runs.",
    hero: {
      eyebrow: "Services / AI Workflow Automation",
      title: "AI workflow automation for document-heavy and repetitive processes",
      subheading: "Smarter workflows. Less manual work.",
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
    industries: [
      {
        href: "/freight-logistics",
        title: "Transport & Logistics",
        body: "Reading a proof of delivery, rate card or delivery docket when the next step depends on a document. Structured job data does not need AI.",
      },
      {
        href: "/professional-services",
        title: "Professional Services",
        body: "Reading a proposal or onboarding document into fields. Moving a CRM field into a project tool is an integration, not an AI workflow.",
      },
    ],
    relatedSlugs: ["business-process-automation", "ai-agents"],
  },
  {
    slug: "custom-software-development",
    href: "/services/custom-software-development",
    navLabel: "Custom Software Development",
    metadataTitle: "Custom Software Development Australia | 23Labs",
    description:
      "Custom business software, internal platforms, client portals and dashboards, built around how your team works. Replace spreadsheets and outdated systems.",
    hero: {
      eyebrow: "Services / Custom Software Development",
      title: "Custom software development for growing businesses",
      subheading: "Software built around your business.",
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
          title: "Web Applications, Client and Staff Portals",
          description:
            "Build client and staff portals and web applications for managing accounts, requests and services online.",
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
    industries: [
      {
        href: "/recruitment",
        title: "Recruitment",
        body: "Public job fields when the ATS record and the candidate-facing title should not be identical, as on the Huntress website.",
      },
      {
        href: "/freight-logistics",
        title: "Transport & Logistics",
        body: "A dispatch or proof-of-delivery view when the TMS does not match how the yard works. There is no published transport case study.",
      },
      {
        href: "/professional-services",
        title: "Professional Services",
        body: "An internal tool only when the CRM and the project system cannot carry the workflow. CorIT Tech kept the software it already had.",
      },
    ],
    relatedSlugs: ["business-process-automation", "system-integrations"],
    proof: [
      { text: "On the Huntress Recruitment project we added " },
      { text: "custom public-facing fields", href: "/case-studies/huntress-recruitment" },
      { text: " so internal vacancy records and the website did not have to match word for word. " },
      { text: "Lily Olsen Counselling", href: "/case-studies/lily-olsen-counselling" },
      {
        text: " was a four-page website rebuild for an Auckland practice, which is a different job from an internal platform. A ",
      },
      { text: "real estate office in Australia", href: "/case-studies/real-estate-workflow-automation" },
      {
        text: " also had its website improved so enquiries could move into the records the team already used.",
      },
    ],
  },
  {
    slug: "ai-agents",
    href: "/services/ai-agents",
    navLabel: "AI Agents",
    metadataTitle: "AI Agent Development for Business Operations | 23Labs",
    description:
      "Custom AI agents that work inside your systems for support, sales and admin tasks, with clear limits and a person approving the steps that matter.",
    hero: {
      eyebrow: "Services / AI Agents",
      title: "Custom AI agents for support, sales and internal operations",
      subheading: "AI agents that work with your business.",
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
    relatedSlugs: ["ai-workflow-automation", "custom-software-development"],
  },
  {
    slug: "system-integrations",
    href: "/services/system-integrations",
    navLabel: "System Integrations",
    metadataTitle: "System Integration & API Development | 23Labs",
    description:
      "Connect your CRM, accounting, job and website systems so data moves automatically. API integrations and custom connectors that end double entry.",
    hero: {
      eyebrow: "Services / System Integrations",
      title: "System integrations and API development",
      subheading: "Make your systems talk to each other.",
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
    industries: [
      {
        href: "/recruitment",
        title: "Recruitment",
        body: "ATS, job board and website. The published example connected Bullhorn, SEEK and WordPress for Huntress Recruitment.",
      },
      {
        href: "/freight-logistics",
        title: "Transport & Logistics",
        body: "A functional link between the TMS and accounting. No transport product is named here, because no transport integration is published as a case study.",
      },
      {
        href: "/professional-services",
        title: "Professional Services",
        body: "CRM to project management. CorIT Tech's onboarding workflow creates projects and tasks from the CRM record.",
      },
    ],
    relatedSlugs: ["business-process-automation", "custom-software-development"],
    proof: [
      { text: "The " },
      { text: "Huntress Recruitment project", href: "/case-studies/huntress-recruitment" },
      {
        text: " connected Bullhorn, SEEK and the company website so recruiters were not keeping three copies of the same vacancy. ",
      },
      { text: "CorIT Tech", href: "/case-studies/corit-tech" },
      { text: " had its CRM joined to project management for client onboarding, and a " },
      { text: "real estate office in Australia", href: "/case-studies/real-estate-workflow-automation" },
      { text: " had enquiry details connected with property records." },
    ],
  },
  {
    slug: "ongoing-support",
    href: "/services/ongoing-support",
    navLabel: "Ongoing Support",
    metadataTitle: "Ongoing Software Development & Support | 23Labs",
    description:
      "Maintenance, feature development and improvements for your existing software, automations and integrations, so they keep working as the business changes.",
    hero: {
      eyebrow: "Services / Ongoing Support",
      title: "Ongoing software development and support",
      subheading: "Launch is the start, not the finish.",
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
