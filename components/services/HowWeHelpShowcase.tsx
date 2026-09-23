"use client";

import Image from "next/image";
import { useState } from "react";

type Capability = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export function HowWeHelpShowcase({ capabilities }: { capabilities: Capability[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="howwehelp reveal">
      <div className="howwehelp-media">
        {capabilities.map((capability, index) => (
          <Image
            key={capability.title}
            src={capability.image.src}
            alt={capability.image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 900px) 100vw, 50vw"
            className={`howwehelp-media-img${index === activeIndex ? " is-active" : ""}`}
          />
        ))}
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
