import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const StatCard = ({ number, label }) => {
  // 1. Parse the string "100,250" into a raw number: 100250
  const numericValue = parseInt(number.replace(/,/g, ''), 10);

  // 2. Create a spring animation (starts at 0)
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });

  // 3. Transform the raw number back into a formatted string with commas
  const displayValue = useTransform(springValue, (value) => 
    Math.round(value).toLocaleString()
  );

  // 4. Trigger animation on mount
  useEffect(() => {
    springValue.set(numericValue);
  }, [springValue, numericValue]);

  return (
    <div className="bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
      <h3 className="text-2xl lg:text-3xl font-extrabold text-[#db2777] mb-1">
        {/* Render the animated value */}
        <motion.span>{displayValue}</motion.span>+
      </h3>
      <p className="text-gray-600 text-xs lg:text-sm font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default StatCard;