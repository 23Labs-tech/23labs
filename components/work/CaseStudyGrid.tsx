import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/caseStudies";

export function CaseStudyGrid() {
  const items = getAllCaseStudies();
  const [featuredItem, ...restItems] = items;

  return (
    <>
      <div className="hero-wide">
        <div className="cs-head reveal in">
          <div className="cs-head-copy">
            <div className="hero-badge">Case studies</div>
            <h1>Case studies: systems we have connected, automated and built</h1>
            <p className="hero-sub">Real work. Real results.</p>
            <p className="lead">
              See how we help businesses simplify operations, connect systems, automate workflows and build
              software around the way they actually work.
            </p>
          </div>
          <div className="cs-count">
            {items.length} case {items.length === 1 ? "study" : "studies"} · Newest first
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="cs-grid">
          {featuredItem ? <CaseStudyCard item={featuredItem} featured /> : null}
          {restItems.map((item) => (
            <CaseStudyCard item={item} key={item.slug} />
          ))}
        </div>
      </div>
    </>
  );
}
