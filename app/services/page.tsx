import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { serviceProcessSteps, services } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  path: "/services",
  description:
    "Four ways 23Labs helps businesses remove inefficiencies, work smarter, and scale: AI automation, web development, app and software development, and data integration.",
  keywords: ["AI automation services", "web development", "custom software development", "data integration", "business automation"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Systems that do the "
        highlight="heavy lifting"
        body="Four ways we help businesses remove inefficiencies, work smarter, and scale, from quick automations through to full custom platforms."
        className="services-hero"
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="svc-rows reveal">
            {services.map((service, index) => (
              <article className="svc-row" id={service.slug} key={service.slug}>
                <div className="svc-row-head">
                  <ServiceIcon slug={service.slug} className="svc-row-ico" />
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="svc-checklist">
                  {service.features.map((feature) => (
                    <div className="svc-check" key={feature}>
                      <CheckIcon />
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="How we work" title="From first call to " highlight="long-term support" />
          <div className="panel-card panel-values reveal">
            <div className="values-grid">
              {serviceProcessSteps.map((step) => (
                <article className="value-card" key={step.number}>
                  <div className="value-k">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which service you need?"
        body="Tell us what you're working on and we'll point you in the right direction, no obligation."
        href="/contact"
        label="Talk to us"
      />
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
