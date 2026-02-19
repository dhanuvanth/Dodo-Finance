import React from 'react';
import { Users, FileSpreadsheet, Cloud, BookOpen } from 'lucide-react';

const TeamSoftware: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Team Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-600 rounded-lg">
                <Users size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Team</h2>
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
          </div>

          {/* Software Section */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Software Experience</h3>
              <p className="text-slate-400">We are proficient in leading accounting platforms.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Xero", icon: BookOpen },
                { name: "QuickBooks", icon: BookOpen },
                { name: "MYOB", icon: BookOpen },
                { name: "Excel", icon: FileSpreadsheet },
                { name: "Cloud Tools", icon: Cloud },
              ].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <tool.icon className="text-primary-400" size={20} />
                  <span className="font-semibold">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSoftware;