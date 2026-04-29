'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Caret } from '@/components/ui/Caret';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar sticky top-0 bg-[rgba(11,15,20,0.85)] [backdrop-filter:blur(12px)_saturate(120%)] [-webkit-backdrop-filter:blur(12px)_saturate(120%)] border-b border-border z-[100]">
      <div className="container flex items-center justify-between h-[64px]">
        <a
          href="#"
          aria-label="innodesign — ir al inicio"
          className="inline-flex items-baseline text-[1.15rem] font-bold tracking-[-0.03em] text-text"
        >
          <span>inno</span>
          <span className="text-accent">design</span>
          <Caret />
        </a>

        <nav aria-label="Principal" className="flex gap-8 max-lg:hidden">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'true' : undefined}
                className={`font-mono text-[13px] tracking-[0.04em] transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button href="#contacto" variant="ghost" prefix>
            contactar
          </Button>
        </div>
      </div>
    </header>
  );
}
