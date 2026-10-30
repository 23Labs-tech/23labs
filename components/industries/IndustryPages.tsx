import Image from "next/image";
import Link from "next/link";
import { CheckIcon, IndustryIcon } from "@/components/industries/IndustryIcon";
import { DetailPageHero } from "@/components/sections/DetailPageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JsonLd } from "@/components/site/JsonLd";
import {
  industryLinks,
  industryOverview,
  industryProcess,
  industrySomethingElseCta,
  type CopyBlock,
  type IndustryPageData,
} from "@/lib/industries";
import { industryCostFaq, industryCostQuestions } from "@/lib/industryPricing";
import { breadcrumbList, faqPageJsonLd, serviceJsonLd } from "@/lib/schema";

const buildIconServiceHref: Record<string, string> = {
  automation: "/services/business-process-automation",
  ai: "/services/ai-agents",
  message: "/services/ai-agents",
  software: "/services/custom-software-development",
  dashboard: "/services/custom-software-development",
  portal: "/services/custom-software-development",
  integration: "/services/system-integrations",
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
      <h2 className="sec-title">
        <SplitHeading title={title} highlight={highlight} after={after} />
      </h2>
      {body ? <p className="lead">{body}</p> : null}
    </div>
  );
}

function isCopyParts(paragraph: CopyBlock): paragraph is Exclude<CopyBlock, string> {
  return typeof paragraph !== "string";
}

function RichParagraph({ paragraph }: { paragraph: CopyBlock }) {
  if (!isCopyParts(paragraph)) {
    return <p>{paragraph}</p>;
  }

  return (
    <p>
      {paragraph.map((part, index) =>
        part.href ? (
          <Link href={part.href} key={`${part.href}-${index}`}>
            {part.text}
          </Link>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </p>
  );
}

function TextBlock({ paragraphs }: { paragraphs: readonly CopyBlock[] }) {
  return (
    <div className="text-block reveal">
      {paragraphs.map((paragraph, index) => (
        <RichParagraph paragraph={paragraph} key={index} />
      ))}
    </div>
  );
}

function FaqAnswer({ answer }: { answer: string }) {
  const marker = "initial consultation";
  const index = answer.indexOf(marker);
  if (index === -1) return <p>{answer}</p>;

  return (
    <p>
      {answer.slice(0, index)}
      <Link href="/contact">{marker}</Link>
      {answer.slice(index + marker.length)}
    </p>
  );
}

function visibleFaqs(industry: IndustryPageData) {
  const faqs = [...(industry.faq ?? [])];
  const hasCostAnswer = faqs.some((item) => item.answer.includes("typically start from A$2,500"));
  if (!hasCostAnswer) {
    faqs.push(
      industryCostFaq(
        industryCostQuestions[industry.slug] ?? "How much does a project like this cost?",
      ),
    );
  }
  return faqs;
}

function ConsultationCta({ title, body, label = "Book a discovery call" }: { title: string; body: string; label?: string }) {
  return (
    <section className="sec">
      <div className="wrap cta-band reveal">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            {label}
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
              {industrySomethingElseCta.cta}
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
        <div className="hero-wide reveal in">
          <div className="hero-badge">{industryOverview.hero.eyebrow}</div>
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
                <span className="industry-link">Learn more</span>
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
          ...breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        }}
      />
    </>
  );
}

export function IndustryDetailPage({ industry }: { industry: IndustryPageData }) {
  const industryLabel = industry.hero.eyebrow.split(" / ")[1] || industry.hero.eyebrow;
  const faqs = visibleFaqs(industry);

  return (
    <>
      <DetailPageHero
        eyebrow="Industries"
        title={`${industry.hero.title}${industry.hero.highlight}`}
        subheading={industry.hero.subheading}
        description={industry.hero.lead}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "See what we can automate", href: "#build" }}
        backgroundImage={industry.hero.image}
        backgroundPosition="center right"
      />

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

      <section className="sec no-top">
        <div className="wrap">
          <div className="cs-supporting-image reveal">
            <Image
              src={industry.supportingImage.src}
              alt={industry.supportingImage.alt}
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
            />
          </div>
        </div>
      </section>

      {industry.workflows ? (
        <section className="sec">
          <div className="wrap">
            <SectionHeading
              eyebrow={industry.workflows.eyebrow}
              title={industry.workflows.title}
              highlight={industry.workflows.highlight}
            />
            {industry.workflows.paragraphs ? <TextBlock paragraphs={industry.workflows.paragraphs} /> : null}
            <div className="workflow-list reveal">
              {industry.workflows.items.map((item) => (
                <article className="workflow-card" key={item.title}>
                  <h3>{item.title}</h3>
                  {item.paragraphs.map((paragraph, index) => (
                    <RichParagraph paragraph={paragraph} key={index} />
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {industry.proof ? (
        <section className="sec">
          <div className="wrap">
            <SectionHeading
              eyebrow={industry.proof.eyebrow}
              title={industry.proof.title}
              highlight={industry.proof.highlight}
            />
            <TextBlock paragraphs={industry.proof.paragraphs} />
            {industry.proof.links?.length ? (
              <div className="workflow-list reveal">
                {industry.proof.links.map((link) => (
                  <Link href={link.href} className="workflow-card proof-link" key={link.href}>
                    <h3>{link.label}</h3>
                    <p>{link.body}</p>
                    <span className="work-link">Read the case study</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

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
                <span className="work-link">Learn more</span>
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
              const href = item.href || buildIconServiceHref[item.icon];
              const content = (
                <>
                  <IndustryIcon icon={item.icon} className="svc-ico" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {href ? (
                    <span className="work-link">Learn more</span>
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

      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">Common questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item faq-static" key={item.question}>
                <h3>{item.question}</h3>
                <FaqAnswer answer={item.answer} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta title={industry.cta.title} body={industry.cta.body} label={industry.cta.label} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            serviceJsonLd({
              name: industry.serviceName,
              description: industry.description,
              path: industry.href,
            }),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: industryLabel, path: industry.href },
            ]),
            faqPageJsonLd(industry.href, faqs),
          ],
        }}
      />
    </>
  );
}
