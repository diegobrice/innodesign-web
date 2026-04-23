'use client';

import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/components/gsap-init';

type Props = {
  value: string;
  className?: string;
};

export function MetricCounter({ value, className }: Props) {
  const match = value.trim().match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const el = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useGSAP(
    () => {
      if (!match) {
        setDisplay(value);
        return;
      }

      const [, prefix, numStr, suffix] = match;
      const target = parseFloat(numStr);
      const isInt = !numStr.includes('.');
      const counter = { val: 0 };

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        setDisplay(value);
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to(counter, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el.current, start: 'top 88%', once: true },
          onUpdate() {
            const current = isInt ? Math.round(counter.val) : counter.val.toFixed(1);
            setDisplay(prefix + current + suffix);
          },
          onComplete() {
            setDisplay(value);
          },
        });
      });

      return () => {
        ScrollTrigger.getAll()
          .filter((st) => st.trigger === el.current)
          .forEach((st) => st.kill());
      };
    },
    { scope: el, dependencies: [value] }
  );

  return (
    <span ref={el} className={className}>
      {display}
    </span>
  );
}
