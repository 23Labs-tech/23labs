import Link from "next/link";
import { CalendlyWidget } from "@/components/contact/CalendlyWidget";

export function BookingSection() {
  return (
    <section className="sec booking-section">
      <div className="wrap">
        <div className="booking-head reveal">
          <span className="mono">Book a time</span>
          <h2 className="sec-title">Pick a time that suits you</h2>
          <p className="lead">
            Choose a time that works for you and we&apos;ll talk through what&apos;s slowing things down, what
            you&apos;re currently using, and where automation or software could help most.
          </p>
        </div>
        <CalendlyWidget />
        <p className="contact-hero-note">
          Have security or data-handling requirements to work through first? See how we handle{" "}
          <Link href="/security">access, credentials and data</Link>.
        </p>
      </div>
    </section>
  );
}
