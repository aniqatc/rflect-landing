import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function ScriptButton({ children }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1200);
  }

  return (
    <button className="script-button" onClick={handleCopy}>
      <p>{children}</p>
      <span className={isCopied ? 'show-copied' : 'hide-copied'}>Copied!</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={isCopied ? 'copied' : 'clipboard'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <FontAwesomeIcon
            icon={isCopied ? faCheck : faClipboard}
            className={`script-button--icon ${isCopied ? 'copied' : ''}`}
          />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

export default ScriptButton;
