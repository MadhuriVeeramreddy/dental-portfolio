"use client";
import { GiTooth } from "react-icons/gi";

export default function PortfolioStats() {
  const stats = [
    {
      number: "10000+",
      label: "smiles transformed with precision care",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      number: "100%",
      label: "patient satisfaction rate achieved",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      number: "15+",
      label: "years of surgical expertise",
      icon: <GiTooth className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="bg-gray-50  relative overflow-hidden">
      <div className="container bg-[url('/images/background.jpg')] bg-cover bg-center bg-no-repeat pt-32 pb-10 lg:pt-20 lg:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary/20 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-normal text-dark satoshi-font leading-tight">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <p className="text-lg lg:text-xl text-gray-600 satoshi-font leading-relaxed font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
