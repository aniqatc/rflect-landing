import { format } from 'date-fns';
import TerminalOutput from './TerminalOutput.jsx';
import TerminalInput from './TerminalInput.jsx';
import { features } from '../../data/features.js';

function TerminalContent({ currentFeatureId = 1 }) {
    const terminalContentToShow = features.find(feature => feature.id === currentFeatureId);

  return (
      <div className="terminal-content">
          <p className="initial-date">
              Last Login: {format(new Date(), 'EEE, MMM d. HH:mm:ss')}
          </p>
          {terminalContentToShow.terminal && <div className="terminal-content--item">
              {terminalContentToShow.terminal.map(content => (
                  (<span key={content.id}>
                    <TerminalInput>{content.command}</TerminalInput>
                    <TerminalOutput outputHTML={content.outputHTML}/>
                </span>)
              ))}
          </div>}
          <div className="terminal-content--item">
              <TerminalInput/>
          </div>
      </div>
  );
}

export default TerminalContent;

