import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Printing3DSection from '../components/Printing3DSection';
import CNCMachiningSection from '../components/CNCMachiningSection';
import SheetMetalSection from '../components/SheetMetalSection';
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
      <Printing3DSection />
      <SheetMetalSection />
      <CNCMachiningSection />
      <IndustriesSection />
      <ProcessSection />
      <FactoryIntroduceSection />
      <CTASection />
      <Footer />
    </div>
  );
}
