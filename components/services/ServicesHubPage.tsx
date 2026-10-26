import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/site/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { breadcrumbList, organizationId, websiteId } from "@/lib/schema";
import { serviceLandingPages, servicesHub } from "@/lib/services";

export function ServicesHubPage() {
  return (
    <>
      <header className="page-hero industry-hero">
        <div className="wrap reveal in">
          <div className="hero-badge">{servicesHub.hero.eyebrow}</div>
          <h1>
            {servicesHub.hero.title}
            <span className="em">{servicesHub.hero.highlight}</span>
          </h1>
          <p className="lead">{servicesHub.hero.lead}</p>
          <p className="lead-2">{servicesHub.hero.lead2}</p>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head industry-sec-head reveal">
            <h2 className="sec-title">Six services</h2>
          </div>
          <div className="industry-grid reveal">
            {serviceLandingPages.map((service) => (
              <Link href={service.href} className="industry-card industry-card-link" key={service.slug}>
                <h3>{service.navLabel}</h3>
                <p>{service.description}</p>
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
          <div className="sec-head industry-sec-head reveal">
            <h2 className="sec-title">Which one applies</h2>
          </div>
          <div className="text-block reveal">
            <p>
              <Link href="/services/business-process-automation">Business process automation</Link> is for a step
              that already follows a rule, such as quoting, onboarding, reporting, job allocation or data entry.
            </p>
            <p>
              <Link href="/services/ai-workflow-automation">AI workflow automation</Link> is for a step where
              someone has to read, extract or classify information that does not arrive in a fixed format.
            </p>
            <p>
              <Link href="/services/ai-agents">AI agents</Link> carry out a defined task inside your systems, such
              as a routine support reply or an internal lookup, with limits and a person on the steps that matter.
            </p>
            <p>
              <Link href="/services/system-integrations">System integration</Link> connects records between the CRM,
              accounting, job and website systems you already use, including an API where no connector exists.
            </p>
            <p>
              <Link href="/services/custom-software-development">Custom software</Link> is for when the process
              needs a place to live: an internal platform, a portal or a dashboard the current tools cannot provide.
            </p>
            <p>
              <Link href="/services/ongoing-support">Ongoing support</Link> keeps software, automations and
              integrations that are already in use matched to the business as it changes.
            </p>
            <p>
              23Labs is based in Melbourne and delivers this work remotely for businesses in Australia and{" "}
              <Link href="/new-zealand">New Zealand</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{servicesHub.cta.title}</h2>
          <p>{servicesHub.cta.body}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{servicesHub.cta.label}</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${absoluteUrl(servicesHub.path)}#webpage`,
              url: absoluteUrl(servicesHub.path),
              name: servicesHub.metadataTitle,
              description: servicesHub.description,
              inLanguage: "en-AU",
              isPartOf: { "@id": websiteId() },
              author: { "@id": organizationId() },
              publisher: { "@id": organizationId() },
            },
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Services", path: servicesHub.path },
            ]),
          ],
        }}
      />
    </>
  );
}
