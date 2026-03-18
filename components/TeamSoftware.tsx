import React from 'react';
import { Users, User } from 'lucide-react';
import { motion } from 'motion/react';

const teamMembers = [
  {
    name: "Sarah Mitchell",
    qualifications: "CA, CPA",
    role: "Senior Accountant",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "James Chen",
    qualifications: "CA, MBA",
    role: "Payroll Manager",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    name: "Emily Robertson",
    qualifications: "CA, B.Com",
    role: "Bookkeeping Manager",
    color: "bg-pink-100 text-pink-600"
  },
  {
    name: "Michael Patel",
    qualifications: "CA, ACA",
    role: "Tax Consultant",
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Priya Sharma",
    qualifications: "CA, ICAI",
    role: "BAS Specialist",
    color: "bg-purple-100 text-purple-600"
  }
];

const TeamSoftware: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-600 rounded-lg">
                <Users size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Our Team</h2>
            </div>
            <div className="text-lg text-slate-300 leading-relaxed mb-8 space-y-4">
              <p>
                Our team comprises experienced accounting professionals, including semi-qualified and qualified Chartered Accountants (CA) and Cost and Management Accountants (CMA), supported by senior accountants with over five years of relevant experience.
              </p>
              <p>
                We work as an extension of our clients’ teams, following established processes, systems, and quality standards to ensure accuracy, consistency, and timely delivery across all engagements.
              </p>
              <p>
                Through structured workflows, clear communication, and accountability, our team delivers reliable offshore accounting and back-office support that integrates seamlessly with onshore operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                 <div className="text-3xl font-bold text-primary-400 mb-1">CA & CMA</div>
                 <div className="text-sm text-slate-400">Qualified Professionals</div>
               </div>
               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                 <div className="text-3xl font-bold text-primary-400 mb-1">5+ Years</div>
                 <div className="text-sm text-slate-400">Senior Experience</div>
               </div>
            </div>
          </motion.div>

          {/* Team Picture Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-primary-500/20 blur-2xl rounded-full"></div>
            <img 
              src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Dodo Financials Team" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Team Profiles Section */}
        <div className="pt-16 border-t border-white/10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Team Profiles</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Meet the experts dedicated to your business success.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-xl p-5 text-center shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={`w-14 h-14 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner`}>
                  <User size={28} />
                </div>
                <h4 className="text-base font-serif font-bold text-slate-900 mb-1 leading-tight">{member.name}</h4>
                <p className="text-[10px] font-medium text-slate-500 mb-2 uppercase tracking-wider">{member.qualifications}</p>
                <p className={`text-[11px] font-bold uppercase tracking-wide ${member.color.split(' ')[1].replace('600', '500')}`}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSoftware;