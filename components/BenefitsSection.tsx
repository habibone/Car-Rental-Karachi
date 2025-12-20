
import React from 'react';
import { TrendingUp, Users, Zap, Award, Globe, MessageCircle } from 'lucide-react';

const benefits = [
  { label: "زیادہ بکنگ اور کم محنت", icon: <TrendingUp className="w-10 h-10" /> },
  { label: "24 گھنٹے خودکار کسٹمر سروس", icon: <Zap className="w-10 h-10" /> },
  { label: "کال مس ہونے پر بھی گاہک ضائع نہیں ہوگا", icon: <Users className="w-10 h-10" /> },
  { label: "مارکیٹ میں ایک پروفیشنل پہچان", icon: <Award className="w-10 h-10" /> },
  { label: "گوگل پر آپ کے بزنس کی ٹاپ رینکنگ", icon: <Globe className="w-10 h-10" /> },
  { label: "واٹس ایپ سے منسلک مکمل خودکار سسٹم", icon: <MessageCircle className="w-10 h-10" /> }
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="py-32 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-6xl font-black text-white font-urdu leading-[1.8]" dir="rtl">
            یہ اسمارٹ ویب سائٹ آپ کو <span className="text-accent italic">کیا فائدہ</span> دے گی؟
          </h2>
          <div className="h-2 w-48 bg-accent mx-auto mt-10 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" dir="rtl">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 p-12 rounded-[4rem] border border-white/5 text-center transition-all hover:scale-105 hover:bg-white/[0.08] hover:border-primary/50 group">
              <div className="bg-primary/20 p-8 rounded-[2rem] w-28 h-28 flex items-center justify-center mx-auto mb-10 text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                {benefit.icon}
              </div>
              <p className="text-2xl font-bold text-slate-200 font-urdu leading-[1.8]">
                {benefit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
