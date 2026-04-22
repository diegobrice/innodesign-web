import { testimonials } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Quote } from '@/components/ui/icons';

export function Testimonials() {
  return (
    <section id="testimonios">
      <div className="container">
        <SectionHeader
          kicker="[ 05 ] · Testimonios"
          title="Lo que dicen nuestros clientes"
        />

        <div className="testimonials__grid grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="testimonial relative p-8 bg-bg-card border border-border rounded-[var(--radius-lg)] transition-[border-color] duration-300 hover:border-border-strong"
            >
              <Quote className="absolute top-4 right-5 text-[2.75rem] text-accent opacity-25" />
              <blockquote className="text-[1rem] text-text mb-7 leading-[1.65] font-normal tracking-[-0.005em]">
                {t.quote}
              </blockquote>
              <figcaption className="pt-5 border-t border-border">
                <strong className="block text-[0.9rem] font-medium text-text mb-[2px]">{t.author}</strong>
                <span className="font-mono text-text-subtle text-[0.75rem] tracking-[0.06em] uppercase">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
