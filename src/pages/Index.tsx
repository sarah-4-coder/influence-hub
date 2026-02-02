import { useState, useEffect } from 'react';
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
import PageSkeleton from '@/components/PageSkeleton';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const [isBrandFormOpen, setIsBrandFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  const openBrandForm = () => setIsBrandFormOpen(true);
  const closeBrandForm = () => setIsBrandFormOpen(false);

  useEffect(() => {
    // Very short delay to show skeleton, then reveal content
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageSkeleton />;
  }

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
