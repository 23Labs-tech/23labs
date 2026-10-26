import Link from "next/link";
import {
  AgentVisual,
  AutomationVisual,
  DocumentVisual,
  SoftwareVisual,
} from "@/components/ui/BuildVisuals";
import { services } from "@/lib/data";

const visuals: Record<string, React.ComponentType> = {
  "business-process-automation": AutomationVisual,
  "ai-workflow-automation": DocumentVisual,
  "custom-software-development": SoftwareVisual,
  "ai-agents": AgentVisual,
};

const sizeBySlug: Record<string, string> = {
  "business-process-automation": "xl",
  "ai-workflow-automation": "sm",
  "custom-software-development": "lg",
  "ai-agents": "lg",
};

const toneBySlug: Record<string, string> = {
  "business-process-automation": "tone-sky",
  "ai-workflow-automation": "tone-lilac",
  "custom-software-development": "tone-plain",
  "ai-agents": "tone-mint",
};

export function ServiceShowcase() {
  return (
    <div className="build-grid">
      {services.map((service) => {
        const Visual = visuals[service.slug];
        return (
          <article
            className={`build-card ${sizeBySlug[service.slug]} ${toneBySlug[service.slug]} reveal`}
            key={service.slug}
          >
            <div className="build-visual">
              <Visual />
            </div>
            <div className="build-body">
              <h3>{service.homeTitle}</h3>
              <p>{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="build-link">
                Learn More <span className="btn-arrow" aria-hidden="true">{"→"}</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
