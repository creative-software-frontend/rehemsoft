import React from 'react';

// 1. Import your local images (1.jpeg to 9.jpeg)
import img1 from '../../assets/1.jpeg';
import img2 from '../../assets/2.jpeg';
import img3 from '../../assets/3.jpeg';
import img4 from '../../assets/4.jpeg';
import img5 from '../../assets/5.jpeg';
import img6 from '../../assets/6.jpeg';
import img7 from '../../assets/7.jpeg';
import img8 from '../../assets/8.jpeg';
import img9 from '../../assets/9.jpeg';

// 2. Create the array containing all 9 images
const FEATURE_IMAGES = [
  img1, img2, img3, 
  img4, img5, img6, 
  img7, img8, img9
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
        
  
        <div className="text-center max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">
            What is <span className="text-[#db2777]">REHEM SOFT ?</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
            We’re a smart POS solution trusted by businesses to sell faster, manage inventory, 
            and grow with confidence powered by reliable, all-in-one technology.
          </p>
        </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURE_IMAGES.map((imageSrc, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
            >
              <img 
                src={imageSrc} 
                alt={`Feature ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Optional: Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;