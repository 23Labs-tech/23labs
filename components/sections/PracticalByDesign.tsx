import { CheckIcon } from "@/components/industries/IndustryIcon";

export type PracticalByDesignData = {
  eyebrow?: string;
  heading?: string;
  paragraphs: readonly string[];
  panelEyebrow?: string;
  checklist: readonly string[];
};

export function PracticalByDesign({ data }: { data: PracticalByDesignData }) {
  const {
    eyebrow = "Built for real operations",
    heading = "Practical by design",
    paragraphs,
    panelEyebrow = "What we build in",
    checklist,
  } = data;

  return (
    <section className="sec sec-alt">
      <div className="wrap practical-grid">
        <div className="practical-copy reveal">
          <span className="mono">{eyebrow}</span>
          <h2 className="sec-title">{heading}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="practical-panel reveal">
          <span className="mono">{panelEyebrow}</span>
          <div className="practical-checklist">
            {checklist.map((item) => (
              <div className="practical-check" key={item}>
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
