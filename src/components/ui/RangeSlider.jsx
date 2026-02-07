import React from 'react';

const RangeSlider = ({ value, min, max, step, onChange, className = "" }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-xs font-bold text-gray-400 mb-4 tracking-wide">
        <span>${min.toLocaleString()}</span>
        <span>${max.toLocaleString()}</span>
      </div>
      
      <div className="relative w-full h-3 bg-gray-100 rounded-full">
        <div 
          className="absolute h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full pointer-events-none"
          style={{ width: `${percentage}%` }}
        />
        <input 
          type="range" 
          min={min} 
          max={max} 
          step={step}
          value={value}
          onChange={onChange}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-4 border-pink-500 rounded-full shadow-lg pointer-events-none transition-all duration-75 ease-out"
          style={{ left: `calc(${percentage}% - 14px)` }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;