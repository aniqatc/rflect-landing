import { MotionConfig } from 'framer-motion';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { FeatureSection } from './components/features';
import { CallToAction, Footer } from './components/footer';

function App() {
  // reducedMotion="user" turns animations off for visitors who prefer less motion
  return (
    <MotionConfig reducedMotion="user">
      <div className="scroll-wrapper">
        <Header />
        <main>
          <Hero />
          <FeatureSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
