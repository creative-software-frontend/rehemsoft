import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard';
import featureImage from '../../assets/hero_group.png'; 

// IMPORT THE DATA HERE
import { features } from '../../constants/whyChooseUsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="pt-6 lg:pt-24 pb-24 bg-gradient-to-b from-white to-brand-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Grid: 2 Columns (Left: Content, Right: Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: Text Header + Hero Image --- */}
          <div className="space-y-10">
            {/* 1. Text Block */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Why choose <span className="text-brand-600">Rehem Soft?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Built specifically for retail professionals to save time, stay organized, and close more deals with less effort.
              </p>
            </motion.div>

            {/* 2. Image Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-600/10 border-4 border-white"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-brand-900/10 to-transparent pointer-events-none"></div>
               <img 
                 src={featureImage} 
                 alt="Team working on Rehem Soft" 
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               />
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: The Feature Grid (2x2) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((item, index) => (
              <FeatureCard 
                key={index}
                {...item} 
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;