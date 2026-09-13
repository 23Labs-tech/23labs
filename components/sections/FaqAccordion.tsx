"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal sec-head-center">
          <div className="sec-tag" style={{ justifyContent: "center" }}>
            FAQ
          </div>
          <h2 className="sec-title">Frequently asked questions</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-panel" id={`faq-panel-${index}`} role="region" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
