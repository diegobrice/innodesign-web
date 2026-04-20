import { differentiators } from '@/data/content';

export function WhyUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">[ 04 ] · Diferenciadores</span>
          <h2>Más que una agencia, un socio técnico</h2>
        </div>

        <div className="why__grid">
          {differentiators.map((d) => (
            <div key={d.title} className="why-item">
              <div className="why-item__icon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
