import Link from "next/link";
import { company, navItems } from "../data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-wrap footer-main">
        <div className="footer-brand">
          <img
            src="/assets/brand/porchlight-logo.png"
            alt="Porchlight Real Estate"
          />
          <p>{company.tagline}</p>
          <a
            className="text-link text-link--light"
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>

        <div className="footer-column">
          <p className="eyebrow eyebrow--light">Visit</p>
          <address>
            {company.addressLine1}
            <br />
            {company.addressLine2}
          </address>
          <a href={company.phoneHref}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>

        <div className="footer-column">
          <p className="eyebrow eyebrow--light">Explore</p>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="site-wrap footer-legal">
        <div>
          <strong>{company.name}</strong>
          <span>License # {company.license}</span>
          <span>Office: {company.phoneDisplay}</span>
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
        <div className="footer-legal__links">
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

