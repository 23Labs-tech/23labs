import type { CaseStudyMatch } from "@/lib/caseStudyMatch";

/**
 * Problem-led landing pages (/solutions/[slug]).
 * Each page targets what a buyer actually searches for ("reduce manual data
 * entry", "automate quoting") rather than our service names, then routes to
 * the service, proof and guides that answer it.
 */

export type SolutionCategory = "operations" | "governance";

export type SolutionPage = {
  slug: string;
  category: SolutionCategory;
  navLabel: string;
  metadataTitle: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    image: { src: string; alt: string };
  };
  problem: { heading: string; intro: string; items: { title: string; description: string }[] };
  impact: { heading: string; intro: string; items: { title: string; description: string }[] };
  approach: { heading: string; intro: string; steps: { title: string; body: string }[] };
  result: string;
  proof?: {
    heading: string;
    intro: string;
    studies: { match: CaseStudyMatch; label: string; summary: string }[];
  };
  guideSlugs: string[];
  serviceSlugs: string[];
  industryHrefs?: string[];
  faqs: { question: string; answer: string }[];
  cta: { title: string; body: string; label: string };
};

const coritProof = {
  match: { name: "CorIT Tech" },
  label: "CorIT Tech: client onboarding automation",
  summary:
    "CRM details now create project records and tasks automatically instead of being copied across. CorIT reported more than 10 hours of admin saved each month.",
};

const realEstateProof = {
  match: { name: "Real Estate Office | Australia" },
  label: "Australian real estate office: enquiry workflow",
  summary:
    "Website enquiries now connect to property records and notify the right person, so follow-up no longer depends on someone remembering.",
};

