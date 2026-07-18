import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Technologies from '../components/sections/Technologies';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import Faq from '../components/sections/Faq';
import CTA from '../components/sections/CTA';

const Counter = ({ text }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const numMatch = text.match(/\d+/);
  const end = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = text.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView && end > 0) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 10);
      const step = Math.max(Math.ceil(end / (duration / stepTime)), 1);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return <span ref={ref}>{end > 0 ? `${count}${suffix}` : text}</span>;
};

const Stats = () => {
  const stats = [
    { value: '100+', label: 'Projects' },
    { value: '50+', label: 'Clients' },
    { value: '10+', label: 'Experts' },
    { value: '5+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];
  return (
    <section className="py-16 border-y border-[#ECECEC] glass bg-white border border-[#ECECEC] shadow-sm z-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-dark mb-2">
                <Counter text={stat.value} />
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <PortfolioPreview />
      <Faq />
      <CTA />
    </div>
  );
};

export default Home;
