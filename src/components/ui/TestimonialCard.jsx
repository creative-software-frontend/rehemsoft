import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ item, isCenter, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isCenter ? 1 : 0.4,   
        scale: isCenter ? 1 : 0.85,    
        x: isCenter ? 0 : (index === 0 ? -20 : 20), 
        zIndex: isCenter ? 20 : 10,
        filter: isCenter ? "blur(0px)" : "blur(2px)" 
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      
      className={`
        relative bg-white p-8 rounded-3xl shadow-xl flex-shrink-0 w-full max-w-md
        ${isCenter ? 'block border-2 border-brand-100 ring-4 ring-brand-50' : 'hidden md:block border border-transparent'}
      `}
    >
      <div className="mb-6">
         <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCenter ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
           <Quote size={20} fill="currentColor" />
         </div>
      </div>

      <p className={`text-lg font-medium mb-8 leading-relaxed ${isCenter ? 'text-gray-800' : 'text-gray-400'}`}>
        "{item.content}"
      </p>

      <div className="flex items-center gap-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className={`rounded-full object-cover transition-all ${isCenter ? 'w-14 h-14 border-2 border-brand-200' : 'w-10 h-10 grayscale'}`}
        />
        <div>
          <h4 className={`font-bold ${isCenter ? 'text-gray-900 text-lg' : 'text-gray-500 text-base'}`}>
            {item.name}
          </h4>
          <p className={`text-sm ${isCenter ? 'text-brand-600' : 'text-gray-400'}`}>
            {item.role}
          </p>
        </div>
      </div>

    </motion.div>
  );
};

export default TestimonialCard;