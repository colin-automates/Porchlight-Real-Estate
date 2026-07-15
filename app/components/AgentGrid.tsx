import type { Agent } from "../data";

export function AgentGrid({
  agents,
  headingLevel = 3,
}: {
  agents: Agent[];
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className="agent-grid">
      {agents.map((agent) => (
        <article className="agent-card" key={agent.name}>
          <div className="agent-photo">
            <img
              src={agent.image}
              alt={`Portrait of ${agent.name}`}
              loading="lazy"
            />
          </div>
          <div className="agent-card-copy">
            <p className="label">{agent.role}</p>
            <Heading>{agent.name}</Heading>
            <a href={agent.phoneHref}>{agent.phone}</a>
            <a href={`mailto:${agent.email}`}>{agent.email}</a>
            {agent.instagram ? (
              <a href={agent.instagram} target="_blank" rel="noreferrer">
                Instagram <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
