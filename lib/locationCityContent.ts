import { industryProjectCostAnswer } from "@/lib/industryPricing";
import type { LocationFaq } from "@/lib/locations";

/**
 * Bespoke body copy for a city page.
 *
 * Cities without an entry keep the shared template in LocationLandingPage.
 * Add an entry here, with its own sections, FAQ and call to action, to give
 * another city the same treatment as Brisbane and Melbourne. Do not city-swap
 * this copy. Every factual claim has to already exist elsewhere on the site.
 */
export type LocationCopyPart = { text: string; href?: string };
export type LocationCopyBlock = string | LocationCopyPart[];

export type LocationCityPoint = {
  title: string;
  paragraphs: LocationCopyBlock[];
};

export type LocationCityLink = {
  href: string;
  label: string;
  body: string;
};

export type LocationCitySection = {
  id: string;
  eyebrow?: string;
  heading: string;
  lead?: string;
  paragraphs?: LocationCopyBlock[];
  points?: LocationCityPoint[];
  links?: LocationCityLink[];
};

export type LocationCityContent = {
  slug: string;
  sections: LocationCitySection[];
  services: { heading: string; lead: string };
  faqs: LocationFaq[];
  faqHeading: string;
  cta: { heading: string; body: string };
};

const discoveryAndCost = `We start with a discovery conversation to understand the current workflow, the systems involved and the outcome you want. From there we map the practical next step and scope the work before development begins. ${industryProjectCostAnswer}`;

