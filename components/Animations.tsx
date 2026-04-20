'use client';

import { useEffect } from 'react';

export function Animations() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    let cancelled = false;
    let mmRevert: (() => void) | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: 'power3.out', duration: 0.9 });

      const mm = gsap.matchMedia();
      mmRevert = () => mm.revert();

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          hasMotion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const { reduceMotion } = context.conditions!;

          if (reduceMotion) {
            gsap.set(
              '.hero__badge, .hero__title, .hero__subtitle, .hero__actions, .metric',
              { autoAlpha: 1 }
            );
            return;
          }

          /* Navbar — slide down */
          gsap.from('.navbar', {
            yPercent: -100,
            autoAlpha: 0,
            duration: 0.7,
            ease: 'power2.out',
          });

          /* Hero — entrance timeline */
          const heroTl = gsap.timeline({ delay: 0.15 });
          heroTl
            .from('.hero__badge', { autoAlpha: 0, y: 14, duration: 0.7 })
            .from('.hero__title', { autoAlpha: 0, y: 28, duration: 1.1, ease: 'power4.out' }, '-=0.4')
            .from('.hero__title em', { color: '#F5F5F7', duration: 0.9, ease: 'power2.out' }, '-=0.7')
            .from('.hero__subtitle', { autoAlpha: 0, y: 18, duration: 0.8 }, '-=0.7')
            .from('.hero__actions > *', { autoAlpha: 0, y: 16, stagger: 0.1, duration: 0.7 }, '-=0.6')
            .from('.metric', { autoAlpha: 0, y: 24, stagger: 0.12, duration: 0.8 }, '-=0.5');

          /* Hero glow — subtle breathing loop */
          gsap.to('.hero__glow', {
            scale: 1.08,
            opacity: 0.7,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });

          /* Section headers — stagger children on scroll */
          gsap.utils.toArray<HTMLElement>('.section-header').forEach((header) => {
            gsap.from(header.children, {
              scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
              autoAlpha: 0,
              y: 22,
              stagger: 0.12,
              duration: 0.9,
            });
          });

          /* Client logos */
          gsap.from('.client-logo', {
            scrollTrigger: { trigger: '.clients__logos', start: 'top 85%' },
            autoAlpha: 0,
            y: 12,
            stagger: 0.07,
            duration: 0.7,
          });

          /* Service cards */
          gsap.from('.service-card', {
            scrollTrigger: { trigger: '.services__grid', start: 'top 78%' },
            autoAlpha: 0,
            y: 34,
            stagger: { amount: 0.5, from: 'start' },
            duration: 0.8,
          });

          /* Process steps */
          gsap.from('.process-step', {
            scrollTrigger: { trigger: '.process__steps', start: 'top 78%' },
            autoAlpha: 0,
            x: -32,
            stagger: 0.14,
            duration: 0.8,
            ease: 'power2.out',
          });

          /* Case cards */
          gsap.from('.case-card', {
            scrollTrigger: { trigger: '.portfolio__grid', start: 'top 80%' },
            autoAlpha: 0,
            y: 40,
            scale: 0.97,
            stagger: 0.12,
            duration: 0.9,
          });

          /* Why items */
          gsap.from('.why-item', {
            scrollTrigger: { trigger: '.why__grid', start: 'top 80%' },
            autoAlpha: 0,
            y: 24,
            stagger: 0.11,
            duration: 0.8,
          });

          /* Testimonials */
          gsap.from('.testimonial', {
            scrollTrigger: { trigger: '.testimonials__grid', start: 'top 80%' },
            autoAlpha: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.9,
          });

          /* FAQ items */
          gsap.from('.faq-item', {
            scrollTrigger: { trigger: '.faq__list', start: 'top 82%' },
            autoAlpha: 0,
            y: 14,
            stagger: 0.08,
            duration: 0.6,
          });

          /* CTA */
          gsap.from('.cta__inner > *', {
            scrollTrigger: { trigger: '.cta', start: 'top 75%' },
            autoAlpha: 0,
            y: 28,
            stagger: 0.12,
            duration: 0.9,
          });

          /* Footer */
          gsap.from('.footer__brand, .footer__col', {
            scrollTrigger: { trigger: '.footer', start: 'top 85%' },
            autoAlpha: 0,
            y: 18,
            stagger: 0.1,
            duration: 0.7,
          });

          /* Metrics — count-up */
          gsap.utils.toArray<HTMLElement>('.metric strong').forEach((el) => {
            const raw = el.textContent?.trim() ?? '';
            const match = raw.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
            if (!match) return;
            const [, prefix, numStr, suffix] = match;
            const target = parseFloat(numStr);
            const isInt = !numStr.includes('.');
            const counter = { val: 0 };
            gsap.to(counter, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              onUpdate() {
                const current = isInt ? Math.round(counter.val) : counter.val.toFixed(1);
                el.textContent = prefix + current + suffix;
              },
            });
          });

          return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        }
      );
    })();

    return () => {
      cancelled = true;
      mmRevert?.();
    };
  }, []);

  return null;
}
