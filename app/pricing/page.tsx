import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd } from "@/lib/schema";
import { industryProjectCostAnswer } from "@/lib/industryPricing";
import { createMetadata } from "@/lib/seo";

/**
 * Uses only the single pricing figure already approved and published
 * sitewide (lib/industryPricing.ts's industryProjectCostAnswer, already
 * shown on every service/industry/location FAQ and the NZ hub). No
 * retainer figures or package tiers are introduced - none are approved.
 */
const path = "/pricing";
const description =
  "How 23Labs scopes and prices automation, integration and custom software projects: what drives cost, the shapes a project can take, and how to get a practical estimate.";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Pricing | 23Labs",
  description,
  path,
});

const costDrivers = [
  { title: "APIs and software access", body: "Whether the systems involved have an API or connector, and whether we can get the access a project needs." },
  { title: "Number of systems", body: "Connecting two systems is a smaller project than connecting five, even if each individual connection is simple." },
  { title: "Workflow exceptions", body: "The straightforward path is usually quick to automate. The exceptions, the edge cases and the judgement calls, are where scope grows." },
  { title: "Data quality", body: "Clean, consistent data moves faster. Messy or inconsistent data usually means extra work to normalise it first." },
  { title: "Security requirements", body: "Specific access controls, data handling rules or approval processes add real scope, and we price that scope rather than skip it." },
  { title: "Custom interface", body: "A dashboard, portal or internal tool is more work than an automation that runs quietly in the background." },
  { title: "Implementation support", body: "Testing against real examples, handover and training are part of a project, not an afterthought." },
  { title: "Ongoing support", body: "Keeping a system reliable as your business changes is separate, ongoing work, priced separately from the initial build." },
];

const engagementShapes = [
  {
    title: "Focused automation or integration",
    body: "A specific, repeatable step, or a connection between two systems. Usually the fastest path to a working result, and often the right starting point.",
  },
  {
    title: "Custom software build",
    body: "An internal tool, dashboard or portal, built when the process needs a place to live that off-the-shelf software doesn't provide.",
  },
  {
    title: "Ongoing support and improvement",
    body: "Keeping automations, integrations and software reliable as your systems, team and processes change after the initial project.",
  },
];

const faqs = [
  {
    question: "Can we start small?",
    answer:
      "Yes. Most projects start with the highest-value, most repeatable step rather than a complete system. A smaller first project also tells us how well a larger one would work.",
  },
  {
    question: "Is the discovery conversation paid?",
    answer:
      "The initial conversation to understand your process and systems is not a paid engagement. If a project needs a more detailed scoping phase before a fixed quote can be given, we'll say so and agree that separately.",
  },
  {
    question: "What's in a scoped proposal?",
    answer:
      "The specific process or integration in scope, the systems involved, what we'll build, what's excluded, and the cost and timeframe for that defined piece of work.",
  },
  {
    question: "What does a project typically cost?",
    answer: `${industryProjectCostAnswer} We don't publish retainer pricing or package tiers here, because the right shape and cost depends on what you're actually trying to solve.`,
  },
  {
    question: "Do you charge differently for ongoing support?",
    answer:
      "Ongoing support is scoped separately from the initial build, since it covers different work: keeping systems reliable as things change, rather than building something new.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear scope. Practical pricing. No mystery project."
        body="What actually drives the cost of an automation, integration or software project, and the shapes a project with 23Labs can take."
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">What drives project cost</h2>
            <p className="lead">The same factors apply whether the project is a small automation or a larger build.</p>
          </div>
          <div className="problem-grid reveal">
            {costDrivers.map((item) => (
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
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">Three shapes a project can take</h2>
            <p className="lead">No fixed packages. We scope the shape that fits the problem.</p>
          </div>
          <div className="problem-grid reveal">
            {engagementShapes.map((item) => (
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
          <div className="text-block reveal">
            <p>
              Want a rough sense of what a repetitive task is costing your team before you ask for a quote?
              Try the <Link href="/tools/automation-savings-calculator">automation savings calculator</Link>.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} idPrefix="faq-pricing" heading="Pricing questions" />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>Ready for a practical estimate?</h2>
          <p>Tell us what you&apos;re trying to solve and which systems are involved. We&apos;ll scope it and come back with a proposal.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Request a project estimate</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            faqPageJsonLd(path, faqs),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Pricing", path },
            ]),
          ],
        }}
      />
    </>
  );
}
