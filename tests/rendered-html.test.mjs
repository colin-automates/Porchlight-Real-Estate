import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://porchlight.local${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Porchlight home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Porchlight Real Estate/i);
  assert.match(html, /Redefining real estate/i);
  assert.match(html, /residential-porch\.webp/i);
  assert.match(html, /noindex/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the community directory without JavaScript", async () => {
  const response = await render("/communities");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const name of ["Apison", "Black Creek", "East Brainerd", "Whitwell"]) {
    assert.match(html, new RegExp(name, "i"), name);
  }
  assert.match(html, /Show Apison on the community map/i);
  assert.match(html, /OpenStreetMap/i);
});

test("publishes direct contact actions without a fake form", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /tel:\+14236673263/i);
  assert.match(html, /mailto:beairstohomes@gmail\.com/i);
  assert.match(html, /google\.com\/maps\/search/i);
  assert.doesNotMatch(html, /<form\b/i);
});

test("includes verified article and breadcrumb structured data", async () => {
  const response = await render(
    "/blog/understanding-home-inspections-and-negotiating-repairs-with-sellers",
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /BreadcrumbList/i);
  assert.match(html, /2026-02-17T14:39:32\.598Z/i);
  assert.match(html, /2026-02-17T14:43:38\.602Z/i);
});

test("renders key SEO routes and a standalone article", async () => {
  const paths = [
    "/about",
    "/services",
    "/communities",
    "/agents",
    "/buying",
    "/selling",
    "/testimonials",
    "/blog",
    "/contact",
    "/privacy",
    "/accessibility",
    "/blog/understanding-home-inspections-and-negotiating-repairs-with-sellers",
    "/blog/common-mistakes-sellers-make-that-sabotage-their-listings",
    "/blog/the-importance-of-getting-pre-approved-before-you-start-house-hunting",
  ];
  for (const path of paths) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /Porchlight/i, path);
  }
});

test("serves the custom 404 page", async () => {
  const response = await render("/this-page-does-not-exist");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /This path doesn.t lead home/i);
});

test("keeps legacy paths redirected", async () => {
  const redirects = new Map([
    ["/privacy-policy", "/privacy"],
    ["/accessibility-statement", "/accessibility"],
    ["/book-online", "/contact"],
  ]);

  for (const [from, to] of redirects) {
    const response = await render(from);
    assert.ok([307, 308].includes(response.status), from);
    assert.equal(new URL(response.headers.get("location"), "http://porchlight.local").pathname, to);
  }
});

test("publishes crawl directives", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);
  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap:/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(
    await sitemapResponse.text(),
    /understanding-home-inspections-and-negotiating-repairs-with-sellers/i,
  );
});
