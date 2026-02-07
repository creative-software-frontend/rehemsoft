import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const styles = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg border-none",
    secondary: "bg-white text-brand-600 border border-brand-200 hover:bg-brand-50",
    ghost: "bg-transparent text-gray-700 hover:text-brand-600 shadow-none"
  };

  return (
    <button 
      className={`btn rounded-full px-8 font-bold tracking-wide capitalize h-11 min-h-[44px] ${styles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;