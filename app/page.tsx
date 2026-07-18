import type { Metadata } from "next";
import Link from "next/link";
import { Testimonials } from "./components/Testimonials";
import { agents, communities, company } from "./data";
import { pageMetadata } from "./lib/metadata";
import { organizationSchema } from "./lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Porchlight Real Estate | Greater Chattanooga",
  description:
    "Porchlight Real Estate guides buyers and sellers across Greater Chattanooga with local expertise and a relationship-first approach.",
  path: "/",
});

metadata.title = { absolute: "Porchlight Real Estate | Greater Chattanooga" };

const serviceHighlights = [
  {
    title: "Home search and tours",
    description:
      "Personalized home searches, property tours, offer strategy, and contract-to-close coordination.",
    href: "/buying",
  },
  {
    title: "Listing preparation and marketing",
    description:
      "Home valuation, professional photography, marketing, showings, and open-house management.",
    href: "/selling",
  },
  {
    title: "Offers, negotiations, and closing",
    description:
      "Offer review, negotiation strategy, contract guidance, and steady support through closing.",
    href: "/services",
  },
  {
    title: "Relocation and local connections",
    description:
      "Relocation guidance, local insights, and connections to trusted area vendors.",
    href: "/services",
  },
] as const;

export default function Home() {
  const christian = agents[0];

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      <section className="home-hero" aria-labelledby="home-heading">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="location-line">Greater Chattanooga</p>
            <h1 id="home-heading">{company.tagline}</h1>
            <p>
              Personal guidance for buying, selling, and finding the right next
              step in Chattanooga and nearby North Georgia.
            </p>
            <div className="action-row">
              <Link className="button" href="/buying">
                I’m buying
              </Link>
              <Link className="button button-outline" href="/selling">
                I’m selling
              </Link>
            </div>
          </div>
          <figure className="home-hero-photo">
            <img
              src="/assets/rebuild/residential-porch.webp"
              alt="A shaded residential porch with rocking chairs and a porch swing"
              fetchPriority="high"
            />
            <figcaption>Home starts with a place that feels like yours.</figcaption>
          </figure>
        </div>
      </section>
      <section className="belief-section section-space">
        <div className="shell belief-grid">
          <div>
            <p className="label label-light">The Porchlight approach</p>
            <h2>People first, from the first question through closing day.</h2>
          </div>
          <div className="belief-copy">
            <p>
              Porchlight was founded on a simple belief: real estate should be
              about people, not profit margins. Honest guidance, clear
              communication, and lasting relationships shape every move.
            </p>
            <Link className="button button-gold belief-link" href="/about">
              About Porchlight <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="service-overview section-space">
        <div className="service-overview-shell">
          <header className="service-overview-heading">
            <div>
              <p className="label">How we help</p>
              <h2>A clear path for the move in front of you.</h2>
            </div>
            <div className="service-overview-intro">
              <p>
                Home search, listing preparation, negotiations, closing,
                relocation, and local connections.
              </p>
              <Link className="button button-outline" href="/services">
                View every service <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </header>

          <div className="service-overview-list">
            {serviceHighlights.map((service) => (
              <Link
                className="service-overview-item"
                href={service.href}
                key={service.title}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="local-preview section-space">
        <div className="shell local-preview-grid">
          <figure>
            <img
              src="/assets/brand/communities-hero.webp"
              alt="Downtown Chattanooga and the Tennessee River"
              loading="lazy"
            />
            <figcaption>Greater Chattanooga</figcaption>
          </figure>
          <div className="local-preview-copy">
            <p className="label">Local perspective</p>
            <h2>Communities across the ridges, river, and North Georgia.</h2>
            <p>
              Browse the places featured by Porchlight, then use the real map
              to understand how the area fits together.
            </p>
            <ul className="community-name-list">
              {communities.map((community) => (
                <li key={community.slug}>
                  <Link href={`/communities#community-${community.slug}`}>
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="button button-outline" href="/communities">
              Explore the area map
            </Link>
          </div>
        </div>
      </section>

      <section className="team-preview section-space" aria-labelledby="team-heading">
        <div className="shell team-feature">
          <figure className="team-feature-photo">
            <img
              src={christian.image}
              alt={`Portrait of ${christian.name}`}
              loading="lazy"
            />
          </figure>

          <div className="team-feature-copy">
            <p className="label label-light">{christian.role}</p>
            <h2 id="team-heading">Meet Christian Beairsto.</h2>
            <p>
              Christian leads Porchlight Real Estate as owner and broker. Get
              to know the full team behind the brokerage's relationship-first
              approach.
            </p>
            <Link className="button button-gold" href="/agents">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonial-preview section-space">
        <div className="shell">
          <div className="testimonial-preview-heading">
            <p className="label">Client experiences</p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band-grid">
          <div>
            <p className="label label-light">A straightforward first step</p>
            <h2>Bring the questions. Porchlight will help with what comes next.</h2>
          </div>
          <div className="contact-band-actions">
            <Link className="button button-gold" href="/contact">
              Start a conversation
            </Link>
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
