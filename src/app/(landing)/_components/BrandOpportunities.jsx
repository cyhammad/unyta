"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const BrandOpportunities = () => {
  const features = [
    {
      text: "Access vetted, high-quality creators",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      text: "Track campaign progress in real-time",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      text: "Centralized messaging and collaboration",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      text: "Drive authentic engagement and reach",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: IMAGE CARD (Reversed order) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="bg-[#F5F3F2] rounded-[20px] relative overflow-hidden flex flex-col items-center pt-10 order-2 lg:order-1 w-full"
          style={{ maxWidth: "580.4px", minHeight: "340px" }}
        >
          <div 
            className="relative w-full flex justify-center transition-all duration-500"
            style={{ transform: "translateY(-70px)" }}
          >
             <Image 
                src="/screen6.png" 
                alt="Brand Strategy Mockup" 
                width={580}
                height={1160}
                className="object-top drop-shadow-2xl transition-all duration-500"
                style={{ width: "400px", minWidth: "400px", height: "auto" }}
                priority
             />
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             visible: { transition: { staggerChildren: 0.1 } }
           }}
           className="flex flex-col items-start order-1 lg:order-2"
        >
          {/* TAG (Using your tweaked #EADCDC style) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="px-4 py-1.5 rounded-full bg-[#EADCDC] p-2 text-[#741717] text-[14px] font-sans font-medium mb-5"
          >
            For Brands
          </motion.div>

          {/* TITLE (Using your tweaked 40px medium style) */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-cormorant text-[36px] md:text-[40px] font-medium text-[#0D0D12] leading-[1.2] mb-5 max-w-xl"
          >
            Discover Creators Who Deliver Results
          </motion.h2>

          {/* DESC (Using your tweaked mb-5 style) */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[#22000C] font-sans font-light text-[17px] md:text-[18px] leading-relaxed mb-5 max-w-md"
          >
            Launch campaigns with trusted creators. Access insights, streamline communication, and earn authentic reviews.
          </motion.p>

          {/* FEATURE PILLS (Using your tweaked border and padding) */}
          <div className="flex flex-col gap-y-4 mb-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                }}
                className="flex items-center gap-x-4 px-4 py-3 rounded-full border border-[#E9E6E7] text-[#22000C] font-sans font-light text-[15px] hover:bg-[#F9F6F6] transition-colors group cursor-default"
              >
                <div className="text-[#22000C]/60 group-hover:text-[#741717] transition-colors shrink-0">
                  {item.icon}
                </div>
                {item.text}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="flex flex-col items-start gap-y-6"
          >
            <p className="text-[#741717] text-[19px] md:text-[21px]">
              Apply for Early Access
            </p>
            <button className="h-14 px-10 rounded-full bg-[#741717] text-white font-sans text-[16px] tracking-wide shadow-lg hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95">
              Join as a Brand
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
