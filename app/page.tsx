import type { Metadata } from "next";
import Link from "next/link";
import { CommunityExplorer } from "./components/CommunityExplorer";
import { Testimonials } from "./components/Testimonials";
import {
  agents,
  articles,
  company,
  services,
} from "./data";

export const metadata: Metadata = {
  title: {
    absolute: "Porchlight Real Estate | Greater Chattanooga Real Estate",
  },
  description:
    "Porchlight Real Estate serves buyers and sellers across Greater Chattanooga with local expertise and relationship-focused guidance.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    "@id": "https://www.porchlightrealestate.co/#organization",
    name: company.name,
    legalName: company.legalName,
    url: company.currentSite,
    logo: `${company.currentSite}/assets/brand/porchlight-logo.png`,
    slogan: company.tagline,
    telephone: company.phoneDisplay,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLine1,
      addressLocality: "Chattanooga",
      addressRegion: "TN",
      postalCode: "37405",
      addressCountry: "US",
    },
    areaServed: "Greater Chattanooga",
    sameAs: [company.instagram],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow eyebrow--light">Greater Chattanooga</p>
          <h1>
            Welcome
            <br />
            home.
          </h1>
          <p>{company.tagline}</p>
          <div className="home-hero__actions">
            <Link className="button button--gold" href="/contact">
              Speak with an agent
            </Link>
            <Link className="text-link text-link--light" href="/about">
              Our approach
            </Link>
          </div>
        </div>
        <figure className="home-hero__image">
          <img
            src="/assets/brand/hero-home.webp"
            alt="A warm farmhouse porch at sunset"
          />
          <figcaption>Home starts with a place that feels like yours.</figcaption>
        </figure>
      </section>

      <section className="statement-section section-pad">
        <img
          className="statement-mark"
          src="/assets/brand/porchlight-mark.png"
          alt=""
          aria-hidden="true"
        />
        <div className="site-wrap statement-grid">
          <p className="eyebrow">Our point of view</p>
          <h2>
            Real estate should be about people,
            <em> not profit margins.</em>
          </h2>
          <div className="statement-grid__aside">
            <p>
              Porchlight puts clients first and gives its agents the freedom
              to focus on what matters: honest guidance, clear communication,
              and relationships that last beyond closing day.
            </p>
            <Link className="text-link" href="/about">
              Read the Porchlight story
            </Link>
          </div>
        </div>
      </section>

      <section className="services-home section-pad">
        <div className="site-wrap">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">How we help</p>
              <h2>A steady hand for every move.</h2>
            </div>
            <p>
              Buying, selling, relocating, or simply figuring out the next
              right step. The Porchlight team meets you where you are.
            </p>
          </div>

          <div className="service-ledger">
            {services.map((service) => (
              <article key={service.number} className="service-ledger__row">
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                </div>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/services">
            Explore all services
          </Link>
        </div>
      </section>

      <section className="community-home section-pad">
        <div className="site-wrap">
          <CommunityExplorer />
        </div>
      </section>

      <section className="testimonial-home section-pad">
        <div className="site-wrap testimonial-home__heading">
          <p className="eyebrow">Words from home</p>
          <Link className="text-link" href="/testimonials">
            Read all testimonials
          </Link>
        </div>
        <div className="site-wrap">
          <Testimonials />
        </div>
      </section>

      <section className="agents-home section-pad">
        <div className="site-wrap">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">The people beside you</p>
              <h2>Local expertise. Genuine care.</h2>
            </div>
            <p>
              Porchlight’s agents bring market knowledge, strong
              communication, and a client-first mindset to every move.
            </p>
          </div>
          <div className="agent-feature-grid">
            {agents.slice(0, 4).map((agent, index) => (
              <article
                key={agent.name}
                className={`agent-feature agent-feature--${index + 1}`}
              >
                <div className="image-reveal">
                  <img src={agent.image} alt={agent.name} />
                </div>
                <p>{agent.role}</p>
                <h3>{agent.name}</h3>
                <a href={agent.phoneHref}>{agent.phone}</a>
              </article>
            ))}
          </div>
          <Link className="button button--outline" href="/agents">
            Meet the full team
          </Link>
        </div>
      </section>

      <section className="journal-home section-pad">
        <div className="site-wrap">
          <div className="section-heading section-heading--inline">
            <div>
              <p className="eyebrow">The Porchlight Journal</p>
              <h2>Clear answers for the road home.</h2>
            </div>
            <Link className="text-link" href="/blog">
              View every article
            </Link>
          </div>
          <div className="journal-layout">
            <article className="journal-lead">
              <Link href={`/blog/${articles[0].slug}`}>
                <div className="image-reveal">
                  <img src={articles[0].image} alt={articles[0].alt} />
                </div>
                <p className="article-meta">
                  {articles[0].category} · {articles[0].date}
                </p>
                <h3>{articles[0].title}</h3>
                <p>{articles[0].excerpt}</p>
              </Link>
            </article>
            <div className="journal-stack">
              {articles.slice(1).map((article) => (
                <article key={article.slug}>
                  <Link href={`/blog/${article.slug}`}>
                    <img src={article.image} alt={article.alt} />
                    <div>
                      <p className="article-meta">
                        {article.category} · {article.date}
                      </p>
                      <h3>{article.title}</h3>
                      <span className="text-link">Read article</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="site-wrap closing-cta__inner">
          <p className="eyebrow eyebrow--light">Your next chapter</p>
          <h2>Let’s make the next move feel like coming home.</h2>
          <div>
            <Link className="button button--gold" href="/contact">
              Start a conversation
            </Link>
            <a className="text-link text-link--light" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
