function TerminalInput({ children }) {
  return (
    <p className="user-input">
      <span className="user-input-path">~/journal</span>{' '}
      <span className="user-input-arrow">❯</span>{' '}
      {children || <span className="cursor" aria-hidden="true"></span>}
    </p>
  );
}

export default TerminalInput;
