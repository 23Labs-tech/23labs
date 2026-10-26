import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

export function CaseStudyCard({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  const media = item.logo ?? { src: item.heroImage.src, alt: item.heroImage.alt, contain: false };

  return (
    <Link href={`/case-studies/${item.slug}`} className={`cs-card${featured ? " featured" : ""} reveal`}>
      <div className={`cs-card-logo${media.contain ? " contain" : ""}`}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={featured ? "(max-width: 900px) 100vw, 420px" : "(max-width: 680px) 100vw, 360px"}
        />
      </div>
      <div className="cs-card-body">
        <span className="cs-card-category">{item.category}</span>
        {item.headline.includes(item.name) ? null : <p className="cs-card-client">{item.name}</p>}
        <h3 className="cs-card-headline">{item.headline}</h3>
        <p className="cs-card-summary">{item.summary}</p>
        <div className="cs-card-results">
          {item.cardResults.map((result) => (
            <div className="cs-card-result" key={result.label}>
              <span className="cs-card-result-value">{result.value}</span>
              <span className="cs-card-result-label">{result.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
