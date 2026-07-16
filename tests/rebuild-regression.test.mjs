import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const PROJECT_ROOT = fileURLToPath(new URL("../", import.meta.url));
const APP_ROOT = path.join(PROJECT_ROOT, "app");
const SOURCE_EXTENSIONS = new Set([
  ".css",
  ".js",
  ".jsx",
  ".json",
  ".md",
  ".mdx",
  ".ts",
  ".tsx",
]);

const REQUIRED_FILES = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
  "app/not-found.tsx",
  "app/about/page.tsx",
  "app/services/page.tsx",
  "app/buying/page.tsx",
  "app/selling/page.tsx",
  "app/communities/page.tsx",
  "app/agents/page.tsx",
  "app/testimonials/page.tsx",
  "app/blog/page.tsx",
  "app/blog/[slug]/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/privacy-policy/page.tsx",
  "app/accessibility/page.tsx",
  "app/sitemap.ts",
  "app/robots.ts",
];

const REQUIRED_BLOG_SLUGS = [
  "understanding-home-inspections-and-negotiating-repairs-with-sellers",
  "common-mistakes-sellers-make-that-sabotage-their-listings",
  "the-importance-of-getting-pre-approved-before-you-start-house-hunting",
];

const FORBIDDEN_LEGACY_UI = [
  ["utility strip", /\butility-bar(?:__[a-z0-9-]+)?\b/i],
  ["old header inner", /\bsite-header__inner\b/i],
  ["old desktop navigation", /\bdesktop-nav\b/i],
  ["old header CTA", /\bheader-cta\b/i],
  ["header phone number", /\bmasthead-phone\b/i],
  ["old mobile navigation", /\bmobile-nav(?:--open|__inner)?\b/i],
  ["service ledger", /\bservice-ledger(?:__row)?\b/i],
  ["service ordinal class", /\bservice-detail__number\b/i],
  ["numbered testimonial index", /\btestimonial-stage__index\b/i],
  ["staggered agent variant", /\bagent-feature--(?:1|2|3|4)\b/i],
  ["numbered agent profile", /\bagent-profile__number\b/i],
  ["numbered journal entry", /\bjournal-index__number\b/i],
  ["indexed community tile", /\bcommunity-tile--(?:1|2|3|4|5)\b/i],
  ["fake map river", /\bmap-river\b/i],
  ["fake map label", /\bmap-label--(?:city|north|south)\b/i],
  ["fake map pin", /\bmap-pin\b/i],
  ["alternating agent layout", /\.agent-profile:nth-child\(even\)/i],
  ["removed community photo directory", /\/assets\/communities\//i],
  [
    "unsupported community-name image alt",
    /alt\s*=\s*\{?\s*(?:`[^`]*\$\{\s*)?community\.name/i,
  ],
  [
    "agent index-derived layout",
    /\.map\s*\(\s*\(\s*agent\s*,\s*index\s*\)/i,
  ],
  [
    "community index-derived layout",
    /\.map\s*\(\s*\(\s*community\s*,\s*index\s*\)/i,
  ],
];

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(absolutePath)));
    } else if (
      entry.isFile() &&
      SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push({
        absolutePath,
        relativePath: path
          .relative(PROJECT_ROOT, absolutePath)
          .split(path.sep)
          .join("/"),
        source: await readFile(absolutePath, "utf8"),
      });
    }
  }

  return files;
}

function matchingFiles(files, pattern) {
  return files
    .filter(({ source }) => new RegExp(pattern.source, pattern.flags).test(source))
    .map(({ relativePath }) => relativePath);
}

const appFiles = await collectSourceFiles(APP_ROOT);
const appSource = appFiles
  .map(({ relativePath, source }) => `\n/* ${relativePath} */\n${source}`)
  .join("\n");

test("keeps every required public route and metadata file", async () => {
  const missing = [];

  for (const relativePath of REQUIRED_FILES) {
    try {
      await access(path.join(PROJECT_ROOT, relativePath));
    } catch {
      missing.push(relativePath);
    }
  }

  assert.deepEqual(missing, [], `Missing required files: ${missing.join(", ")}`);
});

test("does not reintroduce the rejected visual system", () => {
  for (const [label, pattern] of FORBIDDEN_LEGACY_UI) {
    const files = matchingFiles(appFiles, pattern);
    assert.deepEqual(
      files,
      [],
      `${label} (${pattern}) remains in: ${files.join(", ")}`,
    );
  }
});

