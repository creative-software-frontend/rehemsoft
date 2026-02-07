import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {motion,  AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

// 1. Static Data
const NAV_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Funding', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Affiliate', href: '#' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => window.innerWidth >= 1024 && setIsOpen(false);
        const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);

        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <nav
                className="w-full py-4 bg-white/90 backdrop-blur-sm border-b border-pink-200 shadow-sm sticky top-0 z-40 transition-all"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center h-16">

                    <a
                        href="#"
                        className="text-2xl font-extrabold text-[#db2777] uppercase tracking-wide select-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-sm"
                        aria-label="Rehem Soft Home"
                    >
                        REHEM SOFT
                    </a>

                    <div className="hidden lg:flex items-center space-x-8 ml-12">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium text-[15px] hover:text-[#db2777] transition-colors duration-200 outline-none focus-visible:text-[#db2777]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center space-x-4 ml-auto">
                        <Button className="px-6">Log in</Button>
                        <Button className="px-6">Sign Up</Button>
                    </div>

                    <button
                        className="lg:hidden text-gray-700 p-2 hover:bg-pink-50 rounded-md transition-colors focus:outline-none ml-auto"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        // UPDATED ANIMATION: Slide from Right to Left
                        initial={{ x: '100%' }}     // Start off-screen to the right
                        animate={{ x: 0 }}          // Slide to normal position
                        exit={{ x: '100%' }}        // Slide back out to the right
                        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring physics
                        
                        className="fixed top-16 left-0 w-full bg-white z-30 border-t border-pink-100 shadow-2xl lg:hidden flex flex-col h-auto max-h-[85vh] overflow-y-auto pb-6 rounded-b-2xl"
                    >
                        
                        <div className="flex flex-col text-center pt-8 pb-4 px-6 space-y-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block w-full py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-50 hover:text-[#db2777] rounded-xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="px-6 pb-4 flex flex-col gap-3">
                            <Button className="w-full justify-center py-3">Log in</Button>
                            <Button className="w-full justify-center py-3">Sign Up</Button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;