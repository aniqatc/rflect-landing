import { useState } from 'react';
import { Header } from './components/header';
import { Terminal } from './components/terminal';
import { FeatureSection } from './components/features';
import { Footer } from './components/footer';
import { Modal } from './components/extras';

function App() {
  const [featureId, setFeatureId] = useState(1);

  return (
    <div className="scroll-wrapper">
      <div className="container">
        <Header />
        <FeatureSection onFeatureChange={setFeatureId} />
        <Terminal currentFeatureId={featureId} />
      </div>
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
