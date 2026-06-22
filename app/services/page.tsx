import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps, services } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  path: "/services",
  description:
    "Explore 23Labs services across AI automation, web development, custom software, and data integration for growing businesses.",
  keywords: ["AI automation services", "web development", "custom software development", "data integration", "business automation"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Systems that do the "
        highlight="heavy lifting"
        body="Four ways we help businesses remove inefficiencies, work smarter, and scale, from quick automations through to full custom platforms."
      />

      <section className="section">
        <div className="container service-list">
          {services.map((service) => (
            <article className="service-row" id={service.slug} key={service.slug}>
              <div>
                <span className="service-eyebrow">{service.eyebrow}</span>
                <h2>{service.title}</h2>
              </div>
              <div>
                <p>{service.description}</p>
                <ul className="check-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Process" title="How we partner " highlight="with you" />
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                </div>
                <div>
                  <p className="lead">{step.lead}</p>
                  <p>{step.body}</p>
                  <p>
                    <strong>The result:</strong> {step.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure where to start?"
        body="Tell us where the friction is and we will map a practical path forward."
        href="/contact"
        label="Book a discovery call"
      />
    </>
  );
}
