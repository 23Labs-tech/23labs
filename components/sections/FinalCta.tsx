import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="sec final-cta">
      <div className="wrap final-cta-in reveal">
        <h2>
          Have something worth fixing? Let&apos;s build the system{" "}
          <span className="em">your business actually needs</span>
        </h2>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </div>
    </section>
  );
}
