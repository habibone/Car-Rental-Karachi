import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const scrollToForm = () => {
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary font-urdu sm:text-4xl" dir="rtl">
            💼 اسمارٹ ویب سائٹ پیکیج
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-urdu" dir="rtl">
            یہ صرف ایک ویب سائٹ نہیں، یہ ایک مکمل کار رینٹل بزنس سسٹم ہے
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-secondary relative">
          <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-4 py-1 rounded-bl-lg font-english">
            BEST VALUE
          </div>
          
          <div className="p-8 sm:p-10">
            <div className="flex justify-center mb-8">
                <span className="text-5xl font-extrabold text-primary font-english">Complete System</span>
            </div>
            
            <ul className="space-y-4 font-urdu text-right" dir="rtl">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="mr-3 text-lg text-gray-700">پریمیم موبائل ریسپانسیو ڈیزائن</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="mr-3 text-lg text-gray-700">واٹس ایپ اور کال بٹن انٹیگریشن</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="mr-3 text-lg text-gray-700">بکنگ فارم اور ای میل الرٹس</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="mr-3 text-lg text-gray-700">Google میپ اور SEO سیٹ اپ</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="mr-3 text-lg text-gray-700">1 سال کی فری ہوسٹنگ اور ڈومین سپورٹ</p>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
               <button 
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-cta hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg font-english shadow-lg transition-transform transform hover:scale-105"
               >
                 Start Now
               </button>
               <button 
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-white border-2 border-primary text-primary hover:bg-gray-50 font-bold py-4 px-8 rounded-lg text-lg font-english"
               >
                 See Packages
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;