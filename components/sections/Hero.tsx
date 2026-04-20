import { StatusDot } from '@/components/ui/StatusDot';
import { metrics } from '@/data/content';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <span className="hero__badge">
          <StatusDot />
          AGENCIA DE DESARROLLO DE SOFTWARE
        </span>

        <h1 className="hero__title">
          Construimos productos digitales que hacen <em>crecer</em> tu negocio.
        </h1>

        <p className="hero__subtitle">
          Somos un equipo de ingenieros y diseñadores que transforma ideas en
          aplicaciones web, móviles y SaaS listas para escalar.
        </p>

        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary btn--lg">
            Agenda una llamada →
          </a>
          <a href="#portfolio" className="btn btn--ghost btn--lg">
            Ver proyectos
          </a>
        </div>

        <div className="hero__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <span className="metric__label">{m.label}</span>
              <strong>{m.value}</strong>
              <span className="metric__desc">{m.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
