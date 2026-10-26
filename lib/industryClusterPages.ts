import type { IndustryPage } from "@/lib/industries";
import { industryCostFaq } from "@/lib/industryPricing";

const services = {
  automation: "/services/business-process-automation",
  integrations: "/services/system-integrations",
  software: "/services/custom-software-development",
  aiWorkflow: "/services/ai-workflow-automation",
} as const;

const huntress = "/case-studies/huntress-recruitment";
const corit = "/case-studies/corit-tech";

export const transportIndustryPage = {
  slug: "freight-logistics",
  href: "/freight-logistics",
  serviceName: "Transport and logistics automation and software",
  metadataTitle: "Transport & Logistics Automation and Software | 23Labs",
  description:
    "Transport and logistics automation for quoting, job allocation, dispatch, proof of delivery and TMS to accounting integration in Australia and New Zealand.",
  hero: {
    eyebrow: "Industries / Transport & Logistics",
    title: "Transport and logistics automation for quoting, dispatch and invoicing",
    highlight: "",
    lead:
      "Move a job from the quote to allocation, proof of delivery and the invoice without typing it again, and connect the TMS with accounting.",
    ctaLabel: "Talk to us about your process",
    image: {
      src: "/site-images/industries/freight-logistics.jpg",
      alt: "Freight truck travelling on a highway at sunset",
    },
  },
  intro: {
    paragraphs: [
      "A transport job has two lives. Commercially it is a quote, a rate and an invoice. Operationally it is an allocation, a dispatch, a delivery and a proof of delivery. In many freight and logistics businesses those lives sit in different systems, plus the phone, plus a spreadsheet that someone trusts more than the screen.",
      "23Labs builds software and automation around that sequence for transport and logistics operators in Australia and New Zealand. The work is delivered remotely from Melbourne. We do not have a New Zealand office.",
      [
        { text: "The workflows below are typical of the quoting, allocation, dispatch, proof of delivery and invoicing work we build. Product names are confirmed for the systems already in use. The commercial services behind this work are " },
        { text: "business process automation", href: services.automation },
        { text: " and " },
        { text: "system integrations", href: services.integrations },
        { text: "." },
      ],
    ],
  },
  problems: {
    eyebrow: "The handoffs",
    title: "Where a transport job ",
    highlight: "waits on a person",
    items: [
      {
        title: "Quoting from rate sheets",
        body: "A rate request arrives by email or phone. Someone finds the lane, the rate and the conditions, then types the quote. The delay is usually the lookup and the retyping, not the decision to price the job.",
      },
      {
        title: "Allocation from memory",
        body: "Jobs are given to trucks, drivers or depots from a list, a call, or one person's memory of who is free. The office and the yard can be looking at two different versions of the day.",
      },
      {
        title: "Dispatch by phone",
        body: "The address, the time window and the special instructions reach the driver in a call or a text. A change means another call, and the TMS may no longer match what the driver was told.",
      },
      {
        title: "Proof of delivery chased later",
        body: "PODs come back as paper, photos or a note in a message thread. The job cannot be closed, and often cannot be invoiced, until someone files that proof against the right job.",
      },
      {
        title: "Invoicing waits on the paperwork",
        body: "Completed work sits unbilled because the POD, the waiting time or the extra charge is still outside the accounting system.",
      },
      {
        title: "TMS and accounting disagree",
        body: "Customer, job and charge details are exported or retyped from the transport system into accounting. The two systems then disagree about what was delivered and what was billed.",
      },
    ],
  },
  supportingImage: {
    src: "/site-images/photos/connected-tools-overlay.png",
    alt: "A diagram showing business tools connected through an automation hub",
  },
  workflows: {
    eyebrow: "Typical workflows",
    title: "The job, from quote ",
    highlight: "to invoice",
    paragraphs: [
      "These are the workflows 23Labs builds around a transport job, from the quote through to the invoice.",
    ],
    items: [
      {
        title: "Quoting",
        paragraphs: [
          "Before: a request comes in, someone opens the rate sheet or the last similar job, calculates the price, and types a quote into an email. The rate rules live in a person's head as much as in a system.",
          "A practical build uses the rate rules you already trust. The request becomes a draft quote with the lane, the rate and the conditions filled in, and a person approves anything that falls outside those rules. We do not invent a rating engine or a set of rates. If the pricing logic is not written down, that is the first thing to map.",
        ],
      },
      {
        title: "Job allocation and dispatch",
        paragraphs: [
          "Before: the day's jobs are allocated by phone and by whoever can see the board. The driver hears one version. The TMS holds another. A late change is easy to lose.",
          "What we build is a single allocation: the job, who it is assigned to, and the details that person needs, updated when the job changes. That can be a clearer workflow on top of the TMS, or a small operational screen when the TMS does not show the day the way the yard actually runs it. It is not a claim that we replace a TMS, and it is not a GPS tracking product.",
        ],
      },
      {
        title: "Proof of delivery",
        paragraphs: [
          "Before: the delivery happens, and the proof comes back later as paper, a photo or a message. Someone matches it to the job before the job can be closed.",
          [
            { text: "The workflow attaches the proof to the job and shows what is still missing. If the POD is already a status or a structured field, this is an ordinary integration, not an AI project. If someone has to read a photo, a scan or a delivery docket before the job can move, " },
            { text: "AI workflow automation", href: services.aiWorkflow },
            { text: " can extract those fields. We only add that where the reading is the bottleneck." },
          ],
        ],
      },
      {
        title: "Invoicing, and the TMS to accounting link",
        paragraphs: [
          "Before: a completed job waits until the paperwork is in, then someone retypes the customer, the job and the charge into accounting. Cash collection waits on that typing.",
          [
            { text: "Once the job is complete and the proof is against it, the charge can move to the accounting system without a second copy of the same details. The TMS stays the record of the job. Accounting stays the record of the invoice. " },
            { text: "System integrations", href: services.integrations },
            { text: " is the work of joining those two. The connection is scoped to the TMS and the accounting system already in place, and to what those products allow." },
          ],
        ],
      },
    ],
  },
  proof: {
    eyebrow: "The pattern",
    title: "Quote, dispatch, prove, ",
    highlight: "then invoice",
    paragraphs: [
      "A rate request becomes a quote. The job is allocated and dispatched from one list. Proof of delivery is filed against that job. The completed charge moves into accounting, so the transport system and the accounts share the job.",
      [
        { text: "Where the steps are repetitive admin, the fit is " },
        { text: "business process automation", href: services.automation },
        { text: ". Where two systems need to share the job, it is " },
        { text: "system integrations", href: services.integrations },
        { text: ". Where the TMS cannot show dispatch or proof of delivery the way the team works, " },
        { text: "custom software", href: services.software },
        { text: " is the smaller tool around it, not a new transport platform by default." },
      ],
    ],
  },
  help: {
    eyebrow: "How we can help",
    title: "Built around the job, ",
    highlight: "not a new TMS",
    body: "The useful question is which handoff is still manual. Often the transport system stays. The work is the quoting, the allocation, the proof of delivery and the link into accounting.",
    services: [
      {
        icon: "automation",
        name: "Business Process Automation",
        href: services.automation,
        body: "Automate the repeated steps in quoting, allocation, POD chasing and the trigger that lets a completed job be invoiced.",
      },
      {
        icon: "integration",
        name: "System Integrations",
        href: services.integrations,
        body: "Connect the TMS and accounting so customer, job and charge details move once. We name the products only when that integration is real for your stack.",
      },
      {
        icon: "software",
        name: "Custom Software Development",
        href: services.software,
        body: "Build the dispatch or proof-of-delivery view the TMS does not provide, when the team is running the day from a spreadsheet instead.",
      },
      {
        icon: "ai",
        name: "AI Workflow Automation",
        href: services.aiWorkflow,
        body: "Read a POD, a rate card or a delivery docket only when a person is currently doing that reading. Structured job data does not need an AI step.",
      },
    ],
  },
  builds: {
    eyebrow: "What we can build",
    title: "What a transport workflow ",
    highlight: "can include",
    items: [
      {
        icon: "automation",
        title: "Quote assembly",
        body: "A draft quote from the rate rules you already use, with a person approving the exceptions.",
        href: services.automation,
      },
      {
        icon: "software",
        title: "Allocation and dispatch",
        body: "One list of jobs, who they are assigned to, and the details that update when the job changes.",
        href: services.software,
      },
      {
        icon: "document",
        title: "Proof of delivery on the job",
        body: "The POD filed against the job, and a clear flag for what is still missing before it can be closed.",
        href: services.automation,
      },
      {
        icon: "integration",
        title: "Invoice handoff",
        body: "The completed charge moving into accounting without a second typing of the customer and the job.",
        href: services.integrations,
      },
    ],
  },
  faq: [
    {
      question: "Can you automate quoting, dispatch and invoicing without replacing our TMS?",
      answer:
        "Often, yes. The usual pattern is to leave the TMS as the place the job is managed, and to automate the steps around it: a quote from your rate rules, a clearer allocation for dispatch, proof of delivery attached to the job, and the completed charge sent to accounting. Replacing the TMS is a different project. We would only propose that if the current system cannot carry the workflow.",
    },
    {
      question: "Which TMS and accounting products do you integrate with?",
      answer:
        "Each connection is scoped to the TMS and the accounting system already in use, and to what those products allow. Tell us the systems, and we can say whether a connection is realistic.",
    },
    {
      question: "Do you work with operators outside Melbourne?",
      answer:
        "Yes. 23Labs is based in Melbourne and works remotely with transport and logistics businesses across Australia and New Zealand. We do not have a New Zealand office, and we do not run a depot or a yard.",
    },
    industryCostFaq("How much does transport and logistics automation cost?"),
  ],
  cta: {
    title: "Talk to us about the job cycle",
    body: "Show us how one job moves from the quote to the allocation, the proof of delivery and the invoice. We will tell you which handoffs can be connected and which should stay with a person.",
    label: "Talk to us about your process",
  },
} satisfies IndustryPage;

