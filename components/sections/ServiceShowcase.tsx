import Link from "next/link";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { homeBuildItems } from "@/lib/data";

const ICON_BY_SLUG: Record<string, string> = {
  "business-process-automation": "automation",
  "system-integrations": "integration",
  "custom-software-development": "code",
  "ai-workflow-automation": "spark",
};

export function ServiceShowcase() {
  return (
    <div className="service-cards-grid cols-4 reveal">
      {homeBuildItems.map((item) => (
        <Link href={item.href} className="service-card" key={item.slug}>
          <IndustryIcon icon={ICON_BY_SLUG[item.slug] ?? "automation"} className="service-card-icon" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <span className="industry-link">Learn more</span>
        </Link>
      ))}
    </div>
  );
}
