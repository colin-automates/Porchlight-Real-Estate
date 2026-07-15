import type { Metadata } from "next";
import { AgentGrid } from "../components/AgentGrid";
import { agents } from "../data";
import { pageMetadata } from "../lib/metadata";
import {
  agentSchemas,
  breadcrumbSchema,
} from "../lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Our Agents",
  description:
    "Meet the Porchlight Real Estate team serving buyers and sellers across Greater Chattanooga.",
  path: "/agents",
});

export default function AgentsPage() {
  const peopleSchema = [
    ...agentSchemas(agents),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Agents", path: "/agents" },
    ]),
  ];

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
      />
      <section className="agents-mast page-mast">
        <div className="shell agents-mast-grid">
          <div>
            <p className="label">Our agents</p>
            <h1>Real people, ready to listen.</h1>
          </div>
          <p>
            The Porchlight team combines local market knowledge, strong
            communication, and genuine care to guide clients through every
            step.
          </p>
        </div>
      </section>

      <section className="agents-roster section-space">
        <div className="shell">
          <AgentGrid agents={agents} headingLevel={2} />
        </div>
      </section>
    </main>
  );
}
