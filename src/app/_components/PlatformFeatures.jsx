"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Icons } from "./icons";

export const PlatformFeatures = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "chat", label: "Chat" },
    { id: "match", label: "Match" },
    { id: "map", label: "Map" },
    { id: "collabs", label: "My Collabs" },
    { id: "strategy", label: "Strategy" },
  ];

  const features = {
    home: [
      {
        title: "Swipe-to-Match",
        desc: "Fast, intuitive matching between brands and creators.",
        icon: Icons.featureSwipe,
      },
      {
        title: "Smart Dashboards",
        desc: "Campaign tracking, insights, and collaboration tools.",
        icon: Icons.featureDashboard,
      },
      {
        title: "Seamless Chat & Pitches",
        desc: "Share briefs, content, and ideas directly in-app.",
        icon: Icons.featureChat,
      },
      {
        title: "Membership-based Community",
        desc: "High-quality creators and trusted brands only.",
        icon: Icons.featureCommunity,
      },
      {
        title: "Gamification & Rewards",
        desc: "Earn rewards, badges and star reviews.",
        icon: Icons.featureRewards,
      },
      {
        title: "Interactive Map",
        desc: "Find nearby experiences and global connections",
        icon: Icons.discover,
      },
      {
        title: "Strategic Support",
        desc: "Book a personalised consulting from marketing experts",
        icon: Icons.visionElevate,
      },
    ],
    chat: [
      {
        title: "Real-time Messaging",
        desc: "Connect instantly with brands and creators to stay in sync.",
        icon: Icons.featureChat,
      },
      {
        title: "Collaboration Hub",
        desc: "Share briefs, concept ideas, and moodboards in one thread.",
        icon: Icons.featureDashboard,
      },
      {
        title: "Direct Proposals",
        desc: "Send and receive campaign offers directly within the chat.",
        icon: Icons.visionSwipe,
      },
      {
        title: "Secure File Sharing",
        desc: "Exchange high-quality assets and contracts safely.",
        icon: Icons.featureCommunity,
      },
      {
        title: "Milestone Tracking",
        desc: "Get updates on collaboration progress as they happen.",
        icon: Icons.track,
      },
      {
        title: "Interactive Map",
        desc: "Find nearby experiences and global connections",
        icon: Icons.discover,
      },
      {
        title: "Strategic Support",
        desc: "Book a personalised consulting from marketing experts",
        icon: Icons.visionElevate,
      },
    ],
    match: [
      {
        title: "Smart Matching Algorithm",
        desc: "Using AI to find your brand's perfect creator fit instantly.",
        icon: Icons.visionSwipe,
      },
      {
        title: "Verified Profiles",
        desc: "Authenticated audience data and deeper performance metrics.",
        icon: Icons.featureDashboard,
      },
      {
        title: "Niche Discovery",
        desc: "Filter by interests, location, and specific stylistic preferences.",
        icon: Icons.visionMatch,
      },
      {
        title: "Preference Learning",
        desc: "Our system learns your tastes to improve future suggestions.",
        icon: Icons.visionConnect,
      },
      {
        title: "In-Depth Analytics",
        desc: "Full visibility into a creator's reach and engagement history.",
        icon: Icons.featureRewards,
      },
      {
        title: "Interactive Map",
        desc: "Find nearby experiences and global connections",
        icon: Icons.discover,
      },
      {
        title: "Strategic Support",
        desc: "Book a personalised consulting from marketing experts",
        icon: Icons.visionElevate,
      },
    ],
    map: [
      {
        title: "Real-time Proximity",
        desc: "See creators and brands active in your physical city right now.",
        icon: Icons.discover,
      },
      {
        title: "Collaboration Zones",
        desc: "Highlighted hubs where local partnerships are flourishing.",
        icon: Icons.visionMatch,
      },
      {
        title: "Smart Geofencing",
        desc: "Get notified of opportunities as you move through your area.",
        icon: Icons.visionSwipe,
      },
      {
        title: "Hyper-local Trends",
        desc: "Discover what content is trending in your specific neighborhood.",
        icon: Icons.featureDashboard,
      },
      {
        title: "Event Mapping",
        desc: "Direct navigation to creator meetups and industry events.",
        icon: Icons.visionConnect,
      },
      {
        title: "Interactive Map",
        desc: "Find nearby experiences and global connections",
        icon: Icons.discover,
      },
      {
        title: "Strategic Support",
        desc: "Book a personalised consulting from marketing experts",
        icon: Icons.visionElevate,
      },
    ],
    collabs: [
      {
        title: "Active Contracts",
        desc: "Track all ongoing collaborations and their current legal status.",
        icon: Icons.visionMatch,
      },
      {
        title: "Deliverable Tracker",
        desc: "Stay on top of content creation deadlines and revision cycles.",
        icon: Icons.featureDashboard,
      },
      {
        title: "Media Kit Vault",
        desc: "Access and manage all campaign assets and briefs in one place.",
        icon: Icons.featureCommunity,
      },
      {
        title: "History & Reviews",
        desc: "Review your past successful partnerships and star ratings.",
        icon: Icons.featureRewards,
      },
      {
        title: "Payout Hub",
        desc: "Securely manage earnings and brand invoices through the app.",
        icon: Icons.track,
      },
      {
        title: "Interactive Map",
        desc: "Find nearby experiences and global connections",
        icon: Icons.discover,
      },
      {
        title: "Strategic Support",
        desc: "Book a personalised consulting from marketing experts",
        icon: Icons.visionElevate,
      },
    ],
    strategy: [
      {
        title: "Performance Insights",
        desc: "Analyze collaboration data to optimize future campaign outcomes.",
        icon: Icons.featureDashboard,
      },
      {
        title: "Market Intelligence",
        desc: "Stay ahead with real-time creator economy and niche trends.",
        icon: Icons.discover,
      },
      {
        title: "Brand Alignment",
        desc: "Measure how well creators match your brand's core values.",
        icon: Icons.visionMatch,
      },
      {
        title: "Growth Planning",
        desc: "Scale your presence with long-term partnership strategies.",
        icon: Icons.visionConnect,
      },
      {
        title: "Competitive Analysis",
        desc: "Understand your brand's standing within your industry niche.",
        icon: Icons.featureRewards,
      },
      {
        title: "Interactive Map",
        desc: "Find nearby experiences and global connections",
        icon: Icons.discover,
      },
      {
        title: "Strategic Support",
        desc: "Book a personalised consulting from marketing experts",
        icon: Icons.visionElevate,
      },
    ],
  };

  const images = {
    home: "/screen1.png",
    chat: "/screen2.png",
    match: "/screen3.png",
    map: "/screen4.png",
    collabs: "/screen5.png",
    strategy: "/screen6.png",
  };

  const currentFeatures = features[activeTab] || features["home"];
  const currentImage = images[activeTab] || "/screen1.png";

  const tabStyles = {
    home: { width: "380px", translate: "0px" },
    chat: { width: "380px", translate: "0px" },
    match: { width: "380px", translate: "0px" },
    map: { width: "300px", translate: "0px" }, // Consistent sizing across all tabs
    collabs: { width: "380px", translate: "0px" },
    strategy: { width: "380px", translate: "0px" }
  };

  const currentStyle = tabStyles[activeTab] || tabStyles["home"];

  return (
    <section id="features" className="w-full py-24 bg-white flex flex-col items-center overflow-hidden">
      {/* HEADER */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8 md:mb-12 px-6"
      >
        <h2 className="font-cormorant text-[36px] md:text-[48px] uppercase font-semibold text-[#0D0D12] mb-5">
          Platform Features
        </h2>
        <p className="font-sans font-light text-[#22000C] text-[16px] md:text-xl max-w-2xl mx-auto">
          Everything you need to discover, connect, and collaborate — all in one place.
        </p>
      </motion.div>

      {/* TABS */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex items-center bg-[#F9F6F6] p-1 rounded-2xl mb-8 md:mb-10 w-[90vw] md:w-fit mx-auto overflow-x-auto no-scrollbar justify-start md:justify-center border border-black/5 snap-x"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 md:px-8 py-2 md:py-3.5 rounded-xl text-[16px] md:text-[18px] font-cormorant font-semibold tracking-wide transition-all duration-300 whitespace-nowrap flex-shrink-0 snap-center ${
              activeTab === tab.id
                ? "bg-[#541409] text-white shadow-lg"
                : "text-[#22000C] hover:text-[#541409]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* CONTENT REGION */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
        {/* LEFT: IMAGE BOX */}
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
          className="bg-[#741717] rounded-[20px] relative overflow-hidden flex flex-col items-center justify-center w-full lg:h-[700px] shadow-2xl"
          style={{ maxWidth: "580.4px" }}
        >
          <div 
            className="relative w-full flex justify-center transition-all duration-500"
            style={{ transform: `translateY(${currentStyle.translate})` }}
          >
            <Image
              key={activeTab}
              src={currentImage}
              alt="Platform Scene"
              width={580}
              height={1160}
              className="object-contain transition-all duration-500 drop-shadow-2xl"
              style={{ width: currentStyle.width, minWidth: currentStyle.width, height: "auto" }}
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: FEATURES LIST */}
        <motion.div 
          key={activeTab} // Retriggers animation array on tab change
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="flex flex-col justify-between w-full py-2 gap-3 md:gap-4 lg:h-[700px]"
        >
          {currentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-white rounded-[20px] p-4 flex items-center gap-x-6 hover:shadow-lg transition-all cursor-default group border border-black/[0.03]"
            >
              {/* ICON BADGE */}
              <div
                className="w-[52px] h-[52px] shrink-0 rounded-2xl bg-gradient-to-br from-[#541409] to-[#3a0d05] flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-[#541409]/20"
                style={{ boxShadow: "0px -4px 8px 0px #FFFFFFA3 inset" }}
              >
                {feature.icon}
              </div>

              {/* TEXT */}
              <div className="flex flex-col">
                <h3 className="font-cormorant text-[22px] font-semibold text-[#741717] leading-tight mb-1">
                  {feature.title}
                </h3>
                <p className="font-sans font-light text-[#22000C]/70 text-[15px]">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
