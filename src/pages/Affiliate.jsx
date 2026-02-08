import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Users, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';

const Affiliate = () => {
  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: "High Commission", desc: "Earn up to 20% commission on every successful referral." },
    { icon: <Users className="w-6 h-6" />, title: "Easy Tracking", desc: "Access a dedicated dashboard to track your clicks and earnings." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Growth Support", desc: "Get marketing materials and support to help you scale." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Reliable Payouts", desc: "Get paid on time, every time, directly to your bank account." },
  ];

  return (
    <div className="pt-10 pb-20 bg-page-gradient">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <section className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-600 font-bold tracking-widest uppercase text-sm bg-brand-50 px-4 py-1.5 rounded-full"
          >
            Partner with Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-text-heading mt-6 mb-8"
          >
            Join the Rehem Soft <br />
            <span className="text-brand-600">Affiliate Program</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto mb-10"
          >
            Earn competitive commissions by referring our professional software solutions to your network. It’s free to join and easy to start.
          </motion.p>
          <Button className="px-10 py-4 text-lg shadow-xl shadow-brand-100">Become an Affiliate</Button>
        </section>

        {/* --- Benefits Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-brand-100 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- CTA Section --- */}
        <section className="bg-brand-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start earning?</h2>
            <p className="text-brand-100 mb-10 max-w-xl mx-auto">
              Sign up today and start your journey with Rehem Soft. Our team is here to help you every step of the way.
            </p>
            <Button className="!bg-white !text-brand-600 hover:bg-brand-50 px-12 py-4">Create Your Account</Button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-[-50%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </section>

      </div>
    </div>
  );
};

export default Affiliate;