import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { company } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Accessibility statement for Porchlight Real Estate.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="legal-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Accessibility Statement", path: "/accessibility" },
        ]}
      />
      <header className="legal-mast page-mast">
        <div className="shell">
          <p className="label">Accessibility</p>
          <h1>Accessibility Statement</h1>
          <p>This statement was last updated on January 27, 2026.</p>
        </div>
      </header>
      <div className="legal-copy legal-copy-short">
        <p>
          Porchlight Real Estate is committed to making our website accessible
          to all users. We strive to provide a positive experience for
          everyone, and we are continuously working to improve accessibility.
        </p>
        <p>
          If you encounter any issues or need assistance accessing our site,
          please contact us:
        </p>
        <p>
          Email: <a href={`mailto:${company.email}`}>{company.email}</a>
          <br />
          Website: <a href={company.currentSite}>www.porchlightrealestate.co</a>
        </p>
        <p>
          We welcome comments on how to improve the site’s accessibility for
          all users.
        </p>
      </div>
    </main>
  );
}
