import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProcessSection from './components/ProcessSection';
import LeadForm from './components/LeadForm';
import SocialProof from './components/SocialProof';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

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
    </div>
  );
}

export default App;