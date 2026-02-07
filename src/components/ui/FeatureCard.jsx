import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  },
};

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0px 10px 30px rgba(219, 39, 119, 0.15)" }}
      className="group p-8 rounded-3xl bg-white border border-brand-100 shadow-lg shadow-brand-100/50 transition-all duration-300 flex flex-col items-start h-full"
    >
      {/* Icon Box */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-inner">
        <Icon size={28} strokeWidth={2} />
      </div>
      
      {/* Text Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
};

export default FeatureCard;