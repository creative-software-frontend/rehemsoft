import React from 'react';
import { motion } from 'framer-motion';
import { Star, Bookmark, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './Button'; 

const ServiceCard = ({ service }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="bg-white rounded-3xl p-4 shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl hover:shadow-brand-100/50 transition-all duration-300 flex flex-col h-full group"
  >
    {/* Image Area - Poster Style (3:4 Ratio) */}
    <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[3/4]">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      {/* Floating Rating Badge */}
      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
        <Star size={14} className="text-yellow-400 fill-yellow-400" />
        <span className="text-xs font-bold text-gray-900">{service.rating}</span>
        <span className="text-[10px] text-gray-400">({service.reviews})</span>
      </div>

      {/* Bookmark Icon */}
      <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-600 transition-all duration-300">
          <Bookmark size={14} />
      </button>
    </div>

    {/* Card Body */}
    <div className="flex flex-col flex-1">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{service.category}</p>
      </div>

      {/* Features List */}
      <div className="space-y-2 mb-6 border-t border-gray-50 pt-4">
        {service.features.map((feat, i) => (
          <div key={i} className="flex items-center text-gray-500 text-xs font-medium">
            <CheckCircle2 size={12} className="text-brand-400 mr-2 shrink-0" />
            <span className="truncate">{feat}</span>
          </div>
        ))}
      </div>

      {/* Footer: Price & Action */}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400 font-semibold uppercase">Starting at</p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-gray-900">${service.price}</span>
            <span className="text-xs text-gray-400 font-medium">/{service.unit}</span>
          </div>
        </div>
        
        <Button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl shadow-lg shadow-brand-200 text-xs font-bold flex items-center gap-2 h-auto">
          Get Demo <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;