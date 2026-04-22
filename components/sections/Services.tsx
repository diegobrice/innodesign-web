import { services } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Services() {
  return (
    <section id="servicios">
      <div className="container">
        <SectionHeader
          kicker="[ 01 ] · Servicios"
          title="Todo lo que necesitas para lanzar tu producto"
          subtitle="Desde la primera línea de código hasta el despliegue en producción."
        />

        <div className="services__grid grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {services.map((s) => (
            <article
              key={s.id}
              className="service-card flex flex-col py-10 px-8 bg-bg transition-colors duration-300 min-h-[260px] hover:bg-bg-card"
            >
              <div className="inline-block uppercase font-mono text-[0.72rem] font-medium text-accent tracking-[0.1em] mb-7">
                {s.id}
              </div>
              <h3 className="text-[1.4rem] mb-[14px] tracking-[-0.02em]">{s.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-[1.65]">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
