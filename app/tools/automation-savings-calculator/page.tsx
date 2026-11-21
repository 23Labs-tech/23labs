import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { AutomationSavingsCalculator } from "@/components/tools/AutomationSavingsCalculator";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

/**
 * Draft growth page, Part 7. Not linked from nav, footer or
 * app/sitemap.ts - see docs/RELEASE_READINESS.md. noindex below is a
 * safety net in case the URL is found directly before this page is
 * approved for publication. The calculator itself is fully real and
 * working (lib/calculator.ts, unit-tested via npm run test:calculator) -
 * only its public visibility is gated, not its functionality.
 */
const path = "/tools/automation-savings-calculator";
const description =
  "Estimate the labour capacity a repetitive task is costing your team, and what automating part of it could free up. A working calculator, not a guaranteed savings figure.";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Automation Savings Calculator | 23Labs",
  description,
  path,
  noindex: true,
});

const faqs = [
  {
    question: "Is this a guaranteed saving?",
    answer:
      "No. The calculator estimates labour capacity, based on the numbers you enter and the reduction percentage you choose. Whether that capacity turns into an actual cost saving depends on implementation, data quality, team adoption and whether the freed time is redirected to other work.",
  },
  {
    question: "Where does the reduction percentage come from?",
    answer:
      "You choose it. The three presets (25%, 50%, 75%) are transparent, named assumptions, not a measured result from a specific project. Change it to whatever you think is realistic for your process.",
  },
  {
    question: "Do I need to give my email to see the result?",
    answer: "No. The calculator shows results as you type. Contacting us afterwards is optional.",
  },
  {
    question: "What happens if I send this to 23Labs?",
    answer:
      "We'll have a conversation about the actual process behind the numbers, the systems involved and whether automation, an integration or something else is the right next step.",
  },
];

export default function AutomationSavingsCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="How much time could your team get back?"
        body="Enter a repetitive task's real numbers and see the estimated labour capacity it's costing, and what part of it automation could free up."
      />

      <section className="sec no-top">
        <div className="wrap">
          <AutomationSavingsCalculator />
        </div>
      </section>

      <FaqAccordion items={faqs} idPrefix="faq-calculator" heading="About this calculator" />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>Want a second opinion on the numbers?</h2>
          <p>Bring the task, the systems involved and what you entered above. We&apos;ll tell you whether automation is a realistic next step.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Talk to 23Labs</ButtonLink>
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
              { name: "Automation Savings Calculator", path },
            ]),
          ],
        }}
      />
    </>
  );
}
