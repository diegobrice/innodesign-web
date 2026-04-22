import { processSteps } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Process() {
  return (
    <section id="proceso" className="bg-bg-inset border-y border-border">
      <div className="container">
        <SectionHeader
          kicker="[ 02 ] · Proceso"
          title="Cómo trabajamos contigo"
          subtitle="Un método probado en +80 proyectos para entregar a tiempo y sin sorpresas."
        />

        <ul className="process__steps grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {processSteps.map((step) => (
            <li key={step.id} className="process-step group relative py-10 px-7 bg-bg-inset transition-colors duration-300 hover:bg-bg">
              <span className="inline-flex items-center justify-center rounded-full size-10 border border-border-strong font-mono text-[0.78rem] text-accent mb-7 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_20px_var(--color-accent-glow)]">
                {step.id}
              </span>
              <h3 className="text-xl mb-3 tracking-[-0.02em]">{step.title}</h3>
              <p className="text-text-muted text-[0.9rem] leading-[1.6]">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
