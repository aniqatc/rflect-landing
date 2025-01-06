import { format } from 'date-fns';
import TerminalOutput from './TerminalOutput.jsx';
import { features } from '../../data/features.js';

function TerminalContent() {
    return (
        <div className="terminal-content">
            <p className="initial-date">Last Login: {format(new Date(), 'EEE, MMM d. HH:mm:ss')}</p>
            {features.map((feature) => (
                <div key={feature.id} className="terminal-content--item">
                    {feature.terminal.map((terminal, index) => (
                        <span key={index}>
                            <p className="user-input">
                                <span className="user-input-path">user [21:34:23] ➞ </span>
                                {terminal.command}
                            </p>
                            <TerminalOutput outputHTML={terminal.outputHTML} />
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TerminalContent;