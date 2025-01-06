import { features } from '../../data/features.js';
import { InstallScript } from "../extras/index.js";

function Feature() {
    return (
        <>
            {features.map((feature) => {
                return (
                    <div key={feature.id} className="feature-item">
                        <strong className="feature-item--title">{feature.title}</strong>
                        <p className="feature-item--description">{feature.description}</p>
                        {feature.includeInstallScript ? <InstallScript /> : null}
                    </div>
                )
            })}
        </>
    )
}

export default Feature;