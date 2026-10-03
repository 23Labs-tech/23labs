import { ProcessSection } from "@/components/sections/ProcessSection";
import { howWeWorkSteps } from "@/lib/data";

export function HowWeWork() {
  return (
    <ProcessSection
      layout="split"
      heading={
        <>
          Understand first.
          <br />
          Then we build.
        </>
      }
      intro="We start by understanding how your business actually works, then design and build the systems around it. Clear scope, practical delivery and no unnecessary complexity."
      cta={{ href: "/contact", label: "Start a conversation" }}
      steps={howWeWorkSteps}
    />
  );
}
