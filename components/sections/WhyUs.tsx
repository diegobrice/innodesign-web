import { differentiators } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function WhyUs() {
  return (
    <section className="bg-bg-inset border-y border-border">
      <div className="container">
        <SectionHeader
          kicker="[ 04 ] · Diferenciadores"
          title="Más que una agencia, un socio técnico"
        />

        <div className="why__grid grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12">
          {differentiators.map((d) => (
            <div key={d.title} className="why-item text-left relative pt-8 border-t border-border-strong">
              <div className="inline-block uppercase font-mono text-[0.72rem] text-accent tracking-[0.12em] mb-5">
                {d.icon}
              </div>
              <h3 className="text-[1.2rem] mb-3 tracking-[-0.02em]">{d.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-[1.65]">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
