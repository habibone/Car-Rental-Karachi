
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import ProcessSection from './components/ProcessSection.tsx';
import BenefitsSection from './components/BenefitsSection.tsx';
import LeadForm from './components/LeadForm.tsx';
import SocialProof from './components/SocialProof.tsx';
import OfferSection from './components/PricingSection.tsx';
import Footer from './components/Footer.tsx';
import StickyCTA from './components/StickyCTA.tsx';

function App() {
  return (
    <div className="min-h-screen bg-bgLight flex flex-col font-english overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <BenefitsSection />
        <SocialProof />
        <OfferSection />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
