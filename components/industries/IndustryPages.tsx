import Image from "next/image";
import Link from "next/link";
import { CheckIcon, IndustryIcon } from "@/components/industries/IndustryIcon";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JsonLd } from "@/components/site/JsonLd";
import {
  industryLinks,
  industryOverview,
  industryProcess,
  industrySomethingElseCta,
  type IndustryPageData,
} from "@/lib/industries";
import { absoluteUrl } from "@/lib/seo";

const buildIconServiceHref: Record<string, string> = {
  automation: "/services/business-process-automation",
  ai: "/services/ai-agents",
  message: "/services/ai-agents",
  software: "/services/full-stack-software-development",
  dashboard: "/services/full-stack-software-development",
  portal: "/services/full-stack-software-development",
  integration: "/services/business-process-automation",
};

type SplitHeadingProps = {
  title: string;
  highlight?: string;
  after?: string;
};

function SplitHeading({ title, highlight, after }: SplitHeadingProps) {
  return (
    <>
      {title}
      {highlight ? <span className="em">{highlight}</span> : null}
      {after}
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  highlight,
  after,
  body,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  after?: string;
  body?: string;
}) {
  return (
    <div className="sec-head industry-sec-head reveal">
      <div className="sec-tag">{eyebrow}</div>
      <h2 className="sec-title">
        <SplitHeading title={title} highlight={highlight} after={after} />
      </h2>
      {body ? <p className="lead">{body}</p> : null}
    </div>
  );
}

function TextBlock({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="text-block reveal">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function ConsultationCta({ title, body }: { title: string; body: string }) {
  return (
    <section className="sec">
      <div className="wrap cta-band reveal">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Book a discovery call <span className="btn-arrow" aria-hidden="true">{"→"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SomethingElseCta() {
  return (
    <section className="sec no-top">
      <div className="wrap">
        <div className="inline-cta reveal">
          <h2>{industrySomethingElseCta.title}</h2>
          <p>{industrySomethingElseCta.body}</p>
          <p>
            <strong>{industrySomethingElseCta.label}</strong>
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              {industrySomethingElseCta.cta} <span className="btn-arrow" aria-hidden="true">{"→"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesOverviewPage() {
  return (
    <>
      <header className="page-hero industry-hero">
        <div className="wrap reveal in">
          <div className="sec-tag">{industryOverview.hero.eyebrow}</div>
          <h1>
            <SplitHeading title={industryOverview.hero.title} highlight={industryOverview.hero.highlight} />
          </h1>
          <p className="lead">{industryOverview.hero.lead}</p>
          <p className="lead-2">{industryOverview.hero.lead2}</p>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <SectionHeading eyebrow="Who we work with" title="Industries We " highlight="Work With" />
          <div className="industry-grid reveal">
            {industryLinks.map((industry) => (
              <Link href={industry.href} className="industry-card industry-card-link" key={industry.slug}>
                <IndustryIcon icon={industry.icon} />
                <h3>{industry.label}</h3>
                <p>{industry.description}</p>
                <span className="industry-link">
                  Learn more <span className="btn-arrow" aria-hidden="true">{"→"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            eyebrow={industryOverview.fix.eyebrow}
            title={industryOverview.fix.title}
            highlight={industryOverview.fix.highlight}
            body={industryOverview.fix.body}
          />
          <div className="svc-checklist reveal">
            {industryOverview.fix.items.map((item) => (
              <div className="svc-check" key={item}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            eyebrow={industryOverview.approach.eyebrow}
            title={industryOverview.approach.title}
            highlight={industryOverview.approach.highlight}
            after={industryOverview.approach.after}
          />
          <TextBlock paragraphs={industryOverview.approach.paragraphs} />
        </div>
      </section>

      <ProcessSection
        eyebrow={industryOverview.process.eyebrow}
        heading={
          <>
            {industryOverview.process.title}
            {industryOverview.process.highlight ? (
              <span className="em">{industryOverview.process.highlight}</span>
            ) : null}
          </>
        }
        steps={industryOverview.process.steps}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            eyebrow={industryOverview.why.eyebrow}
            title={industryOverview.why.title}
            highlight={industryOverview.why.highlight}
          />
          <TextBlock paragraphs={industryOverview.why.paragraphs} />
        </div>
      </section>

      <ConsultationCta title={industryOverview.cta.title} body={industryOverview.cta.body} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Industries", item: absoluteUrl("/industries") },
          ],
        }}
      />
    </>
  );
}

export function IndustryDetailPage({ industry }: { industry: IndustryPageData }) {
  const industryLabel = industry.hero.eyebrow.split(" / ")[1] || industry.hero.eyebrow;

  return (
    <>
      <header className="svc-hero">
        <div className="wrap svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <div className="sec-tag">
              <Link href="/industries" style={{ color: "inherit" }}>
                Industries
              </Link>{" "}
              / {industryLabel}
            </div>
            <h1>
              <SplitHeading title={industry.hero.title} highlight={industry.hero.highlight} />
            </h1>
            <p className="lead">{industry.hero.lead}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a discovery call <span className="btn-arrow" aria-hidden="true">{"→"}</span>
              </Link>
              <Link href="#build" className="btn btn-ghost">
                See what we can automate
              </Link>
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={industry.hero.image.src}
              alt={industry.hero.image.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <TextBlock paragraphs={industry.intro.paragraphs} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            eyebrow={industry.problems.eyebrow}
            title={industry.problems.title}
            highlight={industry.problems.highlight}
          />
          <div className="problem-grid reveal">
            {industry.problems.items.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            eyebrow={industry.help.eyebrow}
            title={industry.help.title}
            highlight={industry.help.highlight}
            body={industry.help.body}
          />
          <div className="svc-grid reveal">
            {industry.help.services.map((service) => (
              <Link href={service.href} className="svc" key={service.name}>
                <IndustryIcon icon={service.icon} className="svc-ico" />
                <h3>{service.name}</h3>
                <p>{service.body}</p>
                <span className="work-link">
                  Learn more <span aria-hidden="true">{"→"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="build">
        <div className="wrap">
          <SectionHeading eyebrow={industry.builds.eyebrow} title={industry.builds.title} highlight={industry.builds.highlight} />
          <div className="svc-grid reveal">
            {industry.builds.items.map((item) => {
              const href = buildIconServiceHref[item.icon];
              const content = (
                <>
                  <IndustryIcon icon={item.icon} className="svc-ico" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {href ? (
                    <span className="work-link">
                      Learn more <span aria-hidden="true">{"→"}</span>
                    </span>
                  ) : null}
                </>
              );

              return href ? (
                <Link href={href} className="svc" key={item.title}>
                  {content}
                </Link>
              ) : (
                <div className="svc" key={item.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SomethingElseCta />

      <ProcessSection
        eyebrow={industryProcess.eyebrow}
        heading={
          <>
            {industryProcess.title}
            <span className="em">{industryProcess.highlight}</span>
          </>
        }
        steps={industryProcess.steps}
      />

      <ConsultationCta title={industry.cta.title} body={industry.cta.body} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Industries", item: absoluteUrl("/industries") },
            {
              "@type": "ListItem",
              position: 3,
              name: industryLabel,
              item: absoluteUrl(industry.href),
            },
          ],
        }}
      />
    </>
  );
}
