'use client';

import { useRef } from 'react';
import { processSteps } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { gsap } from '@/components/gsap-init';
import { useSectionReveal } from '@/components/ui/useSectionReveal';

export function Process() {
  const root = useRef<HTMLElement>(null);

  useSectionReveal(root, () => {
    gsap.from('.process-step', {
      scrollTrigger: { trigger: '.process__steps', start: 'top 78%' },
      autoAlpha: 0,
      x: -32,
      stagger: 0.14,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  return (
    <section ref={root} id="proceso" className="bg-bg-elevated border-y border-border">
      <div className="container">
        <SectionHeader
          kicker="Proceso"
          title="Cómo trabajamos contigo"
          subtitle="Un proceso claro y transparente para que siempre sepas en qué etapa estamos."
        />

        <ul className="process__steps grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {processSteps.map((step) => (
            <li
              key={step.id}
              className="process-step group relative py-10 px-7 bg-bg-elevated transition-colors duration-300 hover:bg-bg"
            >
              <span className="inline-flex items-center justify-center rounded-sm size-10 border border-border-strong font-mono text-base text-accent mb-7 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_16px_-4px_var(--color-accent)]">
                {step.id}
              </span>
              <h3 className="text-xl mb-3 tracking-[-0.02em] font-medium">{step.title}</h3>
              <p className="text-text-muted text-base leading-[1.6]">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
