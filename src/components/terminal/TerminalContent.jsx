import { motion } from 'framer-motion';
import TerminalOutput from './TerminalOutput.jsx';
import TerminalInput from './TerminalInput.jsx';

function TerminalContent({ terminal }) {
  const terminalVariant = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const terminalItemVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
      },
    },
  };

  // Plays once when the terminal scrolls into view
  return (
    <motion.div
      className="terminal-content"
      variants={terminalVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {terminal.map((content, index) => [
        content.command && (
          <motion.div key={`input-${index}`} variants={terminalItemVariants}>
            <TerminalInput>{content.command}</TerminalInput>
          </motion.div>
        ),
        <motion.div key={`output-${index}`} variants={terminalItemVariants}>
          <TerminalOutput outputHTML={content.outputHTML} />
        </motion.div>,
      ])}

      {/* Empty prompt with blinking cursor */}
      <motion.div variants={terminalItemVariants}>
        <TerminalInput />
      </motion.div>
    </motion.div>
  );
}

export default TerminalContent;
