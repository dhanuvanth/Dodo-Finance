import React from 'react';
import { Landmark, DollarSign, ArrowUpDown, Zap, ClipboardList, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const whyCards = [
  {
    icon: <Landmark size={22} className="text-white" />,
    title: "Expert Financial Insights",
    description: "Leveraging deep knowledge of accounting standards, tax regulations, and industry practices, we provide tailored solutions that drive growth and ensure compliance.",
  },
  {
    icon: <DollarSign size={22} className="text-white" />,
    title: "Up to 60% Cost Savings",
    description: "Save on payroll, benefits, office space, and technology overhead. Free up resources to focus business development.",
  },
  {
    icon: <ArrowUpDown size={22} className="text-white" />,
    title: "Scalable Staffing",
    description: "Leverage time-zone differences for around-the-clock productivity. Scale up and scale down according to the workload.",
  },
  {
    icon: <Zap size={22} className="text-white" />,
    title: "Fast Onboarding (48 Hours)",
    description: "Our streamlined onboarding process transfers your work and integrates our systems within two business days.",
  },
  {
    icon: <ClipboardList size={22} className="text-white" />,
    title: "Layered Quality Reviews",
    description: "Every deliverable undergoes multi-tier reviews (similar to a four-eyed review) to ensure accuracy and compliance.",
  },
  {
    icon: <Settings size={22} className="text-white" />,
    title: "Technology & Automation",
    description: "Utilise cloud accounting software, automation tools, and real-time dashboards for transparency and efficiency.",
  },
];

const WhyDodo: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="inline-block border border-slate-300 text-slate-600 text-sm font-medium px-5 py-2 rounded-full mb-4">
              How We Work
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0f0f3d] sm:text-4xl">
              Why Choose Dodo Financials?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-gradient-to-br from-[#f0f0ff] to-white rounded-2xl border border-[#e0e0f5] p-8 group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute top-0 left-8 w-10 h-1 bg-[#1a1a6e] rounded-b-full" />

                <div className="flex items-center gap-4 mb-4 mt-2">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#1a1a6e] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0f0f3d]">{card.title}</h3>
                </div>

                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDodo;
