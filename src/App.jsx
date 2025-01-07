import { Header } from './components/header';
import { Terminal } from './components/terminal';
import { FeatureSection } from './components/features';
import { Wrapper } from './components/extras';

function App() {
    return (
    <div className="container">
        <Header />
        <Wrapper>
            <Terminal />
            <FeatureSection />
        </Wrapper>

    </div>
  )
}

export default App
