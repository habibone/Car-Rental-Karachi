import React from 'react';
import { MousePointerClick, MessageCircle, BellRing, UserCheck, CalendarCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "گاہک ویب سائٹ وزٹ کرتا ہے",
    icon: <MousePointerClick className="h-6 w-6 text-white" />
  },
  {
    id: 2,
    title: "چیٹ بوٹ یا فارم سے ریکویسٹ دیتا ہے",
    icon: <MessageCircle className="h-6 w-6 text-white" />
  },
  {
    id: 3,
    title: "سسٹم WhatsApp / Email پر نوٹیفکیشن بھیجتا ہے",
    icon: <BellRing className="h-6 w-6 text-white" />
  },
  {
    id: 4,
    title: "آپ فوری فالو اپ کرتے ہیں",
    icon: <UserCheck className="h-6 w-6 text-white" />
  },
  {
    id: 5,
    title: "بکنگ کنفرم ہو جاتی ہے",
    icon: <CalendarCheck className="h-6 w-6 text-white" />
  }
];

const ProcessSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary font-urdu sm:text-4xl" dir="rtl">
            ⚙️ یہ سسٹم کیسے کام کرتا ہے؟
          </h2>
        </div>

        <div className="relative">
            {/* Vertical Line for Mobile */}
            <div className="absolute top-0 bottom-0 right-8 md:hidden w-1 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-row-reverse md:flex-col items-center md:text-center group">
                  
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-secondary group-hover:scale-110 transition-transform shadow-lg">
                    {step.icon}
                  </div>
                  
                  {/* Connector Line (Desktop) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[-50%] w-full h-1 bg-gray-200 -z-10" />
                  )}

                  <div className="mr-6 md:mr-0 md:mt-6 w-full text-right md:text-center">
                    <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">Step {step.id}</div>
                    <h3 className="text-lg font-bold text-gray-900 font-urdu">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;