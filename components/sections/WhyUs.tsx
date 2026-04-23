'use client';

import { useRef } from 'react';
import { differentiators } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { gsap, useGSAP } from '@/components/gsap-init';

export function WhyUs() {
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

        gsap.from('.why-item', {
          scrollTrigger: { trigger: '.why__grid', start: 'top 80%' },
          autoAlpha: 0,
          y: 24,
          stagger: 0.11,
          duration: 0.8,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-bg-inset border-y border-border">
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
