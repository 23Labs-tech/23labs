import Link from "next/link";
import { CheckIcon, IndustryIcon } from "@/components/industries/IndustryIcon";
import { industryLinks, industryOverview, type IndustryPageData } from "@/lib/industries";

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

function IndustryHero({ hero }: { hero: IndustryPageData["hero"] | typeof industryOverview.hero }) {
  return (
    <header className="page-hero industry-hero">
      <div className="wrap reveal in">
        <div className="sec-tag">
          {hero.eyebrow.includes(" / ") ? (
            <>
              <Link href="/industries" style={{ color: "inherit" }}>
                Industries
              </Link>{" "}
              / {hero.eyebrow.split(" / ")[1]}
            </>
          ) : (
            hero.eyebrow
          )}
        </div>
        <h1>
          <SplitHeading title={hero.title} highlight={hero.highlight} />
        </h1>
        <p className="lead">{hero.lead}</p>
        <p className="lead-2">{hero.lead2}</p>
      </div>
    </header>
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

function Checklist({ items }: { items: readonly string[] }) {
  return (
    <div className="svc-checklist reveal">
      {items.map((item) => (
        <div className="svc-check" key={item}>
          <CheckIcon />
          {item}
        </div>
      ))}
    </div>
  );
}

function ProcessPanel({
  steps,
}: {
  steps: readonly {
    number: string;
    title: string;
    body: string;
  }[];
}) {
  return (
    <div className="panel-card reveal">
      <div className="process-list">
        {steps.map((step) => (
          <div className="process-row" key={step.number}>
            <div className="process-k">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
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
            Book a consultation <span className="btn-arrow" aria-hidden="true">{"\u2192"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IndustriesOverviewPage() {
  return (
    <>
      <IndustryHero hero={industryOverview.hero} />

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
                  Learn more <span className="btn-arrow" aria-hidden="true">{"\u2192"}</span>
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
          <Checklist items={industryOverview.fix.items} />
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

      <section className="sec no-top">
        <div className="wrap">
          <SectionHeading
            eyebrow={industryOverview.process.eyebrow}
            title={industryOverview.process.title}
            highlight={industryOverview.process.highlight}
          />
          <ProcessPanel steps={industryOverview.process.steps} />
        </div>
      </section>

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
    </>
  );
}

export function IndustryDetailPage({ industry }: { industry: IndustryPageData }) {
  return (
    <>
      <IndustryHero hero={industry.hero} />

      <section className="sec no-top">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we help with"
            title={industry.help.title}
            highlight={industry.help.highlight}
            body={industry.help.body}
          />
          <Checklist items={industry.help.items} />
        </div>
      </section>

      <section className="sec industry-detail">
        <div className="wrap">
          <SectionHeading eyebrow="The challenges" title="Common Problems We " highlight="Help Solve" />
          <div className="svc-rows reveal">
            {industry.challenges.map((challenge) => (
              <div className="svc-row industry-row" key={challenge.title}>
                <div className="svc-row-head">
                  <IndustryIcon icon={challenge.icon} className="svc-row-ico" />
                  <h3>{challenge.title}</h3>
                </div>
                <p>{challenge.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec no-top industry-detail">
        <div className="wrap">
          <SectionHeading eyebrow="What we build" title="What We Can " highlight="Build" />
          <div className="svc-grid reveal">
            {industry.builds.map((item) => (
              <div className={`svc${"span2" in item && item.span2 ? " span2" : ""}`} key={item.title}>
                <IndustryIcon icon={item.icon} className="svc-ico" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {"note" in industry && industry.note ? (
        <section className="sec">
          <div className="wrap">
            <SectionHeading
              eyebrow={industry.note.eyebrow}
              title={industry.note.title}
              highlight={industry.note.highlight}
            />
            <TextBlock paragraphs={industry.note.paragraphs} />
          </div>
        </section>
      ) : null}

      <section className="sec no-top">
        <div className="wrap">
          <SectionHeading eyebrow="How it works" title="Our " highlight="Process" />
          <ProcessPanel steps={industry.process} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="Why 23Labs" title={industry.why.title} highlight={industry.why.highlight} />
          <TextBlock paragraphs={industry.why.paragraphs} />
        </div>
      </section>

      <ConsultationCta title={industry.cta.title} body={industry.cta.body} />
    </>
  );
}
