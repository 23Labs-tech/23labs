import Link from "next/link";

export const safeByDesignControls = [
  "Least-privilege access",
  "Credentials stored securely, never in code",
  "Human approval for higher-risk steps",
  "Logging and failure alerts",
  "A way to pause or remove any automation",
  "Documentation and handover",
] as const;

export function SafeByDesign() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="sec-title">Safe by design</h2>
          <p className="lead">
            Automation is only useful if you can trust it. Every automation, integration and AI agent we build
            follows the same controls, and is designed around Australian and New Zealand privacy expectations.
          </p>
        </div>
        <div className="problem-grid reveal">
          {safeByDesignControls.map((control) => (
            <div className="problem-card" key={control}>
              <h3>{control}</h3>
            </div>
          ))}
        </div>
        <div className="text-block reveal">
          <p>
            Read how we handle <Link href="/security">security and data</Link>, or see our approach to{" "}
            <Link href="/solutions/ai-governance">AI safety and governance</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
