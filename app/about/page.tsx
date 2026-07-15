import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { aboutParagraphs, company } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn about Porchlight Real Estate's relationship-first approach in Greater Chattanooga.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Porchlight", path: "/about" },
        ]}
      />
      <section className="about-mast page-mast">
        <div className="shell about-mast-grid">
          <div>
            <p className="label">About Porchlight</p>
            <h1>A real estate relationship built around people.</h1>
          </div>
          <div className="about-mast-note">
            <img src="/assets/brand/porchlight-mark.png" alt="" aria-hidden="true" />
            <p>
              Honesty, integrity, fairness, and genuine care shape the way
              Porchlight serves clients and supports its team.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story section-space">
        <div className="shell about-story-grid">
          <aside>
            <p className="label">Why Porchlight</p>
            <h2>People first, at every step.</h2>
          </aside>
          <div className="reading-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section section-space">
        <div className="shell">
          <p className="label label-light">What guides the work</p>
          <div className="values-grid">
            <div>
              <h2>Honesty</h2>
              <p>Clear guidance and straightforward communication.</p>
            </div>
            <div>
              <h2>Integrity</h2>
              <p>Doing what is right for clients and the team.</p>
            </div>
            <div>
              <h2>Care</h2>
              <p>Making every person feel welcomed and supported.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="broker-section section-space">
        <div className="shell broker-grid">
          <img
            src="/assets/people/christian-beairsto.webp"
            alt="Portrait of Christian Beairsto, owner and broker"
          />
          <div>
            <p className="label">Leadership</p>
            <h2>{company.broker}</h2>
            <p className="lead">Owner and Broker</p>
            <p>
              Porchlight’s leadership structure is designed to support agents
              so they can focus entirely on the needs of their clients.
            </p>
            <Link className="button button-outline" href="/agents">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
