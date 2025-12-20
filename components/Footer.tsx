
import React from 'react';
import { ArrowUp, ArrowRight, Zap } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToForm = () => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const whatsappNumber = "923001234567";

  return (
    <footer className="bg-secondary text-white border-t border-white/5">
      {/* FINAL CTA SECTION */}
      <div className="py-32 px-4 text-center bg-gradient-to-br from-secondary via-surface to-secondary relative overflow-hidden">
         <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 mb-10 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                <Zap className="w-5 h-5 text-accent fill-accent" />
                <span className="text-xs font-black font-english tracking-[0.4em] text-accent uppercase">Final Step to Growth</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black font-urdu mb-12 leading-[1.8] text-white" dir="rtl">
                ابھی اپنی کار رینٹل ویب سائٹ کو <span className="text-accent italic">اپ گریڈ</span> کریں
            </h2>
            <p className="text-2xl md:text-4xl text-slate-400 mb-20 font-urdu leading-[1.8] max-w-4xl mx-auto" dir="rtl">
                آج فیصلہ کریں، کل سے 24/7 بکنگ شروع کریں
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-10">
                <button 
                  onClick={scrollToForm} 
                  className="group relative bg-accent hover:bg-sky-300 text-secondary px-20 py-8 rounded-[3rem] font-black font-english shadow-[0_20px_60px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-2 active:scale-95 text-3xl flex items-center justify-center gap-6"
                >
                    <span>START UPGRADE</span>
                    <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
                </button>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center md:text-left border-t border-white/5 pt-20">
            <div>
               <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                  <span className="bg-accent px-3 py-1 rounded-lg text-secondary font-english font-black italic">SMART</span>
                  <span className="text-3xl font-black font-english tracking-tighter">RENTAL</span>
               </div>
               <p className="text-lg text-slate-500 font-english max-w-xs mx-auto md:mx-0 leading-relaxed">
                  The #1 automation engine for modern car rental businesses. Building the future of vehicle booking.
               </p>
            </div>
            
            <div className="flex justify-center gap-16 font-english text-sm font-bold text-slate-400">
              <div className="space-y-6 text-left">
                  <a href="#" className="block hover:text-accent transition-colors uppercase tracking-widest">Privacy</a>
                  <a href="#" className="block hover:text-accent transition-colors uppercase tracking-widest">Terms</a>
              </div>
              <div className="space-y-6 text-left">
                  <a href={`https://wa.me/${whatsappNumber}`} className="block hover:text-accent transition-colors uppercase tracking-widest">Support</a>
                  <a href="#lead-form" className="block hover:text-accent transition-colors uppercase tracking-widest">Demo</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-10">
                <button 
                    onClick={scrollToTop}
                    className="bg-white/5 text-accent p-6 rounded-full hover:bg-accent hover:text-secondary transition-all shadow-xl border border-white/10"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-8 w-8" />
                </button>
                <p className="text-xs text-slate-600 font-english uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Smart Rental PK.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
