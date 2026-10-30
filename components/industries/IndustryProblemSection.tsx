import Image from "next/image";
import { CheckIcon } from "@/components/industries/IndustryIcon";

type IndustryProblemSectionProps = {
  eyebrow: string;
  heading: string;
  paragraphs: readonly [string, string];
  bullets: readonly [string, string, string];
  image: { src: string; alt: string };
};

export function IndustryProblemSection({ eyebrow, heading, paragraphs, bullets, image }: IndustryProblemSectionProps) {
  return (
    <section className="sec no-top">
      <div className="wrap">
        <div className="industry-problem-grid reveal">
          <div className="industry-problem-copy">
            <span className="mono">{eyebrow}</span>
            <h2 className="sec-title">{heading}</h2>
            {paragraphs.map((paragraph) => (
              <p className="lead" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <ul className="industry-problem-checklist">
              {bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="industry-problem-media">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
