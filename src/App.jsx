import { Header } from './components/header';
import { Terminal } from './components/terminal';
import { FeatureSection } from './components/features';

function App() {
  return (
    <div className="scroll-wrapper">
      <div className="container">
        <Header />
        <FeatureSection />
        <Terminal currentFeatureId={1} />
      </div>
    </div>
  );
}

export default App;
