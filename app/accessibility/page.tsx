import type { Metadata } from "next";
import { company } from "../data";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for Porchlight Real Estate.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-header">
        <div className="site-wrap">
          <p className="eyebrow eyebrow--light">Accessibility</p>
          <h1>Accessibility Statement</h1>
          <p>This statement was last updated on 1/27/26.</p>
        </div>
      </header>
      <div className="legal-body legal-body--short">
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

