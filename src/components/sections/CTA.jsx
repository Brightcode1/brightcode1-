import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    details: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.details.trim()) newErrors.details = 'Project Details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return; 
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          company: formData.company,
          message: formData.details
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', address: '', company: '', details: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.address && formData.details;

  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[150px] -z-10 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRTZFNkU2IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQwIDAgNDAgNDAgMCA0MCIvPjwvZz48L3N2Zz4=')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="grid lg:grid-cols-5">
            
            {/* Left Content */}
            <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs mb-8 backdrop-blur-md">
                  <Sparkles size={14} className="text-accent" />
                  Let's Collaborate
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-white tracking-tight">
                  Ready to start your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital journey?</span>
                </h2>
                <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-sm font-light">
                  Let's discuss how BrightCode Digital can help you achieve your business goals with cutting-edge technology.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-5 text-gray-300 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors">digitalbrightcode@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-5 text-gray-300 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors">6352677911</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3 bg-white p-10 md:p-16 border-l border-white/10 relative">
              <motion.form 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-5 mb-6 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-green-500" />
                      Thank you! Your message has been sent successfully. We will get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-5 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={`peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors placeholder-transparent ${errors.firstName ? 'border-red-500' : ''}`} placeholder="John" />
                    <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">First Name *</label>
                    {errors.firstName && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.firstName}</p>}
                  </div>
                  <div className="relative group">
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className={`peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors placeholder-transparent ${errors.lastName ? 'border-red-500' : ''}`} placeholder="Doe" />
                    <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">Last Name *</label>
                    {errors.lastName && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group mt-2">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors placeholder-transparent ${errors.email ? 'border-red-500' : ''}`} placeholder="john@example.com" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">Email Address *</label>
                    {errors.email && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.email}</p>}
                  </div>
                  <div className="relative group mt-2">
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors placeholder-transparent ${errors.phone ? 'border-red-500' : ''}`} placeholder="1234567890" maxLength="10" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">Contact Number *</label>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.phone}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group mt-2">
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors placeholder-transparent ${errors.address ? 'border-red-500' : ''}`} placeholder="123 Main St, City" />
                    <label htmlFor="address" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">Address *</label>
                    {errors.address && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.address}</p>}
                  </div>
                  <div className="relative group mt-2">
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Your Company Ltd." />
                    <label htmlFor="company" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">Company Name (Optional)</label>
                  </div>
                </div>

                <div className="relative group mt-4">
                  <textarea id="details" rows="3" name="details" value={formData.details} onChange={handleChange} className={`peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-dark focus:outline-none focus:border-primary transition-colors resize-none placeholder-transparent ${errors.details ? 'border-red-500' : ''}`} placeholder="Tell us about your project..."></textarea>
                  <label htmlFor="details" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary font-medium cursor-text">Project Details *</label>
                  {errors.details && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.details}</p>}
                </div>
                
                <div className="pt-6">
                  <button type="submit" disabled={status === 'loading' || !isFormValid} className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary py-4 text-white font-semibold flex justify-center items-center gap-2 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1">
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    <span className="relative z-10">{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    {!status === 'loading' && <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </motion.form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
