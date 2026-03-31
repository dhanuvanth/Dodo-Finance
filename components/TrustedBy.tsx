import React from 'react';

const logos = [
  '1.jpg.jpeg',
  '2.png',
  '3 (1).png',
  '3.png',
  '4.png',
  '4Jpg.png',
  '5 (1).png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-2xl font-bold text-slate-700 tracking-wide">
          Our Trusted Software Tools
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll items-center w-max">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 'calc(100vw / 5)', padding: '0 2rem' }}
            >
              <img
                src={`/Images/trustedBy/${logo}`}
                alt={`Partner ${(index % logos.length) + 1}`}
                className="h-20 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
