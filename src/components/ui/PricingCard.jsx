import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Button from './Button'; 

const PricingCard = ({ plan, isYearly }) => {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const isPopular = plan.isPopular;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`
                relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300
                ${isPopular
                    ? 'bg-brand-600 border-brand-600 text-white shadow-2xl shadow-brand-600/30 scale-105 z-10'
                    : 'bg-white border-brand-100 text-gray-900 shadow-xl hover:border-brand-200'
                }
            `}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-800 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
                    Most Popular
                </div>
            )}

            {/* Header */}
            <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                </h3>
                <p className={`text-sm ${isPopular ? 'text-brand-100' : 'text-gray-500'}`}>
                    {plan.desc}
                </p>
            </div>

            {/* Price */}
            <div className="mb-2 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                    ${price}
                </span>
                <span className={`ml-2 text-sm font-medium ${isPopular ? 'text-brand-100' : 'text-gray-400'}`}>
                    / month
                </span>
            </div>

            {/* Button Section - WITH FIXED '!important' STYLES */}
            <div className="mb-8 mt-6">
                <Button 
                    className={`w-full py-4 text-lg font-bold rounded-full transition-all shadow-xl ${
                    isPopular 
                        // Added '!' to force White Background and Pink Text
                        ? '!bg-white !text-brand-600 hover:!bg-gray-50 shadow-black/20'     
                        
                        // Standard Card (Pink Button)
                        : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-200'  
                    }`}
                >
                    Choose Plan
                </Button>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-4 flex-1">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <Check
                            size={18}
                            className={`mr-3 shrink-0 mt-0.5 ${isPopular ? 'text-brand-200' : 'text-brand-600'}`}
                        />
                        <span className={`text-sm ${isPopular ? 'text-brand-50' : 'text-gray-600'}`}>
                            {feature}
                        </span>
                    </li>
                ))}

                {/* Not Included Items (Faded) */}
                {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                    <li key={`ni-${i}`} className="flex items-start opacity-50">
                        <X
                            size={18}
                            className={`mr-3 shrink-0 mt-0.5 ${isPopular ? 'text-brand-200' : 'text-gray-400'}`}
                        />
                        <span className={`text-sm ${isPopular ? 'text-brand-100' : 'text-gray-500'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default PricingCard;