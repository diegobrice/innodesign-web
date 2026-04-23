'use client';

import { useRef } from 'react';
import { BrandMark } from '@/components/ui/BrandMark';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.footer__brand, .footer__col', {
          scrollTrigger: { trigger: root.current, start: 'top 85%' },
          autoAlpha: 0,
          y: 18,
          stagger: 0.1,
          duration: 0.7,
        });
      });
    },
    { scope: root }
  );

  return (
    <footer
      ref={root}
      className="footer bg-bg-inset text-text-muted pt-24 border-t border-border"
    >
      <div className="container grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 pb-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div className="footer__brand">
          <a href="#" className="inline-flex items-center gap-[10px] text-[1.1rem] font-semibold text-text mb-4 tracking-[-0.02em]">
            <BrandMark size="sm" />
            innodesign
          </a>
          <p className="text-[0.95rem] text-text-muted max-w-[340px] leading-[1.6]">
            Construimos productos digitales que hacen crecer tu negocio.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="font-mono text-text-subtle text-[0.72rem] font-medium uppercase tracking-[0.14em] mb-5">Servicios</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#servicios" className="footer-link">Desarrollo Web</a></li>
            <li><a href="#servicios" className="footer-link">Apps Móviles</a></li>
            <li><a href="#servicios" className="footer-link">SaaS</a></li>
            <li><a href="#servicios" className="footer-link">Consultoría</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="font-mono text-text-subtle text-[0.72rem] font-medium uppercase tracking-[0.14em] mb-5">Empresa</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
            <li><a href="#proceso" className="footer-link">Proceso</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="font-mono text-text-subtle text-[0.72rem] font-medium uppercase tracking-[0.14em] mb-5">Contacto</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="mailto:hola@innodesign.com" className="footer-link">hola@innodesign.com</a></li>
            <li><a href="#" className="footer-link">LinkedIn</a></li>
            <li><a href="#" className="footer-link">GitHub</a></li>
            <li><a href="#" className="footer-link">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-7">
        <div className="container flex justify-between items-center font-mono text-[0.75rem] text-text-subtle tracking-[0.04em] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <span>© 2026 innodesign. Todos los derechos reservados.</span>
          <div className="flex gap-7">
            <a href="#" className="transition-colors duration-200 hover:text-text">Política de privacidad</a>
            <a href="#" className="transition-colors duration-200 hover:text-text">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
