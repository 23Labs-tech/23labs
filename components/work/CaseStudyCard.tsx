import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

export function CaseStudyCard({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  const logo = item.logo;

  return (
    <Link href={`/case-studies/${item.slug}`} className={`cs-card${featured ? " featured" : ""} reveal`}>
      <div className={`cs-card-logo${logo?.contain ? " contain" : ""}`}>
        {logo ? (
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes={featured ? "(max-width: 900px) 100vw, 420px" : "(max-width: 680px) 100vw, 360px"}
          />
        ) : null}
      </div>
      <div className="cs-card-body">
        <span className="cs-card-category">{item.category}</span>
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
