import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../ui/Button'; // Assuming you have this based on file structure
import LoanCalculatorCard from '../ui/LoanCalculatorCard';
import { FUNDING_CONTENT, LOAN_CONFIG } from '../../constants/fundingData';

const FundingSection = () => {
    const [loanAmount, setLoanAmount] = useState(LOAN_CONFIG.defaultAmount);

    return (
    

        <section className="pt-10 pb-24 md:pt-16 md:pb-32 bg-gradient-to-b from-white to-brand-50 relative overflow-hidden">

        
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

             
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-pink-600 font-bold tracking-widest uppercase text-xs bg-pink-50 border border-pink-100 px-4 py-2 rounded-full mb-8 inline-block">
                            {FUNDING_CONTENT.badge}
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                            {FUNDING_CONTENT.headline.start} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
                                {FUNDING_CONTENT.headline.highlight}
                            </span>
                        </h2>

                        <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg">
                            {FUNDING_CONTENT.description}
                        </p>

                        {/* Benefits List */}
                        <ul className="space-y-5 mb-12">
                            {FUNDING_CONTENT.benefits.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-start group"
                                >
                                    <div className="bg-pink-100/50 p-1.5 rounded-full mr-4 shrink-0 mt-0.5 group-hover:bg-pink-500 transition-colors duration-300">
                                        <CheckCircle className="text-pink-600 group-hover:text-white transition-colors duration-300" size={16} />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                        {item.text}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Replace your existing button div with this: */}
                        <div className="flex flex-wrap gap-4">
                            <Button className="rounded-full pl-8 pr-2 py-2 h-auto text-lg bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-200 hover:shadow-brand-300 transition-all">
                                <span className="mr-4">{FUNDING_CONTENT.ctaText}</span>
                                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                                    <ArrowRight size={20} />
                                </span>
                            </Button>
                        </div>
                    </motion.div>

                    {/* --- RIGHT: The Interactive Calculator --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:pl-10"
                    >
                        <LoanCalculatorCard
                            loanAmount={loanAmount}
                            setLoanAmount={setLoanAmount}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FundingSection;