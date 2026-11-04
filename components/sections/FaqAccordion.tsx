import Link from "next/link";
import { faqs as defaultFaqs } from "@/lib/data";

type FaqItem = { question: string; answer: string };

function FaqAnswer({ answer }: { answer: string }) {
  const marker = "initial consultation";
  const index = answer.indexOf(marker);
  if (index === -1) return <p>{answer}</p>;

  return (
    <p>
      {answer.slice(0, index)}
      <Link href="/contact">{marker}</Link>
      {answer.slice(index + marker.length)}
    </p>
  );
}

export function FaqAccordion({
  items,
  idPrefix = "faq",
  heading = "Frequently asked questions",
}: {
  items?: readonly FaqItem[];
  idPrefix?: string;
  heading?: string;
}) {
  const faqs = items ?? defaultFaqs;

  return (
    <section className="sec" id={idPrefix}>
      <div className="wrap">
        <div className="sec-head reveal sec-head-center">
          <h2 className="sec-title sec-title-accent">{heading}</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
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
