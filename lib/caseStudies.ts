export type CaseStudyResultChip = { value: string; label: string };
export type CaseStudyOutcome = { title: string; body: string };
export type CaseStudyWorkflowStep = { label: string; body?: string };
export type CaseStudySystem = { label: string; icon: string };
export type CaseStudyCopyPart = { text: string; href?: string };
export type CaseStudyStep = { title: string; body: string };

/** Optional long-form body. When present, the detail page renders these sections instead of the shorter legacy layout. */
export type CaseStudySection = {
  title: string;
  paragraphs?: CaseStudyCopyPart[][];
  steps?: CaseStudyStep[];
  list?: string[];
};

export type CaseStudyCta = {
  title: string;
  body: string;
  label?: string;
};

export type CaseStudy = {
  slug: string;
  date: string;
  name: string;
  logo?: { src: string; alt: string; contain?: boolean };
  category: string;
  industry?: string;
  location?: string;
  services: string[];
  headline: string;
  summary: string;
  heroImage: { src: string; alt: string };
  supportingImage?: { src: string; alt: string };
  cardResults: CaseStudyResultChip[];
  challenge?: string;
  solution?: string;
  workflow?: CaseStudyWorkflowStep[];
  workflowNote?: string;
  result?: string;
  outcomes?: CaseStudyOutcome[];
  outcomesNote?: string;
  systems?: CaseStudySystem[];
  metadataTitle: string;
  description: string;
  relatedCopy?: CaseStudyCopyPart[];
  /** Six narrative sections. The detail page adds the closing CTA after them. */
  sections?: CaseStudySection[];
  cta?: CaseStudyCta;
};

export const caseStudyServiceHrefs: Record<string, string> = {
  "Business Process Automation": "/services/business-process-automation",
  "System Integration": "/services/system-integrations",
  "Workflow Automation": "/services/business-process-automation",
  "Website Integration": "/services/system-integrations",
  "Website Development": "/services/custom-software-development",
  "Custom Development": "/services/custom-software-development",
  "Data Integration": "/services/system-integrations",
  Automation: "/services/business-process-automation",
};

