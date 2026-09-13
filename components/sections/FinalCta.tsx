import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="final-cta">
      <Image
        src="/site-images/tech-img-04.png"
        alt="Abstract representation of connected business systems"
        fill
        sizes="100vw"
        className="final-cta-img"
      />
      <div className="final-cta-overlay" />
      <div className="wrap final-cta-in reveal">
        <div className="sec-tag" style={{ color: "rgba(245,245,247,0.75)" }}>
          Have something worth fixing?
        </div>
        <h2>
          Let&apos;s build the system <span className="em">your business actually needs</span>
        </h2>
        <ButtonLink href="/contact" variant="light" arrow>
          Start a conversation
        </ButtonLink>
      </div>
    </section>
  );
}
