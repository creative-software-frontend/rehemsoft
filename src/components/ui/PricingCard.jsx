import React from 'react';
import Button from './Button';

const PricingCard = ({ plan, isYearly }) => {
  // Calculate price based on toggle
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-pink-100 shadow-xl relative flex flex-col min-h-[550px] h-full">
      {/* Popular Badge */}
      <div className="absolute top-0 right-0 bg-[#db2777] text-white px-8 py-2 rounded-bl-3xl font-bold text-sm">
        Premium
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-500 text-sm">{plan.description}</p>
      </div>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-5xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-500 font-medium">/ {isYearly ? 'month (yearly)' : 'month'}</span>
      </div>

      {/* Feature List */}
      <div className="space-y-4 mb-10">
        <p className="font-bold text-gray-800 text-xs uppercase tracking-widest">Included Features</p>
        <ul className="grid grid-cols-1  gap-y-3 gap-x-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
              <div className="shrink-0 bg-pink-50 text-[#db2777] p-1 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* FIX: mt-auto pushes the button to the absolute bottom of the card container */}
      <div className="mt-auto">
        <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-pink-100">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;