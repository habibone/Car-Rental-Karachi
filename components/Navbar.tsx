
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-secondary/90 backdrop-blur-md text-white shadow-xl sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 font-english font-black text-2xl tracking-tighter flex items-center gap-2">
            <span className="bg-accent px-3 py-1 rounded-lg text-secondary font-black italic">SMART</span>
            <span className="text-white">RENTAL</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <span className="text-slate-400 text-sm font-urdu" dir="rtl">آٹومیٹڈ کار رینٹل سسٹم</span>
              <button 
                onClick={scrollToForm}
                className="bg-accent hover:bg-sky-300 text-secondary font-english px-8 py-3 rounded-2xl font-black transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] transform hover:-translate-y-1 active:scale-95"
              >
                GET STARTED
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary pb-8 border-t border-white/5 px-6 pt-6 animate-in slide-in-from-top-4">
             <button 
                onClick={scrollToForm}
                className="bg-accent text-secondary font-black font-english w-full py-5 rounded-2xl shadow-lg text-xl"
              >
                GET STARTED
              </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;