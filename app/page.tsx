import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeIndustries } from "@/components/sections/HomeIndustries";
import { OurApproach } from "@/components/sections/OurApproach";
import { OutcomeBand } from "@/components/sections/OutcomeBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
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

  return (
    <>
      <HomeHero />

      <AboutIntro />

      <section className="sec sec-alt" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">What we build</div>
            <h2 className="sec-title">
              Technology that removes <span className="em">operational friction</span>
            </h2>
            <p className="lead">
              Four ways we help growing businesses remove manual work, build the right software and
              connect the tools they already use.
            </p>
            <Link href="/services" className="work-link full-services-link">
              See the full services breakdown <span aria-hidden="true">{"→"}</span>
            </Link>
          </div>
          <div className="build-media-grid reveal">
            <div className="build-media-panel">
              <Image
                src="/site-images/tech-img-01.png"
                alt="Connected systems and automation visualised as a network of nodes"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
            <div className="capability-grid svc-grid-primary">
              {services.map((service) => (
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
          </div>
        </div>
      </section>

      <OutcomeBand />

      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Selected work</div>
            <h2 className="sec-title">
              Systems built for <span className="em">real businesses</span>
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

      <Testimonials />

      <HomeIndustries />

      <FaqAccordion />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">Insights</div>
            <h2 className="sec-title">
              Ideas from inside <span className="em">the work</span>
            </h2>
            <Link href="/blog" className="work-link full-services-link">
              View all insights <span aria-hidden="true">{"→"}</span>
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