const huntressProof = {
  match: { name: "Huntress Recruitment" },
  label: "Huntress Recruitment: Bullhorn, SEEK and website",
  summary:
    "Vacancies maintained once in Bullhorn and published to SEEK and the website, instead of being re-entered in three places.",
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "reduce-manual-data-entry",
    category: "operations",
    navLabel: "Reduce manual data entry",
    metadataTitle: "Reduce Manual Data Entry with Automation | 23Labs",
    description:
      "Stop re-keying the same information into multiple systems. 23Labs automates data entry for Australian and NZ businesses so details are captured once and reused everywhere.",
    hero: {
      eyebrow: "Solutions / Data entry",
      title: "Reduce manual data entry",
      lead:
        "Capture information once and let it flow to every system that needs it. Fewer mistakes, less copy and paste, and your team back on the work that needs a person.",
      image: { src: "/site-images/photos/workers-system-monitors.png", alt: "Two people reviewing system data across multiple monitors" },
    },
    problem: {
      heading: "Your team is the integration",
      intro:
        "Information arrives by email, form, PDF and spreadsheet, and someone types it into the CRM, the job system and accounting. The same customer gets entered two or three times.",
      items: [
        { title: "The same details typed twice", description: "Customer, job and invoice details are retyped into each system because nothing passes them across." },
        { title: "Copying from documents and emails", description: "Figures and details are transcribed by hand from attachments, so small errors creep in." },
        { title: "Spreadsheets holding it together", description: "A shared workbook bridges tools that should talk to each other, and it breaks when someone edits it wrong." },
      ],
    },
    impact: {
      heading: "What it costs beyond the hours",
      intro: "The time is the obvious cost. The less obvious costs are usually bigger.",
      items: [
        { title: "Errors that are slow to find", description: "A keying mistake takes seconds to make and hours to trace when an invoice or report is wrong." },
        { title: "Numbers nobody fully trusts", description: "When two systems disagree, leaders fall back on gut feel instead of the data." },
        { title: "Growth means hiring for admin", description: "The only way to handle more volume is more people doing the same retyping." },
      ],
    },
    approach: {
      heading: "Capture once, reuse everywhere",
      intro: "We start with one process, prove the time saved, then extend the same pattern.",
      steps: [
        { title: "Find the re-keying", body: "We trace where the same information is entered more than once and which systems it moves between." },
        { title: "Pick the source of truth", body: "We agree which system owns each record, so the automation knows where data starts and where it should go." },
        { title: "Automate the handoff", body: "We connect the systems or build the automation, with validation so bad data is caught instead of copied." },
        { title: "Route the exceptions", body: "Anything unclear goes to a person to check, rather than being quietly guessed." },
      ],
    },
    result: "Information is entered once, mistakes drop, and the team stops being the glue between systems.",
    proof: { heading: "Where we have done this", intro: "Published projects that removed double entry between systems.", studies: [coritProof, huntressProof] },
    guideSlugs: ["identify-manual-processes-costing-money", "disconnected-business-tools", "business-software-does-not-integrate"],
    serviceSlugs: ["system-integrations", "business-process-automation"],
    faqs: [
      { question: "What does reducing manual data entry involve?", answer: "Connecting the systems that hold the same information, or automating the step where someone copies it, so each detail is entered once and reused wherever it is needed." },
      { question: "Is automated data entry accurate?", answer: "Done well, it is more accurate than retyping, because the data is captured once and validated. We build in checks and send anything uncertain to a person." },
      { question: "Do we need to replace our software?", answer: "Usually not. Most of this work connects or automates around the systems you already use. We only suggest replacing a tool when it cannot hold the workflow." },
      { question: "What if our systems do not have an API?", answer: "There are often still reliable ways to move data, such as scheduled imports, exports or middleware. We confirm what is possible before promising anything." },
      { question: "Where should we start?", answer: "With the task done most often, not the one that annoys people most. Frequency is where the time goes, so that is where the saving is easiest to see." },
      { question: "How do we know it is saving time?", answer: "Measure minutes per item and items per week before the change, then again after. We agree that measure with you at the start." },
    ],
    cta: { title: "Tell us what gets typed twice", body: "Name the systems and the details being retyped. We will tell you whether a connection or an automation is the simpler fix.", label: "Talk to us about your data entry" },
  },
  {
    slug: "automate-quoting",
    category: "operations",
    navLabel: "Automate quotes and proposals",
    metadataTitle: "Automate Quotes and Proposals for Your Business | 23Labs",
    description:
      "Faster, consistent quotes without the copy and paste. 23Labs automates quoting, pricing lookups, approvals and follow-ups for service businesses in Australia and NZ.",
    hero: {
      eyebrow: "Solutions / Quoting",
      title: "Automate quotes and proposals",
      lead:
        "Turn a request into an accurate, consistent quote faster, with pricing pulled from one place, approvals routed automatically and follow-ups that do not rely on memory.",
      image: { src: "/site-images/photos/notes-planning-desk.png", alt: "A person planning workflow notes at a desk" },
    },
    problem: {
      heading: "Quotes built by hand every time",
      intro: "Most quoting delays come from rebuilding the same document, checking prices in several places and chasing approval.",
      items: [
        { title: "Copied from the last quote", description: "Each quote starts from an old one, so outdated prices and wrong details slip through." },
        { title: "Pricing lives in several places", description: "Rates sit in a spreadsheet, a supplier list and someone's head, so every quote needs checking." },
        { title: "No follow-up once it is sent", description: "Quotes go out and nobody chases them until the customer has already gone elsewhere." },
      ],
    },
    impact: {
      heading: "Slow quotes lose work",
      intro: "The business that responds first with a clear price often wins.",
      items: [
        { title: "Jobs lost to faster competitors", description: "A quote that takes days gives the customer time to accept someone else's." },
        { title: "Margin leaks from errors", description: "An old rate or a missed line item comes straight off the profit on the job." },
        { title: "Senior time spent on admin", description: "The people who know the pricing spend hours formatting documents instead of selling." },
      ],
    },
    approach: {
      heading: "A quote process that runs itself",
      intro: "We automate the repetitive parts and keep a person on the pricing decisions that need judgement.",
      steps: [
        { title: "Map how a quote is built", body: "We follow a real request from enquiry to sent quote and note every lookup, calculation and approval." },
        { title: "Centralise pricing", body: "Rates and rules move into one source, so every quote uses current numbers." },
        { title: "Generate and route", body: "The quote document is produced automatically, and anything over a threshold goes for approval." },
        { title: "Follow up automatically", body: "Reminders and status updates go out on schedule, and accepted quotes create the job." },
      ],
    },
    result: "Quotes go out faster, prices stay consistent, and fewer opportunities go cold waiting for a follow-up.",
    guideSlugs: ["automate-manual-quoting-process", "construction-job-costing-automation", "how-ai-helps-trades-businesses-win-more-jobs"],
    serviceSlugs: ["business-process-automation", "custom-software-development"],
    industryHrefs: ["/trades-field-services", "/construction", "/freight-logistics"],
    faqs: [
      { question: "Can quoting be fully automated?", answer: "The repetitive parts can: pulling rates, calculating totals, producing the document, routing approval and following up. Pricing decisions that need judgement stay with a person." },
      { question: "Will it work with our CRM or job management software?", answer: "Usually. We generate quotes from, and send accepted quotes back into, the systems you already use where they allow it." },
      { question: "What about complex or custom quotes?", answer: "We automate the standard parts and leave room for manual adjustments, so a custom job still gets a person's review." },
      { question: "Can accepted quotes become jobs automatically?", answer: "Yes. Acceptance can create the job, notify the team and update the customer record, so nothing is retyped." },
      { question: "How long does it take to set up?", answer: "A focused quoting workflow is often weeks, not months. We scope it after mapping how your quotes are built today." },
    ],
    cta: { title: "Show us how a quote gets built today", body: "Walk us through one recent quote. We will show you which steps can be automated first.", label: "Talk to us about quoting" },
  },
  {
    slug: "lead-response-automation",
    category: "operations",
    navLabel: "Respond to leads faster",
    metadataTitle: "Lead Response Automation: Reply to Enquiries Faster | 23Labs",
    description:
      "Respond to every enquiry in minutes, not hours. 23Labs automates lead capture, instant replies, routing and follow-up for Australian and NZ service businesses.",
    hero: {
      eyebrow: "Solutions / Lead response",
      title: "Respond to every lead faster",
      lead:
        "Every enquiry gets an instant, useful reply, lands in the right record and reaches the right person, so you stop losing work to whoever answered first.",
      image: { src: "/site-images/photos/team-dashboard-presentation.png", alt: "A team reviewing a performance dashboard during a meeting" },
    },
    problem: {
      heading: "Enquiries waiting in an inbox",
      intro: "Leads arrive by web form, email, phone and portal, and each one waits until someone has time to deal with it.",
      items: [
        { title: "Slow first response", description: "An enquiry sits for hours because the team is on site, in meetings or with other customers." },
        { title: "Leads in too many places", description: "Website forms, emails and portal enquiries land in different inboxes and some are missed." },
        { title: "Follow-up depends on memory", description: "If nobody remembers to chase, a warm lead quietly goes cold." },
      ],
    },
    impact: {
      heading: "Speed decides who wins the work",
      intro: "Customers often contact several businesses and go with the first useful reply.",
      items: [
        { title: "Paid leads wasted", description: "Marketing spend brings in enquiries that are never properly followed up." },
        { title: "No view of the pipeline", description: "Without one record of every lead, it is hard to see what is working." },
        { title: "Inconsistent replies", description: "Different people answer the same question in different ways." },
      ],
    },
    approach: {
      heading: "From enquiry to the right person, automatically",
      intro: "We connect every enquiry source to one workflow and keep people on the conversations that need them.",
      steps: [
        { title: "Bring enquiries together", body: "Forms, emails and portal leads feed into one place, usually the CRM you already use." },
        { title: "Reply instantly", body: "Each enquiry gets an immediate, relevant response with next steps or a booking link." },
        { title: "Route to the right person", body: "Leads are assigned by type, location or service, with a notification so nothing waits." },
        { title: "Follow up on schedule", body: "Reminders and follow-ups run until the lead replies, books or is closed." },
      ],
    },
    result: "Every lead gets a fast first response, lands in one record and has a clear owner.",
    proof: { heading: "Where we have done this", intro: "A published project connecting enquiries to records and the right person.", studies: [realEstateProof] },
    guideSlugs: ["lead-response-automation-increase-conversions", "real-estate-enquiry-automation", "outlook-gmail-crm-integration"],
    serviceSlugs: ["business-process-automation", "ai-agents"],
    industryHrefs: ["/real-estate", "/trades-field-services", "/allied-health"],
    faqs: [
      { question: "What is lead response automation?", answer: "Automatically capturing each enquiry, replying straight away, recording it in your CRM and alerting the right person, so no lead waits for someone to notice it." },
      { question: "Will automated replies feel robotic?", answer: "They do not have to. Replies are written in your voice, tailored to the type of enquiry, and hand over to a person for the real conversation." },
      { question: "Can an AI agent qualify leads?", answer: "For routine questions, yes. An AI agent can answer common questions and capture details, then pass qualified leads to your team. We set clear limits on what it can say." },
      { question: "Which enquiry sources can you connect?", answer: "Website forms, email inboxes and many portals and booking tools, where they provide a way to send data. We confirm each source during scoping." },
      { question: "Do we need a new CRM?", answer: "No. We usually work with the CRM you have. If you do not have one, we can recommend a simple option." },
    ],
    cta: { title: "Find out where your leads are waiting", body: "Tell us where enquiries come in today. We will map the fastest path from enquiry to reply.", label: "Talk to us about lead response" },
  },
  {
    slug: "client-onboarding-automation",
    category: "operations",
    navLabel: "Automate client onboarding",
    metadataTitle: "Client Onboarding Automation for Service Businesses | 23Labs",
    description:
      "Onboard new clients without the copy and paste. 23Labs automates onboarding forms, records, project setup and welcome steps for businesses in Australia and NZ.",
    hero: {
      eyebrow: "Solutions / Onboarding",
      title: "Automate client onboarding",
      lead:
        "When a deal is won, the client record, project, tasks and welcome steps set themselves up, so delivery starts on time and nothing is retyped.",
      image: { src: "/site-images/photos/team-standup-tablet.png", alt: "A team member presenting project updates to colleagues" },
    },
    problem: {
      heading: "Every new client means another round of admin",
      intro: "Winning the work should start delivery. Instead it often starts a checklist of manual setup.",
      items: [
        { title: "Details copied between tools", description: "Client details move from the CRM into project management, accounting and shared folders by hand." },
        { title: "Steps missed or done late", description: "Welcome emails, forms and kickoff tasks depend on someone working through a checklist." },
        { title: "Documents chased by email", description: "Forms, contracts and information requests go back and forth before work can start." },
      ],
    },
    impact: {
      heading: "A slow start sets the tone",
      intro: "Onboarding is the client's first experience of how you deliver.",
      items: [
        { title: "Delayed starts", description: "Projects wait while records, folders and tasks are set up." },
        { title: "Inconsistent experience", description: "Each client gets a slightly different process depending on who handles it." },
        { title: "Admin grows with every sale", description: "More clients means more setup work for the same team." },
      ],
    },
    approach: {
      heading: "Onboarding that starts when the deal closes",
      intro: "We automate the handoff from sales to delivery around the tools you already use.",
      steps: [
        { title: "Map the handoff", body: "We list every step from won deal to first delivery task and where each detail lives." },
        { title: "Connect sales to delivery", body: "The CRM record creates the project, tasks and folders automatically." },
        { title: "Automate client steps", body: "Welcome messages, forms and document requests go out and are tracked without chasing." },
        { title: "Keep a person in control", body: "Exceptions and approvals stay with the right team member, with clear visibility of progress." },
      ],
    },
    result: "New clients are set up the same way every time, and delivery starts without a round of manual admin.",
    proof: { heading: "Where we have done this", intro: "A published onboarding project with a reported time saving.", studies: [coritProof] },
    guideSlugs: ["professional-services-admin-bottleneck", "business-process-automation-examples", "zapier-vs-custom-integration"],
    serviceSlugs: ["business-process-automation", "system-integrations"],
    industryHrefs: ["/professional-services", "/recruitment"],
    faqs: [
      { question: "What parts of onboarding can be automated?", answer: "Creating records and projects, setting up tasks and folders, sending welcome messages and forms, collecting documents and notifying the team. Judgement calls stay with people." },
      { question: "Can you connect our CRM to our project management tool?", answer: "Usually, yes. Our published CorIT Tech project did exactly that, so customer details create project records and tasks without being retyped." },
      { question: "Will clients notice the change?", answer: "They should notice a faster, more consistent start. The automation runs behind the scenes in the tools you already use." },
      { question: "What if every client is slightly different?", answer: "We automate the common steps and leave room for variations, with a person reviewing anything unusual." },
      { question: "How much time does it save?", answer: "It depends on volume and how many tools are involved. CorIT reported more than 10 hours of admin saved per month on its onboarding workflow." },
    ],
    cta: { title: "Show us what happens after a deal is won", body: "Walk us through your current onboarding steps. We will show you which ones can run on their own.", label: "Talk to us about onboarding" },
  },
  {
    slug: "replace-spreadsheets",
    category: "operations",
    navLabel: "Replace spreadsheet processes",
    metadataTitle: "Replace Spreadsheet Processes with Proper Systems | 23Labs",
    description:
      "Outgrown the spreadsheet? 23Labs replaces fragile spreadsheet processes with connected systems, internal tools and dashboards for growing businesses in Australia and NZ.",
    hero: {
      eyebrow: "Solutions / Spreadsheets",
      title: "Replace spreadsheet processes",
      lead:
        "When a workbook is running a core part of the business, it is time for a system that is reliable, shared and does not break when someone edits the wrong cell.",
      image: { src: "/site-images/photos/dashboard-laptop-review.png", alt: "A person reviewing a software dashboard on a laptop" },
    },
    problem: {
      heading: "The real system is a spreadsheet",
      intro: "Spreadsheets are a great start. They become a risk when the business depends on them.",
      items: [
        { title: "One file runs the operation", description: "Jobs, clients or schedules live in a workbook someone has to protect." },
        { title: "Versions and conflicts", description: "Copies multiply, and nobody is sure which file is current." },
        { title: "Manual reporting", description: "Reports are rebuilt by hand every week from the same sheets." },
      ],
    },
    impact: {
      heading: "Fragile at exactly the wrong time",
      intro: "Spreadsheet risk grows quietly with the business.",
      items: [
        { title: "One broken formula", description: "A single bad edit can corrupt the numbers everyone relies on." },
        { title: "Knowledge locked in one person", description: "Only the person who built it understands how it works." },
        { title: "No access control or history", description: "It is hard to limit who changes what, or to see what changed." },
      ],
    },
    approach: {
      heading: "From workbook to working system",
      intro: "We decide whether connecting existing tools, automating or building a small application is the right fix.",
      steps: [
        { title: "Understand what the sheet does", body: "We trace the formulas, inputs and people that depend on the spreadsheet." },
        { title: "Choose the smallest fix", body: "Sometimes an existing tool can hold it. Sometimes a focused internal app is the better path." },
        { title: "Build and migrate", body: "We build the replacement and move the data across, checking it against the original." },
        { title: "Report automatically", body: "Dashboards and reports come from the live system, not a weekly rebuild." },
      ],
    },
    result: "One reliable system instead of a fragile file, with reporting that updates itself.",
    guideSlugs: ["replace-spreadsheet-business-processes", "custom-software-vs-off-the-shelf", "buy-vs-build-custom-software"],
    serviceSlugs: ["custom-software-development", "business-process-automation"],
    faqs: [
      { question: "When should we replace a spreadsheet?", answer: "When it runs a core process, more than a few people edit it, errors are costly, or someone spends hours each week maintaining it or building reports from it." },
      { question: "Do we always need custom software?", answer: "No. Often an existing product or a simple automation can replace the spreadsheet. We recommend custom software only when the process genuinely needs it." },
      { question: "Can we keep using Excel for some things?", answer: "Yes. Spreadsheets are still useful for analysis. The goal is to stop them running core operations." },
      { question: "How do you move our data across?", answer: "We clean and migrate the existing data, then check results against the original sheet before switching over." },
      { question: "What does it cost?", answer: "Custom software and automation projects typically start from A$2,500. The final price depends on what the spreadsheet does and how many systems are involved." },
    ],
    cta: { title: "Send us the spreadsheet your business depends on", body: "Tell us what it does and who uses it. We will tell you the simplest way to replace it.", label: "Talk to us about your spreadsheet" },
  },
  {
    slug: "connect-crm-and-accounting",
    category: "operations",
    navLabel: "Connect CRM and accounting",
    metadataTitle: "Connect Your CRM and Accounting Software | 23Labs",
    description:
      "Stop retyping customers and invoices between your CRM and accounting system. 23Labs builds CRM to accounting integrations, including Xero, for Australian and NZ businesses.",
    hero: {
      eyebrow: "Solutions / CRM and accounting",
      title: "Connect your CRM and accounting",
      lead:
        "Customers, jobs and invoices move between sales and finance automatically, so both teams work from the same numbers.",
      image: { src: "/site-images/photos/connected-tools-overlay.png", alt: "Business tools connected through an automation hub" },
    },
    problem: {
      heading: "Sales and finance keep separate copies",
      intro: "When the CRM and accounting system do not share data, someone becomes the bridge.",
      items: [
        { title: "Invoices created by hand", description: "Won deals and completed jobs are retyped into accounting to be invoiced." },
        { title: "Customer details out of sync", description: "An updated address or contact in one system never reaches the other." },
        { title: "Payment status is invisible", description: "Sales cannot see what has been paid without asking finance." },
      ],
    },
    impact: {
      heading: "Small gaps, real money",
      intro: "Disconnected sales and finance systems create delays and errors that cost cash flow.",
      items: [
        { title: "Late invoicing", description: "Work is finished but not billed until someone has time to enter it." },
        { title: "Billing errors", description: "Retyped amounts and details lead to corrections and awkward conversations." },
        { title: "Month-end reconciliation", description: "Hours go into matching records that should already agree." },
      ],
    },
    approach: {
      heading: "One record, two systems",
      intro: "We connect the systems so each record is owned in one place and shared with the other.",
      steps: [
        { title: "Decide the source of truth", body: "We agree which system owns customers, products and invoices." },
        { title: "Check the connection", body: "We confirm what each system's API or native integration allows." },
        { title: "Build and test the sync", body: "We connect the records and test with real data, including the awkward cases." },
        { title: "Monitor for failures", body: "We set up alerts so a failed sync is noticed and fixed, not discovered at month end." },
      ],
    },
    result: "Sales and finance work from the same customers and invoices, without retyping.",
    guideSlugs: ["crm-xero-integration", "zapier-vs-custom-integration", "business-software-does-not-integrate"],
    serviceSlugs: ["system-integrations", "business-process-automation"],
    faqs: [
      { question: "Can you connect our CRM to Xero?", answer: "Xero has a well-documented API, so it is usually possible. We confirm what your CRM supports and design the sync around which system owns each record." },
      { question: "Is a native integration enough?", answer: "Sometimes. If the built-in integration covers your fields and workflow, use it. We build custom connections when it falls short." },
      { question: "Should we use Zapier or a custom integration?", answer: "Zapier suits simple, low-volume connections. Custom integrations suit higher volume, complex rules or anything that must be reliable and monitored. Our guide compares the two." },
      { question: "What happens if the sync fails?", answer: "We build in error handling and alerts, so a failed record is flagged to a person rather than silently lost." },
      { question: "Can this work for New Zealand businesses?", answer: "Yes. We work remotely with businesses across Australia and New Zealand." },
    ],
    cta: { title: "Tell us which systems need to talk", body: "Name your CRM and accounting system. We will tell you what a reliable connection looks like.", label: "Talk to us about integration" },
  },
  {
    slug: "ai-document-processing",
    category: "operations",
    navLabel: "AI document processing",
    metadataTitle: "AI Document Processing for Invoices, Forms and PDFs | 23Labs",
    description:
      "Use AI to read invoices, forms, PDFs and emails and turn them into structured data, with human review where it matters. Built by 23Labs for Australian and NZ businesses.",
    hero: {
      eyebrow: "Solutions / Documents",
      title: "AI document processing",
      lead:
        "AI reads the invoices, forms, PDFs and emails your team processes by hand, extracts the details and sends them to the right system, with a person checking anything uncertain.",
      image: { src: "/site-images/photos/ai-analytics-overlay.png", alt: "AI analytics interface over business data" },
    },
    problem: {
      heading: "Documents read and retyped by hand",
      intro: "Many processes still start with someone opening a document and typing what it says.",
      items: [
        { title: "Invoices and purchase orders", description: "Supplier documents arrive in every format and are keyed in line by line." },
        { title: "Forms and applications", description: "Details are copied from PDFs and scanned forms into internal systems." },
        { title: "Emails with attachments", description: "Requests arrive as attachments that someone has to open, read and file." },
      ],
    },
    impact: {
      heading: "Volume turns into backlog",
      intro: "Document processing scales badly when it relies on people reading every page.",
      items: [
        { title: "Backlogs at busy times", description: "Peak periods create piles of documents waiting to be processed." },
        { title: "Transcription errors", description: "Small mistakes in amounts or references cause problems downstream." },
        { title: "Skilled staff on low-value work", description: "Capable people spend hours reading and retyping." },
      ],
    },
    approach: {
      heading: "AI where it helps, people where it matters",
      intro: "We use AI only for the reading and classifying that rules cannot do, and keep a person on the decisions.",
      steps: [
        { title: "Collect sample documents", body: "We gather real examples, including the messy ones, to test against." },
        { title: "Extract and validate", body: "AI extracts the fields, and validation rules check them against what is expected." },
        { title: "Set confidence thresholds", body: "Low-confidence results go to a person to review before anything is saved." },
        { title: "Send to your systems", body: "Approved data flows into your accounting, CRM or job system automatically." },
      ],
    },
    result: "Documents are processed in minutes with fewer errors, and people only review the uncertain ones.",
    guideSlugs: ["ai-document-processing", "ai-agents-vs-workflow-automation", "signs-your-business-is-ready-for-ai-automation"],
    serviceSlugs: ["ai-workflow-automation", "business-process-automation"],
    faqs: [
      { question: "How accurate is AI document processing?", answer: "It depends on document quality and consistency. We test with your real documents, add validation rules and route low-confidence results to a person, so accuracy is measured rather than assumed." },
      { question: "What documents can it handle?", answer: "Invoices, purchase orders, forms, applications, delivery documents and email attachments are common. We confirm suitability with samples first." },
      { question: "Is our data used to train AI models?", answer: "We choose AI services and settings where business data is not used for model training, and confirm this during scoping." },
      { question: "Do we still need people involved?", answer: "Yes, for review of uncertain results and any decision that needs judgement. The aim is to remove the retyping, not the oversight." },
      { question: "What about privacy obligations?", answer: "Documents often contain personal information. We design the workflow to limit what is stored and where, and to support your privacy obligations." },
    ],
    cta: { title: "Send us a few sample documents", body: "Share the documents your team processes most. We will show you what AI can reliably extract.", label: "Talk to us about documents" },
  },
  {
    slug: "ai-governance",
    category: "governance",
    navLabel: "AI safety and governance",
    metadataTitle: "AI Safety and Governance for Small Business | 23Labs",
    description:
      "Use AI and automation safely. 23Labs builds AI agents and automations with clear limits, least-privilege access, audit logs and human approval, for businesses in Australia and NZ.",
    hero: {
      eyebrow: "Solutions / AI governance",
      title: "AI safety and governance",
      lead:
        "AI is only useful if you can trust it. We help businesses use AI agents and automation with clear rules, limited access, a record of what ran and a person in charge of the decisions that matter.",
      image: { src: "/site-images/photos/ai-network-diagram.png", alt: "An AI system connected to business documents and reporting" },
    },
    problem: {
      heading: "AI use is growing faster than the rules",
      intro: "Staff are already using AI tools, and new agents can act inside business systems. Few small businesses have decided what is allowed.",
      items: [
        { title: "No agreed rules", description: "People use different AI tools with company and customer data, with no policy on what is acceptable." },
        { title: "Too much access", description: "Automations and agents get broad permissions because it was quicker to set up that way." },
        { title: "No record of what happened", description: "When an automated step goes wrong, there is no log to show what ran and why." },
      ],
    },
    impact: {
      heading: "The risks are practical, not theoretical",
      intro: "Most AI problems in small businesses come from setup, not the technology itself.",
      items: [
        { title: "Data exposed or shared", description: "Customer or commercial information ends up in tools it should not reach." },
        { title: "Actions without oversight", description: "An agent sends a message or changes a record that a person should have approved." },
        { title: "Privacy obligations missed", description: "Australian privacy rules, including new requirements for automated decisions, apply whether or not anyone noticed." },
      ],
    },
    approach: {
      heading: "Safe by design",
      intro: "Every AI agent and automation we build follows the same controls.",
      steps: [
        { title: "Define the job and the limits", body: "Each agent or automation has a specific task, a named owner and a clear list of what it may and may not do." },
        { title: "Least-privilege access", body: "It gets access only to the systems and data that task needs, with credentials stored securely, never in code." },
        { title: "Human approval for higher-risk steps", body: "Sending to customers, changing financial records or acting on personal information requires a person to approve." },
        { title: "Logging and an off switch", body: "Every run is recorded, failures raise alerts, and any automation can be paused or removed quickly." },
      ],
    },
    result: "AI that saves time without creating new risk, with clear ownership, limited access and a record of every action.",
    guideSlugs: ["automated-decision-making-privacy-act", "ai-agents-vs-workflow-automation", "automation-maintenance"],
    serviceSlugs: ["ai-agents", "ai-workflow-automation", "ongoing-support"],
    faqs: [
      { question: "What is AI governance for a small business?", answer: "A practical set of rules for how AI is used: which tools are allowed, what data they can access, who owns each automation, what needs human approval and how activity is recorded." },
      { question: "Do we need a formal AI policy?", answer: "A short, plain-English AI use policy is worth having once staff use AI with business or customer data. It does not need to be long to be useful." },
      { question: "How do you keep AI agents under control?", answer: "Each agent has a defined job, limited access, human approval for higher-risk actions, logging of every run and a way to pause it. Those controls are part of every build." },
      { question: "Is our data used to train AI models?", answer: "We choose AI services and settings where business data is not used for model training, and we confirm this for each tool during scoping." },
      { question: "Does the Privacy Act apply to our automations?", answer: "It can. From 10 December 2026, organisations covered by the Australian Privacy Principles must explain certain automated decisions in their privacy policy. Our guide explains the change. This is general information, not legal advice." },
      { question: "Can you review automations we already have?", answer: "Yes. We can review existing automations and AI tools for access, logging and ownership, and recommend changes." },
    ],
    cta: { title: "Use AI with the right controls in place", body: "Tell us how your team uses AI today. We will show you the simplest controls that make it safe to keep going.", label: "Talk to us about AI governance" },
  },
  {
    slug: "automated-decisions-privacy",
    category: "governance",
    navLabel: "Automated decisions and privacy",
    metadataTitle: "Automated Decision-Making and the Privacy Act (APP 1.7) | 23Labs",
    description:
      "From 10 December 2026, APP entities must explain certain automated decisions in their privacy policy. 23Labs helps businesses map where automation and AI make decisions about people.",
    hero: {
      eyebrow: "Solutions / Privacy",
      title: "Automated decisions and the Privacy Act",
      lead:
        "From 10 December 2026, organisations covered by the Australian Privacy Principles must explain certain automated decisions in their privacy policy. The first step is knowing where your systems make them.",
      image: { src: "/site-images/photos/office-analytics-overlay.png", alt: "Hands reviewing printed charts and a tablet showing analytics" },
    },
    problem: {
      heading: "Most businesses do not know where decisions are automated",
      intro: "Automated decisions are often buried inside tools, rules and integrations nobody has documented.",
      items: [
        { title: "Rules inside software", description: "Scoring, approvals, eligibility checks and routing rules sit inside CRMs and platforms." },
        { title: "AI added quietly", description: "New AI features in existing tools may be making or influencing decisions about people." },
        { title: "No documentation", description: "Automations were built over time with no single record of what they do." },
      ],
    },
    impact: {
      heading: "Why it matters now",
      intro: "The change makes transparency about automated decisions a privacy policy requirement for covered organisations.",
      items: [
        { title: "Privacy policy updates", description: "Covered organisations need to describe certain automated decisions that use personal information." },
        { title: "Customer trust", description: "People increasingly want to know when software, not a person, made a decision about them." },
        { title: "Better automation anyway", description: "Documenting automated decisions makes systems easier to maintain and fix." },
      ],
    },
    approach: {
      heading: "Map, document, then improve",
      intro: "We provide the technical side: finding and documenting automated decisions. Your legal adviser confirms your obligations.",
      steps: [
        { title: "Inventory your automations", body: "We list the automations, rules and AI features that use personal information across your systems." },
        { title: "Identify decisions about people", body: "We flag which ones make or substantially influence decisions that affect individuals." },
        { title: "Document how each works", body: "We describe what data each uses, what it decides and where a person is involved, in plain English." },
        { title: "Add oversight where needed", body: "Where it makes sense, we add human review, logging or clearer explanations to the workflow." },
      ],
    },
    result: "A clear record of where your systems make decisions about people, ready for your privacy policy review.",
    guideSlugs: ["automated-decision-making-privacy-act", "ai-agents-vs-workflow-automation"],
    serviceSlugs: ["ai-workflow-automation", "ongoing-support"],
    faqs: [
      { question: "What changes on 10 December 2026?", answer: "Organisations covered by the Australian Privacy Principles must include information in their privacy policy about certain decisions made by computer programs using personal information. Our guide covers APP 1.7 to 1.9 in plain English. This is general information, not legal advice." },
      { question: "Does this apply to my business?", answer: "It applies to APP entities, which generally includes businesses with annual turnover above A$3 million and some smaller businesses, such as health service providers. Check your situation with a legal adviser." },
      { question: "Are you giving legal advice?", answer: "No. We handle the technical side: finding, documenting and improving automated decisions in your systems. Your lawyer or privacy adviser confirms your obligations and the wording of your policy." },
      { question: "What counts as an automated decision?", answer: "Broadly, decisions made by a computer program, or where a program does something substantially and directly related to making the decision, that could significantly affect someone's rights or interests. Your adviser can confirm how this applies to you." },
      { question: "Can you help even if we are not sure we are covered?", answer: "Yes. Knowing where your systems make decisions about people is useful for privacy, customer trust and maintenance, whether or not the new rules apply to you." },
    ],
    cta: { title: "Find out where your systems decide for you", body: "We will help you map the automations that use personal information, so your privacy review starts with facts.", label: "Talk to us about automated decisions" },
  },
];

export const solutionsHub = {
  metadataTitle: "Business Automation Solutions by Problem | 23Labs",
  description:
    "Find the automation, integration or AI solution for the problem slowing your business down, from manual data entry and slow quotes to AI governance and privacy.",
  hero: {
    eyebrow: "Solutions",
    title: "Start with the problem, ",
    highlight: "not the technology",
    body: "Pick the problem that sounds most like your business. Each page explains what it costs, how we fix it and where we have done it before.",
  },
  groups: [
    { category: "operations" as const, heading: "Operations and admin", intro: "The manual work that slows growing businesses down." },
    { category: "governance" as const, heading: "Safety, governance and privacy", intro: "Using AI and automation with the right controls in place." },
  ],
};

export function getSolutionPage(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}

export function solutionPath(slug: string) {
  return `/solutions/${slug}`;
}
