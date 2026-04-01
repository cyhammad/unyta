"use client";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#541409] text-warm-white lg:h-[366px] pt-14 pb-6 gap-12 items-center px-6">
      <div className="flex flex-col w-full max-w-7xl md:flex-row justify-between items-start gap-12 md:gap-0 h-full">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3 pr-4">
          <Image
            src="/footer-logo.png"
            alt="Unyta Logo"
            width={206}
            height={43}
            className="object-contain"
          />
          <p className="font-sans font-light text-[15px] leading-relaxed max-w-[320px]">
            The members only community where creators and brands connect for authentic collaborations.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-1">
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <svg width="20" height="18" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: LINK COLUMNS (50% Split into 3) */}
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-6 md:gap-8">
          {/* PRODUCT */}
          <div className="flex flex-col items-start">
            <h4 className="font-sans font-medium text-[13px] sm:text-[16px] md:text-[18px] mb-4 sm:mb-6 text-warm-white">Product</h4>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 font-sans font-light text-[12px] sm:text-[15px]">
              <Link href="/features" className="hover:underline transition-colors">Features</Link>
              <Link href="/pricing" className="hover:underline transition-colors">Pricing</Link>
              <Link href="/how-it-works" className="hover:underline transition-colors">How It Works</Link>
              <Link href="/faq" className="hover:underline transition-colors">FAQ</Link>
            </div>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col items-start">
            <h4 className="font-sans font-medium text-[13px] sm:text-[16px] md:text-[18px] mb-4 sm:mb-6 text-white">Legal</h4>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 font-sans font-light text-[12px] sm:text-[15px]">
              <Link href="/privacy" className="hover:underline transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline transition-colors">Terms & Conditions</Link>
              <Link href="/guidelines" className="hover:underline transition-colors">Community Guidelines</Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="flex flex-col items-start">
            <h4 className="font-sans font-medium text-[13px] sm:text-[16px] md:text-[18px] mb-4 sm:mb-6 text-white">Support</h4>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 font-sans font-light text-[12px] sm:text-[15px]">
              <Link href="/contact" className="hover:underline transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="flex flex-col w-full max-w-7xl md:flex-row justify-between items-center gap-4">
        <p className="font-sans font-light text-[13px] md:text-[14px]">
          © 2026 Unyta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
