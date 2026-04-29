'use client';

import { useRef } from 'react';
import { services } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatusChip } from '@/components/ui/StatusChip';
import { BracketFrame } from '@/components/ui/BracketFrame';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Services() {
  const root = useRef<HTMLElement>(null);
  const prevIndex = useRef(-1);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.section-header > *', {
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
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
    { scope: root },
  );

  function handleMouseEnter(i: number, e: React.MouseEvent<HTMLElement>) {
    const card = e.currentTarget;
    const bg = card.querySelector<HTMLElement>('.service-card__bg');
    const frame = card.querySelector<HTMLElement>('.bracket-frame');
    const prev = prevIndex.current;

    if (prev !== -1 && prev !== i) {
      const cards = root.current?.querySelectorAll<HTMLElement>('.service-card');
      const prevCard = cards?.[prev];
      if (prevCard) {
        const prevBg = prevCard.querySelector<HTMLElement>('.service-card__bg');
        const prevFrame = prevCard.querySelector<HTMLElement>('.bracket-frame');
        gsap.killTweensOf([prevBg, prevFrame]);
        // exits in the same direction the user is moving
        gsap.to(prevBg, { x: i > prev ? '100%' : '-100%', duration: 0.35, ease: 'power2.in' });
        gsap.to(prevFrame, { opacity: 0, duration: 0.2 });
        prevCard.classList.remove('is-active');
      }
    }

    gsap.killTweensOf([bg, frame]);

    if (prev === -1) {
      // first hover — fade in
      gsap.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      // slide in from the side the user came from
      const fromX = i > prev ? '-100%' : '100%';
      gsap.fromTo(bg, { x: fromX, opacity: 1 }, { x: '0%', duration: 0.35, ease: 'power2.out' });
    }

    gsap.to(frame, { opacity: 1, duration: 0.25 });
    card.classList.add('is-active');
    prevIndex.current = i;
  }

  function handleMouseLeave(i: number, e: React.MouseEvent<HTMLElement>) {
    // if moving to another card let mouseenter handle it
    const related = e.relatedTarget as HTMLElement | null;
    if (related?.closest?.('.service-card')) return;

    const card = e.currentTarget;
    const bg = card.querySelector<HTMLElement>('.service-card__bg');
    const frame = card.querySelector<HTMLElement>('.bracket-frame');

    gsap.killTweensOf([bg, frame]);
    gsap.to(bg, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => gsap.set(bg, { x: '0%', opacity: 1 }),
    });
    gsap.to(frame, { opacity: 0, duration: 0.25 });
    card.classList.remove('is-active');
    prevIndex.current = -1;
  }

  return (
    <section ref={root} id="servicios">
      <div className="container">
        <SectionHeader
          kicker="Servicios"
          title="Todo lo que necesitas para lanzar tu producto"
          subtitle="Desde el diseño inicial hasta que tu proyecto esté publicado y funcionando."
        />

        <div className="services__grid grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="service-card flex flex-col py-10 px-8 bg-bg min-h-[260px]"
              onMouseEnter={(e) => handleMouseEnter(i, e)}
              onMouseLeave={(e) => handleMouseLeave(i, e)}
            >
              <div className="service-card__bg" />
              <BracketFrame />
              <div className="relative flex flex-col flex-1 z-[1]">
                <div className="inline-block uppercase font-mono text-[11px] font-medium text-accent tracking-[0.14em] mb-7">
                  {s.id}
                </div>
                <h3 className="text-[1.4rem] mb-[14px] tracking-[-0.02em] font-medium">
                  {s.title}
                </h3>
                <p className="text-text-muted text-[0.95rem] leading-[1.65] flex-1">
                  {s.description}
                </p>
                <div className="service-card__foot pt-5 mt-5 border-t border-dashed border-border">
                  <StatusChip tone="success">status: online</StatusChip>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
