
import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-secondary overflow-hidden min-h-[90vh] flex items-center border-b border-white/5">
      {/* Soft Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 pb-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 text-accent px-6 py-3 rounded-full font-english font-black text-xs mb-10 border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.1)] backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-1000">
            <Zap className="w-5 h-5 fill-accent" />
            <span className="tracking-[0.4em] uppercase">The Future of Car Rentals</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          {/* Main Heading - Adjusted leading and decreased size */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white font-urdu leading-[1.8] md:leading-[1.7] mb-12 max-w-4xl mx-auto" dir="rtl">
            اپنی رینٹل ویب سائٹ کو <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent bg-[size:200%] animate-gradient">24/7 بکنگ مشین</span> بنائیں
          </h1>
          
          {/* Subheading */}
          <p className="mt-8 text-xl md:text-3xl text-slate-400 font-urdu leading-[1.8] mb-16 max-w-4xl mx-auto" dir="rtl">
            ایک ایسی اسمارٹ ویب سائٹ جو خودکار بکنگ، فوری رابطہ، اور زیادہ گاہک لانے کے لیے ڈیزائن کی گئی ہو۔ <span className="text-accent font-bold italic underline decoration-accent/20 underline-offset-8">آج ہی اپنا بزنس آٹو پائلٹ پر ڈالیں!</span>
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
            <button
              onClick={scrollToForm}
              className="group relative w-full sm:w-auto bg-accent hover:bg-sky-300 text-secondary px-12 py-7 rounded-[2.5rem] font-english font-black text-2xl shadow-[0_20px_40px_rgba(56,189,248,0.2)] transition-all transform hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-4 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Start Free Demo</span>
              <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-12 py-7 rounded-[2.5rem] font-english font-black text-2xl transition-all transform hover:-translate-y-2 active:scale-95"
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-60">
             <div className="flex items-center gap-2 text-white font-english font-bold">
               <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
               Live Automation
             </div>
             <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
             <div className="text-white font-english font-bold">WhatsApp Integrated</div>
             <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
             <div className="text-white font-english font-bold">Google Maps Optimized</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
