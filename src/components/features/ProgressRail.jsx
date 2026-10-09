import { features } from '../../data/features.js';

function ProgressRail({ currentId }) {
  return (
    <ol className="progress-rail" aria-label="Walkthrough steps">
      {features.map((feature) => {
        // active = current window, done = windows already scrolled past
        let status = '';
        if (feature.id === currentId) status = 'progress-rail__item--active';
        else if (feature.id < currentId) status = 'progress-rail__item--done';

        return (
          <li key={feature.id}>
            <a
              href={`#feature-${feature.id}`}
              className={`progress-rail__item ${status}`}
              aria-current={feature.id === currentId ? 'step' : undefined}
            >
              <span className="progress-rail__number">
                {feature.id.toString().padStart(2, '0')}
              </span>
              <span className="progress-rail__bar"></span>
              {feature.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default ProgressRail;
