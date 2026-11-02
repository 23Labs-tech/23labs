import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HowWeThink } from "@/components/sections/HowWeThink";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { OutcomeBand } from "@/components/sections/OutcomeBand";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { JsonLd } from "@/components/site/JsonLd";
import { WorkShowcase } from "@/components/work/WorkShowcase";
import { getAllPosts } from "@/lib/blog";
import { faqs } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Custom Software & Business Automation | 23Labs",
  description:
    "23Labs builds custom software, business automation and system integrations for Australian and NZ businesses still running on manual work and spreadsheets.",
  ogDescription:
    "Custom software, business automation and system integrations for businesses still running on manual work and spreadsheets.",
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

  return (
    <>
      <HomeHero />

      <section className="sec sec-roomy" id="services">
        <div className="wrap-xl svc-showcase-sec">
          <div className="svc-showcase-head reveal">
            <div className="svc-showcase-head-copy">
              <span className="mono">What we do</span>
              <h2 className="sec-title">Software and automation built around your business</h2>
            </div>
            <div className="svc-showcase-head-intro">
              <p className="lead">
                23Labs helps businesses simplify operations, connect disconnected systems and remove
                repetitive manual work.
              </p>
              <p className="lead">
                From integrations and workflow automation to AI and custom software, we build
                practical solutions around the way your business actually operates.
              </p>
              <Link href="/services" className="work-link full-services-link">
                See all services
              </Link>
            </div>
          </div>
          <ServiceShowcase />
        </div>
      </section>

      <OutcomeBand />

      <section className="sec sec-alt" id="work">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">
              Systems built for <span className="em">real businesses</span>
            </h2>
            <p className="lead">A few of the products, platforms, and rebuilds we&apos;ve shipped recently.</p>
            <Link href="/work" className="work-link full-services-link">
              See all case studies
            </Link>
          </div>
          <WorkShowcase />
        </div>
      </section>

      <HowWeWork />

      <HowWeThink />

      <FaqAccordion />

      <section className="sec sec-alt sec-roomy">
        <div className="wrap-xl">
          <div className="blog-head reveal">
            <h2 className="sec-title">
              Latest <span className="em">insights</span> and resources
            </h2>
            <Link href="/blog" className="work-link">
              View all insights
            </Link>
          </div>
          <div className="blog-grid reveal">
            {posts.slice(0, 3).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />

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
