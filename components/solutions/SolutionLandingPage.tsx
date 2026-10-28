import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/site/JsonLd";
import { SafeByDesign } from "@/components/solutions/SafeByDesign";
import { getPostBySlug } from "@/lib/blog";
import { caseStudyPath, resolveCaseStudy } from "@/lib/caseStudyMatch";
import { industryLinks } from "@/lib/industries";
import { breadcrumbList, faqPageJsonLd, serviceJsonLd } from "@/lib/schema";
import { getServiceLandingPage, servicePricingNote, type ServiceLandingPageData } from "@/lib/services";
import { solutionPath, type SolutionPage } from "@/lib/solutions";

export function SolutionLandingPage({ solution }: { solution: SolutionPage }) {
  const path = solutionPath(solution.slug);

  const proofStudies = (solution.proof?.studies ?? []).flatMap((item) => {
    const study = resolveCaseStudy(item.match);
    return study ? [{ ...item, href: caseStudyPath(study) }] : [];
  });

  const guides = solution.guideSlugs.flatMap((slug) => {
    const post = getPostBySlug(slug);
    return post ? [post] : [];
  });

  const services = solution.serviceSlugs
    .map((slug) => getServiceLandingPage(slug))
    .filter((item): item is ServiceLandingPageData => Boolean(item));

  const industries = (solution.industryHrefs ?? []).flatMap((href) => {
    const industry = industryLinks.find((item) => item.href === href);
    return industry ? [industry] : [];
  });

  return (
    <>
      <header className="svc-hero">
        <div className="wrap svc-hero-in">
          <div className="reveal in svc-hero-copy">
            <div className="hero-badge">{solution.hero.eyebrow}</div>
            <h1>{solution.hero.title}</h1>
            <p className="lead">{solution.hero.lead}</p>
            <div className="hero-actions">
              <ButtonLink href="/contact">{solution.cta.label}</ButtonLink>
            </div>
          </div>
          <div className="reveal in svc-hero-media">
            <Image
              src={solution.hero.image.src}
              alt={solution.hero.image.alt}
              fill
              preload
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{solution.problem.heading}</h2>
            <p className="lead">{solution.problem.intro}</p>
          </div>
          <div className="problem-grid reveal">
            {solution.problem.items.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">{solution.impact.heading}</h2>
            <p className="lead">{solution.impact.intro}</p>
          </div>
          <div className="problem-grid reveal">
            {solution.impact.items.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        layout="split"
        eyebrow="How we fix it"
        heading={solution.approach.heading}
        intro={solution.approach.intro}
        cta={{ href: "/contact", label: solution.cta.label }}
        steps={solution.approach.steps}
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="text-block reveal">
            <p>
              <strong>The result:</strong> {solution.result}
            </p>
          </div>
        </div>
      </section>

      {proofStudies.length && solution.proof ? (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2 className="sec-title">{solution.proof.heading}</h2>
              <p className="lead">{solution.proof.intro}</p>
            </div>
            <div className="usecase-grid reveal">
              {proofStudies.map((item) => (
                <div className="usecase-card" key={item.href}>
                  <span className="mono">Case study</span>
                  <h3>{item.label}</h3>
                  <p>{item.summary}</p>
                  <Link href={item.href} className="work-link">
                    Read the project
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {solution.category === "operations" ? <SafeByDesign /> : null}

      {guides.length ? (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2 className="sec-title">Read more on this</h2>
            </div>
            <div className="usecase-grid reveal">
              {guides.map((post) => (
                <div className="usecase-card" key={post.slug}>
                  <span className="mono">Guide</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="work-link">
                    Read the guide
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {services.length ? (
        <section className="sec no-top related-sec">
          <div className="wrap">
            <div className="sec-head related-head reveal">
              <h2 className="sec-title">Services behind this</h2>
            </div>
            <div className="related-links reveal">
              {services.map((item) => (
                <Link href={item.href} className="related-link" key={item.slug}>
                  <div className="related-link-body">
                    <h3>{item.navLabel}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            {industries.length ? (
              <div className="text-block reveal">
                <p>
                  Common in{" "}
                  {industries.map((industry, index) => (
                    <span key={industry.href}>
                      {index > 0 ? (index === industries.length - 1 ? " and " : ", ") : null}
                      <Link href={industry.href}>{industry.label.toLowerCase()}</Link>
                    </span>
                  ))}
                  .
                </p>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <FaqAccordion items={solution.faqs} idPrefix={`faq-${solution.slug}`} />

      <section className="sec">
        <div className="wrap cta-band reveal">
          <h2>{solution.cta.title}</h2>
          <p>{solution.cta.body}</p>
          <p>{servicePricingNote}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{solution.cta.label}</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            serviceJsonLd({ name: solution.navLabel, description: solution.description, path }),
            faqPageJsonLd(path, solution.faqs),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Solutions", path: "/solutions" },
              { name: solution.navLabel, path },
            ]),
          ],
        }}
      />
    </>
  );
}
