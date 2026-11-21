import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

/**
 * Draft growth page, Part 7. Not linked from nav, footer or
 * app/sitemap.ts - see docs/RELEASE_READINESS.md.
 *
 * Bullhorn and SEEK are the only platforms named as an actual delivered
 * integration (the Huntress Recruitment case study). Every other named
 * platform (Xero, MYOB, Simpro, ServiceM8, CartonCloud, Transvirtual,
 * Cliniko) is explicitly introduced as "platforms we can assess" - not a
 * proven or certified integration - matching the wording already used for
 * Cliniko on the allied-health industry page and ServiceM8 on the trades
 * industry page.
 */
const path = "/technologies";
const description =
  "How 23Labs evaluates whether your existing systems can be connected: APIs, connectors, webhooks, permissions and where the source of truth lives.";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Technologies We Evaluate | 23Labs",
  description,
  path,
  noindex: true,
});

const evaluationFactors = [
  { title: "Does an API or connector exist", body: "Some platforms expose a full API, some offer limited connectors, and some offer neither. This decides what's realistic." },
  { title: "What the permissions allow", body: "An API existing doesn't mean every action is available to a third-party integration. We check what's actually permitted." },
  { title: "Webhooks versus polling", body: "Some systems can push a change the moment it happens. Others need to be checked on a schedule. That affects how close to real time a connection can be." },
  { title: "Where the source of truth lives", body: "When two systems could both hold a piece of information, we work out which one should be authoritative, so data doesn't drift apart." },
  { title: "What happens on failure", body: "A connection needs a plan for when a request fails, times out, or the other system is down, not just for when everything works." },
];

const assessablePlatforms = [
  "Xero",
  "MYOB",
  "Simpro",
  "ServiceM8",
  "CartonCloud",
  "Transvirtual",
  "Cliniko",
];

const faqs = [
  {
    question: "Are you a certified partner of these platforms?",
    answer:
      "No. We don't hold formal certifications or partnerships with software vendors. We assess what a platform's API or connectors actually allow for your specific project, on a case-by-case basis.",
  },
  {
    question: "Have you built an integration with every platform listed?",
    answer:
      "No. Bullhorn and SEEK are platforms we've genuinely connected, documented in our published Huntress Recruitment case study. The others are examples of the kind of platform we can assess, not a list of proven integrations.",
  },
  {
    question: "What if our platform isn't on the list?",
    answer:
      "The list is illustrative, not exhaustive. Tell us what you use and we'll check what it allows.",
  },
  {
    question: "What do you need from us to assess a connection?",
    answer:
      "Which two systems you want to connect, and what information needs to move between them. From there we can check API access, permissions and whether a webhook or a scheduled sync fits best.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="Connect the tools your business already uses."
        body="How we evaluate whether two systems can realistically be connected, and what that connection would actually look like."
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">What we check before we recommend anything</h2>
          </div>
          <div className="problem-grid reveal">
            {evaluationFactors.map((item) => (
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
            <h2 className="sec-title">A delivered example</h2>
          </div>
          <div className="text-block reveal">
            <p>
              For Huntress Recruitment, we connected <strong>Bullhorn</strong>, <strong>SEEK</strong> and a
              WordPress website so vacancy information could move more consistently between them, while Bullhorn
              stayed the system of record. See the{" "}
              <Link href="/case-studies/huntress-recruitment">full case study</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">Platforms we can assess</h2>
            <p className="lead">
              These are examples of the kind of software we evaluate for a connection, not a list of integrations
              we&apos;ve already built or a certification of any kind.
            </p>
          </div>
          <div className="tag-list reveal" style={{ justifyContent: "center" }}>
            {assessablePlatforms.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">A useful starting question</h2>
            <p className="lead">
              &quot;Which two systems would you like to connect, and which information needs to move?&quot;
              That&apos;s usually enough for us to say whether a connection is realistic, and roughly how.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} idPrefix="faq-technologies" heading="Technology questions" />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>Have a specific connection in mind?</h2>
          <p>
            Tell us the two systems and what needs to move between them. Our{" "}
            <Link href="/services/system-integrations">system integrations service</Link> covers this kind of
            work in more detail.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Check an integration idea</ButtonLink>
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
              { name: "Technologies", path },
            ]),
          ],
        }}
      />
    </>
  );
}
