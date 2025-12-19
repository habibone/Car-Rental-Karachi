import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-primary overflow-hidden">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury Car Fleet" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="text-center">
          {/* Main Headline - Decreased leading from 4.5 to 2.8 for a tighter look while keeping Urdu legible */}
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-urdu leading-[2.8] mb-12" dir="rtl">
             <span className="block text-secondary">🚗 اپنی کار رینٹل سروس کو</span>
             <span className="block">ایک اسمارٹ، خودکار اور 24/7 بکنگ ویب سائٹ میں تبدیل کریں</span>
          </h1>
          
          {/* Sub-headline - Decreased leading from 3.5 to 2.2 */}
          <p className="mt-8 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-10 md:text-xl md:max-w-3xl font-urdu leading-[2.2]" dir="rtl">
            ہم آپ کے لیے ایسی اسمارٹ ویب سائٹ بناتے ہیں جو
            <span className="font-bold text-secondary mx-2 inline-block">📞 کالز</span>،
            <span className="font-bold text-secondary mx-2 inline-block">💬 WhatsApp میسجز</span>،
            <span className="font-bold text-secondary mx-2 inline-block">📅 بکنگ</span> اور
            <span className="font-bold text-secondary mx-2 inline-block">⭐ ریویوز</span>
            سب کچھ خودکار طریقے سے سنبھالتی ہے۔
          </p>
          
          <div className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-6">
            <div className="w-full sm:w-auto">
              <button
                onClick={scrollToForm}
                className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-full text-white bg-cta hover:bg-green-600 md:py-4 md:text-lg md:px-12 font-english transition-transform transform hover:scale-105 shadow-xl"
              >
                Get Smart Website
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 sm:mt-0 w-full sm:w-auto">
              <button
                onClick={scrollToForm}
                className="w-full flex items-center justify-center px-10 py-4 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-12 font-english transition-colors"
              >
                Book Free Demo
                <PlayCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;