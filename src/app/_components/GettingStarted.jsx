"use client";

import { motion } from "motion/react";

export const GettingStarted = () => {
  const steps = [
    {
      title: "Apply & Create Profile",
      desc: "Download the app, sign up, and complete your application with your details.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/>
        </svg>
      )
    },
    {
      title: "Get Approved",
      desc: "Our team reviews your application. Once accepted, you'll be ready to explore.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 11 13 15 9"/>
        </svg>
      )
    },
    {
      title: "Explore & Match",
      desc: "Discover campaigns, swipe to match with brands or creators that fit your style.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      title: "Start Collaborating",
      desc: "Connect, chat, and create authentic content together.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-24">
      <div className="w-full flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 px-6"
        >
          <h2 className="font-cormorant text-[36px] md:text-[48px] uppercase font-semibold text-[#0D0D12] mb-4">
            GETTING STARTED
          </h2>
          <p className="font-sans font-light text-[#22000C]/70 text-base md:text-lg max-w-2xl mx-auto">
            Join Unyta in four simple steps and start your collaboration journey today.
          </p>
        </motion.div>

        {/* STEPS GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="relative w-full max-w-7xl mx-auto px-6 md:px-12"
        >
          {/* CONNECTING LINE (Desktop) */}
          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 } }
            }}
            className="absolute top-[26px] left-[10%] right-[10%] h-[1px] hidden lg:block origin-left"
            style={{ background: "linear-gradient(90deg, #E8C6C1 0%, #58180E 50%, #E8C6C1 100%)" }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-4 lg:gap-x-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* ICON BADGE */}
                <div
                  className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#541409] to-[#3a0d05] flex items-center justify-center mb-6"
                  style={{ boxShadow: "0px -4px 8px 0px #FFFFFFA3 inset, 0px 4px 10px rgba(84, 20, 9, 0.25)" }}
                >
                  {step.icon}
                </div>

                {/* TEXT CONTENT */}
                <h3 className="font-cormorant text-[24px] font-semibold text-[#741717] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-[#22000C] text-[15px] leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
