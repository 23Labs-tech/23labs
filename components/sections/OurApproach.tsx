import { ProcessSection } from "@/components/sections/ProcessSection";

const approachItems = [
  {
    title: "Practical over flashy",
    body: "Every solution has to earn its place by saving time or making money.",
  },
  {
    title: "Built to be used",
    body: "The best systems are the ones your team actually wants to use every day.",
  },
  {
    title: "Partners, not vendors",
    body: "We work closely with clients to build solutions that fit the way their business actually operates.",
  },
];

export function OurApproach() {
  return (
    <ProcessSection
      eyebrow="Our approach"
      heading={
        <>
          We build software that works for <span className="em">real business</span>
        </>
      }
      intro="At 23Labs, we focus on practical outcomes, intuitive experiences and long-term partnerships. Everything we build is designed to deliver measurable impact."
      steps={approachItems}
    />
  );
}
