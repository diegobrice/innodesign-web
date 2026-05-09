'use client';

import type { RefObject } from 'react';
import { gsap, useGSAP } from '@/components/gsap-init';

export function useSectionReveal(scope: RefObject<HTMLElement | null>, animateFn: () => void) {
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
        animateFn();
      });
    },
    { scope },
  );
}
