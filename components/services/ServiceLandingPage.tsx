import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HowWeHelpShowcase } from "@/components/services/HowWeHelpShowcase";
import { JsonLd } from "@/components/site/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import {
  getServiceLandingPage,
  serviceApproachSteps,
  serviceFinalCta,
  type ServiceLandingPageData,
} from "@/lib/services";

export function ServiceLandingPage({ service }: { service: ServiceLandingPageData }) {
  const serviceName = service.hero.eyebrow.split(" / ")[1];
  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceLandingPage(slug))
    .filter((item): item is ServiceLandingPageData => Boolean(item));

  return (
    <>
      <header className="svc-hero">
        <div className="wrap svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <h1>{service.hero.title}</h1>
            <p className="lead">{service.hero.lead}</p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={service.hero.image.src}
              alt={service.hero.image.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <div className="sec-tag sec-tag-plain sec-tag-accent" style={{ justifyContent: "center" }}>
              The problem
            </div>
            <h2 className="sec-title">Where things usually break down</h2>
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
            <div className="sec-tag sec-tag-plain sec-tag-accent" style={{ justifyContent: "center" }}>
              How we help
            </div>
            <h2 className="sec-title">{serviceName}</h2>
            <p className="lead">{service.howWeHelp.intro}</p>
          </div>
          <HowWeHelpShowcase capabilities={service.howWeHelp.capabilities} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Practical use cases</div>
            <h2 className="sec-title">What this can look like</h2>
            <p className="lead">
              The examples below are illustrative use cases showing how this service could apply, not
              completed client projects.
            </p>
          </div>
          <div className="usecase-grid reveal">
            {service.useCases.map((useCase) => (
              <div className="usecase-card" key={useCase}>
                <span className="mono">Illustrative example</span>
                <p>{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Our approach</div>
            <h2 className="sec-title">How a project comes together</h2>
          </div>
          <div className="process-cards-grid reveal">
            {serviceApproachSteps.map((step) => (
              <article className="process-card-plain" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length ? (
        <section className="sec no-top">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-tag">Related services</div>
              <h2 className="sec-title">You might also need</h2>
            </div>
            <div className="related-links reveal">
              {relatedServices.map((item) => (
                <Link href={item.href} className="related-link" key={item.slug}>
                  <span className="mono">Services</span>
                  <h4>{item.navLabel}</h4>
                  <span className="btn-arrow" aria-hidden="true">
                    {"→"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{serviceFinalCta.title}</h2>
          <p>{serviceFinalCta.body}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{serviceFinalCta.label}</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: serviceName,
              name: serviceName,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
              },
              areaServed: {
                "@type": "State",
                name: "Victoria, Australia",
              },
              url: absoluteUrl(service.href),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: serviceName,
                  item: absoluteUrl(service.href),
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
