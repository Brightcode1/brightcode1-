import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Play, Layout, TrendingUp, Search, MapPin, 
  BarChart, MessageCircle, ChevronDown, Check, ArrowRight
} from 'lucide-react';
import CTA from '../components/sections/CTA';

const DigitalMarketing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      q: "Is the Ad Budget Included?",
      a: "No. Meta Ad Budget is charged separately and directly paid to Facebook/Instagram."
    },
    {
      q: "Can I Upgrade My Plan Later?",
      a: "Yes, you can upgrade or customize your plan anytime as your business grows."
    },
    {
      q: "How Long is the Contract?",
      a: "Our contracts run on a month-to-month basis. We believe in earning your business every month."
    },
    {
      q: "Will I Receive Monthly Reports?",
      a: "Yes. We provide detailed monthly analytics covering reach, engagement, and leads."
    },
    {
      q: "Do You Provide WhatsApp Support?",
      a: "Yes, we provide dedicated WhatsApp support for quick communication and updates."
    }
  ];

  const features = [
    {
      title: "Social Media Management",
      icon: Layout,
      items: ["Creative post designs", "Caption writing", "Hashtag research", "Content scheduling"]
    },
    {
      title: "Video Marketing",
      icon: Play,
      items: ["Professional short-form reels", "Trend research", "Engagement optimization"]
    },
    {
      title: "Meta Advertising",
      icon: TrendingUp,
      items: ["Facebook & Instagram Ads", "Audience targeting", "Campaign optimization", "Ad Budget handled separately"]
    },
    {
      title: "SEO",
      icon: Search,
      items: ["Basic On-page SEO", "Keyword Optimization", "Website Health Check", "Search Visibility Improvement"]
    },
    {
      title: "Google Business Profile",
      icon: MapPin,
      items: ["Business Profile Setup", "Optimization", "Regular Updates", "Local SEO Improvements"]
    },
    {
      title: "Reports & Support",
      icon: BarChart,
      items: ["Monthly analytics & growth insights", "WhatsApp Support", "Monthly Strategy Meeting", "Marketing Guidance"]
    }
  ];

  const trustPoints = [
    "Experienced Marketing Team", "Creative Content Strategy", "Performance-Based Approach", 
    "Transparent Monthly Reports", "Dedicated Support", "Affordable Pricing", 
    "Customized Marketing Plans", "Business Growth Focus"
  ];

  const processSteps = [
    "Free Consultation", "Business Analysis", "Marketing Strategy", "Content Planning",
    "Design & Approval", "Campaign Launch", "Weekly Optimization", "Monthly Reporting"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20"
          >
            Growth Accelerated
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-dark tracking-tight"
          >
            Digital Marketing <span className="text-primary">Packages</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed font-medium"
          >
            Affordable Digital Marketing Plans for Startups, Local Businesses, Schools, Clinics, Restaurants, Brands, and Growing Companies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed"
          >
            Grow your business with result-driven digital marketing services. From social media management and Meta Ads to SEO and Google Business Profile optimization, our monthly plans are designed to increase your online visibility, generate quality leads, and grow your brand.
          </motion.p>
        </div>
      </section>

      {/* Featured Pricing Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-1 bg-gradient-to-b from-primary/30 to-transparent"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary text-white text-sm font-bold rounded-full shadow-[0_4px_14px_rgba(91,94,245,0.4)] z-10 uppercase tracking-wider">
              Most Popular
            </div>
            
            <div className="bg-white rounded-[22px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ECECEC] relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500"></div>

              <div className="flex flex-col md:flex-row gap-12 justify-between items-center border-b border-[#ECECEC] pb-10 mb-10">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-dark mb-4">Starter Growth Package</h2>
                  <p className="text-gray-600 max-w-md">Perfect for small businesses looking to build a strong online presence and generate quality leads.</p>
                </div>
                <div className="text-center md:text-right shrink-0">
                  <div className="text-5xl font-black text-dark mb-2">₹15,000</div>
                  <div className="text-gray-500 font-medium">/ Month</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {[
                  "10 Professional Social Media Posts",
                  "4 High-Quality Reels",
                  "10–15 Instagram & Facebook Stories",
                  "Meta Ads Management (Ad Budget Extra)",
                  "Basic SEO Optimization",
                  "Google Business Profile Optimization",
                  "Monthly Performance Report",
                  "WhatsApp Support",
                  "Monthly Strategy Call"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 rounded-xl bg-primary hover:bg-secondary text-white font-semibold transition-all shadow-[0_4px_14px_rgba(91,94,245,0.3)] hover:shadow-[0_6px_20px_rgba(91,94,245,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Get Started <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 rounded-xl bg-white border-2 border-[#ECECEC] hover:border-primary/50 text-dark font-semibold transition-all hover:bg-gray-50">
                  Book Free Consultation
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Features */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Package Features in Detail</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to dominate your digital presence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[#ECECEC] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{feat.title}</h3>
                <ul className="space-y-3">
                  {feat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Why Choose BrightCode Digital?</h2>
            <p className="text-gray-600">Partner with an agency that prioritizes your ROI.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-[#ECECEC] text-center group hover:border-primary/30 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-semibold text-dark text-sm">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Process</h2>
            <p className="text-gray-600">A streamlined approach to scaling your business online.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-[#ECECEC] shadow-sm flex items-center justify-center text-xl font-black text-primary mb-4 relative z-10">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-dark">{step}</h4>
                {/* Connecting Line (hidden on mobile for simplicity, visible on desktop) */}
                {idx !== processSteps.length - 1 && idx !== 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent -z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-[#ECECEC] rounded-2xl bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-dark text-lg">{faq.q}</span>
                  <ChevronDown 
                    className={`text-gray-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Component handles the last part */}
      <div className="pb-20">
        <CTA 
          title="Ready to Grow Your Business?" 
          description="Let's build your online presence and generate more customers with a professional digital marketing strategy."
        />
      </div>

    </div>
  );
};

export default DigitalMarketing;
