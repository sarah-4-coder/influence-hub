import { useState } from 'react';
import ParallaxBlobs from '@/components/ParallaxBlobs';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ManualEraSection from '@/components/ManualEraSection';
import ServicesSection from '@/components/ServicesSection';
import MarqueeSection from '@/components/MarqueeSection';
import CaseEvidenceSection from '@/components/CaseEvidenceSection';
import CTASection from '@/components/CTASection';
import BrandFormOverlay from '@/components/BrandFormOverlay';
import Footer from '@/components/Footer';
import LightThemeDecorations from '@/components/LightThemeDecorations';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const [isBrandFormOpen, setIsBrandFormOpen] = useState(false);
  const { theme } = useTheme();

  const openBrandForm = () => setIsBrandFormOpen(true);
  const closeBrandForm = () => setIsBrandFormOpen(false);

  return (
    <div className={`relative ${theme === 'dark' ? 'dot-matrix scanline' : 'social-pattern'}`}>
      {theme === 'dark' ? <ParallaxBlobs /> : <LightThemeDecorations />}
      <Navbar onOpenBrandForm={openBrandForm} />
      <HeroSection onOpenBrandForm={openBrandForm} />
      <ManualEraSection />
      <ServicesSection />
      <MarqueeSection />
      <CaseEvidenceSection />
      <CTASection onOpenBrandForm={openBrandForm} />
      <BrandFormOverlay isOpen={isBrandFormOpen} onClose={closeBrandForm} />
      <Footer />
    </div>
  );
};

export default Index;
