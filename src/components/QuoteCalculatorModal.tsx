import React, { useState } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/careEcuData';
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  Send, 
  Car, 
  ShieldCheck, 
  Clock, 
  PoundSterling,
  AlertCircle
} from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [vehicleMake, setVehicleMake] = useState('Volkswagen');
  const [vehicleModel, setVehicleModel] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES_DATA[0].title);
  const [faultType, setFaultType] = useState('Hardware Fault / No Comms');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  if (!isOpen) return null;

  // Real-world benchmark estimates based on service type
  const getBenchmarkEstimate = () => {
    switch (service) {
      case 'ECU Repair & Component Diagnostics':
        return { range: '£180 – £350', time: '24-48 Hours', dealerCost: '£1,200 – £2,500' };
      case 'ECU Remapping & Calibration':
        return { range: '£220 – £380', time: '2-3 Hours', dealerCost: 'N/A' };
      case 'Dealer-Level Diagnostics':
        return { range: '£75 – £120', time: 'Same Day', dealerCost: '£180+/hr' };
      case 'Immobiliser Repair & Synchronisation':
        return { range: '£160 – £290', time: 'Same Day - 24h', dealerCost: '£900 – £1,800' };
      case 'Key Programming & All Keys Lost':
        return { range: '£140 – £260', time: '1-2 Hours', dealerCost: '£600 – £1,200' };
      case 'ECU Data Recovery & Cloning':
        return { range: '£190 – £320', time: '24 Hours', dealerCost: '£1,500+' };
      case 'Online & Offline Coding / Retrofits':
        return { range: '£120 – £240', time: '1-3 Hours', dealerCost: '£450+' };
      case 'Airbag / SRS Module Crash Data Reset':
        return { range: '£90 – £160', time: 'Same Day', dealerCost: '£650 – £1,100' };
      default:
        return { range: '£150 – £300', time: '24-48 Hours', dealerCost: '£1,200+' };
    }
  };

  const estimate = getBenchmarkEstimate();

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          vehicleMake,
          vehicleModel,
          serviceRequired: service,
          faultDescription: `[ESTIMATOR] Fault: ${faultType}. Customer notes: ${notes}`
        })
      });
      setReferenceId(`EST-${Math.floor(100000 + Math.random() * 900000)}`);
    } catch {
      setReferenceId(`EST-${Math.floor(100000 + Math.random() * 900000)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {referenceId ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Quote Request Received
            </h3>
            <div className="inline-block px-4 py-1.5 rounded-lg bg-[#0E1015] border border-red-500/30 text-xs font-mono text-red-400">
              Reference: {referenceId}
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
              Our Romford technician will review your vehicle configuration ({vehicleMake} {vehicleModel}) and contact you directly with an exact fixed quote.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white text-xs font-mono uppercase font-bold cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-500 shadow-[0_0_15px_rgba(255,30,39,0.3)]">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider">
                  Care ECU Solutions &bull; Fast Diagnostic Quote
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Estimate & Book Assessment
                </h3>
              </div>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-5">
              {/* Step 1: Vehicle Make & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#9CA3AF] uppercase mb-1">
                    Vehicle Make
                  </label>
                  <select
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                  >
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Ford">Ford</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Range Rover / Land Rover">Range Rover / Land Rover</option>
                    <option value="Vauxhall">Vauxhall</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Other">Other Make</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#9CA3AF] uppercase mb-1">
                    Model & Year
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Golf GTD 2017"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-xs font-mono focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div>
                <label className="block text-[11px] font-mono text-[#9CA3AF] uppercase mb-1">
                  Service Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Fault Symptoms */}
              <div>
                <label className="block text-[11px] font-mono text-[#9CA3AF] uppercase mb-1">
                  Primary Fault / Issue
                </label>
                <select
                  value={faultType}
                  onChange={(e) => setFaultType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                >
                  <option value="Hardware Fault / No Comms">Engine Cranks But Won't Start / No Comms</option>
                  <option value="Water Ingress / Corrosion">Water Ingress / Scuttle Corrosion</option>
                  <option value="Injector Driver / Misfire">Injector Driver Circuit Failure / Misfire</option>
                  <option value="Immobiliser Lock / Key">Immobiliser Active / Lost All Keys</option>
                  <option value="Performance Remap">Performance Tuning / Remap Request</option>
                  <option value="Airbag SRS Crash Code">Airbag Crash Data Reset</option>
                  <option value="Other">Other Specific Fault</option>
                </select>
              </div>

              {/* Live Benchmark Calculation Panel */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#0E1015] via-[#161820] to-[#0E1015] border border-red-500/30">
                <div className="text-[11px] font-mono text-red-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Bench Price Benchmark</span>
                  <span className="text-emerald-400 font-bold">Save vs Dealer</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-black/60 border border-white/5">
                    <div className="text-[10px] text-[#9CA3AF] font-mono">Our Estimate</div>
                    <div className="font-display font-bold text-base text-white">{estimate.range}</div>
                  </div>
                  <div className="p-2 rounded bg-black/60 border border-white/5">
                    <div className="text-[10px] text-[#9CA3AF] font-mono">Turnaround</div>
                    <div className="font-display font-bold text-xs text-white mt-1">{estimate.time}</div>
                  </div>
                  <div className="p-2 rounded bg-black/60 border border-white/5">
                    <div className="text-[10px] text-[#9CA3AF] font-mono">Dealer Cost</div>
                    <div className="font-display font-bold text-xs text-red-400 mt-1 line-through">{estimate.dealerCost}</div>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-xs font-mono focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone (UK)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-xs font-mono focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-xs font-mono focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Optional details: fault codes (e.g. P0606), part number from ECU sticker, or recent breakdown history..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1015] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-xs font-mono focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] hover:shadow-[0_0_25px_rgba(255,30,39,0.5)] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-red-950/40"
              >
                {isSubmitting ? (
                  <span>Generating Estimate & Reference...</span>
                ) : (
                  <>
                    <span>Confirm & Book Diagnostic Assessment</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
