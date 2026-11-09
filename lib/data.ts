export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/work" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    homeTitle: "Business Process Automation",
    tagline: "Automate the repetitive. Focus on what matters.",
    summary:
      "We streamline repetitive tasks, manual processes and disconnected workflows, helping businesses improve efficiency, reduce errors and free up their teams to focus on higher-value work.",
    description:
      "We streamline repetitive tasks, manual processes and disconnected workflows, helping businesses improve efficiency, reduce errors and free up their teams to focus on higher-value work.",
    features: [
      "Business workflow automation",
      "CRM, ERP and finance system integrations",
      "Data synchronisation and automated reporting",
      "Administrative and operational process automation",
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    homeTitle: "AI Workflow Automation",
    tagline: "Smarter workflows. Less manual work.",
    summary:
      "We integrate AI into everyday business workflows to automate document processing, data extraction, communications and complex tasks that traditionally require manual intervention.",
    description:
      "We integrate AI into everyday business workflows to automate document processing, data extraction, communications and complex tasks that traditionally require manual intervention.",
    features: [
      "AI-powered document processing and data extraction",
      "Intelligent email and communication workflows",
      "AI-assisted data classification and analysis",
      "AI integration with existing business applications",
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    homeTitle: "Custom Software Development",
    tagline: "Software built around your business.",
    summary:
      "We design and develop custom software, SaaS platforms, internal tools and web applications tailored to your business, from initial concept through development, deployment and ongoing support.",
    description:
      "We design and develop custom software, SaaS platforms, internal tools and web applications tailored to your business, from initial concept through development, deployment and ongoing support.",
    features: [
      "Custom business software and internal tools",
      "SaaS platform development",
      "Web applications and customer portals",
      "API development and system integrations",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    homeTitle: "AI Agents",
    tagline: "AI agents that work with your business.",
    summary:
      "We build AI agents that can interact with business systems, retrieve information, execute tasks and support your team across customer service, administration and internal operations.",
    description:
      "We build AI agents that can interact with business systems, retrieve information, execute tasks and support your team across customer service, administration and internal operations.",
    features: [
      "Custom AI assistants and business agents",
      "AI-powered customer support",
      "Internal knowledge and information retrieval",
      "AI agents connected to business tools and workflows",
    ],
  },
];

/**
 * Homepage and About figures. Unverified: the owner must confirm 60+, 100+ and 12+
 * before these are treated as public claims. This is the only place they are defined.
 */
export const stats = [
  { value: "60+", label: "Projects shipped end to end" },
  { value: "100+", label: "Custom automations in production" },
  { value: "12+", label: "Years of experience" },
];

export const processSteps = [
  {
    title: "Discover",
    lead: "We start by understanding how your business actually works.",
    body:
      "Before recommending any solution, we map current workflows, identify bottlenecks, and uncover where time, revenue, and productivity are being lost.",
    result:
      "A clear roadmap focused on solving the right problems, not just implementing technology.",
  },
  {
    title: "Design and Build",
    lead: "We build solutions around your existing workflows.",
    body:
      "Using discovery insights, we design practical systems that fit naturally into how your team operates, from custom software to AI automation and integrations.",
    result:
      "Technology that feels like a natural extension of your business and helps your team work smarter.",
  },
  {
    title: "Launch and Support",
    lead: "We stay involved to protect long-term success.",
    body:
      "Implementation is only the beginning. We support rollout, gather feedback, refine processes, and improve the solution as your business evolves.",
    result:
      "Ongoing improvements, stronger adoption, and systems that continue creating value over time.",
  },
];

export const workflowFramework = [
  {
    step: "Step 01",
    title: "Discover",
    body:
      "We start by understanding how the business currently operates, where time is being lost, what tools are being used, and which manual tasks are slowing the team down.",
  },
  {
    step: "Step 02",
    title: "Map",
    body:
      "We turn the current process into a clear workflow, identifying what can be simplified, automated, connected, or improved without disrupting the way the business already works.",
  },
  {
    step: "Step 03",
    title: "Build",
    body:
      "We create the right solution for the client, whether that is custom software, app development, API integration, workflow automation, AI agents, or connected internal systems.",
  },
  {
    step: "Step 04",
    title: "Optimise",
    body:
      "We review the results, measure time saved, improve the workflow, support team adoption, and help the client scale the solution into other areas of the business.",
  },
];

export const coreValues = [
  {
    title: "Practical over flashy",
    body: "Every solution has to earn its place by saving time, reducing friction or creating measurable business value.",
    icon: "practical",
  },
  {
    title: "Built to be used",
    body: "The best systems are the ones your team actually wants to use every day.",
    icon: "usable",
  },
  {
    title: "Partners, not vendors",
    body: "We work closely with clients to build solutions that fit how their business actually operates.",
    icon: "partners",
  },
  {
    title: "Impact-driven",
    body: "Everything we build should create measurable value and meaningful business outcomes over time.",
    icon: "impact",
  },
] as const;

export const faqs = [
  {
    question: "What does 23Labs actually build?",
    answer:
      "Business automation, custom software and the integrations that connect them, plus the occasional website or web app when a project needs one. We would rather be judged on whether it saved time or made money than on how it looks in a demo.",
  },
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "Mostly operational businesses in Australia and New Zealand: transport and logistics, construction, trades and field services, and recruitment, along with professional services, real estate and allied health.",
  },
  {
    question: "Can you improve our existing tools instead of replacing them?",
    answer:
      "Usually, yes. Most of our work connects and automates the tools you already use. We only suggest new software when the existing setup genuinely can't do the job.",
  },
  {
    question: "Do you build full applications, or just automations?",
    answer:
      "Both. Some projects are a single automation between two systems; others are internal tools, portals or SaaS platforms built from scratch.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Ongoing support keeps systems reliable as tools update and volumes grow, and covers improvements once your team is using what we built.",
  },
  {
    question: "How do we start?",
    answer:
      "Start a conversation and tell us what is slowing the team down. We will look at your current setup and come back with a scoped recommendation.",
  },
];

