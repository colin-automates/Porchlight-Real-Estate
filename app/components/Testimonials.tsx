import { testimonials } from "../data";

export function Testimonials() {
  return (
    <div className="testimonial-preview-grid">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name}>
          <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <figcaption>{testimonial.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
