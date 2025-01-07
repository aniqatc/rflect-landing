import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function StatusBar() {
    const [stars, setStars] = useState('01');
    const [version, setVersion] = useState("2.0.0");

    useEffect(() => {
        async function fetchPackageInfo() {
            const ghResponse = await fetch('https://api.github.com/repos/aniqatc/rflect-cli');
            const ghData = await ghResponse.json();
            const count = ghData.stargazers_count + 1;
            setStars(count.toString().padStart(2, '0'));

            const npmResponse = await fetch('https://registry.npmjs.org/rflect/latest');
            const npmData = await npmResponse.json();
            setVersion(npmData.version);
        }
        fetchPackageInfo();
    }, [])

    return (<div className="status-bar">
        <a href="https://www.npmjs.com/package/rflect" target="_blank" className="status-bar__item">
            <FontAwesomeIcon icon={faCircle} className="status-bar__item--circle" />
            <p>Active <span>v{version}</span></p>
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