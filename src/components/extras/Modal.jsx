import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const scrollWrapper = document.querySelector('.scroll-wrapper');
    isOpen
      ? scrollWrapper.classList.add('no-scroll')
      : scrollWrapper.classList.remove('no-scroll');
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          onClick={handleOutsideClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content--header">
              <p>
                <FontAwesomeIcon icon={faDesktop} /> Recommendation:
              </p>
              <button
                className="modal-close-btn"
                onClick={handleClose}
                aria-label="Close modal button"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="modal-message">
              <p className="modal-message--details">
                For the <strong>best experience</strong>, please view this
                website on a larger screen.
              </p>
              <p className="modal-message--details">
                The <span>dynamic terminal animations</span> are currently
                hidden on smaller devices to ensure optimal performance.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
