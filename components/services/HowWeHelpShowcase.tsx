"use client";

import { useState } from "react";
import { serviceVisualMap } from "@/components/ui/serviceVisualMap";
import { WorkflowField } from "@/components/ui/ServiceVisuals";

type Capability = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export function HowWeHelpShowcase({ capabilities }: { capabilities: Capability[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="howwehelp reveal">
      <div className="howwehelp-media" role="img" aria-label={capabilities[activeIndex]?.image.alt}>
        {capabilities.map((capability, index) => {
          const Visual = serviceVisualMap[capability.image.src] ?? WorkflowField;
          return (
            <Visual
              key={capability.title}
              className={`howwehelp-media-img${index === activeIndex ? " is-active" : ""}`}
            />
          );
        })}
      </div>
      <div className="howwehelp-list">
        {capabilities.map((capability, index) => (
          <button
            type="button"
            key={capability.title}
            className={`howwehelp-item${index === activeIndex ? " is-active" : ""}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
