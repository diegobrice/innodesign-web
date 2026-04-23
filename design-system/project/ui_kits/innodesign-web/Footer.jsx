// Footer.jsx
function Footer() {
  return (
    <footer className="iw-foot">
      <div className="iw-foot__left">
        <a href="#" className="iw-nav__brand">
          <span>inno</span><span className="accent">design</span><span>_</span>
        </a>
        <div className="iw-label">// CODE WITH INTENT</div>
      </div>
      <div className="iw-foot__right">
        <span className="iw-chip"><span className="iw-dot g"/>status: shipping</span>
        <span className="iw-chip">v1.0.3</span>
        <span className="iw-label">innodesign.dev_</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
