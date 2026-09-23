"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { industryRoutePaths } from "@/lib/industries";
import { serviceLandingPages } from "@/lib/services";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/site/Logo";

const industryPathSet = new Set<string>(industryRoutePaths);

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function Navbar() {
  const [menuState, setMenuState] = useState({ open: false, pathname: "" });
  const [servicesState, setServicesState] = useState({ open: false, pathname: "" });
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isIndustryPath = industryPathSet.has(pathname);
  const open = menuState.pathname === pathname ? menuState.open : false;
  const servicesOpen = servicesState.pathname === pathname ? servicesState.open : false;
  const isServicesPath = pathname === "/services" || pathname.startsWith("/services/");

  const closeServices = () => setServicesState({ open: false, pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState({ open: false, pathname });
        closeServices();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, servicesOpen, pathname]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
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

              if (item.href === "/services") {
                return (
                  <div className={`nav-dropdown${servicesOpen ? " is-open" : ""}`} key="services-dropdown">
                    <button
                      type="button"
                      className={`nav-dropdown-trigger${isServicesPath ? " active" : ""}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesState({ open: !servicesOpen, pathname })}
                    >
                      {item.label}
                      <ChevronIcon />
                    </button>
                    <div className="nav-dropdown-panel">
                      {serviceLandingPages.map((service) => (
                        <Link
                          href={service.href}
                          key={service.slug}
                          onClick={() => {
                            setMenuState({ open: false, pathname });
                            closeServices();
                          }}
                        >
                          {service.navLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuState({ open: false, pathname })}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="nav-right">
            <ButtonLink href="/contact" className="nav-cta" arrow={false}>
              Talk to us
            </ButtonLink>
            <button
              className={`nav-toggle${open ? " is-open" : ""}`}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-nav-links"
              onClick={() =>
                setMenuState((current) => ({
                  open: current.pathname === pathname ? !current.open : true,
                  pathname,
                }))
              }
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
