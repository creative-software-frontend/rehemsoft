import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../ui/StatCard';
import heroImage from '../../assets/hero_group.png'; 

const Hero = () => {
  // Shared data for all screen sizes
  const statsData = [
    { num: "100,250", lbl: "Total Members" },
    { num: "20,155", lbl: "Software Client" },
    { num: "502,366", lbl: "Rehem Visitors" }
  ];

  return (
    <div className="
      relative 
      w-full
      flex flex-col lg:flex-row items-center justify-center
      bg-gradient-to-b from-brand-50 to-brand-400
      /* Mobile = Auto height, Desktop = Shorter Fixed height (60vh) to show next section */
      h-auto pt-10 pb-20 lg:py-0
      lg:h-[60vh] lg:min-h-[500px]
    ">
      
      {/* BACKGROUND BLOB WRAPPER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-gradient-to-b from-pink-200 to-brand-600 rounded-full blur-[80px] lg:blur-[100px] translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">

        {/* --- LEFT SIDE: TEXT --- */}
        <div className="space-y-4 lg:space-y-5 text-center lg:text-left order-1 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="inline-block bg-[#db2777] text-white px-4 lg:px-5 py-1.5 text-xs lg:text-sm rounded-full font-bold shadow-lg hover:animate-pulse">
              Trusted By 100K +
            </div>
          </motion.div>

          {/* Reduced Font Size: xl:text-7xl -> xl:text-6xl */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-transparent mb-1"
              style={{ WebkitTextStroke: '1.5px #db2777', textShadow: '2px 2px 0px rgba(219, 39, 119, 0.1)' }}
            >
              REHEM SOFT
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#db2777] block"
            >
              SOFTWARE
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#db2777] block"
            >
              GROWING !
            </motion.span>
          </h1>
        </div>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <div className="relative flex justify-center lg:justify-end order-2 lg:mb-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-pink-300/30 blur-[50px] rounded-full -z-10"></div>
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }} 
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]" // Slightly smaller image
            >
               <motion.img 
                 src={heroImage}
                 alt="Rehem Soft Team"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                 className="w-full h-auto object-contain drop-shadow-2xl"
               />
            </motion.div>
        </div>

        {/* --- MOBILE STATS (Visible on Mobile & Tablet) --- */}
        <div className="lg:hidden w-full order-3 mt-4">
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               {statsData.map((stat, index) => (
                   <div key={index} className="shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm">
                      <StatCard number={stat.num} label={stat.lbl} />
                   </div>
               ))}
           </div>
        </div>

      </div>

      {/* --- DESKTOP STATS (Absolute Overhang - Hidden on Mobile) --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { delay: 1, duration: 0.8, staggerChildren: 0.2 } 
          }
        }}
        className="hidden lg:block absolute -bottom-16 left-0 right-0 z-30 px-6 w-full" 
      >
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="w-full"
            >
              <div className="shadow-2xl rounded-2xl bg-white">
                 <StatCard number={stat.num} label={stat.lbl} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;