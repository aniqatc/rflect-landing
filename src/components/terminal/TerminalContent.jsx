import { motion } from 'framer-motion';
import { format } from 'date-fns';
import TerminalOutput from './TerminalOutput.jsx';
import TerminalInput from './TerminalInput.jsx';
import { features } from '../../data/features.js';

function TerminalContent({ currentFeatureId = 1 }) {
    const terminalContentToShow = features.find(feature => feature.id === currentFeatureId);

    const terminalVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const terminalItemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            className="terminal-content"
            variants={terminalVariant}
            initial="hidden"
            animate="visible"
        >
            <motion.p
                className="initial-date"
                variants={terminalItemVariants}
            >
                Last Login: {format(new Date(), 'EEE, MMM d. HH:mm:ss')}
            </motion.p>

            <div className="terminal-content--item">
                {terminalContentToShow?.terminal?.map((content, index) => [
                    <motion.div key={`input-${index}`} variants={terminalItemVariants}>
                        <TerminalInput>{content.command}</TerminalInput>
                    </motion.div>,
                    <motion.div key={`output-${index}`} variants={terminalItemVariants}>
                        <TerminalOutput outputHTML={content.outputHTML}/>
                    </motion.div>
                ])}
            </div>

            <motion.div
                className="terminal-content--item"
                variants={terminalItemVariants}
            >
                <TerminalInput/>
            </motion.div>
        </motion.div>
    );
}

export default TerminalContent;