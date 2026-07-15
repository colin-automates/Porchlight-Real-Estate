import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { agents, company } from "../data";

export const metadata: Metadata = {
  title: "Our Agents",
  description:
    "Meet the Porchlight Real Estate team serving buyers and sellers across Greater Chattanooga.",
  alternates: { canonical: "/agents" },
};

export default function AgentsPage() {
  const peopleSchema = agents.map((agent) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: agent.name,
    jobTitle: agent.role,
    email: agent.email,
    telephone: agent.phone,
    worksFor: {
      "@type": "RealEstateAgent",
      name: company.name,
    },
    ...(agent.instagram ? { sameAs: [agent.instagram] } : {}),
  }));

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
      />
      <PageIntro
        eyebrow="Our agents"
        title="Dedication. Expertise. Passion."
        description="The Porchlight team combines local market knowledge, strong communication, and genuine care to guide clients through every step."
      />

      <section className="agent-roster section-pad">
        <div className="site-wrap">
          {agents.map((agent, index) => (
            <article key={agent.name} className="agent-profile">
              <div className="agent-profile__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="agent-profile__image image-reveal">
                <img src={agent.image} alt={agent.name} />
              </div>
              <div className="agent-profile__details">
                <p className="eyebrow">{agent.role}</p>
                <h2>{agent.name}</h2>
                <a href={`mailto:${agent.email}`}>{agent.email}</a>
                <a href={agent.phoneHref}>{agent.phone}</a>
                {agent.instagram ? (
                  <a
                    className="text-link"
                    href={agent.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

