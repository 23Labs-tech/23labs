import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HowWeThink } from "@/components/sections/HowWeThink";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { IndustryMarquee } from "@/components/sections/IndustryMarquee";
import { OutcomeBand } from "@/components/sections/OutcomeBand";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { StatsBand } from "@/components/sections/StatsBand";
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

      <IndustryMarquee />

      <AboutIntro />

      <StatsBand />

      <section className="sec sec-alt" id="services">
        <div className="wrap intro-copy">
          <h2 className="sec-title">
            Technology that removes <span className="em">operational friction</span>
          </h2>
          <p className="lead">
            Four ways we help growing businesses remove manual work, build the right software and
            connect the tools they already use.
          </p>
          <Link href="/services" className="work-link full-services-link">
            See all services
          </Link>
        </div>
        <div className="wrap">
          <ServiceShowcase />
        </div>
      </section>

      <OutcomeBand />

      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
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

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">
              Ideas from inside <span className="em">the work</span>
            </h2>
            <Link href="/blog" className="work-link full-services-link">
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
