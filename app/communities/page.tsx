import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { CommunityMap } from "../components/CommunityMap";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Greater Chattanooga Communities",
  description:
    "Explore communities featured by Porchlight Real Estate across Greater Chattanooga and nearby North Georgia.",
  path: "/communities",
});

export default function CommunitiesPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          {
            name: "Greater Chattanooga Communities",
            path: "/communities",
          },
        ]}
      />
      <section className="communities-mast">
        <figure>
          <img
            src="/assets/brand/communities-hero.webp"
            alt="Downtown Chattanooga and the Tennessee River"
          />
        </figure>
        <div>
          <p className="label">Greater Chattanooga</p>
          <h1>See how the places around the city connect.</h1>
          <p>
            From established city neighborhoods to communities across the
            ridges and into North Georgia, Porchlight brings a local perspective
            to the search.
          </p>
        </div>
      </section>

      <section className="map-section section-space">
        <div className="shell">
          <CommunityMap />
        </div>
      </section>

      <section className="community-contact section-space">
        <div className="shell simple-contact-grid">
          <h2>Need help comparing areas?</h2>
          <div>
            <p>
              A map is a starting point. A Porchlight agent can help connect
              your priorities with the places that make sense for your move.
            </p>
            <Link className="button" href="/contact">
              Ask a local agent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
