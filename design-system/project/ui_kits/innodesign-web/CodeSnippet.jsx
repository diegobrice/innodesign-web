// CodeSnippet.jsx
function CodeSnippet() {
  return (
    <section className="iw-code" id="about">
      <div className="iw-code__left">
        <div className="iw-label">07. TONO DE COMUNICACIÓN</div>
        <h2>Directos. Técnicos.<br/><span className="accent">Enfocados en valor.</span></h2>
        <ul className="iw-code__list">
          <li><span className="ok">✓</span> Construimos software que impulsa tu negocio.</li>
          <li><span className="ok">✓</span> Shippeamos productos, no promesas.</li>
          <li><span className="ok">✓</span> Código limpio. Sistemas escalables.</li>
          <li><span className="ok">✓</span> Velocidad con calidad.</li>
        </ul>
      </div>
      <div className="iw-code__right">
        <div className="iw-term">
          <div className="iw-term__head">
            <span className="iw-dot r"/><span className="iw-dot y"/><span className="iw-dot g"/>
            <span className="iw-term__title">innodesign.ts</span>
          </div>
          <pre className="iw-term__body"><code>
<span className="m">// CODE WITH INTENT</span>{'\n'}
<span className="m">const</span> <span className="accent">innodesign</span> = {'{'}{'\n'}
{'  '}focus: <span className="ok">"performance"</span>,{'\n'}
{'  '}systems: <span className="ok">"scalable"</span>,{'\n'}
{'  '}code: <span className="ok">"with_intent"</span>,{'\n'}
{'  '}ship: () =&gt; value &gt; promises,{'\n'}
{'}'};
          </code></pre>
        </div>
      </div>
    </section>
  );
}
window.CodeSnippet = CodeSnippet;
