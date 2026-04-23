import { StatusDot } from '@/components/ui/StatusDot';
import { Button } from '@/components/ui/Button';
import { BrandMark } from '@/components/ui/BrandMark';

const navLink =
  "relative text-[0.9rem] text-text-muted transition-colors duration-200 hover:text-text before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-px before:bg-accent before:[transition:width_0.25s_ease] hover:before:w-full";

export function Navbar() {
  return (
    <header className="navbar sticky top-0 bg-[rgba(10,10,11,0.72)] [backdrop-filter:blur(20px)_saturate(120%)] [-webkit-backdrop-filter:blur(20px)_saturate(120%)] border-b border-border z-[100]">
      <div className="container flex items-center justify-between h-[72px]">
        <a
          href="#"
          aria-label="innodesign — ir al inicio"
          className="inline-flex items-center gap-[10px] text-[1.05rem] font-semibold tracking-[-0.02em] text-text"
        >
          <BrandMark size="md" />
          innodesign<span aria-hidden="true" className="text-accent">_</span>
        </a>

        <nav aria-label="Principal" className="flex gap-9 max-lg:hidden">
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
          <span className="font-mono text-[0.72rem] text-text-muted tracking-[0.04em] uppercase max-lg:hidden">
            Disponibles · Q3 2026
          </span>
          <Button href="#contacto">Contáctanos →</Button>
        </div>
      </div>
    </header>
  );
}
