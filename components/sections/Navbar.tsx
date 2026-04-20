import { StatusDot } from '@/components/ui/StatusDot';

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark" />
          innodesign<span className="navbar__logo-dot">.</span>
        </a>

        <nav className="navbar__menu">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="navbar__actions">
          <StatusDot />
          <span className="navbar__status">Disponibles · Q3 2026</span>
          <a href="#contacto" className="btn btn--primary">
            Contáctanos →
          </a>
        </div>
      </div>
    </header>
  );
}
