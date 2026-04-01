"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export const CreatorDialog = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.toggleLenisScroll) {
      window.toggleLenisScroll(isOpen);
    }
    return () => {
      if (typeof window !== "undefined" && window.toggleLenisScroll) {
        window.toggleLenisScroll(false);
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* POSITIONING WRAPPER */}
          {/* Mobile: full-screen centered | Tablet: centered | Desktop: top-right */}
          <div className="fixed inset-0 z-[110] flex items-end sm:items-center lg:items-start lg:justify-end p-0 sm:p-6 pointer-events-none">

            {/* DIALOG CONTAINER */}
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className={[
                "relative pointer-events-auto flex flex-col overflow-y-auto scrollbar-hide",
                "bg-white shadow-2xl border border-stone-200",
                /* Mobile: full-width bottom sheet */
                "w-full h-[95dvh] rounded-t-[24px] rounded-b-none pt-6 px-5 pb-6 gap-4",
                /* Tablet: centered card */
                "sm:w-[480px] sm:h-auto sm:max-h-[90vh] sm:rounded-[24px] sm:pt-8 sm:px-8 sm:pb-8 sm:gap-4",
                "lg:w-[590px] lg:h-[780px] lg:max-h-[92vh] lg:rounded-[24px] lg:pt-8 lg:px-8 lg:pb-8 lg:gap-4 lg:mt-4",
              ].join(" ")}
              data-lenis-prevent
            >
              {/* CLOSE BUTTON */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-5 sm:top-6 sm:right-8 text-stone-400 hover:text-black transition-colors z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              {/* HEADER */}
              <div className="flex flex-col items-center text-center">
                <Image 
                  src="/image.png" 
                  alt="Unyta Monogram" 
                  width={48} 
                  height={48} 
                  className="object-contain mb-3 w-[36px] sm:w-[48px]"
                  style={{ 
                    height: "auto",
                    filter: "brightness(0)" 
                  }}
                />
                <h2 className="font-cormorant text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-[#22000C] uppercase tracking-wider mb-1">
                  Join Unyta as a Creator
                </h2>
                <p className="font-sans font-light text-[#741717] text-[13px] sm:text-[14px] md:text-base max-w-[500px] leading-relaxed px-4 sm:px-0">
                  Get access to exclusive partnerships, gifted products, and complimentary experiences.
                </p>
              </div>

              {/* FORM */}
              <div className="flex flex-col gap-3">
                {/* FULL NAME */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-stone-300 px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-stone-300 px-5 sm:px-6 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* INSTAGRAM */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Instagram Handle"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-stone-300 px-5 sm:px-6 pr-12 sm:pr-14 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                  <button className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  </button>
                </div>

                {/* PASSWORD */}
                <div className="space-y-2">
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Password"
                      className="w-full h-[44px] sm:h-[48px] rounded-full border border-stone-300 px-5 sm:px-6 pr-12 sm:pr-14 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      {showPassword ? (
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      ) : (
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      )}
                    </button>
                  </div>
                  
                  {/* STRENGTH BAR */}
                  <div className="w-full h-[4px] bg-stone-100 rounded-full overflow-hidden">
                    <div className="w-[10%] h-full bg-[#741717] rounded-full" />
                  </div>

                  {/* REQUIREMENTS */}
                  <div className="flex flex-col items-start gap-2 pt-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full border border-stone-300" />
                      <span className="font-sans font-light text-stone-800 text-[13px]">8 characters minimum</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full border border-stone-300" />
                      <span className="font-sans font-light text-stone-800 text-[13px]">a number</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full border border-stone-300" />
                      <span className="font-sans font-light text-stone-800 text-[13px]">a symbol</span>
                    </div>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm Password"
                    className="w-full h-[44px] sm:h-[48px] rounded-full border border-stone-300 px-5 sm:px-6 pr-12 sm:pr-14 font-sans font-normal text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#741717] transition-all text-xs sm:text-sm"
                  />
                  <button 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    ) : (
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* CTAS */}
              <div className="flex flex-col gap-3 mt-auto">
                <button className="w-full h-[52px] sm:h-[60px] rounded-full bg-[#741717] text-white font-sans font-medium text-[15px] sm:text-[17px] hover:bg-[#541409] transition-all shadow-lg active:scale-[0.98]">
                  Apply for Early Access
                </button>
                <p className="font-sans font-normal text-stone-700 text-[12px] sm:text-[13px] text-center pb-2 sm:pb-0">
                  By signing up, you agree to Unyta&apos;s{" "}
                  <Link href="/terms" onClick={onClose} className="font-semibold underline hover:text-[#741717]">Terms of Service</Link> &{" "}
                  <Link href="/privacy" onClick={onClose} className="font-semibold underline hover:text-[#741717]">Privacy Policy</Link>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
