import { industryLinks } from "@/lib/industries";

export function IndustryMarquee() {
  const labels = industryLinks.map((industry) => industry.label);

  return (
    <div className="marquee" aria-label="Industries we work with">
      <div className="marquee-track">
        {[...labels, ...labels].map((label, index) => (
          <span key={`${label}-${index}`} aria-hidden={index >= labels.length}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
