import Link from "next/link";
import type { ReactNode } from "react";

export type ProcessStepData = {
  label?: string;
  title: string;
  body: string;
};

type ProcessSectionProps = {
  eyebrow?: string;
  heading: ReactNode;
  intro?: string;
  timelineLabel?: string;
  cta?: { href: string; label: string };
  steps: readonly ProcessStepData[];
  layout?: "split" | "stacked";
  id?: string;
};

function ProcessTimeline({
  steps,
  label,
}: {
  steps: readonly ProcessStepData[];
  label?: string;
}) {
  return (
    <div>
      {label ? <div className="proc-timeline-label">{label}</div> : null}
      <div className="proc-timeline reveal">
        {steps.map((step, index) => (
          <div className="proc-step" key={step.title}>
            <div className="proc-step-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="proc-step-dot" aria-hidden="true" />
            <div className="proc-step-body">
              <span className="proc-step-label">{step.label ?? `Step ${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProcessSection({
  eyebrow,
  heading,
  intro,
  timelineLabel,
  cta,
  steps,
  layout = "stacked",
  id,
}: ProcessSectionProps) {
  if (layout === "split") {
    return (
      <section className="proc-sec sec sec-dark" id={id}>
        <div className="wrap proc-grid">
          <div className="proc-intro reveal">
            {eyebrow ? <div className="sec-tag">{eyebrow}</div> : null}
            <h2 className="proc-title">{heading}</h2>
            {intro ? <p className="proc-lead">{intro}</p> : null}
            {cta ? (
              <Link href={cta.href} className="proc-cta">
                {cta.label}
                <span className="proc-cta-arrow" aria-hidden="true">
                  {"↗"}
                </span>
              </Link>
            ) : null}
          </div>
          <ProcessTimeline steps={steps} label={timelineLabel} />
        </div>
      </section>
    );
  }

  return (
    <section className="proc-sec sec sec-dark" id={id}>
      <div className="wrap proc-intro-center reveal">
        {eyebrow ? (
          <div className="sec-tag" style={{ justifyContent: "center" }}>
            {eyebrow}
          </div>
        ) : null}
        <h2 className="proc-title">{heading}</h2>
        {intro ? <p className="proc-lead proc-lead-center">{intro}</p> : null}
      </div>
      <div className="wrap">
        <div className="proc-timeline-wrap">
          <ProcessTimeline steps={steps} label={timelineLabel} />
        </div>
      </div>
    </section>
  );
}
