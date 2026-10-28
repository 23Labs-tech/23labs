"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { industryRoutePaths } from "@/lib/industries";
import { industriesMegaMenu, servicesMegaMenu, type MegaMenuData } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { Logo } from "@/components/site/Logo";

const industryPathSet = new Set<string>(industryRoutePaths);
const CLOSE_DELAY = 150;

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

type DropdownKey = "services" | "industries";

const megaMenus: Record<DropdownKey, MegaMenuData> = {
  services: servicesMegaMenu,
  industries: industriesMegaMenu,
};

export function Navbar() {
  const [menuState, setMenuState] = useState({ open: false, pathname: "" });
  const [dropdownState, setDropdownState] = useState<{ key: DropdownKey | null; pathname: string }>({
    key: null,
    pathname: "",
  });
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isIndustryPath = industryPathSet.has(pathname);
  const isServicesPath = pathname === "/services" || pathname.startsWith("/services/");
  const open = menuState.pathname === pathname ? menuState.open : false;
  const openDropdown = dropdownState.pathname === pathname ? dropdownState.key : null;

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
    }, CLOSE_DELAY);
  };

  const isHoverCapable = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const dropdownRef = (key: DropdownKey) => (key === "services" ? servicesRef : industriesRef);

  const closeAll = useCallback(() => {
    setMenuState({ open: false, pathname });
    closeDropdown();
  }, [pathname, closeDropdown]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => clearCloseTimeout, []);

  useEffect(() => {
    if (!openDropdown) return;
    const ref = dropdownRef(openDropdown);
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
        closeAll();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openDropdown, closeAll]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-in">
        <Logo href="/#top" priority tone={isIndustryPath ? "industry" : "dark"} />
        <div className="nav-group">
          <div className={`nav-links${open ? " is-open" : ""}`} id="site-nav-links">
            {navItems.map((item) => {
              if (item.href === "/contact") return null;

              const megaKey: DropdownKey | null =
                item.href === "/services" ? "services" : item.href === "/industries" ? "industries" : null;

              if (megaKey) {
                const menu = megaMenus[megaKey];
                const isOpen = openDropdown === megaKey;
                const isActivePath = megaKey === "services" ? isServicesPath : isIndustryPath;
                const allMobileItems = menu.columns.flatMap((column) => column.items);

                return (
                  <div
                    className={`nav-dropdown${isOpen ? " is-open" : ""}`}
                    key={megaKey}
                    ref={dropdownRef(megaKey)}
                    onMouseEnter={() => {
                      if (!isHoverCapable()) return;
                      showDropdown(megaKey);
                    }}
                    onMouseLeave={() => {
                      if (!isHoverCapable()) return;
                      scheduleCloseDropdown();
                    }}
                    onBlur={(event) => {
                      const ref = dropdownRef(megaKey).current;
                      if (ref && ref.contains(event.relatedTarget as Node)) return;
                      closeDropdown();
                    }}
                  >
                    <div className={`nav-service-trigger${isActivePath ? " active" : ""}`}>
                      <Link
                        href={menu.href}
                        className={isActivePath ? "active" : undefined}
                        aria-current={pathname === menu.href ? "page" : undefined}
                        onClick={closeAll}
                      >
                        {menu.label}
                      </Link>
                      <button
                        type="button"
                        className="nav-service-chevron"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-label={isOpen ? `Hide ${menu.label.toLowerCase()} menu` : `Show ${menu.label.toLowerCase()} menu`}
                        onClick={() => {
                          clearCloseTimeout();
                          setDropdownState({ key: isOpen ? null : megaKey, pathname });
                        }}
                        onFocus={() => {
                          if (!isHoverCapable()) return;
                          showDropdown(megaKey);
                        }}
                      >
                        <ChevronIcon />
                      </button>
                    </div>

                    <div className="mega-menu">
                      <div className="mega-menu-inner">
                        <div className="mega-feature">
                          <span className="mono">{menu.panel.eyebrow}</span>
                          <h3>{menu.panel.heading}</h3>
                          <p>{menu.panel.body}</p>
                          <Link href={menu.href} className="mega-feature-link" onClick={closeAll}>
                            {menu.panel.linkLabel}
                          </Link>
                        </div>
                        <div className="mega-content">
                          {menu.columns.map((column) => (
                            <div key={column.heading}>
                              <span className="mega-col-title">{column.heading}</span>
                              {column.items.map((menuItem) => (
                                <Link href={menuItem.href} className="mega-item" key={menuItem.href} onClick={closeAll}>
                                  <IndustryIcon icon={menuItem.icon} className="mega-item-icon" />
                                  <div className="mega-item-body">
                                    <h4>{menuItem.title}</h4>
                                    <p>{menuItem.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mega-mobile-list">
                      {allMobileItems.map((menuItem) => (
                        <Link href={menuItem.href} key={menuItem.href} onClick={closeAll}>
                          {menuItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isHashLink = item.href.includes("#");
              const active =
                !isHashLink &&
                (pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)));

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-primary nav-mobile-cta" onClick={closeAll}>
              Start a conversation
            </Link>
          </div>
          <div className="nav-right">
            <ButtonLink href="/contact" className="nav-cta" arrow={false}>
              Start a conversation
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