export const caseStudiesCta = {
  title: "Got systems that should be working together?",
  body: "We help businesses connect existing platforms, remove repetitive admin and build better workflows around the way their teams already work.",
  label: "Talk to 23Labs",
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "huntress-recruitment",
    date: "2026-10-21",
    name: "Huntress Recruitment",
    logo: {
      src: "/work/huntress/huntress-logo.png",
      alt: "Huntress Recruitment logo",
      contain: true,
    },
    category: "System Integration",
    industry: "Recruitment",
    location: "New Zealand",
    services: ["System Integration", "Workflow Automation", "Website Integration", "Custom Development"],
    headline: "Bullhorn, SEEK and Website Integration for Huntress Recruitment",
    summary:
      "23Labs helped Huntress simplify how job information moved between its recruitment systems and public website, reducing repetitive administration and improving consistency.",
    heroImage: {
      src: "/work/huntress/hero.jpg",
      alt: "Recruitment team working together on laptops in a modern office",
    },
    cardResults: [
      { value: "3 connected systems", label: "Bullhorn, SEEK and WordPress" },
      { value: "Less manual admin", label: "Reduced duplicate data entry" },
      { value: "Better control", label: "Separate internal and public job data" },
    ],
    challenge:
      "Huntress Recruitment was managing job information across Bullhorn, SEEK and its WordPress website. Because each system handled information differently, recruiters were often required to manually update job details across multiple platforms. Public-facing information such as job titles and locations could also differ from the internal information stored inside Bullhorn. This created unnecessary administration, increased the risk of inconsistencies and made the publishing process more complicated than it needed to be.",
    supportingImage: {
      src: "/site-images/photos/team-meeting-discussion.png",
      alt: "A team discussing the Huntress Recruitment project around a meeting table",
    },
    solution:
      "23Labs mapped the existing workflow between Bullhorn, SEEK and the company website to understand where information was being duplicated and where the process could be simplified. We introduced dedicated public-facing fields for job titles and locations, allowing Huntress to keep its internal Bullhorn records structured correctly while controlling what candidates saw publicly. The connected workflow allowed job information to move more consistently between Bullhorn, SEEK and the website, reducing the need for manual re-entry and workarounds.",
    workflow: [
      {
        label: "Bullhorn",
        body: "Bullhorn remains the central system used by the Huntress team to manage vacancies and internal recruitment information. Instead of requiring the team to manually recreate information elsewhere, the workflow now starts from the data they are already managing inside Bullhorn.",
      },
      {
        label: "Public Job Fields",
        body: "We introduced separate public facing fields for information such as job titles, locations and other candidate facing details. This allows Huntress to keep internal Bullhorn information structured for operational purposes while controlling exactly what appears publicly.",
      },
      {
        label: "SEEK",
        body: "The relevant vacancy information can then be prepared consistently for SEEK without staff having to manually rewrite or maintain separate versions of the same job information.",
      },
      {
        label: "Website",
        body: "The Huntress website uses the same structured vacancy data, helping keep published jobs aligned across channels while reducing the amount of duplicate administration required internally.",
      },
    ],
    workflowNote:
      "The result is a simpler publishing workflow where information is managed from a central source and then prepared for each public channel in a more controlled and consistent way.",
    result:
      "Huntress gained a cleaner and more connected recruitment workflow. The team now has better control over public job information while continuing to use Bullhorn as the core recruitment system. The improvements helped reduce duplicate administration, improve consistency across platforms and create a more scalable process for publishing and managing vacancies.",
    outcomes: [
      {
        title: "Less duplicate administration",
        body: "Previously, vacancy information could require separate updates across Bullhorn, SEEK and the website. The new workflow reduces the amount of repetitive data entry required and gives the team a clearer process for managing changes.",
      },
      {
        title: "More consistent publishing",
        body: "Job information now follows a more structured path from Bullhorn through to the channels candidates actually see. This reduces inconsistencies in titles, locations and vacancy information across different platforms.",
      },
      {
        title: "Better control of public information",
        body: "Internal recruitment data does not always need to appear exactly the same way publicly. Huntress can now manage candidate facing titles, locations and other information separately while keeping Bullhorn structured around the way the internal team works.",
      },
      {
        title: "A more scalable recruitment workflow",
        body: "The process is easier to manage as vacancy volumes increase. Instead of adding more administration every time another job is published, the workflow creates a stronger foundation for managing larger numbers of vacancies across multiple channels.",
      },
    ],
    outcomesNote:
      "Rather than replacing Bullhorn or changing how the recruitment team works day to day, the solution improves how information moves between the systems Huntress already relies on.",
    systems: [
      { label: "Bullhorn", icon: "integration" },
      { label: "SEEK", icon: "eye" },
      { label: "WordPress", icon: "wordpress" },
    ],
    metadataTitle: "Bullhorn & SEEK Integration: Huntress Recruitment | 23Labs",
    description:
      "How 23Labs connected Bullhorn, SEEK and a WordPress site for NZ firm Huntress Recruitment, cutting duplicate job admin and keeping public job data consistent.",
    relatedCopy: [
      { text: "This is " },
      { text: "systems integration work", href: "/services/system-integrations" },
      {
        text: ": Bullhorn stays the system of record, and the public job fields are prepared for SEEK and the website without another round of retyping.",
      },
    ],
  },
  {
    slug: "corit-tech",
    date: "2026-08-15",
    name: "CorIT Tech",
    logo: {
      src: "/work/corit-tech.png",
      alt: "CorIT Tech logo",
    },
    category: "Onboarding Automation",
    industry: "IT Services and Technology",
    services: ["Business Process Automation", "System Integration", "Workflow Automation"],
    headline: "Client onboarding automation for CorIT Tech",
    summary:
      "23Labs connected CorIT Tech's CRM with its project management tools so onboarding information creates the project records and tasks, instead of staff copying the details across.",
    heroImage: {
      src: "/work/corit-tech.png",
      alt: "CorIT Tech logo",
    },
    supportingImage: {
      src: "/site-images/photos/workers-system-monitors.png",
      alt: "Two engineers reviewing connected system data across multiple monitors",
    },
    cardResults: [
      { value: "10+ hrs/month", label: "Reported admin time saved" },
      { value: "120+ hours", label: "If maintained across a year" },
      { value: "White-label", label: "Ongoing partnership" },
    ],
    metadataTitle: "Client Onboarding Automation for CorIT Tech | 23Labs",
    description:
      "CorIT Tech client onboarding now creates projects from CRM data. 23Labs connected the tools. Reported saving: more than 10 hours of admin per month.",
    cta: {
      title: "Closing CTA",
      body: "If a new client still means copying details into the next system, tell us how that handoff works today.",
      label: "Talk to 23Labs",
    },
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          [
            {
              text: "CorIT Tech is an IT services and technology business. Client onboarding, and the step from a new customer into project delivery, was taking more administration than it needed to.",
            },
          ],
          [
            {
              text: "23Labs built an automated onboarding workflow that connects CorIT Tech's CRM with its project management tools. The CRM stays the place where customer and onboarding information is kept. Relevant projects and tasks are created from that information, so the same details are not typed in again.",
            },
          ],
          [
            { text: "The aim was a more connected workflow, without replacing the software the business already used. That is " },
            { text: "business process automation", href: "/services/business-process-automation" },
            { text: " for IT companies, built as a " },
            { text: "CRM and project management integration", href: "/services/system-integrations" },
            {
              text: ". It is the kind of workflow automation 23Labs delivers for businesses in Australia.",
            },
          ],
        ],
      },
      {
        title: "The Challenge",
        paragraphs: [
          [
            {
              text: "CorIT Tech needed a more efficient way to manage client onboarding and the transition from customer information into project delivery.",
            },
          ],
          [
            {
              text: "The existing process was manual administrative work. Staff transferred information between systems and created the project records and tasks by hand. That repetition increased the chance of manual errors, and it used time that could have gone into client delivery.",
            },
          ],
        ],
      },
      {
        title: "Our Approach",
        paragraphs: [
          [
            {
              text: "The engagement followed a simple sequence. CorIT Tech kept the tools it already relied on.",
            },
          ],
        ],
        steps: [
          {
            title: "Assess the current process",
            body: "Walk through how a new client moved from onboarding into delivery, including where people copied information and created records by hand.",
          },
          {
            title: "Map the data flow",
            body: "Identify which customer and onboarding details had to reach the project records and tasks, and where that handoff broke down.",
          },
          {
            title: "Connect existing tools",
            body: "Join the systems already in use so the same information did not have to be entered a second time.",
          },
          {
            title: "Test",
            body: "Check that a new client produced the right project and tasks, and that staff were not still re-keying the same details.",
          },
          {
            title: "Hand over",
            body: "Leave the team with a workflow they could run as part of normal operations.",
          },
        ],
      },
      {
        title: "The Solution",
        paragraphs: [
          [
            {
              text: "23Labs built an automated onboarding workflow connecting CorIT Tech's CRM with its project management tools. The useful part is automated project creation: the project and its tasks come from the customer record, rather than from a fresh setup each time.",
            },
          ],
          [
            {
              text: "The objective was a connected workflow. CorIT Tech did not have to replace its existing software.",
            },
          ],
        ],
        list: [
          "The CRM is the central source of customer and onboarding information.",
          "Relevant projects and tasks are created from that CRM information.",
          "Staff no longer need to transfer customer details between systems by hand.",
          "Customer onboarding and project delivery stay more consistent with each other.",
          "The handoff from client acquisition to operational execution is simpler.",
        ],
      },
      {
        title: "How It Works",
        paragraphs: [
          [
            {
              text: "Before the change, customer information was held in one place and the project records were created somewhere else. Someone had to copy the details and set up the tasks.",
            },
          ],
          [{ text: "The workflow now runs in one direction:" }],
        ],
        steps: [
          {
            title: "Capture once",
            body: "Customer and onboarding information is recorded once, in the system the team already treats as the source of those details.",
          },
          {
            title: "Create the work",
            body: "That information creates the relevant project and the tasks that belong to it.",
          },
          {
            title: "Start delivery",
            body: "The people doing the work use those records, rather than a second copy of the same details.",
          },
          {
            title: "Same handoff each time",
            body: "Moving from a new client to operational work follows the same path.",
          },
        ],
      },
      {
        title: "The Outcome",
        paragraphs: [
          [
            {
              text: "CorIT Tech reported savings of more than 10 hours of admin per month. If that reported saving is maintained across a year, it comes to more than 120 hours.",
            },
          ],
          [
            {
              text: "The same workflow reduced repetitive data entry and left fewer opportunities for manual errors. Onboarding and project creation are more consistent, and information moves more reliably between the CRM and the project management tools.",
            },
          ],
          [
            {
              text: "After the initial engagement, CorIT Tech kept working with 23Labs and became a white-label partner.",
            },
          ],
        ],
        list: [
          "Reported savings of more than 10 hours of admin per month.",
          "More than 120 hours across a year, if that reported saving is maintained.",
          "Less repetitive data entry.",
          "Fewer opportunities for manual errors.",
          "More consistent onboarding and project creation.",
          "Clearer information flow between the CRM and the project management tools.",
          "An ongoing relationship, including a white-label partnership.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-workflow-automation",
    date: "2026-07-01",
    name: "Real Estate Office | Australia",
    category: "Workflow Automation",
    industry: "Real Estate",
    location: "Australia",
    services: ["Website Development", "Business Process Automation", "System Integration"],
    headline: "Real estate workflow automation for an Australian office",
    summary:
      "23Labs improved one Australian real estate office's website and connected customer enquiries with property records and internal follow-up.",
    heroImage: {
      src: "/site-images/industries/real-estate.jpg",
      alt: "Modern residential property exterior",
    },
    supportingImage: {
      src: "/site-images/photos/team-standup-tablet.png",
      alt: "A team member presenting an enquiry workflow to colleagues around a table",
    },
    cardResults: [
      { value: "Less manual follow-up", label: "On enquiries and handoffs" },
      { value: "Clearer tracking", label: "Of actions and enquiries" },
      { value: "Better visibility", label: "Across the office workflow" },
    ],
    metadataTitle: "Workflow Automation for a Real Estate Office | 23Labs",
    description:
      "Real estate workflow automation for one Australian office. 23Labs improved the website and connected property enquiries so follow-up is easier to track.",
    cta: {
      title: "Closing CTA",
      body: "If enquiries and property records still depend on someone remembering the next step, we can look at that workflow with you.",
      label: "Talk to 23Labs",
    },
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          [
            {
              text: "This project was for one real estate office in Australia. The office needed a clearer way to handle customer enquiries and property information, and a website that worked with the rest of the business.",
            },
          ],
          [
            {
              text: "23Labs worked on that website and on the workflows that connect customer enquiries with property-related records and internal processes. The aim was to improve how this office handled incoming information and coordinated internally, without replacing systems that were still in use.",
            },
          ],
          [
            { text: "The operational side is " },
            { text: "business process automation", href: "/services/business-process-automation" },
            { text: " and " },
            { text: "system integration", href: "/services/system-integrations" },
            {
              text: ". The website changes sit alongside our ",
            },
            { text: "custom software", href: "/services/custom-software-development" },
            {
              text: " work, where a site has to pass an enquiry into the business rather than only display a listing. The wider setting is on our ",
            },
            { text: "real estate", href: "/real-estate" },
            {
              text: " page. 23Labs offers business automation for real estate agencies. In this case the client was a single office.",
            },
          ],
        ],
      },
      {
        title: "The Challenge",
        paragraphs: [
          [
            {
              text: "The office needed to improve how customer enquiries and property information moved through the processes it already had.",
            },
          ],
          [
            {
              text: "Manual follow-ups and disconnected activities made it harder to keep visibility over enquiries, and harder to be sure the right people received the information they needed.",
            },
          ],
          [
            {
              text: "It also needed improvements to its website, and to the way its existing tools worked together.",
            },
          ],
        ],
      },
      {
        title: "Our Approach",
        paragraphs: [
          [
            {
              text: "The work followed a practical sequence: understand the current path, then connect what was already there.",
            },
          ],
        ],
        steps: [
          {
            title: "Assess the current process",
            body: "Follow an enquiry from the moment it arrived through to who followed it up, and where property information was updated by hand.",
          },
          {
            title: "Map the data flow",
            body: "Set out which details had to move from the enquiry to the property record, and who needed to know at each stage.",
          },
          {
            title: "Connect existing tools",
            body: "Join the places an enquiry arrived with the records the team already kept, instead of swapping those tools for something new.",
          },
          {
            title: "Test",
            body: "Confirm that an enquiry produced the right handoff and that the appropriate person was notified.",
          },
          {
            title: "Hand over",
            body: "Leave the office with a workflow the team could run without chasing each step.",
          },
        ],
      },
      {
        title: "The Solution",
        paragraphs: [
          [
            {
              text: "23Labs worked on the office website and put workflow improvements in place so customer enquiries connect with property-related records and internal processes. The website work is real estate website development for this office. The connections are ",
            },
            { text: "real estate system integration", href: "/services/system-integrations" },
            {
              text: " between enquiries and the records the team already used. Property enquiry automation is the operational result: a handoff, rather than another round of re-keying.",
            },
          ],
        ],
        list: [
          "Website redevelopment and improvements.",
          "Existing business tools and workflows connected.",
          "Handoffs between customer enquiries and property records handled by the workflow.",
          "Triggers that notify the appropriate person at the relevant stage.",
          "Less dependence on manual follow-up.",
          "Better visibility over enquiries and outstanding actions.",
        ],
      },
      {
        title: "How It Works",
        paragraphs: [
          [
            {
              text: "Before, an enquiry, the follow-up and the property information were separate activities. Someone had to remember the next action.",
            },
          ],
          [{ text: "Afterwards, the path is straightforward:" }],
        ],
        steps: [
          {
            title: "An enquiry comes in",
            body: "The details arrive through the office's existing enquiry path.",
          },
          {
            title: "The property record is updated",
            body: "The details that belong on the property record are added without a separate re-entry step.",
          },
          {
            title: "The right person is told",
            body: "The person who needs to act is notified at that stage.",
          },
          {
            title: "The next action stays visible",
            body: "Outstanding enquiries and actions stay visible, so follow-up sits inside the workflow.",
          },
        ],
      },
      {
        title: "The Outcome",
        paragraphs: [
          [
            {
              text: "The office has less manual follow-up. Actions and enquiries are easier to track, and the team has better visibility across the workflows that matter.",
            },
          ],
          [
            {
              text: "Communication and internal handoffs are more consistent. Website enquiries and the operational steps that follow them are better coordinated.",
            },
          ],
          [
            {
              text: "The objective was to improve how this office handled incoming information and internal coordination, without unnecessarily replacing existing systems.",
            },
          ],
        ],
        list: [
          "Less manual follow-up.",
          "Easier tracking of actions and enquiries.",
          "Better visibility across the relevant workflows.",
          "More consistent communication and internal handoffs.",
          "Improved coordination between website enquiries and operational processes.",
        ],
      },
    ],
  },
  {
    slug: "lily-olsen-counselling",
    date: "2026-05-01",
    name: "Lily Olsen Counselling",
    logo: {
      src: "/work/lily-olsen-counselling.png",
      alt: "Lily Olsen Counselling",
    },
    category: "Website Rebuild",
    industry: "Counselling",
    location: "Auckland, New Zealand",
    services: ["Web Development", "Brand-led Design", "Multi-page Build"],
    headline: "A calm, considered website rebuild for Lily Olsen Counselling",
    summary:
      "23Labs rebuilt Lily Olsen Counselling's website across four pages with a calm, considered design and a clear path to booking.",
    heroImage: {
      src: "/work/lily-olsen-counselling.png",
      alt: "Lily Olsen Counselling project image with counselling session photography and logo",
    },
    cardResults: [
      { value: "4-page rebuild", label: "Home, about, services, contact" },
      { value: "Easier to update", label: "Built for a non-technical owner" },
      { value: "Clear booking path", label: "Every page leads to booking" },
    ],
    challenge:
      "The existing site didn't reflect the calm, trustworthy feel a therapy practice needs, and key pages like services and booking pathways were scattered and hard to follow.",
    supportingImage: {
      src: "/site-images/photos/notes-planning-desk.png",
      alt: "Planning notes for the Lily Olsen Counselling website rebuild",
    },
    solution:
      "We rebuilt the site across four pages, home, about, services, and contact, with a consistent sage and ivory palette, soft scroll-triggered animation, and a single typeface throughout to keep the whole experience calm and unhurried.",
    result:
      "A cohesive, considered site where every page leads naturally toward booking a session, with a layout that's easy for a non-technical owner to keep updated.",
    outcomes: [
      { title: "A cohesive four-page site", body: "Home, about, services and contact pages share one consistent design." },
      { title: "A clear path to booking", body: "Every page leads naturally toward booking a session." },
      { title: "Calm, considered design", body: "A sage and ivory palette and single typeface keep the experience unhurried." },
      { title: "Easy to keep updated", body: "Built so a non-technical owner can manage it going forward." },
    ],
    metadataTitle: "Website Rebuild for Auckland Counselling Practice | 23Labs",
    description:
      "A four-page website rebuild for Auckland practice Lily Olsen Counselling, with a clear booking path and a layout a non-technical owner can update.",
    relatedCopy: [
      {
        text: "This was a website rebuild for a practice in Auckland, New Zealand. Where the need is an internal platform or a portal rather than a marketing site, that work is ",
      },
      { text: "software built around how the business operates", href: "/services/custom-software-development" },
      { text: "." },
    ],
  },
];

export function getAllCaseStudies() {
  return [...caseStudies].sort((a, b) => b.date.localeCompare(a.date));
}

export function getCaseStudySlugs() {
  return caseStudies.map((item) => item.slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
