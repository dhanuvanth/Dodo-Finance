import React from 'react';
import { ShieldCheck, Users, Lock, ClipboardCheck, Landmark, DollarSign, ArrowUpDown, Zap, ClipboardList, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const whyCards = [
  {
    icon: <Landmark size={22} className="text-white" />,
    title: "Dedicated to U.S. CPAs",
    description: "Our deep knowledge of American accounting standards, tax laws, and audit requirements ensures seamless integration.",
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

        {/* Why Choose Us Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
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
                {/* Top accent bar */}
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

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-[#0a1628] py-16 px-8 md:px-16"
        >
          {/* Subtle radial glow at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <span className="inline-block border border-blue-400/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                Security
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Security & Compliance
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                We understand that client data is highly sensitive. Our systems and processes are built to ensure strong data protection and confidentiality.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our practices are aligned with global standards including ISO 27001, SOC 2, and GDPR to ensure secure and compliant operations.
              </p>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <ShieldCheck size={24} className="text-blue-300" />,
                  title: "Triple-Layer Security",
                  description: "Infrastructure, application, and operational safeguards",
                },
                {
                  icon: <Users size={24} className="text-blue-300" />,
                  title: "Role-Based Access Controls",
                  description: "Secure, role-specific data access with regular monitoring",
                },
                {
                  icon: <Lock size={24} className="text-blue-300" />,
                  title: "Encryption & Secure Access",
                  description: "Data encryption and VPN-enabled secure connections",
                },
                {
                  icon: <ClipboardCheck size={24} className="text-blue-300" />,
                  title: "Continuous Audits & Backups",
                  description: "Regular system audits and data backups",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDodo;
