import React from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Cpu, 
  Microscope, 
  ShieldCheck, 
  Clock, 
  Calculator, 
  PhoneCall, 
  Gauge
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: <Microscope className="w-6 h-6 text-red-500" />,
      title: 'Component-Level Micro-Soldering',
      description: 'We don\'t simply swap expensive control units. Our specialists diagnose circuit traces, BGA processors, and power transistors under optical magnification, saving you up to 75% compared to dealer replacements.'
    },
    {
      icon: <Gauge className="w-6 h-6 text-red-500" />,
      title: 'Dealer-Level OEM Software Suites',
      description: 'Equipped with official manufacturer diagnostic systems including ODIS (VAG), ISTA (BMW), Xentry (Mercedes-Benz) and Autel MaxiSys Ultra for complete network validation.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      title: '12-Month Hardware Guarantee',
      description: 'Every repaired ECU, electronic module, or cloned donor unit leaves our bench backed by a comprehensive 12-month Care ECU Solutions repair warranty.'
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: 'Fast 24 to 48 Hour Turnaround',
      description: 'We understand vehicle downtime impacts your livelihood. Standard bench jobs are diagnosed and returned within 24-48 hours, with urgent same-day testing available upon appointment.'
    },
    {
      icon: <Calculator className="w-6 h-6 text-red-500" />,
      title: 'Transparent Fixed-Price Quotes',
      description: 'No speculative diagnostic fees or surprise add-ons. We conduct an initial bench assessment and confirm an exact fixed price before commencing any soldering or programming work.'
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-red-500" />,
      title: 'Direct Specialist Engineer Access',
      description: 'No generic call centre scripts. You speak directly to the automotive electronics technician examining your circuit board, getting clear and honest technical answers.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#08090C] relative border-t border-white/[0.06]">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badgeText="Engineering Discipline"
          badgeIcon={<Cpu className="w-3.5 h-3.5" />}
          titlePrefix="Why Motorists & Garages"
          titleHighlight="Choose Care ECU Solutions"
          description="Precision electronics diagnostics built on authentic component-level repair rather than expensive, speculative parts-swapping."
          align="center"
        />

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-[#090A0E] border border-white/[0.08] hover:border-red-500/60 shadow-lg hover:shadow-[0_15px_40px_rgba(255,30,39,0.18)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(255,30,39,0.4)] transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-red-400 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                <span>BENCH PROTOCOL</span>
                <span className="text-red-400 font-bold">0{idx + 1} // VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
