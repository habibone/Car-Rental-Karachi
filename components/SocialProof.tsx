
import React from 'react';
import { Star, ShieldCheck, Users, Lock, MonitorCheck, Quote } from 'lucide-react';

const stats = [
  { 
    label: "گاہکوں کے ریویوز", 
    subLabel: "اعلیٰ معیار کی سروس",
    icon: <div className="flex justify-center mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}</div>
  },
  { 
    label: "مقامی بزنس کا بھروسہ", 
    subLabel: "سو سے زائد رینٹل مالکان",
    icon: <Users className="w-12 h-12 text-primary mx-auto mb-6" />
  },
  { 
    label: "محفوظ اور تیز سسٹم", 
    subLabel: "100% ڈیٹا سیکیورٹی",
    icon: <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
  },
  { 
    label: "آسان ترین استعمال", 
    subLabel: "کسی ٹیکنیکل علم کی ضرورت نہیں",
    icon: <MonitorCheck className="w-12 h-12 text-primary mx-auto mb-6" />
  }
];

const reviews = [
  {
    name: "محمد بلال",
    business: "کراچی رینٹل سروسز",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal",
    text: "اس اسمارٹ سسٹم نے میرے بزنس کو بدل کر رکھ دیا ہے۔ اب مجھے رات بھر جاگ کر کالز اٹھانے کی ضرورت نہیں، بکنگ خود بخود ہو جاتی ہے۔",
    rating: 5
  },
  {
    name: "احمد رضا",
    business: "لاہور آٹو ڈرائیو",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    text: "واٹس ایپ آٹومیشن فیچر لاجواب ہے! کسٹمر کو سیکنڈز میں جواب ملتا ہے جس سے میرا سیلز ریٹ 40 فیصد تک بڑھ گیا ہے۔ شکریہ اسمارٹ رینٹل!",
    rating: 5
  },
  {
    name: "ذیشان علی",
    business: "اسلام آباد لگژری رینٹل",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan",
    text: "گوگل میپس اور لوکل SEO کی وجہ سے اب مجھے نئے کسٹمرز ڈھونڈنے نہیں پڑتے، وہ خود مجھے گوگل پر تلاش کر کے ویب سائٹ پر آتے ہیں۔",
    rating: 5
  }
];

const SocialProof: React.FC = () => {
  return (
    <div className="py-32 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32" dir="rtl">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 text-center hover:bg-white/[0.08] transition-all">
              <div className="mb-4">{stat.icon}</div>
              <p className="font-urdu font-black text-2xl text-white mb-3 leading-[1.8]">{stat.label}</p>
              <p className="text-slate-400 text-xl font-urdu leading-[1.8]">{stat.subLabel}</p>
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white font-urdu leading-[1.8] mb-10" dir="rtl">
            کار رینٹل مالکان ہم پر <span className="text-accent italic">کیوں بھروسہ</span> کرتے ہیں؟
          </h2>
          <div className="h-2 w-48 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Detailed Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" dir="rtl">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="group bg-surface p-12 rounded-[4rem] border border-white/10 flex flex-col relative overflow-hidden hover:border-accent/30 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute top-10 left-10 text-white/5">
                <Quote className="w-20 h-20 fill-current rotate-180" />
              </div>
              
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-24 h-24 rounded-full border-4 border-accent/20 overflow-hidden shrink-0">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-right">
                  <h4 className="text-2xl font-black font-urdu text-white leading-[1.8]">{review.name}</h4>
                  <p className="text-accent font-urdu text-xl leading-[1.8]">{review.business}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-2xl text-slate-300 font-urdu leading-[1.8] relative z-10 text-right italic">
                "{review.text}"
              </p>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-emerald-400 font-urdu text-lg leading-[1.8]">
                  <ShieldCheck className="w-6 h-6" />
                  <span>تصدیق شدہ گاہک</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
