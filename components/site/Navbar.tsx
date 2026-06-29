"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { industryRoutePaths } from "@/lib/industries";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/site/Logo";

const industryPathSet = new Set<string>(industryRoutePaths);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isIndustryPath = industryPathSet.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="nav-in">
        <Logo href="/#top" priority tone={isIndustryPath ? "industry" : "dark"} />
        <div className="nav-group">
          <div className={`nav-links${open ? " is-open" : ""}`} id="site-nav-links">
            {navItems.map((item) => {
              const isHashLink = item.href.includes("#");
              const active =
                !isHashLink &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ||
                  (item.href === "/industries" && isIndustryPath));
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="nav-right">
            <ButtonLink href="/#contact" className="nav-cta">
              Talk To Us
            </ButtonLink>
            <button
              className={`nav-toggle${open ? " is-open" : ""}`}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="site-nav-links"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
