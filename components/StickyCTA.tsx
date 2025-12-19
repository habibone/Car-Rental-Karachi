import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-3 z-50 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <button 
        onClick={scrollToForm} // In real app, this would be href="tel:..."
        className="flex-1 bg-primary text-white flex items-center justify-center py-3 rounded-lg font-bold font-english shadow-md active:bg-blue-900"
      >
        <Phone className="w-5 h-5 mr-2" />
        Call Now
      </button>
      <button 
         // In real app, this would be href="https://wa.me/..."
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center py-3 rounded-lg font-bold font-english shadow-md active:bg-green-600"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        WhatsApp
      </button>
    </div>
  );
};

export default StickyCTA;