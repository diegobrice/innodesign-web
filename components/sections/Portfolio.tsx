'use client';

import { useRef } from 'react';
import { cases } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from '@/components/ui/icons';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Portfolio() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.section-header > *', {
          scrollTrigger: { trigger: '.section-header', start: 'top 85%', toggleActions: 'play none none none' },
          autoAlpha: 0,
          y: 22,
          stagger: 0.12,
          duration: 0.9,
        });

        gsap.from('.case-card', {
          scrollTrigger: { trigger: '.portfolio__grid', start: 'top 80%' },
          autoAlpha: 0,
          y: 40,
          scale: 0.97,
          stagger: 0.12,
          duration: 0.9,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="portfolio">
      <div className="container">
        <SectionHeader
          kicker="[ 03 ] · Portfolio"
          title="Casos de éxito recientes"
          subtitle="Resultados medibles para clientes de distintos sectores."
        />

        <div className="portfolio__grid grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {cases.map((c) => (
            <article
              key={c.id}
              className="case-card p-6 bg-bg-card border border-border rounded-[var(--radius-lg)] hover:border-border-strong"
            >
              <div
                className="case-card__preview w-full h-[240px] border border-border rounded-[var(--radius)] mb-6"
                aria-hidden="true"
              />
              <span className="inline-flex items-center rounded-full uppercase px-[10px] py-[5px] bg-transparent border border-border-strong font-mono text-[0.68rem] text-text-muted tracking-[0.1em] mb-[14px]">
                {c.tag}
              </span>
              <h3 className="text-[1.25rem] font-medium mb-2 tracking-[-0.02em]">{c.title}</h3>
              <p className="text-text-muted mb-5 text-[0.95rem]">{c.description}</p>
              <strong className="inline-flex items-center gap-2 font-mono text-[0.95rem] text-accent font-medium tracking-[-0.01em]">
                <ArrowRight className="opacity-60" />
                {c.metric}
              </strong>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="#contacto" variant="ghost">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
