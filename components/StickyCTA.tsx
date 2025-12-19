import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sanitized numbers for protocols
  const rawPhone = "923001234567"; // No spaces or extra characters for reliability
  const phoneNumber = `+${rawPhone}`;
  const whatsappNumber = rawPhone;

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-3 z-[99] md:hidden shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.1)]">
      <a 
        href={`tel:${phoneNumber}`}
        className="flex-1 bg-primary text-white flex items-center justify-center py-4 rounded-xl font-bold font-english shadow-lg active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 mr-2" />
        Call Now
      </a>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Assalam o Alaikum! I am interested in a Smart Website for my Car Rental business. Please share details.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center py-4 rounded-xl font-bold font-english shadow-lg active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyCTA;