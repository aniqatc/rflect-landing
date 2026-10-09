import { motion } from 'framer-motion';
import { ScriptButton } from '../extras';
import { Terminal } from '../terminal';
import { heroTerminal } from '../../data/features.js';

function Hero() {
  return (
    <section id="top" className="container hero">
      <motion.div
        className="hero--text"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="hero--eyebrow">A CLI for guided journaling</p>
        <h1 className="hero--title">
          Journal without <em>leaving your terminal.</em>
        </h1>
        <p className="hero--description">
          Thoughtful prompts, mood tracking and writing streaks. A quiet place
          to reflect, one command away.
        </p>
        <div className="hero--actions">
          <ScriptButton>npm install -g rflect</ScriptButton>
          <a href="#walkthrough" className="hero--link">
            See how it works <span aria-hidden="true">↓</span>
          </a>
        </div>
      </motion.div>
      <Terminal title={heroTerminal.title} terminal={heroTerminal.terminal} />
    </section>
  );
}

export default Hero;
