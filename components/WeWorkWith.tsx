import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const workWithData = {
  cpa: {
    title: "CPA Firms & Accountants",
    icon: "",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
    description: "We provide reliable white-label offshore support to CPA firms and accounting practices, covering bookkeeping, payroll, BAS, and tax preparation. Our team integrates seamlessly with your systems and workflows, helping you improve turnaround times, maintain accuracy, and scale your practice without increasing onshore workload.",
  },
  cfo: {
    title: "CFOs & Finance Heads",
    icon: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
    description: "Balancing financial operations with strategic leadership can be demanding. Our offshore team supports your finance function by managing transactional processes, ensuring compliance, and delivering accurate, timely reports—enabling you to focus on decision-making, performance, and business growth.",
  },
  business: {
    title: "Business Owners & Growing Companies",
    icon: "",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
    description: "Running a business requires constant focus across operations, finance, and growth. We support business owners with dependable accounting, payroll, and financial reporting, providing clear financial visibility and ensuring compliance—so you can make informed decisions and scale with confidence.",
  },
};

type WorkWithKey = keyof typeof workWithData;

const WeWorkWith: React.FC = () => {
  const [activeTab, setActiveTab] = useState<WorkWithKey>('cpa');

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
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Who We Serve</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            We Work With
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Trusted support for firms, finance leaders, and growing businesses.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { id: 'cpa', label: 'CPA Firms & Accountants' },
            { id: 'cfo', label: 'CFOs & Finance Heads' },
            { id: 'business', label: 'Business Owners' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as WorkWithKey)}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

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
              {/* Left Side: Title & Description */}
              <div className="md:w-2/5 p-10 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {workWithData[activeTab].title}
                  </h3>
                </div>

                <div className="h-0.5 w-full bg-primary-100 mb-8"></div>

                <p className="text-lg text-slate-700 leading-relaxed">
                  {workWithData[activeTab].description}
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="md:w-3/5 h-[400px] md:h-auto min-h-[500px]">
                <img
                  src={workWithData[activeTab].image}
                  alt={workWithData[activeTab].title}
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

export default WeWorkWith;
