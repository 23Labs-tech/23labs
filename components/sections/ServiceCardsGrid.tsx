import Link from "next/link";
import { IndustryIcon } from "@/components/industries/IndustryIcon";

export type ServiceCardItem = {
  slug: string;
  href: string;
  title: string;
  description: string;
};

const SERVICE_ICON_BY_SLUG: Record<string, string> = {
  "business-process-automation": "automation",
  "system-integrations": "integration",
  "custom-software-development": "code",
  "ai-workflow-automation": "spark",
  "ai-agents": "ai",
  "ongoing-support": "support",
};

export function ServiceCardsGrid({ items }: { items: readonly ServiceCardItem[] }) {
  return (
    <div className="service-cards-grid reveal">
      {items.map((item) => (
        <Link href={item.href} className="service-card" key={item.slug}>
          <IndustryIcon icon={SERVICE_ICON_BY_SLUG[item.slug] ?? "automation"} className="service-card-icon" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span className="industry-link">
            Learn more <span className="btn-arrow" aria-hidden="true">{"→"}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
