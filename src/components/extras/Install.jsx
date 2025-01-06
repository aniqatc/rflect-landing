import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

function Install() {
    return (
        <button className="install-script">
            <span>npm install -g rflect</span>
            <FontAwesomeIcon icon={faClipboard} className="install-script__icon" />
        </button>
    )
}

export default Install;