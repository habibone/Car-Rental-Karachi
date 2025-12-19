import React from 'react';
import { Star } from 'lucide-react';

const reasons = [
  "پروفیشنل ڈیزائن",
  "لوکل بزنس فوکس",
  "خودکار فالو اپ سسٹم",
  "ریویو مینجمنٹ",
  "زیادہ بکنگ، کم محنت"
];

const SocialProof: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-primary font-urdu sm:text-4xl mb-10" dir="rtl">
          ⭐ کار رینٹل بزنسز ہم پر کیوں اعتماد کرتے ہیں؟
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8" dir="rtl">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center bg-gray-50 px-6 py-3 rounded-full border border-gray-200 shadow-sm">
              <Star className="h-5 w-5 text-secondary fill-current" />
              <span className="mr-2 text-gray-800 font-bold font-urdu">{reason}</span>
            </div>
          ))}
        </div>

        {/* Dummy Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-primary rounded-xl text-white">
                <div className="text-4xl font-bold font-english text-secondary mb-2">50+</div>
                <div className="font-urdu">رینٹل بزنسز</div>
            </div>
            <div className="p-6 bg-primary rounded-xl text-white">
                <div className="text-4xl font-bold font-english text-secondary mb-2">10k+</div>
                <div className="font-urdu">بکنگ جنریٹڈ</div>
            </div>
            <div className="p-6 bg-primary rounded-xl text-white">
                <div className="text-4xl font-bold font-english text-secondary mb-2">24/7</div>
                <div className="font-urdu">سپورٹ</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;