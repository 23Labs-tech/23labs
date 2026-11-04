import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/site/JsonLd";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { getAllPosts } from "@/lib/blog";
import { faqs, homeBuildItems, homeCaseStudies, manualWorkAreas } from "@/lib/data";
import { industryLinks } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const INTRO_HIGHLIGHT_ICON: Record<string, string> = {
  "business-process-automation": "automation",
  "system-integrations": "integration",
  "ai-workflow-automation": "spark",
};

function ArrowRightIcon() {
  return (
    <svg
      className="highlight-row-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

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
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HomeHero />

      <section className="sec">
        <div className="wrap intro-highlights reveal">
          <div className="intro-highlights-copy">
            <h2 className="sec-title">Bringing real automation to your technology mission</h2>
            <p>
              Wherever you are in the journey, from one broken workflow to a full system rebuild,
              we bring the same hands-on, customer-first approach to getting it working properly.
            </p>
          </div>
          <div className="highlight-rows">
            {homeBuildItems
              .filter((item) => INTRO_HIGHLIGHT_ICON[item.slug])
              .map((item) => (
                <Link href={item.href} className="highlight-row" key={item.slug}>
                  <IndustryIcon icon={INTRO_HIGHLIGHT_ICON[item.slug]} className="highlight-row-ico" />
                  <h3>{item.title}</h3>
                  <ArrowRightIcon />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">Where the manual hours usually go</h2>
            <p className="lead">If one of these sounds familiar, it is usually the right place to start.</p>
          </div>
          <div className="hours-list reveal">
            {manualWorkAreas.map((item) => (
              <div className="hours-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="services">
        <div className="wrap intro-copy">
          <h2 className="sec-title">What we build</h2>
          <p className="lead">
            Four kinds of work, all covered by{" "}
            <Link href="/services/ongoing-support" className="text-link">
              ongoing support
            </Link>{" "}
            after launch.
          </p>
        </div>
        <div className="wrap">
          <ServiceShowcase />
        </div>
      </section>

      <section className="sec sec-alt" id="work">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">Systems running in real businesses</h2>
            <Link href="/work" className="text-link">
              All case studies
            </Link>
          </div>
          <div className="panel-grid reveal">
            {homeCaseStudies.map((item) => (
              <article className="panel-card" key={item.slug}>
                <span className="mono">{item.company}</span>
                <h3>{item.headline}</h3>
                <p>{item.summary}</p>
                <Link href={`/case-studies/${item.slug}`} className="text-link">
                  Read the case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title">Built for operational businesses</h2>
            <p className="lead">
              Where jobs, people and paperwork move between disconnected systems every day.
            </p>
          </div>
          <div className="industry-grid reveal">
            {industryLinks.map((item) => (
              <Link href={item.href} className="industry-card industry-card-link" key={item.slug}>
                <IndustryIcon icon={item.icon} />
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <span className="industry-link">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <FaqAccordion heading="Common questions" />

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <h2 className="sec-title sec-title-accent">From the work</h2>
            <Link href="/blog" className="text-link">
              All insights
            </Link>
          </div>
          <div className="blog-grid reveal">
            {posts.map((post) => (
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
