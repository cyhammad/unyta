"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const CreatorOpportunities = () => {
  const features = [
    {
      text: "Showcase your unique style and media kit",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
        </svg>
      )
    },
    {
      text: "Track collaborations and brand reviews",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    },
    {
      text: "Earn badges and unlock exclusive rewards",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15l-2 5l-2-5l-5-2l5-2l2-5l2 5l5 2z"/>
        </svg>
      )
    },
    {
      text: "Match with brands that fit your niche",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 3h5v5M8 3H3v5M3 16v5h5M16 21h5v-5M15 9l-6 6M9 9l6 6"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: CONTENT */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             visible: { transition: { staggerChildren: 0.1 } }
           }}
           className="flex flex-col items-start"
        >
          {/* TAG */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="px-4 py-1.5 rounded-full bg-[#EADCDC] p-2 text-[#741717] text-[12px] font-sans font-medium mb-5"
          >
            For Creators
          </motion.div>

          {/* TITLE */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-cormorant text-[36px] md:text-[40px] font-medium text-[#0D0D12] leading-[1.2] mb-5 max-w-xl"
          >
            Turn Your Creativity Into Opportunities
          </motion.h2>

          {/* DESC */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[#22000C] font-sans font-light text-[17px] md:text-[18px] leading-relaxed mb-5 max-w-md"
          >
            Build your portfolio, track your campaigns, and collaborate with brands that value your content.
          </motion.p>

          {/* FEATURE PILLS */}
          <div className="flex flex-col gap-y-4 mb-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                }}
                className="flex items-center gap-x-4 px-4 py-3 rounded-full border border-[#E9E6E7] text-[#22000C] font-sans font-light text-[14px] hover:bg-[#F9F6F6] transition-colors group cursor-default"
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
            <p className="text-[#741717] text-[18px]">
              Apply for Early Access
            </p>
            <button className="h-14 px-10 rounded-full bg-[#741717] text-white font-sans text-[16px] tracking-wide shadow-lg hover:bg-[#5a1212] transition-all hover:scale-105 active:scale-95">
              Join as a Creator
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="bg-[#F5F3F2] rounded-[16px] relative overflow-hidden flex flex-col items-center pt-10"
          style={{ width: "570px", height: "445px", opacity: 1 }}
        >
          <div 
            className="relative w-full flex justify-center transition-all duration-500"
            style={{ transform: "translateY(-70px)" }}
          >
             <Image 
                src="/screen2.png" 
                alt="Creator Profile Mockup" 
                width={580}
                height={1160}
                className="object-top drop-shadow-2xl transition-all duration-500"
                style={{ width: "400px", minWidth: "400px", height: "auto" }}
                priority
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
