import { testimonials } from '@/data/content';

export function Testimonials() {
  return (
    <section id="testimonios">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">[ 05 ] · Testimonios</span>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonial">
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
