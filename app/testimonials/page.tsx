import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { testimonials } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Client Testimonials",
  description:
    "Read source-approved client testimonials for Porchlight Real Estate agents.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Client Testimonials", path: "/testimonials" },
        ]}
      />
      <section className="testimonial-mast page-mast page-mast-dark">
        <div className="shell narrow-mast">
          <p className="label label-light">Client experiences</p>
          <h1>What working with Porchlight has felt like.</h1>
          <p>
            These words come directly from clients who trusted Porchlight
            agents with an important move.
          </p>
        </div>
      </section>

      <section className="testimonial-list-section section-space">
        <div className="shell testimonial-list">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="simple-contact section-space">
        <div className="shell simple-contact-grid">
          <h2>Ready for your own conversation?</h2>
          <div>
            <p>Start with the questions and priorities already on your mind.</p>
            <Link className="button" href="/contact">
              Contact Porchlight
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
