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
import { agencyContent } from '@/data/agencyContent';

const AgencyLanding = () => {
  const [isBrandFormOpen, setIsBrandFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  const openBrandForm = () => setIsBrandFormOpen(true);
  const closeBrandForm = () => setIsBrandFormOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className={`relative ${theme === 'dark' ? 'dot-matrix scanline' : 'social-pattern'}`}>
      {theme === 'dark' ? <ParallaxBlobs /> : <LightThemeDecorations />}
      <Navbar onOpenBrandForm={openBrandForm} variant="agency" />
      <HeroSection content={agencyContent.hero} onOpenBrandForm={openBrandForm} variant="agency" />
      <ManualEraSection content={agencyContent.manualEra} />
      <ServicesSection content={agencyContent.services} />
      <MarqueeSection niches={agencyContent.niches} />
      <CaseEvidenceSection content={agencyContent.caseStudies} />
      <CTASection content={agencyContent.cta} onOpenBrandForm={openBrandForm} variant="agency" />
      <BrandFormOverlay isOpen={isBrandFormOpen} onClose={closeBrandForm} />
      <Footer tagline={agencyContent.footer.tagline} />
    </div>
  );
};

export default AgencyLanding;
