import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/site/JsonLd";
import { industryLinks } from "@/lib/industries";
import { newZealandPage } from "@/lib/newZealand";
import { absoluteUrl } from "@/lib/seo";
import { breadcrumbList, faqPageJsonLd, organizationId, websiteId } from "@/lib/schema";
import { serviceLandingPages } from "@/lib/services";

function FaqAnswer({ answer }: { answer: string }) {
  const marker = "case study";
  const index = answer.indexOf(marker);
  if (index === -1) return <p>{answer}</p>;

  return (
    <p>
      {answer.slice(0, index)}
      <Link href="/case-studies/huntress-recruitment">{marker}</Link>
      {answer.slice(index + marker.length)}
    </p>
  );
}

export function NewZealandPage() {
  const industries = newZealandPage.industries.slugs.flatMap((slug) => {
    const industry = industryLinks.find((item) => item.slug === slug);
    return industry ? [industry] : [];
  });

  return (
    <>
      <header className="svc-hero">
        <div className="wrap svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <div className="mono">{newZealandPage.hero.eyebrow}</div>
            <h1>
              {newZealandPage.hero.title}
              <span className="em">{newZealandPage.hero.highlight}</span>
            </h1>
            <p className="hero-sub">{newZealandPage.hero.subheading}</p>
            <p className="lead">{newZealandPage.hero.lead}</p>
            <div className="hero-actions">
              <ButtonLink href="/contact">{newZealandPage.hero.ctaLabel}</ButtonLink>
              <Link href="#services" className="btn btn-ghost">
                {newZealandPage.hero.secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={newZealandPage.hero.image.src}
              alt={newZealandPage.hero.image.alt}
              fill
              preload
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{newZealandPage.remote.heading}</h2>
            <p className="lead">{newZealandPage.remote.intro}</p>
          </div>
          <div className="problem-grid reveal">
            {newZealandPage.remote.items.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{newZealandPage.services.heading}</h2>
            <p className="lead">{newZealandPage.services.intro}</p>
          </div>
          <div className="industry-grid reveal">
            {serviceLandingPages.map((service) => (
              <Link href={service.href} className="industry-card industry-card-link" key={service.slug}>
                <h3>{service.navLabel}</h3>
                <p>{service.description}</p>
                <span className="industry-link">Learn more</span>
              </Link>
            ))}
          </div>
          <Link href="/services" className="work-link full-services-link reveal">
            All services
          </Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{newZealandPage.industries.heading}</h2>
            <p className="lead">{newZealandPage.industries.intro}</p>
          </div>
          <div className="industry-grid reveal">
            {industries.map((industry) => (
              <Link href={industry.href} className="industry-card industry-card-link" key={industry.slug}>
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
          <div className="sec-head reveal">
            <h2 className="sec-title">{newZealandPage.proof.heading}</h2>
          </div>
          <div className="text-block reveal">
            {newZealandPage.proof.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="workflow-list reveal">
            <Link href={newZealandPage.proof.study.href} className="workflow-card proof-link">
              <h3>{newZealandPage.proof.study.label}</h3>
              <p>{newZealandPage.proof.study.body}</p>
              <span className="work-link">Read the case study</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">Common questions</h2>
          </div>
          <div className="faq-list">
            {newZealandPage.faqs.map((item) => (
              <article className="faq-item faq-static" key={item.question}>
                <h3>{item.question}</h3>
                <FaqAnswer answer={item.answer} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{newZealandPage.cta.title}</h2>
          <p>{newZealandPage.cta.body}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{newZealandPage.cta.label}</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${absoluteUrl(newZealandPage.path)}#webpage`,
              url: absoluteUrl(newZealandPage.path),
              name: newZealandPage.metadataTitle,
              description: newZealandPage.description,
              inLanguage: "en-AU",
              isPartOf: { "@id": websiteId() },
              author: { "@id": organizationId() },
              publisher: { "@id": organizationId() },
            },
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "New Zealand", path: newZealandPage.path },
            ]),
            faqPageJsonLd(newZealandPage.path, [...newZealandPage.faqs]),
          ],
        }}
      />
    </>
  );
}
