import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CalendlyWidget } from "@/components/contact/CalendlyWidget";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd } from "@/lib/schema";
import { getCaseStudy } from "@/lib/caseStudies";
import { createMetadata } from "@/lib/seo";

/**
 * Draft growth page, Part 7. Not linked from nav, footer or
 * app/sitemap.ts - see docs/RELEASE_READINESS.md.
 *
 * No new form/backend was built here. The brief asks to "preserve
 * existing form delivery" and "not add a new external backend without
 * approval" - but there is no separate contact form anywhere in this
 * codebase to preserve (confirmed repeatedly across Parts 1, 2 and 5);
 * the real enquiry mechanism sitewide is the Calendly booking widget. This
 * page explains what to bring to that conversation and reuses the same
 * BookingSection/CalendlyWidget used on /contact, rather than fabricating
 * a second, parallel lead-capture mechanism.
 */
const path = "/workflow-review";
const description =
  "Describe a repetitive process your team deals with and talk it through with 23Labs. An initial conversation, not a guaranteed technical audit.";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Workflow Review | 23Labs",
  description,
  path,
  noindex: true,
});

const whatToBring = [
  { title: "The repetitive process", body: "What actually happens, step by step, including the parts that feel too obvious to mention." },
  { title: "The tools involved", body: "Which systems touch this process, even ones that only come up occasionally." },
  { title: "How often it happens", body: "A rough frequency is enough, daily, weekly or at a particular point in a job or project." },
  { title: "What you want out of it", body: "Less manual entry, fewer errors, faster turnaround, or simply time back for the team." },
];

const faqs = [
  {
    question: "Is this a free technical audit?",
    answer:
      "No. It's an initial conversation about a specific process, not a full, guaranteed technical audit. For a larger or more complex project, that kind of detailed scoping is a separate, agreed piece of work.",
  },
  {
    question: "What happens after the conversation?",
    answer:
      "We'll say whether what you've described looks like a straightforward automation, an integration between systems, a custom software need, or something that needs more investigation first, and recommend a practical next step.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Not formally. Knowing roughly how the process works and which systems are involved is enough to have a useful conversation.",
  },
];

export default function WorkflowReviewPage() {
  const example = getCaseStudy("huntress-recruitment");

  return (
    <>
      <PageHero
        eyebrow="Workflow review"
        title="Find the workflow that's costing your team time."
        body="Describe a repetitive process, the tools involved, roughly how often it happens and what you're trying to achieve. We'll talk it through and tell you what we'd recommend."
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">What&apos;s useful to bring</h2>
            <p className="lead">You don&apos;t need a technical brief, just a clear description of the process.</p>
          </div>
          <div className="problem-grid reveal">
            {whatToBring.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {example ? (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head sec-head-center reveal">
              <h2 className="sec-title">What this has looked like before</h2>
              <p className="lead">A real, published example of this kind of conversation turning into a project.</p>
            </div>
            <div className="usecase-grid reveal">
              <div className="usecase-card">
                <span className="mono">{example.category}</span>
                <h3>{example.headline}</h3>
                <p>{example.summary}</p>
                <a href={`/case-studies/${example.slug}`} className="work-link">
                  Read the case study
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="sec booking-section">
        <div className="wrap">
          <div className="booking-head reveal">
            <span className="mono">Request a workflow conversation</span>
            <h2 className="sec-title">Pick a time that suits you</h2>
            <p className="lead">
              Choose a time that works for you and bring the process, tools and frequency from above. We&apos;ll
              talk through where automation or software could help.
            </p>
          </div>
          <CalendlyWidget />
        </div>
      </section>

      <FaqAccordion items={faqs} idPrefix="faq-workflow-review" heading="Before you book" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            faqPageJsonLd(path, faqs),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Workflow Review", path },
            ]),
          ],
        }}
      />
    </>
  );
}
