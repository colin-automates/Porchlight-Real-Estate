"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { company, headerNavItems } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const closeMenu = () => setOpen(false);

  return (
    <header className="masthead" data-open={open || undefined}>
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
              className={item.href === "/schedule-viewing" ? "schedule-link" : undefined}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
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
          <button className="menu-panel-close" type="button" onClick={closeMenu}>
            Close menu
          </button>
          <div className="shell menu-panel-grid">
            <nav className="menu-primary" aria-label="Primary navigation">
              {headerNavItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
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
