import Link from "next/link";

export function ContactHero() {
  return (
    <header className="contact-hero">
      <div className="wrap contact-hero-shell">
        <div className="contact-hero-content">
          <span className="mono">Contact</span>
          <h1>Tell us what&apos;s slowing your business down.</h1>
          <p className="lead">
            You don&apos;t need a technical brief. Explain the task, process or disconnected system your
            team is dealing with, and we&apos;ll work out whether the answer is automation, an integration,
            custom software or something simpler.
          </p>
          <p className="contact-hero-note">
            See how this worked for a similar business:{" "}
            <Link href="/case-studies/huntress-recruitment">Huntress Recruitment</Link>.
          </p>
        </div>
      </div>
    </header>
  );
}
