import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl h-full space-y-8">
                <h3 className="text-2xl font-bold text-dark mb-6">Contact Information</h3>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Our Office</h4>
                    <p className="text-gray-600">817, pragti it park yogichowck surat -395006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">6352677911</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">digitalbrightcode@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">First Name *</label>
                    <input type="text" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Last Name *</label>
                    <input type="text" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Email Address *</label>
                    <input type="email" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Company Name</label>
                    <input type="text" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Project Details *</label>
                  <textarea rows="6" className="w-full bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-lg bg-primary hover:bg-secondary text-dark font-bold transition-all shadow-lg hover:shadow-primary/50">
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
