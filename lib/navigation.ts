import { industryLinks } from "@/lib/industries";
import { solutionPath } from "@/lib/solutions";

export type MegaMenuItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export type MegaMenuColumn = {
  heading: string;
  items: MegaMenuItem[];
};

export type MegaMenuData = {
  key: "services" | "industries";
  label: string;
  href: string;
  panel: {
    eyebrow: string;
    heading: string;
    body: string;
    linkLabel: string;
  };
  columns: MegaMenuColumn[];
};

export const servicesMegaMenu: MegaMenuData = {
  key: "services",
  label: "Services",
  href: "/services",
  panel: {
    eyebrow: "Services",
    heading: "From problem to working system",
    body: "Automation, integrations, AI and custom software built around the way your business actually operates.",
    linkLabel: "Explore all services",
  },
  columns: [
    {
      heading: "Core services",
      items: [
        {
          icon: "automation",
          title: "Business Process Automation",
          description: "Remove repetitive admin, approvals and manual handoffs.",
          href: "/services/business-process-automation",
        },
        {
          icon: "integration",
          title: "System Integrations",
          description: "Connect the tools your business already relies on.",
          href: "/services/system-integrations",
        },
        {
          icon: "code",
          title: "Custom Software Development",
          description: "Build internal tools and software around your processes.",
          href: "/services/custom-software-development",
        },
        {
          icon: "spark",
          title: "AI Workflow Automation",
          description: "Use AI inside practical business workflows.",
          href: "/services/ai-workflow-automation",
        },
        {
          icon: "ai",
          title: "AI Agents",
          description: "Agents that retrieve information, interact with systems and complete approved tasks.",
          href: "/services/ai-agents",
        },
        {
          icon: "support",
          title: "Ongoing Support",
          description: "Keep systems reliable and improving after launch.",
          href: "/services/ongoing-support",
        },
      ],
    },
    {
      heading: "Popular use cases",
      items: [
        {
          icon: "chart",
          title: "Quoting and estimating",
          description: "Automate manual quoting, approvals and estimate creation.",
          href: solutionPath("automate-quoting"),
        },
        {
          icon: "team",
          title: "Client onboarding",
          description: "Connect CRM, project and operational systems when a client signs.",
          href: solutionPath("client-onboarding-automation"),
        },
        {
          icon: "document",
          title: "Document processing",
          description: "Extract, classify and move information from documents automatically.",
          href: solutionPath("ai-document-processing"),
        },
        {
          icon: "automation",
          title: "Reduce manual data entry",
          description: "Stop re-keying the same information into multiple systems.",
          href: solutionPath("reduce-manual-data-entry"),
        },
        {
          icon: "bell",
          title: "Respond to leads faster",
          description: "Route and follow up new enquiries without manual chasing.",
          href: solutionPath("lead-response-automation"),
        },
        {
          icon: "integration",
          title: "Connect CRM and accounting",
          description: "Keep records in sync instead of re-entering them twice.",
          href: solutionPath("connect-crm-and-accounting"),
        },
      ],
    },
  ],
};

const coreIndustrySlugs = ["freight-logistics", "construction", "trades-field-services", "recruitment"];
const otherIndustrySlugs = ["professional-services", "real-estate", "allied-health"];

const shortIndustryDescription: Record<string, string> = {
  "freight-logistics": "Job allocation, quoting, customer communication and operational workflows.",
  construction: "Projects, compliance, documentation and client communication.",
  "trades-field-services": "Jobs, scheduling, quoting, field data and customer handoffs.",
  recruitment: "Candidate intake, job board sync, onboarding and reporting.",
  "professional-services": "Reduce repetitive admin and connect client-facing systems.",
  "real-estate": "Improve enquiry, property and internal information workflows.",
  "allied-health": "Improve operational processes and connect existing systems.",
};

function industryMegaItems(slugs: string[]): MegaMenuItem[] {
  return slugs.flatMap((slug) => {
    const industry = industryLinks.find((item) => item.slug === slug);
    if (!industry) return [];
    return [
      {
        icon: industry.icon,
        title: industry.label,
        description: shortIndustryDescription[slug] ?? industry.description,
        href: industry.href,
      },
    ];
  });
}

export const industriesMegaMenu: MegaMenuData = {
  key: "industries",
  label: "Industries",
  href: "/industries",
  panel: {
    eyebrow: "Industries",
    heading: "Built around how your industry works",
    body: "We focus on operational businesses where disconnected systems and manual processes create unnecessary work.",
    linkLabel: "Explore all industries",
  },
  columns: [
    { heading: "Core industries", items: industryMegaItems(coreIndustrySlugs) },
    { heading: "Other businesses we support", items: industryMegaItems(otherIndustrySlugs) },
  ],
};
