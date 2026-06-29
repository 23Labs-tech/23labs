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
    slug: "ai-automation",
    eyebrow: "AI",
    title: "AI Automation",
    homeTitle: "AI Automation",
    summary:
      "We design automations that handle repetitive admin work quietly in the background, so your team spends time on what actually grows the business.",
    description:
      "We design automations that handle repetitive admin work quietly in the background, so your team spends time on what actually grows the business.",
    features: [
      "Workflow & process automation",
      "Lead & customer communications",
      "Scheduling, reporting & admin tasks",
      "AI built into your existing tools",
    ],
  },
  {
    slug: "web-development",
    eyebrow: "WEB",
    title: "Web Development",
    homeTitle: "Web Development",
    summary:
      "Fast, modern websites that load quickly, rank well, and turn visitors into leads, built on a foundation your team can keep growing into.",
    description:
      "Fast, modern websites that load quickly, rank well, and turn visitors into leads, built on a foundation your team can keep growing into.",
    features: [
      "Marketing sites & landing pages",
      "Web apps & customer portals",
      "Conversion-focused design",
      "Fast, maintainable builds",
    ],
  },
  {
    slug: "software-development",
    eyebrow: "APP",
    title: "App & Software Development",
    homeTitle: "App & Software",
    summary:
      "From internal tools to full platforms, we design custom software shaped around how your team actually works, not the other way around.",
    description:
      "From internal tools to full platforms, we design custom software shaped around how your team actually works, not the other way around.",
    features: [
      "Internal tools & dashboards",
      "Customer-facing platforms",
      "SaaS product development",
      "Scalable, maintainable architecture",
    ],
  },
  {
    slug: "data-integration",
    eyebrow: "DATA",
    title: "Data Integration",
    homeTitle: "Data Integration",
    summary:
      "We connect the tools you already use so information moves automatically between them, removing duplicate entry and the gaps where things get missed.",
    description:
      "We connect the tools you already use so information moves automatically between them, removing duplicate entry and the gaps where things get missed.",
    features: [
      "Connecting your existing tools",
      "Automated data flow between systems",
      "Dashboards & live reporting",
      "A single source of truth",
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
    slug: "haylo-ai",
    name: "Haylo AI",
    type: "23Labs Product",
    image: {
      src: "/work/haylo-ai.png",
      alt: "Haylo AI project image with an AI assistant and support agent",
    },
    tags: ["AI Automation", "Voice & Calls", "Booking Integration"],
    problem:
      "Our own AI receptionist product, answering calls, qualifying leads, and booking appointments around the clock for growing businesses.",
    challenge:
      "Small and growing businesses lose leads every day to calls they simply can't pick up, especially after hours or during busy periods, with no easy way to staff a receptionist around the clock.",
    approach:
      "We built Haylo as our own product: a configurable AI receptionist persona that answers calls, handles FAQs, and books appointments directly, with rules tuned per business so it never over-shares pricing or services unprompted.",
    result:
      "A 24/7 front line that qualifies leads and books appointments while the team is busy, asleep, or off the clock, with the groundwork from building it feeding directly into the client software we ship.",
    ctaHref: "https://gethaylo.co",
    ctaLabel: "Visit gethaylo.co",
  },
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

export const homeProcessSteps = [
  {
    number: "01",
    title: "Discover",
    lead: "We start by understanding how your business actually works.",
    body:
      "Before recommending any solution, we take the time to map your current workflows, identify bottlenecks, and uncover where time, revenue, and productivity are being lost. Through workshops and discovery sessions, we gain a clear understanding of your team's day-to-day processes, challenges, and goals.",
    result:
      "A clear roadmap focused on solving the right problems, not just implementing technology.",
  },
  {
    number: "02",
    title: "Design & Build",
    lead: "We build solutions around your existing workflows, not the other way around.",
    body:
      "Using insights gathered during discovery, we design practical systems that fit naturally into the way your team operates. Whether it's custom software, AI automation, integrations, or internal tools, every solution is tailored to improve efficiency while minimizing disruption.",
    result:
      "Technology that feels like a natural extension of your business and helps your team work smarter.",
  },
  {
    number: "03",
    title: "Launch & Support",
    lead: "We stay involved to ensure long-term success.",
    body:
      "Implementation is only the beginning. We work alongside your team during rollout, gather feedback, refine processes, and continuously improve the solution as your business evolves.",
    result:
      "Ongoing improvements, stronger adoption, and solutions that keep creating value over time.",
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
    question: "How do we start a project?",
    answer:
      "The first step is a short discovery conversation to understand the workflow, goal, timeline, and best next move.",
  },
];
