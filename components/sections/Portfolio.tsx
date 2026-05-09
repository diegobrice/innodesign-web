'use client';

import { useRef } from 'react';
import Image from 'next/image';
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
              <div className="case-card__preview relative w-full h-[240px] border border-border rounded-[var(--radius-sm)] mb-6 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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

          <article className="case-card group flex flex-col items-center justify-center gap-6 p-6 min-h-[420px] border border-dashed border-border rounded-[var(--radius)] transition-[border-color,background-color] duration-200 hover:border-accent/40 hover:bg-bg-inset text-center cursor-default">
            <span className="font-mono text-[14px] text-text-subtle tracking-[0.18em] uppercase">
              // próximamente
            </span>
            <h3 className="text-[2rem] font-medium tracking-[-0.02em] text-text-muted group-hover:text-text transition-colors duration-200">
              Tu proyecto
              <br />
              <em>finalizado aquí.</em>
            </h3>
            <p className="text-text-subtle text-md max-w-[260px] leading-relaxed">
              Cuentanos qué necesitas y lo construimos juntos.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-mono text-md text-accent hover:text-accent-hover transition-colors duration-150"
            >
              <ArrowRight size={16} strokeWidth={1.5} className="opacity-60" />
              Hablemos
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
