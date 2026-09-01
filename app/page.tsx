import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { OurApproach } from "@/components/sections/OurApproach";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/site/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { WorkShowcase } from "@/components/work/WorkShowcase";
import { getAllPosts } from "@/lib/blog";
import { faqs, services } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Automation & Custom Software Melbourne | 23Labs",
  description:
    "23Labs is a Melbourne automation and software studio building business automation, custom software, AI workflows and system integrations for growing Australian businesses.",
  ogDescription:
    "Business automation, custom software and connected systems designed to reduce manual work and help growing businesses operate better.",
  keywords: [
    "business automation Melbourne",
    "custom software development Melbourne",
    "workflow automation",
    "systems integration",
    "API integration",
    "AI automation",
  ],
});

export default function Home() {
  const posts = getAllPosts();
  const primaryServices = services.filter((service) => service.slug !== "digital-products-web-applications");
  const secondaryService = services.find((service) => service.slug === "digital-products-web-applications");

  return (
    <>
      <HomeHero />

      <StatsBand />

      <section className="sec sec-alt" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">What we build</div>
            <h2 className="sec-title">
              Automation, software <span className="em">and connected systems</span>
            </h2>
            <p className="lead">
              Three ways we help growing businesses remove manual work, build the right software and
              connect the tools they already use.
            </p>
            <Link href="/services" className="work-link full-services-link">
              See the full services breakdown <span aria-hidden="true">{"→"}</span>
            </Link>
          </div>
          <div className="svc-grid svc-grid-primary reveal">
            {primaryServices.map((service) => (
              <Link href={`/services/${service.slug}`} className="svc" key={service.slug}>
                <ServiceIcon slug={service.slug} />
                <h3>{service.homeTitle}</h3>
                <p>{service.summary}</p>
                <span className="work-link">
                  Explore {service.homeTitle} <span aria-hidden="true">{"→"}</span>
                </span>
              </Link>
            ))}
          </div>
          {secondaryService ? (
            <Link href="/services/web-app-development" className="svc-secondary reveal">
              <ServiceIcon slug={secondaryService.slug} className="svc-ico svc-ico-sm" />
              <div className="svc-secondary-body">
                <span className="mono">Also available</span>
                <h4>{secondaryService.title}</h4>
                <p>{secondaryService.summary}</p>
              </div>
              <span className="btn-arrow" aria-hidden="true">
                {"→"}
              </span>
            </Link>
          ) : null}
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

      <OurApproach />

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
