import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import FactoryIntroduceSection from '../components/FactoryIntroduceSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <ProcessSection />
      <FactoryIntroduceSection />
      <CTASection />
      <Footer />
    </div>
  );
}
