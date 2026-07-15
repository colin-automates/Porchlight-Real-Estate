import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { company, services } from "../data";
import { pageMetadata } from "../lib/metadata";

const selling = services.find((service) => service.slug === "selling")!;

export const metadata: Metadata = pageMetadata({
  title: "Selling a Home",
  description:
    "Home valuation, professional presentation, showings, and offer negotiation for sellers in Greater Chattanooga.",
  path: "/selling",
});

export default function SellingPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Selling a Home", path: "/selling" },
        ]}
      />
      <section className="selling-mast page-mast">
        <div className="shell selling-mast-grid">
          <div>
            <p className="label">Selling with Porchlight</p>
            <h1>Preparation and guidance for a confident listing.</h1>
            <p>{selling.intro}</p>
            <div className="action-row">
              <Link className="button" href="/contact">
                Talk with an agent
              </Link>
              <a className="text-link" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </div>
          </div>
          <img
            src="/assets/rebuild/seller-preparation.webp"
            alt="Preparing a home interior for presentation"
          />
        </div>
      </section>

      <section className="pathway-details section-space">
        <div className="shell pathway-details-grid">
          <div>
            <p className="label">What support includes</p>
            <h2>A thoughtful plan from valuation through negotiation.</h2>
          </div>
          <ul className="large-list">
            {selling.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band-grid">
          <div>
            <p className="label label-light">Planning a sale</p>
            <h2>Start with an honest conversation about the property.</h2>
          </div>
          <Link className="button button-gold" href="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
