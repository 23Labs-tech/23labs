import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/site/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { breadcrumbList, faqPageJsonLd, organizationId } from "@/lib/schema";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { securityAiPractices as aiPractices, securityFaqs as faqs, securityPractices as practices } from "@/lib/security";

const path = "/security";
const description =
  "How 23Labs handles security, access, credentials, personal information and AI services when building automation, integrations and software for clients in Australia and New Zealand.";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Security, Data Handling and AI Governance | 23Labs",
  description,
  path,
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security and governance"
        title="Security, data and "
        highlight="safe automation"
        body="Automation and AI touch the systems and information your business depends on. This is how we handle access, credentials, personal information and AI services on every project."
        className="industry-hero"
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">How we build</h2>
            <p className="lead">The same controls apply to every automation, integration and AI agent we deliver.</p>
          </div>
          <div className="problem-grid reveal">
            {practices.map((item) => (
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
          <div className="sec-head reveal">
            <h2 className="sec-title">How we use AI</h2>
            <p className="lead">
              AI is used only where a rule cannot do the job, and always with limits and oversight. Read more about our{" "}
              <Link href="/solutions/ai-governance">approach to AI safety and governance</Link>.
            </p>
          </div>
          <div className="problem-grid reveal">
            {aiPractices.map((item) => (
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
          <div className="sec-head reveal">
            <h2 className="sec-title">Privacy obligations</h2>
          </div>
          <div className="text-block reveal">
            <p>
              We design workflows around the Australian Privacy Principles and the New Zealand Privacy Act 2020. From
              10 December 2026, organisations covered by the Australian Privacy Principles must also explain certain
              automated decisions in their privacy policy. We can help you{" "}
              <Link href="/solutions/automated-decisions-privacy">map where your systems make automated decisions</Link>
              , and our <Link href="/blog/automated-decision-making-privacy-act">plain-English guide</Link> explains
              the change. This is general information, not legal advice.
            </p>
            <p>
              Our <Link href="/privacy-policy">privacy policy</Link> explains how we handle personal information when
              you visit this site or contact us.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} idPrefix="faq-security" heading="Security questions" />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>Have security requirements we should know about?</h2>
          <p>Tell us early. We will work within your policies, supplier process and approval steps.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Talk to us</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${absoluteUrl(path)}#page`,
              name: "Security, data handling and AI governance",
              description,
              url: absoluteUrl(path),
              about: { "@id": organizationId() },
              inLanguage: "en-AU",
            },
            faqPageJsonLd(path, faqs),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Security", path },
            ]),
          ],
        }}
      />
    </>
  );
}
