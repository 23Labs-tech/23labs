import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HowWeHelpShowcase } from "@/components/services/HowWeHelpShowcase";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd, serviceJsonLd } from "@/lib/schema";
import { caseStudyPath, resolveCaseStudy } from "@/lib/caseStudyMatch";
import {
  getServiceLandingPage,
  servicePricingNote,
  type ServiceLandingPageData,
  type ServiceTextPart,
} from "@/lib/services";

function RichText({ parts }: { parts: readonly ServiceTextPart[] }) {
  return parts.map((part, index) =>
    part.href ? (
      <Link href={part.href} key={`${part.href}-${index}`}>
        {part.text}
      </Link>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

export function ServiceLandingPage({ service }: { service: ServiceLandingPageData }) {
  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceLandingPage(slug))
    .filter((item): item is ServiceLandingPageData => Boolean(item));

  const proofStudies = service.proof.studies.flatMap((item) => {
    const study = resolveCaseStudy(item.match);
    if (!study) return [];
    return [{ ...item, href: caseStudyPath(study) }];
  });

  return (
    <>
      <header className="svc-hero">
        <div className="hero-wide svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <h1>{service.hero.title}</h1>
            {service.hero.subheading ? <p className="hero-sub">{service.hero.subheading}</p> : null}
            <p className="lead">{service.hero.lead}</p>
            <div className="hero-actions">
              <ButtonLink href="/contact">{service.hero.ctaLabel}</ButtonLink>
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={service.hero.image.src}
              alt={service.hero.image.alt}
              fill
              preload
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{service.audience.heading}</h2>
            <p className="lead">{service.audience.intro}</p>
          </div>
          <div className="problem-grid reveal">
            {service.audience.items.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">{service.problem.heading}</h2>
            <p className="lead">{service.problem.intro}</p>
          </div>
          <div className="problem-grid reveal">
            {service.problem.items.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">{service.howWeHelp.heading}</h2>
            <p className="lead">{service.howWeHelp.intro}</p>
          </div>
          <HowWeHelpShowcase capabilities={service.howWeHelp.capabilities} />
        </div>
      </section>

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{service.boundary.heading}</h2>
          </div>
          <div className="text-block reveal">
            <p>
              <RichText parts={service.boundary.parts} />
            </p>
          </div>
        </div>
      </section>

      <ProcessSection
        layout="split"
        eyebrow="How we work"
        heading={service.engagement.heading}
        intro={service.engagement.intro}
        cta={{ href: "/contact", label: service.engagement.ctaLabel }}
        steps={service.engagement.steps}
      />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{service.useCases.heading}</h2>
            <p className="lead">{service.useCases.intro}</p>
          </div>
          <div className="usecase-grid reveal">
            {service.useCases.items.map((item) => (
              <div className="usecase-card" key={item.label}>
                <span className="mono">{item.label}</span>
                <p>{item.body}</p>
                {item.links?.length ? (
                  <div className="usecase-links">
                    {item.links.map((link) => (
                      <Link href={link.href} className="work-link" key={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{service.proof.heading}</h2>
          </div>
          <div className="text-block reveal">
            <p>
              <RichText parts={service.proof.intro} />
            </p>
          </div>
          {proofStudies.length ? (
            <div className="usecase-grid follow reveal">
              {proofStudies.map((item) => (
                <div className="usecase-card" key={item.href}>
                  <span className="mono">{item.relation === "contrast" ? "Related project" : "Case study"}</span>
                  <h3>{item.label}</h3>
                  <p>{item.summary}</p>
                  <Link href={item.href} className="work-link">
                    Read the project
                  </Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {relatedServices.length ? (
        <section className="sec no-top related-sec">
          <div className="wrap">
            <div className="sec-head related-head reveal">
              <h2 className="sec-title">You might also need</h2>
            </div>
            <div className="related-links reveal">
              {relatedServices.map((item) => (
                <Link href={item.href} className="related-link" key={item.slug}>
                  <div className="related-link-body">
                    <h3>{item.navLabel}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FaqAccordion items={service.faqs} idPrefix={`faq-${service.slug}`} />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{service.cta.title}</h2>
          <p>{service.cta.body}</p>
          <p>{servicePricingNote}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{service.cta.label}</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            serviceJsonLd({
              name: service.navLabel,
              description: service.description,
              path: service.href,
            }),
            faqPageJsonLd(service.href, service.faqs),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.navLabel, path: service.href },
            ]),
          ],
        }}
      />
    </>
  );
}
