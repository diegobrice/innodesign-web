'use client';

import { useRef } from 'react';
import { faqs } from '@/data/content';
import { Plus, Minus } from '@/components/ui/icons';
import { gsap, useGSAP } from '@/components/gsap-init';

export function FAQ() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.faq-item', {
          scrollTrigger: { trigger: '.faq__list', start: 'top 82%' },
          autoAlpha: 0,
          y: 14,
          stagger: 0.08,
          duration: 0.6,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="faq">
      <div className="container grid items-start grid-cols-[1fr_1.5fr] gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div>
          <span className="section-kicker">[ 06 ] · FAQ</span>
          <h2 className="section-title">Resolvemos tus dudas</h2>
        </div>

        <div className="faq__list flex flex-col border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.id} className="faq-item group py-6 border-b border-border">
              <summary className="flex justify-between items-center gap-4 cursor-pointer font-medium text-[1.02rem] list-none text-text tracking-[-0.015em] transition-colors duration-200 hover:text-accent group-open:text-accent [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="shrink-0 text-[1.25rem] text-text-muted group-open:text-accent transition-colors duration-200">
                  <Plus className="group-open:hidden" />
                  <Minus className="hidden group-open:inline" />
                </span>
              </summary>
              <p className="mt-4 pr-10 text-text-muted text-[0.95rem] leading-[1.65]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
