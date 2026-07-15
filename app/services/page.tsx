import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../data";
import { pageMetadata } from "../lib/metadata";
import { breadcrumbSchema, serviceSchemas } from "../lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Real Estate Services",
  description:
    "Buying representation, listing services, relocation guidance, and local expertise across Greater Chattanooga.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ...serviceSchemas(services),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ]),
        }}
      />
      <section className="services-mast page-mast page-mast-dark">
        <div className="shell narrow-mast">
          <p className="label label-light">Services</p>
          <h1>Guidance shaped around the move you’re making.</h1>
          <p>
            Buying, selling, relocating, or planning ahead. Porchlight pairs
            clear communication with the local perspective each decision needs.
          </p>
        </div>
      </section>

      <section className="service-detail-list section-space">
        <div className="shell">
          {services.map((service) => {
            const href =
              service.slug === "buying"
                ? "/buying"
                : service.slug === "selling"
                  ? "/selling"
                  : "/contact";
            return (
              <article className="service-detail-row" key={service.slug}>
                <div>
                  <p className="label">Porchlight service</p>
                  <h2>{service.title}</h2>
                  <p className="lead">{service.intro}</p>
                  <Link className="text-link" href={href}>
                    {service.slug === "support" ? "Start a conversation" : "Learn more"}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <ul className="check-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="simple-contact section-space">
        <div className="shell simple-contact-grid">
          <h2>Not sure where to begin?</h2>
          <div>
            <p>
              Tell the Porchlight team what you are considering, and they will
              help clarify the next step.
            </p>
            <Link className="button" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
