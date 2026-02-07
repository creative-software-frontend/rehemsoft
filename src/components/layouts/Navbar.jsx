import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router'; // Added Router imports
import Button from '../ui/Button';

// 1. Updated Data with real paths
const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Funding', path: '/funding' },
    { name: 'Product', path: '/product' },
    { name: 'Affiliate', path: '/affiliate' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Used to track the current active path

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

                    {/* Logo changed to Link */}
                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-[#db2777] uppercase tracking-wide select-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-sm"
                        aria-label="Rehem Soft Home"
                    >
                        REHEM SOFT
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8 ml-12">
                        {NAV_LINKS.map((link) => (
                            /* Nav Links changed to Link */
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium text-[15px] transition-colors duration-200 outline-none focus-visible:text-[#db2777] ${
                                    location.pathname === link.path ? 'text-[#db2777]' : 'text-gray-700 hover:text-[#db2777]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center space-x-4 ml-auto">
                        <Link to="/login"><Button className="px-6">Log in</Button></Link>
                        <Link to="/signup"><Button className="px-6">Sign Up</Button></Link>
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
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-16 left-0 w-full bg-white z-30 border-t border-pink-100 shadow-2xl lg:hidden flex flex-col h-auto max-h-[85vh] overflow-y-auto pb-6 rounded-b-2xl"
                    >
                        <div className="flex flex-col text-center pt-8 pb-4 px-6 space-y-2">
                            {NAV_LINKS.map((link) => (
                                /* Mobile Links changed to Link */
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block w-full py-3 px-4 text-lg font-semibold rounded-xl transition-all ${
                                        location.pathname === link.path 
                                        ? 'bg-pink-50 text-[#db2777]' 
                                        : 'text-gray-700 hover:bg-pink-50 hover:text-[#db2777]'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="px-6 pb-4 flex flex-col gap-3">
                            <Link to="/login" onClick={() => setIsOpen(false)}><Button className="w-full justify-center py-3">Log in</Button></Link>
                            <Link to="/signup" onClick={() => setIsOpen(false)}><Button className="w-full justify-center py-3">Sign Up</Button></Link>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;