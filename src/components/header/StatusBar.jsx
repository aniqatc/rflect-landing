import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function StatusBar() {
  const [stars, setStars] = useState(null);
  const [version, setVersion] = useState(null);

  useEffect(() => {
    // Fetched separately so one failing doesn't block the other
    fetch('https://api.github.com/repos/aniqatc/rflect-cli')
      .then((response) => response.json())
      .then((ghData) => setStars(ghData.stargazers_count))
      .catch(() => {});

    fetch('https://registry.npmjs.org/rflect/latest')
      .then((response) => response.json())
      .then((npmData) => setVersion(npmData.version))
      .catch(() => {});
  }, []);

  return (
    <nav className="status-bar" aria-label="Project links">
      <a
        href="https://www.npmjs.com/package/rflect"
        target="_blank"
        rel="noopener noreferrer"
        className="status-bar__item status-bar__item--hide-sm"
      >
        <span className="status-bar__dot"></span>
        {version ? `v${version}` : 'npm'}
      </a>
      <a
        href="https://github.com/aniqatc/rflect-cli"
        target="_blank"
        rel="noopener noreferrer"
        className="status-bar__item status-bar__item--hide-sm"
      >
        <FontAwesomeIcon icon={faStar} />
        {/* Star count only shows once it has loaded */}
        {typeof stars === 'number' ? (
          <span>
            Stars <span className="status-bar__count">{stars}</span>
          </span>
        ) : (
          'Star on GitHub'
        )}
      </a>
      <a
        href="https://github.com/aniqatc/rflect-cli"
        target="_blank"
        rel="noopener noreferrer"
        className="status-bar__item status-bar__item--pill"
      >
        <FontAwesomeIcon icon={faGithub} />
        Repository
      </a>
    </nav>
  );
}

export default StatusBar;
