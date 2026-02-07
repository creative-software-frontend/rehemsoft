import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/sections/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs';
import FeaturesSection from './components/sections/FeaturesSection';
import Testimonials from './components/sections/Testimonials';
import PricingSection from './components/sections/PricingSection';
import FundingSection from './components/sections/FundingSection';
function App() {
  return (
    <MainLayout>
      <Hero />
      <FeaturesSection />
      <WhyChooseUs />
      <Testimonials />
      <PricingSection />
      <FundingSection />
  
    </MainLayout>
  );
}

export default App;