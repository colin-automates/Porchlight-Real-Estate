import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { company, services } from "../data";
import { pageMetadata } from "../lib/metadata";

const buying = services.find((service) => service.slug === "buying")!;

export const metadata: Metadata = pageMetadata({
  title: "Buying a Home",
  description:
    "Personalized home search, tours, offer strategy, and contract-to-close guidance in Greater Chattanooga.",
  path: "/buying",
});

export default function BuyingPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Buying a Home", path: "/buying" },
        ]}
      />
      <section className="pathway-mast">
        <figure>
          <img
            src="/assets/rebuild/residential-porch.webp"
            alt="A quiet residential porch surrounded by greenery"
          />
        </figure>
        <div className="pathway-mast-copy">
          <p className="label">Buying with Porchlight</p>
          <h1>A personal path to the right home.</h1>
          <p>{buying.intro}</p>
          <div className="action-row">
            <Link className="button" href="/contact">
              Talk with an agent
            </Link>
            <a className="text-link" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="pathway-details section-space">
        <div className="shell pathway-details-grid">
          <div>
            <p className="label">What support includes</p>
            <h2>Clear help from search to closing.</h2>
          </div>
          <ul className="large-list">
            {buying.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band-grid">
          <div>
            <p className="label label-light">Ready when you are</p>
            <h2>Begin with the questions already on your mind.</h2>
          </div>
          <Link className="button button-gold" href="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
