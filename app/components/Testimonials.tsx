"use client";

import { useState } from "react";
import { testimonials } from "../data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <div className="testimonial-stage">
      <div className="testimonial-stage__index" aria-hidden="true">
        0{index + 1}
      </div>
      <figure key={active.name}>
        <blockquote>“{active.quote}”</blockquote>
        <figcaption>{active.name}</figcaption>
      </figure>
      <div className="testimonial-controls" aria-label="Testimonial controls">
        {testimonials.map((testimonial, testimonialIndex) => (
          <button
            key={testimonial.name}
            type="button"
            className={testimonialIndex === index ? "is-active" : ""}
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-pressed={testimonialIndex === index}
            onClick={() => setIndex(testimonialIndex)}
          >
            <span>0{testimonialIndex + 1}</span>
            {testimonial.name}
          </button>
        ))}
      </div>
    </div>
  );
}

