import { format } from 'date-fns';
import TerminalOutput from './TerminalOutput.jsx';
import TerminalInput from './TerminalInput.jsx';
import { features } from '../../data/features.js';

function TerminalContent() {
    return (
        <div className="terminal-content">
            <p className="initial-date">Last Login: {format(new Date(), 'EEE, MMM d. HH:mm:ss')}</p>
            {features.map((feature) => (
                <div key={feature.id} className="terminal-content--item">
                    {feature.terminal.map((terminal, index) => (
                        <span key={index}>
                            <TerminalInput>{terminal.command}</TerminalInput>
                            <TerminalOutput outputHTML={terminal.outputHTML}/>
                        </span>
                    ))}
                </div>
            ))}
            <div className="terminal-content--item">
                <TerminalInput />
            </div>
        </div>
    )
}

export default TerminalContent;