/** Homepage-only: the "Common questions" FAQ section. */
export const homeFaqs = [
  {
    question: "What does 23Labs actually do?",
    answer:
      "We help businesses simplify how they operate through process automation, system integrations and custom software. That might mean connecting existing tools, removing repetitive admin or building something tailored to how your business works.",
  },
  {
    question: "Do we need to replace our existing software?",
    answer:
      "Not necessarily. We usually start by looking at the systems you're already using. In many cases, we can connect or automate existing tools without replacing them.",
  },
  {
    question: "Can you automate processes that currently run through spreadsheets?",
    answer:
      "Yes. We work with businesses that rely on spreadsheets, emails and manual processes to manage everyday operations. We can automate parts of those workflows or build a more connected solution where needed.",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "It depends on the complexity of the problem and what needs to be built. Smaller automation and integration projects may be relatively straightforward, while custom software requires more planning and development. We discuss the scope and provide a clear quote before starting.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the scope and complexity. Smaller integrations and automations may take a few weeks, while larger custom software projects can take longer. We'll outline realistic timelines before development begins.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide ongoing support, maintenance and improvements to help ensure your solution continues working as your business evolves.",
  },
] as const;

/** Homepage-only: "Where the manual hours usually go" use-case rows. */
export const manualWorkAreas = [
  {
    title: "Quoting and estimating",
    body: "Quotes built by hand from price lists, then chased for approval.",
  },
  {
    title: "Client onboarding",
    body: "A signed client means re-entering the same details in three systems.",
  },
  {
    title: "Document processing",
    body: "Invoices, forms and PDFs read and typed up by someone on the team.",
  },
  {
    title: "Manual data entry",
    body: "The same record keyed into the CRM, the job system and a spreadsheet.",
  },
  {
    title: "Slow lead response",
    body: "New enquiries sit waiting until someone has time to follow up.",
  },
  {
    title: "CRM and accounting out of sync",
    body: "Customer and invoice records entered twice and never quite matching.",
  },
] as const;

/** Homepage-only: "What we build" overview cards (the 6 services grouped into 4). */
export const homeBuildItems = [
  {
    slug: "business-process-automation",
    title: "Business process automation",
    body: "Approvals, handoffs and repetitive admin run on their own, and people handle the exceptions.",
    href: "/services/business-process-automation",
  },
  {
    slug: "system-integrations",
    title: "System integrations",
    body: "Your CRM, job system, accounting and website connected, so nobody retypes information.",
    href: "/services/system-integrations",
  },
  {
    slug: "custom-software-development",
    title: "Custom software",
    body: "Internal tools, portals and web apps built around how you actually operate.",
    href: "/services/custom-software-development",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI workflows and agents",
    body: "AI that reads documents and completes approved tasks in your systems, with a person in the loop.",
    href: "/services/ai-workflow-automation",
  },
] as const;

/** Homepage-only: 3 featured case studies, shorter card copy than the full case study pages. */
export const homeCaseStudies = [
  {
    slug: "huntress-recruitment",
    company: "Huntress Recruitment",
    headline: "Bullhorn, SEEK and the website, kept in sync",
    summary: "Job information now moves between three systems instead of being entered in each one.",
  },
  {
    slug: "corit-tech",
    company: "CorIT Tech",
    headline: "Client onboarding that sets itself up",
    summary:
      "A signed client creates project records and tasks automatically. 10+ hours a month of admin saved, as reported by the client.",
  },
  {
    slug: "real-estate-workflow-automation",
    company: "Real estate office, Australia",
    headline: "Enquiries linked to listings and follow-up",
    summary: "Website enquiries connected to property records, so fewer leads slip through.",
  },
] as const;

/** Homepage-only: plain industry link row, in the order and wording shown on the homepage. */
export const homeIndustryLinks = [
  { label: "Transport and logistics", href: "/freight-logistics" },
  { label: "Construction", href: "/construction" },
  { label: "Trades and field services", href: "/trades-field-services" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "Professional services", href: "/professional-services" },
  { label: "Real estate", href: "/real-estate" },
  { label: "Allied health", href: "/allied-health" },
] as const;
