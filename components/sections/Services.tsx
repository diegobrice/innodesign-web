'use client';

import { useRef } from 'react';
import { services } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatusChip } from '@/components/ui/StatusChip';
import { BracketFrame } from '@/components/ui/BracketFrame';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Services() {
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

        gsap.from('.service-card', {
          scrollTrigger: { trigger: '.services__grid', start: 'top 78%' },
          autoAlpha: 0,
          y: 34,
          stagger: { amount: 0.5, from: 'start' },
          duration: 0.8,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="servicios">
      <div className="container">
        <SectionHeader
          kicker="Servicios"
          number="01"
          title="Todo lo que necesitas para lanzar tu producto"
          subtitle="Desde la primera línea de código hasta el despliegue en producción."
        />

        <div className="services__grid grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`service-card flex flex-col py-10 px-8 bg-bg transition-colors duration-300 min-h-[260px] hover:bg-bg-card ${i === 0 ? 'service-card--featured' : ''}`}
            >
              {i === 0 && <BracketFrame />}
              <div className="inline-block uppercase font-mono text-[11px] font-medium text-accent tracking-[0.14em] mb-7">
                {s.id}
              </div>
              <h3 className="text-[1.4rem] mb-[14px] tracking-[-0.02em] font-medium">{s.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-[1.65] flex-1">{s.description}</p>
              <div className="service-card__foot pt-5 mt-5 border-t border-dashed border-border">
                <StatusChip tone="success">status: online</StatusChip>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
