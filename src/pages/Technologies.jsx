import React from 'react';
import Technologies from '../components/sections/Technologies';
import CTA from '../components/sections/CTA';

const TechnologiesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white text-center border-b border-[#ECECEC]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our <span className="text-gradient">Tech Stack</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We build future-proof solutions using industry-leading technologies.
          </p>
        </div>
      </section>
      
      <div className="pb-12">
        <Technologies />
      </div>
      <CTA />
    </div>
  );
};

export default TechnologiesPage;
