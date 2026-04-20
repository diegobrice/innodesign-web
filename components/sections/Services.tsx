import { services } from '@/data/content';

export function Services() {
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">[ 01 ] · Servicios</span>
          <h2>Todo lo que necesitas para lanzar tu producto</h2>
          <p>Desde la primera línea de código hasta el despliegue en producción.</p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.id} className="service-card">
              <div className="service-card__icon">{s.id}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
