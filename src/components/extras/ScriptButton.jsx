import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function ScriptButton({ children, className = '' }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1200);
  }

  return (
    <button
      type="button"
      className={`script-button ${className}`}
      onClick={handleCopy}
      title="Copy to clipboard"
    >
      <span>
        <span className="script-button--prompt">$</span> {children}
      </span>
      {/* aria-live so screen readers hear "Copied!" */}
      <span className="script-button--copied" aria-live="polite">
        {isCopied ? 'Copied!' : ''}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
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
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ScriptButton;
