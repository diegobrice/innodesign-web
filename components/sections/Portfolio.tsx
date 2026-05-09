'use client';

import { useRef } from 'react';
import { cases } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { gsap } from '@/components/gsap-init';
import { useSectionReveal } from '@/components/ui/useSectionReveal';

export function Portfolio() {
  const root = useRef<HTMLElement>(null);

  useSectionReveal(root, () => {
    gsap.from('.case-card', {
      scrollTrigger: { trigger: '.portfolio__grid', start: 'top 80%' },
      autoAlpha: 0,
      y: 40,
      scale: 0.97,
      stagger: 0.12,
      duration: 0.9,
    });
  });

  return (
    <section ref={root} id="portfolio">
      <div className="container">
        <SectionHeader
          kicker="Lo que hacemos"
          title="Proyectos de referencia"
          subtitle="Ejemplos del tipo de trabajo que entregamos."
        />

        <div className="portfolio__grid grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {cases.map((c) => (
            <article
              key={c.id}
              className="case-card p-6 bg-bg-card border border-border rounded-[var(--radius)] transition-[border-color,background-color] duration-200 hover:border-border-strong hover:bg-bg-inset"
            >
              <div
                className="case-card__preview w-full h-[240px] border border-border rounded-[var(--radius-sm)] mb-6 bg-grid"
                aria-hidden="true"
              />
              <span className="inline-flex items-center rounded-pill uppercase px-[10px] py-[4px] bg-bg border border-border font-mono text-[12px] text-text-subtle tracking-[0.14em] mb-[14px]">
                {c.tag}
              </span>
              <h3 className="text-[1.25rem] font-medium mb-2 tracking-[-0.02em]">
                {c.title}
              </h3>
              <p className="text-text-muted mb-5 text-base">{c.description}</p>
              <strong className="inline-flex items-center gap-2 font-mono text-base text-accent font-medium tracking-[-0.01em]">
                <ArrowRight
                  className="opacity-60"
                  size={18}
                  strokeWidth={1.5}
                />
                {c.metric}
              </strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
