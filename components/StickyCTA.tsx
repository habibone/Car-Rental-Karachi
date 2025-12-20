
import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const rawPhone = "923001234567";
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
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-xl border-t border-white/10 p-4 flex gap-4 z-[99] md:hidden shadow-2xl">
      <a 
        href={`tel:${phoneNumber}`}
        className="flex-1 bg-primary text-white flex items-center justify-center py-5 rounded-2xl font-black font-english shadow-lg active:scale-95 transition-transform text-lg"
      >
        <Phone className="w-6 h-6 mr-3" />
        CALL
      </a>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Assalam o Alaikum! I am interested in a Smart Website for my Car Rental business.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center py-5 rounded-2xl font-black font-english shadow-lg active:scale-95 transition-transform text-lg"
      >
        <MessageCircle className="w-6 h-6 mr-3" />
        WHATSAPP
      </a>
    </div>
  );
};

export default StickyCTA;