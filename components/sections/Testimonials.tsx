import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="sec sec-alt">
      <div className="wrap">
        <div className="sec-head reveal sec-head-center">
          <div className="sec-tag" style={{ justifyContent: "center" }}>
            What clients say
          </div>
          <h2 className="sec-title">Validated by the people we build for</h2>
        </div>
        <div className="testimonial-grid reveal">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-role">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
