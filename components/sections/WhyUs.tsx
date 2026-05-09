'use client';

import { useRef } from 'react';
import { MonitorSmartphone, Search, Zap, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { differentiators } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { gsap } from '@/components/gsap-init';
import { useSectionReveal } from '@/components/ui/useSectionReveal';

const iconMap: Record<(typeof differentiators)[number]['icon'], LucideIcon> = {
  MonitorSmartphone,
  Search,
  Zap,
  Users,
};

export function WhyUs() {
  const root = useRef<HTMLElement>(null);

  useSectionReveal(root, () => {
    gsap.from('.why-item', {
      scrollTrigger: { trigger: '.why__grid', start: 'top 80%' },
      autoAlpha: 0,
      y: 24,
      stagger: 0.11,
      duration: 0.8,
    });
  });

  return (
    <section ref={root} className="bg-bg-elevated border-y border-border">
      <div className="container">
        <SectionHeader
          kicker="Por qué elegirnos"
          title="Por qué tu proyecto digital importa hacerlo bien"
        />

        <div className="why__grid grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12">
          {differentiators.map((d) => {
            const Icon = iconMap[d.icon];
            return (
              <div key={d.title} className="why-item group text-left relative pt-8 border-t border-border-strong transition-colors duration-200 hover:border-accent-dim">
                <div className="inline-block mb-5 text-accent transition-transform duration-200 group-hover:scale-110">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-[1.2rem] mb-3 tracking-[-0.02em] font-medium">{d.title}</h3>
                <p className="text-text-muted text-base leading-[1.65]">{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
