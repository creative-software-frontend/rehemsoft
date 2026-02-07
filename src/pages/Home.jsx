import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import PricingSection from '../components/sections/PricingSection';
import FundingSection from '../components/sections/FundingSection';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FundingSection />
      <PricingSection />
      <Testimonials />
    </>
  );
};

export default Home;