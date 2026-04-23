// StatsHud.jsx
function StatsHud() {
  const [cpu, setCpu] = React.useState(23);
  const [mem, setMem] = React.useState(56);
  React.useEffect(() => {
    const id = setInterval(() => {
      setCpu(c => Math.max(8, Math.min(92, c + (Math.random() * 12 - 6))));
      setMem(m => Math.max(30, Math.min(88, m + (Math.random() * 6 - 3))));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  const Row = ({ k, children }) => (
    <div className="iw-hud__row"><span className="iw-hud__k">{k}</span><span className="iw-hud__v">{children}</span></div>
  );
  const Bar = ({ v }) => (
    <span className="iw-hud__bar"><span className="iw-hud__fill" style={{ width: `${v}%` }}/></span>
  );
  return (
    <div className="iw-hud">
      <Row k="CPU"><Bar v={cpu}/>{Math.round(cpu)}%</Row>
      <Row k="MEM"><Bar v={mem}/>{Math.round(mem)}%</Row>
      <Row k="NET">18.2 MB/s ↑</Row>
      <Row k="UPTIME">7d 14h 32m</Row>
      <Row k="STATUS"><span className="ok">● online</span></Row>
    </div>
  );
}
window.StatsHud = StatsHud;
