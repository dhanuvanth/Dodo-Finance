import React from 'react';
import { Target, ShieldCheck, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="mb-10">
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase mb-2">Who We Are</h2>
              <p className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                About Dodo Financials
              </p>
              <div className="h-1 w-20 bg-primary-500 mt-4 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                Dodo Financials provides professional offshore accounting and back-office support services to Australian boutique accounting practices and select international businesses. We support accounting firms with offshore accounting preparation, working as an extension of their team so onshore staff can focus on review, client relationships, and final sign-off. Our services are delivered with a strong focus on accuracy, consistency, confidentiality, and compliance.
              </p>
              <p>
                By combining skilled accounting professionals with structured processes and secure, cloud-based systems, we help practices manage workload peaks, improve operational efficiency, and scale sustainably without increasing onshore headcount. At Dodo Financials, we focus on building long-term partnerships by delivering dependable offshore support that strengthens firm capacity and enables sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                        <Globe2 size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Global Standards</h3>
                </div>
                <p className="text-slate-600 text-sm">Following established processes and quality standards.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                        <Target size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Efficiency</h3>
                </div>
                <p className="text-slate-600 text-sm">Manage workload peaks and scale sustainably.</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-primary-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-slate-100 rounded-2xl -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" 
                    alt="Dodo Financials Team" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8">
                    <div className="flex items-center gap-2 text-white/90">
                        <ShieldCheck className="text-primary-400" />
                        <span className="font-medium">Secure & Confidential Service</span>
                    </div>
                </div>
            </div>

            {/* Floating Card */}
            <div className="absolute top-1/2 -right-8 lg:-right-12 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</span>
                </div>
                <div className="text-slate-900 font-bold leading-tight">Accepting New Clients</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;