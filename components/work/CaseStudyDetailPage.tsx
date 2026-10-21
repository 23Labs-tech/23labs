import Image from "next/image";
import Link from "next/link";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { JsonLd } from "@/components/site/JsonLd";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudiesCta } from "@/lib/caseStudies";
import { absoluteUrl } from "@/lib/seo";

function SystemIcon({ icon }: { icon: string }) {
  if (icon === "wordpress") {
    return (
      <div className="svc-ico">
        <div className="workflow-step-icon-img">
          <Image src="/work/huntress/wordpress-mark.png" alt="" fill sizes="18px" />
        </div>
      </div>
    );
  }
  return <IndustryIcon icon={icon} className="svc-ico" />;
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal">
      <div className="sec-tag case-section-eyebrow">{eyebrow}</div>
      <h2 className="case-section-title">{title}</h2>
    </div>
  );
}

export function CaseStudyDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  const metaItems = [
    { label: "Client", value: caseStudy.name },
    ...(caseStudy.industry ? [{ label: "Industry", value: caseStudy.industry }] : []),
    ...(caseStudy.location ? [{ label: "Location", value: caseStudy.location }] : []),
    { label: "Services", value: caseStudy.services.join(", ") },
  ];

  return (
    <div className="case-detail">
      <header className="svc-hero">
        <div className="wrap svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <div className="sec-tag">
              <Link href="/work" style={{ color: "inherit" }}>
                Case Studies
              </Link>{" "}
              / {caseStudy.name}
            </div>
            {caseStudy.logo?.contain ? (
              <div className="case-hero-logo">
                <Image src={caseStudy.logo.src} alt={caseStudy.logo.alt} fill sizes="150px" />
              </div>
            ) : null}
            <h1>{caseStudy.headline}</h1>
            <p className="lead">{caseStudy.summary}</p>
            <div className="case-hero-meta">
              {metaItems.map((item) => (
                <div className="case-hero-meta-item" key={item.label}>
                  <span className="mono">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={caseStudy.heroImage.src}
              alt={caseStudy.heroImage.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <SectionIntro eyebrow="The challenge" title="The problem before 23Labs" />
          <div className="text-block reveal">
            <p>{caseStudy.challenge}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow="The solution" title="What 23Labs built" />
          <div className="text-block reveal">
            <p>{caseStudy.solution}</p>
          </div>
          {caseStudy.workflow ? (
            <>
              <div className="cs-flow-summary reveal">
                {caseStudy.workflow.map((step, index) => (
                  <span key={step.label}>
                    {index > 0 ? <span className="cs-flow-arrow">{"→"} </span> : null}
                    {step.label}
                  </span>
                ))}
              </div>
              <div className="cs-flow-list">
                {caseStudy.workflow.map((step) =>
                  step.body ? (
                    <div className="cs-flow-item reveal" key={step.label}>
                      <h3>{step.label}</h3>
                      <p>{step.body}</p>
                    </div>
                  ) : null
                )}
              </div>
              {caseStudy.workflowNote ? <p className="cs-note reveal">{caseStudy.workflowNote}</p> : null}
            </>
          ) : null}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow="The result" title="What changed" />
          <div className="text-block reveal">
            <p>{caseStudy.result}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow="Key outcomes" title={`What changed for ${caseStudy.name}`} />
          <div className="cs-outcomes-text reveal">
            {caseStudy.outcomes.map((item) => (
              <div className="cs-outcome-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          {caseStudy.outcomesNote ? <p className="cs-note reveal">{caseStudy.outcomesNote}</p> : null}
        </div>
      </section>

      {caseStudy.systems ? (
        <section className="sec">
          <div className="wrap">
            <SectionIntro eyebrow="Technology" title="Systems involved" />
            <div className="system-badges reveal">
              {caseStudy.systems.map((system) => (
                <span className="system-badge" key={system.label}>
                  <SystemIcon icon={system.icon} />
                  {system.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{caseStudiesCta.title}</h2>
          <p>{caseStudiesCta.body}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              {caseStudiesCta.label} <span className="btn-arrow" aria-hidden="true">{"→"}</span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: caseStudy.headline,
              description: caseStudy.description,
              about: caseStudy.name,
              mainEntityOfPage: absoluteUrl(`/case-studies/${caseStudy.slug}`),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Case Studies", item: absoluteUrl("/work") },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: caseStudy.name,
                  item: absoluteUrl(`/case-studies/${caseStudy.slug}`),
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