test("keeps editorial ordinals and fake community coordinates out of app data", () => {
  const forbiddenDataPatterns = [
    ["padStart-based numbering", /\.padStart\s*\(\s*2\s*,/],
    ["service.number presentation field", /\bservice\s*\.\s*number\b/],
    ["service-style ordinal data", /\bnumber\s*:\s*["']0\d["']/],
    ["community x/y property access", /\bcommunity\s*\.\s*[xy]\b/],
    [
      "slugged records with percentage-style x/y coordinates",
      /\{(?=[^{}]*\bslug\s*:)(?=[^{}]*\bx\s*:\s*-?\d+(?:\.\d+)?)(?=[^{}]*\by\s*:\s*-?\d+(?:\.\d+)?)[^{}]*\}/s,
    ],
  ];

  for (const [label, pattern] of forbiddenDataPatterns) {
    const files = matchingFiles(appFiles, pattern);
    assert.deepEqual(
      files,
      [],
      `${label} (${pattern}) remains in: ${files.join(", ")}`,
    );
  }
});

test("uses the requested primary navigation and no decorative numbering", () => {
  const header = appFiles.find(
    ({ relativePath }) => relativePath === "app/components/Header.tsx",
  )?.source ?? "";
  const data = appFiles.find(
    ({ relativePath }) => relativePath === "app/data.ts",
  )?.source ?? "";

  for (const label of [
    "Blog",
    "Our Agents",
    "About",
    "Schedule Viewing",
    "Communities",
  ]) {
    assert.match(data, new RegExp(`label:\\s*["']${label}["']`), label);
  }
  assert.doesNotMatch(header, /company\.phoneDisplay|company\.phoneHref|masthead-phone/);
  assert.doesNotMatch(appSource, />\s*0[1-9]\s*</);
  assert.doesNotMatch(appSource, />\s*404\s*</);
});

test("uses local imagery instead of remote Wix image URLs", () => {
  const wixImageUrl =
    /(?:wix:image:\/\/|(?:https?:)?\/\/[^\s"'`)]*(?:wixstatic\.com\/media|static\.wixstatic\.com|parastorage\.com))/i;
  const files = matchingFiles(appFiles, wixImageUrl);

  assert.deepEqual(
    files,
    [],
    `Remote Wix image URLs remain in: ${files.join(", ")}`,
  );
});

test("retains all three sourced blog slugs", () => {
  assert.equal(REQUIRED_BLOG_SLUGS.length, 3);

  for (const slug of REQUIRED_BLOG_SLUGS) {
    const quotedSlug = new RegExp(`["'\\\`]${slug}["'\\\`]`);
    assert.match(appSource, quotedSlug, `Missing blog slug: ${slug}`);
  }
});

test("community map includes OSM attribution and an accessible fallback marker", () => {
  const hasOsmAttribution =
    /openstreetmap\.org\/copyright/i.test(appSource) ||
    /(?:©|&copy;)\s*OpenStreetMap/i.test(appSource) ||
    /OpenStreetMap\s+contributors/i.test(appSource);

  const hasAccessibleFallbackMarker =
    /<(?:a|button)\b(?=[^>]*(?:aria-label|title)\s*=\s*(?:\{)?["'`][^"'`]*(?:community|location|map|OpenStreetMap)[^"'`]*["'`])[^>]*>/is.test(
      appSource,
    ) ||
    /<(?:a|button)\b[^>]*>[\s\S]{0,180}(?:View|Open|Explore)[\s\S]{0,100}(?:OpenStreetMap|map)[\s\S]{0,100}<\/(?:a|button)>/i.test(
      appSource,
    );

  assert.equal(hasOsmAttribution, true, "Missing OpenStreetMap attribution");
  assert.equal(
    hasAccessibleFallbackMarker,
    true,
    "Missing an accessible community-map fallback link or marker",
  );
});

test("does not simulate a successful contact submission", () => {
  const fakeFormPatterns = [
    ["demo-only success copy", /This demo keeps form submissions private/i],
    ["instant fake submit state", /preventDefault\s*\(\s*\)\s*;\s*setSent\s*\(\s*true\s*\)/i],
    ["legacy fake confirmation label", />\s*Message ready\s*</i],
  ];

  for (const [label, pattern] of fakeFormPatterns) {
    const files = matchingFiles(appFiles, pattern);
    assert.deepEqual(
      files,
      [],
      `${label} remains in: ${files.join(", ")}`,
    );
  }
});
