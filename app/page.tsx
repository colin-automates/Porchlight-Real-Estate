import type { Metadata } from "next";
import Link from "next/link";
import { Testimonials } from "./components/Testimonials";
import { agents, articles, communities, company, services } from "./data";
import { pageMetadata } from "./lib/metadata";
import { organizationSchema } from "./lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Porchlight Real Estate | Greater Chattanooga",
  description:
    "Porchlight Real Estate guides buyers and sellers across Greater Chattanooga with local expertise and a relationship-first approach.",
  path: "/",
});

metadata.title = { absolute: "Porchlight Real Estate | Greater Chattanooga" };

export default function Home() {
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
          <img
            className="belief-mark"
            src="/assets/brand/porchlight-mark.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div>
            <p className="label">The Porchlight approach</p>
            <h2>People first, from the first question through closing day.</h2>
          </div>
          <div className="belief-copy">
            <p>
              Porchlight was founded on a simple belief: real estate should be
              about people, not profit margins. Honest guidance, clear
              communication, and lasting relationships shape every move.
            </p>
            <Link className="text-link" href="/about">
              About Porchlight <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="service-paths section-space">
        <div className="shell">
          <header className="split-heading">
            <div>
              <p className="label">How we help</p>
              <h2>A clear path for the move in front of you.</h2>
            </div>
            <p>
              Begin with the goal that fits today. Porchlight’s team can help
              shape everything that follows.
            </p>
          </header>

          <div className="service-path-list">
            {services.slice(0, 2).map((service) => (
              <Link
                key={service.slug}
                className="service-path"
                href={service.slug === "buying" ? "/buying" : "/selling"}
              >
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                </div>
                <span aria-hidden="true">Explore →</span>
              </Link>
            ))}
          </div>

          <div className="support-line">
            <strong>{services[2].title}</strong>
            <p>{services[2].intro}</p>
            <Link className="text-link" href="/services">
              View every service <span aria-hidden="true">→</span>
            </Link>
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
        <div className="shell team-showcase">
          <header className="team-showcase-intro">
            <p className="label label-light">Meet Porchlight</p>
            <h2 id="team-heading">Good moves start with good people.</h2>
            <p>
              Local guidance, clear communication, and personal attention from
              agents who put relationships first.
            </p>
            <Link className="button button-gold" href="/agents">
              Meet the full team
            </Link>
          </header>

          <div className="team-showcase-roster">
            {agents.slice(0, 4).map((agent) => (
              <Link
                className="team-showcase-agent"
                href="/agents"
                aria-label={"Meet " + agent.name + " on the agents page"}
                key={agent.name}
              >
                <div className="team-showcase-photo">
                  <img
                    src={agent.image}
                    alt={"Portrait of " + agent.name}
                    loading="lazy"
                  />
                </div>
                <div className="team-showcase-caption">
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-preview section-space">
        <div className="shell">
          <div className="testimonial-preview-heading">
            <p className="label">Client experiences</p>
            <Link className="text-link text-link-light" href="/testimonials">
              Read every testimonial <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="journal-preview section-space">
        <div className="shell">
          <header className="split-heading">
            <div>
              <p className="label">The Porchlight Journal</p>
              <h2>Useful answers for buyers and sellers.</h2>
            </div>
            <Link className="text-link" href="/blog">
              View all articles <span aria-hidden="true">→</span>
            </Link>
          </header>
          <div className="article-row-list">
            {articles.map((article) => (
              <article className="article-row" key={article.slug}>
                <Link href={`/blog/${article.slug}`}>
                  <img src={article.image} alt={article.alt} loading="lazy" />
                  <div>
                    <p className="article-meta">
                      {article.category} <span>•</span> {article.date}
                    </p>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span className="text-link">Read article →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
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
