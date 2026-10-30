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
      </div>
    </section>
  );
}
