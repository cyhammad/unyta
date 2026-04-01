"use client";

import { motion } from "motion/react";

export const WhyChooseUs = () => {
  const reasonFeatures = [
    {
      title: "Audience Authenticity Checks",
      desc: "We verify engagement rates and audience quality to ensure genuine partnerships.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: "Global Market Reach",
      desc: "Connect with creators and brands all over the world.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      title: "Collaboration & Safety Policies",
      desc: "Our community guidelines ensure reliability and accountability for all members.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      title: "Dedicated Support & Consulting",
      desc: "Get personalized help with premium support options and add-on consulting services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#24000C] flex flex-col items-center justify-center py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-cormorant text-[36px] md:text-[48px] uppercase font-medium text-white mb-4">
            WHY CHOOSE US?
          </h2>
          <p className="font-sans font-light text-white/70 text-base md:text-lg">
            Trust and transparency are at the core of Unyta.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-6 w-full max-w-5xl">
          {reasonFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex items-start gap-x-6"
            >
              <div className="w-[60px] h-[60px] shrink-0 rounded-[16px] bg-[#5C3028A3] border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-cormorant text-[20px] md:text-[24px] font-medium text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-[#E8E8E8] text-[14px] md:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
