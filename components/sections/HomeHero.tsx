import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { stats } from "@/lib/data";

export function HomeHero() {
  return (
    <section className="hero hero-home">
      <Image
        src="/23labs-brand-mark.png"
        alt=""
        width={1600}
        height={1600}
        priority
        className="hero-brand-mark"
      />
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Automation, software, AI and data systems</p>
          <h1>
            Helping businesses scale with <span>confidence</span>
          </h1>
          <p className="hero-lead">
            From everyday operations to customer engagement, we help businesses remove inefficiencies
            and create systems that support long-term success.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Let&apos;s have a chat</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
          <dl className="hero-metrics" aria-label="23Labs delivery highlights">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-app-card" aria-label="Example 23Labs operations system">
          <div className="app-card-header">
            <Image
              src="/23labs-logo-dark.png"
              alt="23Labs"
              width={220}
              height={195}
              className="hero-proof-logo"
            />
            <div>
              <span>Live system</span>
              <strong>Operations cockpit</strong>
            </div>
          </div>

          <div className="app-status-card">
            <span>Today&apos;s outcome</span>
            <strong>12.5 hours recovered</strong>
            <p>Automations handled enquiries, follow-ups, reminders, and CRM updates before the team started the day.</p>
          </div>

          <div className="workflow-list" aria-label="Example workflow statuses">
            <div>
              <span>New enquiry</span>
              <strong>Qualified</strong>
            </div>
            <div>
              <span>Manual workflow</span>
              <strong>Automated</strong>
            </div>
            <div>
              <span>Website launch</span>
              <strong>Shipped</strong>
            </div>
            <div>
              <span>Data visibility</span>
              <strong>Connected</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
