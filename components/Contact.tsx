import React from 'react';
import { Mail, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase mb-2">Contact Us</h2>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to build a reliable offshore support model for your business? Get in touch with Dodo Financials to discuss how our offshore accounting and back-office services can support your firm’s operations and growth.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Reach out to us via email to partner with Dodo Financials.
                </p>

                <div className="space-y-8">
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
              </div>

              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80" 
                  alt="Contact Support" 
                  className="w-full h-full object-cover rounded-2xl opacity-90 shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;