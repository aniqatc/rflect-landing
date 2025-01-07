import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={faCode} className="code-icon" />
        {' '}Built with <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        {' '}by{' '}
      <a
        href="https://github.com/aniqatc"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Aniqa
      </a>
    </footer>
  );
}

export default Footer;
