import React, { useState } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/careEcuData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  X
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
  onOpenPostalModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenPostalModal }) => {
  const currentYear = new Date().getFullYear();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#050507] border-t border-white/[0.08] text-[#9CA3AF] pt-16 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
            
            {/* Brand Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#" className="inline-block" aria-label="Care ECU Solutions">
                <Logo />
              </a>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
                Care ECU Solutions (Car ECU Solutions Ltd) is an independent specialist automotive electronics facility in Romford, Essex. Providing component-level ECU repairs, diagnostic software calibration, immobiliser decoding, and key programming for trade and private clients across the UK.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0E1015] border border-white/10 text-white">
                  Company No: {BUSINESS_INFO.companyNumber}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-red-950/60 border border-red-500/40 text-red-400">
                  12-Mo Warranty
                </span>
              </div>
            </div>

            {/* Quick Links (2 Cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li><a href="#services" className="hover:text-red-400 transition-colors">Specialist Services</a></li>
                <li><a href="#before-after" className="hover:text-red-400 transition-colors">Before & After Work</a></li>
                <li><a href="#process" className="hover:text-red-400 transition-colors">4-Stage Workflow</a></li>
                <li><a href="#gallery" className="hover:text-red-400 transition-colors">Hardware Gallery</a></li>
                <li><a href="#reviews" className="hover:text-red-400 transition-colors">Client Reviews</a></li>
                <li><a href="#why-us" className="hover:text-red-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#faq" className="hover:text-red-400 transition-colors">Technical FAQs</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition-colors">Romford Workshop</a></li>
              </ul>
            </div>

            {/* Core Services (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Specialist Services
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES_DATA.slice(0, 6).map((srv) => (
                  <li key={srv.id}>
                    <button
                      onClick={() => onOpenQuoteModal(srv.title)}
                      className="text-left hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {srv.title}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={onOpenPostalModal}
                    className="text-red-400 hover:text-white hover:underline transition-colors flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <span>UK Postal Mail-In Service →</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Verified Contact Details (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Workshop & Contact
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.postalCode}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors font-mono">
                    {BUSINESS_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div>Mon &ndash; Fri: {BUSINESS_INFO.openingHours.weekdays}</div>
                    <div>Sat: {BUSINESS_INFO.openingHours.saturday}</div>
                  </div>
                </div>

                {/* Facebook Page link */}
                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/carecusolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1015] border border-white/10 text-white hover:border-red-500 transition-all text-[11px] font-mono"
                  >
                    <span>Official Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Legal & Back to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9CA3AF]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center sm:text-left">
              <span>&copy; {currentYear} Care ECU Solutions (Car ECU Solutions Ltd). All rights reserved.</span>
              <button
                onClick={() => setPrivacyModalOpen(true)}
                className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTermsModalOpen(true)}
                className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Terms of Repair
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0E1015] hover:bg-red-600 text-white transition-all flex items-center gap-1.5 cursor-pointer border border-white/5"
              aria-label="Back to top"
            >
              <span className="text-[11px]">TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#090A0E] border border-red-500/40 rounded-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#161820] text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Privacy & Data Policy
            </h3>
            <div className="text-xs text-[#D1D5DB]/85 space-y-3 leading-relaxed">
              <p>
                Care ECU Solutions (Car ECU Solutions Ltd) respects your personal privacy. We only collect vehicle and contact details submitted via our quotation and diagnostic forms for the express purpose of providing automotive repair assessments and customer service.
              </p>
              <p>
                We do not sell, rent, or distribute customer details or vehicle VIN data to third-party marketers. ECU memory backups, EEPROM files, and Flash dumps obtained during cloning or data recovery are stored securely in encrypted archives for customer safety and warranty verification only.
              </p>
              <p>
                For questions regarding your data or to request file deletion upon completion of your repair, contact CarEcuSolutions@mail.com.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Repair Modal */}
      {termsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setTermsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#090A0E] border border-red-500/40 rounded-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setTermsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#161820] text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Terms of Diagnostic & Bench Repair
            </h3>
            <div className="text-xs text-[#D1D5DB]/85 space-y-3 leading-relaxed">
              <p>
                <strong>1. Bench Diagnostics:</strong> All units submitted are inspected by qualified technicians. Prior to any irreversible board micro-soldering or chip replacement, a confirmed quote will be provided.
              </p>
              <p>
                <strong>2. 12-Month Guarantee:</strong> Hardware repairs and component replacements are guaranteed for 12 months against defects in the replaced components and soldering work. The warranty does not cover external vehicle faults such as short circuits in vehicle harnesses, jump-start reverse polarity, or ongoing vehicle water ingress.
              </p>
              <p>
                <strong>3. Postal Shipping:</strong> Customers are responsible for properly packaging units in rigid padded boxes. Return shipping is handled via tracked and insured courier.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
