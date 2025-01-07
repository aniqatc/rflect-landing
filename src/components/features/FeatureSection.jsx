import { features } from '../../data/features.js';
import { ScriptButton } from "../extras/index.js";

function FeatureSection() {
    return (
        <div className="feature-container">
            {features.map((feature) => {
                return (
                    <div key={feature.id} className="feature-item">
                        <strong className="feature-item--title">{feature.title}</strong>
                        <p className="feature-item--description">{feature.description}</p>
                        {feature.includeScript ? <ScriptButton>{feature.script}</ScriptButton> : null}
                    </div>

                )
            })}
        </div>
    )
}

export default FeatureSection;