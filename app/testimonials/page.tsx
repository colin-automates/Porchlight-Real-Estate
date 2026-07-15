import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { testimonials } from "../data";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what Porchlight Real Estate clients say about working with the team.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Client stories"
        title="Relationships remembered after closing day."
        description="Real words from clients who trusted Porchlight agents with their home journey."
      />
      <section className="testimonial-ledger section-pad">
        <div className="site-wrap">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="simple-cta section-pad">
        <div className="site-wrap simple-cta__inner">
          <div>
            <p className="eyebrow">Your story begins here</p>
            <h2>Meet the team behind the experience.</h2>
          </div>
          <Link className="button" href="/agents">
            Meet our agents
          </Link>
        </div>
      </section>
    </main>
  );
}

