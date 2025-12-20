
import React from 'react';
import { 
  Smartphone, 
  CalendarCheck2, 
  MessageSquareText, 
  PhoneForwarded, 
  MapPin, 
  Star, 
  BellRing,
  FileText,
  Search,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const featureGroups = [
  {
    pillar: "Automation & Workflow",
    pillarUrdu: "بزنس آٹومیشن",
    features: [
      {
        title: "24/7 Online Booking System",
        icon: <CalendarCheck2 className="h-8 w-8" />,
        desc: "کار بکنگ کا مکمل خودکار سسٹم جو رات دن کام کرے"
      },
      {
        title: "Instant Booking Alerts",
        icon: <BellRing className="h-8 w-8" />,
        desc: "بکنگ ہوتے ہی آپ کو WhatsApp اور ای میل پر اطلاع"
      },
      {
        title: "Detailed Booking Form",
        icon: <FileText className="h-8 w-8" />,
        desc: "تاریخ، وقت اور گاڑی کی قسم کے ساتھ پروفیشنل فارم"
      },
    ]
  },
  {
    pillar: "Client Experience",
    pillarUrdu: "بہترین کسٹمر سروس",
    features: [
      {
        title: "Smart Chatbot",
        icon: <MessageSquareText className="h-8 w-8" />,
        desc: "گاہکوں کے سوالات کے خودکار جوابات اور فوری چیٹ"
      },
      {
        title: "Missed Call Text Back",
        icon: <PhoneForwarded className="h-8 w-8" />,
        desc: "کال مس ہونے پر گاہک کو خودکار میسج اور آفر"
      },
      {
        title: "Mobile-First Design",
        icon: <Smartphone className="h-8 w-8" />,
        desc: "موبائل پر تیزی سے کھلنے والی خوبصورت ویب سائٹ"
      },
    ]
  },
  {
    pillar: "Local Growth & Trust",
    pillarUrdu: "بزنس میں اضافہ",
    features: [
      {
        title: "Google Maps Setup",
        icon: <MapPin className="h-8 w-8" />,
        desc: "لوکل گاہکوں کو آپ کے آفس تک لانے کا بہترین حل"
      },
      {
        title: "Reviews Showcase",
        icon: <Star className="h-8 w-8" />,
        desc: "ٹرسٹ بڑھانے کے لیے Google ریویوز کا ڈسپلے"
      },
      {
        title: "Local SEO Optimizer",
        icon: <Search className="h-8 w-8" />,
        desc: "گوگل پر آپ کے شہر کے نام کے ساتھ بہترین رینکنگ"
      },
    ]
  }
];

const SolutionSection: React.FC = () => {
  return (
    <div className="py-32 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full shadow-sm mb-10">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-xs font-black font-english tracking-[0.4em] text-slate-400 uppercase">Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-urdu leading-[1.8]" dir="rtl">
            ہم آپ کے لیے کیا <span className="text-accent italic">بناتے ہیں؟</span>
          </h2>
          <p className="mt-10 text-2xl md:text-3xl text-slate-400 font-urdu max-w-3xl mx-auto leading-[1.8]" dir="rtl">
            ہم صرف ویب سائٹ نہیں بناتے، ہم آپ کے رینٹل بزنس کے لیے ایک مکمل ڈیجیٹل سیلز ٹیم تیار کرتے ہیں۔
          </p>
        </div>

        <div className="space-y-24">
          {featureGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <div className="flex items-center gap-6 mb-12" dir="rtl">
                <h3 className="text-2xl font-black font-urdu text-white whitespace-nowrap leading-[1.8]">{group.pillarUrdu}</h3>
                <div className="h-px w-full bg-white/10"></div>
                <span className="text-xs font-bold font-english text-primary whitespace-nowrap tracking-widest uppercase" dir="ltr">{group.pillar}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10" dir="rtl">
                {group.features.map((feature, fIdx) => (
                  <div 
                    key={fIdx} 
                    className="group bg-white/5 p-12 rounded-[3.5rem] border border-white/10 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col items-start text-right backdrop-blur-sm"
                  >
                    <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500 bg-primary/20 text-accent border border-accent/20">
                      {feature.icon}
                    </div>
                    
                    <div className="w-full mb-6" dir="ltr">
                      <h4 className="text-xl font-black text-white font-english group-hover:text-accent transition-colors text-left">
                        {feature.title}
                      </h4>
                    </div>
                    
                    <p className="text-xl text-slate-400 font-urdu leading-[1.8]">
                      {feature.desc}
                    </p>

                    <div className="mt-10 flex items-center gap-3 text-accent font-black text-sm font-english opacity-40 group-hover:opacity-100 transition-all" dir="ltr">
                       <ShieldCheck className="w-5 h-5" />
                       PREMIUM INCLUSION
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
