"use client";

import { FormEvent, useState } from "react";
import { consentCopy } from "../data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-confirmation" role="status">
        <p className="eyebrow">Message ready</p>
        <h2>Thank you for reaching out.</h2>
        <p>
          This demo keeps form submissions private. Call the Porchlight office
          at <a href="tel:+14236673263">(423) 667-3263</a> to connect now.
        </p>
        <button className="text-link" type="button" onClick={() => setSent(false)}>
          Return to the form
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          First name
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          Last name
          <input name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        How can we help?
        <textarea name="message" rows={6} required />
      </label>
      <label className="checkbox-label">
        <input name="consent" type="checkbox" required />
        <span>I agree to the terms and conditions.</span>
      </label>
      <p className="consent-copy">
        {consentCopy} View our full <a href="/privacy-policy">privacy policy</a>.
      </p>
      <button className="button" type="submit">
        Send inquiry
      </button>
    </form>
  );
}

