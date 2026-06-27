import Link from "next/link";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-in">
          <div>
            <Logo href="/#top" tone="light" />
            <p>Smarter systems, automation, and software for ambitious businesses.</p>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Products</h5>
            <ul>
              <li>
                <a href="https://gethaylo.co" target="_blank" rel="noreferrer">
                  Haylo AI
                </a>
              </li>
              <li>
                <Link href="/#contact">Let&apos;s Chat</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{"\u00A9"} 2026 {siteConfig.legalName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
