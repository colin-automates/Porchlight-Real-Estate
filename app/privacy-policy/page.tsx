import type { Metadata } from "next";
import { company } from "../data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Porchlight Real Estate LLC.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-header">
        <div className="site-wrap">
          <p className="eyebrow eyebrow--light">Legal</p>
          <h1>Privacy Policy</h1>
          <p>{company.legalName}</p>
        </div>
      </header>
      <div className="legal-body">
        <p>
          At Porchlight Real Estate LLC, we are committed to protecting your
          privacy. This Privacy Policy explains what information we collect,
          how we use it, and how we safeguard it when you visit our website or
          submit your information through our online forms.
        </p>
        <h2>Information We Collect</h2>
        <p>We may collect the following personal information:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Information you voluntarily submit when requesting services</li>
        </ul>
        <p>
          Our site may also automatically collect non-personal information such
          as IP address, browser type, pages viewed, cookies, and tracking data
          for site performance and analytics.
        </p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Provide real estate services</li>
          <li>Contact you via call, text, or email with your opt-in consent</li>
          <li>Send updates, resources, or follow-up information</li>
          <li>Improve our website and customer experience</li>
        </ul>
        <h2>We Do Not Sell Your Information</h2>
        <p>
          Porchlight Real Estate LLC does not sell, rent, or share your
          personal information, including phone numbers, with third parties for
          their marketing or promotional purposes. Your data is used only for
          communication related to your inquiry or the services you request.
        </p>
        <h2>Third-Party Service Providers</h2>
        <p>
          We may use trusted third-party tools such as website, analytics,
          email, or CRM platforms to operate our site and manage communication.
          These providers may process limited information solely to support
          website functionality and service delivery. They are not permitted
          to use your information for their own marketing.
        </p>
        <h2>Text Message and Email Communications</h2>
        <p>
          By submitting your information, you may choose to opt in to receive
          communications via SMS/text, phone call, or email. You can opt out at
          any time by replying “STOP” for texts, clicking the unsubscribe link
          in emails, or contacting us directly. Message and data rates may
          apply. Message frequency may vary.
        </p>
        <h2>Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies or similar technologies to improve site
          performance, track usage patterns, and enhance user experience. You
          may disable cookies through your browser settings.
        </p>
        <h2>Data Security</h2>
        <p>
          We take reasonable administrative, technical, and physical measures
          to protect your information from unauthorized access, misuse, or
          disclosure. However, no method of transmission or storage is
          completely secure.
        </p>
        <h2>Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have the right to access your
          information, request corrections, request deletion, or opt out of
          communication. Contact us at{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <h2>Links to External Sites</h2>
        <p>
          Our website may contain links to other websites. We are not
          responsible for the content or privacy practices of those sites.
        </p>
        <h2>Contact Us</h2>
        <p>
          {company.legalName}
          <br />
          Broker: {company.broker}
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
    </main>
  );
}

