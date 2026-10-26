export type ServiceTextPart = { text: string; href?: string };

export type ServiceCaseStudyMatch = { name: string } | { includes: string };

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
    ctaLabel: string;
    image: { src: string; alt: string };
  };
  audience: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  problem: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  howWeHelp: {
    heading: string;
    intro: string;
    capabilities: { title: string; description: string; image: { src: string; alt: string } }[];
  };
  boundary: {
    heading: string;
    parts: ServiceTextPart[];
  };
  engagement: {
    heading: string;
    intro: string;
    ctaLabel: string;
    steps: { title: string; body: string }[];
  };
  useCases: {
    heading: string;
    intro: string;
    items: {
      label: string;
      body: string;
      links?: { href: string; label: string }[];
    }[];
  };
  proof: {
    heading: string;
    intro: ServiceTextPart[];
    studies: {
      match: ServiceCaseStudyMatch;
      label: string;
      summary: string;
      relation?: "example" | "contrast";
    }[];
  };
  faqs: { question: string; answer: string }[];
  cta: { title: string; body: string; label: string };
  relatedSlugs: string[];
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

const freightLink = {
  href: "/freight-logistics",
  label: "Transport and logistics",
};

const professionalServicesLink = {
  href: "/professional-services",
  label: "Professional services",
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
      title: "Business process automation for quoting, onboarding and admin",
      subheading: "For teams who still quote, onboard, report or allocate jobs by hand.",
      lead:
        "Business process automation takes a repeatable process and runs the handoffs without someone retyping the details or remembering the next step. We map how the work actually happens, then automate the parts that follow a rule.",
      ctaLabel: "Show us what you're doing manually",
      image: {
        src: "/site-images/photos/team-dashboard-presentation.png",
        alt: "A team reviewing a performance dashboard presented on a screen during a meeting",
      },
    },
    audience: {
      heading: "Who this is for",
      intro:
        "Owners and operations managers in service businesses who can point at a process and say the team still does it by hand. 23Labs is based in Melbourne and does this work remotely for businesses across Australia and New Zealand.",
      items: [
        {
          title: "The same details get typed twice",
          description:
            "A new client, a quote or a job is entered in one place and then copied into the next tool before anyone can act on it.",
        },
        {
          title: "The process stops when one person is away",
          description:
            "Quoting, onboarding, reporting or job allocation depends on someone remembering the steps, so the work queues when they are not there.",
        },
        {
          title: "Follow-ups live in an inbox",
          description:
            "Approvals, document requests and customer updates wait on a person to notice them, rather than moving when the previous step is done.",
        },
      ],
    },
    problem: {
      heading: "The manual work this removes",
      intro:
        "These are the operational problems service businesses describe when the admin has started to cost as much time as the work itself.",
      items: [
        {
          title: "Quoting takes too long",
          description:
            "Rates, job details and the last version of a quote are assembled by hand, so a request sits while someone builds an answer the business has given before.",
        },
        {
          title: "Onboarding is a string of re-entry",
          description:
            "Customer information arrives, then someone creates the project, the tasks and the internal records by copying from the CRM or the inbox.",
        },
        {
          title: "Reporting is a monthly reconstruction",
          description:
            "The numbers exist in the systems the team already uses, and someone still spends hours pulling them into a spreadsheet so management can see them.",
        },
      ],
    },
    howWeHelp: {
      heading: "What 23Labs automates",
      intro:
        "We automate the steps your team repeats: quoting, onboarding, reporting, job allocation, data entry, approvals and the handoffs between them. The systems you already use stay in place unless one of them is genuinely blocking the process.",
      capabilities: [
        {
          title: "Quoting and job allocation",
          description:
            "Prepare quotes from the information you already hold, and move a job to the right person without a second list or a chase-up call.",
          image: {
            src: "/site-images/photos/notes-planning-desk.png",
            alt: "A person planning workflow notes at a desk",
          },
        },
        {
          title: "Customer onboarding",
          description:
            "Turn a new client record into the projects, tasks and internal handoffs that delivery needs, without retyping the same details.",
          image: {
            src: "/site-images/photos/team-dashboard-presentation.png",
            alt: "A team reviewing a performance dashboard presented on a screen during a meeting",
          },
        },
        {
          title: "Reporting",
          description:
            "Collect operational data from the systems the team already updates, and produce the report without rebuilding it by hand each time.",
          image: {
            src: "/site-images/photos/growth-chart-overlay.png",
            alt: "A hand pointing to a business growth chart trending upward",
          },
        },
        {
          title: "Approvals, reminders and admin",
          description:
            "Move documents, notifications and routine admin to the next person when the previous step is done, instead of waiting on memory.",
          image: {
            src: "/site-images/photos/connected-tools-overlay.png",
            alt: "A diagram showing business tools connected through an automation hub",
          },
        },
      ],
    },
    boundary: {
      heading: "When this is the right service",
      parts: [
        {
          text: "Choose business process automation when the steps are already predictable: if this happens, create that, notify this person, update this record. ",
        },
        { text: "System integration", href: "/services/system-integrations" },
        {
          text: " is the right page when the problem is that two systems do not share the record. ",
        },
        { text: "AI workflow automation", href: "/services/ai-workflow-automation" },
        {
          text: " is for a step where someone has to read or classify unstructured information. An ",
        },
        { text: "AI agent", href: "/services/ai-agents" },
        {
          text: " is a task that looks information up and takes actions, and only where that is actually a better fit than a rule.",
        },
      ],
    },
    engagement: {
      heading: "How a process automation engagement works",
      intro:
        "There is no fixed package and no published timeline. The sequence is the same each time: see the real process, separate the rules from the judgement, then automate only the rules.",
      ctaLabel: "Show us what you're doing manually",
      steps: [
        {
          title: "Walk one real example",
          body: "We follow a quote, a new client, a report or a job from start to finish, and note every retype, wait and handoff.",
        },
        {
          title: "Separate rules from judgement",
          body: "Steps that always happen the same way can be automated. Steps that need a person to decide stay with a person. We write that split down before building.",
        },
        {
          title: "Automate against the tools you have",
          body: "We implement the handoffs, reminders, task creation and updates on the systems the team already uses.",
        },
        {
          title: "Run it on live work",
          body: "We put real examples through the workflow, adjust what does not match how the team works, and leave a process someone else can follow.",
        },
      ],
    },
    useCases: {
      heading: "Where this shows up",
      intro:
        "These are situations in transport and logistics, recruitment, and professional services. They describe the problem. They are not a list of completed projects. Published work is in the next section.",
      items: [
        {
          label: "Transport and logistics",
          body: "Quote requests worked out by hand, and jobs allocated from a list or a phone call because the plan sits with one dispatcher. The repeatable part is preparing the quote from information the business already holds, and moving the job on without a second copy of the details.",
          links: [freightLink],
        },
        {
          label: "Recruitment",
          body: "A new client or candidate still means someone copies the same details out of an email, and follow-ups depend on who remembers. Publishing the same vacancy to a website and a job board is a different problem: that is system integration, and Huntress Recruitment is the published example of it.",
        },
        {
          label: "Professional services",
          body: "Client onboarding, chasing a proposal or a missing document, and assembling the same report each month. The closest published example is CorIT Tech, an IT services firm: the CRM stayed, and the handoff into project records was automated.",
          links: [professionalServicesLink],
        },
      ],
    },
    proof: {
      heading: "Published work",
      intro: [
        {
          text: "Two projects on this site are business process automation. Where a time figure is included, it is the figure the client reported.",
        },
      ],
      studies: [
        {
          match: { name: "CorIT Tech" },
          label: "CorIT Tech",
          summary:
            "CorIT Tech was transferring new-client information out of the CRM and into project records by hand. 23Labs automated that handoff so the relevant projects and tasks are created from the CRM, and the team is not retyping customer details. CorIT reported saving more than 10 hours of administrative work a month.",
        },
        {
          match: { includes: "real estate" },
          label: "Australian real estate office",
          summary:
            "An Australian real estate office needed customer enquiries and property information to move without someone chasing the handoff. 23Labs improved the website and added workflow triggers so the right person is notified at the relevant stage. Follow-up is less manual, and outstanding actions are easier to see.",
        },
      ],
    },
    faqs: [
      {
        question: "What is business process automation?",
        answer:
          "It is taking a repeatable process your team already runs, such as quoting, onboarding, reporting, job allocation or data entry, and making the handoffs happen without someone retyping or remembering the next step.",
      },
      {
        question: "How is this different from AI workflow automation?",
        answer:
          "Business process automation is for steps that already follow a clear rule. AI workflow automation is for a step where someone has to read, extract or classify information that does not arrive in a fixed format. If the step is already predictable, a model is usually the wrong tool.",
      },
      {
        question: "How is this different from system integration?",
        answer:
          "An integration moves a record between systems. Process automation is the sequence around that record: the check, the notification, the task and the handoff. Many projects include a connection. When the connection is the whole job, it belongs on the system integrations page.",
      },
      {
        question: "Will we have to replace our current software?",
        answer:
          "Usually the tools stay. The point of most of this work is to keep the CRM, job system or inbox you already use and remove the manual steps between them. Replacing a system is only worth discussing when that system is what blocks the process.",
      },
      {
        question: "How much does business process automation cost?",
        answer:
          "23Labs does not publish a price. Scope follows the process: how many steps, how many systems, and how many exceptions a person still handles. A walkthrough of the current work is how a figure gets set, and that figure is for your process.",
      },
      {
        question: "How long does an engagement take?",
        answer:
          "There is no standard timeline on this page. A single handoff and a quoting process with several exceptions are different pieces of work. The sequence is to map the process, agree which steps run on their own, build them, and test them with real examples.",
      },
      {
        question: "Do you work with businesses in New Zealand?",
        answer:
          "Yes. This work is delivered remotely for businesses in Australia and New Zealand. 23Labs is based in Melbourne and has no New Zealand office.",
      },
    ],
    cta: {
      title: "Show us the process your team repeats.",
      body: "A walkthrough of quoting, onboarding, reporting or job allocation is enough to start. We will map what should happen on its own, and what should stay with a person.",
      label: "Show us what you're doing manually",
    },
    relatedSlugs: ["system-integrations", "ai-workflow-automation", "custom-software-development"],
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
      title: "AI workflow automation for documents, extraction and classification",
      subheading: "For the step where someone still has to read before the process can move.",
      lead:
        "AI workflow automation puts a model inside one step of a process you already run: reading a document, extracting fields, or classifying an enquiry. The rest of the workflow stays ordinary, and a person keeps the checks that matter. We suggest it only when that step needs it.",
      ctaLabel: "Talk to us about that step",
      image: {
        src: "/site-images/photos/ai-analytics-overlay.png",
        alt: "A person reviewing business analytics on a tablet and laptop",
      },
    },
    audience: {
      heading: "Who this is for",
      intro:
        "Teams that already have a process, and one step in it that depends on a person reading. 23Labs is a software and automation company based in Melbourne. We work remotely with businesses across Australia and New Zealand, and we do not add AI where a rule would do.",
      items: [
        {
          title: "The input is a document or an email",
          description:
            "Invoices, rate requests, CVs, applications or client documents arrive as PDFs or free text, and someone turns them into fields before anything else can happen.",
        },
        {
          title: "Staff time goes on sorting",
          description:
            "People read and classify incoming enquiries so the right workflow can start. The decision after that may still belong to a person.",
        },
        {
          title: "A fixed rule was considered and does not fit",
          description:
            "The step cannot be written as 'if this field equals that'. If it can, business process automation is the simpler service.",
        },
      ],
    },
    problem: {
      heading: "The reading this is meant to take on",
      intro:
        "The bottleneck is interpretation. Someone has to understand unstructured information before a process that is otherwise familiar can continue.",
      items: [
        {
          title: "Details buried in documents",
          description:
            "The fields a job, an invoice or an onboarding record needs are sitting in a PDF, a scan or an attachment, not in a form.",
        },
        {
          title: "Enquiries that are not a category yet",
          description:
            "An email or a message has to be read before anyone knows which team, which job or which template applies.",
        },
        {
          title: "Every item waits on a person",
          description:
            "Nothing downstream moves until someone has interpreted the input, so volume shows up as delay rather than as a queue the system can see.",
        },
      ],
    },
    howWeHelp: {
      heading: "Where AI earns a place in the workflow",
      intro:
        "We use AI for the interpretive step only: document processing, data extraction and classification. The result is written back into the process your team already runs. We do not rebuild the surrounding handoffs as an AI project.",
      capabilities: [
        {
          title: "Document processing and data extraction",
          description:
            "Read invoices, purchase orders, applications and other business documents, and pull out the fields the next step needs.",
          image: {
            src: "/site-images/photos/ai-analytics-overlay.png",
            alt: "A person reviewing business analytics on a tablet and laptop",
          },
        },
        {
          title: "Classification of emails and enquiries",
          description:
            "Sort incoming messages by what they are, so they reach the right person or the right workflow with the useful detail attached.",
          image: {
            src: "/site-images/photos/connected-tools-overlay.png",
            alt: "A diagram showing business tools connected through an automation hub",
          },
        },
        {
          title: "A person still owns the check",
          description:
            "Agree which results can pass straight through and which a person reviews. Sensitive or ambiguous items stay with the team.",
          image: {
            src: "/site-images/photos/office-analytics-overlay.png",
            alt: "Business analytics charts displayed in an office setting",
          },
        },
        {
          title: "Written back into the tools you use",
          description:
            "The extracted or classified result lands in the workflow and the systems the team already has. AI is a step, not a separate product to log into.",
          image: {
            src: "/site-images/photos/factory-automation-review.png",
            alt: "Two people reviewing automated equipment on a production floor",
          },
        },
      ],
    },
    boundary: {
      heading: "When this is the right service",
      parts: [
        {
          text: "Use this when a person currently reads something before the process can move. Copying a known field, sending a reminder or creating a task from a form is ",
        },
        { text: "business process automation", href: "/services/business-process-automation" },
        {
          text: ", and it does not need a model. An ",
        },
        { text: "AI agent", href: "/services/ai-agents" },
        {
          text: " is different again: it carries out a task across systems, with limits and approval, rather than extracting or classifying one input. If the business needs a new place for the work to live, that is ",
        },
        { text: "custom software", href: "/services/custom-software-development" },
        { text: "." },
      ],
    },
    engagement: {
      heading: "How an AI workflow engagement works",
      intro:
        "We start from the step, not from a model. If we cannot point at information a person has to interpret, we will say so and recommend a simpler automation.",
      ctaLabel: "Talk to us about that step",
      steps: [
        {
          title: "Find the interpretive step",
          body: "We look for the point where someone reads a document, an email or a free-text enquiry and turns it into structured information.",
        },
        {
          title: "Define the output and the check",
          body: "We agree the fields or the classification, and which results a person still reviews before they move on.",
        },
        {
          title: "Put that step in the existing process",
          body: "The model reads the input and writes the result into the workflow. The surrounding handoffs stay ordinary automation.",
        },
        {
          title: "Compare it with how a person handles the same items",
          body: "We review real outputs, tighten the instructions, and only then let it take a place in the live process. Items you mark as sensitive keep a person in the check.",
        },
      ],
    },
    useCases: {
      heading: "Where a model actually helps",
      intro:
        "These are examples of the step, in transport and logistics, recruitment, and professional services. None of them is a completed AI project. There is no AI workflow case study on this site yet.",
      items: [
        {
          label: "Transport and logistics",
          body: "A rate request or a proof-of-delivery document arrives as a PDF or an email, and someone reads it before a job record can be updated. The AI step is that reading. Creating the job from fields that are already structured does not need a model.",
          links: [freightLink],
        },
        {
          label: "Recruitment",
          body: "A CV or an application arrives as unstructured text and someone classifies it against an open role before a recruiter decides. That classification is the workflow step. An agent that corresponds with the candidate is a different service.",
        },
        {
          label: "Professional services",
          body: "An enquiry or a pack of client documents has to be read so onboarding fields exist. The extraction is the AI step. The reminders and task creation around it are ordinary process automation.",
          links: [professionalServicesLink],
        },
      ],
    },
    proof: {
      heading: "Published work, and what it is not",
      intro: [
        {
          text: "Nothing published on this site is an AI workflow. The projects below are process and integration work. Where the step already followed a rule, that is what we built. AI would have been the wrong recommendation.",
        },
      ],
      studies: [
        {
          match: { name: "CorIT Tech" },
          relation: "contrast",
          label: "CorIT Tech",
          summary:
            "Client onboarding was a manual transfer from the CRM into project records. The fix was a workflow that creates the projects and tasks from information the CRM already held. CorIT reported saving more than 10 hours of administrative work a month. No model was required.",
        },
        {
          match: { includes: "real estate" },
          relation: "contrast",
          label: "Australian real estate office",
          summary:
            "Enquiries needed to reach the property record and the right person. That was a website improvement and a set of workflow triggers, not document classification.",
        },
      ],
    },
    faqs: [
      {
        question: "What is AI workflow automation?",
        answer:
          "It is using AI inside a defined business process for a step that needs reading or judgement: pulling fields out of a document, classifying an incoming email, or sorting unstructured information so a person can act on it. The rest of the workflow stays a normal process.",
      },
      {
        question: "When should we avoid AI?",
        answer:
          "When the step already follows a fixed rule. Copying a field from one system to another, sending a reminder, or creating a task from a form does not need a model. That is business process automation, and it is usually simpler to run.",
      },
      {
        question: "How is this different from an AI agent?",
        answer:
          "An AI workflow step does one job inside a process you already own, such as extracting invoice lines or classifying an enquiry, and hands the result on. An AI agent is built to carry out a task that may involve several lookups and actions, within limits you set.",
      },
      {
        question: "Do you have a published AI case study?",
        answer:
          "No. The published projects are process automation, system integration and a website rebuild. We will only propose AI when your workflow has a step that rules cannot handle.",
      },
      {
        question: "How much does AI workflow automation cost?",
        answer:
          "We do not publish a price. It depends on the step, how much a person still needs to review, and which system the result has to land in. We will not quote a model licence or a package rate on this page.",
      },
      {
        question: "Do you work with New Zealand businesses?",
        answer:
          "Yes. The work is delivered remotely from Melbourne for clients in Australia and New Zealand. There is no New Zealand office.",
      },
    ],
    cta: {
      title: "Show us the step someone still has to read.",
      body: "Describe the document, email or enquiry that has to be interpreted before the process can move. If that step is already a fixed rule, we will say so and treat it as process automation.",
      label: "Talk to us about that step",
    },
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
      title: "Custom software development for internal systems and portals",
      subheading: "For service businesses whose work no longer fits a spreadsheet or a standard product.",
      lead:
        "We design and build software around the way a business actually operates: internal platforms, client and staff portals, operations tools and dashboards. It is the right path when the current tools cannot represent the work.",
      ctaLabel: "Talk to us about the process",
      image: {
        src: "/site-images/photos/dashboard-laptop-review.png",
        alt: "A person reviewing a software dashboard on a laptop",
      },
    },
    audience: {
      heading: "Who this is for",
      intro:
        "Service businesses across Australia and New Zealand that have a process important enough to deserve its own software. 23Labs is based in Melbourne and delivers the work remotely. A marketing website is a different job from the systems on this page.",
      items: [
        {
          title: "The real system is a spreadsheet",
          description:
            "Jobs, clients, deliveries or matters are being run from a workbook someone has to protect, because nothing else matches the way the team works.",
        },
        {
          title: "Off-the-shelf software forces workarounds",
          description:
            "The product is close, and the team still keeps a side process because the screens do not follow the work.",
        },
        {
          title: "Customers or staff need a place to see status",
          description:
            "Clients email for an update, or staff assemble a view by hand, because there is no portal or dashboard for that job.",
        },
      ],
    },
    problem: {
      heading: "The problems custom software is for",
      intro:
        "These show up when the process is too specific, or too central, for another subscription to absorb.",
      items: [
        {
          title: "Important work lives in a workbook",
          description:
            "The delivery plan, the client list or the operational record is a spreadsheet. It is fragile, hard to share, and one change away from being wrong.",
        },
        {
          title: "Staff work around the tool they were given",
          description:
            "The official system stays, and the real process happens in email and side notes because the system does not fit.",
        },
        {
          title: "There is nowhere for a client or a colleague to look",
          description:
            "Status, documents and requests are chased personally because the business has no portal for the people who need them.",
        },
      ],
    },
    howWeHelp: {
      heading: "What 23Labs builds",
      intro:
        "Internal platforms, operations systems, web applications, client and staff portals, and dashboards that replace the spreadsheet view. Where the gap is only that two existing systems do not share data, we will say that before building a new one.",
      capabilities: [
        {
          title: "Internal platforms and operations systems",
          description:
            "Software for the process your team actually runs, when a standard product would have to be bent around it.",
          image: {
            src: "/site-images/photos/dashboard-laptop-review.png",
            alt: "A person reviewing a software dashboard on a laptop",
          },
        },
        {
          title: "Client and staff portals",
          description:
            "A place for clients or staff to submit information, see status and complete the steps that currently happen over email.",
          image: {
            src: "/site-images/photos/field-team-laptop-review.png",
            alt: "Two team members reviewing information together on a laptop",
          },
        },
        {
          title: "Dashboards that replace the spreadsheet view",
          description:
            "One operational picture of jobs, requests or delivery, drawn from the work the team is already doing.",
          image: {
            src: "/site-images/photos/workers-system-monitors.png",
            alt: "Two engineers reviewing system data across multiple monitors",
          },
        },
        {
          title: "Web applications for a defined process",
          description:
            "A focused application for one business process, including a product build when the software itself is what you sell. That is scoped as its own engagement.",
          image: {
            src: "/site-images/photos/team-standup-tablet.png",
            alt: "A team member presenting project updates to colleagues around a table",
          },
        },
      ],
    },
    boundary: {
      heading: "When this is the right service",
      parts: [
        {
          text: "Choose custom software when the process needs a place to live. When the tools you have are fine and the waste is retyping, start with ",
        },
        { text: "system integration", href: "/services/system-integrations" },
        {
          text: ". When the steps are repetitive and the systems can stay, that is ",
        },
        { text: "business process automation", href: "/services/business-process-automation" },
        {
          text: ". We would rather connect or automate what you have than build software you do not need.",
        },
      ],
    },
    engagement: {
      heading: "How a custom software engagement works",
      intro:
        "We do not start from a feature list. We start from the process the software has to support, and we agree the smallest version that would be useful. There is no published timeline or package price.",
      ctaLabel: "Talk to us about the process",
      steps: [
        {
          title: "Map the process the software has to support",
          body: "We sit with the people who do the work and trace what the spreadsheet, the inbox or the old system is actually doing.",
        },
        {
          title: "Agree the smallest useful version",
          body: "We define what the first version has to handle, what can wait, and whether an integration or an automation would solve it with less software.",
        },
        {
          title: "Build it with the people who will use it",
          body: "We design and build the platform, portal or tool, and review it against real jobs, clients or records.",
        },
        {
          title: "Test, deploy and stay available",
          body: "We test the paths the team relies on, put it into use, and adjust what the first period of real work reveals. Later changes are ongoing support, agreed separately.",
        },
      ],
    },
    useCases: {
      heading: "Where this shows up",
      intro:
        "Examples from transport and logistics, recruitment, and professional services. They are the shape of the problem, not completed platforms. The only custom build published in detail is narrower, and it is linked below.",
      items: [
        {
          label: "Transport and logistics",
          body: "Jobs, drivers and delivery status still live in a spreadsheet because the transport system cannot show the operation the way the team runs it. The useful build is an internal view or a small operations tool around that work.",
          links: [freightLink],
        },
        {
          label: "Recruitment",
          body: "A client or candidate portal for a step the recruitment system does not cover, such as a structured brief or a status view for the hiring client. Where the real issue is the same vacancy being retyped onto the website and a job board, an integration is the better job. Huntress Recruitment was that kind of connection, plus a small set of public-facing fields.",
        },
        {
          label: "Professional services",
          body: "Clients email documents and then ask where a matter is up to, because the practice tools have nowhere shared for that. A client portal built around the delivery process is the software this page describes.",
          links: [professionalServicesLink],
        },
      ],
    },
    proof: {
      heading: "Published work",
      intro: [
        {
          text: "Read these for what was actually built. Neither is a full internal platform. There is no published case study of a complete operations system or client portal yet.",
        },
      ],
      studies: [
        {
          match: { name: "Huntress Recruitment" },
          label: "Huntress Recruitment",
          summary:
            "The custom work on this New Zealand recruitment project was specific: public-facing fields for job titles and locations, so Bullhorn could stay structured for the team while SEEK and the website showed the candidate-facing version. It is a precise build inside an integration, not a new recruitment platform.",
        },
        {
          match: { name: "Lily Olsen Counselling" },
          relation: "contrast",
          label: "Lily Olsen Counselling",
          summary:
            "An Auckland practice had a four-page website rebuilt, delivered remotely from Melbourne. It shows that 23Labs works with New Zealand clients. A website and an internal platform are different engagements. The platform work is what this page is for.",
        },
      ],
    },
    faqs: [
      {
        question: "What is custom software development?",
        answer:
          "Software designed around a specific business process, rather than a product you configure to fit. That can be an internal platform, a client or staff portal, an operations dashboard, or a system that replaces a spreadsheet the team has outgrown.",
      },
      {
        question: "How is this different from business process automation?",
        answer:
          "Automation keeps the tools you have and removes the repetitive steps. Custom software is for when the tool itself does not exist, or the one you have cannot represent how the work happens. We say which applies before anything is built.",
      },
      {
        question: "Do you replace our CRM or accounting system?",
        answer:
          "Not by default. Many projects sit beside the systems you already use and handle the part those systems do not cover. Replacing a core system is only worth it when that system is holding the process back.",
      },
      {
        question: "What does custom software cost in Australia?",
        answer:
          "We do not publish a price. It depends on the process, how many people use it, and whether the first version is a focused tool or a larger platform. If a smaller integration or automation would solve it, we say that before talking about a build.",
      },
      {
        question: "How long does a build take?",
        answer:
          "We do not publish a standard timeline. The sequence is to map the process, agree the first version, build it with the people who will use it, then test and deploy. Duration depends on that process and on access to the team and the current systems.",
      },
      {
        question: "Can you work with a business in New Zealand?",
        answer:
          "Yes. 23Labs is based in Melbourne and works remotely with clients in New Zealand as well as Australia. There is no New Zealand office. Lily Olsen Counselling in Auckland is a website project, delivered remotely. It is not an internal platform.",
      },
    ],
    cta: {
      title: "Tell us where the current system stops fitting.",
      body: "Bring the spreadsheet, the workaround or the process your team has outgrown. We will tell you whether that is custom software, or whether connecting or automating what you already have is the better first step.",
      label: "Talk to us about the process",
    },
    relatedSlugs: ["system-integrations", "business-process-automation"],
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
      title: "AI agents for support, sales and internal operations",
      subheading: "For a defined task that needs a lookup and an action, with a person on the decisions that matter.",
      lead:
        "An AI agent carries out a defined task inside your systems: answering a routine support question, preparing a sales summary, or completing an admin step it is allowed to take. It works within limits you set. It is not a general chatbot, and it is not a fixed workflow with a model attached.",
      ctaLabel: "Talk to us about the task",
      image: {
        src: "/site-images/photos/ai-network-diagram.png",
        alt: "A diagram showing an AI system connected to business documents and reporting",
      },
    },
    audience: {
      heading: "Who this is for",
      intro:
        "Operations that can name the task, the system that holds the information, and what the agent must not do. 23Labs is based in Melbourne and works remotely with businesses in Australia and New Zealand. We build agents as part of how a business operates, not as an AI product looking for a use.",
      items: [
        {
          title: "Support answers the same questions by searching",
          description:
            "A person looks up a status, a policy or a record and replies. The path is similar every time, and the wording of the question is not.",
        },
        {
          title: "A task needs several lookups",
          description:
            "Preparing an account summary, a handoff or an internal answer means opening more than one system. A single fixed rule does not cover it.",
        },
        {
          title: "A person should still approve the commitment",
          description:
            "You want the preparation done, and you want a person on anything that changes a record, spends money, or promises a customer something.",
        },
      ],
    },
    problem: {
      heading: "The tasks people are still chasing through systems",
      intro:
        "An agent is for work that starts as a question or a request in plain language, and only becomes a next step once someone has retrieved the information.",
      items: [
        {
          title: "Repetitive support",
          description:
            "The same operational questions take a person off other work, because answering means searching a system rather than applying a template.",
        },
        {
          title: "Answers assembled by hand",
          description:
            "Sales or account support pulls a summary together from records before a conversation. The assembly is the task. The conversation still needs a person.",
        },
        {
          title: "Admin that is a search, not a rule",
          description:
            "Internal requests arrive in different words, and someone has to find the right record before they can act. The action itself may be simple once the record is found.",
        },
      ],
    },
    howWeHelp: {
      heading: "What an agent is allowed to do",
      intro:
        "We build task-based agents for support, sales support and internal admin. Voice is in scope when the task is a phone conversation and the limits are the same. The agent only reaches the systems and actions agreed up front.",
      capabilities: [
        {
          title: "Internal agents for a defined task",
          description:
            "Look up an agreed source, prepare the answer or the record, and stop at the boundary you set.",
          image: {
            src: "/site-images/photos/ai-network-diagram.png",
            alt: "A diagram showing an AI system connected to business documents and reporting",
          },
        },
        {
          title: "Customer support, with escalation",
          description:
            "Handle the routine questions the agent can confirm, and hand the rest to a person with the context already gathered.",
          image: {
            src: "/site-images/photos/dashboard-review-pair.png",
            alt: "Two colleagues reviewing analytics together on a desktop monitor",
          },
        },
        {
          title: "Sales support that prepares",
          description:
            "Research a prospect or assemble an account summary for a person to approve before it is used or written back.",
          image: {
            src: "/site-images/photos/team-meeting-discussion.png",
            alt: "A team discussing a project together around a meeting table",
          },
        },
        {
          title: "Limits and the actions it must not take",
          description:
            "Permissions, approval on the steps that commit the business, and a written list of what is out of scope. Expanding that list is a deliberate change.",
          image: {
            src: "/site-images/photos/workers-system-monitors.png",
            alt: "Two engineers reviewing system data across multiple monitors",
          },
        },
      ],
    },
    boundary: {
      heading: "When this is the right service",
      parts: [
        {
          text: "An agent takes a task, retrieves what it needs, and carries out the actions it is allowed to take. Classifying a document or extracting fields is ",
        },
        { text: "AI workflow automation", href: "/services/ai-workflow-automation" },
        {
          text: ". A predictable sequence with no judgement is ",
        },
        { text: "business process automation", href: "/services/business-process-automation" },
        {
          text: ". We recommend those when they fit the work better. A new screen or portal for the team is ",
        },
        { text: "custom software", href: "/services/custom-software-development" },
        { text: "." },
      ],
    },
    engagement: {
      heading: "How an AI agent engagement works",
      intro:
        "The design is the task and the boundary. We do not start from a demo agent and look for somewhere to put it. There is no published timeline or price.",
      ctaLabel: "Talk to us about the task",
      steps: [
        {
          title: "Name the task, the source of truth and the limits",
          body: "We define what the agent is for, which systems or documents it may read, and which actions it may take. Anything outside that list is out of scope.",
        },
        {
          title: "Decide what a person still approves",
          body: "Routine answers can go through. A change to a record, a commitment to a customer, or anything ambiguous waits for a person.",
        },
        {
          title: "Build it inside those limits",
          body: "We connect it only to what the task needs, and we test it on real questions and records.",
        },
        {
          title: "Review the first real tasks",
          body: "We look at what it did, where it handed over, and where the limit was too loose or too tight. It does not gain new permissions on its own.",
        },
      ],
    },
    useCases: {
      heading: "Where an agent fits",
      intro:
        "Illustrative tasks in transport and logistics, recruitment, and professional services. There is no published AI agent project on this site. The linked industry pages describe the operational context, not a deployed agent.",
      items: [
        {
          label: "Transport and logistics",
          body: "Customers ask where a job is, and someone looks it up to answer. An agent can handle the lookups it is allowed to make and hand over anything it cannot confirm. Reading a delivery document into fields is AI workflow automation, not this.",
          links: [freightLink],
        },
        {
          label: "Recruitment",
          body: "A consultant needs a short account summary before a client call, and someone assembles it from the recruitment system for them to approve. That is an agent task. The Huntress Recruitment project was an integration that moved vacancy data between Bullhorn, SEEK and the website. It was not an agent.",
        },
        {
          label: "Professional services",
          body: "Clients ask what they need to send, or where a matter sits, and a person answers from agreed material. An agent can give that answer and pass anything commercial or unclear to the team. It does not replace an onboarding workflow.",
          links: [professionalServicesLink],
        },
      ],
    },
    proof: {
      heading: "Published work, and what it is not",
      intro: [
        {
          text: "There is no AI agent case study on this site. The projects below show how we treat operational work. They are workflows and an integration. They are not agent deployments.",
        },
      ],
      studies: [
        {
          match: { name: "CorIT Tech" },
          relation: "contrast",
          label: "CorIT Tech",
          summary:
            "Onboarding created projects and tasks from the CRM by rule. A person was not asking an assistant to decide the next step. CorIT reported saving more than 10 hours of administrative work a month.",
        },
        {
          match: { name: "Huntress Recruitment" },
          relation: "contrast",
          label: "Huntress Recruitment",
          summary:
            "Vacancy information moved between Bullhorn, SEEK and the website, with public-facing fields kept separate from the internal record. That is a connection between systems, not an agent acting on a recruiter's behalf.",
        },
      ],
    },
    faqs: [
      {
        question: "What is an AI agent?",
        answer:
          "Software that can take a defined task, look up information in your systems or documents, and carry out the steps you have allowed. That might be a routine support reply, an account summary, or an admin update. It is not a general chatbot, and it is not the same thing as automating a fixed workflow.",
      },
      {
        question: "How is an AI agent different from AI workflow automation?",
        answer:
          "AI workflow automation handles one interpretive step, usually a document or a classification, then passes the result on. An agent is responsible for a task that may involve several lookups and actions. Because it can change records or reply to a customer, the limits and the approvals are part of the design.",
      },
      {
        question: "How is an agent different from business process automation?",
        answer:
          "Business process automation follows rules you can write down. An agent is for requests that arrive in plain language and need information retrieved before anyone knows the next step. If the path is already predictable, an agent is the wrong tool.",
      },
      {
        question: "What oversight does the agent have?",
        answer:
          "It only reaches the systems and actions agreed up front. Routine replies can be handled directly. Anything that changes a record, makes a commitment, or sits outside the defined task is handed to a person. That line is set in the design.",
      },
      {
        question: "Do you publish an AI agent case study?",
        answer:
          "No. Published work covers onboarding automation, a recruitment system integration, a real estate enquiry workflow and a website rebuild. An agent engagement starts from a specific task and the systems it would need to touch.",
      },
      {
        question: "How much does an AI agent cost, and can it use our current systems?",
        answer:
          "We do not publish a price or a list of supported products. Cost follows the task, the systems it may touch, and how much a person still approves. It can use a CRM or an inbox where that system allows a controlled connection. We name a platform only once that connection is part of the project.",
      },
      {
        question: "Do you build AI agents for New Zealand businesses?",
        answer:
          "Yes, remotely. 23Labs is based in Melbourne, serves Australia and New Zealand, and has no New Zealand office.",
      },
    ],
    cta: {
      title: "Tell us the task, and what the agent must not do.",
      body: "Name the question or the admin task, the system that holds the answer, and the actions that need a person. That is enough to tell whether an agent fits, or whether a simpler workflow does.",
      label: "Talk to us about the task",
    },
    relatedSlugs: ["ai-workflow-automation", "business-process-automation"],
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
      subheading: "For businesses whose CRM, job system, accounting and website do not share records.",
      lead:
        "System integration connects the software you already rely on, so customer, job and invoice records move between them instead of being copied by hand. Where a product has no suitable connector, we build the API or the custom connection.",
      ctaLabel: "Discuss your current systems",
      image: {
        src: "/site-images/photos/connected-tools-overlay.png",
        alt: "A diagram showing business tools connected through an automation hub",
      },
    },
    audience: {
      heading: "Who this is for",
      intro:
        "Businesses that want to keep the systems they have and stop maintaining two copies of the same record. 23Labs works remotely from Melbourne for teams across Australia and New Zealand. The product names on this page are only the ones a published project actually used.",
      items: [
        {
          title: "The same record exists twice",
          description:
            "A customer, a job, a vacancy or an invoice is in two systems, and staff are the integration.",
        },
        {
          title: "A CSV is doing the connecting",
          description:
            "Someone exports and imports so the systems stay roughly in step, and the file is easy to get wrong.",
        },
        {
          title: "A new tool was added beside the old one",
          description:
            "The team adopted another platform, and the previous one still has to be updated by hand.",
        },
      ],
    },
    problem: {
      heading: "Where disconnected systems cost time",
      intro:
        "The symptoms are ordinary. The same details are typed again, nobody is sure which copy is current, and the workaround breaks as volume grows.",
      items: [
        {
          title: "Re-entering the customer, the job or the invoice",
          description:
            "The information already exists. A person types it into the next system because nothing passes it across.",
        },
        {
          title: "Two versions of the truth",
          description:
            "The CRM, the job system and accounting each hold a slightly different record, and the team reconciles them when something looks wrong.",
        },
        {
          title: "A connection that only works when someone remembers",
          description:
            "An export, a manual sync or a brittle workaround keeps up until the volume or the number of tools increases.",
        },
      ],
    },
    howWeHelp: {
      heading: "What 23Labs connects",
      intro:
        "We connect CRM, accounting, job and website systems, and we build APIs where a product does not already offer a workable link. We name a platform only when the project is one we can point at. Everything else is described by the job the system does.",
      capabilities: [
        {
          title: "CRM, job, accounting and website records",
          description:
            "Move the customer, job, invoice or vacancy between the systems that need it, with one of them as the source of the record.",
          image: {
            src: "/site-images/photos/connected-tools-overlay.png",
            alt: "A diagram showing business tools connected through an automation hub",
          },
        },
        {
          title: "APIs and custom connectors",
          description:
            "Build the connection when there is no off-the-shelf link, including the API the other system needs to talk to.",
          image: {
            src: "/site-images/photos/workers-system-monitors.png",
            alt: "Two engineers reviewing system data across multiple monitors",
          },
        },
        {
          title: "Replacing the export",
          description:
            "Take the CSV, or the retype, out of the path so a change in the source record can update the systems that depend on it.",
          image: {
            src: "/site-images/photos/growth-chart-overlay.png",
            alt: "A hand pointing to a business growth chart trending upward",
          },
        },
        {
          title: "Older systems, when they can exchange data",
          description:
            "Bring a legacy or specialist platform into the same flow if it can export, import or expose an interface. If it cannot, we say so.",
          image: {
            src: "/site-images/photos/notes-planning-desk.png",
            alt: "A person planning workflow notes at a desk",
          },
        },
      ],
    },
    boundary: {
      heading: "When this is the right service",
      parts: [
        {
          text: "This page is the connection itself. The notifications, task creation and approvals around that data are ",
        },
        { text: "business process automation", href: "/services/business-process-automation" },
        {
          text: ". A new application, because none of the current systems can do the job, is ",
        },
        { text: "custom software", href: "/services/custom-software-development" },
        {
          text: ". Reading an unstructured document into fields is ",
        },
        { text: "AI workflow automation", href: "/services/ai-workflow-automation" },
        { text: ", and only when a rule cannot do it." },
      ],
    },
    engagement: {
      heading: "How an integration engagement works",
      intro:
        "We check that the systems can actually exchange data before we promise a connection. There is no published price or timeline. Both depend on the systems and on how the record needs to move.",
      ctaLabel: "Discuss your current systems",
      steps: [
        {
          title: "Name the record that is being re-entered",
          body: "We identify which system should own the customer, job, vacancy or invoice, and where a copy is being typed or exported.",
        },
        {
          title: "Check that a connection is possible",
          body: "We look at how data can leave and enter each system. If a product cannot support a reliable link, we say so rather than inventing one.",
        },
        {
          title: "Build it and test it with real records",
          body: "We build the API or connector and check the fields that matter, including the cases that are not the straightforward ones.",
        },
        {
          title: "Make a failure visible",
          body: "We put it into use and agree how a break is noticed, and who changes it when one of the systems changes. Later changes are support, agreed separately.",
        },
      ],
    },
    useCases: {
      heading: "Where this shows up",
      intro:
        "Transport examples below are the shape of the problem, not a named transport integration. The recruitment and professional-services examples have published projects, linked in the next section.",
      items: [
        {
          label: "Transport and logistics",
          body: "A booking entered in the transport system and typed again into accounting, or a file someone exports so the two stay roughly aligned. The work is to move that record, where the systems can exchange data. This does not claim a specific transport product.",
          links: [freightLink],
        },
        {
          label: "Recruitment",
          body: "Vacancy details kept in a recruitment system, then again on a job board and again on the website. Huntress Recruitment is the published version: Bullhorn, SEEK and the company website, with public fields so the internal record and the candidate-facing version can differ.",
        },
        {
          label: "Professional services",
          body: "A CRM and a project tool that each hold a different version of the client, so staff re-enter details before delivery can start. CorIT Tech is the published example of connecting a CRM to project management tools for that handoff.",
          links: [professionalServicesLink],
        },
      ],
    },
    proof: {
      heading: "Published work",
      intro: [
        {
          text: "The platform names here are the ones these projects used. We do not keep a directory of certified integrations.",
        },
      ],
      studies: [
        {
          match: { name: "Huntress Recruitment" },
          label: "Huntress Recruitment",
          summary:
            "Huntress, a New Zealand recruitment firm, was maintaining vacancies in Bullhorn, on SEEK and on its WordPress website. 23Labs connected that flow and added public-facing fields so internal records and what candidates see do not have to match word for word.",
        },
        {
          match: { name: "CorIT Tech" },
          label: "CorIT Tech",
          summary:
            "The onboarding work connected CorIT Tech's CRM with its project management tools, so customer details moved into project records without being typed again. The wider workflow is business process automation. The connection is the integration. CorIT reported saving more than 10 hours of administrative work a month.",
        },
        {
          match: { includes: "real estate" },
          label: "Australian real estate office",
          summary:
            "Enquiry information needed to meet the property record and notify the right person. 23Labs connected that handoff and improved the website.",
        },
      ],
    },
    faqs: [
      {
        question: "What is a system integration?",
        answer:
          "A connection that lets two or more systems share records, so staff stop typing the same customer, job or invoice into each one. That can be an existing interface, a custom API, or a replacement for a file someone exports by hand.",
      },
      {
        question: "Which systems can you connect?",
        answer:
          "It depends on whether they can exchange data. The published recruitment project connected Bullhorn, SEEK and a WordPress website. We do not publish a list of certified platforms, and we will not claim an integration we have not built. If a product has no workable interface, we say so.",
      },
      {
        question: "How is an integration different from custom software?",
        answer:
          "An integration keeps each system and moves information between them. Custom software is a new application for a job none of the current systems can do. If the systems are fine and the gap is the re-entry, integration is the starting point.",
      },
      {
        question: "How is this different from business process automation?",
        answer:
          "Integration is the data moving. Process automation is the sequence around it: who is notified, what task is created, what has to be approved. This page is about the connection.",
      },
      {
        question: "Can you connect an older system?",
        answer:
          "Often, if it can export, import or expose an interface. Where it cannot, we describe that limit rather than inventing a connector. The first step is to see how the data leaves that system today.",
      },
      {
        question: "What does system integration cost?",
        answer:
          "We do not publish a price. It depends on how many systems, whether they already expose a usable interface, and how many fields and exceptions the record has. A conversation about what gets typed twice is how it gets scoped.",
      },
      {
        question: "Do you integrate systems for New Zealand businesses?",
        answer:
          "Yes. Integrations are delivered remotely. Huntress Recruitment, a New Zealand firm, is one example. 23Labs is based in Melbourne and has no New Zealand office.",
      },
    ],
    cta: {
      title: "Tell us which systems do not share records.",
      body: "You do not need a technical specification. Tell us what gets typed twice and which systems are involved. We will say whether a connection is possible before anyone talks about a rebuild.",
      label: "Discuss your current systems",
    },
    relatedSlugs: ["business-process-automation", "custom-software-development"],
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
      subheading: "For software, automations and integrations that are already in use.",
      lead:
        "Ongoing support keeps an existing system matched to the business after the first build: maintenance, fixes, further features, and a team that is not dependent on one person to change it.",
      ctaLabel: "Talk to us about the system you have",
      image: {
        src: "/site-images/photos/dashboard-review-pair.png",
        alt: "Two colleagues reviewing analytics together on a desktop monitor",
      },
    },
    audience: {
      heading: "Who this is for",
      intro:
        "Businesses with software, an automation or an integration already in use, whether 23Labs built it or it is a system we can understand. Support is delivered remotely across Australia and New Zealand from Melbourne.",
      items: [
        {
          title: "The business moved on",
          description:
            "A new service, a new step or a new tool means the system from last year no longer matches the work.",
        },
        {
          title: "Something fails quietly",
          description:
            "An automation or an integration runs in the background, and nobody notices until a customer or a report is wrong.",
        },
        {
          title: "The person who built it has left",
          description:
            "The team can use the system, and a change waits because nobody is confident to alter it.",
        },
      ],
    },
    problem: {
      heading: "What happens after the first build",
      intro:
        "The original project solved the process as it was. Support is how that solution keeps fitting.",
      items: [
        {
          title: "Nobody is watching a system the team relies on",
          description:
            "A broken sync or a skipped step can sit there until the downstream work looks wrong.",
        },
        {
          title: "Small changes have nowhere to go",
          description:
            "A new field, a new approval or a new notification is either ignored or forced through a workaround.",
        },
        {
          title: "Knowledge sits with one person",
          description:
            "Day-to-day operation is fine, and any change depends on whoever happens to remember how it was built.",
        },
      ],
    },
    howWeHelp: {
      heading: "What ongoing support covers",
      intro:
        "Maintenance, issue resolution, improvements, and feature work on software, automations and integrations that already exist. A change that is really a new product is scoped as new work, on the relevant service.",
      capabilities: [
        {
          title: "Maintenance and fixes",
          description:
            "Look at automations, integrations and software that have stopped behaving, and repair them against the process the team actually runs.",
          image: {
            src: "/site-images/photos/team-meeting-discussion.png",
            alt: "A team discussing a project together around a meeting table",
          },
        },
        {
          title: "Improvements once it is in use",
          description:
            "Adjust friction that only shows up after people have used the system in real conditions.",
          image: {
            src: "/site-images/photos/team-standup-tablet.png",
            alt: "A team member presenting project updates to colleagues around a table",
          },
        },
        {
          title: "Features when the process changes",
          description:
            "Add a capability to an existing system when the business takes on a new step, rather than starting a separate product.",
          image: {
            src: "/site-images/photos/field-team-laptop-review.png",
            alt: "Two team members reviewing information together on a laptop",
          },
        },
        {
          title: "Handover the team can use",
          description:
            "Explain how it works, in writing the operators can follow, so a change is not trapped with one developer.",
          image: {
            src: "/site-images/photos/factory-automation-review.png",
            alt: "Two people reviewing automated equipment on a production floor",
          },
        },
      ],
    },
    boundary: {
      heading: "When this is the right service",
      parts: [
        {
          text: "Ongoing support is for something already in use. A new platform is ",
        },
        { text: "custom software", href: "/services/custom-software-development" },
        { text: ". A new repeatable process is " },
        { text: "business process automation", href: "/services/business-process-automation" },
        { text: ". A new connection between systems is " },
        { text: "system integration", href: "/services/system-integrations" },
        { text: ". Support is how that work continues once people depend on it." },
      ],
    },
    engagement: {
      heading: "How a support engagement works",
      intro:
        "We start from the live system and what has changed around it. We do not publish retainers, response times or a rate card. What is covered is agreed from the systems you rely on.",
      ctaLabel: "Talk to us about the system you have",
      steps: [
        {
          title: "Understand what is already live",
          body: "We learn how people use it, what it is connected to, and what has changed since it was built. If the original author has left, we start from the behaviour and the people using it.",
        },
        {
          title: "Separate a fix from a new piece of work",
          body: "A repair, a small improvement and a larger feature are different. A change that is really a new product is scoped that way.",
        },
        {
          title: "Change it against the live process",
          body: "We implement the change and check it against the jobs the team actually runs, without disturbing the parts that are working.",
        },
        {
          title: "Leave the team able to operate it",
          body: "We update the explanation of how it works so the next change does not depend on one person.",
        },
      ],
    },
    useCases: {
      heading: "Where this shows up",
      intro:
        "These describe the kind of change, not a list of support contracts. The only continued relationship this site can point at is CorIT Tech, below. Transport and recruitment examples are illustrative.",
      items: [
        {
          label: "Transport and logistics",
          body: "An allocation or quoting workflow that already runs, and needs a change when a depot, a rate rule or a customer update is added. That is a change to a live process. There is no published transport support engagement.",
          links: [freightLink],
        },
        {
          label: "Recruitment",
          body: "A live connection between a recruitment system and a website needs a new public field. That is a change to an existing build. Huntress Recruitment is the original integration, not a statement that a support agreement is in place.",
        },
        {
          label: "Professional services",
          body: "An onboarding workflow that is already running needs the next change when the firm adds a step. After the first automation, CorIT Tech continued working with 23Labs. That is the closest published example of the relationship this page describes.",
          links: [professionalServicesLink],
        },
      ],
    },
    proof: {
      heading: "Published work",
      intro: [
        {
          text: "After the onboarding workflow, CorIT Tech continued working with 23Labs. That is the shape of this service: the first build, then the changes that follow. We are not describing a response-time promise or a published retainer.",
        },
      ],
      studies: [
        {
          match: { name: "CorIT Tech" },
          label: "CorIT Tech",
          summary:
            "The original work automated client onboarding between the CRM and project management tools. CorIT reported saving more than 10 hours of administrative work a month. The firm then kept working with 23Labs as the process continued.",
        },
      ],
    },
    faqs: [
      {
        question: "What does ongoing software support include?",
        answer:
          "Continued work on software, automations and integrations that are already in use: fixing something that has stopped behaving, adjusting a workflow because the business changed, adding a feature, and helping the team understand how it works.",
      },
      {
        question: "Is support only for software 23Labs built?",
        answer:
          "It is the natural next step after a 23Labs project. It can also cover an existing system where we can understand how it works and the change is well defined. We will say if something needs to be rebuilt rather than supported.",
      },
      {
        question: "How is support different from a new project?",
        answer:
          "A new project defines and builds something that is not there yet. Support keeps an existing system matched to the way the team works now. A change that is really a new platform, workflow or integration is scoped as that service.",
      },
      {
        question: "Do you offer a fixed support package or response time?",
        answer:
          "We do not publish packages, prices or response-time guarantees. What is covered is agreed from the systems you rely on and how they tend to change.",
      },
      {
        question: "What if the original developer has left?",
        answer:
          "We start from how the system behaves and how the team uses it, then document the parts people need day to day. The aim is that a change does not depend on one person.",
      },
      {
        question: "Can you support a team in New Zealand?",
        answer:
          "Yes. Support is delivered remotely for clients in Australia and New Zealand. 23Labs is based in Melbourne and has no New Zealand office.",
      },
    ],
    cta: {
      title: "Tell us what is already live.",
      body: "Ongoing support starts from the software, automation or integration you rely on now, and what has changed around it. Bring the system. We will separate a fix from a new piece of work.",
      label: "Talk to us about the system you have",
    },
    relatedSlugs: ["business-process-automation", "system-integrations", "custom-software-development"],
  },
];

export function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((service) => service.slug === slug);
}
