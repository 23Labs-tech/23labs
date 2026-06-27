import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { HomeHero } from "@/components/sections/HomeHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/site/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { getAllPosts } from "@/lib/blog";
import { caseStudies, faqs, services, testimonials } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  description:
    "23Labs helps growing businesses automate operations, build software, integrate data, and launch fast websites that are ready for scale.",
  keywords: ["AI automation", "custom software", "web development", "data integration", "Melbourne technology studio"],
});

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <HomeHero />

      <section className="section intro-section" id="about">
        <div className="container intro-copy">
          <p className="eyebrow">About 23Labs</p>
          <h2>
            Practical technology, built around <span>your business</span>
          </h2>
          <p>
            We are a studio building automation, software, and AI tools that remove busywork and help
            businesses scale with confidence.
          </p>
          <p>
            Most businesses do not need more software. They need the right systems working together.
            We partner with growing teams to find the friction, build practical solutions, and make
            the day-to-day easier to run.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/about" variant="secondary">
              Read our full story
            </ButtonLink>
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="How we help modern businesses "
            highlight="grow"
            body="Focused technology services for businesses that need cleaner systems, stronger operations, and better digital experiences."
          />
          <div className="service-grid svc-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.slug}>
                <div className="service-card-top">
                  <span className="service-icon">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-eyebrow">{service.eyebrow}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ButtonLink href={`/services#${service.slug}`} variant="secondary" className="text-link">
                  View service
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section" id="work">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Trusted by growing "
            highlight="businesses"
            body="The details change from project to project. The pattern stays the same: find the friction, build the right system, and make it easy to use."
          />
          <div className="work-grid">
            {caseStudies.map((item) => (
              <WorkCard {...item} compact key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section product-band" id="haylo">
        <div className="container product-grid">
          <div>
            <p className="eyebrow">Product build</p>
            <h2>Haylo AI captures enquiries when your team is busy, offline, or closed.</h2>
            <p>
              Haylo is our AI receptionist product for service businesses that need missed calls,
              bookings, and after-hours enquiries handled without adding more manual admin.
            </p>
            <ButtonLink href="/contact" variant="light">
              Ask about Haylo
            </ButtonLink>
          </div>
          <div className="call-panel" aria-label="Example Haylo call workflow">
            <div className="call-panel-heading">
              <span>Haylo workflow</span>
              <strong>Always on</strong>
            </div>
            <div>
              <span>Incoming call</span>
              <strong>Answered</strong>
            </div>
            <div>
              <span>Appointment request</span>
              <strong>Booked</strong>
            </div>
            <div>
              <span>After-hours enquiry</span>
              <strong>Logged</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Client notes" title="What clients value " highlight="most" />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.name}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-split-heading">
            <SectionHeading
              eyebrow="Blog"
              title="Latest thinking for "
              highlight="growing teams"
              body="Practical SEO-ready articles on automation, lead response, operations, and the systems that help service businesses scale."
            />
            <ButtonLink href="/blog" variant="secondary">
              View all articles
            </ButtonLink>
          </div>
          <div className="blog-grid blog-grid-featured">
            {latestPosts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        id="contact"
        eyebrow="Start a conversation"
        title="Tell us where the friction is. We will map the practical next move."
        body="Whether you want to save time, improve the way your team works, attract more customers, or prepare for growth, we would love to hear from you."
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
