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
  assert.match(html, /Welcome/);
  assert.match(html, /Redefining real estate/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders key SEO routes and a standalone article", async () => {
  const paths = [
    "/communities",
    "/agents",
    "/blog",
    "/blog/understanding-home-inspections-and-negotiating-repairs-with-sellers",
  ];
  for (const path of paths) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /Porchlight/i, path);
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

