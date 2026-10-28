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
      "Business automation, custom software and the integrations that connect them, plus the occasional website or web app when a project needs one. We tend to be judged on whether it saved time or made money, not on how it looks in a demo.",
  },
  {
    question: "What kinds of businesses does 23Labs work with?",
    answer:
      "We work with growing service businesses, professional teams, and operators who need better systems, automation, software, or web platforms.",
  },
  {
    question: "Can 23Labs improve existing tools instead of replacing them?",
    answer:
      "Yes. Many projects start by connecting and improving the tools a business already uses before introducing new software.",
  },
  {
    question: "Can you automate our current processes without a full rebuild?",
    answer:
      "Usually, yes. Most automation projects sit on top of the tools you already run, we map the process first and only recommend replacing something if it's genuinely holding you back.",
  },
  {
    question: "Do you build full custom applications, or just automations?",
    answer:
      "Both. Some projects are a focused automation between two tools, others are a complete internal platform or customer-facing application. We scope it around the problem, not a fixed package.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Launch is the start, not the end, we stay involved to refine the workflow, fix what needs fixing, and help the system keep up as the business grows.",
  },
  {
    question: "How do we start a project?",
    answer:
      "The first step is a short discovery conversation to understand the workflow, goal, timeline, and best next move.",
  },
];
