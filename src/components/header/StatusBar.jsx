import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function StatusBar() {
    const [stars, setStars] = useState('01');

    useEffect(() => {
        async function fetchStarCount() {
            const response = await fetch('https://api.github.com/repos/aniqatc/rflect-cli');
            const data = await response.json();
            const count = data.stargazers_count + 1;
            setStars(count.toString().padStart(2, '0'));
        }
        fetchStarCount();
    }, [])

    return (<div className="status-bar">
        <a href="https://www.npmjs.com/package/rflect" target="_blank" className="status-bar__item">
            <FontAwesomeIcon icon={faCircle} className="status-bar__item--circle" />
            <p>Active</p>
        </a>
        <a href="https://github.com/aniqatc/rflect-cli" target="_blank"  className="status-bar__item">
            <FontAwesomeIcon icon={faStar} className="status-bar__item--star"/>
            <p>Stars <span>{stars}</span></p>
        </a>
        <a href="https://github.com/aniqatc/rflect-cli" target="_blank"  className="status-bar__item">
            <FontAwesomeIcon icon={faGithub} className="status-bar__item--gh" />
            <p>Repository</p>
        </a>
    </div>)
}

export default StatusBar;