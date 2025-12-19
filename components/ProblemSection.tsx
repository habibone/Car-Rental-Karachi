import React from 'react';
import { XCircle } from 'lucide-react';

const problems = [
  "گاہک بار بار کال کرتے ہیں اور ریٹ پوچھتے ہیں",
  "WhatsApp پر بکنگ میسجز گم ہو جاتے ہیں",
  "مصروفیت کی وجہ سے آدھی کالز مس ہو جاتی ہیں",
  "پرانی ویب سائٹ یا سوشل میڈیا پیج پر گاہک کا اعتماد نہیں بنتا",
  "Google ریویوز اور فالو اپ کا کوئی سسٹم نہیں ہے"
];

const ProblemSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-red-600 font-urdu sm:text-4xl" dir="rtl">
            ❌ کار رینٹل بزنس کے عام مسائل
          </h2>
          <p className="mt-4 text-xl text-gray-500 font-urdu" dir="rtl">
            کیا آپ بھی ان مسائل سے پریشان ہیں؟
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
              <div className="mr-4">
                <p className="text-lg font-medium text-gray-900 font-urdu leading-relaxed">
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;