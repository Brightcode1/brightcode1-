import React from 'react';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import CTA from '../components/sections/CTA';

const PortfolioPage = () => {
  return (
    <div>
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our <span className="text-gradient">Portfolio</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our most innovative and impactful digital solutions.
          </p>
        </div>
      </section>
      
      <div className="pb-12">
        <PortfolioPreview />
      </div>
      <CTA />
    </div>
  );
};

export default PortfolioPage;