const brisbane: LocationCityContent = {
  slug: "brisbane",
  faqHeading: "Questions about Brisbane delivery",
  services: {
    heading: "Services used on that handoff",
    lead: "The cards below are how a build is usually scoped. On a Brisbane logistics or field job they point at one delay in the path from finished work to an invoice.",
  },
  cta: {
    heading: "Bring the job that is sitting unbilled.",
    body: "Walk us through one completed job, from the proof of delivery or the field update through to the invoice. We will say which handoffs can be connected, and which ones should stay with a person.",
  },
  sections: [
    {
      id: "after-the-job",
      eyebrow: "Logistics and field service",
      heading: "The invoice waits on the last piece of proof",
      paragraphs: [
        "A freight job is really two records. One is commercial: a quote, a rate and an invoice. The other is operational: an allocation, a dispatch, a delivery and a proof of delivery. In a lot of transport businesses those records live in different systems, with the phone and a spreadsheet filling the gaps. The delivery can be done while the proof is still a photo on a phone, a paper docket or a message. Until someone matches that proof to the right job, the job stays open, and the charge often stays out of the accounting system.",
        "Field service work jams in the same place, one step closer to the crew. The technician finishes on site. The office still needs a call, a text or a paper job sheet before anyone will raise the invoice. Quotes, bookings and updates are spread across a CRM, a job tool and a message thread, so every handoff between the office and the crew is another chance for the billing to wait.",
        [
          { text: "That is the handoff this page is about, for Brisbane and Queensland teams. The detail comes from our " },
          { text: "transport and logistics", href: "/freight-logistics" },
          { text: " page and our " },
          { text: "trades and field services", href: "/trades-field-services" },
          { text: " page. It is the pattern of the work, not a Brisbane client we can point to. This site has no published case study for a Brisbane logistics or field service business." },
        ],
      ],
    },
    {
      id: "freight-handoff",
      eyebrow: "Freight and logistics",
      heading: "Quote, allocation, proof, then the invoice",
      lead: "These are the transport workflows 23Labs builds around a job. They describe the work, not a particular Brisbane operator, depot or yard.",
      points: [
        {
          title: "A quote from the rate rules you already use",
          paragraphs: [
            "A rate request arrives by email or phone. Someone finds the lane, the rate and the conditions, then types the quote. The delay is usually the lookup and the retyping, not the decision to price the job.",
            "A practical build turns that request into a draft quote, using the rate rules the business already trusts, and leaves a person to approve anything outside those rules. We do not invent a rating engine or a set of rates. If the pricing logic is not written down, mapping it is the first step.",
          ],
        },
        {
          title: "One allocation, instead of two versions of the day",
          paragraphs: [
            "Jobs are often given to trucks, drivers or depots from a list, a call, or one person's memory of who is free. The office and the yard can be looking at different versions of the day, and a late change is easy to lose.",
            "What we build is a single allocation: the job, who it is assigned to, and the details that person needs, updated when the job changes. That can be a clearer workflow on top of the transport system, or a small operational screen when that system does not show the day the way the yard runs it. It is not a GPS tracking product, and it is not a new transport platform by default.",
          ],
        },
        {
          title: "Proof of delivery filed against the job",
          paragraphs: [
            "The delivery happens, and the proof comes back later. Someone has to match a photo, a signature or a note to the consignment before the job can close. Customers also ring for a status because they cannot see progress themselves.",
            [
              { text: "The workflow attaches the proof to the job and shows what is still missing. If that proof is already a status or a structured field, this is an ordinary integration, not an AI project. If someone has to read a photo, a scan or a delivery docket before the job can move, " },
              { text: "AI workflow automation", href: "/services/ai-workflow-automation" },
              { text: " can extract those fields. We only add that step where the reading is the bottleneck. Our " },
              { text: "proof of delivery article", href: "/blog/proof-of-delivery-automation" },
              { text: " walks through capture, customer updates and exceptions. The worked example in that article is illustrative, not a client project." },
            ],
          ],
        },
        {
          title: "The completed charge, without typing it again",
          paragraphs: [
            [
              { text: "Once the job is complete and the proof sits against it, the customer, the job and the charge can move to accounting without a second copy. The transport system stays the record of the job. Accounting stays the record of the invoice. " },
              { text: "System integrations", href: "/services/system-integrations" },
              { text: " is the work of joining those two. The connection is scoped to the systems already in place, and to what those products allow. We name a product only when the integration is real for that stack." },
            ],
            [
              { text: "Where the steps are repeated admin, the fit is " },
              { text: "business process automation", href: "/services/business-process-automation" },
              { text: ". A separate article covers " },
              { text: "subcontractor RCTIs", href: "/blog/transport-rcti-automation" },
              { text: ": using a closed, verified job as the source of a pay run. That article is general information, not tax advice, and it is not a claim that we have built an RCTI workflow for a Brisbane carrier." },
            ],
          ],
        },
      ],
    },
    {
      id: "field-handoff",
      eyebrow: "Trades and field service",
      heading: "From a finished job to an invoice the office can raise",
      lead: "The trades page describes this as a typical pattern we build, not a specific client project. The same limit applies to Brisbane.",
      points: [
        {
          title: "An accepted quote becomes the job",
          paragraphs: [
            "A quote is often accepted by text or email, then set up again by hand in the job system, with the scope, the customer and the site typed in a second time.",
            "The build carries those details across when the quote is accepted, so the job is created from information the business already captured. Pricing the job, and anything that depends on site conditions, stays with a person. Automation prepares the record. It does not make the estimate.",
          ],
        },
        {
          title: "Completion evidence comes back without a phone call",
          paragraphs: [
            "The office currently waits to hear that the crew has finished. Photos and job sheets sit on phones, and the invoice waits with them.",
            [
              { text: "Completion evidence, such as photos or a signed form, can come back onto the job so the invoice can be prepared without that call. A status change can notify accounts and create a draft for review. Quality checks, variations and anything that needs a conversation with the customer stay as sign-off points. The article on " },
              { text: "which processes to automate first", href: "/blog/business-processes-to-automate-first" },
              { text: " uses this job-to-accounts handoff as one of seven starting points, and it is explicit about where a person should remain involved." },
            ],
          ],
        },
        {
          title: "The customer hears the status from the job, not from memory",
          paragraphs: [
            "Customers ring to ask when someone is coming, because the only update they have is the original booking. Status questions also pile up on freight desks for the same reason.",
            [
              { text: "Notifications can follow the job as it is scheduled, on the way and completed, so fewer people need to call and check. The " },
              { text: "business process automation examples", href: "/blog/business-process-automation-examples" },
              { text: " include a transport version of this: a status change updates the record, stores proof of delivery and flags what is missing. That article says the examples are patterns, not a specific client." },
            ],
          ],
        },
      ],
    },
    {
      id: "how-brisbane-delivery-works",
      eyebrow: "How the work is delivered",
      heading: "Remote from Melbourne, on site when a workshop helps",
      paragraphs: [
        "23Labs is a Melbourne studio. There is no Brisbane office. Discovery, design and most of the delivery happen on calls, working against the systems the team already uses. On-site collaboration can be arranged when a workshop, a process-mapping session or implementation support would help. You do not need to travel to Melbourne for the work to start.",
        "We do not run a depot or a yard. The useful question on a first call is which handoff is still manual: the quote, the allocation, the proof of delivery, or the step that lets a completed job be invoiced.",
      ],
    },
    {
      id: "brisbane-sources",
      eyebrow: "Written up in more detail",
      heading: "The pages this draws on",
      lead: "Each of these already lives on the site. They are the source of the workflow above, and they say where an example is illustrative.",
      links: [
        {
          href: "/freight-logistics",
          label: "Transport and logistics",
          body: "Quoting, allocation, proof of delivery and the link from the transport system to accounting. The page is explicit that this is delivered remotely from Melbourne, and that we do not run a depot or a yard.",
        },
        {
          href: "/trades-field-services",
          label: "Trades and field services",
          body: "The quote-to-job and completion-to-invoice pattern for crews. The page says this is a typical build, not a description of a specific client project.",
        },
        {
          href: "/blog/proof-of-delivery-automation",
          label: "Proof of delivery and job status",
          body: "How proof can be captured once, attached to the job, and used for a customer update, an exception and a billing record. The worked example is not a client project.",
        },
        {
          href: "/blog/freight-logistics-workflow-automation",
          label: "Freight and logistics workflow automation",
          body: "Where the same booking details get typed into a spreadsheet, a transport system and an accounting platform, and which everyday workflows can move without that re-entry.",
        },
        {
          href: "/blog/transport-rcti-automation",
          label: "RCTIs and subcontractor pay",
          body: "How a closed job can feed a recipient-created tax invoice and a matching bill. General information, not tax advice, and not a published client result.",
        },
        {
          href: "/blog/business-processes-to-automate-first",
          label: "Processes worth automating first",
          body: "A way to choose a first workflow. For field teams, the relevant section is the handoff from a finished job to accounts, including where judgement stays with a person.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do you have an office in Brisbane?",
      answer:
        "No. 23Labs is a Melbourne studio. Work for Brisbane and Queensland businesses is delivered remotely. On-site collaboration can be arranged when the project benefits from a workshop, process mapping or in-person implementation support. We do not publish a Brisbane street address, and we do not run a depot or a yard.",
    },
    {
      question: "Can you connect a completed job to the invoice without replacing our system?",
      answer:
        "Often, yes. The usual pattern is to leave the transport system or the job management tool as the place the job is managed, attach the proof of completion to that job, and send the completed charge to accounting. Replacing the system is a different project. We would only propose it if the current system cannot carry the workflow. Tell us what you use and we can say whether a connection is realistic.",
    },
    {
      question: "Is this based on a Brisbane client?",
      answer:
        "No. We have not published a Brisbane case study. The freight steps are the quoting, allocation, proof of delivery and invoicing workflows on our transport page. The field-service steps are the typical quote-to-job and completion-to-invoice pattern on our trades page, which is not a description of a specific client. Where a linked article uses an example, that article says the example is illustrative.",
    },
    {
      question: "How does a Brisbane project start, and what does it cost?",
      answer: discoveryAndCost,
    },
  ],
};

const melbourne: LocationCityContent = {
  slug: "melbourne",
  faqHeading: "Questions about working with the Melbourne studio",
  services: {
    heading: "Services for the admin around client work",
    lead: "If the process above needs a build, it will be one of these. For a Victorian service business the usual target is a repeated handoff, not a new system of record.",
  },
  cta: {
    heading: "Bring the process the team repeats every week.",
    body: "Tell us where client details are typed in again, or where a report is rebuilt by hand. We will look at that path, on site or on a call, before suggesting any new software.",
  },
  sections: [
    {
      id: "victorian-service-businesses",
      eyebrow: "Home market",
      heading: "Business process automation for Victorian service businesses",
      paragraphs: [
        [
          { text: "Service businesses sell time, advice or a client relationship. The admin around that work is a chain: an enquiry, a proposal, an acceptance, an onboarding pack, a project with tasks, then a report someone assembles by hand. " },
          { text: "Business process automation", href: "/services/business-process-automation" },
          { text: " takes the repeatable parts of that chain and runs the handoffs, so a person is not retyping the details or remembering the next step." },
        ],
        "23Labs is based in Melbourne, so Victoria is the home market. An on-site session here can be a workshop, a process-mapping conversation, or implementation support in the room with the people who run the workflow. The same discovery also happens on a call when that suits the team better. Either way it starts from the CRM, the project tool and the accounting system the business already uses.",
        [
          { text: "The firms this fits are the ones already described on the site: " },
          { text: "professional services", href: "/professional-services" },
          { text: ", " },
          { text: "real estate", href: "/real-estate" },
          { text: ", and other client businesses with the same kind of operational admin. This page does not add a list of Victorian clients. Published projects are named below, with the limits those case studies actually support." },
        ],
      ],
    },
    {
      id: "service-handoffs",
      eyebrow: "Where the week goes",
      heading: "Four handoffs that show up in service businesses",
      lead: "These are starting points from our writing on what to automate first. They are patterns, not a directory of Melbourne clients.",
      points: [
        {
          title: "Enquiries that wait on whoever is free",
          paragraphs: [
            "Enquiries arrive through a form, an email and the phone. Someone copies each one into the CRM or a spreadsheet, decides who should handle it, and forwards it. When that person is busy, the enquiry sits.",
            [
              { text: "The published project of this kind is " },
              { text: "Real Estate Office | Australia", href: "/case-studies/real-estate-workflow-automation" },
              { text: ". Customer enquiries were connected with property records, so the record updates and the person who needs to act is notified. Follow-up is no longer a separate step someone has to remember. The office kept the systems it already used. The result described on the case study is less manual follow-up, clearer tracking of enquiries and actions, and more consistent internal handoffs. The case study does not name a city, and it does not publish figures." },
            ],
          ],
        },
        {
          title: "Onboarding that starts by typing the client in again",
          paragraphs: [
            "Once a client says yes, someone re-enters the details, creates the project and the tasks, and tells the team. Steps get skipped, and every new client starts slightly differently. The welcome conversation and anything non-standard stay with a person. The repeated setup does not have to.",
            [
              { text: "The published example is " },
              { text: "CorIT Tech", href: "/case-studies/corit-tech" },
              { text: ", an IT services and technology business. The CRM stayed the source of customer and onboarding information. Projects and tasks were created from that information, so staff were not copying the details across. CorIT reported a saving of more than 10 hours of administrative work a month. That figure is reported by the client. We have not published an audit of how it was measured, and we do not present it as a result another firm will get. The case study does not say where CorIT Tech is based, so this page does not place the client in Melbourne or Victoria. After the initial engagement, CorIT Tech kept working with 23Labs and became a white-label partner." },
            ],
          ],
        },
        {
          title: "A report rebuilt at the end of the month",
          paragraphs: [
            "Partners and clients usually want a report the operational tools do not produce on their own. Someone exports from two or three systems, pastes, and reformats. We build that report from the systems the firm already uses, on the cycle the firm already works to.",
            "This is not a CorIT Tech deliverable. The case study does not describe a reporting build, and we do not publish utilisation, revenue or work-in-progress figures for that project. The measures come from the firm. If two people calculate the same figure differently, connecting the systems will only surface that disagreement faster. Agreeing what the number means stays a human decision.",
          ],
        },
        {
          title: "Follow-up that happens when someone remembers",
          paragraphs: [
            "Quote chases, overdue invoices and the email that asks where a job is up to all wait on a list in someone's head. The predictable ones can be triggered from the CRM or the job system. A dispute, a complaint or a sensitive account still needs a phone call rather than another automatic email.",
            [
              { text: "The article on " },
              { text: "business processes to automate first", href: "/blog/business-processes-to-automate-first" },
              { text: " sets out seven of these starting points, including onboarding, reporting and follow-up, and a simple way to score your own list. The " },
              { text: "examples article", href: "/blog/business-process-automation-examples" },
              { text: " shows the same idea across professional services, real estate and other industries, and it says those walkthroughs are patterns unless a case study is linked." },
            ],
          ],
        },
      ],
    },
    {
      id: "judgement-and-onsite",
      eyebrow: "What stays with the firm",
      heading: "The advice stays human. The admin does not have to.",
      paragraphs: [
        [
          { text: "A professional firm does not need another practice platform as the default. It needs the proposal, the onboarding, the project and the report to use the client details it already captured. A person still approves what the client receives. " },
          { text: "Proposals and reporting", href: "/professional-services" },
          { text: " are the same class of admin as onboarding. They are not what the CorIT project covered, and the case study does not name the CRM or the project tool. Moving a field between two systems is an integration. Reading a pile of unstructured documents is a separate decision, and it is only worth adding where a person is currently doing that reading." },
        ],
        "On site in Melbourne, a session is for walking the real process: who touches the client record, which system is supposed to be the source, and which step is still a memory. Implementation support can be in the room when that helps the team adopt the workflow. We also work remotely with businesses elsewhere in Australia and New Zealand. The Melbourne difference is that sitting down together is available as a normal way to start, not as an exception we have to invent.",
        [
          { text: "Recruitment has a published project too, and it is not a Victorian one. " },
          { text: "Huntress Recruitment", href: "/case-studies/huntress-recruitment" },
          { text: " is a New Zealand recruitment business. Bullhorn stayed the system of record, and vacancy information was published more consistently to SEEK and the company website. We do not describe that work as a Melbourne client. The " },
          { text: "full set of published projects", href: "/work" },
          { text: " is short, and each one is labelled with what it actually was." },
        ],
      ],
    },
    {
      id: "melbourne-sources",
      eyebrow: "Written up in more detail",
      heading: "The pages this draws on",
      lead: "The Melbourne page is a reading of work that is already published. These are the sources.",
      links: [
        {
          href: "/professional-services",
          label: "Professional services",
          body: "Client onboarding, project setup, proposals and reporting. CorIT Tech is the published onboarding example, with the time saving described as reported rather than audited.",
        },
        {
          href: "/real-estate",
          label: "Real estate",
          body: "Enquiry handling for agencies and property managers. The published proof is one Australian office, named Real Estate Office | Australia, with no city and no figures.",
        },
        {
          href: "/services/business-process-automation",
          label: "Business process automation",
          body: "How a repeatable process is mapped, and which handoffs can run without someone retyping the details or remembering the next step.",
        },
        {
          href: "/blog/business-processes-to-automate-first",
          label: "Processes worth automating first",
          body: "Seven starting points for Australian and New Zealand businesses, including where a person should stay involved, and how to score your own list.",
        },
        {
          href: "/blog/business-process-automation-examples",
          label: "Business process automation examples",
          body: "Illustrative walkthroughs for professional services, real estate, recruitment and other operations. Real projects are linked where one has been published.",
        },
        {
          href: "/case-studies/corit-tech",
          label: "CorIT Tech case study",
          body: "CRM to project setup for client onboarding. The saving of more than 10 hours a month is reported by the client. The case study does not say where the business is based.",
        },
        {
          href: "/case-studies/real-estate-workflow-automation",
          label: "Real Estate Office | Australia",
          body: "Website improvements and an enquiry workflow connected to property records. No performance figures are published.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can we meet on site in Melbourne?",
      answer:
        "Yes. 23Labs is a Melbourne studio, and Victoria is the home market. On-site sessions, workshops, process mapping and implementation support are available. Discovery can also be a call. We work remotely with businesses elsewhere in Australia and New Zealand. This page does not list a street address.",
    },
    {
      question: "What does business process automation cover for a service business?",
      answer:
        "The repeatable admin around client work: capturing an enquiry, creating the project from the client record, assembling a report from systems you already use, and sending routine follow-ups. A person keeps the conversation, the scoping and any approval the client should see. The professional services page, and the articles on processes to automate first and on business process automation examples, set those patterns out. Where a real project exists, those pages link it.",
    },
    {
      question: "Is the CorIT time saving audited, and was that a Melbourne project?",
      answer:
        "No. CorIT Tech reported a saving of more than 10 hours of administrative work a month. The measurement method is not documented on this site, so we do not call the figure audited and we do not offer it as a result you will get. The case study does not say where CorIT Tech is based, so we do not describe it as a Melbourne or Victorian client.",
    },
    {
      question: "How much does a project cost?",
      answer: `In Melbourne the first conversation can be on site or on a call. We use it to understand the workflow, the systems involved and the outcome you want, then scope the work before development begins. ${industryProjectCostAnswer}`,
    },
  ],
};

const cityContentBySlug: Record<string, LocationCityContent> = {
  brisbane,
  melbourne,
};

export function getLocationCityContent(slug: string) {
  return cityContentBySlug[slug];
}

export const locationCityContentSlugs = Object.keys(cityContentBySlug);
