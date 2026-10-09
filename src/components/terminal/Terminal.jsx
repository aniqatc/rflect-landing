import TerminalBar from './TerminalBar';
import TerminalContent from './TerminalContent';

function Terminal({ title, terminal }) {
  return (
    <figure className="terminal">
      <TerminalBar title={title} />
      <TerminalContent terminal={terminal} />
    </figure>
  );
}

export default Terminal;
