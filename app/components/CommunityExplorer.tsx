"use client";

import { useState } from "react";
import { communities } from "../data";

export function CommunityExplorer() {
  const [activeSlug, setActiveSlug] = useState(communities[0].slug);
  const active =
    communities.find((community) => community.slug === activeSlug) ??
    communities[0];

  return (
    <div className="community-explorer">
      <div className="community-map" aria-label="Greater Chattanooga community map">
        <div className="map-river" aria-hidden="true" />
        <span className="map-label map-label--city">Chattanooga</span>
        <span className="map-label map-label--north">TENNESSEE</span>
        <span className="map-label map-label--south">GEORGIA</span>
        {communities.map((community) => (
          <button
            key={community.slug}
            type="button"
            className={`map-pin${community.slug === active.slug ? " is-active" : ""}`}
            style={{ left: `${community.x}%`, top: `${community.y}%` }}
            aria-label={`Show ${community.name}`}
            aria-pressed={community.slug === active.slug}
            onClick={() => setActiveSlug(community.slug)}
          >
            <span />
          </button>
        ))}
        <div className="community-map__photo">
          <img src={active.image} alt={`Home in ${active.name}`} />
          <div>
            <span>Explore</span>
            <strong>{active.name}</strong>
          </div>
        </div>
      </div>

      <div className="community-list">
        <p className="eyebrow eyebrow--light">Areas we know</p>
        <h2>Find your place around Chattanooga.</h2>
        <p>
          Select a community on the map or browse the full local area list.
        </p>
        <div className="community-list__links">
          {communities.map((community) => (
            <button
              key={community.slug}
              type="button"
              className={community.slug === active.slug ? "is-active" : ""}
              onClick={() => setActiveSlug(community.slug)}
            >
              {community.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

