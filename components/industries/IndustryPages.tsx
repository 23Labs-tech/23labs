import Link from "next/link";
import { CheckIcon, IndustryIcon } from "@/components/industries/IndustryIcon";
import { IndustryProblemSection } from "@/components/industries/IndustryProblemSection";
import { IndustrySolutionsGrid } from "@/components/industries/IndustrySolutionsGrid";
import { IndustrySuccessStories } from "@/components/industries/IndustrySuccessStories";
import { DetailPageHero } from "@/components/sections/DetailPageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
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
import { resolveSuccessStories } from "@/lib/successStories";

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
          <Link href={part.href} key={index}>
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

function IndustryProofSection({ proof }: { proof: NonNullable<IndustryPageData["proof"]> }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="mono">{proof.eyebrow}</span>
          <h2 className="sec-title">
            {proof.title}
            {proof.highlight ? <span className="em">{proof.highlight}</span> : null}
          </h2>
        </div>
        <div className="text-block reveal">
          {proof.paragraphs.map((paragraph, index) => (
            <RichParagraph paragraph={paragraph} key={index} />
          ))}
        </div>
        {proof.links?.length ? (
          <div className="workflow-list reveal">
            {proof.links.map((link) => (
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
  );
}

function IndustryWorkflowSection({ workflows }: { workflows: NonNullable<IndustryPageData["workflows"]> }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="mono">{workflows.eyebrow}</span>
          <h2 className="sec-title">
            {workflows.title}
            {workflows.highlight ? <span className="em">{workflows.highlight}</span> : null}
          </h2>
        </div>
        {workflows.paragraphs?.length ? (
          <div className="text-block reveal">
            {workflows.paragraphs.map((paragraph, index) => (
              <RichParagraph paragraph={paragraph} key={index} />
            ))}
          </div>
        ) : null}
        <div className="workflow-list reveal">
          {workflows.items.map((item) => (
            <div className="workflow-card" key={item.title}>
              <h3>{item.title}</h3>
              {item.paragraphs.map((paragraph, index) => (
                <RichParagraph paragraph={paragraph} key={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
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

/**
 * Display-only priority order for the industries hub: the two priority
 * sectors that have a live page (freight-logistics = "Transport &
 * Logistics", trades-field-services = "Trades & Field Services") shown
 * first, everything else in its existing order after. Computed here rather
 * than reordering the shared industryLinks export itself, since that array
 * also drives the nav mega-menu and footer link order, which should stay
 * unchanged.
 */
const priorityIndustrySlugs = new Set(["freight-logistics", "trades-field-services"]);
const industryLinksForHub = [
  ...industryLinks.filter((industry) => priorityIndustrySlugs.has(industry.slug)),
  ...industryLinks.filter((industry) => !priorityIndustrySlugs.has(industry.slug)),
];

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
            {industryLinksForHub.map((industry) => (
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
  const industryLink = industryLinks.find((item) => item.slug === industry.slug);
  const problemEyebrow = `Built for ${(industryLink?.label ?? industryLabel).toLowerCase()}`;
  const successStories = resolveSuccessStories(industry.slug);

  return (
    <>
      <DetailPageHero
        eyebrow="Industries"
        title={`${industry.hero.title}${industry.hero.highlight}`}
        subheading={industry.hero.subheading}
        description={industry.hero.lead}
        primaryCta={{ label: industry.hero.ctaLabel ?? "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "See what we can automate", href: "#solutions" }}
      />

      <IndustryProblemSection
        eyebrow={problemEyebrow}
        heading={industry.problemSection.heading}
        paragraphs={industry.problemSection.paragraphs}
        bullets={industry.problemSection.bullets}
        image={industry.supportingImage}
      />

      <IndustrySolutionsGrid
        id="solutions"
        heading={industry.solutions.heading}
        intro={industry.solutions.intro}
        items={industry.solutions.items}
      />

      {industry.workflows ? <IndustryWorkflowSection workflows={industry.workflows} /> : null}

      {industry.proof ? <IndustryProofSection proof={industry.proof} /> : null}

      <IndustrySuccessStories stories={successStories} />

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

      <FaqAccordion items={faqs} idPrefix={`faq-${industry.slug}`} heading="Common questions" />

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
