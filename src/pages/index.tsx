import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
