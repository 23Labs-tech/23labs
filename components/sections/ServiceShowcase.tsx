import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

const panelImages: Record<string, string> = {
  "business-process-automation": "/site-images/tech-img-07.png",
  "ai-workflow-automation": "/site-images/tech-img-06.png",
  "full-stack-software-development": "/site-images/tech-img-08.png",
  "ai-agents": "/site-images/tech-img-05.png",
};

export function ServiceShowcase() {
  return (
    <div className="service-stack">
      {services.map((service, index) => (
        <article
          className="service-panel"
          style={{ top: `${96 + index * 18}px`, zIndex: index + 1 }}
          key={service.slug}
        >
          <div className="service-panel-copy">
            <h3>{service.homeTitle}</h3>
            <p>{service.summary}</p>
            <Link href={`/services/${service.slug}`} className="service-panel-cta">
              Learn More
            </Link>
          </div>
          <div className="service-panel-media">
            <Image
              src={panelImages[service.slug]}
              alt={`Visual representing ${service.homeTitle}`}
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
