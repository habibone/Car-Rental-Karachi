
import React from 'react';
import { XCircle, AlertCircle } from 'lucide-react';

const problems = [
  "ویب سائٹ پر آن لائن بکنگ موجود نہیں",
  "گاہک کال نہ ملنے پر واپس چلے جاتے ہیں",
  "WhatsApp پر خودکار جواب نہیں",
  "Google پر کم Visibility",
  "Reviews کم یا غیر منظم",
  "رات کے وقت کوئی بکنگ نہیں آتی"
];

const ProblemSection: React.FC = () => {
  return (
    <div className="py-32 bg-[#0a0f1d] relative overflow-hidden border-b border-white/5">
      {/* Decorative background elements for this section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-urdu leading-[2.1]" dir="rtl">
            کیا آپ کا رینٹل بزنس یہ <span className="text-accent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">مسائل</span> فیس کر رہا ہے؟
          </h2>
          
          <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-12 rounded-full opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group flex items-start bg-surface/30 p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Card subtle inner glow on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500"></div>
              
              <div className="flex-shrink-0 ml-6 mt-1 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors border border-accent/10">
                  <XCircle className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </div>
              
              <p className="text-2xl font-bold text-slate-300 font-urdu leading-[2.1] relative z-10 group-hover:text-white transition-colors">
                {problem}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Contextual Note with custom blink effect and bright yellow color */}
        <div className="mt-20 text-center relative z-10">
           <p className="text-yellow-400 font-urdu text-xl md:text-2xl leading-[2.1] animate-blink drop-shadow-[0_0_10px_rgba(250,204,21,0.2)]" dir="rtl">
             یہ صرف عام مسائل نہیں ہیں، یہ آپ کے بزنس کا <span className="font-black underline decoration-yellow-400/50 underline-offset-8">پرافٹ</span> ضائع کر رہے ہیں۔
           </p>
        </div>
      </div>
      <style>{`
        @keyframes custom-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-blink {
          animation: custom-blink 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ProblemSection;
