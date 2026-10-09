function TerminalBar({ title }) {
  return (
    <div className="terminal-bar">
      <div className="control-dots" aria-hidden="true">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <p className="terminal-title">~/journal — {title}</p>
    </div>
  );
}

export default TerminalBar;
