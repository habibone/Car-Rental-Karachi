import React from 'react';
import { Bot, MessageSquare, PhoneMissed, FileText, Star, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "اسمارٹ چیٹ بوٹ (24/7 جواب)",
    icon: <Bot className="h-8 w-8 text-secondary" />,
    desc: "آٹومیٹک جوابات جو گاہک کو فوراً مطمئن کرتے ہیں۔"
  },
  {
    title: "WhatsApp Auto Booking",
    icon: <MessageSquare className="h-8 w-8 text-secondary" />,
    desc: "سیدھا آپ کے واٹس ایپ پر منظم بکنگ الرٹ۔"
  },
  {
    title: "Missed Call Text Back",
    icon: <PhoneMissed className="h-8 w-8 text-secondary" />,
    desc: "اگر کال مس ہو جائے تو سسٹم خودکار میسج بھیج دیتا ہے۔"
  },
  {
    title: "آن لائن بکنگ فارم",
    icon: <FileText className="h-8 w-8 text-secondary" />,
    desc: "گاہک آسانی سے گاڑی، تاریخ اور وقت منتخب کر سکتا ہے۔"
  },
  {
    title: "Google Reviews Automation",
    icon: <Star className="h-8 w-8 text-secondary" />,
    desc: "سفر ختم ہونے کے بعد آٹومیٹک ریویو کی درخواست۔"
  },
  {
    title: "موبائل فرینڈلی اور فاسٹ",
    icon: <Smartphone className="h-8 w-8 text-secondary" />,
    desc: "ہر موبائل اور ڈیوائس پر بہترین چلنے والی ویب سائٹ۔"
  },
];

const SolutionSection: React.FC = () => {
  return (
    <div className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-secondary font-urdu sm:text-4xl" dir="rtl">
            ✅ ہماری اسمارٹ ویب سائٹ کیا مختلف کرتی ہے؟
          </h2>
          <p className="mt-4 text-xl text-gray-300 font-urdu" dir="rtl">
            آج کے دور کی جدید ٹیکنالوجی جو آپ کا بزنس بڑھائے
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0f4c75] rounded-xl p-8 border border-blue-800 hover:border-secondary transition-all transform hover:-translate-y-1 shadow-xl">
              <div className="inline-flex items-center justify-center p-3 bg-white bg-opacity-10 rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-urdu">{feature.title}</h3>
              <p className="text-gray-300 font-urdu text-lg leading-relaxed">{feature.desc}</p>
            </div>
          ))}
           <div className="bg-secondary rounded-xl p-8 border border-yellow-500 text-primary flex flex-col items-center justify-center text-center">
              <ShieldCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 font-urdu">محفوظ اور پروفیشنل ڈیزائن</h3>
              <p className="font-urdu text-lg leading-relaxed">آپ کے بزنس کی ساکھ ہماری ترجیح ہے۔</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;