import { StatusDot } from '@/components/ui/StatusDot';
import { Button } from '@/components/ui/Button';
import { Caret } from '@/components/ui/Caret';

const navLink =
  "font-mono text-[13px] tracking-[0.04em] text-text-muted transition-colors duration-200 hover:text-accent";

export function Navbar() {
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
          <a href="#servicios" className={navLink}>
            Servicios
          </a>
          <a href="#proceso" className={navLink}>
            Proceso
          </a>
          <a href="#portfolio" className={navLink}>
            Portfolio
          </a>
          <a href="#testimonios" className={navLink}>
            Testimonios
          </a>
          <a href="#faq" className={navLink}>
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <StatusDot />
          <span className="font-mono text-[11px] text-text-subtle tracking-[0.08em] uppercase max-lg:hidden">
            Disponibles · Q3 2026
          </span>
          <Button href="#contacto" variant="ghost" prefix>
            contactar
          </Button>
        </div>
      </div>
    </header>
  );
}
