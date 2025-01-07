import { motion } from 'framer-motion';
import { features } from '../../data/features.js';
import { ScriptButton } from '../extras/index.js';

function FeatureSection({ onFeatureChange }) {
return (
    <div className="feature-container">
      {features.map((feature) => {
        return (
          <motion.div
            key={feature.id}
            className="feature-item"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1,
              },
            }}
            viewport={{
              once: false,
              amount: 0.8,
            }}
            onViewportEnter={() => onFeatureChange(feature.id)}
          >
            <strong className="feature-item--title">{feature.title}</strong>
            <p className="feature-item--description">{feature.description}</p>
            {feature.includeScript ? (
              <ScriptButton>{feature.script}</ScriptButton>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}

export default FeatureSection;
