// Nav.jsx
function Nav() {
  const items = ["Work", "Services", "About", "Contact"];
  return (
    <header className="iw-nav">
      <a href="#" className="iw-nav__brand">
        <span>inno</span><span className="accent">design</span><span className="caret">_</span>
      </a>
      <nav className="iw-nav__links">
        {items.map(i => <a key={i} href={`#${i.toLowerCase()}`}>{i}</a>)}
      </nav>
      <a href="#contact" className="iw-btn iw-btn--ghost">
        <span className="iw-btn__prefix">&gt;</span> contactar
      </a>
    </header>
  );
}
window.Nav = Nav;
