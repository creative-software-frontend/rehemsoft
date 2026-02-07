import React from 'react';

const CalculatorStat = ({ label, value, subtext }) => (
  <div className="bg-gray-50/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 transition-all duration-300">
    <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">{label}</p>
    <p className="text-lg md:text-xl font-bold text-gray-900">{value}</p>
    {subtext && <p className="text-[10px] text-gray-400 mt-1">{subtext}</p>}
  </div>
);

export default CalculatorStat;