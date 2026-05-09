'use client';
import { useRef, useState } from 'react';
import { faqs } from '@/data/content';
import { Plus, Minus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { gsap, useGSAP } from '@/components/gsap-init';

export function FAQ() {
  const root = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const answerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.faq-item', {
        opacity: 0,
        y: 16,
        stagger: 0.07,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.faq__list', start: 'top 85%' },
      });
    });
  }, { scope: root });

  function toggle(id: string) {
    const el = answerRefs.current[id];
    if (!el) return;

    if (openId === id) {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.inOut' });
      setOpenId(null);
    } else {
      if (openId) {
        const prevEl = answerRefs.current[openId];
        if (prevEl) gsap.to(prevEl, { height: 0, opacity: 0, duration: 0.2, ease: 'power2.in' });
      }
      gsap.fromTo(
        el,
        { height: 0, opacity: 0, y: -6 },
        { height: 'auto', opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
      setOpenId(id);
    }
  }

  return (
    <section ref={root} id="faq">
      <div className="container grid items-start grid-cols-[1fr_1.5fr] gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <SectionHeader
          kicker="FAQ"
          title="Resolvemos tus dudas"
          align="start"
          className="mb-0"
        />

        <div className="faq__list flex flex-col border-t border-border">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="faq-item border-b border-border">
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex justify-between items-center gap-4 py-6 font-medium text-[1.02rem] text-left tracking-[-0.015em] transition-colors duration-200 hover:text-accent ${isOpen ? 'text-accent' : 'text-text'}`}
                >
                  <span>{faq.question}</span>
                  <span className={`shrink-0 transition-colors duration-200 ${isOpen ? 'text-accent' : 'text-text-muted'}`}>
                    {isOpen
                      ? <Minus size={18} strokeWidth={1.5} />
                      : <Plus size={18} strokeWidth={1.5} />
                    }
                  </span>
                </button>
                <div
                  ref={(el) => { answerRefs.current[faq.id] = el; }}
                  style={{ overflow: 'hidden', height: 0, opacity: 0 }}
                >
                  <p className="pb-6 pr-10 text-text-muted text-base leading-[1.65]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
