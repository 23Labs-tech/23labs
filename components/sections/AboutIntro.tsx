import Link from "next/link";

export function AboutIntro() {
  return (
    <section className="sec">
      <div className="wrap intro-copy">
        <h2>
          23Labs builds the software, automation and systems businesses need once spreadsheets,
          disconnected tools and manual processes start getting in the way.
        </h2>
        <p className="lead">
          We are based in Melbourne and work remotely with service businesses in Australia and{" "}
          <Link href="/new-zealand">New Zealand</Link>.
        </p>
      </div>
    </section>
  );
}
