
import React from 'react';
import { CheckCircle2, Gift, MousePointer2, Sparkles, Rocket, Zap } from 'lucide-react';

const OfferSection: React.FC = () => {
  const scrollToForm = () => {
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-32 bg-secondary overflow-hidden relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white font-urdu leading-[1.8]" dir="rtl">
            کیا آپ کا بزنس ایک <span className="text-accent">خودکار مشین</span> بننے کے لیے تیار ہے؟
          </h2>
          <div className="h-2 w-64 bg-accent mx-auto mt-12 rounded-full shadow-lg"></div>
        </div>

        {/* Main Premium Card */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[4rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative bg-surface text-white rounded-[4rem] shadow-2xl overflow-hidden p-10 md:p-20 border border-white/10">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              
              <div className="text-right order-2 lg:order-1" dir="rtl">
                <div className="space-y-12">
                  <div className="flex items-start justify-end gap-8 group/item">
                    <div className="text-right">
                      <h4 className="text-2xl font-bold font-urdu text-white mb-2 leading-[1.8]">مفت ڈیمو سیشن</h4>
                      <p className="text-slate-400 font-urdu text-xl leading-[1.8]">پہلے دیکھیں کہ یہ سسٹم کیسے کام کرتا ہے</p>
                    </div>
                    <div className="bg-primary/20 p-5 rounded-2xl group-hover/item:bg-primary transition-colors border border-primary/20">
                      <Zap className="text-accent w-10 h-10 shrink-0" />
                    </div>
                  </div>

                  <div className="flex items-start justify-end gap-8 group/item">
                    <div className="text-right">
                      <h4 className="text-2xl font-bold font-urdu text-white mb-2 leading-[1.8]">مکمل بزنس آڈٹ</h4>
                      <p className="text-slate-400 font-urdu text-xl leading-[1.8]">ہم آپ کے بزنس کا فری معائنہ کریں گے</p>
                    </div>
                    <div className="bg-primary/20 p-5 rounded-2xl group-hover/item:bg-primary transition-colors border border-primary/20">
                      <Sparkles className="text-accent w-10 h-10 shrink-0" />
                    </div>
                  </div>

                  <div className="flex items-start justify-end gap-8 group/item">
                    <div className="text-right">
                      <h4 className="text-2xl font-bold font-urdu text-white mb-2 leading-[1.8]">لائف ٹائم سپورٹ</h4>
                      <p className="text-slate-400 font-urdu text-xl leading-[1.8]">ہمارے ماہرین ہمیشہ آپ کے ساتھ ہیں</p>
                    </div>
                    <div className="bg-primary/20 p-5 rounded-2xl group-hover/item:bg-primary transition-colors border border-primary/20">
                      <Rocket className="text-accent w-10 h-10 shrink-0" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-20">
                  <button 
                    onClick={scrollToForm}
                    className="w-full bg-accent hover:bg-sky-300 text-secondary font-black py-8 rounded-[3rem] text-4xl font-english shadow-[0_20px_60px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-2 flex items-center justify-center gap-8 group/btn"
                  >
                    UPGRADE NOW
                    <MousePointer2 className="w-12 h-12 group-hover/btn:scale-125 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex flex-col items-center justify-center text-center">
                <div className="relative">
                  <div className="absolute inset-[-60px] bg-gradient-to-r from-primary/30 to-accent/30 blur-[80px] opacity-40 animate-pulse"></div>
                  
                  <div className="relative bg-secondary/50 backdrop-blur-3xl p-20 md:p-28 rounded-[5rem] border border-white/10 shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] flex flex-col items-center">
                    <div className="mb-6 inline-flex items-center gap-3 px-6 py-2 bg-primary rounded-full text-xs font-black tracking-widest uppercase text-white shadow-xl">
                      Automated Pro
                    </div>
                    <span className="text-8xl md:text-[12rem] font-black font-english text-white leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                      AI
                    </span>
                    <div className="mt-12 flex items-center gap-6">
                      <div className="h-[2px] w-12 bg-accent/30"></div>
                      <p className="text-3xl font-urdu text-accent font-black leading-[1.8]" dir="rtl">اسمارٹ رینٹل</p>
                      <div className="h-[2px] w-12 bg-accent/30"></div>
                    </div>
                    <p className="mt-6 text-slate-400 font-urdu text-2xl leading-[1.8]" dir="rtl">سب کچھ آٹو پائلٹ پر</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
