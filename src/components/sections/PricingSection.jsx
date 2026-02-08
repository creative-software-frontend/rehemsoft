import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesPricing } from '../../constants/pricingData';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState(servicesPricing[0].id);

  const activeService = servicesPricing.find(s => s.id === activeServiceId);

  const planTiers = [
    { name: 'Starter', monthlyPrice: activeService.monthlyPrice, yearlyPrice: activeService.yearlyPrice },
    { name: 'Starter Plus', monthlyPrice: activeService.monthlyPrice * 1.5, yearlyPrice: activeService.yearlyPrice * 1.5 },
    { name: 'Pro', monthlyPrice: activeService.monthlyPrice * 2.5, yearlyPrice: activeService.yearlyPrice * 2.5 },
    { name: 'Pro Plus', monthlyPrice: activeService.monthlyPrice * 3, yearlyPrice: activeService.yearlyPrice * 3 },
    { name: 'Ultimate', monthlyPrice: activeService.monthlyPrice * 8, yearlyPrice: activeService.yearlyPrice * 8 },
  ];

  return (
    <section className="py-12 bg-page-gradient min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-heading mb-6">
            Compare <span className="text-brand-600">Plans & Features</span>
          </h2>
          
          <div className="flex items-center gap-2 bg-white p-1 rounded-full shadow-md border border-brand-100">
            <button 
              onClick={() => setIsYearly(false)} 
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 ${!isYearly ? 'bg-brand-600 text-white shadow-lg' : 'text-gray-500 hover:text-brand-50'}`}
            >Monthly</button>
            <button 
              onClick={() => setIsYearly(true)} 
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 ${isYearly ? 'bg-brand-600 text-white shadow-lg' : 'text-gray-500 hover:text-brand-50'}`}
            >Yearly</button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">

          {/* LEFT SIDE: Service List (1/4 Width) */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            {servicesPricing.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                whileHover={{ x: 5 }}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left shadow-sm ${
                  activeServiceId === service.id
                    ? 'border-brand-600 bg-brand-600 text-white ring-4 ring-brand-50'
                    : 'border-white bg-white text-text-main hover:border-brand-200'
                }`}
              >
                <span className="font-bold text-[15px] leading-tight truncate">{service.name}</span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                  activeServiceId === service.id ? 'bg-white text-brand-600' : 'bg-brand-50 text-brand-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT SIDE: Table (3/4 Width - Full Height) */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId + isYearly}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full overflow-x-auto"
              >
                <table className="w-full border-collapse min-w-[850px] h-full flex flex-col">
                  {/* Fixed Height Header */}
                  <thead className="bg-brand-600 sticky top-0 z-10 shrink-0">
                    <tr className="flex w-full">
                      <th className="p-6 text-left text-white font-bold text-xl border-r border-brand-700/30 flex-1 flex items-center">Features</th>
                      {planTiers.map((plan, idx) => (
                        <th key={idx} className="p-3 border-r border-brand-700/30 last:border-0 w-[150px] shrink-0">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-brand-100 text-[10px] uppercase font-bold tracking-widest">{plan.name}</span>
                            <div className="bg-white/10 rounded-lg p-2 w-full text-center">
                              <span className="text-white text-xl font-black block">
                                ৳{Math.round(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                              </span>
                            </div>
                            <button className="w-full bg-white text-brand-600 py-1.5 rounded-full text-[10px] font-extrabold hover:bg-brand-50">
                              Order Now
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                  {/* Full Height Data Rows */}
                  <tbody className="text-[13px] flex-grow flex flex-col w-full divide-y divide-brand-50">
                    {activeService.features.map((feature, rowIndex) => (
                      <tr key={rowIndex} className="flex w-full hover:bg-brand-50/50 transition-colors flex-grow items-center">
                        <td className="p-4 font-semibold text-text-main bg-white border-r border-brand-50 flex-1 h-full flex items-center">
                          {feature}
                        </td>
                        {planTiers.map((_, planIdx) => (
                          <td key={planIdx} className="p-4 text-center text-gray-600 border-r border-brand-50 last:border-0 w-[150px] shrink-0 h-full flex items-center justify-center">
                            {planIdx >= (rowIndex % 3) ? (
                              <div className="bg-green-100 p-1 rounded-full">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;