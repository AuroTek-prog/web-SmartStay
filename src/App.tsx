import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { DigitalGuides } from './components/DigitalGuides';
import { LocalBusiness } from './components/LocalBusiness';
import { IoTControl } from './components/IoTControl';
import { Benefits } from './components/Benefits';
import { Differentiation } from './components/Differentiation';
import { Innovation } from './components/Innovation';
import { FinalCTA } from './components/FinalCTA';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />
      <FloatingElements />
      <Hero />
      <Problems />
      <Solution />
      <DigitalGuides />
      <LocalBusiness />
      <IoTControl />
      <Benefits />
      <Differentiation />
      <Innovation />
      <FinalCTA />
    </div>
  );
}