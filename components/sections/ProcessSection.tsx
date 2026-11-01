import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

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

export function ProcessSection({
  eyebrow,
  heading,
  intro,
  timelineLabel,
  cta,
  steps,
  id,
}: ProcessSectionProps) {
  return (
    <section className="sec proc-sec" id={id}>
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          {eyebrow ? <span className="mono">{eyebrow}</span> : null}
          <h2 className="sec-title">{heading}</h2>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
        {timelineLabel ? <p className="proc-timeline-label">{timelineLabel}</p> : null}
        <div className="proc-grid reveal">
          {steps.map((step, index) => (
            <div className="proc-card" key={step.title}>
              <div className="proc-step-number">{String(index + 1).padStart(2, "0")}</div>
              {step.label ? <span className="proc-step-label">{step.label}</span> : null}
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        {cta ? (
          <div className="proc-cta-row reveal">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
