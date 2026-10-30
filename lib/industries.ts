import {
  professionalServicesIndustryPage,
  recruitmentIndustryPage,
  transportIndustryPage,
} from "@/lib/industryClusterPages";

export type CopyPart = { text: string; href?: string };
export type CopyBlock = string | CopyPart[];

export type IndustryPage = {
  slug: string;
  href: string;
  serviceName: string;
  metadataTitle: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subheading?: string;
    lead: string;
    image: { src: string; alt: string };
    ctaLabel?: string;
  };
  intro: { paragraphs: CopyBlock[] };
  problems: {
    eyebrow: string;
    title: string;
    highlight: string;
    items: { title: string; body: string }[];
  };
  problemSection: {
    heading: string;
    paragraphs: readonly [string, string];
    bullets: readonly [string, string, string];
  };
  supportingImage: { src: string; alt: string };
  solutions: {
    heading: string;
    intro: string;
    items: readonly { slug: string; description: string }[];
  };
  help: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    services: { icon: string; name: string; href: string; body: string }[];
  };
  builds: {
    eyebrow: string;
    title: string;
    highlight: string;
    items: { icon: string; title: string; body: string; href?: string }[];
  };
  workflows?: {
    eyebrow: string;
    title: string;
    highlight: string;
    paragraphs?: CopyBlock[];
    items: { title: string; paragraphs: CopyBlock[] }[];
  };
  proof?: {
    eyebrow: string;
    title: string;
    highlight: string;
    paragraphs: CopyBlock[];
    links?: { href: string; label: string; body: string }[];
  };
  faq?: { question: string; answer: string }[];
  cta: { title: string; body: string; label?: string };
};

export const industryLinks = [
  {
    slug: "freight-logistics",
    href: "/freight-logistics",
    label: "Transport & Logistics",
    icon: "freight",
    description:
      "Automation and software for transport and logistics operators that need quoting, allocation, proof of delivery, invoicing and a cleaner link between the TMS and accounting.",
  },
  {
    slug: "recruitment",
    href: "/recruitment",
    label: "Recruitment",
    icon: "recruitment",
    description:
      "Automation and integrations for recruitment teams that need candidate and job intake, ATS to job board and website sync, onboarding and reporting in one workflow.",
  },
  {
    slug: "professional-services",
    href: "/professional-services",
    label: "Professional Services",
    icon: "professional",
    description:
      "Automation for professional services firms that need client onboarding, proposals, project setup and reporting to follow the client record instead of another round of admin.",
  },
  {
    slug: "construction",
    href: "/construction",
    label: "Construction",
    icon: "construction",
    description:
      "Software and automation for builders, contractors and construction businesses managing projects, compliance, documentation, quotes and client communication.",
  },
  {
    slug: "allied-health",
    href: "/allied-health",
    label: "Allied Health",
    icon: "health",
    description:
      "Software and automation for allied health clinics that want to reduce admin, simplify scheduling and connect the systems their team already uses.",
  },
  {
    slug: "real-estate",
    href: "/real-estate",
    label: "Real Estate",
    icon: "real-estate",
    description:
      "Automation and software systems for agencies, property managers and real estate teams handling enquiries, inspections, maintenance requests, follow-ups and client communication.",
  },
  {
    slug: "trades-field-services",
    href: "/trades-field-services",
    label: "Trades & Field Services",
    icon: "trades",
    description:
      "Automation and software for electricians, plumbers, HVAC businesses, cleaners, landscapers and mobile service teams managing enquiries, quotes, scheduling and job updates.",
  },
] as const;

export const industryRoutePaths = ["/industries", ...industryLinks.map((industry) => industry.href)] as const;

