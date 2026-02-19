import React from 'react';
import { Check, X } from 'lucide-react';
import { ComparisonCard } from '../types';

const features = [
  "Experienced international accounting professionals",
  "Strong focus on accuracy and compliance",
  "Secure handling of financial data",
  "Flexible and scalable support",
  "Familiar with Australian, UK, and USA accounting practices"
];

const cards: ComparisonCard[] = [
  {
    title: "Traditional In-House Accountant",
    features: [
      "Full-time salary & benefits",
      "Office space & overheads",
      "Limited scalability",
      "Fixed monthly cost"
    ],
    priceModel: "High Fixed Cost"
  },
  {
    title: "Local Accounting Firm",
    features: [
      "Higher hourly rates",
      "Long-term contracts",
      "Limited flexibility",
      "Cost increases with workload"
    ],
    priceModel: "High Variable Cost"
  },
  {
    title: "Dodo Financials (Our Model)",
    features: [
      "Skilled accounting professionals",
      "No hiring or infrastructure cost",
      "Flexible, scalable support",
      "Cost-efficient without quality compromise"
    ],
    highlight: true,
    priceModel: "Best Value"
  }
];

const WhyDodo: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us List */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose Dodo Financials
            </h2>
          </div>
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Smarter Accounting Support Comparison */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Smarter & Cost-Efficient Accounting Support
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Dodo Financials follows a smarter accounting support model that helps businesses reduce operational costs while maintaining professional standards and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl transition-all duration-300 ${
                  card.highlight 
                    ? 'bg-white shadow-2xl border-2 border-primary-500 scale-105 z-10' 
                    : 'bg-slate-50 shadow-md border border-slate-200 hover:shadow-lg'
                }`}
              >
                {card.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider">
                    Best Value
                  </div>
                )}
                
                <div className="p-8">
                  <h4 className={`text-xl font-bold mb-4 ${card.highlight ? 'text-primary-700' : 'text-slate-800'}`}>
                    {card.title}
                  </h4>
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      card.highlight ? 'bg-primary-100 text-primary-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {card.priceModel}
                    </span>
                  </div>
                  
                  <ul className="space-y-4">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        {card.highlight ? (
                          <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                        ) : (
                          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          </div>
                        )}
                        <span className={`text-sm ${card.highlight ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDodo;