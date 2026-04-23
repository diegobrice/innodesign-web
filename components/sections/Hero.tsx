'use client';

import { useRef } from 'react';
import { StatusDot } from '@/components/ui/StatusDot';
import { Button } from '@/components/ui/Button';
import { GridBackdrop } from '@/components/ui/GridBackdrop';
import { MetricCounter } from '@/components/ui/MetricCounter';
import { Caret } from '@/components/ui/Caret';
import { AccentRule } from '@/components/ui/AccentRule';
import { metrics } from '@/data/content';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ delay: 0.15 });
        tl.from('.hero__badge', { autoAlpha: 0, y: 14, duration: 0.7 })
          .from('.hero__title', { autoAlpha: 0, y: 28, duration: 1.1, ease: 'power4.out' }, '-=0.4')
          .from('.hero__rule', { scaleX: 0, transformOrigin: 'left', duration: 0.6 }, '-=0.5')
          .from('.hero__subtitle', { autoAlpha: 0, y: 18, duration: 0.8 }, '-=0.7')
          .from('.hero__actions > *', { autoAlpha: 0, y: 16, stagger: 0.1, duration: 0.7 }, '-=0.6')
          .from('.metric', { autoAlpha: 0, y: 24, stagger: 0.12, duration: 0.8 }, '-=0.5');
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="pt-[160px] pb-[120px] max-lg:pt-[120px] max-lg:pb-[80px] text-center overflow-hidden border-b border-border relative"
    >
      <GridBackdrop variant="hero" />

      <div className="container relative z-[1]">
        <span className="hero__badge inline-flex items-center gap-[10px] font-mono text-[11px] text-accent tracking-[0.14em] uppercase mb-9">
          <StatusDot />
          <span>&gt; AGENCIA DE DESARROLLO DE SOFTWARE</span>
        </span>

        <h1 className="hero__title text-[clamp(2.8rem,6.5vw,5.6rem)] font-bold max-w-[1000px] mx-auto mb-6 tracking-[-0.035em] leading-[1.02]">
          Construimos productos digitales que hacen <em>crecer</em> tu negocio
          <Caret />
        </h1>

        <div className="hero__rule flex justify-center mb-7">
          <AccentRule width={140} />
        </div>

        <p className="hero__subtitle text-[clamp(1rem,1.5vw,1.15rem)] text-text-muted max-w-[580px] mx-auto mb-12 leading-[1.6]">
          Somos un equipo de ingenieros y diseñadores que transforma ideas en
          aplicaciones web, móviles y SaaS listas para escalar.
        </p>

        <div className="hero__actions flex justify-center flex-wrap gap-3 mb-[120px] max-sm:w-full">
          <Button
            href="#contacto"
            size="lg"
            prefix
            className="max-sm:flex-1 max-sm:min-w-[180px]"
          >
            agendar llamada
          </Button>
          <Button
            href="#portfolio"
            variant="ghost"
            size="lg"
            className="max-sm:flex-1 max-sm:min-w-[180px]"
          >
            ver proyectos
          </Button>
        </div>

        <div className="grid grid-cols-3 max-w-[900px] mx-auto border-t border-b border-border max-sm:grid-cols-1">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="metric relative text-left py-9 px-6 border-r border-border last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:border-border max-sm:last:border-b-0"
            >
              <span className="block uppercase font-mono text-[10px] text-accent tracking-[0.14em] mb-[14px]">
                {m.label}
              </span>
              <strong className="block font-sans text-[clamp(2.2rem,3.5vw,3.2rem)] font-bold tracking-[-0.03em] leading-none mb-2 text-text">
                <MetricCounter value={m.value} />
              </strong>
              <span className="text-text-muted text-[0.85rem]">{m.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
