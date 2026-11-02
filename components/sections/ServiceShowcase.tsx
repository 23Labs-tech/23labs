import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { serviceLandingPages } from "@/lib/services";

const images: Record<string, { src: string; alt: string }> = {
  "business-process-automation": {
    src: "/site-images/photos/factory-automation-review.png",
    alt: "Two people reviewing automated equipment on a production floor",
  },
  "system-integrations": {
    src: "/site-images/industries/trades-field-services.jpg",
    alt: "A field technician wiring a control panel",
  },
  "ai-workflow-automation": {
    src: "/site-images/photos/workers-system-monitors.png",
    alt: "Two engineers reviewing system data across multiple monitors",
  },
  "custom-software-development": {
    src: "/site-images/photos/field-team-laptop-review.png",
    alt: "Two team members reviewing information together on a laptop",
  },
  "ai-agents": {
    src: "/site-images/industries/construction.jpg",
    alt: "Workers securing reinforcement bar on a construction site",
  },
  "ongoing-support": {
    src: "/site-images/photos/dashboard-laptop-review.png",
    alt: "A person reviewing a software dashboard on a laptop",
  },
};

export function ServiceShowcase() {
  return (
    <div className="svc-showcase-grid">
      {serviceLandingPages.map((service) => {
        const image = images[service.slug];
        return (
          <article className="svc-showcase-card reveal" key={service.slug}>
            <div className="svc-showcase-media">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
              />
            </div>
            <h3>{service.navLabel}</h3>
            <p>{service.cardDescription}</p>
            <ButtonLink href={service.href} variant="secondary" className="svc-showcase-btn">
              Explore service
            </ButtonLink>
          </article>
        );
      })}
    </div>
  );
}
