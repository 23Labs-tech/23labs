import { ServiceCardsGrid } from "@/components/sections/ServiceCardsGrid";
import { serviceLandingPages } from "@/lib/services";

type IndustrySolutionsGridProps = {
  id?: string;
  heading: string;
  intro: string;
  items: readonly { slug: string; description: string }[];
};

export function IndustrySolutionsGrid({ id, heading, intro, items }: IndustrySolutionsGridProps) {
  const cards = items.flatMap((item) => {
    const service = serviceLandingPages.find((candidate) => candidate.slug === item.slug);
    if (!service) return [];
    return [
      {
        slug: service.slug,
        href: service.href,
        title: service.navLabel,
        description: item.description,
      },
    ];
  });

  return (
    <section className="sec" id={id}>
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          <span className="mono">How we help</span>
          <h2 className="sec-title">{heading}</h2>
          <p className="lead">{intro}</p>
        </div>
        <div className="industry-solutions-grid">
          <ServiceCardsGrid items={cards} />
        </div>
      </div>
    </section>
  );
}
