import React, { useState } from 'react';
import Button from './Button';
import { Mail, Clock, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will be in touch shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase mb-2">Contact Us</h2>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to build a reliable offshore support model for your business? Get in touch with Dodo Financials to discuss how our offshore accounting and back-office services can support your firm’s operations and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Reach out to us via email or form to partner with Dodo Financials.
              </p>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 group-hover:bg-primary-100 transition-colors rounded-full flex items-center justify-center text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Email Us</h4>
                    <a href="mailto:info@dodofinancials.com" className="text-slate-600 hover:text-primary-600 transition-colors">
                      info@dodofinancials.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 group-hover:bg-primary-100 transition-colors rounded-full flex items-center justify-center text-primary-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday</p>
                    <p className="text-slate-600">9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 group-hover:bg-primary-100 transition-colors rounded-full flex items-center justify-center text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Call Us</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80" 
                    alt="Contact Support" 
                    className="w-full h-48 object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                  />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-12">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
                <Send className="text-primary-200" size={32} />
             </div>
             
             <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="john@company.com"
                    />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-2">
                  <Button type="submit" fullWidth className="gap-2 text-lg shadow-md hover:shadow-lg">
                    Get in Touch
                    <Send size={18} />
                  </Button>
              </div>
            </form>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;