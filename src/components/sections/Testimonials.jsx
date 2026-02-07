import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { testimonials } from '../../constants/testimonialsData'; 
import TestimonialCard from '../ui/TestimonialCard';
import NavButton from '../ui/NavButton'; // Import the new button

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Auto-Slider Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); 
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // --- Helper to get visible cards ---
  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;
    return [testimonials[prevIndex], testimonials[activeIndex], testimonials[nextIndex]];
  };

  const visibleCards = getVisibleTestimonials();

  return (
    <section className="pt-6 lg:py-24 bg-brand-50 relative overflow-hidden">
      
      {/* Background Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-[100px] -z-0"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-0">
          <span className="text-[#db2777] font-bold tracking-wider uppercase text-sm bg-pink-100 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-6">
            Trusted by <span className="text-[#db2777]">100K+ Clients</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            See what our trusted clients are saying about their growth journey with Rehem Soft.
          </p>
        </div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative flex items-center justify-between min-h-[450px]">
          
          {/* 1. LEFT BUTTON (Clean & Reusable) */}
          <NavButton 
            direction="left" 
            onClick={handlePrev} 
            className="mr-4" // Add margin right to separate from cards
          />

          {/* 2. CARDS CONTAINER */}
          <div className="flex-1 flex items-center justify-center w-full relative overflow-hidden py-10">
            <div className="flex items-center justify-center gap-6 w-full">
               <AnimatePresence mode="popLayout">
                {visibleCards.map((item, index) => (
                  <TestimonialCard 
                    key={item.id}
                    item={item}
                    isCenter={index === 1} 
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* 3. RIGHT BUTTON (Clean & Reusable) */}
          <NavButton 
            direction="right" 
            onClick={handleNext} 
            className="ml-4" // Add margin left to separate from cards
          />

        </div>
        
        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 my-8 md:hidden">
          {testimonials.map((_, idx) => (
             <button 
               key={idx}
               onClick={() => setActiveIndex(idx)}
               className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-brand-600' : 'w-2.5 bg-brand-200'}`}
             />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;