import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

function ScriptButton({ children }) {
    return (
        <button className="script-button">
            <p>{children}</p>
            <FontAwesomeIcon icon={faClipboard} className="copy-icon" />
        </button>
    )
}

export default ScriptButton;