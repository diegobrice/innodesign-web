export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            innodesign
          </a>
          <p>Construimos productos digitales que hacen crecer tu negocio.</p>
        </div>

        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Desarrollo Web</a></li>
            <li><a href="#servicios">Apps Móviles</a></li>
            <li><a href="#servicios">SaaS</a></li>
            <li><a href="#servicios">Consultoría</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:hola@innodesign.com">hola@innodesign.com</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 innodesign. Todos los derechos reservados.</span>
          <div className="footer__legal">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
