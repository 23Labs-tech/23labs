import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";

export function WorkShowcase() {
  return (
    <div className="case-study-grid">
      {caseStudies.map((item, index) => (
        <Link
          href={`/work#${item.slug}`}
          className="case-study-card reveal"
          key={item.slug}
        >
          <div className="case-study-media">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
            />
            <span className="case-study-tag">{item.type}</span>
          </div>
          <div className="case-study-body">
            <h3>{item.name}</h3>
            <p>{item.problem}</p>
            <span className="work-link case-study-link">
              View case study <span className="btn-arrow" aria-hidden="true">{"→"}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
