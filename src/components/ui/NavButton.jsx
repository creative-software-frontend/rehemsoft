import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavButton = ({ direction, onClick, className = "" }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button 
      onClick={onClick} 
      className={`
        z-30 p-4 rounded-full bg-white shadow-lg 
        text-brand-600 hover:bg-brand-600 hover:text-white 
        transition-all duration-300 hidden md:flex 
        items-center justify-center border border-pink-100 shrink-0
        ${className}
      `}
      aria-label={`${direction} testimonial`}
    >
      <Icon size={28} />
    </button>
  );
};

export default NavButton;