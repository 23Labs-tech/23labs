"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = items ?? defaultFaqs;

  return (
    <section className="sec" id={idPrefix}>
      <div className="wrap">
        <div className="sec-head reveal sec-head-center">
          <h2 className="sec-title">{heading}</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${idPrefix}-panel-${index}`;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-panel" id={panelId} role="region" hidden={!isOpen}>
                  <FaqAnswer answer={faq.answer} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
