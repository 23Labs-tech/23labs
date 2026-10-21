import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/caseStudies";

export function WorkShowcase() {
  const items = getAllCaseStudies();

  return (
    <div className="case-study-grid">
      {items.map((item, index) => (
        <Link href={`/case-studies/${item.slug}`} className="case-study-card reveal" key={item.slug}>
          <div className="case-study-media">
            <Image
              src={item.heroImage.src}
              alt={item.heroImage.alt}
              fill
              sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
            />
            <span className="case-study-tag">{item.category}</span>
          </div>
          <div className="case-study-body">
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <span className="work-link case-study-link">
              View case study <span className="btn-arrow" aria-hidden="true">{"→"}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
