import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign } from 'lucide-react';
import RangeSlider from './RangeSlider';
import CalculatorStat from './CalculatorStat'; // <--- UPDATED IMPORT
import { LOAN_CONFIG } from '../../constants/fundingData';

const LoanCalculatorCard = ({ loanAmount, setLoanAmount }) => {
  
  // Logic: Calculate Fee and Total
  const calculations = useMemo(() => {
    const fee = Math.round(loanAmount * LOAN_CONFIG.feeRate);
    return { fee, total: loanAmount + fee };
  }, [loanAmount]);

  return (
    <div className="relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-200/30 via-purple-100/20 to-transparent rounded-full blur-3xl -z-10" />

      <motion.div 
        className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 relative overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> Available Now
            </div>
            <motion.h3 
              key={loanAmount} // Triggers animation on change
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              ${loanAmount.toLocaleString()}
            </motion.h3>
          </div>
          <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600">
            <TrendingUp size={24} />
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="mb-10">
          <RangeSlider 
            value={loanAmount}
            min={LOAN_CONFIG.min}
            max={LOAN_CONFIG.max}
            step={LOAN_CONFIG.step}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <p className="text-center text-xs text-pink-600 font-bold mt-4 uppercase tracking-wider">
            Slide to adjust amount
          </p>
        </div>

        {/* Stats Grid using the Renamed Component */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <CalculatorStat 
            label="Fixed Fee" 
            value={`$${calculations.fee.toLocaleString()}`} 
            subtext="12% Flat rate" 
          />
          <CalculatorStat 
            label="Total Repayment" 
            value={`$${calculations.total.toLocaleString()}`} 
          />
        </div>

        {/* Footer Info */}
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-pink-600 shrink-0 border border-gray-100">
             <DollarSign size={18} />
           </div>
           <div>
             <p className="text-sm font-bold text-gray-900">Automatic Repayment</p>
             <p className="text-xs text-gray-500 mt-0.5">
               Just {LOAN_CONFIG.repaymentRate}% of daily sales until paid.
             </p>
           </div>
        </div>
      </motion.div>
      
      {/* Floating 3D Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-5 -right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl font-bold text-xs hidden md:block rotate-3 z-10 border border-gray-700"
      >
        🚀 95% Approval
      </motion.div>
    </div>
  );
};

export default LoanCalculatorCard;