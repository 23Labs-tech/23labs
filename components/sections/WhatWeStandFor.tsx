import { ValueIcon } from "@/components/ui/ValueIcon";
import { coreValues } from "@/lib/data";

export function WhatWeStandFor() {
  return (
    <section className="standfor-sec sec no-top">
      <div className="wrap">
        <div className="standfor-intro reveal">
          <div className="sec-tag">What we stand for</div>
          <h2 className="standfor-title">Built on a few things we won&apos;t compromise</h2>
        </div>
        <div className="standfor-grid reveal">
          {coreValues.map((item) => (
            <div className="standfor-item" key={item.title}>
              <ValueIcon icon={item.icon} className="standfor-icon" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
