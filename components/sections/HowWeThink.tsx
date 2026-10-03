import { ValueIcon } from "@/components/ui/ValueIcon";
import { coreValues } from "@/lib/data";

const principles = coreValues.slice(0, 3);

export function HowWeThink() {
  return (
    <section className="think-sec sec">
      <div className="wrap">
        <div className="think-intro reveal">
          <div className="sec-tag">How we think</div>
          <h2 className="think-title">
            We build software that works for <span className="em">real businesses</span>
          </h2>
          <p className="think-lead">
            We focus on practical outcomes, intuitive experiences and long-term partnerships. Everything we
            build should create measurable value for the business using it.
          </p>
        </div>
        <div className="think-grid reveal">
          {principles.map((item) => (
            <div className="think-item" key={item.title}>
              <ValueIcon icon={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
