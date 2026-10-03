import Link from "next/link";
import { howWeWorkSteps } from "@/lib/data";

export function HowWeWork() {
  return (
    <section className="hww sec sec-dark">
      <div className="wrap hww-grid">
        <div className="hww-intro reveal">
          <h2 className="hww-title">
            Understand first.
            <br />
            Then we build.
          </h2>
          <p className="hww-lead">
            We start by understanding how your business actually works, then design and build the
            systems around it. Clear scope, practical delivery and no unnecessary complexity.
          </p>
          <Link href="/contact" className="hww-cta">
            Start a conversation
            <span className="hww-cta-arrow" aria-hidden="true">
              {"↗"}
            </span>
          </Link>
        </div>

        <div className="hww-timeline reveal">
          {howWeWorkSteps.map((step) => (
            <div className="hww-step" key={step.number}>
              <div className="hww-step-number">{step.number}</div>
              <div className="hww-step-dot" aria-hidden="true" />
              <div className="hww-step-body">
                <span className="hww-step-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
