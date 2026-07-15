import type { Metadata } from "next";
import { CommunityExplorer } from "../components/CommunityExplorer";
import { PageIntro } from "../components/PageIntro";
import { communities } from "../data";

export const metadata: Metadata = {
  title: "Greater Chattanooga Communities",
  description:
    "Explore communities served by Porchlight Real Estate throughout Greater Chattanooga and nearby North Georgia.",
  alternates: { canonical: "/communities" },
};

export default function CommunitiesPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Communities"
        title="A local view of the Chattanooga area."
        description="From established city neighborhoods to communities across the ridges and into North Georgia, Porchlight brings local perspective to the search."
        image="/assets/brand/communities-hero.webp"
        imageAlt="A home in the Chattanooga area"
      />

      <section className="community-page-map section-pad">
        <div className="site-wrap">
          <CommunityExplorer />
        </div>
      </section>

      <section className="community-index section-pad">
        <div className="site-wrap">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">The area at a glance</p>
              <h2>Every community has its own sense of home.</h2>
            </div>
            <p>
              Browse the complete list of communities featured by Porchlight.
              Reach out for personal guidance on the areas that fit your move.
            </p>
          </div>
          <div className="community-gallery">
            {communities.map((community, index) => (
              <article
                key={community.slug}
                className={`community-tile community-tile--${(index % 5) + 1}`}
              >
                <img src={community.image} alt={`Home in ${community.name}`} />
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{community.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

