"use client";

import { useEffect, useState } from "react";

const LOGO_SRC =
  "data:image/png;base64,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";

const css = `
.tl-root{
  --ink:#111110;--ink-soft:#56544e;--ink-faint:#8f8d85;--paper:#faf9f6;--paper-2:#f2f0ea;
  --line:#e4e1d8;--accent:#e8482b;--card:#ffffff;--maxw:1180px;
  font-family:'Poppins',system-ui,sans-serif;background:var(--paper);color:var(--ink);
  -webkit-font-smoothing:antialiased;line-height:1.5;
}
.tl-root *{margin:0;padding:0;box-sizing:border-box}
body{padding:10px;box-sizing:border-box}
.tl-burger{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:42px;height:42px;border:1px solid var(--line);border-radius:10px;background:var(--card);cursor:pointer;padding:0}
.tl-burger span{display:block;width:18px;height:2px;background:var(--ink);border-radius:2px;transition:transform .2s,opacity .2s}
.tl-burger.tl-open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.tl-burger.tl-open span:nth-child(2){opacity:0}
.tl-burger.tl-open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.tl-root a{color:inherit;text-decoration:none}
.tl-wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px}

/* Bold emphasis replaces italic serif */
.tl-em{font-weight:700;color:var(--accent)}
.tl-em-haylo{font-weight:700;color:#ff7a5c}

.tl-nav{position:sticky;top:10px;z-index:50;background:rgba(250,249,246,.82);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.tl-nav-in{max-width:var(--maxw);margin:0 auto;padding:18px 32px;display:flex;align-items:center;justify-content:space-between}
.tl-logo{font-weight:600;font-size:19px;letter-spacing:-.02em;display:flex;align-items:center;gap:9px}
.tl-logo .tl-dot{width:9px;height:9px;background:var(--accent);border-radius:50%;display:inline-block}
.tl-logo-img{height:70px;width:auto;display:block}
.tl-foot .tl-logo-img{height:51px}
.tl-nav-right{display:flex;align-items:center;gap:34px}
.tl-nav-links{display:flex;gap:34px;font-size:15px;color:var(--ink-soft)}
.tl-nav-links a:hover{color:var(--ink)}
.tl-root .tl-nav-cta{background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%);border:none;color:#fff;padding:10px 19px;border-radius:100px;font-size:14px;font-weight:600}
@media(max-width:760px){.tl-burger{display:flex}.tl-nav-in{position:relative;flex-wrap:wrap}.tl-nav-right{display:none;position:absolute;top:calc(100% + 12px);left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:10px;box-shadow:0 18px 44px rgba(0,0,0,.12);z-index:60}.tl-nav-right.tl-open{display:flex}.tl-nav-links{flex-direction:column;gap:0}.tl-nav-links a{padding:12px;border-radius:9px;font-size:16px}.tl-nav-links a:hover{background:var(--paper-2)}.tl-root .tl-nav-cta{margin-top:6px;text-align:center;padding:13px;font-size:15px}}

.tl-hero{padding:96px 0 72px;position:relative;overflow:hidden}
@keyframes tl-ring{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.8);opacity:0}}
.tl-hero-h{font-size:clamp(2.5rem, 1.5rem + 4vw, 5rem);line-height:1.05;letter-spacing:-.03em;font-weight:500;max-width:16ch;color:#fff;text-shadow:0 1px 30px rgba(0,0,0,.35)}
.tl-hero .tl-em{color:#ff7e4f}
.tl-hero-sub{font-size:clamp(1.125rem, 1rem + 0.75vw, 1.5rem);color:rgba(255,255,255,.88);max-width:56ch;margin:30px 0 38px;line-height:1.5;text-shadow:0 1px 18px rgba(0,0,0,.3)}
.tl-hero-actions{display:flex;gap:14px;align-items:center;flex-wrap:wrap}
.tl-root .tl-btn-primary{background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%);color:#fff;border:none;padding:17px 44px;min-width:260px;border-radius:100px;font-size:15.75px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:10px}
.tl-btn-primary .tl-btn-arrow{font-size:18px;line-height:1;transform:translateY(.5px)}
.tl-root .tl-btn-ghost{background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%);border:none;color:#fff;padding:16px 27px;font-size:15px;font-weight:600;border-radius:100px;display:inline-flex;align-items:center;gap:8px}
.tl-hero-grid-bg{display:none}

.tl-sec{padding:96px 0}
.tl-sec-head{margin-bottom:54px;max-width:60ch}
.tl-sec-tag{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:600;margin-bottom:16px}
.tl-sec-title{font-size:clamp(2rem, 1.25rem + 2vw, 3.5rem);letter-spacing:-.025em;font-weight:500;line-height:1.1}

.tl-svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:18px;overflow:hidden}
.tl-svc{background:var(--paper);padding:42px 38px;transition:.25s;position:relative}
.tl-svc:hover{background:var(--card)}
.tl-svc-ico{width:87px;height:87px;border-radius:20px;background:var(--paper-2);display:flex;align-items:center;justify-content:center;margin-bottom:22px;overflow:hidden}
.tl-svc-ico img{width:75px;height:75px;object-fit:contain;display:block}
.tl-svc h3{font-size:23px;font-weight:500;letter-spacing:-.01em;margin-bottom:12px}
.tl-svc p{font-size:clamp(1rem, 16px + 0.5vw, 1.125rem);color:var(--ink-soft);line-height:1.7;max-width:42ch}
@media(max-width:760px){.tl-svc-grid{grid-template-columns:1fr}}

.tl-haylo{background:var(--ink);color:var(--paper);border-radius:24px;padding:64px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:44px;position:relative;overflow:hidden}.tl-haylo .tl-phone{width:100%;max-width:430px;margin:0 auto}
.tl-haylo-badge{display:inline-flex;align-items:center;gap:8px;font-size:13px;border:1px solid rgba(255,255,255,.2);padding:6px 14px;border-radius:100px;margin-bottom:24px;color:#cfcdc6}
.tl-haylo h3{font-size:clamp(1.5rem, 1.125rem + 1vw, 2rem);letter-spacing:-.025em;font-weight:500;line-height:1.2;margin:0 auto 18px;max-width:20ch}
.tl-haylo p{font-size:clamp(1rem, 16px + 0.5vw, 1.125rem);color:#b9b7b0;line-height:1.7;margin:0 auto 30px;max-width:46ch}
.tl-root .tl-haylo-cta{background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%);color:#fff;border:none;padding:15px 25px;border-radius:100px;font-weight:600;font-size:15px;display:inline-flex;gap:9px;align-items:center}
.tl-phone{background:#1b1b19;border:1px solid #2e2e2a;border-radius:20px;padding:24px}
.tl-call-row{display:flex;align-items:center;gap:13px;padding:14px 0;border-bottom:1px solid #2a2a27}
.tl-call-row:last-child{border:none}
.tl-call-dot{width:38px;height:38px;border-radius:50%;background:#26261f;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.tl-call-dot.tl-live{background:#2a3b2a}
.tl-call-meta b{display:block;font-size:14px;font-weight:500;color:#f0eee8}
.tl-call-meta span{font-size:12.5px;color:#85837c}
.tl-call-tag{margin-left:auto;font-size:11px;padding:4px 10px;border-radius:100px;background:#26261f;color:#a5a39c}
.tl-call-tag.tl-green{background:#1e3320;color:#7bd88a}
@media(max-width:860px){.tl-haylo{padding:40px 24px}}

/* Centred stats */
.tl-stats{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;gap:54px;text-align:center}.tl-stats .tl-stat{flex:1 1 0;min-width:0}
.tl-stat .tl-n{font-size:64px;letter-spacing:-.03em;font-weight:600;line-height:1}
.tl-stat .tl-n .tl-plus{color:var(--accent)}
.tl-stat .tl-l{font-size:15px;color:var(--ink-soft);margin-top:12px;max-width:24ch}
@media(max-width:760px){.tl-stats{gap:14px}.tl-stats .tl-n{font-size:32px}.tl-stats .tl-l{font-size:11.5px;margin-top:6px}}

.tl-work-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.tl-work{height:420px;border-radius:18px;background:transparent;perspective:1600px;outline:none}
.tl-work-inner{position:relative;width:100%;height:100%;transition:transform .6s cubic-bezier(.16,1,.3,1);transform-style:preserve-3d}
.tl-work:hover .tl-work-inner,.tl-work:focus-visible .tl-work-inner{transform:rotateY(180deg)}
.tl-work:focus-visible{box-shadow:0 0 0 3px rgba(232,72,43,.3);border-radius:18px}
.tl-work-face{position:absolute;inset:0;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:var(--card);display:flex;flex-direction:column;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.tl-work-back{transform:rotateY(180deg);padding:28px 26px;gap:16px;overflow-y:auto;background:linear-gradient(165deg,#ffffff 0%,var(--paper-2) 150%)}
.tl-work-back h4{font-size:21px;font-weight:600;letter-spacing:-.01em;margin-bottom:4px}
.tl-work-back-block{display:flex;flex-direction:column;gap:6px}
.tl-work-back-label{font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.tl-work-back-block p{font-size:14px;line-height:1.5;color:var(--ink-soft)}
.tl-work-img{flex:1 1 auto;min-height:0;background:var(--paper-2);position:relative;display:flex;align-items:center;justify-content:center;color:var(--ink-faint);font-size:13px;border-bottom:1px solid var(--line);background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:30px 30px;overflow:hidden}
.tl-work-img img{width:100%;height:100%;object-fit:cover;display:block}
.tl-work-body{padding:16px 22px}
.tl-work-body h4{font-size:20px;font-weight:500;letter-spacing:-.01em;margin-bottom:11px}
.tl-chips{display:flex;gap:8px;flex-wrap:wrap}
.tl-chip{font-size:12.5px;padding:5px 12px;border:1px solid var(--line);border-radius:100px;color:var(--ink-soft)}
@media(max-width:760px){.tl-work-grid{grid-template-columns:1fr}}

.tl-slider{position:relative;overflow:hidden}
.tl-slider-track{display:flex;transition:transform .55s cubic-bezier(.16,1,.3,1)}
.tl-slide{min-width:100%;padding-right:8px}
.tl-quote-block{max-width:74ch}
.tl-quote-block .tl-q{font-size:clamp(15px,2.08vw,25px);line-height:1.45;letter-spacing:-.02em;font-weight:500}
.tl-quote-by{margin-top:32px;display:flex;align-items:center;gap:14px}
.tl-quote-av{width:46px;height:46px;border-radius:50%;background:var(--paper-2);display:flex;align-items:center;justify-content:center;font-weight:600;color:var(--ink-soft);flex-shrink:0}
.tl-quote-by b{display:block;font-size:15px;font-weight:600}
.tl-quote-by span{font-size:14px;color:var(--ink-soft)}
.tl-slider-nav{display:flex;align-items:center;gap:16px;margin-top:44px}
.tl-slider-dots{display:flex;gap:9px}
.tl-dot-btn{width:9px;height:9px;border-radius:50%;border:none;background:var(--line);cursor:pointer;padding:0;transition:.25s}
.tl-dot-btn.tl-active{background:var(--accent);width:26px;border-radius:100px}
.tl-arrow-btn{width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:var(--paper);color:var(--ink);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.2s}
.tl-arrow-btn:hover{background:var(--ink);color:#fff;border-color:var(--ink)}

/* Contact section */
.tl-contact{position:relative;overflow:hidden;background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%)}
.tl-contact::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 18% 25%,rgba(255,255,255,.12) 0,transparent 42%),radial-gradient(circle at 82% 75%,rgba(255,255,255,.08) 0,transparent 46%);pointer-events:none}
.tl-contact .tl-wrap{position:relative;z-index:1}
.tl-contact .tl-em{color:#fff}
.tl-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
@media(max-width:880px){.tl-contact-grid{grid-template-columns:1fr;gap:44px}}
.tl-contact-left h2{font-size:clamp(2rem, 1.25rem + 2vw, 3.5rem);letter-spacing:-.03em;font-weight:500;line-height:1.1;margin-bottom:20px;max-width:14ch;color:#fff}
.tl-contact-left .tl-lead{font-size:clamp(1.125rem, 1rem + 0.75vw, 1.5rem);line-height:1.5;margin-bottom:18px;max-width:46ch;color:#fff}
.tl-contact-left .tl-support{font-size:clamp(1rem, 16px + 0.5vw, 1.125rem);line-height:1.7;max-width:48ch;color:rgba(255,255,255,.88)}

.tl-form-card{background:linear-gradient(165deg,#ffffff 0%,var(--paper-2) 140%);border:1px solid var(--line);border-radius:22px;padding:36px;box-shadow:0 1px 2px rgba(17,17,16,.04),0 22px 48px -30px rgba(17,17,16,.3)}
.tl-form{display:flex;flex-direction:column;gap:18px}
.tl-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media(max-width:520px){.tl-form-row{grid-template-columns:1fr}}
.tl-field{display:flex;flex-direction:column;gap:7px;min-width:0}
.tl-label{font-size:13.5px;font-weight:500;color:var(--ink)}
.tl-label .tl-req{color:var(--accent);margin-left:3px}
.tl-input,.tl-textarea{font-family:inherit;font-size:15px;color:var(--ink);background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:13px 15px;width:100%;transition:border-color .18s,box-shadow .18s,background .18s}
.tl-input::placeholder,.tl-textarea::placeholder{color:var(--ink-faint)}
.tl-input:hover,.tl-textarea:hover{border-color:var(--ink-faint)}
.tl-input:focus,.tl-textarea:focus{outline:none;border-color:var(--accent);background:#fff;box-shadow:0 0 0 3px rgba(232,72,43,.14)}
.tl-textarea{resize:vertical;min-height:130px;line-height:1.55}
.tl-input.tl-invalid,.tl-textarea.tl-invalid{border-color:#d6452c;box-shadow:0 0 0 3px rgba(214,69,44,.12)}
.tl-err{font-size:12.5px;color:#c5371f}
.tl-submit{margin-top:6px;background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%);color:#fff;border:none;font-family:inherit;font-size:15.5px;font-weight:600;padding:17px 24px;border-radius:100px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:10px}
.tl-submit:disabled{opacity:.7;cursor:progress}
.tl-submit:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(232,72,43,.3)}
.tl-spin{width:16px;height:16px;border:2px solid rgba(255,255,255,.45);border-top-color:#fff;border-radius:50%;animation:tl-spin .7s linear infinite}
@keyframes tl-spin{to{transform:rotate(360deg)}}
.tl-form-status{font-size:14.5px;border-radius:12px;padding:15px 16px;line-height:1.5}
.tl-form-status.tl-ok{background:#eef7ee;border:1px solid #cfe6cf;color:#2f7a36}
.tl-form-status.tl-bad{background:#fdeee9;border:1px solid #f3cdbf;color:#b23a1c}
.tl-form-note{font-size:12.5px;color:var(--ink-faint);text-align:center;margin-top:2px}
.tl-hp{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}

.tl-foot{border-top:1px solid var(--line);padding:56px 0 40px;margin-top:40px}
.tl-foot-in{display:flex;justify-content:space-between;flex-wrap:wrap;gap:30px}
.tl-foot-col h5{font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);margin-bottom:16px}
.tl-foot-col a{display:block;font-size:15px;color:var(--ink-soft);margin-bottom:10px}
.tl-foot-col a:hover{color:var(--ink)}
.tl-foot-bottom{margin-top:46px;padding-top:24px;border-top:1px solid var(--line);font-size:13.5px;color:var(--ink-faint);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}

.tl-reveal{opacity:0;transform:translateY(18px);transition:.7s cubic-bezier(.16,1,.3,1)}
.tl-reveal.tl-in{opacity:1;transform:none}

/* About page */
.tl-about-hero{padding:88px 0 36px}
.tl-about-h{font-size:clamp(2.5rem, 1.5rem + 4vw, 5rem);line-height:1.05;letter-spacing:-.03em;font-weight:500;max-width:18ch;margin:16px 0 24px;color:var(--ink)}
.tl-about-h .tl-em{color:var(--accent)}
.tl-about-lead{font-size:clamp(1.125rem, 1rem + 0.75vw, 1.5rem);color:var(--ink-soft);max-width:60ch;line-height:1.5}
.tl-story{display:grid;grid-template-columns:.55fr 1fr;gap:48px;align-items:start}
.tl-story-body p{font-size:clamp(1rem, 16px + 0.5vw, 1.125rem);color:var(--ink-soft);line-height:1.7;margin-bottom:18px;max-width:62ch}
.tl-story-body p:last-child{margin-bottom:0}
@media(max-width:760px){.tl-story{grid-template-columns:1fr;gap:18px}}
.tl-values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.tl-value{border:1px solid var(--line);border-radius:18px;padding:30px 28px;background:var(--card)}
.tl-value .tl-value-k{font-size:13px;font-weight:600;color:var(--accent);margin-bottom:16px;font-variant-numeric:tabular-nums}
.tl-value h3{font-size:20px;font-weight:500;letter-spacing:-.01em;margin-bottom:10px}
.tl-value p{font-size:clamp(1rem, 16px + 0.5vw, 1.125rem);color:var(--ink-soft);line-height:1.7}
@media(max-width:760px){.tl-values-grid{grid-template-columns:1fr}}
.tl-about-cta{background:linear-gradient(135deg,#e8482b 0%,#c93f6b 45%,#6a4ad0 75%,#2b5fe8 100%);border-radius:24px;padding:72px 56px;text-align:center;position:relative;overflow:hidden}
.tl-about-cta::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(255,255,255,.12) 0,transparent 42%),radial-gradient(circle at 80% 70%,rgba(255,255,255,.08) 0,transparent 46%);pointer-events:none}
.tl-about-cta > *{position:relative;z-index:1}
.tl-about-cta h2{font-size:clamp(30px,4.4vw,48px);letter-spacing:-.03em;font-weight:500;line-height:1.05;color:#fff;max-width:20ch;margin:0 auto 18px}
.tl-about-cta p{font-size:18px;color:rgba(255,255,255,.86);max-width:46ch;margin:0 auto 32px}
.tl-about-cta .tl-hero-actions{justify-content:center;display:flex}
.tl-root .tl-about-cta .tl-btn-primary{background:#fff;color:var(--accent)}
`;

