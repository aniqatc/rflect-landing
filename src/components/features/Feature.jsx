import { features } from '../../data/features.js';
import { Install } from "../extras/index.js";

function Feature() {
    return (
        <>
            {features.map((feature) => {
                return (
                    <div key={feature.id} className="feature-item">
                        <strong className="feature-item--title">{feature.title}</strong>
                        <p className="feature-item--description">{feature.description}</p>
                        {feature.includeInstall ? <Install /> : null}
                    </div>
                )
            })}
        </>
    )
}

export default Feature;