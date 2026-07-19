"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, headerNavItems } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 981px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    let frame = 0;
    const getScrollPosition = () =>
      Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0,
      );
    const updateHeader = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScrolled(getScrollPosition() > 16);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader, { passive: true });
    window.addEventListener("pageshow", updateHeader);
    document.addEventListener("touchmove", updateHeader, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      window.removeEventListener("pageshow", updateHeader);
      document.removeEventListener("touchmove", updateHeader);
    };
  }, [isHome]);

  const closeMenu = () => setOpen(false);
  const solidHeader = !isHome || scrolled || open;

  return (
    <header
      className="masthead"
      data-home={isHome || undefined}
      data-solid={solidHeader || undefined}
      data-open={open || undefined}
    >
      <div className="shell masthead-row">
        <button
          ref={menuButtonRef}
          className="menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="porchlight-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-trigger-lines" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>{open ? "Close" : "Menu"}</span>
        </button>

        <Link
          className="masthead-logo"
          href="/"
          aria-label="Porchlight Real Estate home"
          onClick={closeMenu}
        >
          <img src="/assets/brand/porchlight-logo.png" alt="Porchlight Real Estate" />
        </Link>

        <nav className="masthead-navigation" aria-label="Primary navigation">
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="masthead-schedule"
          href="/schedule-viewing"
          onClick={closeMenu}
        >
          Schedule Viewing
        </Link>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="porchlight-menu"
          className="menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="shell menu-panel-grid">
            <nav className="menu-primary" aria-label="Primary navigation">
              {headerNavItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
              <Link
                className="menu-schedule"
                href="/schedule-viewing"
                onClick={closeMenu}
              >
                Schedule Viewing
              </Link>
            </nav>
            <div className="menu-contact">
              <p>Serving Greater Chattanooga and nearby North Georgia.</p>
              <address>
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </address>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <Link href="/testimonials" onClick={closeMenu}>
                Client testimonials
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
