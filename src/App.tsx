import { useState, useCallback } from 'react';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { DigitalGuides } from './components/DigitalGuides';
import { LocalBusiness } from './components/LocalBusiness';
import { AccessControl } from './components/AccessControl';
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
import { BrandHero } from './components/BrandHero';
import { CookieBanner } from './components/CookieBanner';
import { TermsModal } from './components/TermsModal';
import { VideoShowcase } from './components/VideoShowcase';
import { SupportPortal } from './components/SupportPortal';
import { SalesFormModal } from './components/SalesFormModal';

export default function App() {
  const [showTerms, setShowTerms] = useState(false);
  const [salesFormOpen, setSalesFormOpen] = useState(false);
  const [salesFormOrigen, setSalesFormOrigen] = useState('Web SmartStay');

  const openSalesForm = useCallback((origen: string) => {
    setSalesFormOrigen(origen);
    setSalesFormOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation onOpenSalesForm={openSalesForm} />
      <FloatingElements />
      <BrandHero />
      <Hero onOpenSalesForm={openSalesForm} />
      <Problems />
      <Solution />
      <VideoShowcase />
      <DigitalGuides />
      <LocalBusiness />
      {/* Servicios principales */}
      <AccessControl onOpenSalesForm={openSalesForm} />
      {/* Servicios IoT y adicionales */}
      <IoTControl />
      <ParkingAccess onOpenSalesForm={openSalesForm} />
      <StarlinkInstallation onOpenSalesForm={openSalesForm} />
      <WiFiNetwork onOpenSalesForm={openSalesForm} />
      <DomoticsControl onOpenSalesForm={openSalesForm} />
      <Benefits onOpenSalesForm={openSalesForm} />
      <Differentiation />
      <Innovation />
      <SupportPortal />
      <FinalCTA onOpenTerms={() => setShowTerms(true)} onOpenSalesForm={openSalesForm} />
      <CookieBanner onOpenTerms={() => setShowTerms(true)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <SalesFormModal isOpen={salesFormOpen} onClose={() => setSalesFormOpen(false)} origen={salesFormOrigen} />
    </div>
  );
}