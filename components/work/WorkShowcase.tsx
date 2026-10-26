import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/caseStudies";

export function WorkShowcase() {
  const items = getAllCaseStudies().slice(0, 3);

  return (
    <div className="work-feature-list">
      {items.map((item, index) => (
        <article className={`work-feature${index % 2 === 1 ? " flip" : ""} reveal`} key={item.slug}>
          <div className="work-feature-media">
            <Image
              src={item.heroImage.src}
              alt={item.heroImage.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
            />
          </div>
          <div className="work-feature-copy">
            <span className="cs-card-category">{item.category}</span>
            <h3>{item.headline}</h3>
            <p>{item.summary}</p>
            <div className="cs-card-results">
              {item.cardResults.map((result) => (
                <div className="cs-card-result" key={result.label}>
                  <span className="cs-card-result-value">{result.value}</span>
                  <span className="cs-card-result-label">{result.label}</span>
                </div>
              ))}
            </div>
            <Link href={`/case-studies/${item.slug}`} className="work-link">
              View case study <span aria-hidden="true">{"→"}</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
