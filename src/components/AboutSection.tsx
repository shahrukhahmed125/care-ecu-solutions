import React from 'react';
import { BUSINESS_INFO } from '../data/careEcuData';
import { SectionHeader } from './SectionHeader';
import { SafeImage } from './SafeImage';
import { 
  Building2, 
  MapPin, 
  Award, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
  onOpenPostalModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal, onOpenPostalModal }) => {
  return (
    <section id="about" className="py-24 bg-[#050507] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header for perfect visual alignment */}
        <SectionHeader
          badgeText="Dedicated Automotive Electronics Facility"
          badgeIcon={<Building2 className="w-3.5 h-3.5" />}
          titlePrefix="Engineering Precision."
          titleHighlight="No Speculative Replacements."
          description="Based in Romford, Essex, we bridge the gap between expensive main dealership replacement quotes and precision circuit board engineering."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop Imagery Composition (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl bg-[#090A0E] aspect-[4/3]">
              <SafeImage
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Care ECU Solutions Workshop in Romford with technician bench testing"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-transparent to-transparent opacity-85" />

              {/* Verified Workshop Location Overlay in Red */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-red-500/30 text-white">
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>ROMFORD WORKSHOP &bull; ESSEX</span>
                </div>
                <div className="font-display font-bold text-sm text-white">
                  {BUSINESS_INFO.address.line1}
                </div>
                <div className="text-xs text-[#9CA3AF] font-mono">
                  {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.postalCode}
                </div>
              </div>
            </div>

            {/* Accent Floating Badge in Red */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-xl bg-[#0E1015] border border-red-500/50 shadow-2xl items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  10+ Years Experience
                </div>
                <div className="text-[11px] font-mono text-[#9CA3AF]">
                  5,000+ ECUs Diagnosed
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story Editorial (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Restoring Control Modules Since 2014
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-8">
              <p>
                Based at the Seedbed Centre in Romford, <strong className="text-white">Care ECU Solutions</strong> (Car ECU Solutions Ltd) was established to resolve the electronic control failures, immobiliser locks, and CAN-bus communication dropouts that standard service garages are simply not equipped to handle.
              </p>
              <p>
                Modern vehicles are effectively distributed computer networks on wheels. When an engine ECU, body controller, or key transponder fails, main dealerships often quote thousands of pounds for a complete replacement unit—with delivery lead times spanning weeks.
              </p>
              <p>
                Our philosophy is rooted in bench-level diagnostics and circuit board restoration. Using advanced stereomicroscopes, logic analyzers, and authorized OEM programming software, we pinpoint the exact microscopic component that failed, replace it with automotive-certified parts, and verify operation on our multi-channel simulators.
              </p>
            </div>

            {/* Workshop Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-[#090A0E] border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white font-mono uppercase">Local & Nationwide</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">Walk-in Romford facility or secure Royal Mail postal testing service.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090A0E] border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white font-mono uppercase">Preserved Vehicle Coding</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">We maintain all original vehicle VIN, odometer, and keys so no re-coding is needed.</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] hover:shadow-[0_0_25px_rgba(255,30,39,0.5)] text-white font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg shadow-red-950/40"
              >
                <span>Request a Workshop Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPostalModal}
                className="px-6 py-3.5 rounded-xl bg-[#0E1015] hover:bg-[#161820] text-[#D1D5DB] hover:text-white border border-white/10 hover:border-red-500/50 font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                Postal Repair Guide
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
