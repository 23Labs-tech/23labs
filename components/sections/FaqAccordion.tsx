import Link from "next/link";
import { faqs as defaultFaqs } from "@/lib/data";

type FaqItem = { question: string; answer: string };

const ANSWER_LINK_MARKERS: { marker: string; href: string }[] = [
  { marker: "initial consultation", href: "/contact" },
  { marker: "ongoing support", href: "/services/ongoing-support" },
];

function FaqAnswer({ answer }: { answer: string }) {
  for (const { marker, href } of ANSWER_LINK_MARKERS) {
    const index = answer.indexOf(marker);
    if (index !== -1) {
      return (
        <p>
          {answer.slice(0, index)}
          <Link href={href}>{marker}</Link>
          {answer.slice(index + marker.length)}
        </p>
      );
    }
  }

  return <p>{answer}</p>;
}

export function FaqAccordion({
  items,
  idPrefix = "faq",
  heading = "Frequently asked questions",
  eyebrow,
  className,
}: {
  items?: readonly FaqItem[];
  idPrefix?: string;
  heading?: string;
  eyebrow?: string;
  className?: string;
}) {
  const faqs = items ?? defaultFaqs;

  return (
    <section className={`sec${className ? ` ${className}` : ""}`} id={idPrefix}>
      <div className="wrap">
        <div className="sec-head reveal sec-head-center">
          {eyebrow ? <p className="mono">{eyebrow}</p> : null}
          <h2 className="sec-title">{heading}</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} name={`${idPrefix}-group`} open={index === 0}>
              <summary className="faq-trigger">
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-panel">
                <FaqAnswer answer={faq.answer} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
