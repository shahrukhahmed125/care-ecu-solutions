import React from 'react';
import { BUSINESS_INFO } from '../data/careEcuData';
import { X, Package, ShieldCheck, Truck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface PostalGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const PostalGuideModal: React.FC<PostalGuideModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#090A0E] border border-red-500/40 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#161820] text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-500 shadow-[0_0_15px_rgba(255,30,39,0.3)]">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-red-400 uppercase tracking-wider">
              UK-Wide Postal Service
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              Sending Your ECU by Mail
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#D1D5DB]/85 leading-relaxed mb-6">
          Over 60% of our daily bench diagnostic work arrives via Royal Mail Special Delivery or tracked courier from across England, Scotland, Wales, and Northern Ireland. Follow these four simple steps:
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-xl bg-[#0E1015] border border-white/5 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-red-950/60 text-red-400 border border-red-500/30 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              01
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Enquire & Obtain Job Reference
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Submit an online quote or phone us on {BUSINESS_INFO.phoneDisplay} to get a unique Care ECU job number so our bench engineers can track your unit upon arrival.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0E1015] border border-white/5 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-red-950/60 text-red-400 border border-red-500/30 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              02
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Protective Packaging
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Wrap your ECU / electronic module in anti-static or heavy bubble wrap. Protect connector pins with cardboard or foam, and place in a rigid cardboard box. Include a note inside with your Name, Phone Number, Vehicle Reg, and Fault Symptoms.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0E1015] border border-white/5 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-red-950/60 text-red-400 border border-red-500/30 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              03
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Dispatch to Our Romford Workshop
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed mb-2">
                We strongly recommend Royal Mail Special Delivery Guaranteed by 1pm or tracked courier (DPD / DHL / UPS):
              </p>
              <div className="p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-xs text-white">
                <div>Care ECU Solutions Ltd</div>
                <div>Unit C4, Seedbed Centre, Davison Way</div>
                <div>Romford, Essex, RM7 0AZ</div>
                <div className="text-red-400 text-[11px] mt-1">Tel: {BUSINESS_INFO.phoneDisplay}</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0E1015] border border-white/5 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-red-950/60 text-red-400 border border-red-500/30 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              04
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Bench Testing & Return Delivery
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                We test your unit upon arrival, call you with a detailed diagnostic report, and confirm the repair cost. Repaired units are returned via fully insured, tracked delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-[#9CA3AF] hover:text-white cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] hover:shadow-[0_0_20px_rgba(255,30,39,0.5)] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-950/40 cursor-pointer"
          >
            Get Job Reference Number
          </button>
        </div>
      </div>
    </div>
  );
};
