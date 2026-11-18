import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { JsonLd } from "@/components/site/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { getAllPosts } from "@/lib/blog";
import { getCaseStudy } from "@/lib/caseStudies";
import { homeBuildItems, homeCaseStudies, homeFaqs, homeProblems } from "@/lib/data";
import { industryLinks } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

/**
 * Priority industries for the homepage, in the order requested. Only two of
 * the four requested sectors have a live page ("Transport & Logistics" ->
 * freight-logistics, "Trades & Field Services" -> trades-field-services) -
 * "Manufacturing & Fabrication" and "Property Maintenance" don't exist as
 * pages anywhere in the site, so they are not linked here (see
 * docs/WEBSITE_GROWTH_AUDIT.md). Construction and Real Estate fill the
 * remaining two slots as the closest existing, genuinely live pages.
 */
const homePriorityIndustryBlurbs: Record<string, string> = {
  "freight-logistics": "Quoting, allocation, proof of delivery and invoicing that stay connected to your TMS.",
  "trades-field-services": "Enquiries, quotes, scheduling and job updates, without the back-and-forth.",
  construction: "Project, compliance and client communication systems that keep pace with the job.",
  "real-estate": "Enquiries, inspections and maintenance requests linked to the right property record.",
};
const homePriorityIndustries = Object.keys(homePriorityIndustryBlurbs).map((slug) => {
  const industry = industryLinks.find((item) => item.slug === slug)!;
  return { ...industry, body: homePriorityIndustryBlurbs[slug] };
});

const FALLBACK_BLOG_IMAGE = "/23labs-logo-dark.png";

const homeProcessSteps = [
  {
    title: "Understand the workflow",
    body: "We learn how your team works, what systems you use and where the biggest challenges are.",
  },
  {
    title: "Agree a practical approach",
    body: "We review your existing processes to identify manual tasks, disconnected systems and opportunities to improve efficiency.",
  },
  {
    title: "Build and integrate",
    body: "We develop practical solutions around your existing workflows, whether that's automation, system integrations or custom software.",
  },
  {
    title: "Support and improve",
    body: "We test, implement and refine the solution with your team, providing ongoing support as your business evolves.",
  },
] as const;

function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
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
  const workItems = homeCaseStudies
    .map((item) => ({ ...item, full: getCaseStudy(item.slug) }))
    .filter((item) => item.full);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HomeHero />

      {/* Neutral proof strip: no client logos/testimonials exist to show yet */}
      <div className="wrap home-wrap">
        <div className="home-proof-strip">
          <span>Business process automation</span>
          <span>System integrations</span>
          <span>Custom software</span>
          <span>AI workflows and agents</span>
        </div>
      </div>

      {/* The problems we solve */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <h2>The problems we solve</h2>
            <p className="lead">
              Different businesses, the same underlying pattern: work that should move on its own is
              still moving through people.
            </p>
          </div>
          <div className="problem-grid reveal">
            {homeProblems.map((item) => (
              <div className="problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Priority industries */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <div className="home-sec-head-row">
              <h2>Built for businesses that are growing</h2>
              <Link href="/industries" className="text-link">
                All industries
              </Link>
            </div>
          </div>
          <div className="home-cell-grid cols-4 reveal">
            {homePriorityIndustries.map((industry) => (
              <Link href={industry.href} className="home-cell" key={industry.slug}>
                <IndustryIcon icon={industry.icon} />
                <h3>{industry.label}</h3>
                <p>{industry.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-process-grid reveal">
            <p className="mono home-process-eyebrow">How we work</p>
            <div className="home-process-copy">
              <h2>We start with the business, not the technology.</h2>
              <p>
                Most businesses don&apos;t set out to create complicated processes. Over time, systems
                become disconnected, manual work builds up, and simple tasks start taking longer than
                they should.
              </p>
              <p>
                At 23Labs, we focus on understanding how your business actually operates before
                recommending a solution.
              </p>
              <p>
                We look at your existing workflows, identify where time is being lost, and work out
                what can be improved through automation, integrations or custom software.
              </p>
              <p>
                The goal isn&apos;t to introduce more technology for the sake of it. It&apos;s to build
                practical solutions that make your business easier to run.
              </p>
            </div>
            <div className="home-process-steps">
              {homeProcessSteps.map((step, index) => (
                <div className="home-process-step" key={step.title}>
                  <span className="home-process-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="home-sec" id="work">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <div className="home-sec-head-row">
              <h2>Systems running in real businesses</h2>
              <Link href="/work" className="text-link">
                All case studies
              </Link>
            </div>
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

      {/* Why 23Labs */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-why reveal">
            <div className="home-why-copy">
              <p className="mono">Why 23Labs</p>
              <h2>Technology built around how your business works.</h2>
              <p>
                Most businesses don&apos;t need more software. They need their existing systems, people
                and processes to work better together.
              </p>
              <p>
                At 23Labs, we build practical automation, integrations and custom software that remove
                repetitive work, connect disconnected tools and make everyday operations easier to
                manage.
              </p>
              <p>
                We take the time to understand how your business operates before recommending what to
                build. Whether it&apos;s a small integration or a complete custom system, the goal is
                always the same: less manual work, fewer complications and more time to focus on
                running your business.
              </p>
              <ButtonLink href="/contact">Let&apos;s talk</ButtonLink>
            </div>
            <div className="home-why-media">
              <Image
                src="/site-images/photos/team-dashboard-presentation.png"
                alt="A team reviewing automated workflow data together on a dashboard"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion items={homeFaqs} heading="Common questions" className="home-sec" />

      {/* From the blog */}
      <section className="home-sec">
        <div className="wrap home-wrap">
          <div className="home-sec-head reveal">
            <div className="home-sec-head-row">
              <h2>From the blog</h2>
              <Link href="/blog" className="text-link">
                View all articles
              </Link>
            </div>
            <p className="lead">
              Practical insights on business automation, software and making everyday operations run
              better.
            </p>
          </div>
          <div className="home-cell-grid cols-3 reveal">
            {posts.map((post) => {
              const hasImage = post.featuredImage !== FALLBACK_BLOG_IMAGE;
              return (
                <Link
                  href={`/blog/${post.slug}`}
                  className={`home-cell home-blog-cell${hasImage ? "" : " no-image"}`}
                  key={post.slug}
                >
                  {hasImage ? (
                    <div className="home-work-media">
                      <Image
                        src={post.featuredImage}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 760px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="home-blog-body">
                    <time className="home-blog-date" dateTime={post.date}>
                      {formatBlogDate(post.date)}
                    </time>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="text-link">Read article</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((faq) => ({
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
