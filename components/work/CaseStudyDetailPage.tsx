import Image from "next/image";
import Link from "next/link";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { JsonLd } from "@/components/site/JsonLd";
import type { CaseStudy, CaseStudyCopyPart, CaseStudySection } from "@/lib/caseStudies";
import { caseStudiesCta, caseStudyServiceHrefs } from "@/lib/caseStudies";
import { articleJsonLd, breadcrumbList } from "@/lib/schema";

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

function SectionIntro({ title }: { title: string }) {
  return (
    <div className="reveal">
      <h2 className="case-section-title">{title}</h2>
    </div>
  );
}

function CopyParagraph({ parts }: { parts: CaseStudyCopyPart[] }) {
  return (
    <p>
      {parts.map((part, index) =>
        part.href ? (
          <Link href={part.href} key={`${part.href}-${index}`}>
            {part.text}
          </Link>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </p>
  );
}

function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <header className="svc-hero">
      <div className="wrap svc-hero-in">
        <div className="reveal in svc-hero-copy">
          <div className="mono">
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
            {caseStudy.industry ? (
              <div className="case-hero-meta-item">
                <span className="mono">Industry</span>
                <strong>{caseStudy.industry}</strong>
              </div>
            ) : null}
            {caseStudy.location ? (
              <div className="case-hero-meta-item">
                <span className="mono">Location</span>
                <strong>{caseStudy.location}</strong>
              </div>
            ) : null}
            <div className="case-hero-meta-item">
              <span className="mono">Services Provided</span>
              {caseStudy.services.map((service) => {
                const href = caseStudyServiceHrefs[service];
                return href ? (
                  <Link href={href} className="case-service-link" key={service}>
                    {service}
                  </Link>
                ) : (
                  <strong key={service}>{service}</strong>
                );
              })}
            </div>
          </div>
        </div>
        <div className="reveal in svc-hero-media">
          <Image
            src={caseStudy.heroImage.src}
            alt={caseStudy.heroImage.alt}
            fill
            preload
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </header>
  );
}

function NarrativeSection({
  section,
  caseStudy,
  first = false,
}: {
  section: CaseStudySection;
  caseStudy: CaseStudy;
  first?: boolean;
}) {
  const showSupportingImage = section.title === "The Solution" && caseStudy.supportingImage;

  return (
    <section className={first ? "sec no-top" : "sec"}>
      <div className="wrap">
        <SectionIntro title={section.title} />
        <div className="text-block reveal">
          {section.paragraphs?.map((paragraph, index) => (
            <CopyParagraph parts={paragraph} key={`${section.title}-p-${index}`} />
          ))}
          {section.list?.length ? (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.steps?.length ? (
            <ol className="cs-steps">
              {section.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.body}
                </li>
              ))}
            </ol>
          ) : null}
        </div>
        {showSupportingImage && caseStudy.supportingImage ? (
          <div className="cs-supporting-image reveal">
            <Image
              src={caseStudy.supportingImage.src}
              alt={caseStudy.supportingImage.alt}
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function NarrativeBody({ caseStudy }: { caseStudy: CaseStudy }) {
  const cta = caseStudy.cta ?? {
    title: "Closing CTA",
    body: caseStudiesCta.body,
    label: caseStudiesCta.label,
  };

  return (
    <>
      {caseStudy.sections?.map((section, index) => (
        <NarrativeSection section={section} caseStudy={caseStudy} first={index === 0} key={section.title} />
      ))}
      <section className="sec" id="closing-cta">
        <div className="wrap cs-closing">
          <SectionIntro title={cta.title} />
          <div className="text-block reveal">
            <p>{cta.body}</p>
          </div>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-primary">
              {cta.label ?? caseStudiesCta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function LegacyBody({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <section className="sec no-top">
        <div className="wrap">
          <SectionIntro title="The problem before 23Labs" />
          <div className="text-block reveal">
            <p>{caseStudy.challenge}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionIntro title="What 23Labs built" />
          <div className="text-block reveal">
            <p>{caseStudy.solution}</p>
          </div>
          {caseStudy.supportingImage ? (
            <div className="cs-supporting-image reveal">
              <Image
                src={caseStudy.supportingImage.src}
                alt={caseStudy.supportingImage.alt}
                fill
                sizes="(max-width: 900px) 100vw, 1100px"
              />
            </div>
          ) : null}
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
          <SectionIntro title="What changed" />
          <div className="text-block reveal">
            <p>{caseStudy.result}</p>
          </div>
        </div>
      </section>

      {caseStudy.outcomes?.length ? (
        <section className="sec">
          <div className="wrap">
            <SectionIntro title={`What changed for ${caseStudy.name}`} />
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
      ) : null}

      {caseStudy.relatedCopy?.length ? (
        <section className="sec">
          <div className="wrap">
            <SectionIntro title="Where this fits" />
            <div className="text-block reveal">
              <CopyParagraph parts={caseStudy.relatedCopy} />
            </div>
          </div>
        </section>
      ) : null}

      {caseStudy.systems ? (
        <section className="sec">
          <div className="wrap">
            <SectionIntro title="Systems involved" />
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
              {caseStudiesCta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function CaseStudyDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case-detail">
      <CaseStudyHero caseStudy={caseStudy} />
      {caseStudy.sections?.length ? <NarrativeBody caseStudy={caseStudy} /> : <LegacyBody caseStudy={caseStudy} />}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleJsonLd({
              headline: caseStudy.headline,
              description: caseStudy.description,
              datePublished: caseStudy.date,
              image: caseStudy.heroImage.src,
              about: caseStudy.name,
              path: `/case-studies/${caseStudy.slug}`,
            }),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/work" },
              { name: caseStudy.name, path: `/case-studies/${caseStudy.slug}` },
            ]),
          ],
        }}
      />
    </div>
  );
}
