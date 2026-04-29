'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { BracketFrame } from '@/components/ui/BracketFrame';
import { gsap, useGSAP } from '@/components/gsap-init';

export function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.cta__inner > *', {
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
          autoAlpha: 0,
          y: 28,
          stagger: 0.12,
          duration: 0.9,
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="contacto"
      className="cta relative overflow-hidden py-[140px] border-t border-border"
    >
      <div className="container">
        <div className="cta__frame relative mx-auto max-w-[960px] py-[72px] px-10 max-sm:px-6 bg-bg-elevated border border-border rounded-[var(--radius)] bg-grid">
          <BracketFrame size={20} />

          <div className="cta__inner text-center mx-auto relative max-w-[620px] z-[2]">
            <span className="label-mono label-mono--accent">HABLEMOS</span>
            <h2 className="text-[clamp(2.2rem,5vw,3.75rem)] mt-5 mb-6 font-bold tracking-[-0.035em] leading-[1.05]">
              ¿Listo para lanzar tu <em>proyecto digital</em>?
            </h2>
            <p className="text-[1.1rem] text-text-muted mb-10 max-w-[520px] mx-auto">
              Agenda una llamada de 30 minutos y te damos una propuesta clara en
              menos de 48 horas.
            </p>
            <div className="flex justify-center flex-wrap gap-3 max-sm:w-full">
              <Button
                href="https://wa.me/51952369305"
                target="_blank"
                size="lg"
                prefix
                className="max-sm:flex-1 max-sm:min-w-[180px]"
              >
                agendar llamada
              </Button>
              <Button
                href="https://wa.me/51952369305"
                target="_blank"
                variant="ghost"
                size="lg"
                className="max-sm:flex-1 max-sm:min-w-[180px]"
              >
                escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
