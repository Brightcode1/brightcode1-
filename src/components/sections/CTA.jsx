import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden border-primary/20">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to start your <br/><span className="text-gradient">digital journey?</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                  Let's discuss how BrightCode Digital can help you achieve your business goals with cutting-edge technology.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Mail size={18} />
                    </div>
                    <span>digitalbrightcode@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Phone size={18} />
                    </div>
                    <span>6352677911</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="bg-white border border-[#ECECEC] shadow-sm p-10 md:p-16 border-l border-[#ECECEC]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">First Name</label>
                    <input type="text" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Last Name</label>
                    <input type="text" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Email Address</label>
                  <input type="email" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Message</label>
                  <textarea rows="4" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 rounded-lg bg-primary hover:bg-secondary text-dark font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
