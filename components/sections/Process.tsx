import { processSteps } from '@/data/content';

export function Process() {
  return (
    <section id="proceso" className="process">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">[ 02 ] · Proceso</span>
          <h2>Cómo trabajamos contigo</h2>
          <p>Un método probado en +80 proyectos para entregar a tiempo y sin sorpresas.</p>
        </div>

        <ul className="process__steps">
          {processSteps.map((step) => (
            <li key={step.id} className="process-step">
              <span className="process-step__number">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
