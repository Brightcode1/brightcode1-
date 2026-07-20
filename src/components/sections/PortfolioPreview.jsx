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
    <section className="py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Explore some of our best projects that have driven success for our clients worldwide.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-dark shadow-[0_0_10px_rgba(37,99,235,0.4)]' 
                    : 'bg-white border border-[#ECECEC] shadow-sm text-gray-600 hover:bg-gray-50 border border-[#ECECEC] hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden glass-card aspect-video cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent text-sm font-semibold mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.tech}</p>
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
