import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { JsonLd } from "@/components/site/JsonLd";
import { caseStudies } from "@/lib/data";
import { getPostBySlug } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceLandingPageData } from "@/lib/services";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ServiceLandingPage({ service }: { service: ServiceLandingPageData }) {
  const relatedCaseStudies = service.relatedCaseStudies
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter((item): item is (typeof caseStudies)[number] => Boolean(item));

  const relatedReading = service.relatedReading
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<ReturnType<typeof getPostBySlug>> => Boolean(post));

  return (
    <>
      <header className="page-hero services-hero">
        <div className="wrap reveal in">
          <div className="sec-tag">
            <Link href="/services" style={{ color: "inherit" }}>
              Services
            </Link>{" "}
            / {service.hero.eyebrow.split(" / ")[1]}
          </div>
          <h1>
            {service.hero.title}
            {service.hero.highlight ? <span className="em">{service.hero.highlight}</span> : null}
          </h1>
          <p className="lead">{service.hero.lead}</p>
          {service.hero.lead2 ? <p className="lead-2">{service.hero.lead2}</p> : null}
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="text-block reveal narrow">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{service.included.title}</h2>
          </div>
          <div className="svc-checklist reveal">
            {service.included.items.map((item) => (
              <div className="svc-check" key={item}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.fit ? (
        <section className="sec no-top">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2 className="sec-title">{service.fit.title}</h2>
            </div>
            <div className="fit-grid reveal">
              <div className="fit-col">
                <h3>{service.fit.goodTitle}</h3>
                <div className="svc-checklist">
                  {service.fit.good.map((item) => (
                    <div className="svc-check" key={item}>
                      <CheckIcon />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="fit-col">
                <h3>{service.fit.notYetTitle}</h3>
                <div className="svc-checklist">
                  {service.fit.notYet.map((item) => (
                    <div className="svc-check" key={item}>
                      <CheckIcon />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {relatedCaseStudies.length ? (
        <section className="sec no-top">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-tag">Related work</div>
              <h2 className="sec-title">See it in practice</h2>
            </div>
            <div className="related-links reveal">
              {relatedCaseStudies.map((item) => (
                <Link href={`/work#${item.slug}`} className="related-link" key={item.slug}>
                  <span className="mono">{item.type}</span>
                  <h4>{item.name}</h4>
                  <span className="btn-arrow" aria-hidden="true">
                    {"→"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedReading.length ? (
        <section className="sec no-top">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-tag">Related reading</div>
              <h2 className="sec-title">Learn more</h2>
            </div>
            <div className="related-links reveal">
              {relatedReading.map((post) => (
                <Link href={`/blog/${post.slug}`} className="related-link" key={post.slug}>
                  <span className="mono">{post.categories[0] || "Insights"}</span>
                  <h4>{post.title}</h4>
                  <span className="btn-arrow" aria-hidden="true">
                    {"→"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection title={service.cta.title} body={service.cta.body} href="/contact" label="Talk to us" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: service.hero.eyebrow.split(" / ")[1],
              name: service.hero.eyebrow.split(" / ")[1],
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
                { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: service.hero.eyebrow.split(" / ")[1],
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
