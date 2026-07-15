import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { company, services } from "../data";

export const metadata: Metadata = {
  title: "Real Estate Services",
  description:
    "Buying representation, selling and listing services, relocation guidance, and local expertise across Greater Chattanooga.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const servicesSchema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "RealEstateAgent",
      name: company.name,
    },
    areaServed: "Greater Chattanooga",
    description: service.items.join(", "),
  }));

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <PageIntro
        eyebrow="Our services"
        title="Guidance shaped around your move."
        description="Everything you need for a seamless real estate experience, delivered with clear communication and a client-first mindset."
        image="/assets/brand/communities-hero.webp"
        imageAlt="A home in the Greater Chattanooga area"
      />

      <section className="services-detail section-pad">
        <div className="site-wrap">
          {services.map((service) => (
            <article key={service.number} className="service-detail">
              <div className="service-detail__number">{service.number}</div>
              <div>
                <p className="eyebrow">Porchlight service</p>
                <h2>{service.title}</h2>
                <p className="large-copy">{service.intro}</p>
              </div>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-cta section-pad">
        <div className="site-wrap simple-cta__inner">
          <div>
            <p className="eyebrow">Not sure where to begin?</p>
            <h2>Start with a conversation.</h2>
          </div>
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

