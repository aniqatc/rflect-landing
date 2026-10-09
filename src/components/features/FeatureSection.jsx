import { motion } from 'framer-motion';
import { features } from '../../data/features.js';
import { ScriptButton } from '../extras/index.js';
import { Terminal } from '../terminal/index.js';
import ProgressRail from './ProgressRail.jsx';

function FeatureSection() {
  const total = features.length.toString().padStart(2, '0');

  return (
    <section id="walkthrough" className="feature-container">
      <div className="container">
        {features.map((feature) => {
          return (
            <article
              key={feature.id}
              id={`feature-${feature.id}`}
              className="feature-item"
            >
              <motion.div
                className="feature-item--text"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="feature-item--intro">
                  <p className="feature-item--count">
                    How it works ·{' '}
                    <span>{feature.id.toString().padStart(2, '0')}</span> /{' '}
                    {total}
                  </p>
                  <h2 className="feature-item--title">{feature.title}</h2>
                  <p className="feature-item--description">
                    {feature.description}
                  </p>
                  {feature.includeScript ? (
                    <ScriptButton className="script-button--small">
                      {feature.script}
                    </ScriptButton>
                  ) : null}
                </div>
                <ProgressRail currentId={feature.id} />
              </motion.div>
              <Terminal title={feature.script} terminal={feature.terminal} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureSection;
