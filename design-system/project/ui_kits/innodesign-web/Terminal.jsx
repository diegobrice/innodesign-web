// Terminal.jsx
function Terminal({ deploying }) {
  const baseLines = [
    { p: ">", t: "innodesign build" },
    { m: "Analyzing project..." },
    { m: "Building modules..." },
    { m: "Optimizing..." },
    { ok: "✓ Done. (0.94s)" },
    { p: ">", t: "Deployed successfully" },
  ];
  const deployLines = [
    { p: ">", t: "innodesign deploy --prod" },
    { m: "Snapshotting build v1.0.3..." },
    { m: "Pushing to edge (12 regions)..." },
    { m: "Running smoke tests..." },
    { ok: "✓ 48/48 passed" },
    { p: ">", t: "Live at innodesign.dev", caret: true },
  ];
  const lines = deploying ? deployLines : baseLines;
  return (
    <div className="iw-term">
      <div className="iw-term__head">
        <span className="iw-dot r" />
        <span className="iw-dot y" />
        <span className="iw-dot g" />
        <span className="iw-term__title">~/innodesign · {deploying ? "deploy" : "build"}</span>
      </div>
      <div className="iw-term__body">
        {lines.map((l, i) => (
          <div key={i} className="iw-term__line">
            {l.p && <span className="p">{l.p} </span>}
            {l.m && <span className="m">{l.m}</span>}
            {l.ok && <span className="ok">{l.ok}</span>}
            {l.t && <span>{l.t}</span>}
            {l.caret && <span className="caret">_</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
window.Terminal = Terminal;
