"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "../_components/Footer";
import { motion } from "motion/react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HEADER SECTION */}
      <section className="w-full h-[283px] bg-[#EEE8E6] flex flex-col items-center justify-center pt-20 px-6">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center"
        >
          <h1 className="font-cormorant text-[40px] font-semibold text-[#22000C]">
            Privacy Policy
          </h1>
          <p className="font-sans font-light text-[#22000C] text-[16px] tracking-wide">
            Effective Date: March 12, 2026 &nbsp;-&nbsp; Last Updated: March 12, 2026
          </p>
        </motion.div>
      </section>

      {/* CONTENT REGION */}
      <section className="max-w-5xl mx-auto py-24 px-6 md:px-12 font-sans font-light text-[#22000C]/90 leading-relaxed text-[15px] md:text-[16px]">
        
        <div className="space-y-12">
          
          <div>
            <h2 className="font-cormorant text-[24px] text-[#741717] font-semibold mb-4 leading-tight">Unyta Privacy Policy</h2>
            <p className="mb-4">
              Unyta (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use the Unyta platform (&ldquo;Platform&rdquo;), including our website, mobile app, and related services.
            </p>
            <p className="mb-8 italic">By using Unyta, you acknowledge and agree to this Privacy Policy.</p>
            
            <h3 className="font-medium text-[#22000C] mb-4">Data Controller</h3>
            <p className="mb-4">For the purposes of applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the UK GDPR, the data controller responsible for processing your personal data is:</p>
            <p className="font-medium text-[#22000C]">Unyta Technologies FZ-LLC</p>
            <p>Dubai, United Arab Emirates</p>
            <p>Contact: <span className="text-[#741717]">contact@joinunyta.com</span></p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">1. Scope and Compliance</h3>
            <p className="mb-4 text-[#22000C]/70">Unyta complies with:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>The EU General Data Protection Regulation (GDPR);</li>
              <li>The UK GDPR;</li>
              <li>The United Arab Emirates Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL).</li>
            </ul>
            <p>We ensure all processing of personal data is lawful, fair, transparent, and limited to legitimate business purposes.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">2. Information We Collect</h3>
            <p className="mb-6 text-[#22000C]/70">We may collect and process the following categories of information:</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-[#22000C] mb-2">a. Account Information</h4>
                <p>Name, email, username, password, and profile image.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#22000C] mb-2">b. Creator Information</h4>
                <p>Social media handles, engagement statistics, audience data, and preferred brands.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#22000C] mb-2">c. Brand Information</h4>
                <p>Company name, contact person, campaign briefs, and collaboration history.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#22000C] mb-2">d. Technical and Usage Data</h4>
                <p>Device type, IP address, operating system, browser type, and cookies or similar identifiers.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#22000C] mb-2">e. Communication Data</h4>
                <p>Messages or emails exchanged with Unyta or through in-app chat features.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">3. Cookies and Tracking Technologies</h3>
            <p className="mb-4">Unyta may use cookies and similar technologies to operate the Platform, improve user experience, analyze usage patterns, and maintain account sessions.</p>
            <p className="mb-4">Cookies are small files stored on your device that help us recognize your browser and remember certain information.</p>
            <p>You may control or disable cookies through your browser settings, although some features of the Platform may not function properly without them.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">4. How We Use Your Information</h3>
            <p className="mb-6 font-medium text-[#22000C]">We process your information to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Operate and improve the Platform and its matching features;</li>
              <li>Facilitate brand-creator collaborations;</li>
              <li>Manage user accounts and communication preferences;</li>
              <li>Send service updates, notifications, or legal information;</li>
              <li>Ensure platform security and detect fraud;</li>
              <li>Comply with legal and regulatory obligations;</li>
              <li>Conduct anonymized analysis and performance insights;</li>
              <li>Send marketing or promotional communications where permitted by law. Where required, we will obtain your consent before sending such communications, and you may opt out at any time using the unsubscribe link included in these messages.</li>
            </ul>
            <h4 className="font-medium text-[#22000C] mb-3">Profiling and Platform Matching:</h4>
            <p>To facilitate brand-creator collaborations, Unyta may analyze certain information such as profile details, engagement metrics, audience insights, and activity on the Platform in order to recommend relevant matches between creators and brands. This processing helps improve the relevance and effectiveness of collaborations and does not produce legal or similarly significant effects on users.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">5. Legal Bases for Processing</h3>
            <p className="mb-4 text-[#22000C]/70">We rely on the following legal bases:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium text-[#22000C]">Consent</span> &mdash; where you have agreed to data processing;</li>
              <li><span className="font-medium text-[#22000C]">Contractual necessity</span> &mdash; to perform obligations under our agreement;</li>
              <li><span className="font-medium text-[#22000C]">Legal obligation</span> &mdash; to comply with laws and regulations;</li>
              <li><span className="font-medium text-[#22000C]">Legitimate interest</span> &mdash; to operate, secure, and enhance the Platform.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">6. Data Sharing</h3>
            <p className="mb-4 font-medium text-[#22000C]">We may share your data only with:</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Verified service providers (hosting, analytics, communication, payment systems);</li>
              <li>Brands or creators for collaboration purposes;</li>
              <li>Legal or public authorities when required by law.</li>
            </ul>
            <p className="italic">We do not sell or rent personal data to any third party.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">7. International Data Transfers</h3>
            <p className="mb-6 text-[#22000C]/70">Your personal data may be transferred to and processed in countries outside your country of residence.</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-[#22000C] mb-2 underline">EU/UK GDPR Compliance:</h4>
                <p>Transfers from the EU/UK are conducted under adequacy decisions or Standard Contractual Clauses approved by the European Commission or UK authorities.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#22000C] mb-2 underline">UAE PDPL Compliance:</h4>
                <p>When transferring data outside the UAE, Unyta ensures that the destination country provides adequate protection or uses approved contractual clauses or explicit consent.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">8. Data Retention</h3>
            <p>Personal data is retained only as long as necessary for the purposes described or as required by applicable law. When no longer needed, it is securely deleted or anonymized.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">9. Data Security</h3>
            <p className="mb-4 text-[#22000C]/70">Unyta employs administrative, technical, and physical safeguards to protect data from loss, misuse, or unauthorized access.</p>
            <p className="italic">While we implement industry-standard security measures, no method of transmission over the Internet or electronic storage can be guaranteed to be completely secure.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">10. Your Rights</h3>
            <p className="mb-6 font-medium text-[#22000C]">Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Access and obtain a copy of your data;</li>
              <li>Correct, delete, or restrict processing;</li>
              <li>Withdraw consent at any time;</li>
              <li>Object to processing for legitimate reasons;</li>
              <li>Request data portability.</li>
            </ul>
            <p>To exercise these rights, contact <span className="text-[#741717]">contact@joinunyta.com</span>. We may verify your identity before fulfilling any request.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">11. Children&apos;s Privacy</h3>
            <p className="mb-4 text-[#22000C]">Unyta is intended for users aged 18 and older.</p>
            <p className="mb-4">Users under 18 must have the consent or supervision of a parent or legal guardian.</p>
            <p>If we learn that we have collected data from a user under 16 without consent, we will delete it immediately.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">12. Data Breach Notification</h3>
            <p>In accordance with EU, UK, and UAE regulations, Unyta will notify users and authorities of any data breach that poses a risk to personal rights or freedoms within the timelines required by law.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">13. Changes to This Policy</h3>
            <p>We may modify this Privacy Policy at any time. Updates will be published with a new &ldquo;Last Updated&rdquo; date. Continued use of the Platform after changes constitutes acceptance of the revised policy.</p>
          </div>

          <div>
            <h3 className="font-cormorant text-[22px] text-[#741717] font-semibold mb-4">14. Contact Us</h3>
            <p className="mb-4">For any privacy questions or data requests, please contact:</p>
            <p className="font-medium text-[#741717]">contact@joinunyta.com</p>
          </div>

          <div className="flex justify-center pt-12 pb-12">
            <a 
              href="/" 
              className="px-10 py-3 rounded-full border border-[#741717] text-[#741717] font-sans font-medium hover:bg-[#741717]/5 transition-all text-[15px]"
            >
              Back to homepage
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
