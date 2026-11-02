import { ProcessSection } from "@/components/sections/ProcessSection";

const homeProcessSteps = [
  {
    title: "Discovery",
    body: "We map your processes, systems and goals.",
  },
  {
    title: "Design and scope",
    body: "We plan the approach and agree scope before any build.",
  },
  {
    title: "Build",
    body: "We build in stages and keep your team involved.",
  },
  {
    title: "Launch and support",
    body: "We deploy carefully and keep refining as you grow.",
  },
];

export function HowWeWork() {
  return (
    <ProcessSection
      heading="Understand first. Then build."
      intro="A clear scope and price before development starts, and no more complexity than the problem needs."
      steps={homeProcessSteps}
    />
  );
}
