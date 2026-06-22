import Link from "next/link";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h2>Studio</h2>
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
        <div>
          <h2>Products</h2>
          <ul>
            <li>
              <Link href="/#haylo">Haylo AI</Link>
            </li>
            <li>
              <Link href="/blog">Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Connect</h2>
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
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Copyright 2026 {siteConfig.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

