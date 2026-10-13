import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WorkshopProcess } from './components/WorkshopProcess';
import { ProjectGallery } from './components/ProjectGallery';
import { ReviewMarquee } from './components/ReviewMarquee';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { PostalGuideModal } from './components/PostalGuideModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [postalModalOpen, setPostalModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#F7F9FC] font-sans relative selection:bg-[#FF1E27]/30 selection:text-white">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Header & Sticky Navigation */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenPostalModal={() => setPostalModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Services Grid & Interactive Modals */}
        <ServicesSection
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        {/* 3. Interactive Before-and-After Comparison Stage */}
        <BeforeAfterSection />

        {/* 4. Animated 4-Stage "How We Work" Workshop Process */}
        <WorkshopProcess />

        {/* 5. Automotive Engineering & Bench Testing Gallery */}
        <ProjectGallery />

        {/* 6. Customer Reviews: Two Opposing Marquee Rows */}
        <ReviewMarquee />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Workshop Story & Brand Background */}
        <AboutSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenPostalModal={() => setPostalModalOpen(true)}
        />

        {/* 9. Accessible FAQ Accordion with Search */}
        <FaqSection />

        {/* 10. Direct Contact & Conversion Form with Verification */}
        <ContactSection />
      </main>

      {/* Refined Footer */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenPostalModal={() => setPostalModalOpen(true)}
      />

      {/* Interactive Quotation Calculator & Booking Modal */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* UK-Wide Postal Repair Guide Modal */}
      <PostalGuideModal
        isOpen={postalModalOpen}
        onClose={() => setPostalModalOpen(false)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />
    </div>
  );
}
