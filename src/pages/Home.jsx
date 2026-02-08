import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturesSection from '../components/sections/FeaturesSection';
import Testimonials from '../components/sections/Testimonials';
import PricingSection from '../components/sections/PricingSection';
import FundingSection from '../components/sections/FundingSection';
import Affiliate from './Affiliate';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <WhyChooseUs />
      <FundingSection />
      <PricingSection />
      <Testimonials />
      <Affiliate/>
    </>
  );
};

export default Home;