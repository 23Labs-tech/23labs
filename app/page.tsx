import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { JsonLd } from "@/components/site/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { getCaseStudy } from "@/lib/caseStudies";
import { faqs, homeBuildItems, homeCaseStudies, processSteps } from "@/lib/data";
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
  const posts = getAllPosts().slice(0, 3);
  const workItems = homeCaseStudies
    .map((item) => ({ ...item, full: getCaseStudy(item.slug) }))
    .filter((item) => item.full);

  return (
    <>
      <HomeHero />

      {/* About 23Labs */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-about reveal">
            <div className="home-about-media">
              <Image
                src="/home-hero-header.jpeg"
                alt="23Labs team reviewing an automated workflow"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="home-about-copy">
              <p className="mono">About 23Labs</p>
              <h2>
                Practical technology, built around <span className="em">your business</span>
              </h2>
              <p>
                23Labs started with a simple belief: most businesses do not need more software, they
                need the right systems working together. We work with businesses that have outgrown
                spreadsheets, manual processes and disconnected software, replacing unnecessary
                complexity with systems designed around how they actually operate.
              </p>
              <Link href="/about" className="text-link">
                Learn more about 23Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="home-sec" id="services">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <h2>What we build</h2>
            <p className="lead">
              Four kinds of work, all covered by{" "}
              <Link href="/services/ongoing-support" className="text-link">
                ongoing support
              </Link>{" "}
              after launch.
            </p>
          </div>
          <div className="home-cell-grid cols-4 reveal">
            {homeBuildItems.map((item, index) => (
              <Link href={item.href} className="home-cell" key={item.slug}>
                <span className="home-cell-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <h2>How we work</h2>
          </div>
          <div className="home-cell-grid cols-3 reveal">
            {processSteps.map((step, index) => (
              <div className="home-cell" key={step.title}>
                <span className="home-cell-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.lead}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="home-sec" id="work">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <h2>Systems running in real businesses</h2>
            <Link href="/work" className="text-link">
              All case studies
            </Link>
          </div>
          <div className="home-cell-grid cols-3 reveal">
            {workItems.map((item) => (
              <Link href={`/case-studies/${item.slug}`} className="home-cell home-work-cell" key={item.slug}>
                <div className="home-work-media">
                  <Image
                    src={item.full!.heroImage.src}
                    alt={item.full!.heroImage.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div className="home-work-body">
                  <h3>{item.headline}</h3>
                  <p className="home-work-meta">{item.full!.industry ?? item.full!.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion heading="Common questions" eyebrow="Questions" />

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="sec-head sec-head-center reveal">
            <p className="mono">Insights</p>
            <h2 className="sec-title">From the work</h2>
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
