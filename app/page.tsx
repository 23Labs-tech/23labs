import Image from "next/image";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/site/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies, faqs, services, testimonials } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  description:
    "23Labs helps growing businesses automate operations, build software, integrate data, and launch fast websites that are ready for scale.",
  keywords: ["AI automation", "custom software", "web development", "data integration", "Melbourne technology studio"],
});

export default function Home() {
  return (
    <>
      <section className="hero hero-home">
        <Image
          src="/23labs-brand-mark.png"
          alt=""
          width={1600}
          height={1600}
          priority
          className="hero-brand-mark"
        />
        <div className="container hero-layout">
          <div className="hero-content">
            <p className="eyebrow">Automation, software, AI and data systems</p>
            <h1>
              Helping businesses scale with <span>confidence</span>
            </h1>
            <p className="hero-lead">
              From everyday operations to customer engagement, we help businesses remove inefficiencies
              and create systems that support long-term success.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Let&apos;s have a chat</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </div>

          <div className="hero-proof" aria-label="23Labs service outcomes">
            <Image
              src="/23labs-logo-dark.png"
              alt="23Labs"
              width={220}
              height={195}
              className="hero-proof-logo"
            />
            <h2>Practical systems for growing teams.</h2>
            <p>Cleaner operations, faster launches, and automation that fits the way your team already works.</p>
            <ul className="hero-proof-list">
              <li>
                <span>Manual workflow</span>
                <strong>Automated</strong>
              </li>
              <li>
                <span>Website launch</span>
                <strong>Shipped</strong>
              </li>
              <li>
                <span>Data visibility</span>
                <strong>Connected</strong>
              </li>
            </ul>
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
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <span className="service-eyebrow">{service.eyebrow}</span>
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
          <div className="case-grid">
            {caseStudies.map((item) => (
              <article className="case-card" key={item.name}>
                <div>
                  <p className="case-type">{item.type}</p>
                  <h3>{item.name}</h3>
                </div>
                <p>{item.problem}</p>
                <div className="case-result">
                  <span>Result</span>
                  <p>{item.result}</p>
                </div>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
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

      <section className="section">
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
