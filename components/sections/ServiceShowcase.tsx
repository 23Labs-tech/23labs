import Image from "next/image";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/lib/data";

const panelImages: Record<string, string> = {
  "business-automation": "/site-images/tech-img-06.png",
  "custom-software-development": "/site-images/tech-img-10.png",
  "systems-integrations": "/site-images/tech-img-11.png",
  "digital-products-web-applications": "/site-images/tech-img-14.png",
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
            <div className="service-panel-meta">
              <ServiceIcon slug={service.slug} className="service-panel-ico" />
              <span className="mono">{service.eyebrow}</span>
            </div>
            <h3>{service.homeTitle}</h3>
            <p>{service.summary}</p>
            <Link href={`/services/${service.slug}`} className="work-link">
              Explore {service.homeTitle} <span aria-hidden="true">{"→"}</span>
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
