import TerminalBar from './TerminalBar';
import TerminalContent from './TerminalContent';

function Terminal({ currentFeatureId }) {
  return (
    <section className="terminal">
      <TerminalBar />
      <TerminalContent currentFeatureId={currentFeatureId}/>
    </section>
  );
}

export default Terminal;
