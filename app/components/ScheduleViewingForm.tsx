"use client";

import type { FormEvent } from "react";
import { company } from "../data";

export function ScheduleViewingForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const property = String(form.get("property") ?? "").trim();
    const preferredDate = String(form.get("preferredDate") ?? "").trim();
    const preferredTime = String(form.get("preferredTime") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = "Viewing request from " + name;
    const body = [
      "Hello Porchlight Real Estate,",
      "",
      "I would like to schedule a viewing.",
      "",
      "Name: " + name,
      "Email: " + email,
      "Phone: " + (phone || "Not provided"),
      "Property or listing: " + property,
      "Preferred date: " + preferredDate,
      "Preferred time: " + preferredTime,
      "",
      "Additional details:",
      message || "None provided",
      "",
      "Please contact me to confirm availability.",
    ].join("\n");

    window.location.href =
      "mailto:" +
      company.email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  };

  return (
    <form className="viewing-form" onSubmit={handleSubmit}>
      <div className="viewing-field-grid">
        <div className="form-field">
          <label htmlFor="viewing-name">Name</label>
          <input
            id="viewing-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="viewing-email">Email</label>
          <input
            id="viewing-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="viewing-phone">Phone</label>
          <input
            id="viewing-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
        <div className="form-field">
          <label htmlFor="viewing-property">Property address or listing link</label>
          <input
            id="viewing-property"
            name="property"
            type="text"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="viewing-date">Preferred date</label>
          <input
            id="viewing-date"
            name="preferredDate"
            type="date"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="viewing-time">Preferred time</label>
          <select id="viewing-time" name="preferredTime" required defaultValue="">
            <option value="" disabled>
              Select a time
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Flexible">I’m flexible</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="viewing-message">Anything Porchlight should know?</label>
        <textarea
          id="viewing-message"
          name="message"
          rows={5}
          placeholder="Questions about the property, availability, or your move"
        />
      </div>

      <div className="viewing-form-footer">
        <button className="button" type="submit">
          Continue in email
        </button>
        <p>
          Your email app will open with these details prepared. Review the
          message and send it directly to Porchlight.
        </p>
      </div>
    </form>
  );
}
