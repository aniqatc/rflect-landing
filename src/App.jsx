import { useState } from "react";
import { Header } from './components/header';
import { Terminal } from './components/terminal';
import { FeatureSection } from './components/features';

function App() {
    const [featureId, setFeatureId] = useState(1);
  return (
    <div className="scroll-wrapper">
      <div className="container">
        <Header />
          {/* handle how feature id is set in feature section */}
        <FeatureSection onFeatureChange={setFeatureId} />
        <Terminal currentFeatureId={featureId} />
      </div>
    </div>
  );
}

export default App;
