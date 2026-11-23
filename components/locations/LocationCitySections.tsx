import Link from "next/link";
import { ServiceCardsGrid } from "@/components/sections/ServiceCardsGrid";
import { serviceLandingPages } from "@/lib/services";
import type { LocationCopyBlock, LocationCityContent, LocationCopyPart } from "@/lib/locationCityContent";

const locationServiceCards = serviceLandingPages.map((service) => ({
  slug: service.slug,
  href: service.href,
  title: service.navLabel,
  description: service.cardDescription,
}));

function isCopyParts(block: LocationCopyBlock): block is LocationCopyPart[] {
  return Array.isArray(block);
}

function RichParagraph({ block }: { block: LocationCopyBlock }) {
  if (!isCopyParts(block)) return <p>{block}</p>;

  return (
    <p>
      {block.map((part, index) =>
        part.href ? (
          <Link href={part.href} key={`${part.href}-${index}`}>
            {part.text}
          </Link>
        ) : (
          <span key={`${index}-${part.text.slice(0, 24)}`}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export function LocationCitySections({ content }: { content: LocationCityContent }) {
  return (
    <>
      {content.sections.map((section, index) => (
        <section className={index === 0 ? "sec no-top" : "sec"} key={section.id} id={section.id}>
          <div className="wrap">
            <div className="sec-head reveal">
              {section.eyebrow ? <span className="mono">{section.eyebrow}</span> : null}
              <h2 className="sec-title">{section.heading}</h2>
              {section.lead ? <p className="lead">{section.lead}</p> : null}
            </div>
            {section.paragraphs?.length ? (
              <div className="text-block reveal">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <RichParagraph block={paragraph} key={paragraphIndex} />
                ))}
              </div>
            ) : null}
            {section.points?.length ? (
              <div className="workflow-list reveal">
                {section.points.map((point) => (
                  <div className="workflow-card" key={point.title}>
                    <h3>{point.title}</h3>
                    {point.paragraphs.map((paragraph, paragraphIndex) => (
                      <RichParagraph block={paragraph} key={paragraphIndex} />
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
            {section.links?.length ? (
              <div className="workflow-list reveal">
                {section.links.map((link) => (
                  <div className="workflow-card" key={link.href}>
                    <h3>
                      <Link href={link.href}>{link.label}</Link>
                    </h3>
                    <p>{link.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}
      <section className="sec" id="what-we-do">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">{content.services.heading}</h2>
            <p className="lead">{content.services.lead}</p>
          </div>
          <ServiceCardsGrid items={locationServiceCards} />
        </div>
      </section>
    </>
  );
}
