import Link from "next/link";
import { navItems } from "@/lib/data";
import { industryLinks } from "@/lib/industries";
import { serviceLandingPages } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

const footerServiceLinks = [
  "business-automation",
  "custom-software-development",
  "systems-integrations",
  "web-app-development",
].map((slug) => serviceLandingPages.find((service) => service.slug === slug)!);

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-in">
          <div>
            <Logo href="/#top" tone="light" />
            <p>Automation, software and connected systems for growing businesses.</p>
            <a href={`mailto:${siteConfig.email}`} className="foot-email">
              {siteConfig.email}
            </a>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              {footerServiceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>
                    {service.slug === "web-app-development" ? "Web Applications" : service.hero.eyebrow.split(" / ")[1]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h5>Industries</h5>
            <ul>
              {industryLinks.map((industry) => (
                <li key={industry.href}>
                  <Link href={industry.href}>{industry.label}</Link>
                </li>
              ))}
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
