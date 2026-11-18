import Link from "next/link";

export type RelatedPageItem = {
  href: string;
  title: string;
  description: string;
};

type RelatedPagesProps = {
  heading?: string;
  items: RelatedPageItem[];
};

/**
 * Generic cross-link section for services/industries/solutions pages.
 * Reuses the existing .related-links connected-grid markup/CSS (already
 * proven on ServiceLandingPage's "You might also need" section, including
 * its odd-item-count full-row fix) rather than introducing new styling, so
 * any page can drop this in and inherit the approved look without further
 * CSS work. Not wired into any page yet - each caller supplies its own
 * related-item list from its own data source.
 */
export function RelatedPages({ heading = "You might also need", items }: RelatedPagesProps) {
  if (!items.length) return null;

  return (
    <section className="sec no-top related-sec">
      <div className="wrap">
        <div className="sec-head related-head reveal">
          <h2 className="sec-title">{heading}</h2>
        </div>
        <div className="related-links reveal">
          {items.map((item) => (
            <Link href={item.href} className="related-link" key={item.href}>
              <div className="related-link-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
