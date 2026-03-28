import React from 'react';
import { ShieldCheck, Users, Lock, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

const Security: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-[#0a1628] py-16 px-8 md:px-16"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

export default Security;
