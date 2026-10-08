"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { industryRoutePaths } from "@/lib/industries";
import { serviceLandingPages } from "@/lib/services";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/site/Logo";

const industryPathSet = new Set<string>(industryRoutePaths);
const SERVICES_CLOSE_DELAY = 150;

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

  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openServices = () => {
    clearCloseTimeout();
    setServicesState({ open: true, pathname });
  };

  const closeServices = () => {
    clearCloseTimeout();
    setServicesState({ open: false, pathname });
  };

  const scheduleCloseServices = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setServicesState({ open: false, pathname });
    }, SERVICES_CLOSE_DELAY);
  };

  const isHoverCapable = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const handleServicesMouseEnter = () => {
    if (!isHoverCapable()) return;
    openServices();
  };

  const handleServicesMouseLeave = () => {
    if (!isHoverCapable()) return;
    scheduleCloseServices();
  };

  const handleServicesFocus = () => {
    if (!isHoverCapable()) return;
    openServices();
  };

  const handleServicesBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (servicesRef.current && servicesRef.current.contains(event.relatedTarget as Node)) return;
    closeServices();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => clearCloseTimeout, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        closeServices();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen, pathname]);

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
                (pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)));

              if (item.href === "/services") {
                return (
                  <div
                    className={`nav-dropdown${servicesOpen ? " is-open" : ""}`}
                    key="services-dropdown"
                    ref={servicesRef}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    onBlur={handleServicesBlur}
                  >
                    <button
                      type="button"
                      className={`nav-dropdown-trigger${isServicesPath ? " active" : ""}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => {
                        clearCloseTimeout();
                        setServicesState({ open: !servicesOpen, pathname });
                      }}
                      onFocus={handleServicesFocus}
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
