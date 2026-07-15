import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { aboutParagraphs, company } from "../data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the relationship-focused boutique brokerage serving the Greater Chattanooga area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="About Porchlight"
        title="A different kind of real estate relationship."
        description="Honesty, integrity, fairness, and genuine care shape the way Porchlight serves clients and supports its team."
        image="/assets/brand/about-interior.webp"
        imageAlt="A warm, welcoming home interior"
      />

      <section className="about-story section-pad">
        <div className="site-wrap about-story__grid">
          <div className="about-story__heading">
            <p className="eyebrow">Why Porchlight</p>
            <h2>People first, at every step.</h2>
          </div>
          <div className="prose-columns">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="values-band section-pad">
        <div className="site-wrap values-band__grid">
          <p className="eyebrow eyebrow--light">What guides the work</p>
          <div>
            <h2>Honesty.</h2>
            <p>Clear guidance and straightforward communication.</p>
          </div>
          <div>
            <h2>Integrity.</h2>
            <p>Doing what is right for clients and the team.</p>
          </div>
          <div>
            <h2>Care.</h2>
            <p>Making every person feel welcomed and supported.</p>
          </div>
        </div>
      </section>

      <section className="broker-note section-pad">
        <div className="site-wrap broker-note__grid">
          <img
            src="/assets/people/christian-beairsto.webp"
            alt="Christian Beairsto, owner and broker"
          />
          <div>
            <p className="eyebrow">Leadership</p>
            <h2>{company.broker}</h2>
            <p className="large-copy">Owner and Broker</p>
            <p>
              Porchlight’s leadership structure is designed to support agents
              so they can focus entirely on the needs of their clients.
            </p>
            <Link className="button button--outline" href="/agents">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

