import { format } from "date-fns";

function TerminalInput({ children }) {
    return (
        <p className="user-input">
            <span className="user-input-path">user [{format(new Date(), 'HH:mm:ss')}] ➞ </span>
            {children}
        </p>
    )
}

export default TerminalInput;