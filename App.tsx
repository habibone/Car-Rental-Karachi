import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import ProcessSection from './components/ProcessSection.tsx';
import LeadForm from './components/LeadForm.tsx';
import SocialProof from './components/SocialProof.tsx';
import PricingSection from './components/PricingSection.tsx';
import Footer from './components/Footer.tsx';
import StickyCTA from './components/StickyCTA.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-english">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <LeadForm />
        <SocialProof />
        <PricingSection />
      </main>
      <Footer />
      <StickyCTA />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;