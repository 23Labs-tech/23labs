"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { industryLinks, industryRoutePaths } from "@/lib/industries";
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

type DropdownKey = "services" | "industries";

export function Navbar() {
  const [menuState, setMenuState] = useState({ open: false, pathname: "" });
  const [dropdownState, setDropdownState] = useState<{ key: DropdownKey | null; pathname: string }>({
    key: null,
    pathname: "",
  });
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isIndustryPath = industryPathSet.has(pathname);
  const open = menuState.pathname === pathname ? menuState.open : false;
  const openDropdown = dropdownState.pathname === pathname ? dropdownState.key : null;
  const isServicesPath = pathname === "/services" || pathname.startsWith("/services/");

  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const showDropdown = (key: DropdownKey) => {
    clearCloseTimeout();
    setDropdownState({ key, pathname });
  };

  const closeDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownState({ key: null, pathname });
  }, [pathname]);

  const scheduleCloseDropdown = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownState({ key: null, pathname });
    }, SERVICES_CLOSE_DELAY);
  };

  const isHoverCapable = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const dropdownRef = (key: DropdownKey) => (key === "services" ? servicesRef : industriesRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => clearCloseTimeout, []);

  useEffect(() => {
    if (!openDropdown) return;
    const ref = openDropdown === "services" ? servicesRef : industriesRef;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openDropdown, pathname, closeDropdown]);

  useEffect(() => {
    if (!open && !openDropdown) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState({ open: false, pathname });
        closeDropdown();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openDropdown, pathname, closeDropdown]);

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
                const menus: {
                  key: DropdownKey;
                  label: string;
                  href?: string;
                  active: boolean;
                  items: { href: string; label: string }[];
                }[] = [
                  {
                    key: "services",
                    label: item.label,
                    href: "/services",
                    active: isServicesPath,
                    items: [
                      { href: "/services", label: "All services" },
                      ...serviceLandingPages.map((service) => ({
                        href: service.href,
                        label: service.navLabel,
                      })),
                    ],
                  },
                  {
                    key: "industries",
                    label: "Industries",
                    active: isIndustryPath,
                    items: industryLinks.map((industry) => ({
                      href: industry.href,
                      label: industry.label,
                    })),
                  },
                ];

                return (
                  <div className="nav-dropdown-group" key="services-and-industries">
                    {menus.map((menu) => {
                      const isOpen = openDropdown === menu.key;
                      return (
                        <div
                          className={`nav-dropdown${isOpen ? " is-open" : ""}`}
                          key={menu.key}
                          ref={dropdownRef(menu.key)}
                          onMouseEnter={() => {
                            if (!isHoverCapable()) return;
                            showDropdown(menu.key);
                          }}
                          onMouseLeave={() => {
                            if (!isHoverCapable()) return;
                            scheduleCloseDropdown();
                          }}
                          onBlur={(event) => {
                            const ref = dropdownRef(menu.key).current;
                            if (ref && ref.contains(event.relatedTarget as Node)) return;
                            closeDropdown();
                          }}
                        >
                          {menu.href ? (
                            <div className={`nav-service-trigger${menu.active ? " active" : ""}`}>
                              <Link
                                href={menu.href}
                                className={menu.active ? "active" : undefined}
                                aria-current={pathname === menu.href ? "page" : undefined}
                                onClick={() => {
                                  setMenuState({ open: false, pathname });
                                  closeDropdown();
                                }}
                              >
                                {menu.label}
                              </Link>
                              <button
                                type="button"
                                className="nav-service-chevron"
                                aria-expanded={isOpen}
                                aria-haspopup="true"
                                aria-label={isOpen ? "Hide services menu" : "Show services menu"}
                                onClick={() => {
                                  clearCloseTimeout();
                                  setDropdownState({ key: isOpen ? null : menu.key, pathname });
                                }}
                                onFocus={() => {
                                  if (!isHoverCapable()) return;
                                  showDropdown(menu.key);
                                }}
                              >
                                <ChevronIcon />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className={`nav-dropdown-trigger${menu.active ? " active" : ""}`}
                              aria-expanded={isOpen}
                              aria-haspopup="true"
                              onClick={() => {
                                clearCloseTimeout();
                                setDropdownState({ key: isOpen ? null : menu.key, pathname });
                              }}
                              onFocus={() => {
                                if (!isHoverCapable()) return;
                                showDropdown(menu.key);
                              }}
                            >
                              {menu.label}
                              <ChevronIcon />
                            </button>
                          )}
                          <div className="nav-dropdown-panel">
                            {menu.items.map((entry) => (
                              <Link
                                href={entry.href}
                                key={entry.href}
                                className={pathname === entry.href ? "active" : undefined}
                                aria-current={pathname === entry.href ? "page" : undefined}
                                onClick={() => {
                                  setMenuState({ open: false, pathname });
                                  closeDropdown();
                                }}
                              >
                                {entry.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
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
