'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { GridBackdrop } from '@/components/ui/GridBackdrop';
import { gsap, useGSAP } from '@/components/gsap-init';
import { site } from '@/data/site';
import { MessageCircle, Clock } from 'lucide-react';

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const emRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Scramble em text immediately so it's never readable before the decode
        const SCRAMBLE_TARGET = 'crecer tu negocio';
        const SCRAMBLE_CHARS = '!<>-_/[]{}=+*^?#|@%$';
        if (emRef.current) {
          let init = '';
          for (let i = 0; i < SCRAMBLE_TARGET.length; i++) {
            init +=
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
          emRef.current.textContent = init;
        }

        const tl = gsap.timeline({ delay: 0.15 });
        tl.from('.hero__badge', { autoAlpha: 0, y: 14, duration: 0.7 })
          .from(
            '.hero__title',
            { autoAlpha: 0, y: 28, duration: 1.1, ease: 'power4.out' },
            '-=0.4',
          )
          .from(
            '.hero__subtitle',
            { autoAlpha: 0, y: 18, duration: 0.8 },
            '-=0.7',
          )
          .from(
            '.hero__actions > *',
            { autoAlpha: 0, y: 16, stagger: 0.1, duration: 0.7 },
            '-=0.6',
          )
          .to(
            { p: 0 },
            {
              p: 1,
              duration: 1.6,
              ease: 'none',
              onUpdate() {
                const el = emRef.current;
                if (!el) return;
                const revealed = Math.floor(
                  this.targets()[0].p * SCRAMBLE_TARGET.length,
                );
                let out = '';
                for (let i = 0; i < SCRAMBLE_TARGET.length; i++) {
                  out +=
                    i < revealed
                      ? SCRAMBLE_TARGET[i]
                      : SCRAMBLE_CHARS[
                          Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                        ];
                }
                el.textContent = out;
              },
              onComplete() {
                if (emRef.current) emRef.current.textContent = SCRAMBLE_TARGET;
              },
            },
            0.45,
          );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="pt-[160px] pb-[120px] max-lg:pt-[120px] max-lg:pb-[80px] text-center overflow-hidden border-b border-border relative"
    >
      <div className="container relative z-[1]">
        <span className="hero__badge inline-flex items-center gap-[10px] font-mono text-base text-accent tracking-[0.14em] uppercase mb-9">
          <span>AGENCIA DE DESARROLLO DE SOFTWARE</span>
        </span>

        <h1 className="hero__title text-[clamp(2.8rem,6.5vw,5.6rem)] font-bold max-w-[1000px] mx-auto mb-6 tracking-[-0.035em] leading-[1.02]">
          Construimos productos digitales que hacen{' '}
          <em ref={emRef}>crecer tu negocio</em>
        </h1>

        <p className="hero__subtitle text-[clamp(1rem,1.5vw,1.15rem)] text-text-muted max-w-[580px] mx-auto mb-12 leading-[1.6]">
          Diseñamos soluciones digitales modernas, rápidas y pensadas para
          generar más clientes y ventas.
        </p>

        <div className="hero__actions flex flex-col items-center gap-8 mb-[120px]">
          <Button
            href={site.whatsapp}
            target="_blank"
            size="lg"
            prefix
            className="max-sm:w-full max-sm:justify-center w-55"
          >
            solicitar propuesta
          </Button>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-elevated font-mono text-sm text-text-subtle tracking-[0.08em] uppercase">
              <MessageCircle
                size={14}
                className="text-accent shrink-0"
                strokeWidth={1.5}
              />
              Asesoría gratuita
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-elevated font-mono text-sm text-text-subtle tracking-[0.08em] uppercase">
              <Clock
                size={14}
                className="text-accent shrink-0"
                strokeWidth={1.5}
              />
              Respuesta en menos de 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
