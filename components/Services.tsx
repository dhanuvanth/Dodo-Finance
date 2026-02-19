import React, { useState } from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const servicesData = {
  australia: {
    title: "Australian Accounting Services",
    items: [
      "Bookkeeping and client mailbox management",
      "Payroll processing, including Single Touch Payroll (STP) reporting",
      "BAS / IAS reconciliation and preparation support",
      "Accounts payable and receivable processing and follow-ups",
      "Monthly management report preparation"
    ]
  },
  usa: {
    title: "USA Bookkeeping Services",
    items: [
      "Bookkeeping and general ledger maintenance",
      "Accounts payable and receivable processing",
      "Bank and credit card reconciliations",
      "Sales tax reconciliation and preparation support",
      "Monthly management report preparation"
    ]
  },
  uk: {
    title: "UK Bookkeeping Services",
    items: [
      "Bookkeeping and transaction processing",
      "Accounts payable and receivable management",
      "Bank reconciliations",
      "VAT return preparation support",
      "Monthly management report preparation"
    ]
  }
};

type CountryKey = keyof typeof servicesData;

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CountryKey>('australia');

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Tailored accounting solutions for specific markets.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { id: 'australia', label: 'Australia' },
            { id: 'usa', label: 'USA' },
            { id: 'uk', label: 'UK' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CountryKey)}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px] flex flex-col md:flex-row">
            
            {/* Left Side: Title & Icon */}
            <div className="bg-slate-900 md:w-2/5 p-10 flex flex-col justify-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
               
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <MapPin size={32} className="text-primary-300" />
                 </div>
                 <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {servicesData[activeTab].title}
                 </h3>
                 <p className="text-slate-400">
                    Comprehensive support tailored for {activeTab === 'usa' ? 'American' : activeTab === 'uk' ? 'British' : 'Australian'} businesses.
                 </p>
               </div>
            </div>

            {/* Right Side: List */}
            <div className="md:w-3/5 p-10 bg-white">
              <ul className="space-y-6">
                {servicesData[activeTab].items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;