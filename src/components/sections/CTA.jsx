import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'success' && (
                  <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.firstName ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="John" />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.lastName ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="Doe" />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="john@example.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Contact Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.phone ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="1234567890" maxLength="10" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.address ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="123 Main St, City" />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Company Name (Optional)</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-[#ECECEC] shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Project Details *</label>
                  <textarea rows="5" name="details" value={formData.details} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors resize-none ${errors.details ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="Tell us about your project..."></textarea>
                  {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                </div>
                
                <button type="submit" disabled={status === 'loading' || !isFormValid} className="w-full py-4 rounded-lg bg-primary hover:bg-secondary text-dark font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending...' : 'Send Message'} {!status === 'loading' && <ArrowRight size={20} />}
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
