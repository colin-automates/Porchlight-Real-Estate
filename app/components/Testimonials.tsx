"use client";

import { useState } from "react";
import { testimonials } from "../data";

export function Testimonials() {
  const [activeName, setActiveName] = useState(testimonials[0].name);
  const active =
    testimonials.find((testimonial) => testimonial.name === activeName) ??
    testimonials[0];

  return (
    <div className="quote-switcher">
      <figure aria-live="polite">
        <blockquote>“{active.quote}”</blockquote>
        <figcaption>{active.name}</figcaption>
      </figure>
      <div className="quote-names" aria-label="Choose a client testimonial">
        {testimonials.map((testimonial) => (
          <button
            key={testimonial.name}
            type="button"
            aria-pressed={testimonial.name === active.name}
            onClick={() => setActiveName(testimonial.name)}
          >
            {testimonial.name}
          </button>
        ))}
      </div>
    </div>
  );
}
