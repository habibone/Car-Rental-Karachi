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
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-english font-bold text-2xl tracking-wider">
            Smart<span className="text-secondary">Rental</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={scrollToForm}
                className="bg-cta hover:bg-green-600 text-white font-english px-6 py-2 rounded-full font-bold transition-all shadow-lg transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
             <button 
                onClick={scrollToForm}
                className="bg-cta text-white font-english w-full py-3 rounded-lg font-bold shadow-md"
              >
                Get Started
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;