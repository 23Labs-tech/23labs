import Image from "next/image";
import Link from "next/link";
import { CoritVisual, FirstNationalVisual, HayloVisual } from "@/components/work/CaseVisuals";
import { caseStudies } from "@/lib/data";

const customVisuals: Record<string, React.ComponentType> = {
  "haylo-ai": HayloVisual,
  "corit-tech": CoritVisual,
  "first-national-real-estate": FirstNationalVisual,
};

export function WorkShowcase() {
  return (
    <div className="showcase-list">
      {caseStudies.map((item, index) => {
        const flow = "flow" in item ? item.flow : undefined;
        const CustomVisual = customVisuals[item.slug];

        return (
          <article className={`showcase-item reveal${index % 2 === 1 ? " flip" : ""}`} key={item.slug}>
            <div className="showcase-media">
              {CustomVisual ? (
                <CustomVisual />
              ) : (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  loading="lazy"
                />
              )}
            </div>
            <div className="showcase-copy">
              <span className="showcase-tag">{item.type}</span>
              <h3>{item.name}</h3>
              <p>{item.problem}</p>
              {flow ? (
                <div className="showcase-flow" aria-label="Workflow">
                  {flow.map((step) => (
                    <span key={step}>{step}</span>
                  ))}
                </div>
              ) : null}
              <Link href={`/work#${item.slug}`} className="work-link">
                View project <span aria-hidden="true">{"→"}</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
