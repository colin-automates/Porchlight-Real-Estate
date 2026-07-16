import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { ScheduleViewingForm } from "../components/ScheduleViewingForm";
import { company } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Schedule a Viewing",
  description:
    "Request a residential property viewing with Porchlight Real Estate in Greater Chattanooga.",
  path: "/schedule-viewing",
});

export default function ScheduleViewingPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Schedule a Viewing", path: "/schedule-viewing" },
        ]}
      />

      <section className="schedule-mast page-mast">
        <div className="shell schedule-mast-grid">
          <div>
            <p className="label">Schedule a viewing</p>
            <h1>Tell Porchlight which home you would like to see.</h1>
          </div>
          <p>
            Share the property and a preferred time. A Porchlight agent can
            follow up directly to confirm availability and the next step.
          </p>
        </div>
      </section>

      <section className="schedule-form-section section-space">
        <div className="shell schedule-layout">
          <aside className="schedule-help">
            <p className="label">Before you begin</p>
            <h2>A request starts the conversation.</h2>
            <p>
              Viewing times depend on the property and seller. Porchlight will
              confirm the appointment after reviewing your request.
            </p>
            <div>
              <span>Prefer to speak directly?</span>
              <a href={company.phoneHref}>{company.phoneDisplay}</a>
              <a href={"mailto:" + company.email}>{company.email}</a>
            </div>
          </aside>
          <ScheduleViewingForm />
        </div>
      </section>
    </main>
  );
}
