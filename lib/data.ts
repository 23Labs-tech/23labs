export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
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
    slug: "full-stack-software-development",
    title: "Full-Stack Software Development",
    homeTitle: "Full-Stack Software Development",
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

export const stats = [
  { value: "60+", label: "Projects shipped end to end" },
  { value: "100+", label: "Custom automations in production" },
  { value: "12+", label: "Years of experience" },
];

export const caseStudies = [
  {
    slug: "lily-olsen-counselling",
    name: "Lily Olsen Counselling",
    type: "Website Rebuild",
    image: {
      src: "/work/lily-olsen-counselling.png",
      alt: "Lily Olsen Counselling project image with counselling session photography and logo",
    },
    tags: ["Web Development", "Brand-led Design", "Multi-page Build"],
    problem:
      "A full multi-page website rebuild for an Auckland-based therapist, with a calm, considered design and clear pathways to book.",
    challenge:
      "The existing site didn't reflect the calm, trustworthy feel a therapy practice needs, and key pages like services and booking pathways were scattered and hard to follow.",
    approach:
      "We rebuilt the site across four pages, home, about, services, and contact, with a consistent sage and ivory palette, soft scroll-triggered animation, and a single typeface throughout to keep the whole experience calm and unhurried.",
    result:
      "A cohesive, considered site where every page leads naturally toward booking a session, with a layout that's easy for a non-technical owner to keep updated.",
  },
  {
    slug: "corit-tech",
    name: "CorIT Tech",
    type: "Onboarding Automation",
    image: {
      src: "/work/corit-tech.png",
      alt: "CorIT Tech project image with robot technology background and logo",
    },
    tags: ["AI Automation", "Data Integration"],
    problem:
      "Automated a manual, multi-tool onboarding process for an IT services team as client volume started to outpace it.",
    challenge:
      "The team was manually moving onboarding data between disconnected tools as client volume increased.",
    approach:
      "We mapped the onboarding workflow end to end and built automations that sync data across their CRM and project tools the moment a new client signs on, removing the manual copy-paste step entirely.",
    result:
      "Saved 10+ hours every month, reduced manual errors, and created a more scalable onboarding process.",
    flow: ["CRM", "Automation", "Accounting", "Provisioning", "Notification"],
  },
  {
    slug: "first-national-real-estate",
    name: "First National Real Estate",
    type: "Workflow Automation",
    image: {
      src: "/work/first-national-real-estate.png",
      alt: "First National Real Estate project image with interior photography and logo",
    },
    tags: ["Automation", "Customer Experience"],
    problem:
      "Automated the handoffs between customer enquiries and property records to cut down repetitive admin work.",
    challenge:
      "Customer and property workflows needed clearer handoffs and fewer repetitive administrative steps.",
    approach:
      "We automated the handoffs between customer enquiries and property records, building clear triggers so the right person is notified at the right step without anyone having to chase it manually.",
    result:
      "Improved operational visibility and reduced the manual follow-up required across common customer touchpoints.",
    flow: ["Enquiry received", "Categorised", "CRM updated", "Assigned", "Reporting"],
  },
];

export const testimonials = [
  {
    quote:
      "23Labs helped us automate repetitive workflows that were slowing the team down. The solution was practical, clear, and easy for our staff to adopt.",
    name: "CorIT Team",
    role: "Technology services",
  },
  {
    quote:
      "They understood the operational detail quickly and gave us systems that removed friction without making the process feel over-engineered.",
    name: "First National Real Estate",
    role: "Real estate operations",
  },
  {
    quote:
      "The process was calm, structured, and professional. I ended up with a website that feels aligned with the practice and easy to manage.",
    name: "Lily Olsen",
    role: "Counselling practice owner",
  },
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

export const homeProcessBrief = [
  {
    number: "01",
    title: "Understand the problem",
    body: "We map your systems, workflows and bottlenecks.",
  },
  {
    number: "02",
    title: "Design the solution",
    body: "We build around how your business actually operates.",
  },
  {
    number: "03",
    title: "Launch and improve",
    body: "We deploy, measure and continue refining.",
  },
];

export const serviceProcessSteps = [
  {
    number: "01",
    title: "Discover",
    body: "We map your processes and find where the friction and the biggest opportunities are.",
  },
  {
    number: "02",
    title: "Build",
    body: "We design and build practical solutions tailored to how your team actually works.",
  },
  {
    number: "03",
    title: "Support",
    body: "We launch, refine, and keep improving long after go-live so it keeps delivering.",
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

export const values = [
  {
    title: "Practical over flashy",
    body:
      "Every solution has to earn its place by saving time or making money.",
  },
  {
    title: "Built to be used",
    body:
      "Technology only works when people actually use it. We design around your team and the way you already work, not the other way around.",
  },
  {
    title: "Partners, not vendors",
    body:
      "We stay close, explain things clearly, and keep improving long after launch. You should never feel lost in the technical detail.",
  },
];

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
