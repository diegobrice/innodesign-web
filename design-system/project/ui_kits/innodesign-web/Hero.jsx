// Hero.jsx
function Hero() {
  const [log, setLog] = React.useState(false);
  return (
    <section className="iw-hero">
      <div className="iw-hero__grid" />
      <div className="iw-hero__frame">
        <span className="iw-corner c1" /><span className="iw-corner c2" />
        <span className="iw-corner c3" /><span className="iw-corner c4" />
        <div className="iw-hero__inner">
          <div className="iw-label">&gt; BRAND KIT v1.0 · CODE WITH INTENT</div>
          <h1 className="iw-hero__title">
            Build fast.<br/><span className="accent">Break less.</span>
          </h1>
          <p className="iw-hero__sub">
            Agencia de desarrollo de software que construye productos digitales
            potentes, escalables y centrados en las personas.
          </p>
          <ul className="iw-hero__term">
            <li>status: <span className="ok">building the future</span></li>
            <li>focused on performance, security and experience</li>
            <li>shipping value, not just code</li>
          </ul>
          <div className="iw-hero__cta">
            <button className="iw-btn iw-btn--primary" onClick={() => setLog(true)}>
              <span className="iw-btn__prefix">&gt;</span> ver proyectos
            </button>
            <a href="#contact" className="iw-btn iw-btn--ghost">
              contactar
            </a>
          </div>
        </div>
      </div>
      <div className="iw-hero__side">
        <Terminal deploying={log} />
        <StatsHud />
      </div>
    </section>
  );
}
window.Hero = Hero;
