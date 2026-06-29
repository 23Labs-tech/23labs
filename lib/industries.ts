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
      "AI receptionist, booking automation and admin support systems for clinics that want to reduce missed calls, improve patient experience and take pressure off front desk teams.",
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

export const industryPages = [
  {
    slug: "construction",
    href: "/construction",
    metadataTitle: "Construction Software & Automation Solutions | 23Labs",
    description:
      "23Labs helps construction businesses reduce admin, manage documentation, automate follow-ups and connect systems with custom software, workflow automation and AI solutions.",
    hero: {
      eyebrow: "Industries / Construction",
      title: "Construction software & automation built for ",
      highlight: "busy teams",
      lead: "Construction businesses move fast, but the admin behind the scenes often slows everything down.",
      lead2:
        "Quotes, safety documents, project updates, compliance forms, supplier communication, job tracking, client follow-ups and internal reporting can quickly become scattered across spreadsheets, emails, folders and disconnected platforms. 23Labs helps construction businesses build smarter systems that reduce manual work, improve visibility and make it easier for teams to stay on top of what needs to happen next.",
    },
    help: {
      title: "Software Solutions for ",
      highlight: "Construction Businesses",
      body:
        "We work with construction companies, contractors, trades businesses and project-based teams that want to simplify operations and reduce the amount of time spent chasing information. Our solutions are built around your workflow, not around generic software templates.",
      items: [
        "Project tracking systems",
        "Quote and proposal automation",
        "Compliance and document management",
        "SWMS and safety workflow automation",
        "Job status dashboards",
        "Client update automation",
        "Internal approval workflows",
        "Supplier and subcontractor communication",
        "Maintenance and defect tracking",
        "Lead enquiry automation",
        "CRM and project management integrations",
        "AI agents for admin support and enquiry handling",
      ],
    },
    challenges: [
      {
        icon: "refresh",
        title: "Too Much Manual Admin",
        body:
          "Your team should not be spending hours copying information between emails, spreadsheets, CRMs and project tools. We automate repetitive admin so information moves where it needs to go without constant manual handling.",
      },
      {
        icon: "document",
        title: "Documents Are Hard to Track",
        body:
          "Construction businesses rely on documents being accurate, current and easy to find. We help create systems for storing, tracking, updating and managing important documents across jobs and teams.",
      },
      {
        icon: "bell",
        title: "Follow-Ups Get Missed",
        body:
          "Quotes, approvals, client updates and supplier responses often get delayed because no one has time to chase everything manually. We build automated follow-up workflows that keep work moving.",
      },
      {
        icon: "eye",
        title: "Management Lacks Visibility",
        body:
          "When information is spread across different tools, it becomes difficult to see what is happening across active projects. We build dashboards that give owners and managers a clearer view of jobs, tasks, risks and progress.",
      },
    ],
    builds: [
      {
        icon: "automation",
        title: "Construction Workflow Automation",
        body:
          "Automate repetitive tasks such as quote follow-ups, client updates, document requests, job reminders and internal task assignments.",
      },
      {
        icon: "software",
        title: "Custom Construction Software",
        body: "Build internal tools, dashboards, portals and job management systems designed around how your team works.",
      },
      {
        icon: "integration",
        title: "System Integrations",
        body:
          "Connect the tools you already use, including your CRM, forms, email, project management software, accounting system and cloud storage.",
      },
      {
        icon: "ai",
        title: "AI Admin Agents",
        body:
          "Create AI agents that help with enquiries, information capture, client responses, document routing and internal admin support.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Review Your Current Workflow",
        body: "We look at how your team currently handles jobs, documentation, enquiries, follow-ups and reporting.",
      },
      {
        number: "02",
        title: "Find the Biggest Time Drains",
        body:
          "We identify where admin is slowing the team down, where information gets lost and where automation can create the fastest return.",
      },
      {
        number: "03",
        title: "Build the System",
        body:
          "We design and build practical software, automations or integrations that remove manual work and improve team visibility.",
      },
      {
        number: "04",
        title: "Refine Over Time",
        body: "Once the system is live, we improve it based on real usage, feedback and new operational needs.",
      },
    ],
    why: {
      title: "Why 23Labs for ",
      highlight: "Construction?",
      paragraphs: [
        "We understand that construction teams do not need more complicated software. They need systems that are simple, useful and built around the way jobs actually get delivered.",
        "23Labs helps you reduce admin, improve communication and give your team better control over projects, documents and follow-ups.",
      ],
    },
    cta: {
      title: "Book a construction automation consultation",
      body:
        "Want to reduce admin, improve project visibility or automate repetitive construction workflows? Speak with 23Labs and we'll help you identify where better systems can save your team time.",
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
      title: "Freight & logistics software built for ",
      highlight: "smoother operations",
      lead: "Freight and logistics businesses rely on speed, accuracy and visibility.",
      lead2:
        "But when teams are managing bookings, customer updates, delivery information, documents, rates, job statuses and reporting across different systems, things can quickly become messy. 23Labs helps freight and logistics businesses build smarter workflows through custom software, automation, integrations and AI-powered admin support. We help remove repetitive work, reduce manual data entry and give teams better visibility across day-to-day operations.",
    },
    help: {
      title: "Software Solutions for ",
      highlight: "Freight & Logistics Businesses",
      body:
        "Your business does not need more disconnected systems. It needs better flow between the systems, people and processes already in place.",
      items: [
        "Freight booking workflows",
        "Job and delivery tracking dashboards",
        "Customer update automation",
        "Quote and rate request automation",
        "Data entry reduction",
        "Email-to-system workflows",
        "Driver, dispatcher and admin task routing",
        "Document handling and upload workflows",
        "CRM, TMS, accounting and warehouse system integrations",
        "Reporting dashboards",
        "AI agents for customer enquiries and admin support",
      ],
    },
    challenges: [
      {
        icon: "integration",
        title: "Manual Data Entry Across Systems",
        body:
          "Logistics teams often spend too much time entering the same information into multiple platforms. We build integrations and automations that reduce double handling and improve accuracy.",
      },
      {
        icon: "message",
        title: "Customers Want Faster Updates",
        body:
          "Customers expect clear updates on bookings, deliveries, delays and documents. We help automate customer communication so your team does not need to manually respond to every status request.",
      },
      {
        icon: "eye",
        title: "Operations Lack Visibility",
        body:
          "When jobs, documents and updates are spread across inboxes, spreadsheets and transport systems, managers lose visibility. We build dashboards that give teams a clearer view of what is happening.",
      },
      {
        icon: "refresh",
        title: "Admin Teams Are Constantly Chasing",
        body:
          "From missing paperwork to delivery confirmations and internal approvals, logistics admin can become reactive. We help create workflows that automatically trigger the right next step.",
      },
    ],
    builds: [
      {
        icon: "automation",
        title: "Logistics Workflow Automation",
        body: "Automate customer updates, booking confirmations, quote follow-ups, internal reminders and document requests.",
      },
      {
        icon: "dashboard",
        title: "Custom Operations Dashboards",
        body: "Create dashboards for job status, delivery visibility, team tasks, pending documents and operational reporting.",
      },
      {
        icon: "integration",
        title: "Transport System Integrations",
        body: "Connect your CRM, TMS, accounting system, email inbox, forms, spreadsheets and internal databases.",
      },
      {
        icon: "ai",
        title: "AI Customer Support Agents",
        body:
          "Build AI agents that can answer common customer questions, capture freight enquiries, qualify requests and route information to the right person.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Map Your Current Operations",
        body: "We review how bookings, jobs, updates, documents and customer requests move through your business.",
      },
      {
        number: "02",
        title: "Identify Manual Bottlenecks",
        body: "We find the points where your team is repeating work, chasing information or relying on manual updates.",
      },
      {
        number: "03",
        title: "Build the Right Workflow System",
        body: "We create practical automations, integrations or custom software that improves speed, visibility and accuracy.",
      },
      {
        number: "04",
        title: "Continue Improving",
        body: "As your operations grow, we help refine and expand the system so it keeps supporting your business.",
      },
    ],
    why: {
      title: "Why 23Labs for ",
      highlight: "Freight & Logistics?",
      paragraphs: [
        "Because logistics businesses need systems that are reliable, practical and built for real operational pressure.",
        "23Labs helps you reduce manual admin, improve customer communication and create better visibility across your workflows.",
      ],
    },
    cta: {
      title: "Book a freight & logistics automation consultation",
      body:
        "Want to reduce admin and improve operational visibility? Speak with 23Labs and we'll help you find where automation and better systems can make the biggest difference.",
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
      title: "Software & automation for ",
      highlight: "professional services firms",
      lead: "Professional service businesses run on communication, trust and delivery.",
      lead2:
        "But behind the scenes, many firms are slowed down by manual admin, disconnected tools, repetitive client follow-ups, scattered documents and internal processes that rely too heavily on people remembering every step. 23Labs helps professional services businesses build smarter systems that reduce manual work, improve client experience and give teams more time to focus on valuable work.",
    },
    help: {
      title: "Software Solutions for ",
      highlight: "Professional Services",
      body:
        "We work with service-based businesses that want to create better internal workflows, automate repetitive tasks and improve how clients move through the business. This includes consultants, agencies, accountants, legal firms, advisory businesses, finance professionals and other client-service teams.",
      items: [
        "Client onboarding automation",
        "Proposal and quote workflows",
        "CRM automation",
        "Client portal development",
        "Internal task management systems",
        "Document collection workflows",
        "Appointment and meeting automation",
        "Reporting dashboards",
        "AI agents for admin and client support",
        "Email and follow-up automation",
        "Integration between business tools",
        "Custom internal software",
      ],
    },
    challenges: [
      {
        icon: "user",
        title: "Client Onboarding Is Too Manual",
        body:
          "New clients often require emails, forms, documents, reminders, calendar invites and internal task creation. We automate the onboarding flow so your team can deliver a smoother experience from day one.",
      },
      {
        icon: "bell",
        title: "Follow-Ups Depend on Memory",
        body:
          "When follow-ups rely on staff manually checking inboxes or spreadsheets, opportunities get missed. We create automated follow-up systems that keep prospects and clients moving.",
      },
      {
        icon: "integration",
        title: "Systems Do Not Talk to Each Other",
        body:
          "Many firms use a CRM, calendar, email platform, project tool, accounting software and document storage. We help connect these tools so information does not need to be copied manually.",
      },
      {
        icon: "chart",
        title: "Reporting Takes Too Long",
        body:
          "If your team spends hours preparing reports from different systems, we can build dashboards that make key information easier to access and understand.",
      },
    ],
    builds: [
      {
        icon: "automation",
        title: "Client Workflow Automation",
        body: "Automate onboarding, document requests, reminders, task creation, meeting follow-ups and status updates.",
      },
      {
        icon: "portal",
        title: "Custom Client Portals",
        body: "Give clients a simple place to submit information, upload documents, track progress and communicate with your team.",
      },
      {
        icon: "integration",
        title: "CRM & Tool Integrations",
        body: "Connect your CRM, email, calendar, accounting software, forms and project management tools.",
      },
      {
        icon: "ai",
        title: "AI Admin Agents",
        body:
          "Create AI agents that help answer common questions, capture enquiries, qualify leads, prepare summaries and support internal admin.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Understand Your Client Journey",
        body: "We map how prospects and clients move from enquiry to onboarding, delivery and ongoing support.",
      },
      {
        number: "02",
        title: "Find the Admin Gaps",
        body: "We identify the manual tasks, delays and disconnected systems that slow your team down.",
      },
      {
        number: "03",
        title: "Build the Workflow",
        body: "We create software, automations or integrations that improve how work moves through the business.",
      },
      {
        number: "04",
        title: "Optimise for Growth",
        body: "As your team grows, we help improve the system so it keeps supporting better delivery and client experience.",
      },
    ],
    why: {
      title: "Why 23Labs for ",
      highlight: "Professional Services?",
      paragraphs: [
        "Because professional services firms do not need flashy tech. They need systems that protect time, improve consistency and make client delivery easier.",
        "23Labs helps your team reduce admin, improve client communication and create cleaner internal processes.",
      ],
    },
    cta: {
      title: "Book a professional services automation consultation",
      body:
        "Want to reduce admin and improve how clients move through your business? Speak with 23Labs and we'll help you identify the best workflow opportunities.",
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
      title: "Software & automation for ",
      highlight: "trades & field service businesses",
      lead:
        "Trades and field service businesses rely on fast response times, organised scheduling and smooth communication between the office, customers and technicians.",
      lead2:
        "But when enquiries, quotes, bookings, job updates, invoices and follow-ups are handled manually, things can quickly become messy. 23Labs helps trades and field service businesses build smarter workflows that reduce admin, improve lead response times and make it easier to manage jobs from first enquiry through to completion.",
    },
    help: {
      title: "Software Solutions for ",
      highlight: "Trades & Field Services",
      body:
        "We work with service-based businesses that want to spend less time chasing admin and more time winning and completing jobs. This includes electricians, plumbers, HVAC businesses, cleaners, landscapers, maintenance companies, installers and other mobile service teams.",
      items: [
        "Lead enquiry automation",
        "Quote request workflows",
        "Booking and scheduling automation",
        "Customer follow-up systems",
        "Job status dashboards",
        "Technician task routing",
        "Maintenance request workflows",
        "SMS and email reminders",
        "CRM and job management integrations",
        "Invoice and payment follow-ups",
        "Internal admin automation",
        "AI agents for customer enquiries and support",
      ],
    },
    challenges: [
      {
        icon: "message",
        title: "Leads Are Not Followed Up Fast Enough",
        body:
          "When a customer submits an enquiry, speed matters. If your team takes too long to respond, that lead may already be speaking to someone else. We help automate lead capture, instant replies, qualification and follow-ups so new enquiries do not sit unanswered.",
      },
      {
        icon: "document",
        title: "Quotes Take Too Long to Send",
        body:
          "Many trades businesses lose time preparing, chasing and updating quotes manually. We can help create quote workflows that make the process faster, more consistent and easier to track.",
      },
      {
        icon: "calendar",
        title: "Scheduling Becomes Messy",
        body:
          "Between new bookings, reschedules, urgent jobs and technician availability, scheduling can become difficult to manage manually. We help build workflows that improve visibility and keep everyone aligned.",
      },
      {
        icon: "refresh",
        title: "Admin Takes Time Away From Billable Work",
        body:
          "Every hour spent copying data, chasing customers or updating spreadsheets is time that could be spent on higher-value work. We automate repetitive tasks so your team can focus on getting jobs completed.",
      },
    ],
    builds: [
      {
        icon: "automation",
        title: "Lead Response Automation",
        body:
          "Capture new enquiries from your website, phone, forms, emails or ads and trigger instant responses, follow-ups and task creation.",
      },
      {
        icon: "dashboard",
        title: "Job Management Workflows",
        body: "Create smoother systems for booking jobs, assigning tasks, tracking progress and keeping the office updated.",
      },
      {
        icon: "message",
        title: "Customer Communication Automation",
        body: "Automate booking confirmations, reminders, quote follow-ups, job updates, review requests and payment reminders.",
      },
      {
        icon: "integration",
        title: "CRM & System Integrations",
        body: "Connect your CRM, job management software, accounting system, calendar, email, website forms and internal tools.",
      },
      {
        icon: "ai",
        title: "AI Admin Agents",
        body:
          "Build AI agents that can answer common questions, capture job details, qualify enquiries and send information to the right team member.",
        span2: true,
      },
    ],
    process: [
      {
        number: "01",
        title: "Understand How Jobs Move Through Your Business",
        body:
          "We review your enquiry process, booking flow, quoting system, job management tools and customer communication.",
      },
      {
        number: "02",
        title: "Find the Admin Bottlenecks",
        body:
          "We identify where leads are delayed, where your team repeats work and where jobs or follow-ups fall through the cracks.",
      },
      {
        number: "03",
        title: "Build the Right Workflow",
        body: "We create practical automation, integrations or custom software that makes your operations easier to manage.",
      },
      {
        number: "04",
        title: "Improve as You Grow",
        body: "Once live, we refine the system based on job volume, customer behaviour and team feedback.",
      },
    ],
    why: {
      title: "Why 23Labs for ",
      highlight: "Trades & Field Services?",
      paragraphs: [
        "Because trades and field service businesses need systems that are simple, reliable and built around real work.",
        "23Labs helps your team respond faster, reduce admin, manage jobs more clearly and create a better customer experience from first enquiry to final invoice.",
      ],
    },
    cta: {
      title: "Book a trades & field services automation consultation",
      body:
        "Want to respond faster to leads, reduce admin and make job management easier? Speak with 23Labs and we'll help you identify where better systems can save your team time.",
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
      title: "Real estate software & automation for ",
      highlight: "faster follow-up",
      lead:
        "Real estate teams deal with constant enquiries, inspections, maintenance requests, tenant communication, vendor updates and internal admin.",
      lead2:
        "The problem is not that teams are not working hard. The problem is that too much of the work is manual, repetitive and spread across too many systems. 23Labs helps real estate businesses build smarter workflows that reduce admin, improve response times and make it easier to manage enquiries, clients and properties.",
    },
    help: {
      title: "Software Solutions for ",
      highlight: "Real Estate Businesses",
      body:
        "We work with real estate agencies, property managers and property service teams that want to improve operational efficiency and reduce time spent on repetitive admin.",
      items: [
        "Enquiry response automation",
        "Inspection booking workflows",
        "Rental application follow-ups",
        "Maintenance request automation",
        "Vendor and landlord update workflows",
        "Tenant communication automation",
        "CRM integrations",
        "Property management software integrations",
        "Lead capture and qualification",
        "Internal task routing",
        "Reporting dashboards",
        "AI agents for enquiry handling and admin support",
      ],
    },
    challenges: [
      {
        icon: "message",
        title: "Enquiries Are Not Followed Up Fast Enough",
        body:
          "Real estate moves quickly. If enquiries sit in an inbox for too long, opportunities are lost. We help automate responses, qualification and next steps.",
      },
      {
        icon: "document",
        title: "Maintenance Requests Become Messy",
        body:
          "Maintenance requests can get buried across emails, calls and messages. We help create clear workflows for capturing, assigning, tracking and following up on requests.",
      },
      {
        icon: "user",
        title: "Property Managers Are Overloaded",
        body:
          "Property managers handle a high volume of repetitive communication. We help automate common updates, reminders and admin tasks so they can focus on higher-value work.",
      },
      {
        icon: "integration",
        title: "Data Is Spread Across Different Tools",
        body:
          "When information sits across CRMs, property management systems, spreadsheets, inboxes and calendars, teams waste time chasing details. We help connect systems and reduce double handling.",
      },
    ],
    builds: [
      {
        icon: "automation",
        title: "Real Estate Workflow Automation",
        body: "Automate enquiry responses, inspection reminders, maintenance updates, application follow-ups and client communication.",
      },
      {
        icon: "ai",
        title: "AI Enquiry Agents",
        body:
          "Create AI agents that answer common questions, capture buyer or tenant details, qualify enquiries and route leads to the right team member.",
      },
      {
        icon: "dashboard",
        title: "Property Management Workflows",
        body: "Build systems for maintenance requests, landlord updates, tenant communication and internal task tracking.",
      },
      {
        icon: "integration",
        title: "CRM & Software Integrations",
        body: "Connect your CRM, property management software, website forms, calendar, inbox and reporting tools.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Map the Current Workflow",
        body: "We review how enquiries, inspections, maintenance requests and client communication currently move through your business.",
      },
      {
        number: "02",
        title: "Identify Repetitive Admin",
        body: "We find where staff are repeating work, manually chasing responses or losing time across disconnected tools.",
      },
      {
        number: "03",
        title: "Build the Automation",
        body: "We create practical workflows, integrations or custom software that reduce manual handling and improve response times.",
      },
      {
        number: "04",
        title: "Improve Based on Usage",
        body: "Once live, we refine the system based on staff feedback, enquiry volume and operational needs.",
      },
    ],
    why: {
      title: "Why 23Labs for ",
      highlight: "Real Estate?",
      paragraphs: [
        "Because real estate teams need speed, consistency and visibility.",
        "23Labs helps agencies and property managers respond faster, reduce admin and keep important tasks from falling through the cracks.",
      ],
    },
    cta: {
      title: "Book a real estate automation consultation",
      body:
        "Want faster follow-up, cleaner maintenance workflows or less admin for your property team? Speak with 23Labs and we'll help you identify the best automation opportunities inside your business.",
    },
  },
  {
    slug: "allied-health",
    href: "/allied-health",
    metadataTitle: "Allied Health AI Receptionist & Automation Solutions | 23Labs",
    description:
      "23Labs helps allied health clinics reduce missed calls, automate bookings, support front desk teams and improve patient communication with AI receptionist and workflow automation solutions.",
    hero: {
      eyebrow: "Industries / Allied Health",
      title: "AI receptionist & automation for ",
      highlight: "allied health clinics",
      lead:
        "Allied health clinics are busy enough without the front desk being buried in missed calls, booking changes, patient questions, reminders and admin.",
      lead2:
        "When staff are stuck answering repetitive enquiries or chasing appointments, patient experience suffers and revenue opportunities are missed. 23Labs helps allied health clinics build smarter front desk systems through AI receptionist solutions, booking automation, patient communication workflows and software integrations.",
    },
    help: {
      title: "Software Solutions for ",
      highlight: "Allied Health Clinics",
      body:
        "We help clinics reduce admin pressure, improve response times and create a smoother experience for both patients and staff. Our solutions can be customised around your clinic's services, software, phone setup and booking process.",
      items: [
        "AI receptionist setup",
        "Missed call handling",
        "Patient enquiry automation",
        "Booking request workflows",
        "Appointment reminders",
        "Rescheduling and cancellation support",
        "New patient intake workflows",
        "Patient FAQ handling",
        "SMS and email follow-ups",
        "Practice management software integrations",
        "Call summaries and admin notes",
        "Multi-location clinic workflows",
      ],
    },
    challenges: [
      {
        icon: "phone",
        title: "Missed Calls Become Missed Bookings",
        body:
          "Patients often call when your team is busy, closed or already helping someone else. An AI receptionist can help capture enquiries, answer common questions and support booking workflows.",
      },
      {
        icon: "user",
        title: "Front Desk Teams Are Overloaded",
        body:
          "Clinic admin teams deal with repetitive questions every day. We help automate common enquiries so staff can focus on higher-value patient support.",
      },
      {
        icon: "calendar",
        title: "Booking Processes Are Too Manual",
        body:
          "Appointment requests, confirmations, reminders, reschedules and cancellations can take up hours every week. We help automate these workflows where practical.",
      },
      {
        icon: "message",
        title: "Patients Want Faster Responses",
        body:
          "Patients expect quick answers about availability, services, locations, pricing, referrals and appointment details. We help clinics respond faster without adding more admin staff.",
      },
    ],
    builds: [
      {
        icon: "ai",
        title: "AI Receptionist for Allied Health",
        body: "A custom AI receptionist designed around your clinic's services, FAQs, booking process and patient communication style.",
      },
      {
        icon: "calendar",
        title: "Booking & Reminder Automation",
        body: "Automated workflows for appointment requests, reminders, confirmations, rescheduling and follow-ups.",
      },
      {
        icon: "document",
        title: "Patient Intake Workflows",
        body: "Digital intake processes that collect the right information before appointments and reduce manual admin.",
      },
      {
        icon: "integration",
        title: "Practice Software Integrations",
        body:
          "Where possible, we connect your phone, forms, booking tools, CRM, email, SMS and practice management systems.",
      },
    ],
    note: {
      eyebrow: "Important note",
      title: "Every Clinic Is ",
      highlight: "Different",
      paragraphs: [
        "Some clinics need simple missed call capture and SMS follow-ups. Others need more advanced AI receptionist workflows that understand services, answer detailed questions, support new patient triage and integrate with existing systems.",
        "We review your setup first, then recommend what is realistically achievable based on your software, phone provider and workflow.",
      ],
    },
    process: [
      {
        number: "01",
        title: "Understand Your Clinic Setup",
        body: "We review your services, booking process, phone system, practice software and current admin workflow.",
      },
      {
        number: "02",
        title: "Identify the Front Desk Pressure Points",
        body: "We look at where calls are missed, where patients wait too long and where staff are spending time on repetitive admin.",
      },
      {
        number: "03",
        title: "Build the Right Automation",
        body: "We create an AI receptionist, booking workflow or admin automation that fits your clinic's actual requirements.",
      },
      {
        number: "04",
        title: "Test, Improve and Support",
        body: "We help test the system, refine responses and improve the workflow based on real patient interactions.",
      },
    ],
    why: {
      title: "Why 23Labs for ",
      highlight: "Allied Health?",
      paragraphs: [
        "Because allied health clinics need practical automation that supports staff and improves patient experience.",
        "23Labs helps clinics reduce missed calls, handle enquiries faster and make front desk operations easier to manage.",
      ],
    },
    cta: {
      title: "Book an allied health AI receptionist consultation",
      body:
        "Want to reduce missed calls and take pressure off your front desk team? Speak with 23Labs and we'll help you explore what an AI receptionist or clinic automation system could look like for your practice.",
    },
  },
] as const;

export type IndustryOverviewLink = (typeof industryLinks)[number];
export type IndustryPageData = (typeof industryPages)[number];

export function getIndustryPage(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}
