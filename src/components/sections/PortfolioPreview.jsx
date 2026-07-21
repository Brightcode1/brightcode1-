import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  { id: 1, category: 'Website', title: 'FinTech Dashboard', tech: 'React, Tailwind, Node.js', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, category: 'App', title: 'HealthCare Mobile App', tech: 'Flutter, Firebase', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, category: 'ERP', title: 'Manufacturing ERP', tech: 'Next.js, PostgreSQL', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, category: 'Marketing', title: 'Global SEO Campaign', tech: 'SEO, Google Ads', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { id: 5, category: 'CRM', title: 'Real Estate CRM', tech: 'React, .NET', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop' },
  { id: 6, category: 'Website', title: 'E-Learning Platform', tech: 'React, Express', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop' },
];

const categories = ['All', 'Website', 'App', 'ERP', 'CRM', 'Marketing'];

const PortfolioPreview = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-24 relative overflow-hidden bg-lightBg">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-gray-200 text-dark font-semibold text-sm mb-6 shadow-sm"
            >
              Selected Works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight text-dark"
            >
              Our Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl font-light"
            >
              Explore some of our best projects that have driven success for our clients worldwide.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-2 lg:justify-end relative z-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-dark text-white shadow-[0_10px_20px_rgba(15,23,42,0.2)] scale-105' 
                    : 'bg-white border border-gray-200 shadow-sm text-gray-600 hover:bg-gray-50 hover:text-dark hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 cursor-pointer border border-gray-100"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
                  
                  {/* Premium Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-semibold uppercase tracking-wider mb-3 border border-white/20">
                        {item.category}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.tech}</p>
                      
                      <div className="flex items-center gap-2 text-white/90 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                        View Case Study
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-primary group-hover:border-primary transition-colors">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