export default function About() {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("tl-in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".tl-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="tl-root">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');${css}`}</style>

      <nav className="tl-nav">
        <div className="tl-nav-in">
          <a href="/" className="tl-logo"><img className="tl-logo-img" src={LOGO_SRC} alt="23Labs" /></a>
          <button className={"tl-burger" + (navOpen ? " tl-open" : "")} aria-label="Toggle menu" aria-expanded={navOpen} onClick={() => setNavOpen((o) => !o)}><span /><span /><span /></button>
          <div className={"tl-nav-right" + (navOpen ? " tl-open" : "")} onClick={() => setNavOpen(false)}>
            <div className="tl-nav-links">
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/#work">Work</a>
              <a href="/#haylo">Haylo</a>
            </div>
            <a href="/contact" className="tl-nav-cta">Let's have a chat</a>
          </div>
        </div>
      </nav>

      <header className="tl-sec tl-about-hero">
        <div className="tl-wrap tl-reveal">
          <div className="tl-sec-tag">About 23Labs</div>
          <h1 className="tl-about-h">Practical technology, built around <span className="tl-em">your business</span></h1>
          <p className="tl-about-lead">We're a Melbourne-based studio building automation, software, and AI tools that remove busywork and help businesses scale with confidence.</p>
        </div>
      </header>

      <section className="tl-sec" style={{ paddingTop: 24 }}>
        <div className="tl-wrap">
          <div className="tl-story tl-reveal">
            <div className="tl-sec-head" style={{ margin: 0 }}>
              <h2 className="tl-sec-title">Our <span className="tl-em">story</span></h2>
            </div>
            <div className="tl-story-body">
              <p>23Labs started with a simple belief: most businesses don't need more software, they need the right systems working together. Too often teams are stuck doing repetitive manual work, copying information between tools, and chasing tasks that technology should be handling quietly in the background.</p>
              <p>We partner with growing businesses to find where the friction is and build practical solutions that actually get used, from automating day-to-day operations to designing custom platforms and AI tools. We even build our own products, like Haylo, our AI receptionist, so we know first-hand what it takes to ship software that scales.</p>
              <p>Whatever the project, the goal is always the same: smarter systems that save you time, reduce errors, and give you the confidence to grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tl-sec" style={{ paddingTop: 0 }}>
        <div className="tl-wrap">
          <div className="tl-sec-head tl-reveal">
            <h2 className="tl-sec-title">What we <span className="tl-em">stand for</span></h2>
          </div>
          <div className="tl-values-grid tl-reveal">
            <div className="tl-value"><div className="tl-value-k">01</div><h3>Practical over flashy</h3><p>We build what moves the needle, not what looks impressive in a demo. Every solution has to earn its place by saving time or making money.</p></div>
            <div className="tl-value"><div className="tl-value-k">02</div><h3>Built to be used</h3><p>Technology only works when people actually use it. We design around your team and the way you already work, not the other way around.</p></div>
            <div className="tl-value"><div className="tl-value-k">03</div><h3>Partners, not vendors</h3><p>We stay close, explain things clearly, and keep improving long after launch. You should never feel lost in the technical detail.</p></div>
          </div>
        </div>
      </section>

      <section className="tl-sec" style={{ paddingTop: 0 }}>
        <div className="tl-wrap">
          <div className="tl-stats tl-reveal">
            <div className="tl-stat"><div className="tl-n">60<span className="tl-plus">+</span></div><div className="tl-l">Projects shipped end to end</div></div>
            <div className="tl-stat"><div className="tl-n">100<span className="tl-plus">+</span></div><div className="tl-l">Custom automations in production</div></div>
            <div className="tl-stat"><div className="tl-n">12<span className="tl-plus">+</span></div><div className="tl-l">Years of Experience</div></div>
          </div>
        </div>
      </section>

      <section className="tl-sec">
        <div className="tl-wrap">
          <div className="tl-about-cta tl-reveal">
            <h2>Ready to remove the busywork?</h2>
            <p>Tell us where the friction is and we'll show you a practical path forward, no obligation.</p>
            <div className="tl-hero-actions">
              <a href="/contact" className="tl-btn-primary">Talk to us <span className="tl-btn-arrow" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="tl-foot">
        <div className="tl-wrap">
          <div className="tl-foot-in">
            <div style={{ maxWidth: "30ch" }}>
              <a href="/" className="tl-logo" style={{ marginBottom: 16, display: "inline-flex" }}><img className="tl-logo-img" src={LOGO_SRC} alt="23Labs" /></a>
              <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>Smarter systems, automation, and software for ambitious businesses.</p>
            </div>
            <div className="tl-foot-col"><h5>Studio</h5><a href="/services">Services</a><a href="/#work">Work</a><a href="/about">About</a><a href="/contact">Contact</a></div>
            <div className="tl-foot-col"><h5>Products</h5><a href="/#haylo">Haylo AI</a><a href="/contact">Let's have a chat</a></div>
            <div className="tl-foot-col"><h5>Connect</h5><a href="https://au.linkedin.com/company/23labs" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://www.instagram.com/_23labs.co_/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="mailto:hello@23labs.co">hello@23labs.co</a></div>
          </div>
          <div className="tl-foot-bottom"><span>© 2026 23Labs Technologies. All rights reserved.</span></div>
        </div>
      </footer>
    </div>
  );
}
