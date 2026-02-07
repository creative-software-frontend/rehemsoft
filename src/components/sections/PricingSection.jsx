import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../../constants/pricingData';
import PricingCard from '../ui/PricingCard';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pt-4 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- Header & Toggle --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#db2777] font-bold tracking-wider uppercase text-sm bg-pink-50 px-4 py-1.5 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-6">
            Plans for every <span className="text-[#db2777]">Stage of Growth</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Choose the plan that fits your business needs. Upgrade or cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-brand-100 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <motion.div 
                className="w-6 h-6 bg-brand-600 rounded-full shadow-md"
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            
            <span className={`text-sm font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
              Yearly <span className="text-brand-600 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PricingCard 
                plan={plan} 
                isYearly={isYearly} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;