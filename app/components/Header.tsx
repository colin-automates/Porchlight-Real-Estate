"use client";

import Link from "next/link";
import { useState } from "react";
import { company, navItems } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="site-wrap utility-bar__inner">
          <span>Serving the Greater Chattanooga area</span>
          <a href={company.phoneHref}>{company.phoneDisplay}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-wrap site-header__inner">
          <Link
            className="brand-link"
            href="/"
            aria-label="Porchlight Real Estate home"
            onClick={() => setOpen(false)}
          >
            <img
              src="/assets/brand/porchlight-logo.png"
              alt="Porchlight Real Estate"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button--small header-cta" href="/contact">
            Start a conversation
          </Link>

          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-nav${open ? " mobile-nav--open" : ""}`}
          aria-label="Mobile navigation"
        >
          <div className="site-wrap mobile-nav__inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
          </div>
        </nav>
      </header>
    </>
  );
}

