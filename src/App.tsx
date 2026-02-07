import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { DigitalGuides } from './components/DigitalGuides';
import { LocalBusiness } from './components/LocalBusiness';
import { AccessControl } from './components/AccessControl';
import { BusinessPromotion } from './components/BusinessPromotion';
import { IoTControl } from './components/IoTControl';
import { ParkingAccess } from './components/ParkingAccess';
import { StarlinkInstallation } from './components/StarlinkInstallation';
import { WiFiNetwork } from './components/WiFiNetwork';
import { DomoticsControl } from './components/DomoticsControl';
import { Benefits } from './components/Benefits';
import { Differentiation } from './components/Differentiation';
import { Innovation } from './components/Innovation';
import { FinalCTA } from './components/FinalCTA';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingElements } from './components/FloatingElements';
import { InteractiveParticles } from './components/InteractiveParticles';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />
      <FloatingElements />
      <InteractiveParticles />
      <Hero />
      <Problems />
      <Solution />
      <DigitalGuides />
      <LocalBusiness />
      {/* Servicios principales */}
      <AccessControl />
      <BusinessPromotion />
      {/* Servicios IoT y adicionales */}
      <IoTControl />
      <ParkingAccess />
      <StarlinkInstallation />
      <WiFiNetwork />
      <DomoticsControl />
      <Benefits />
      <Differentiation />
      <Innovation />
      <FinalCTA />
    </div>
  );
}