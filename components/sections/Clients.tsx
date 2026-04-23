'use client';

import { useRef } from 'react';
import { clients } from '@/data/content';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Clients() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.client-logo', {
          scrollTrigger: { trigger: '.clients__logos', start: 'top 85%' },
          autoAlpha: 0,
          y: 12,
          stagger: 0.07,
          duration: 0.7,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="py-16 border-b border-border">
      <div className="container">
        <p className="text-center uppercase font-mono text-[0.72rem] text-text-subtle tracking-[0.18em] mb-10">
          Empresas que confían en nosotros
        </p>
        <div className="clients__logos flex justify-between items-center flex-wrap gap-10">
          {clients.map((name) => (
            <span
              key={name}
              className="client-logo font-sans text-[1.1rem] font-medium text-text-subtle tracking-[-0.01em] transition-colors duration-300 cursor-default hover:text-text"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
