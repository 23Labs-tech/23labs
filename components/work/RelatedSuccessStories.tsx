import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

type RelatedSuccessStoriesProps = {
  caseStudies: CaseStudy[];
};

export function RelatedSuccessStories({ caseStudies }: RelatedSuccessStoriesProps) {
  if (!caseStudies.length) return null;

  return (
    <section className="home-sec">
      <div className="wrap home-wrap">
        <div className="home-sec-head reveal">
          <div className="home-sec-head-row">
            <h2>More success stories</h2>
            <Link href="/work" className="text-link">
              View all success stories
            </Link>
          </div>
          <p className="lead">
            See how we&apos;ve helped businesses simplify operations, connect systems and reduce manual
            work.
          </p>
        </div>
        <div className="home-cell-grid cols-3 related-content-grid reveal">
          {caseStudies.map((item) => (
            <Link href={`/case-studies/${item.slug}`} className="home-cell home-work-cell" key={item.slug}>
              <div className="home-work-media">
                <Image
                  src={item.heroImage.src}
                  alt={item.heroImage.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <div className="home-work-body">
                <h3>{item.name}</h3>
                <p className="home-work-meta">{item.industry ?? item.category}</p>
                <p>{item.summary}</p>
                <span className="text-link">Read case study</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