export const recruitmentIndustryPage = {
  slug: "recruitment",
  href: "/recruitment",
  serviceName: "Recruitment automation and integrations",
  metadataTitle: "Recruitment Automation & Integrations | 23Labs",
  description:
    "Recruitment automation for candidate and job intake, ATS to job board and website sync, onboarding and reporting. For agencies in Australia and New Zealand.",
  hero: {
    eyebrow: "Industries / Recruitment",
    title: "Recruitment automation for candidate intake, job publishing and reporting",
    highlight: "",
    lead:
      "Bring candidate and job intake into the ATS, keep the job board and the website in step with it, and take the repeated admin out of onboarding and reporting.",
    ctaLabel: "Talk to us about your process",
    image: {
      src: "/site-images/photos/team-dashboard-presentation.png",
      alt: "A team reviewing operational information on a screen during a meeting",
    },
  },
  intro: {
    paragraphs: [
      "A recruitment desk usually runs on an ATS or CRM, at least one job board, a website, and a trail of email. The vacancy is typed into each of them. Candidate details arrive in a different shape again. By the time someone is placed, the same record has been handled several times.",
      [
        { text: "23Labs builds the connections and the admin around that, for recruitment teams in Australia and New Zealand. The work is delivered remotely from Melbourne. We do not have a New Zealand office. The published example is " },
        { text: "Huntress Recruitment", href: huntress },
        { text: ", a New Zealand client. That project connected Bullhorn, SEEK and the company's WordPress website." },
      ],
      "This page is about recruitment operations: intake, publishing, onboarding and reporting. Where a step is a straight sync between systems, that is what we build. We do not add AI to a publishing problem that is really a data problem.",
    ],
  },
  problems: {
    eyebrow: "Where the admin sits",
    title: "Where recruitment records ",
    highlight: "get retyped",
    items: [
      {
        title: "Candidate intake outside the ATS",
        body: "Applications, referrals and emailed CVs land in an inbox. Someone copies the name, the role and the contact details in before a consultant can work them.",
      },
      {
        title: "Job intake from the client",
        body: "A new vacancy starts as an email or a call. The role, the location and the hiring manager are typed into the ATS again before the job can be published.",
      },
      {
        title: "Public and internal job details drift",
        body: "The title stored for the team is not always the title a candidate should see. Without a controlled public version, the job board and the website drift away from each other.",
      },
      {
        title: "Publishing each channel by hand",
        body: "Editing, refilling or closing a role means updating every channel separately. Miss one and the board or the site still shows a job that is no longer open.",
      },
      {
        title: "Onboarding from a personal checklist",
        body: "After a placement, or when a new client is signed, the documents, tasks and introductions still depend on someone remembering the sequence.",
      },
      {
        title: "Reporting from exports",
        body: "Open roles, pipeline and activity are pulled out of the ATS into a spreadsheet because that is the only way management can see the desk.",
      },
    ],
  },
  supportingImage: {
    src: "/site-images/photos/dashboard-laptop-review.png",
    alt: "A person reviewing a software dashboard on a laptop",
  },
  workflows: {
    eyebrow: "The workflow",
    title: "Four parts of a ",
    highlight: "recruitment desk",
    paragraphs: [
      "Only the publishing sync is something we have written up as a case study. Intake, onboarding and reporting are workflows we build around an ATS or CRM. They are not extra claims about the Huntress project.",
    ],
    items: [
      {
        title: "Candidate and job intake",
        paragraphs: [
          "The role arrives from a client. The applicant arrives from a board, the website or an email. Those are often different queues, and a coordinator retypes them into the ATS before anyone can work the role.",
          "What we build is one intake path. The role and the person are created in the ATS or CRM once, with the fields the team already uses. Where a form or a job board can send structured data, we use that. Where it cannot, we keep a person in that step rather than pretending a feed exists.",
        ],
      },
      {
        title: "ATS or CRM to the job board and the website",
        paragraphs: [
          [
            { text: "This is the " },
            { text: "Huntress Recruitment", href: huntress },
            { text: " workflow. Bullhorn stayed the system the team worked in. 23Labs added public-facing fields for job titles, locations and other candidate-facing details, so the internal record could stay structured while the public wording was controlled. That information was prepared for SEEK and for the WordPress website from the same source, instead of three separate updates." },
          ],
          "Before: a vacancy was maintained in Bullhorn, rewritten for SEEK, and updated again on the website. Public titles and locations could differ from the internal record. After: Bullhorn, then the public fields, then SEEK and the website from that controlled version. Duplicate administration went down. Publishing was more consistent. There is no published hours-saved figure for this project.",
          [
            { text: "We have not published the same build for other ATS products or other job boards. A different stack starts with whether those products can be connected. That is " },
            { text: "systems integration", href: services.integrations },
            { text: " work. The public fields themselves were " },
            { text: "custom development", href: services.software },
            { text: " on top of Bullhorn, not a replacement for it." },
          ],
        ],
      },
      {
        title: "Onboarding",
        paragraphs: [
          "After a placement, or when a new client is signed, someone still requests documents, creates tasks and tells the right consultant. We automate that sequence from the record in the ATS or CRM, so the same steps happen in the same order without a coordinator rebuilding the list.",
          "This is separate from the Huntress publishing work. We do not have a published recruitment onboarding case study, and we do not describe a particular onboarding product.",
        ],
      },
      {
        title: "Reporting",
        paragraphs: [
          "Consultants can see their own roles. Management often cannot see the desk without an export. We build a report that reads vacancy and pipeline information from the ATS, on the cycle the business already uses, so the weekly numbers are not rebuilt by hand.",
          "We do not invent the measures. Those come from how you already judge the desk. We have not published a recruitment reporting dashboard or a metric for one.",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Published proof: ",
    highlight: "Huntress Recruitment",
    paragraphs: [
      [
        { text: "Huntress Recruitment is a New Zealand recruitment business. " },
        { text: "The case study", href: huntress },
        { text: " covers one problem: job information was being maintained separately in Bullhorn, on SEEK and on the WordPress website. Public titles and locations could differ from the internal Bullhorn record, and recruiters were re-entering the same vacancy." },
      ],
      "23Labs mapped that workflow and added public-facing fields so Huntress could control what candidates saw without breaking the way Bullhorn was structured internally. Bullhorn remained the system of record. The outcome was less duplicate administration, more consistent publishing, and clearer control of public job information. The project did not replace Bullhorn, and it did not produce a published time saving.",
      "23Labs delivered the work remotely. Huntress is the New Zealand proof on this page. 23Labs is based in Melbourne and does not have a New Zealand office.",
      [
        { text: "The surrounding admin, intake, onboarding and reporting, sits with " },
        { text: "business process automation", href: services.automation },
        { text: ". The Bullhorn, SEEK and website connection sits with " },
        { text: "system integrations", href: services.integrations },
        { text: "." },
      ],
    ],
    links: [
      {
        href: huntress,
        label: "Huntress Recruitment case study",
        body: "Bullhorn, SEEK and the WordPress website for a New Zealand recruitment client. No published time saving.",
      },
    ],
  },
  help: {
    eyebrow: "How we can help",
    title: "Around the ATS ",
    highlight: "you already use",
    body: "Most agencies do not need a new ATS. They need the one they have to stay in step with the job board, the website and the admin around a placement.",
    services: [
      {
        icon: "integration",
        name: "System Integrations",
        href: services.integrations,
        body: "Connect the ATS or CRM with a job board and the website so a vacancy is maintained once, with the public wording kept separate from the internal record.",
      },
      {
        icon: "automation",
        name: "Business Process Automation",
        href: services.automation,
        body: "Take the repeated steps out of candidate and job intake, onboarding and the handoffs that currently live in an inbox.",
      },
      {
        icon: "software",
        name: "Custom Software Development",
        href: services.software,
        body: "Add the fields or the small internal tool the ATS does not give you. On Huntress, that was the public job title and location fields.",
      },
    ],
  },
  builds: {
    eyebrow: "What we can build",
    title: "What we can ",
    highlight: "put around the desk",
    items: [
      {
        icon: "integration",
        title: "Job board and website sync",
        body: "Bullhorn to SEEK and the website is the published version. Other boards are scoped to what that board allows. We do not claim a connector for every job board.",
        href: services.integrations,
      },
      {
        icon: "automation",
        title: "Candidate and job intake",
        body: "New roles and new applicants created once in the ATS, with the fields the team already works from.",
        href: services.automation,
      },
      {
        icon: "document",
        title: "Onboarding sequence",
        body: "Documents, tasks and introductions triggered from the record. This is not part of the Huntress case study.",
        href: services.automation,
      },
      {
        icon: "chart",
        title: "Desk reporting",
        body: "Open roles and pipeline read from the ATS, instead of a spreadsheet rebuilt each week. No published recruitment metric.",
        href: services.software,
      },
    ],
  },
  faq: [
    {
      question: "Can you connect an ATS to a job board and a website?",
      answer:
        "Yes, where those products can be connected. The published project is Huntress Recruitment. Bullhorn remained the system of record, and public job titles and locations were prepared for SEEK and the WordPress website so the team was not maintaining three copies. We do not claim a ready-made connector for every ATS or every job board. A different stack starts with what that product allows.",
    },
    {
      question: "Do we have to replace our ATS?",
      answer:
        "No. The Huntress work did not replace Bullhorn. The point of that project was to keep the team in the system they already used and to fix how information left it. Replacing the ATS is a different decision, and we would only recommend it if the current system cannot hold the workflow.",
    },
    {
      question: "Can you automate intake, onboarding and reporting as well as job publishing?",
      answer:
        "Those are separate workflows. Intake, onboarding and reporting are the kind of recruitment admin we build around an ATS or CRM. The Huntress case study covers job publishing across Bullhorn, SEEK and the website. It does not cover onboarding or a reporting dashboard, and we have not published a time saving for it.",
    },
    {
      question: "Do you work with recruitment agencies in New Zealand?",
      answer:
        "Yes, remotely. Huntress Recruitment is a New Zealand client. 23Labs is based in Melbourne and works with businesses across Australia and New Zealand. We do not have a New Zealand office.",
    },
    industryCostFaq("How much does recruitment automation cost?"),
  ],
  cta: {
    title: "Talk to us about the recruitment workflow",
    body: "Show us how a vacancy moves from the client to the ATS, the job board and the website, and where someone is still copying it. We will tell you what can be connected and what should stay manual.",
    label: "Talk to us about your process",
  },
} satisfies IndustryPage;

export const professionalServicesIndustryPage = {
  slug: "professional-services",
  href: "/professional-services",
  serviceName: "Professional services automation and software",
  metadataTitle: "Professional Services Automation & Software | 23Labs",
  description:
    "Professional services automation for client onboarding, proposals, project setup and reporting. For firms working across Australia and New Zealand.",
  hero: {
    eyebrow: "Industries / Professional Services",
    title: "Professional services automation for onboarding, proposals and reporting",
    highlight: "",
    lead:
      "Take a client from the proposal to onboarding, project setup and reporting without copying the same details into the next system.",
    ctaLabel: "Talk to us about your process",
    image: {
      src: "/site-images/industries/professional-services.jpg",
      alt: "Professional services team working in a modern open-plan office",
    },
  },
  intro: {
    paragraphs: [
      "Professional services firms sell time and judgement. The admin around that work is a chain: a proposal, an acceptance, an onboarding pack, a project with tasks, then a report the client or the partners expect. Each step often starts by retyping the last one.",
      [
        { text: "23Labs builds that chain for firms in Australia and New Zealand, delivered remotely from Melbourne. We do not have a New Zealand office. The published proof is " },
        { text: "CorIT Tech", href: corit },
        { text: ", an IT services and technology business. That project connected client onboarding with project setup. It was not a new practice-management platform, and the case study does not name the CRM or the project tool." },
      ],
      "Proposals and management reporting are on this page because they are the same kind of admin. They are not what the CorIT project covered. Reading a document with AI is a separate decision from moving a field between two systems. CorIT's project was the second of those.",
    ],
  },
  problems: {
    eyebrow: "The client handoff",
    title: "Where client admin ",
    highlight: "starts again",
    items: [
      {
        title: "Proposals copied from the last one",
        body: "A new proposal starts as a copy of an old document. Scope, names and fees are edited by hand, and the version the client received is not the version in the CRM.",
      },
      {
        title: "A yes that does not start the work",
        body: "The client accepts by email. Someone then creates the project, the tasks and the folder. Until that happens, delivery has not actually started.",
      },
      {
        title: "Onboarding as a string of emails",
        body: "Details and documents are requested one message at a time. The CRM holds one version of the client. The project tool holds another, typed in later.",
      },
      {
        title: "Project setup by hand",
        body: "Staff transfer customer information and create the project records and tasks themselves. The repetition is where details get missed, and it uses time that should have gone to delivery.",
      },
      {
        title: "Reporting built at month end",
        body: "Status, work in progress or what was promised to the client is pulled out of two or three systems into a spreadsheet, because nothing produces the report the firm actually sends.",
      },
      {
        title: "The CRM and the delivery tool disagree",
        body: "The system that won the work and the system that does the work are not the same, and it is not obvious which client record is current.",
      },
    ],
  },
  supportingImage: {
    src: "/site-images/photos/team-meeting-discussion.png",
    alt: "A professional services team discussing client work around a meeting table",
  },
  workflows: {
    eyebrow: "The client lifecycle",
    title: "From the proposal ",
    highlight: "to the report",
    paragraphs: [
      "Onboarding and project setup are the CorIT Tech work. Proposals and reporting are described as workflows we build, not as extra deliverables on that project.",
    ],
    items: [
      {
        title: "Proposals",
        paragraphs: [
          "Before: a proposal is a document copied from the last similar job. Names, scope and fees are edited by hand. The CRM is updated later, if it is updated.",
          "What we build draws the proposal from the client record and an agreed structure, so the firm is not starting from a blank page. A person still approves what the client receives. We have not published a proposal project, and we do not name a document or e-sign product.",
          [
            { text: "If the source is a pile of unstructured files that someone has to read before a proposal can be drafted, " },
            { text: "AI workflow automation", href: services.aiWorkflow },
            { text: " can extract the fields. If the details are already in the CRM, that step is unnecessary." },
          ],
        ],
      },
      {
        title: "Client onboarding",
        paragraphs: [
          [
            { text: "This is the " },
            { text: "CorIT Tech", href: corit },
            { text: " workflow. The business needed a cleaner way to move a new customer into project delivery. Staff were transferring information between systems and creating the project records and tasks by hand. That repetition added errors and took time away from client work." },
          ],
          "23Labs connected the CRM with the project management tools. The CRM stayed the source of customer and onboarding information. Relevant projects and tasks were created from that information. Staff no longer had to transfer the same customer details by hand, and the handoff from winning the client to starting the work followed the same path each time. CorIT did not replace its existing software.",
        ],
      },
      {
        title: "Project setup",
        paragraphs: [
          "Project setup was part of the same CorIT workflow, not a second system. The project and its tasks come from the customer record, rather than from a fresh setup each time.",
          [
            { text: "The pattern is a " },
            { text: "CRM and project management integration", href: services.integrations },
            { text: ". It is " },
            { text: "business process automation", href: services.automation },
            { text: " for a services firm: the work order is created from information the business already captured, instead of a coordinator rebuilding it." },
          ],
        ],
      },
      {
        title: "Reporting",
        paragraphs: [
          "Partners and clients usually want a report the operational tools do not produce on their own. Someone exports, pastes and reformats. We build that report from the systems the firm already uses, on the cycle the firm already works to.",
          "This is not a CorIT Tech deliverable. The case study does not describe a reporting build, and we do not publish utilisation, revenue or WIP figures for the project. The measures come from the firm.",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Published proof: ",
    highlight: "CorIT Tech",
    paragraphs: [
      [
        { text: "CorIT Tech is an IT services and technology business. " },
        { text: "The case study", href: corit },
        { text: " describes an automated onboarding workflow between its CRM and its project management tools. The CRM remained the source of customer and onboarding information. Projects and tasks were created from that information. The objective was a connected workflow without replacing the software the business already used." },
      ],
      "CorIT Tech reported a saving of more than 10 hours of administrative work a month. That figure is reported by the client. We have not published an audit of how it was measured, and we do not present it as a result another firm will get. If that reported saving is maintained for a year, it is more than 120 hours. That annual figure is the same reported number extended across twelve months, not a separate measurement. The workflow also reduced repetitive data entry and left fewer opportunities for a manual error.",
      "After the initial engagement, CorIT Tech kept working with 23Labs and became a white-label partner.",
      "CorIT is one IT services firm. It is evidence for this onboarding and project-setup pattern. It is not evidence that every consultancy, agency or accounting firm has the same stack, and it is not a proposal or reporting case study. The case study does not say where CorIT Tech is based, so this page does not place the client in Australia or New Zealand.",
    ],
    links: [
      {
        href: corit,
        label: "CorIT Tech case study",
        body: "CRM to project setup for client onboarding. The time saving is reported, not audited.",
      },
    ],
  },
  help: {
    eyebrow: "How we can help",
    title: "Admin that follows ",
    highlight: "the client record",
    body: "The firm usually does not need another practice platform. It needs the proposal, the onboarding, the project and the report to use the client details it already captured.",
    services: [
      {
        icon: "automation",
        name: "Business Process Automation",
        href: services.automation,
        body: "Automate onboarding, the creation of project tasks, and the repeated admin between a signed proposal and delivery. CorIT Tech is the published onboarding example.",
      },
      {
        icon: "integration",
        name: "System Integrations",
        href: services.integrations,
        body: "Connect the CRM with the project tools so customer and onboarding details create the work, instead of being typed in again.",
      },
      {
        icon: "software",
        name: "Custom Software Development",
        href: services.software,
        body: "Build an internal tool or client view only when the CRM and the project system cannot carry the workflow. CorIT kept the software it already had.",
      },
      {
        icon: "ai",
        name: "AI Workflow Automation",
        href: services.aiWorkflow,
        body: "Extract fields from a proposal or an onboarding document when a person is currently reading it. Moving a CRM field into a project tool is an integration, not an AI step.",
      },
    ],
  },
  builds: {
    eyebrow: "What we can build",
    title: "What we can ",
    highlight: "put around client delivery",
    items: [
      {
        icon: "document",
        title: "Proposals from the client record",
        body: "A proposal drawn from an agreed structure and the details you already hold, with a person approving what goes to the client. Not a published CorIT deliverable.",
        href: services.automation,
      },
      {
        icon: "automation",
        title: "Client onboarding",
        body: "The CorIT pattern: the CRM stays the source, and the onboarding details are not retyped into the next system.",
        href: services.automation,
      },
      {
        icon: "integration",
        title: "Project setup",
        body: "Projects and tasks created from that CRM information. This is what 23Labs built for CorIT Tech.",
        href: services.integrations,
      },
      {
        icon: "chart",
        title: "Operational reporting",
        body: "A report read from the systems the firm already uses. Not part of the CorIT case study, and not a published performance figure.",
        href: services.software,
      },
    ],
  },
  faq: [
    {
      question: "What did 23Labs build for CorIT Tech?",
      answer:
        "An onboarding workflow between CorIT Tech's CRM and its project management tools. The CRM remained the source of customer and onboarding information. Projects and tasks were created from that information, so staff were not copying the details across. CorIT kept its existing software. The case study does not name the CRM or the project management product.",
    },
    {
      question: "Is the saving of 10 hours a month guaranteed or audited?",
      answer:
        "No. CorIT Tech reported a saving of more than 10 hours of administrative work a month. The measurement method is not documented on this site, so we do not call the figure audited and we do not offer it as a result you will get. If that reported saving continued for a year, it would be more than 120 hours. That annual figure is the reported monthly figure extended, not a separate measurement.",
    },
    {
      question: "Can you automate proposals and reporting, or only onboarding?",
      answer:
        "Onboarding and project setup are the published CorIT Tech work. Proposals and reporting are the same class of admin, and we build them when a firm is assembling those documents or reports by hand. They are not part of the CorIT case study. A proposal workflow still needs a person to approve what the client receives.",
    },
    {
      question: "Do you only do this for IT companies?",
      answer:
        "No. CorIT Tech is an IT services business, and it is the published proof for this onboarding pattern. The same handoff, from a client record to a project, shows up in consultancies, agencies and other professional firms. We would not pretend their systems match CorIT's. 23Labs does this work remotely for businesses in Australia and New Zealand, from Melbourne, and does not have a New Zealand office.",
    },
    industryCostFaq("How much does professional services automation cost?"),
  ],
  cta: {
    title: "Talk to us about the client handoff",
    body: "Show us what happens between a signed proposal and the first project task, and where the same client details are typed in again. We will look at that path before suggesting any new software.",
    label: "Talk to us about your process",
  },
} satisfies IndustryPage;
