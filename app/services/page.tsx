import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { serviceProcessSteps, services } from "@/lib/data";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Business Automation & Custom Software Services | 23Labs",
  path: "/services",
  description:
    "Explore 23Labs business automation, custom software development, API integration and systems integration services for growing Australian businesses.",
  ogTitle: "Automation & Software Services | 23Labs",
  ogDescription:
    "Business automation, custom software, integrations and web applications designed around how your organisation actually works.",
  keywords: [
    "business automation services",
    "custom software development",
    "systems integration",
    "API integration",
    "workflow automation",
  ],
});

export default function ServicesPage() {
  const primaryServices = services.filter((service) => service.slug !== "digital-products-web-applications");
  const secondaryService = services.find((service) => service.slug === "digital-products-web-applications");

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Automation and software built "
        highlight="around your business"
        body="From workflow automation and system integrations to complete custom software platforms, we design technology around the way your business actually operates."
        className="services-hero"
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="svc-rows reveal">
            {primaryServices.map((service, index) => (
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
                <Link href={`/services/${service.slug}`} className="work-link">
                  Explore {service.title} <span aria-hidden="true">{"→"}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {secondaryService ? (
        <section className="sec no-top">
          <div className="wrap">
            <Link href="/services/web-app-development" className="svc-secondary reveal">
              <ServiceIcon slug={secondaryService.slug} className="svc-ico svc-ico-sm" />
              <div className="svc-secondary-body">
                <span className="mono">Also available</span>
                <h4>{secondaryService.title}</h4>
                <p>{secondaryService.description}</p>
              </div>
              <span className="btn-arrow" aria-hidden="true">
                {"→"}
              </span>
            </Link>
          </div>
        </section>
      ) : null}

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

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          ],
        }}
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
