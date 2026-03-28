import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const servicesData = {
  australia: {
    title: "Australia",
    image: "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ=",
    flag: "🇦🇺",
    items: [
      "Bookkeeping and transaction processing",
      "BAS and GST return preparation support",
      "Payroll processing and STP compliance",
      "Accounts payable and receivable management",
      "Bank reconciliations"
    ]
  },
  usa: {
    title: "USA",
    image: "https://media.istockphoto.com/id/528725265/photo/central-park-aerial-view-manhattan-new-york.jpg?s=612x612&w=0&k=20&c=GYjpCp4MziKDE_fmYygwt6Cw7CztuiJavMz26E5kaVc=",
    flag: "🇺🇸",
    items: [
      "Bookkeeping and general ledger maintenance",
      "Accounts payable and receivable processing",
      "Bank and credit card reconciliations",
      "Sales tax reconciliation and preparation support",
      "Monthly management report preparation"
    ]
  },
  uk: {
    title: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww",
    flag: "🇬🇧",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Tailored accounting solutions for specific markets.
          </p>
        </motion.div>
      </div>

      {/* Tabs with full-width blue line */}
      <div className="relative mb-10">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-600" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex flex-wrap justify-center gap-4 py-4"
        >
          {[
            { id: 'australia', label: 'Australia', flag: '🇦🇺' },
            { id: 'usa', label: 'USA', flag: '🇺🇸' },
            { id: 'uk', label: 'UK', flag: '🇬🇧' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CountryKey)}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{tab.flag}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row"
            >
              
              {/* Left Side: Title & List */}
              <div className="md:w-2/5 p-10 flex flex-col">
                 <div className="flex items-center gap-4 mb-6">
                   <span className="text-4xl">{servicesData[activeTab].flag}</span>
                   <h3 className="text-3xl font-bold text-slate-900">
                      {servicesData[activeTab].title}
                   </h3>
                 </div>
                 
                 <div className="h-0.5 w-full bg-primary-100 mb-8"></div>

                 <ul className="space-y-5">
                   {servicesData[activeTab].items.map((item, index) => (
                     <li key={index} className="flex items-start gap-4">
                       <div className="flex-shrink-0 mt-1">
                           <CheckCircle2 className="w-5 h-5 text-primary-500" />
                       </div>
                       <span className="text-lg text-slate-700 font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* Right Side: Image */}
              <div className="md:w-3/5 h-[400px] md:h-auto min-h-[500px]">
                <img 
                  src={servicesData[activeTab].image} 
                  alt={servicesData[activeTab].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;