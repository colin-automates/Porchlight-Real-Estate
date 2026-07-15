import Link from "next/link";
import { company, navItems } from "../data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-identity">
          <img src="/assets/brand/porchlight-logo.png" alt="Porchlight Real Estate" />
          <p>{company.tagline}</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <p className="label">Explore</p>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <p className="label">Start a conversation</p>
          <a className="footer-contact-phone" href={company.phoneHref}>
            {company.phoneDisplay}
          </a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <address>
            {company.addressLine1}
            <br />
            {company.addressLine2}
          </address>
          <a href={company.instagram} target="_blank" rel="noreferrer">
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="shell footer-disclosure">
        <div>
          <strong>{company.legalName}</strong>
          <span>License # {company.license}</span>
          <span>Broker: {company.broker}</span>
        </div>
        <p>
          All information is deemed reliable but not guaranteed and should be
          independently reviewed and verified.
        </p>
        <p>
          We do not sell, rent, or share your phone number, email address, or
          any personal information with third parties for promotional or
          marketing purposes.
        </p>
        <div className="footer-policy-links">
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
