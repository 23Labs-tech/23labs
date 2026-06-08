"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const services = [
    {
      num: "01",
      icon: "⚡",
      title: "AI Automation",
      desc: "Custom workflows and AI-assisted processes that cut manual steps and free your team to do real work.",
    },
    {
      num: "02",
      icon: "▣",
      title: "Web Development",
      desc: "Fast, modern websites and web apps engineered to convert and easy for your team to maintain.",
    },
    {
      num: "03",
      icon: "⊞",
      title: "App & Software",
      desc: "From internal tools to full SaaS platforms — we build products end to end, including our own.",
    },
    {
      num: "04",
      icon: "⇄",
      title: "Data Integration",
      desc: "Connect the tools you already use into one reliable system, with dashboards that surface what matters.",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #F4F1EC;
          --text: #1A1A1A;
          --text-muted: #6B6B6B;
          --accent: #C8543A;
          --dark-card: #1C1C1A;
          --border: #E0DDD8;
          --card-bg: #EDEAE4;
          --font-sans: 'Inter', sans-serif;
          --font-serif: 'Cormorant Garamond', serif;
        }

        html { scroll-behavior: smooth; }

        html, body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 0 40px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
          letter-spacing: -0.3px;
        }

        .nav-logo img {
          display: block;
          height: 32px;
          width: auto;
          border-radius: 8px;
        }

        .nav-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }

        .nav-links button {
          font-size: 15px;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 400;
          font-family: var(--font-sans);
          opacity: 0.8;
          transition: opacity 0.2s;
          padding: 0;
        }
        .nav-links button:hover { opacity: 1; }

        .btn-primary {
          background: var(--text);
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.82; }

        /* ── MAIN ── */
        main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── HERO ── */
        .hero { padding: 100px 0 80px; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 36px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }

        .hero h1 {
          font-size: clamp(58px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -2.5px;
          max-width: 700px;
          margin-bottom: 28px;
        }

        /* The italic accent word — Cormorant Garamond looks EXACTLY like the mockup */
        .hero h1 em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 500;
          color: var(--accent);
          letter-spacing: -1px;
          font-size: 1.05em;
        }

        .hero p {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 490px;
          line-height: 1.7;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .hero-cta { display: flex; align-items: center; gap: 24px; }

        .btn-hero {
          background: var(--text);
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.2s;
        }
        .btn-hero:hover { opacity: 0.8; }

        .link-subtle {
          font-size: 15px;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          opacity: 0.65;
          transition: opacity 0.2s;
          font-weight: 400;
          padding: 0;
        }
        .link-subtle:hover { opacity: 1; }

        /* ── TRUSTED BY ── */
        .trusted {
          padding: 40px 0 80px;
          display: flex;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
        }

        .trusted-label {
          font-size: 14px;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .trusted-names {
          display: flex;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .trusted-names span {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          opacity: 0.6;
        }

        /* ── SECTION LABELS ── */
        .section-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
        }

        .section-heading {
          font-size: clamp(36px, 4vw, 50px);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.08;
          max-width: 620px;
          margin-bottom: 56px;
        }

        .section-heading em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 500;
          letter-spacing: -0.5px;
          font-size: 1.05em;
        }

        /* ── SERVICES GRID ── */
        .services { padding: 80px 0; }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .service-card {
          padding: 44px 48px 52px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
        }

        .service-card:nth-child(even) { border-right: none; }
        .service-card:nth-child(3),
        .service-card:nth-child(4) { border-bottom: none; }

        .service-card:hover { background: rgba(0,0,0,0.018); }

        .service-num {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 32px;
          font-weight: 400;
        }

        .service-icon {
          width: 46px;
          height: 46px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 32px;
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .service-card p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 340px;
          font-weight: 400;
        }

        /* Explore link — hidden by default, appears on hover */
        .explore-link {
          display: inline-block;
          margin-top: 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          font-family: var(--font-sans);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          pointer-events: none;
        }

        .service-card:hover .explore-link,
        .service-card.hovered .explore-link {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* ── HAYLO ── */
        .haylo-section { padding: 0 0 80px; }

        .haylo-card {
          background: var(--dark-card);
          color: #fff;
          border-radius: 20px;
          padding: 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .haylo-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 28px;
        }

        .haylo-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4CAF50;
        }

        .haylo-card h2 {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.12;
          margin-bottom: 20px;
          color: #fff;
        }

        .haylo-card h2 em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 500;
          color: var(--accent);
          font-size: 1.05em;
        }

        .haylo-card > div > p {
          font-size: 15px;
          color: rgba(255,255,255,0.58);
          line-height: 1.68;
          margin-bottom: 32px;
          max-width: 380px;
          font-weight: 400;
        }

        .btn-haylo {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 100px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-haylo:hover {
          border-color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.06);
        }

        .haylo-activity {
          background: rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .activity-row {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .activity-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
          color: rgba(255,255,255,0.7);
        }
        .activity-icon.green { background: rgba(76,175,80,0.2); }

        .activity-info { flex: 1; }

        .activity-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 3px;
        }

        .activity-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
        }

        .activity-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 100px;
        }
        .tag-green { background: rgba(76,175,80,0.2); color: #72D077; }
        .tag-blue  { background: rgba(100,160,255,0.15); color: #85B8FF; }
        .tag-gray  { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }

        /* ── STATS ── */
        .stats {
          padding: 80px 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .stat-num {
          font-size: clamp(56px, 7vw, 84px);
          font-weight: 900;
          letter-spacing: -3px;
          line-height: 1;
          margin-bottom: 14px;
        }
        .stat-num span { color: var(--accent); }

        .stat > p {
          font-size: 15px;
          color: var(--text-muted);
          max-width: 200px;
          line-height: 1.55;
        }

        /* ── WORK ── */
        .work { padding: 80px 0; }

        .work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .work-card {
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          background: var(--bg);
          transition: border-color 0.2s;
          cursor: pointer;
        }
        .work-card:hover { border-color: #b0aba3; }

        .work-thumb {
          background: var(--card-bg);
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 28px, var(--border) 28px, var(--border) 29px),
            repeating-linear-gradient(90deg, transparent, transparent 28px, var(--border) 28px, var(--border) 29px);
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: var(--text-muted);
        }

        .work-info { padding: 24px 28px 30px; }

        .work-info h3 {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.4px;
          margin-bottom: 14px;
        }

        .tags { display: flex; flex-wrap: wrap; gap: 8px; }

        .tag {
          font-size: 12px;
          font-weight: 500;
          padding: 5px 13px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          color: var(--text);
        }

        /* ── TESTIMONIAL ── */
        .testimonial { padding: 80px 0 100px; }

        .testimonial blockquote {
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.22;
          max-width: 800px;
          margin-bottom: 40px;
        }

        .testimonial blockquote em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 500;
          color: var(--accent);
          font-size: 1.05em;
        }

        .testimonial-author { display: flex; align-items: center; gap: 14px; }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .author-name { font-size: 14.5px; font-weight: 600; color: var(--text); }
        .author-role { font-size: 13px; color: var(--text-muted); margin-top: 2px; }

        /* ── CTA ── */
        .cta-section { padding: 0 0 100px; }

        .cta-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 90px 40px;
          text-align: center;
        }

        .cta-card h2 {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          letter-spacing: -1.8px;
          line-height: 1.05;
          margin-bottom: 20px;
        }

        .cta-card h2 em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 500;
          color: var(--accent);
          display: block;
          font-size: 1.05em;
          letter-spacing: -0.5px;
        }

        .cta-card > p {
          font-size: 15.5px;
          color: var(--text-muted);
          margin: 0 auto 36px;
          max-width: 420px;
          line-height: 1.65;
        }

        .btn-cta {
          background: var(--text);
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 15px 32px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-cta:hover { opacity: 0.8; }

        /* ── FOOTER ── */
        footer {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 60px 40px 32px;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto 48px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-brand > p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.65;
          margin-top: 14px;
          max-width: 220px;
        }

        .footer-col h4 {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col ul li a,
        .footer-link {
          font-size: 14px;
          color: var(--text);
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 400;
          padding: 0;
          text-align: left;
        }
        .footer-col ul li a:hover,
        .footer-link:hover { opacity: 1; }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .footer-bottom p { font-size: 13px; color: var(--text-muted); }

        .scroll-anchor { scroll-margin-top: 80px; }

        @media (max-width: 900px) {
          nav { padding: 0 20px; }
          .nav-links { display: none; }
          main { padding: 0 20px; }
          .hero { padding: 60px 0 40px; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { border-right: none; }
          .service-card:nth-child(3) { border-bottom: 1px solid var(--border); }
          .haylo-card { grid-template-columns: 1fr; padding: 40px 28px; }
          .stats { grid-template-columns: 1fr; gap: 40px; }
          .work-grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr 1fr; }
          footer { padding: 40px 20px 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <Image
            src="/23labs-logo-dark.png"
            alt="23Labs"
            width={160}
            height={64}
            priority
          />
        </a>
        <ul className="nav-links">
          <li><button onClick={() => scrollTo("services")}>Services</button></li>
          <li><button onClick={() => scrollTo("work")}>Work</button></li>
          <li><button onClick={() => scrollTo("haylo")}>Haylo</button></li>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
        </ul>
        <button className="btn-primary" onClick={() => scrollTo("contact")}>Start a project</button>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="about">
          <div className="badge">
            <span className="badge-dot" />
            SOFTWARE STUDIO · AUTOMATION · AI
          </div>
          <h1>
            We build the <em>systems</em><br />
            that run your<br />
            business.
          </h1>
          <p>
            23Labs designs and ships custom software, automation, and AI tools
            that remove busywork and actually get used — from first workflow to
            full platform.
          </p>
          <div className="hero-cta">
            <button className="btn-hero" onClick={() => scrollTo("contact")}>Book a discovery call →</button>
            <button className="link-subtle" onClick={() => scrollTo("work")}>See our work</button>
          </div>
        </section>

        {/* TRUSTED BY */}
        <div className="trusted">
          <span className="trusted-label">Trusted by teams at</span>
          <div className="trusted-names">
            <span>CorIT Tech</span>
            <span>First National</span>
            <span>Lily Olsen</span>
            <span>Haylo AI</span>
          </div>
        </div>

        {/* SERVICES — hover reveals Explore → on every card */}
        <section className="services scroll-anchor" id="services">
          <div className="section-label">WHAT WE DO</div>
          <h2 className="section-heading">
            Practical systems, <em>built to be used.</em>
          </h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-card${hoveredCard === i ? " hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-num">{s.num}</div>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="explore-link" onClick={(e) => e.preventDefault()}>
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* HAYLO */}
        <section className="haylo-section scroll-anchor" id="haylo">
          <div className="haylo-card">
            <div>
              <div className="haylo-badge">
                <span className="haylo-badge-dot" />
                Our own product
              </div>
              <h2>
                Haylo — the AI receptionist<br />
                that <em>never misses a call.</em>
              </h2>
              <p>
                We don't just build for clients. Haylo is our own AI platform
                that answers every call, books appointments, and handles
                after-hours — proof we build software that ships and scales.
              </p>
              <a href="#" className="btn-haylo">Hear a live call →</a>
            </div>
            <div className="haylo-activity">
              <div className="activity-row">
                <div className="activity-icon green">
                  <span style={{ color: "#4CAF50", fontSize: 13 }}>●</span>
                </div>
                <div className="activity-info">
                  <div className="activity-title">Incoming call</div>
                  <div className="activity-sub">New patient · 7:42pm</div>
                </div>
                <span className="activity-tag tag-green">Answered</span>
              </div>
              <div className="activity-row">
                <div className="activity-icon">✓</div>
                <div className="activity-info">
                  <div className="activity-title">Appointment booked</div>
                  <div className="activity-sub">Tue 9:30am · auto-confirmed</div>
                </div>
                <span className="activity-tag tag-blue">Booked</span>
              </div>
              <div className="activity-row">
                <div className="activity-icon">⇄</div>
                <div className="activity-info">
                  <div className="activity-title">After-hours enquiry</div>
                  <div className="activity-sub">Captured · SMS sent</div>
                </div>
                <span className="activity-tag tag-gray">Logged</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="stat">
            <div className="stat-num">60<span>+</span></div>
            <p>Projects shipped end to end</p>
          </div>
          <div className="stat">
            <div className="stat-num">100<span>+</span></div>
            <p>Custom automations in production</p>
          </div>
          <div className="stat">
            <div className="stat-num">91<span>%</span></div>
            <p>Of clients recommend working with us</p>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="work scroll-anchor" id="work">
          <div className="section-label">SELECTED WORK</div>
          <h2 className="section-heading">
            A few things <em>we've built.</em>
          </h2>
          <div className="work-grid">
            {[
              { name: "CorIT Tech", tags: ["AI Automation", "Data Integration"] },
              { name: "Haylo AI", tags: ["Software Development", "AI Platform"] },
              { name: "First National Real Estate", tags: ["Custom Automation", "Data Integration"] },
              { name: "Lily Olsen Counselling", tags: ["Logo & Branding", "Web Design"] },
            ].map((p, i) => (
              <div className="work-card" key={i}>
                <div className="work-thumb">{p.name}</div>
                <div className="work-info">
                  <h3>{p.name}</h3>
                  <div className="tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="testimonial">
          <blockquote>
            "Working with 23Labs was refreshingly practical. They mapped our
            processes properly and built automations that{" "}
            <em>actually get used</em> — less manual work, far smoother
            operations."
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">CC</div>
            <div>
              <div className="author-name">Craig C.</div>
              <div className="author-role">Founder, CorIT Tech</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section scroll-anchor" id="contact">
          <div className="cta-card">
            <h2>
              Let's build something
              <em>worth using.</em>
            </h2>
            <p>
              Tell us where the friction is. We'll map it and show you a
              practical path forward — no obligation.
            </p>
            <a href="#" className="btn-cta">Book a discovery call →</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <Image
                src="/23labs-logo-dark.png"
                alt="23Labs"
                width={160}
                height={64}
              />
            </a>
            <p>Smarter systems, automation, and software for ambitious businesses.</p>
          </div>
          <div className="footer-col">
            <h4>STUDIO</h4>
            <ul>
              <li><button className="footer-link" onClick={() => scrollTo("services")}>Services</button></li>
              <li><button className="footer-link" onClick={() => scrollTo("work")}>Work</button></li>
              <li><button className="footer-link" onClick={() => scrollTo("about")}>About</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>PRODUCTS</h4>
            <ul>
              <li><button className="footer-link" onClick={() => scrollTo("haylo")}>Haylo AI</button></li>
              <li><button className="footer-link" onClick={() => scrollTo("contact")}>Start a project</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CONNECT</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">hello@23labs.co</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 23Labs Technologies. All rights reserved.</p>
          <p>Mockup — visual concept only</p>
        </div>
      </footer>
    </>
  );
}