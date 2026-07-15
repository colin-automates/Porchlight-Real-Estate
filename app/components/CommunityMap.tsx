"use client";

import { useEffect, useRef, useState } from "react";
import { communities } from "../data";

type LeafletMap = {
  fitBounds: (points: [number, number][], options: { padding: [number, number] }) => void;
  remove: () => void;
  setView: (point: [number, number], zoom: number) => void;
};

type LeafletMarker = {
  addTo: (map: LeafletMap) => LeafletMarker;
  bindPopup: (content: string) => LeafletMarker;
  on: (event: string, handler: () => void) => LeafletMarker;
  openPopup: () => void;
};

type LeafletNamespace = {
  map: (element: HTMLElement, options: Record<string, unknown>) => LeafletMap;
  tileLayer: (
    url: string,
    options: Record<string, unknown>,
  ) => { addTo: (map: LeafletMap) => void };
  divIcon: (options: Record<string, unknown>) => unknown;
  marker: (
    point: [number, number],
    options: { icon: unknown; title: string; alt: string },
  ) => LeafletMarker;
};

declare global {
  interface Window {
    L?: LeafletNamespace;
    porchlightLeaflet?: Promise<LeafletNamespace>;
  }
}

function loadLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  if (window.porchlightLeaflet) return window.porchlightLeaflet;

  window.porchlightLeaflet = new Promise<LeafletNamespace>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/vendor/leaflet/leaflet.js";
    script.async = true;
    script.onload = () =>
      window.L ? resolve(window.L) : reject(new Error("Leaflet did not load"));
    script.onerror = () => reject(new Error("Leaflet could not be loaded"));
    document.head.appendChild(script);
  });

  return window.porchlightLeaflet;
}

export function CommunityMap() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LeafletMap | null>(null);
  const markers = useRef(new Map<string, LeafletMarker>());
  const [active, setActive] = useState<string | null>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let createdMap: LeafletMap | null = null;
    const markerStore = markers.current;

    loadLeaflet()
      .then((L) => {
        if (cancelled || !mapElement.current) return;

        const map = L.map(mapElement.current, {
          scrollWheelZoom: false,
          zoomControl: true,
        });
        createdMap = map;
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const bounds: [number, number][] = [];
        for (const community of communities) {
          const point: [number, number] = [
            community.latitude,
            community.longitude,
          ];
          bounds.push(point);
          const marker = L.marker(point, {
            icon: L.divIcon({
              className: "map-dot-wrap",
              html: '<span class="map-dot" aria-hidden="true"></span>',
              iconSize: [24, 24],
              iconAnchor: [12, 12],
            }),
            title: `${community.name}, ${community.state}`,
            alt: `${community.name}, ${community.state}`,
          })
            .addTo(map)
            .bindPopup(`<strong>${community.name}</strong><br>${community.state}`)
            .on("click", () => setActive(community.slug));
          markerStore.set(community.slug, marker);
        }

        map.fitBounds(bounds, { padding: [36, 36] });
        mapInstance.current = map;
      })
      .catch(() => setMapError(true));

    return () => {
      cancelled = true;
      createdMap?.remove();
      if (mapInstance.current === createdMap) mapInstance.current = null;
      markerStore.clear();
    };
  }, []);

  const showCommunity = (slug: string) => {
    const community = communities.find((item) => item.slug === slug);
    if (!community || !mapInstance.current) return;
    mapInstance.current.setView([community.latitude, community.longitude], 12);
    markers.current.get(slug)?.openPopup();
    setActive(slug);
  };

  return (
    <div className="community-map-layout">
      <div className="community-map-frame">
        <div
          ref={mapElement}
          className="community-map-canvas"
          role="region"
          aria-label="Interactive map of communities featured by Porchlight Real Estate"
        />
        <p className="map-attribution-note">
          Map data ©{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
          >
            OpenStreetMap contributors
          </a>
        </p>
        {mapError ? (
          <p className="map-error">
            The map is unavailable right now. Every featured community remains
            available in the directory.
          </p>
        ) : null}
      </div>

      <div className="community-directory">
        <div>
          <p className="label">Communities featured by Porchlight</p>
          <h2>Find your place around Chattanooga.</h2>
          <p>
            Select a name to locate it on the map. These markers identify
            communities, not exact service boundaries.
          </p>
        </div>
        <ul>
          {[...communities]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((community) => (
              <li key={community.slug} id={`community-${community.slug}`}>
                <a
                  href={`#community-${community.slug}`}
                  aria-label={`Show ${community.name} on the community map`}
                  aria-current={active === community.slug ? "location" : undefined}
                  onClick={(event) => {
                    if (!mapInstance.current) return;
                    event.preventDefault();
                    showCommunity(community.slug);
                  }}
                >
                  <span>{community.name}</span>
                  <small>{community.state}</small>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
