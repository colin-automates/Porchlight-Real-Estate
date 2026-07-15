import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { company } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Porchlight Real Estate at 1200 Mountain Creek Road in Chattanooga or call (423) 667-3263.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-masthead">
        <div className="site-wrap contact-masthead__inner">
          <div>
            <p className="eyebrow eyebrow--light">Get in touch</p>
            <h1>Bring us the questions. We’ll help with the next step.</h1>
          </div>
          <address>
            <span>Office</span>
            {company.addressLine1}
            <br />
            {company.addressLine2}
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>
      </section>

      <section className="contact-section section-pad">
        <div className="site-wrap contact-section__grid">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us how we can help.</h2>
            <p className="large-copy">
              Buying, selling, relocating, or planning ahead. Share what is on
              your mind and the Porchlight team will be ready to listen.
            </p>
            <div className="office-details">
              <p>
                <strong>Broker</strong>
                {company.broker}
              </p>
              <p>
                <strong>License</strong>
                # {company.license}
              </p>
              <a
                className="text-link"
                href={company.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Follow Porchlight on Instagram ↗
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="office-map">
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

