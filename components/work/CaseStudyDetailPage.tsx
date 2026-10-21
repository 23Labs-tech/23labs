import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { JsonLd } from "@/components/site/JsonLd";
import type { CaseStudyDetail } from "@/lib/caseStudyDetails";
import { absoluteUrl } from "@/lib/seo";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

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

export function CaseStudyDetailPage({ caseStudy }: { caseStudy: CaseStudyDetail }) {
  return (
    <>
      <header className="svc-hero">
        <div className="wrap svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <div className="sec-tag">
              <Link href="/work" style={{ color: "inherit" }}>
                Work
              </Link>{" "}
              / {caseStudy.hero.eyebrow.split(" / ")[1]}
            </div>
            <div className="case-hero-logo">
              <Image
                src={caseStudy.hero.logo.src}
                alt={caseStudy.hero.logo.alt}
                fill
                sizes="150px"
              />
            </div>
            <h1>{caseStudy.hero.title}</h1>
            <div className="case-hero-meta">
              {caseStudy.hero.meta.map((item) => (
                <div className="case-hero-meta-item" key={item.label}>
                  <span className="mono">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={caseStudy.hero.image.src}
              alt={caseStudy.hero.image.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <SectionIntro eyebrow={caseStudy.challenge.eyebrow} title={caseStudy.challenge.title} />
          <div className="text-block reveal">
            {caseStudy.challenge.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow={caseStudy.solution.eyebrow} title={caseStudy.solution.title} />
          <div className="text-block reveal">
            {caseStudy.solution.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="workflow-row reveal">
            {caseStudy.solution.workflow.map((step, index) => (
              <Fragment key={step.key}>
                <div className="workflow-step">
                  <SystemIcon icon={step.icon} />
                  <span>{step.label}</span>
                </div>
                {index < caseStudy.solution.workflow.length - 1 ? (
                  <span className="workflow-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow={caseStudy.result.eyebrow} title={caseStudy.result.title} />
          <div className="text-block reveal">
            {caseStudy.result.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow={caseStudy.outcomes.eyebrow} title={caseStudy.outcomes.title} />
          <div className="outcome-grid cols-2 reveal">
            {caseStudy.outcomes.items.map((item) => (
              <article className="outcome-block" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro eyebrow={caseStudy.built.eyebrow} title={caseStudy.built.title} />
          <div className="text-block reveal">
            {caseStudy.built.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="system-badges reveal">
            {caseStudy.built.systems.map((system) => (
              <span className="system-badge" key={system.label}>
                <SystemIcon icon={system.icon} />
                {system.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{caseStudy.cta.title}</h2>
          <p>{caseStudy.cta.body}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              {caseStudy.cta.label} <span className="btn-arrow" aria-hidden="true">{"→"}</span>
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
              headline: caseStudy.hero.title,
              description: caseStudy.description,
              about: caseStudy.hero.meta.find((item) => item.label === "Client")?.value,
              mainEntityOfPage: absoluteUrl(`/work/${caseStudy.slug}`),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Work", item: absoluteUrl("/work") },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: caseStudy.hero.eyebrow.split(" / ")[1] || caseStudy.hero.eyebrow,
                  item: absoluteUrl(`/work/${caseStudy.slug}`),
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
