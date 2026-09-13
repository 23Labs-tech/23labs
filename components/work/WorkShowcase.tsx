import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";

export function WorkShowcase() {
  const [featured, ...rest] = caseStudies;

  return (
    <div className="showcase-list">
      {featured ? (
        <Link href={`/work#${featured.slug}`} className="showcase-featured reveal">
          <div className="showcase-featured-media">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              sizes="(max-width: 1080px) 100vw, 1160px"
              priority
            />
            <span className="showcase-featured-tag">{featured.type}</span>
            <div className="showcase-featured-panel">
              <div>
                <h3>{featured.name}</h3>
                <p>{featured.problem}</p>
              </div>
              <span className="btn btn-light showcase-featured-cta">
                View <span className="btn-arrow" aria-hidden="true">{"→"}</span>
              </span>
            </div>
          </div>
        </Link>
      ) : null}

      <div className="showcase-secondary-grid">
        {rest.map((item) => (
          <Link href={`/work#${item.slug}`} className="showcase-secondary-card reveal" key={item.slug}>
            <div className="showcase-secondary-media">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
                loading="lazy"
              />
              <span className="showcase-featured-tag">{item.type}</span>
            </div>
            <div className="showcase-secondary-body">
              <h3>{item.name}</h3>
              <p>{item.problem}</p>
              <span className="work-link">
                View project <span aria-hidden="true">{"→"}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
