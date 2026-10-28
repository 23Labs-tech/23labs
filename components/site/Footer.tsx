import Link from "next/link";
import { navItems } from "@/lib/data";
import { industryLinks } from "@/lib/industries";
import { getLocationPage } from "@/lib/locations";
import { serviceLandingPages } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

const studioLinks = navItems.filter((item) => item.href !== "/services" && item.href !== "/industries");
const contactIndex = studioLinks.findIndex((item) => item.href === "/contact");
const studioFooterLinks =
  contactIndex === -1
    ? [...studioLinks, { label: "New Zealand", href: "/new-zealand" }]
    : [
        ...studioLinks.slice(0, contactIndex),
        { label: "New Zealand", href: "/new-zealand" },
        ...studioLinks.slice(contactIndex),
      ];

const footerServiceLinks = [
  "business-process-automation",
  "ai-workflow-automation",
  "custom-software-development",
  "ai-agents",
  "system-integrations",
  "ongoing-support",
].map((slug) => serviceLandingPages.find((service) => service.slug === slug)!);

const footerLocationLinks = [
  ...["brisbane", "sydney", "melbourne", "adelaide", "perth", "auckland", "wellington", "christchurch"].map(
    (slug) => {
      const location = getLocationPage(slug)!;
      return { label: location.city, href: location.path };
    },
  ),
  { label: "New Zealand", href: "/new-zealand" },
];

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
            <p className="foot-label">Studio</p>
            <ul>
              {studioFooterLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <p className="foot-label">Services</p>
            <ul>
              <li>
                <Link href="/services">All services</Link>
              </li>
              {footerServiceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>{service.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <p className="foot-label">Industries</p>
            <ul>
              {industryLinks.map((industry) => (
                <li key={industry.href}>
                  <Link href={industry.href}>{industry.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <p className="foot-label">Locations</p>
            <ul>
              {footerLocationLinks.map((location) => (
                <li key={location.href}>
                  <Link href={location.href}>{location.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <p className="foot-label">Connect</p>
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
          <span className="foot-bottom-links">
            <Link href="/security">Security</Link>
            {" · "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
