import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

const images: Record<string, { src: string; alt: string }> = {
  "business-process-automation": {
    src: "/site-images/photos/team-dashboard-presentation.png",
    alt: "A team reviewing a performance dashboard presented on a screen during a meeting",
  },
  "ai-workflow-automation": {
    src: "/site-images/photos/office-analytics-overlay.png",
    alt: "Business analytics charts displayed in an office setting",
  },
  "custom-software-development": {
    src: "/site-images/photos/dashboard-laptop-review.png",
    alt: "A person reviewing a software dashboard on a laptop",
  },
  "ai-agents": {
    src: "/site-images/photos/ai-network-diagram.png",
    alt: "A diagram showing an AI system connected to business documents and reporting",
  },
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
        const image = images[service.slug];
        return (
          <article
            className={`build-card ${sizeBySlug[service.slug]} ${toneBySlug[service.slug]} reveal`}
            key={service.slug}
          >
            <div className="build-visual">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
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