export const industryOverview = {
  metadataTitle: "Industries We Build Software & Automation For | 23Labs",
  description:
    "Software, automation and integrations for transport and logistics, recruitment, professional services and other service businesses in Australia and NZ.",
  hero: {
    eyebrow: "Industries",
    title: "Software, automation & AI built around ",
    highlight: "your industry",
    lead:
      "Every industry has its own messy workflows, admin bottlenecks and disconnected systems. We build practical software and automation solutions that fit the way your business actually works.",
    lead2:
      "From lead handling and client communication to internal admin, reporting, scheduling, document management and system integrations, we help businesses remove repetitive work and create smoother operations. We do not believe in forcing businesses into generic tools that only solve half the problem. We work with you to understand your process, identify where time is being wasted, and build systems that make your team faster, more organised and easier to scale.",
  },
  fix: {
    eyebrow: "What we fix",
    title: "What 23Labs Helps ",
    highlight: "You Fix",
    body:
      "Most growing businesses do not have a software problem. They have an operations problem. The work gets done, but too much of it relies on manual follow-ups, spreadsheets, inboxes, disconnected platforms and staff remembering what needs to happen next. We help fix that by building systems around your real workflows.",
    items: [
      "Automating repetitive admin tasks",
      "Connecting your existing tools and databases",
      "Building internal dashboards and portals",
      "Creating AI agents for enquiries, follow-ups and support",
      "Improving lead response times",
      "Reducing manual data entry",
      "Automating reminders, updates and notifications",
      "Building custom apps and internal tools",
      "Creating reporting systems for management visibility",
      "Streamlining bookings, jobs, projects and client communication",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    title: "We start with the ",
    highlight: "problem",
    after: ", not the technology",
    paragraphs: [
      "Before anything is built, we look at how your business currently works, where your team is losing time, and what processes are slowing down growth.",
      "From there, we design practical systems that either improve what you already use or replace manual work with something cleaner, faster and easier to manage.",
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "The 23Labs ",
    highlight: "Process",
    steps: [
      {
        number: "01",
        title: "Understand Your Workflow",
        body:
          "We map out your current process, including the tools you use, the admin your team handles and the points where work gets delayed or duplicated.",
      },
      {
        number: "02",
        title: "Identify the Bottlenecks",
        body:
          "We look for the highest-impact areas to improve first. This could be slow lead response, manual data entry, missed follow-ups, disconnected systems or repetitive admin tasks.",
      },
      {
        number: "03",
        title: "Build the Right Solution",
        body:
          "We design and build the software, automation, integration or AI agent that best fits your workflow. No bloated systems. No unnecessary features. Just practical tools that solve real business problems.",
      },
      {
        number: "04",
        title: "Improve and Scale",
        body:
          "Once your system is live, we continue refining it based on how your team uses it, what the data shows and where more efficiency can be gained.",
      },
    ],
  },
  why: {
    eyebrow: "Why 23Labs",
    title: "Why Businesses ",
    highlight: "Choose 23Labs",
    paragraphs: [
      "Because we focus on outcomes, not hype. The goal is not to add more software to your business. The goal is to make your business easier to run.",
      "We help you reduce admin, respond faster, improve visibility, create better client experiences and give your team more time to focus on higher-value work.",
    ],
  },
  cta: {
    title: "Ready to build better systems?",
    body:
      "Whether you need custom software, AI automation, app development or better integrations between your existing tools, 23Labs can help you turn messy processes into smooth workflows. Book a consultation and let's find the highest-impact opportunities inside your business.",
  },
} as const;

export const industryProcess = {
  eyebrow: "How we work",
  title: "Our ",
  highlight: "Process",
  steps: [
    {
      number: "01",
      title: "Discovery and requirements",
      body: "Understand the current process, systems and objectives.",
    },
    {
      number: "02",
      title: "Solution design and planning",
      body: "Map the workflow and determine the right automation, integration or software approach.",
    },
    {
      number: "03",
      title: "Development and implementation",
      body: "Build and implement the solution while keeping the client involved.",
    },
    {
      number: "04",
      title: "Testing, deployment and ongoing support",
      body: "Test, deploy and continue improving the solution as required.",
    },
  ],
} as const;

export const industrySomethingElseCta = {
  title: "Have something else you want to automate?",
  body:
    "The examples above are only a starting point. If your team is spending time on repetitive admin, moving information between systems or working around a process that doesn't quite fit, we can look at building something around it.",
  label: "Tell us what you want to improve",
  cta: "Talk to us about your process",
} as const;

const serviceHrefs = {
  automation: "/services/business-process-automation",
  aiWorkflow: "/services/ai-workflow-automation",
  software: "/services/custom-software-development",
  aiAgents: "/services/ai-agents",
} as const;

export const industryPages: IndustryPage[] = [
  {
    slug: "construction",
    href: "/construction",
    serviceName: "Construction software and automation",
    metadataTitle: "Construction Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps construction businesses reduce admin, manage documentation, automate follow-ups and connect the systems a job already runs through.",
    hero: {
      eyebrow: "Industries / Construction",
      title: "Software and automation built for ",
      highlight: "construction teams",
      subheading: "Projects and compliance that stay on track without extra admin.",
      lead:
        "Automate repetitive admin, connect disconnected project systems and build software around the way your sites actually run.",
      image: {
        src: "/site-images/industries/construction.jpg",
        alt: "Construction workers in hard hats and safety vests working on an active building site",
      },
    },
    intro: {
      paragraphs: [
        "Construction businesses move fast on site, but the admin behind the scenes rarely keeps pace. Your team is juggling quotes, compliance paperwork, supplier communication and client updates across emails, spreadsheets and apps that don't talk to each other.",
        "We help construction businesses close that gap. Instead of forcing your team into generic project management software, we build automation, integrations and tools around how your projects, people and processes actually work.",
      ],
    },
    problems: {
      eyebrow: "Common problems",
      title: "Where ",
      highlight: "construction teams lose time",
      items: [
        { title: "Manual quoting and tendering", body: "Quotes and tenders are pieced together by hand, slowing down response times on new work." },
        { title: "Site progress tracking", body: "Job status lives in someone's head or a site diary instead of a system the whole team can see." },
        { title: "Subcontractor and supplier coordination", body: "Chasing availability, confirmations and updates eats into time that should go toward running jobs." },
        { title: "Safety and compliance documentation", body: "SWMS, permits and compliance forms are managed manually and are hard to track across active sites." },
        { title: "Variations and change orders", body: "Changes to scope get approved over text or email and are easy to lose track of." },
        { title: "Client and stakeholder updates", body: "Clients chase updates because there's no automatic way to keep them informed as a job progresses." },
        { title: "Defect and maintenance tracking", body: "Snags and defects are logged inconsistently, making handover and follow-up harder than it needs to be." },
        { title: "Documents spread across tools", body: "Drawings, contracts and approvals sit scattered across email, shared drives and paper files." },
        { title: "Duplicate data entry", body: "The same job information gets typed into estimating, accounting and project tools separately." },
      ],
    },
    problemSection: {
      heading: "The jobs, the paperwork, the approvals. Then the build.",
      paragraphs: [
        "A construction job runs on quotes, variations, compliance documents and client updates, usually spread across an estimating tool, a project system, email and a site folder. Chasing subcontractor paperwork and keeping clients updated competes with running the job itself.",
        "Automation and integration can connect those systems and automate the recurring admin: quote follow-ups, compliance reminders, document collection and progress updates, so the office keeps pace with the site.",
      ],
      bullets: [
        "Quotes and variations tracked automatically",
        "Compliance documents that chase themselves",
        "Clients updated without a phone call",
      ],
    },
    supportingImage: {
      src: "/site-images/photos/field-team-laptop-review.png",
      alt: "Two field team members reviewing project information together on a laptop",
    },
    solutions: {
      heading: "Automation and software built around how your sites actually run",
      intro: "Six ways 23Labs removes manual work from quoting, compliance and job administration.",
      items: [
        { slug: "business-process-automation", description: "Automate quote follow-ups, compliance reminders and job status updates." },
        { slug: "system-integrations", description: "Connect estimating, accounting and project tools so job costs move automatically." },
        { slug: "custom-software-development", description: "Job and project dashboards built around how your sites actually run." },
        { slug: "ai-workflow-automation", description: "Route documents, variations and site information without manual handoffs." },
        { slug: "ai-agents", description: "Agents that handle enquiries and capture job details during busy periods." },
        { slug: "ongoing-support", description: "Keep compliance tracking and job systems working as projects change." },
      ],
    },
    help: {
      eyebrow: "How we can help",
      title: "Automation and software built around ",
      highlight: "how your jobs run",
      body: "Most construction businesses don't need more software. They need their existing tools and processes connected, and the repetitive parts automated.",
      services: [
        {
          icon: "automation",
          name: "Business Process Automation",
          href: serviceHrefs.automation,
          body: "Automate quote follow-ups, compliance reminders, job status updates and the internal admin that currently relies on someone remembering to do it.",
        },
        {
          icon: "ai",
          name: "AI Workflow Automation",
          href: serviceHrefs.aiWorkflow,
          body: "Route documents, approvals and site information to the right person automatically, so work keeps moving without manual handoffs.",
        },
        {
          icon: "software",
          name: "Custom Software Development",
          href: serviceHrefs.software,
          body: "Build internal dashboards, job trackers and portals designed around how your projects and teams actually operate.",
        },
        {
          icon: "message",
          name: "AI Agents",
          href: serviceHrefs.aiAgents,
          body: "Deploy AI agents that handle enquiries, capture job details and support your admin team during busy periods.",
        },
      ],
    },
    builds: {
      eyebrow: "What we can build",
      title: "What We Can ",
      highlight: "Build",
      items: [
        { icon: "automation", title: "Project Workflow Automation", body: "Automate quote follow-ups, document requests, job reminders and internal task handoffs across active projects." },
        { icon: "software", title: "Job & Project Dashboards", body: "Give your team and clients a single, live view of job status, documents, approvals and progress." },
        { icon: "integration", title: "System Integrations", body: "Connect your CRM, accounting, estimating and project management tools so information moves without re-entry." },
        { icon: "ai", title: "AI Admin Agents", body: "Handle enquiries, document routing and compliance reminders with AI agents built around your workflow." },
      ],
    },
    faq: [
      {
        question: "Can you automate construction admin without replacing our job management software?",
        answer:
          "Yes. Most construction work starts with the systems already in place. We look at where quotes, variations, compliance documents and client updates are being retyped or chased by hand, then automate or connect those steps around the software you use.",
      },
      {
        question: "What construction processes are worth automating first?",
        answer:
          "Usually the ones that happen on every job: quote follow-ups, document and compliance collection from subcontractors, progress updates to clients, and moving job costs into accounting. Frequency is where the time goes, so that is where the payback shows first.",
      },
      {
        question: "Can you help with subcontractor and compliance paperwork?",
        answer:
          "Yes. We can build a structured way to request, collect and track insurances, licences and SWMS so expiry dates and missing documents are flagged automatically rather than checked by hand.",
      },
      {
        question: "Do you build custom software for builders and contractors?",
        answer:
          "When a process does not fit any product you already use, yes. That might be a job dashboard, a client portal for progress updates or an internal tool for estimating. If connecting or automating existing tools solves it, we will recommend that first.",
      },
      {
        question: "Do you work with construction businesses outside Melbourne?",
        answer:
          "Yes. 23Labs is based in Melbourne and delivers remotely for construction businesses across Australia and New Zealand.",
      },
    ],
    cta: {
      title: "Book a construction discovery call",
      body:
        "Tell us how quotes, documents and job updates currently move through your business and we'll show you where automation can save your team the most time.",
    },
  },
  transportIndustryPage,
  recruitmentIndustryPage,
  professionalServicesIndustryPage,
  {
    slug: "allied-health",
    href: "/allied-health",
    serviceName: "Allied health software and automation",
    metadataTitle: "Allied Health Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps allied health clinics reduce admin, simplify scheduling and connect practice systems with custom software, workflow automation and integrations.",
    hero: {
      eyebrow: "Industries / Allied Health",
      title: "Software and automation built for ",
      highlight: "allied health clinics",
      subheading: "Clinics that run on less admin and steadier scheduling.",
      lead:
        "Automate repetitive admin, simplify scheduling and connect the systems your clinic team already uses.",
      image: {
        src: "/site-images/industries/allied-health.jpg",
        alt: "Allied health practitioner guiding a patient through a rehabilitation exercise",
      },
    },
    intro: {
      paragraphs: [
        "Allied health clinics run on tight schedules, and the admin behind the scenes, bookings, patient communication, intake forms and reporting, can quietly take over your team's day.",
        "We help clinics build systems that reduce that admin load, so your team can spend more time with patients and less time on repetitive tasks.",
      ],
    },
    problems: {
      eyebrow: "Common problems",
      title: "Where ",
      highlight: "clinic admin builds up",
      items: [
        { title: "Manual appointment booking", body: "Bookings and confirmations are handled one at a time instead of flowing automatically." },
        { title: "New patient intake paperwork", body: "Intake forms are collected and entered manually before a patient's first appointment." },
        { title: "Appointment reminders and no-shows", body: "Reminders rely on staff remembering to send them, and no-shows still slip through." },
        { title: "Rescheduling and cancellations", body: "Changes to bookings create extra admin work instead of updating a system automatically." },
        { title: "Waitlist management", body: "Filling cancelled slots from a waitlist is done manually, often too slowly to fill the gap." },
        { title: "Patient communication across channels", body: "Phone, email and SMS messages are handled separately with no central view of a patient's conversation." },
        { title: "Disconnected practice software", body: "Your practice management system doesn't share information with the other tools your clinic uses." },
        { title: "Funder and referrer reporting", body: "Reporting for referrers or funding bodies is compiled manually from several systems." },
        { title: "Repetitive data entry", body: "The same patient details are entered more than once across intake forms and clinic systems." },
      ],
    },
    problemSection: {
      heading: "The bookings, the intake, the reminders. Then the appointment.",
      paragraphs: [
        "A clinic's week runs on bookings, intake forms, reminders and reschedules, usually split across a booking tool, a practice management system and a lot of phone calls. Every gap in that chain shows up as admin time or a missed appointment.",
        "Automation and integration can connect scheduling, intake and the practice management system, so reminders, confirmations and reschedules happen without someone chasing them by hand.",
      ],
      bullets: [
        "Bookings, reminders and reschedules automated",
        "Intake details captured before the appointment",
        "Less admin between patients",
      ],
    },
    supportingImage: {
      src: "/site-images/photos/dashboard-review-pair.png",
      alt: "Two colleagues reviewing a clinic scheduling dashboard together",
    },
    solutions: {
      heading: "Automation and software built around how your clinic actually runs",
      intro: "Six ways 23Labs removes manual work from scheduling, intake and patient admin.",
      items: [
        { slug: "business-process-automation", description: "Automate appointment reminders, confirmations and rescheduling." },
        { slug: "system-integrations", description: "Connect booking tools, forms and your practice management system." },
        { slug: "custom-software-development", description: "Clinic dashboards and tools built around how your team actually works." },
        { slug: "ai-workflow-automation", description: "Turn intake forms and referral letters into structured patient records." },
        { slug: "ai-agents", description: "Agents that answer common booking questions and capture patient details." },
        { slug: "ongoing-support", description: "Keep scheduling and intake systems reliable as the clinic grows." },
      ],
    },
    help: {
      eyebrow: "How we can help",
      title: "Automation and software built around ",
      highlight: "patient care",
      body: "Clinics don't need more complicated software. They need the booking, communication and admin work around patient care to run with less manual effort.",
      services: [
        {
          icon: "automation",
          name: "Business Process Automation",
          href: serviceHrefs.automation,
          body: "Automate booking confirmations, reminders, intake forms and the admin tasks that currently take staff away from patients.",
        },
        {
          icon: "ai",
          name: "AI Workflow Automation",
          href: serviceHrefs.aiWorkflow,
          body: "Keep patient information moving automatically between your booking system, forms and practice software.",
        },
        {
          icon: "software",
          name: "Custom Software Development",
          href: serviceHrefs.software,
          body: "Build internal tools and dashboards designed around how your clinic team actually works day to day.",
        },
        {
          icon: "message",
          name: "AI Agents",
          href: serviceHrefs.aiAgents,
          body: "Deploy AI agents that handle booking enquiries, answer common questions and support your front desk.",
        },
      ],
    },
    builds: {
      eyebrow: "What we can build",
      title: "What We Can ",
      highlight: "Build",
      items: [
        { icon: "calendar", title: "Booking & Scheduling Automation", body: "Automate appointment requests, reminders, confirmations, rescheduling and follow-ups." },
        { icon: "software", title: "Custom Clinic Software", body: "Internal tools and dashboards built around how your clinic team actually operates." },
        { icon: "document", title: "Patient Intake Workflows", body: "Digital intake processes that collect the right information before appointments." },
        { icon: "integration", title: "Practice Software Integrations", body: "Connect your booking tools, forms, email, SMS and practice management system." },
      ],
    },
    faq: [
      {
        question: "Can you work with our practice management software?",
        answer:
          "Usually. Many clinics run on platforms such as Cliniko that offer an API. We check what your system allows first, then automate or connect around it rather than asking you to switch.",
      },
      {
        question: "What clinic admin can be automated?",
        answer:
          "Common starting points are new patient intake forms, appointment reminders and follow-ups, referral handling, recall lists and moving information between the practice system, accounting and email marketing.",
      },
      {
        question: "How do you handle patient information and privacy?",
        answer:
          "We design workflows to move only the information each step needs, keep it inside the systems you already trust where possible, and document what goes where. Health information has extra obligations under Australian privacy law, so those are part of scoping, not an afterthought.",
      },
      {
        question: "Can AI help with patient enquiries and missed calls?",
        answer:
          "It can answer routine questions, capture details and route enquiries to the right person. We scope where AI fits and where a person must stay involved, especially for anything clinical.",
      },
      {
        question: "Do you work with clinics outside Melbourne?",
        answer:
          "Yes. We work remotely with allied health clinics across Australia and New Zealand.",
      },
    ],
    cta: {
      title: "Book an allied health discovery call",
      body:
        "Tell us how bookings, intake and patient communication currently work and we'll show you where automation can save your team time.",
    },
  },
  {
    slug: "real-estate",
    href: "/real-estate",
    serviceName: "Real estate software and automation",
    metadataTitle: "Real Estate Software & Automation Solutions | 23Labs",
    description:
      "Automate enquiries, maintenance requests and tenant updates for agencies and property managers, and connect the systems the office already uses.",
    hero: {
      eyebrow: "Industries / Real Estate",
      title: "Software and automation built for ",
      highlight: "real estate teams",
      subheading: "Enquiries and maintenance requests that follow up themselves.",
      lead:
        "Automate repetitive admin, respond to enquiries faster and connect the systems your agency already relies on.",
      image: {
        src: "/site-images/industries/real-estate.jpg",
        alt: "Modern residential property exterior",
      },
    },
    intro: {
      paragraphs: [
        "Real estate teams deal with constant enquiries, inspections, maintenance requests and tenant communication. The work doesn't stop, but too much of it is still manual, repetitive and spread across different systems.",
        "We help agencies and property managers build workflows that reduce admin, speed up response times and keep enquiries, clients and properties easier to manage.",
      ],
    },
    problems: {
      eyebrow: "Common problems",
      title: "Where ",
      highlight: "agencies lose time",
      items: [
        { title: "Manual enquiry response", body: "Listing enquiries sit in an inbox waiting for someone to reply instead of triggering an instant response." },
        { title: "Inspection scheduling", body: "Booking and confirming inspections is handled manually, one enquiry at a time." },
        { title: "Application and document collection", body: "Chasing rental applications and supporting documents takes up significant staff time." },
        { title: "Maintenance request handling", body: "Requests arrive through calls, emails and messages and get tracked inconsistently." },
        { title: "Landlord and vendor updates", body: "Owners and vendors are updated manually instead of through an automatic workflow." },
        { title: "Tenant communication", body: "Routine tenant questions and follow-ups take up time that could go toward higher-value work." },
        { title: "Disconnected CRM and property tools", body: "Your CRM and property management software don't share information automatically." },
        { title: "Manual data entry between portals", body: "Listing and lead data is re-entered by hand between portals and internal systems." },
        { title: "Owner and management reporting", body: "Reports for owners are compiled manually from several different systems." },
      ],
    },
    problemSection: {
      heading: "The enquiries, the inspections, the maintenance requests. Then the follow-up.",
      paragraphs: [
        "An agency's day runs on enquiries, inspection bookings, maintenance requests and the follow-up that keeps landlords and tenants informed. Each one usually means checking a different system or chasing someone by phone.",
        "Automation and integration can connect the CRM, the property management software and the website, so enquiries and maintenance requests are tracked and followed up without the office having to hold it all in their heads.",
      ],
      bullets: [
        "Enquiries followed up automatically",
        "Maintenance requests tracked end to end",
        "Landlords and tenants kept in the loop",
      ],
    },
    supportingImage: {
      src: "/site-images/photos/team-standup-tablet.png",
      alt: "A real estate team member presenting enquiry data to colleagues around a table",
    },
    solutions: {
      heading: "Automation and software built around how your agency actually works",
      intro: "Six ways 23Labs removes manual work from enquiries, maintenance and tenant communication.",
      items: [
        { slug: "business-process-automation", description: "Automate enquiry responses, inspection reminders and follow-ups." },
        { slug: "system-integrations", description: "Connect your CRM, property management software and website forms." },
        { slug: "custom-software-development", description: "Portals and dashboards built around property and tenant workflows." },
        { slug: "ai-workflow-automation", description: "Extract details from enquiries and maintenance requests automatically." },
        { slug: "ai-agents", description: "Agents that answer buyer and tenant questions and route leads." },
        { slug: "ongoing-support", description: "Keep enquiry and maintenance workflows reliable as listings change." },
      ],
    },
    help: {
      eyebrow: "How we can help",
      title: "Automation and software built around ",
      highlight: "faster response times",
      body: "Real estate teams need speed and consistency. We help remove the manual admin that slows down enquiries, inspections and day-to-day property management.",
      services: [
        {
          icon: "automation",
          name: "Business Process Automation",
          href: serviceHrefs.automation,
          body: "Automate enquiry responses, inspection reminders, maintenance updates and application follow-ups.",
        },
        {
          icon: "ai",
          name: "AI Workflow Automation",
          href: serviceHrefs.aiWorkflow,
          body: "Route enquiries, maintenance requests and documents automatically to the right person.",
        },
        {
          icon: "software",
          name: "Custom Software Development",
          href: serviceHrefs.software,
          body: "Build internal tools and dashboards for property management, reporting and team workflows.",
        },
        {
          icon: "message",
          name: "AI Agents",
          href: serviceHrefs.aiAgents,
          body: "Deploy AI agents that answer buyer and tenant questions, capture details and qualify enquiries.",
        },
      ],
    },
    builds: {
      eyebrow: "What we can build",
      title: "What We Can ",
      highlight: "Build",
      items: [
        { icon: "automation", title: "Real Estate Workflow Automation", body: "Automate enquiry responses, inspection reminders, maintenance updates and application follow-ups." },
        { icon: "ai", title: "AI Enquiry Agents", body: "Answer common questions, capture buyer or tenant details and route leads to the right person." },
        { icon: "software", title: "Property Management Workflows", body: "Systems for maintenance requests, landlord updates, tenant communication and task tracking." },
        { icon: "integration", title: "CRM & Software Integrations", body: "Connect your CRM, property management software, website forms and reporting tools." },
      ],
    },
    proof: {
      eyebrow: "Proof",
      title: "Published proof: ",
      highlight: "an Australian real estate office",
      paragraphs: [
        [
          { text: "One Australian real estate office needed enquiries to reach the right person and the right property record without someone remembering the next step. " },
          { text: "The case study", href: "/case-studies/real-estate-workflow-automation" },
          { text: " covers that work: website improvements, plus a workflow that connects incoming enquiries with property records and notifies the person who needs to act." },
        ],
        "The office kept the systems it already used. The result was less manual follow-up, clearer tracking of enquiries and actions, and more consistent internal handoffs.",
      ],
      links: [
        {
          href: "/case-studies/real-estate-workflow-automation",
          label: "Real estate workflow automation case study",
          body: "Website improvements and enquiry-to-property-record automation for one Australian office.",
        },
      ],
    },
    faq: [
      {
        question: "Can you automate property enquiry follow-up?",
        answer:
          "Yes. Enquiries from your website and portals can trigger an instant response, update the right record and notify the agent who needs to act, so follow-up does not depend on someone remembering. Our published real estate case study covers this kind of workflow.",
      },
      {
        question: "Do we need to replace our CRM or property management software?",
        answer:
          "No. We start with the systems the office already uses and connect or automate around them. Replacing software is only worth discussing if the current tools cannot hold the workflow.",
      },
      {
        question: "What can be automated for property managers?",
        answer:
          "Maintenance request intake and routing, tenant and landlord updates, application and document collection, inspection reminders and owner reporting are the most common starting points.",
      },
      {
        question: "Can an AI agent answer buyer and tenant questions?",
        answer:
          "Yes, for routine questions such as availability, inspection times and how to apply. The agent captures details and passes anything that needs judgement to a person on your team.",
      },
      {
        question: "Do you work with agencies outside Melbourne?",
        answer:
          "Yes. 23Labs is based in Melbourne and works remotely with real estate offices across Australia and New Zealand.",
      },
    ],
    cta: {
      title: "Book a real estate discovery call",
      body:
        "Tell us how enquiries, inspections and maintenance currently move through your business and we'll show you where automation can help.",
    },
  },
  {
    slug: "trades-field-services",
    href: "/trades-field-services",
    serviceName: "Trades and field services automation",
    metadataTitle: "Trades & Field Services Automation | 23Labs",
    description:
      "Automate enquiries, quotes, scheduling and job updates for trades and field service teams, and connect the systems the crew already uses each day.",
    hero: {
      eyebrow: "Industries / Trades & Field Services",
      title: "Software and automation built for ",
      highlight: "trades and field service businesses",
      subheading: "Jobs that move from quote to invoice without the paperwork trailing behind.",
      lead:
        "Respond to leads faster, reduce admin and build software around the way your jobs actually get done.",
      image: {
        src: "/site-images/industries/trades-field-services.jpg",
        alt: "Electrician installing and wiring an electrical panel on site",
      },
    },
    intro: {
      paragraphs: [
        "Trades and field service businesses live and die by response times. When enquiries, quotes, scheduling and job updates are handled manually, jobs slip through the cracks and leads go cold.",
        "We help trades and field service businesses build systems that speed up response times, reduce admin and make it easier to manage jobs from first enquiry through to completion.",
      ],
    },
    problems: {
      eyebrow: "Common problems",
      title: "Where ",
      highlight: "jobs slip through the cracks",
      items: [
        { title: "Slow lead response", body: "New enquiries sit unanswered while a competitor responds first." },
        { title: "Manual quoting", body: "Quotes are prepared and sent by hand, slowing down how quickly work gets confirmed." },
        { title: "Scheduling and job allocation", body: "Bookings, reschedules and technician availability are juggled manually." },
        { title: "Job updates relayed by phone", body: "Status updates between the field and the office rely on calls and texts." },
        { title: "Job status not visible to the office", body: "The office doesn't have a clear, live view of where jobs are up to." },
        { title: "Paper-based job sheets and photos", body: "Job details and photos are collected on paper or scattered across phones." },
        { title: "Invoicing and payment follow-ups", body: "Invoicing is delayed until paperwork is chased down after the job is done." },
        { title: "Review and feedback requests", body: "Asking happy customers for reviews gets missed in the rush to the next job." },
        { title: "Disconnected CRM and job tools", body: "Your CRM, scheduling and accounting software don't share information automatically." },
      ],
    },
    problemSection: {
      heading: "The quotes, the jobs, the invoices. Then the next job.",
      paragraphs: [
        "A trades business runs on quotes, scheduled jobs, updates from the field and an invoice at the end, usually spread across a CRM, a job management tool and a lot of text messages. Every handoff between office and field is a chance for something to get missed.",
        "Automation and integration can connect the CRM, job management software and accounting, so a quote becomes a job, a job becomes an invoice, and the crew and the office are working from the same information.",
      ],
      bullets: [
        "Quotes that turn into jobs automatically",
        "Job updates without a phone call",
        "Invoices that go out as soon as the job's done",
      ],
    },
    supportingImage: {
      src: "/site-images/photos/factory-automation-review.png",
      alt: "Two people reviewing field equipment and job automation on site",
    },
    solutions: {
      heading: "Automation and software built around how your jobs actually get done",
      intro: "Six ways 23Labs removes manual work from quoting, scheduling and job updates.",
      items: [
        { slug: "business-process-automation", description: "Automate quote follow-ups, job reminders and review requests." },
        { slug: "system-integrations", description: "Connect your CRM, job management software and accounting." },
        { slug: "custom-software-development", description: "Job tracking tools built around how your crew actually works." },
        { slug: "ai-workflow-automation", description: "Turn enquiry details and job notes into structured records automatically." },
        { slug: "ai-agents", description: "Agents that capture job details and answer routine customer questions." },
        { slug: "ongoing-support", description: "Keep job and CRM integrations reliable as the business grows." },
      ],
    },
    help: {
      eyebrow: "How we can help",
      title: "Automation and software built around ",
      highlight: "how jobs get done",
      body: "Trades and field service businesses need systems that are simple, fast and built around real jobs, not more software to manage.",
      services: [
        {
          icon: "automation",
          name: "Business Process Automation",
          href: serviceHrefs.automation,
          body: "Automate lead responses, booking confirmations, reminders and the admin that currently takes time away from billable work.",
        },
        {
          icon: "ai",
          name: "AI Workflow Automation",
          href: serviceHrefs.aiWorkflow,
          body: "Move job details, updates and documents automatically between the field, the office and your customers.",
        },
        {
          icon: "software",
          name: "Custom Software Development",
          href: serviceHrefs.software,
          body: "Build job management tools and dashboards designed around how your team actually works.",
        },
        {
          icon: "message",
          name: "AI Agents",
          href: serviceHrefs.aiAgents,
          body: "Deploy AI agents that answer enquiries, capture job details and qualify leads around the clock.",
        },
      ],
    },
    builds: {
      eyebrow: "What we can build",
      title: "What We Can ",
      highlight: "Build",
      items: [
        { icon: "automation", title: "Lead Response Automation", body: "Capture new enquiries and trigger instant responses, follow-ups and task creation." },
        { icon: "software", title: "Job Management Workflows", body: "Smoother systems for booking jobs, assigning tasks and keeping the office updated." },
        { icon: "message", title: "Customer Communication Automation", body: "Automate confirmations, reminders, quote follow-ups, job updates and review requests." },
        { icon: "integration", title: "CRM & System Integrations", body: "Connect your CRM, job management software, accounting and website forms." },
      ],
    },
    faq: [
      {
        question: "Can you connect our job management software to accounting?",
        answer:
          "Usually. Platforms such as ServiceM8 offer integrations and APIs. We check what your tools allow, then connect jobs, quotes and invoices so details are entered once.",
      },
      {
        question: "What can trades businesses automate first?",
        answer:
          "Enquiry responses, quote follow-ups, booking confirmations, job reminders and review requests after a job is complete. These happen on every job, so automating them gives back time every week.",
      },
      {
        question: "Can you help us respond to leads faster?",
        answer:
          "Yes. New enquiries can trigger an immediate reply, create the job or lead record and alert the right person, so you do not lose work to whoever answered first.",
      },
      {
        question: "Is this only for larger trades businesses?",
        answer:
          "No. Small teams often feel admin the most because the people doing the work are also doing the paperwork. We scope to the size of the problem.",
      },
      {
        question: "Do you work with trades businesses outside Melbourne?",
        answer:
          "Yes. We work remotely with trades and field service businesses across Australia and New Zealand.",
      },
    ],
    cta: {
      title: "Book a trades & field services discovery call",
      body:
        "Tell us how leads, quotes and jobs currently move through your business and we'll show you where automation can save your team time.",
    },
  },
];

export type IndustryOverviewLink = (typeof industryLinks)[number];
export type IndustryPageData = IndustryPage;

export function getIndustryPage(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}
