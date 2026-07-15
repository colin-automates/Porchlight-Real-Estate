import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { company } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Porchlight Real Estate at 1200 Mountain Creek Road in Chattanooga or call (423) 667-3263.",
  path: "/contact",
});

export default function ContactPage() {
  const officeMapUrl =
    "https://www.google.com/maps/search/?api=1&query=1200+Mountain+Creek+Road+%23325+Chattanooga+TN+37405";

  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <section className="contact-mast page-mast page-mast-dark">
        <div className="shell contact-mast-grid">
          <div>
            <p className="label label-light">Get in touch</p>
            <h1>Bring the questions. We’ll help with the next step.</h1>
          </div>
          <p>
            Buying, selling, relocating, or planning ahead. Reach the
            Porchlight team directly by phone or email.
          </p>
        </div>
      </section>

      <section className="direct-contact section-space">
        <div className="shell direct-contact-grid">
          <div>
            <p className="label">Call</p>
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
            <p>Office phone for Porchlight Real Estate.</p>
          </div>
          <div>
            <p className="label">Email</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>Reach {company.broker}, owner and broker.</p>
          </div>
          <div>
            <p className="label">Visit</p>
            <address>
              {company.addressLine1}
              <br />
              {company.addressLine2}
            </address>
            <p>License # {company.license}</p>
          </div>
        </div>
        <div className="shell social-contact">
          <p>Follow company updates and local real estate guidance.</p>
          <a href={company.instagram} target="_blank" rel="noreferrer">
            Porchlight on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="office-map-section">
        <div className="shell office-map-heading">
          <div>
            <p className="label">Office map</p>
            <h2>1200 Mountain Creek Road</h2>
          </div>
          <a
            className="text-link"
            href={officeMapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <iframe
          title="Map showing Porchlight Real Estate in Chattanooga"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=1200%20Mountain%20Creek%20Road%20%23325%2C%20Chattanooga%2C%20TN%2037405&output=embed"
        />
      </section>
    </main>
  );
}
