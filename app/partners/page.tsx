import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

/**
 * Draft growth page, Part 7. Not linked from nav, footer or
 * app/sitemap.ts - see docs/RELEASE_READINESS.md. No partner logos,
 * commission figures, legal guarantees or certifications are named,
 * since none are approved or verifiable from this repository.
 */
const path = "/partners";
const description =
  "23Labs works with MSPs, agencies, operational consultants and vendors whose clients need automation, integrations or custom software - as a referral, a scoped project or white-label work, agreed case by case.";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Partners | 23Labs",
  description,
  path,
  noindex: true,
});

const partnerOptions = [
  {
    title: "Referral introductions",
    body: "You introduce a client with an automation, integration or custom software need. We scope and deliver the project, and agree with you up front how the relationship is handled.",
  },
  {
    title: "Scoped projects",
    body: "You bring the client relationship and the context; we bring the technical delivery for a defined piece of work, reporting back through you or directly, as agreed.",
  },
  {
    title: "White-label work",
    body: "Where it suits both parties, we can deliver work that sits behind your brand. This is a specific arrangement we agree in advance, not a default option.",
  },
];

const whoThisSuits = [
  { title: "Managed service providers", body: "Clients who need automation or integration work beyond day-to-day IT support." },
  { title: "Agencies", body: "Clients whose project needs custom software or workflow automation outside your core service." },
  { title: "Operational consultants", body: "Clients where you've identified the process problem and need technical delivery to solve it." },
  { title: "Vendors with overlapping clients", body: "Shared clients who need a connection or workflow built around the systems you provide." },
];

const faqs = [
  {
    question: "Is there a formal partner programme?",
    answer:
      "No. Referral introductions, scoped projects and white-label work are options we agree individually, case by case, not automatic benefits of signing up to a programme.",
  },
  {
    question: "Who owns the client relationship?",
    answer:
      "Whichever arrangement suits the situation. For a referral, you typically retain the relationship; for a scoped project, that's agreed up front and depends on how you want to be represented to your client.",
  },
  {
    question: "Do you publish commission rates?",
    answer: "No. Any referral or commercial terms are agreed directly between us for the specific situation.",
  },
  {
    question: "Are you a certified partner of any platform?",
    answer: "No. We don't claim formal certifications or partnerships with software vendors.",
  },
  {
    question: "How does a partnership actually start?",
    answer:
      "With a conversation about the kind of clients and work you're seeing, so we can work out whether a referral, a scoped project or something else fits best.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Better delivery together, without adding unnecessary overhead."
        body="23Labs supports automation and custom builds for your clients, with you keeping the client relationship where that's agreed."
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">Who this suits</h2>
          </div>
          <div className="problem-grid reveal">
            {whoThisSuits.map((item) => (
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
            <h2 className="sec-title">Ways we can work together</h2>
            <p className="lead">Each of these is an option to agree, not an automatic benefit.</p>
          </div>
          <div className="problem-grid reveal">
            {partnerOptions.map((item) => (
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
            <h2 className="sec-title">How it works</h2>
          </div>
          <div className="text-block reveal">
            <p>
              We start with a conversation about the clients and work you&apos;re seeing, so we understand where
              automation, integrations or custom software genuinely fit. From there, project responsibilities,
              communication and ownership of the client relationship are agreed explicitly for the situation, not
              assumed from a template.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} idPrefix="faq-partners" heading="Partnership questions" />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>Want to explore working together?</h2>
          <p>Tell us about your clients and where automation or custom software keeps coming up.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Explore a partnership</ButtonLink>
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
              { name: "Partners", path },
            ]),
          ],
        }}
      />
    </>
  );
}
