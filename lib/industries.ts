export const industryLinks = [
  {
    slug: "construction",
    href: "/construction",
    label: "Construction",
    icon: "construction",
    description:
      "Software and automation for builders, contractors and construction businesses managing projects, compliance, documentation, quotes and client communication.",
  },
  {
    slug: "freight-logistics",
    href: "/freight-logistics",
    label: "Freight & Logistics",
    icon: "freight",
    description:
      "Workflow systems for transport, freight and logistics businesses that need better visibility, less manual data entry and smoother communication between teams, customers and systems.",
  },
  {
    slug: "professional-services",
    href: "/professional-services",
    label: "Professional Services",
    icon: "professional",
    description:
      "Automation and custom software for consultants, agencies, accountants, legal firms and service businesses that rely on client communication, admin workflows and repeatable internal processes.",
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
  metadataTitle: "Industry Software, Automation & AI Solutions | 23Labs",
  description:
    "23Labs helps construction, logistics, professional services, allied health and real estate businesses reduce admin, connect systems and build smarter workflows through custom software, automation, integrations and AI agents.",
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
  software: "/services/full-stack-software-development",
  aiAgents: "/services/ai-agents",
} as const;

export const industryPages = [
  {
    slug: "construction",
    href: "/construction",
    metadataTitle: "Construction Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps construction businesses reduce admin, manage documentation, automate follow-ups and connect systems with custom software, workflow automation and AI solutions.",
    hero: {
      eyebrow: "Industries / Construction",
      title: "Software and automation built for ",
      highlight: "construction teams",
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
          name: "Full-Stack Software Development",
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
    cta: {
      title: "Book a construction discovery call",
      body:
        "Tell us how quotes, documents and job updates currently move through your business and we'll show you where automation can save your team the most time.",
    },
  },
  {
    slug: "freight-logistics",
    href: "/freight-logistics",
    metadataTitle: "Freight & Logistics Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps freight and logistics businesses reduce manual data entry, improve visibility, automate customer updates and connect transport systems with custom software and integrations.",
    hero: {
      eyebrow: "Industries / Freight & Logistics",
      title: "Software and automation built for ",
      highlight: "freight and logistics",
      lead:
        "Automate repetitive work, connect disconnected systems and build software around the way your operation actually runs.",
      image: {
        src: "/site-images/industries/freight-logistics.jpg",
        alt: "Freight truck travelling on a highway at sunset",
      },
    },
    intro: {
      paragraphs: [
        "Freight and logistics businesses run on speed, accuracy and visibility. But when your team is managing bookings, driver communication, proof of delivery and customer updates across disconnected systems, that speed is the first thing to go.",
        "We help freight and logistics businesses build smarter operations through automation, integrations and software that fit the way your fleet, drivers and admin team already work.",
      ],
    },
    problems: {
      eyebrow: "Common problems",
      title: "Where ",
      highlight: "logistics teams lose time",
      items: [
        { title: "Manual quoting", body: "Rate requests are calculated and sent by hand, slowing down response times to new business." },
        { title: "Job allocation", body: "Assigning jobs to drivers relies on phone calls and manual checks instead of a clear system." },
        { title: "Driver communication", body: "Job details, updates and changes are relayed manually instead of flowing straight to drivers." },
        { title: "Proof of delivery processing", body: "PODs are collected on paper or scattered across phones and have to be chased and filed by hand." },
        { title: "Duplicate data entry", body: "The same booking and job information gets typed into multiple systems separately." },
        { title: "Disconnected transport systems", body: "Your TMS, accounting and customer tools don't share information automatically." },
        { title: "Invoicing delays", body: "Jobs sit waiting on paperwork before they can be invoiced, slowing down cash flow." },
        { title: "Spreadsheet based workflows", body: "Core parts of the operation still run through spreadsheets that are easy to break and hard to scale." },
        { title: "Manually transferring information between systems", body: "Staff spend hours moving the same information between booking, tracking and finance tools." },
      ],
    },
    help: {
      eyebrow: "How we can help",
      title: "Automation and software built around ",
      highlight: "how your fleet runs",
      body: "Your business doesn't need more disconnected systems. It needs better flow between the systems, people and processes already in place.",
      services: [
        {
          icon: "automation",
          name: "Business Process Automation",
          href: serviceHrefs.automation,
          body: "Automate booking confirmations, customer updates, POD requests and the internal admin that currently relies on manual follow-up.",
        },
        {
          icon: "ai",
          name: "AI Workflow Automation",
          href: serviceHrefs.aiWorkflow,
          body: "Route jobs, documents and status updates automatically between dispatch, drivers and your back office.",
        },
        {
          icon: "software",
          name: "Full-Stack Software Development",
          href: serviceHrefs.software,
          body: "Build custom dashboards and portals for job tracking, delivery visibility and operational reporting.",
        },
        {
          icon: "message",
          name: "AI Agents",
          href: serviceHrefs.aiAgents,
          body: "Deploy AI agents that handle customer enquiries, capture freight requests and qualify jobs before they reach your team.",
        },
      ],
    },
    builds: {
      eyebrow: "What we can build",
      title: "What We Can ",
      highlight: "Build",
      items: [
        { icon: "automation", title: "Logistics Workflow Automation", body: "Automate customer updates, booking confirmations, quote follow-ups and document requests." },
        { icon: "software", title: "Custom Operations Dashboards", body: "Track job status, delivery visibility, pending documents and performance in one place." },
        { icon: "integration", title: "Transport System Integrations", body: "Connect your TMS, accounting software, email and internal databases so data moves on its own." },
        { icon: "ai", title: "AI Customer Support Agents", body: "Answer common questions, capture freight enquiries and route requests to the right person automatically." },
      ],
    },
    cta: {
      title: "Book a freight & logistics discovery call",
      body:
        "Tell us how bookings, jobs and customer updates currently move through your operation and we'll show you where automation can make the biggest difference.",
    },
  },
  {
    slug: "professional-services",
    href: "/professional-services",
    metadataTitle: "Professional Services Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps professional service businesses automate admin, improve client workflows, connect systems and build custom software that supports growth.",
    hero: {
      eyebrow: "Industries / Professional Services",
      title: "Software and automation built for ",
      highlight: "professional services firms",
      lead:
        "Automate repetitive admin, connect the tools your team already uses and give your people more time for client work.",
      image: {
        src: "/site-images/industries/professional-services.jpg",
        alt: "Professional services team working in a modern open-plan office",
      },
    },
    intro: {
      paragraphs: [
        "Professional services firms run on trust, communication and consistent delivery. But behind the scenes, many teams are slowed down by manual onboarding, scattered documents and follow-ups that depend on someone remembering to send them.",
        "We help professional services businesses build systems around how your client work actually happens, from first enquiry through to ongoing delivery.",
      ],
    },
    problems: {
      eyebrow: "Common problems",
      title: "Where ",
      highlight: "client admin piles up",
      items: [
        { title: "Manual client onboarding", body: "New clients are onboarded through a string of emails, forms and manual reminders." },
        { title: "Proposal and engagement drafting", body: "Proposals and engagement letters are built from scratch instead of a repeatable workflow." },
        { title: "Chasing documents and signatures", body: "Staff spend time following up on outstanding documents, forms and signatures." },
        { title: "Appointment and meeting scheduling", body: "Booking and rescheduling meetings still relies on back-and-forth emails." },
        { title: "Status updates sent manually", body: "Clients chase progress updates because there's no automatic way to keep them informed." },
        { title: "Time tracking and billing reconciliation", body: "Matching time, invoices and payments across systems takes longer than it should." },
        { title: "Disconnected practice tools", body: "Your CRM, accounting, calendar and document systems don't share information automatically." },
        { title: "Repetitive client questions", body: "The same questions get answered manually again and again by your team." },
        { title: "Internal task handoffs", body: "Work gets passed between team members informally, with no clear record of what's been done." },
      ],
    },
    help: {
      eyebrow: "How we can help",
      title: "Automation and software built around ",
      highlight: "client delivery",
      body: "Professional services firms don't need more software for its own sake. They need the admin around client delivery to run itself.",
      services: [
        {
          icon: "automation",
          name: "Business Process Automation",
          href: serviceHrefs.automation,
          body: "Automate onboarding, document requests, reminders and the internal admin that currently depends on manual follow-up.",
        },
        {
          icon: "ai",
          name: "AI Workflow Automation",
          href: serviceHrefs.aiWorkflow,
          body: "Move client information between your CRM, inbox and project tools automatically as work progresses.",
        },
        {
          icon: "software",
          name: "Full-Stack Software Development",
          href: serviceHrefs.software,
          body: "Build client portals and internal tools designed around how your team actually delivers work.",
        },
        {
          icon: "message",
          name: "AI Agents",
          href: serviceHrefs.aiAgents,
          body: "Deploy AI agents that answer common client questions, capture enquiries and support your admin team.",
        },
      ],
    },
    builds: {
      eyebrow: "What we can build",
      title: "What We Can ",
      highlight: "Build",
      items: [
        { icon: "automation", title: "Client Workflow Automation", body: "Automate onboarding, document requests, reminders, task creation and status updates." },
        { icon: "portal", title: "Custom Client Portals", body: "Give clients a simple place to submit information, track progress and communicate with your team." },
        { icon: "integration", title: "CRM & Tool Integrations", body: "Connect your CRM, email, calendar, accounting software and project tools." },
        { icon: "ai", title: "AI Admin Agents", body: "Answer common questions, capture enquiries, qualify leads and support internal admin." },
      ],
    },
    cta: {
      title: "Book a professional services discovery call",
      body:
        "Tell us how clients currently move through your business and we'll show you where automation can save your team the most time.",
    },
  },
  {
    slug: "allied-health",
    href: "/allied-health",
    metadataTitle: "Allied Health Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps allied health clinics reduce admin, simplify scheduling and connect practice systems with custom software, workflow automation and integrations.",
    hero: {
      eyebrow: "Industries / Allied Health",
      title: "Software and automation built for ",
      highlight: "allied health clinics",
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
          name: "Full-Stack Software Development",
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
    cta: {
      title: "Book an allied health discovery call",
      body:
        "Tell us how bookings, intake and patient communication currently work and we'll show you where automation can save your team time.",
    },
  },
  {
    slug: "real-estate",
    href: "/real-estate",
    metadataTitle: "Real Estate Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps real estate agencies and property managers automate enquiries, maintenance requests, tenant communication and admin workflows with custom software, integrations and AI agents.",
    hero: {
      eyebrow: "Industries / Real Estate",
      title: "Software and automation built for ",
      highlight: "real estate teams",
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
          name: "Full-Stack Software Development",
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
    cta: {
      title: "Book a real estate discovery call",
      body:
        "Tell us how enquiries, inspections and maintenance currently move through your business and we'll show you where automation can help.",
    },
  },
  {
    slug: "trades-field-services",
    href: "/trades-field-services",
    metadataTitle: "Trades & Field Services Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps trades and field service businesses automate enquiries, quotes, scheduling, job updates and admin workflows with custom software, integrations and AI automation.",
    hero: {
      eyebrow: "Industries / Trades & Field Services",
      title: "Software and automation built for ",
      highlight: "trades and field service businesses",
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
          name: "Full-Stack Software Development",
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
    cta: {
      title: "Book a trades & field services discovery call",
      body:
        "Tell us how leads, quotes and jobs currently move through your business and we'll show you where automation can save your team time.",
    },
  },
] as const;

export type IndustryOverviewLink = (typeof industryLinks)[number];
export type IndustryPageData = (typeof industryPages)[number];

export function getIndustryPage(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}
