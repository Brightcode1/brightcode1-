import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'Bootstrap']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', '.NET', 'Java']
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Mobile Apps',
    items: ['Flutter', 'React Native']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Firebase']
  }
];

const Technologies = () => {
  return (
    <section className="py-12 bg-white border border-[#ECECEC] shadow-sm glass border-y border-[#ECECEC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Technologies We <span className="text-gradient">Master</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            We utilize the latest and most robust tech stacks to ensure your digital products are fast, secure, and highly scalable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-dark mb-6 border-b border-[#ECECEC] pb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white border border-[#ECECEC] shadow-sm rounded-md text-gray-600 text-sm hover:text-dark hover:bg-primary/20 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
