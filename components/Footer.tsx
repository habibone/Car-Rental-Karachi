import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToForm = () => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const whatsappNumber = "923001234567";

  return (
    <footer className="bg-primary text-white">
      {/* Final CTA */}
      <div className="py-16 px-4 text-center border-b border-blue-800 bg-blue-900/50">
         <h2 className="text-3xl font-bold font-urdu mb-4" dir="rtl">🚀 اپنی کار رینٹل سروس کو اگلے لیول پر لے جائیں</h2>
         <p className="text-xl text-secondary mb-8 font-urdu" dir="rtl">زیادہ بکنگ، زیادہ اعتماد، کم کالز، زیادہ آٹومیشن</p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button onClick={scrollToForm} className="bg-cta hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold font-english shadow-lg transition-transform hover:scale-105">Get Started</button>
             <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-3 rounded-full font-bold font-english shadow-lg hover:bg-gray-100 flex items-center justify-center transition-transform hover:scale-105"
             >
                Talk on WhatsApp
             </a>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
           <span className="text-2xl font-bold font-english">Smart<span className="text-secondary">Rental</span></span>
           <p className="text-sm text-gray-400 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <button 
            onClick={scrollToTop}
            className="bg-secondary text-primary p-3 rounded-full hover:bg-yellow-400 transition-colors"
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;