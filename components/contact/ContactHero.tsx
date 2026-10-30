import Image from "next/image";

export function ContactHero() {
  return (
    <header className="contact-hero">
      <div className="contact-hero-media">
        <Image
          src="/site-images/photos/team-dashboard-presentation.png"
          alt="A team reviewing a performance dashboard during a meeting"
          fill
          priority
          sizes="100vw"
        />
        <div className="contact-hero-overlay" aria-hidden="true" />
      </div>
      <div className="hero-wide contact-hero-shell">
        <div className="contact-hero-content">
          <span className="mono">Contact</span>
          <h1>Let&apos;s talk about what your business needs next.</h1>
          <p className="lead">
            Tell us what isn&apos;t working, what you&apos;re trying to improve, or what you want to build next. We&apos;ll
            review your enquiry and get back to you within one business day.
          </p>
        </div>
      </div>
    </header>
  );
}
