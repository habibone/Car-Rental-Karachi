
import React from 'react';
import { MousePointerClick, MessageCircle, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "گاہک آپ کی ویب سائٹ visit کرتا ہے",
    desc: "Step 1",
    icon: <MousePointerClick className="h-8 w-8 text-white" />
  },
  {
    id: 2,
    title: "وہ آن لائن گاڑی بک کرتا ہے یا WhatsApp پر چیٹ شروع کرتا ہے",
    desc: "Step 2",
    icon: <MessageCircle className="h-8 w-8 text-white" />
  },
  {
    id: 3,
    title: "آپ کو فوراً WhatsApp / Email پر بکنگ کی اطلاع مل جاتی ہے",
    desc: "Step 3",
    icon: <Zap className="h-8 w-8 text-white" />
  }
];

const ProcessSection: React.FC = () => {
  return (
    <div className="py-32 bg-secondary border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-white font-urdu leading-[1.8]" dir="rtl">
            یہ سسٹم کیسے کام کرتا ہے؟
          </h2>
          <div className="h-2 w-32 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative" dir="rtl">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-[2rem] bg-surface flex items-center justify-center shadow-2xl border border-white/10 group-hover:bg-primary transition-all duration-500 group-hover:-translate-y-2">
                <div className="group-hover:scale-110 transition-transform text-accent group-hover:text-white">
                  {step.icon}
                </div>
              </div>
              <div className="mt-8">
                <span className="text-primary font-english font-black text-xs tracking-[0.3em] uppercase mb-4 block">{step.desc}</span>
                <h3 className="text-xl font-bold text-slate-200 font-urdu leading-[1.8] px-4">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
