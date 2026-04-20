import { cases } from '@/data/content';

export function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">[ 03 ] · Portfolio</span>
          <h2>Casos de éxito recientes</h2>
          <p>Resultados medibles para clientes de distintos sectores.</p>
        </div>

        <div className="portfolio__grid">
          {cases.map((c) => (
            <article key={c.id} className="case-card">
              <div className="case-card__image" aria-hidden="true" />
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <strong className="case-card__metric">{c.metric}</strong>
            </article>
          ))}
        </div>

        <div className="portfolio__cta">
          <a href="#contacto" className="btn btn--ghost">
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
