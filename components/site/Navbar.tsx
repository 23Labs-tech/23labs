"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { industryLinks } from "@/lib/industries";
import { serviceLandingPages } from "@/lib/services";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/site/Logo";

const linkItems = navItems.filter((item) => item.href !== "/contact");

const megaMenus: Record<string, { label: string; href: string }[]> = {
  "/services": serviceLandingPages.map((service) => ({ label: service.navLabel, href: service.href })),
  "/industries": industryLinks.map((industry) => ({ label: industry.label, href: industry.href })),
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [openedForPathname, setOpenedForPathname] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);

  if (pathname !== openedForPathname) {
    setOpenedForPathname(pathname);
    setOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    if (!open && !openMenu) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
    }
    function onClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open, openMenu]);

  return (
    <nav className={`nav${open ? " is-open" : ""}`} id="nav" ref={navRef}>
      <div className="wrap home-wrap nav-in">
        <Logo href="/#top" priority />

        <div className="nav-right">
          <div className="nav-links">
            {linkItems.map((item) => {
              const isHashLink = item.href.includes("#");
              const active =
                !isHashLink &&
                (pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)));
              const menu = megaMenus[item.href];

              if (!menu) {
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={active ? "active" : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isMenuOpen = openMenu === item.href;

              return (
                <div
                  className={`nav-item-has-menu${isMenuOpen ? " is-open" : ""}`}
                  key={item.href}
                  onMouseEnter={() => setOpenMenu(item.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={`nav-menu-trigger${active ? " active" : ""}`}
                    aria-expanded={isMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(isMenuOpen ? null : item.href)}
                  >
                    {item.label}
                    <svg viewBox="0 0 10 6" aria-hidden="true" className="nav-menu-caret">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div className="nav-mega">
                      <div className="nav-mega-panel">
                        <Link href={item.href} className="nav-mega-all" onClick={() => setOpenMenu(null)}>
                          All {item.label.toLowerCase()}
                        </Link>
                        <div className="nav-mega-grid">
                          {menu.map((sub) => (
                            <Link href={sub.href} key={sub.href} onClick={() => setOpenMenu(null)}>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <ButtonLink href="/contact" className="nav-cta nav-cta-header">
            Start a conversation
          </ButtonLink>

          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-nav-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>

      <div className="nav-menu" id="site-nav-menu" hidden={!open}>
        <div className="wrap nav-menu-in">
          {linkItems.map((item) => {
            const menu = megaMenus[item.href];
            return (
              <div className="nav-menu-group" key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {menu && (
                  <div className="nav-menu-submenu">
                    {menu.map((sub) => (
                      <Link href={sub.href} key={sub.href} onClick={() => setOpen(false)}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <ButtonLink href="/contact" className="nav-cta nav-cta-menu">
            Start a conversation
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}
