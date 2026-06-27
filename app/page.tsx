import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReferenceBlogCard } from "@/components/blog/ReferenceBlogCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/site/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { WorkCard } from "@/components/work/WorkCard";
import { caseStudies, faqs, homeProcessSteps, referenceBlogPosts, services, values } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  description:
    "23Labs is a studio building automation, custom software, and AI tools that remove busywork and help businesses scale with confidence.",
  keywords: ["AI automation", "custom software", "web development", "data integration", "Melbourne technology studio"],
});

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="sec" id="about">
        <div className="wrap">
          <div className="intro-copy reveal">
            <div className="sec-tag">About 23Labs</div>
            <h2>
              Practical technology, built around <span className="em">your business</span>
            </h2>
            <p className="lead">
              We&apos;re a studio building automation, software, and AI tools that remove busywork and help
              businesses scale with confidence.
            </p>
            <p className="lead">
              23Labs started with a simple belief: most businesses don&apos;t need more software, they need the
              right systems working together. We partner with growing businesses to find where the friction
              is and build practical solutions that actually get used, from automating day-to-day operations
              to designing custom platforms and AI tools.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/about" variant="secondary">
                Read our full story
              </ButtonLink>
              <ButtonLink href="#contact">Contact us</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">What we build</div>
            <h2 className="sec-title">
              Four ways we help businesses <span className="em">work smarter</span>
            </h2>
            <p className="lead">
              From quick automations through to full custom platforms, every solution is built to remove
              friction and fit how your team already operates.
            </p>
            <Link href="/services" className="work-link full-services-link">
              See the full services breakdown <span aria-hidden="true">{"\u2192"}</span>
            </Link>
          </div>
          <div className="svc-grid reveal">
            {services.map((service) => (
              <article className="svc" key={service.slug}>
                <ServiceIcon slug={service.slug} />
                <h3>{service.homeTitle}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="How we work" title="How We Partner With " highlight="You" />
          <div className="panel-card reveal">
            <div className="process-list">
              {homeProcessSteps.map((step) => (
                <article className="process-row" key={step.number}>
                  <div className="process-k">{step.number}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p className="lede">{step.lead}</p>
                    <p>{step.body}</p>
                    <div className="process-result">
                      <span className="tag">Result</span>
                      <p>{step.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Selected work</div>
            <h2 className="sec-title">
              Real systems, built for <span className="em">real businesses</span>
            </h2>
            <p className="lead">A few of the products, platforms, and rebuilds we&apos;ve shipped recently.</p>
            <Link href="/work" className="work-link full-services-link">
              See all case studies <span aria-hidden="true">{"\u2192"}</span>
            </Link>
          </div>
          <div className="work-grid reveal">
            {caseStudies.map((item) => (
              <WorkCard {...item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="blog">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">From the blog</div>
            <h2 className="sec-title">
              Notes on automation, software, and <span className="em">getting it right</span>
            </h2>
            <p className="lead">Short, practical write-ups from inside our own projects, no fluff.</p>
            <Link href="/blog" className="work-link full-services-link">
              See all posts <span aria-hidden="true">{"\u2192"}</span>
            </Link>
          </div>
          <div className="blog-grid reveal">
            {referenceBlogPosts.slice(0, 3).map((post) => (
              <ReferenceBlogCard post={post} hrefBase="/blog" anchored={false} key={post.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Why teams choose us</div>
            <h2 className="sec-title">
              Built on a few things we won&apos;t <span className="em">compromise</span>
            </h2>
          </div>
          <div className="values-grid reveal">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <div className="value-k">{String(index + 1).padStart(2, "0")}</div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="haylo">
        <div className="wrap">
          <div className="haylo-strip reveal">
            <div>
              <Image src="/haylo-logo.png" alt="Haylo" width={200} height={52} className="haylo-logo" />
              <h3>An AI receptionist that never misses a call.</h3>
              <p>
                Haylo answers calls, qualifies leads, and books appointments around the clock for growing
                businesses. We use everything we learn building it to inform the software we build for clients.
              </p>
            </div>
            <a href="https://gethaylo.co" target="_blank" rel="noreferrer" className="btn btn-primary">
              Visit gethaylo.co <span className="btn-arrow" aria-hidden="true">{"\u2192"}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sec" id="cta">
        <div className="wrap cta-band reveal">
          <h2>Ready to remove the busywork?</h2>
          <p>Tell us where the friction is and we&apos;ll show you a practical path forward, no obligation.</p>
          <div className="hero-actions">
            <ButtonLink href="#contact">Talk to us</ButtonLink>
          </div>
        </div>
      </section>

      <ContactSection
        id="contact"
        eyebrow="Get in touch"
        title="Helping businesses scale with confidence"
        body={[
          "Tell us about your business, your goals, and the challenges you're looking to solve. We'll get back to you within one business day.",
          "Whether you're looking to improve operations, automate manual processes, build custom software, or create a better digital experience for your customers, we're here to help.",
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
    </>
  );
}
