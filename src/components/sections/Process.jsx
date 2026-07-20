import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, PenTool, Code, CheckSquare, Rocket, Headphones } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Discovery', desc: 'Understanding your business goals, target audience, and project requirements.' },
  { icon: FileText, title: 'Planning', desc: 'Creating wireframes, choosing the tech stack, and mapping out the architecture.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Designing intuitive interfaces and engaging user experiences.' },
  { icon: Code, title: 'Development', desc: 'Writing clean, scalable code to build robust and performant solutions.' },
  { icon: CheckSquare, title: 'Testing', desc: 'Rigorous QA testing to ensure bug-free and secure applications.' },
  { icon: Rocket, title: 'Deployment', desc: 'Launching the product to live servers with zero downtime.' },
  { icon: Headphones, title: 'Support', desc: 'Continuous monitoring, maintenance, and feature updates.' }
];

const Process = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Proven <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            A systematic approach ensuring transparency, quality, and timely delivery at every stage of the development lifecycle.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-50 border border-[#ECECEC] rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <span className="text-dark font-bold">{index + 1}</span>
                </div>
                
                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
                >
                  <div className="glass-card p-6 rounded-2xl relative group hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                        <step.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-dark">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
