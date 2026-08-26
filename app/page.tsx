import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/site/JsonLd";
import {
  AutomationVisual,
  DigitalVisual,
  IntegrationVisual,
  SoftwareVisual,
} from "@/components/ui/BuildVisuals";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkShowcase } from "@/components/work/WorkShowcase";
import { getAllPosts } from "@/lib/blog";
import { faqs, services, values } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const buildVisuals: Record<string, React.ComponentType> = {
  "ai-automation": AutomationVisual,
  "software-development": SoftwareVisual,
  "data-integration": IntegrationVisual,
  "web-development": DigitalVisual,
};

const buildOrder = ["ai-automation", "software-development", "data-integration", "web-development"];
const buildSize: Record<string, string> = {
  "ai-automation": "xl",
  "software-development": "sm",
  "data-integration": "lg",
  "web-development": "lg",
};

export const metadata: Metadata = createMetadata({
  description:
    "23Labs is a studio building automation, custom software, and the systems that remove busywork and help businesses scale with confidence.",
  keywords: ["AI automation", "custom software", "web development", "data integration", "Melbourne technology studio"],
});

export default function Home() {
  const posts = getAllPosts();
  const orderedServices = buildOrder
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <>
      <HomeHero />

      <StatsBand />

      <section className="sec sec-alt" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">What we build</div>
            <h2 className="sec-title">
              Three disciplines, <span className="em">one system</span>
            </h2>
            <p className="lead">
              Automation, custom software, and the systems that connect them. Websites and digital
              products are part of the same craft.
            </p>
            <Link href="/services" className="work-link full-services-link">
              See the full services breakdown <span aria-hidden="true">{"→"}</span>
            </Link>
          </div>
          <div className="build-grid reveal">
            {orderedServices.map((service) => {
              const Visual = buildVisuals[service.slug];
              return (
                <article className={`build-card ${buildSize[service.slug]}`} key={service.slug}>
                  <div className="build-visual">
                    <Visual />
                  </div>
                  <div className="build-body">
                    <span className="build-num">{service.eyebrow}</span>
                    <h3>{service.homeTitle}</h3>
                    <p>{service.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Selected work</div>
            <h2 className="sec-title">
              Real systems, built for <span className="em">real businesses</span>
            </h2>
            <p className="lead">A few of the products, platforms, and rebuilds we&apos;ve shipped recently.</p>
            <Link href="/work" className="work-link full-services-link">
              See all case studies <span aria-hidden="true">{"→"}</span>
            </Link>
          </div>
          <WorkShowcase />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="How we work" title="From first call to " highlight="long-term support" />
          <ProcessSteps />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Why 23Labs</div>
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

      <section className="sec sec-alt" id="haylo">
        <div className="wrap">
          <div className="haylo-strip reveal">
            <div>
              <div className="sec-tag">Built inside 23Labs</div>
              <Image src="/haylo-logo.png" alt="Haylo" width={200} height={52} className="haylo-logo" />
              <h3>An AI receptionist that never misses a call.</h3>
              <p>
                Haylo answers calls, qualifies leads, and books appointments around the clock. It&apos;s
                built and operated by the same team that builds client software, so what we learn running
                it feeds straight back into the systems we ship.
              </p>
              <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 32 }}>
                <a href="https://gethaylo.co" target="_blank" rel="noreferrer" className="btn btn-primary">
                  Visit gethaylo.co <span className="btn-arrow" aria-hidden="true">{"→"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Ideas &amp; insights</div>
            <h2 className="sec-title">Notes from inside our own projects</h2>
          </div>
          <div className="insights-row reveal">
            {posts[0] ? (
              <div className="insights-featured">
                <BlogCard post={posts[0]} />
              </div>
            ) : null}
            <div className="insights-compact-list">
              {posts.slice(1, 3).map((post) => (
                <Link href={`/blog/${post.slug}`} className="insights-compact" key={post.slug}>
                  <span className="work-tag">{post.categories[0] || "Insights"}</span>
                  <h3>{post.title}</h3>
                </Link>
              ))}
              <Link href="/blog" className="work-link full-services-link">
                View all insights <span aria-hidden="true">{"→"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        id="contact"
        eyebrow="Get in touch"
        title="Have something worth fixing?"
        body={["Tell us what's slowing the business down, and we'll get back to you within one business day."]}
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
