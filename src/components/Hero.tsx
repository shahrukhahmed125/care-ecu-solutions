import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/careEcuData';
import { 
  ArrowRight, 
  ChevronDown, 
  Cpu, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Terminal,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  // Live simulated bench telemetry
  const [pulsePhase, setPulsePhase] = useState(0);
  const [simulatedVoltage, setSimulatedVoltage] = useState(13.8);

  // Parallax animation state based on scroll & mouse movement
  const [scrollY, setScrollY] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 100);
      setSimulatedVoltage(13.6 + Math.sin(Date.now() / 1000) * 0.25);
    }, 120);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-[#050507]">
      {/* 
        CINEMATIC PARALLAX BACKGROUND 
        Shifts smoothly with scroll and mouse movement
      */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${scrollY * 0.25 + mouseOffset.y * 0.4}px, 0) scale(1.12)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85"
          alt="High-performance automotive electronics and cockpit"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 saturate-120"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Secondary fallback visual blend */}
        <div className="absolute inset-0 bg-[#050507]/60" />
      </div>

      {/* Volumetric Dark Vignette & Red Light Cones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/90 via-[#050507]/75 to-[#050507] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,30,39,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* Atmospheric Crimson Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-red-600/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />

      {/* Cinematic Red Laser Scanning Line Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF1E27] to-transparent animate-scanline shadow-[0_0_15px_#FF1E27]" />
      </div>

      {/* CENTERED BANNER CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Technical Eyebrow Badge (Centered) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18080B] border border-red-500/40 text-red-400 text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-5 shadow-[0_0_15px_rgba(255,30,39,0.25)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#FF1E27]" />
          <span>Automotive ECU Engineering &bull; Romford UK</span>
        </div>

        {/* Master Headline (Centered - Perfectly Proportioned Font Size) */}
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] text-white tracking-tight mb-5 max-w-4xl">
          Precision ECU <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7F9FC] to-[#FF334B]">Diagnostics.</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF334B] via-[#FF1E27] to-[#FF6B82] drop-shadow-[0_0_25px_rgba(255,30,39,0.35)]">
            Smarter Automotive
          </span> Solutions.
        </h1>

        {/* Supporting Copy (Centered) */}
        <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Specialist automotive diagnostics, ECU repairs, vehicle electronics and software programming designed to identify faults and get you moving again. Tested and certified on dedicated test benches in Romford.
        </p>

        {/* Action CTAs & Direct Telephone (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onOpenQuoteModal}
            data-cursor="magnetic"
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,30,39,0.5)] hover:shadow-[0_0_35px_rgba(255,51,75,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-6 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#0E1015]/90 hover:bg-[#161820] text-[#D1D5DB] hover:text-white border border-white/10 hover:border-red-500/50 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore Services</span>
          </button>

          {/* Direct Telephone Action */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-5 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-black/40 hover:bg-white/[0.05] border border-white/5 hover:border-red-500/30 text-[#9CA3AF] hover:text-red-400 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Centered Key Trust Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#090A0E]/85 backdrop-blur-md border border-red-500/20 max-w-3xl w-full mb-10 shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
          <div className="text-center border-r border-white/5 last:border-none">
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              {BUSINESS_INFO.metrics.experienceYears}
            </div>
            <div className="text-[11px] text-[#9CA3AF] font-mono mt-0.5">Years Bench Exp.</div>
          </div>

          <div className="text-center border-r border-white/5 last:border-none">
            <div className="text-xl sm:text-2xl font-display font-bold text-red-400">
              {BUSINESS_INFO.metrics.vehiclesResolved}
            </div>
            <div className="text-[11px] text-[#9CA3AF] font-mono mt-0.5">Vehicles Resolved</div>
          </div>

          <div className="text-center border-r border-white/5 last:border-none">
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              {BUSINESS_INFO.metrics.warrantyMonths}
            </div>
            <div className="text-[11px] text-[#9CA3AF] font-mono mt-0.5">Repair Warranty</div>
          </div>

          <div className="text-center">
            <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400">
              24 - 48h
            </div>
            <div className="text-[11px] text-[#9CA3AF] font-mono mt-0.5">Fast Turnaround</div>
          </div>
        </div>


        {/* 
          CENTERED LIVE BENCH TELEMETRY & OSCILLOSCOPE HUD
        */}
        <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-b from-[#0E1015] to-[#08090C] border border-red-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden text-left">
          
          {/* Telemetry Header */}
          <div className="px-5 py-3.5 bg-[#050507] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_8px_#FF1E27]" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                CECU_BENCH_TESTER // V4.8
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-emerald-400">
                VBAT: {simulatedVoltage.toFixed(2)}V
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded border border-red-500/40 shadow-[0_0_10px_rgba(255,30,39,0.25)]">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>ONLINE LINK</span>
              </div>
            </div>
          </div>

          {/* Dual-Channel Live CAN Bus Oscilloscope Waveform */}
          <div className="p-4 sm:p-5 bg-[#08090C]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF] mb-2">
              <span className="flex items-center gap-1.5 text-red-400 font-semibold">
                <Zap className="w-3.5 h-3.5 text-red-500" />
                <span>CAN-HIGH (2.5V - 3.5V) / CAN-LOW (1.5V - 2.5V) OSCILLOSCOPE DIFFERENTIAL</span>
              </span>
              <span className="hidden sm:inline">500 kbps Differential &bull; Sampling: 100MHz</span>
            </div>

            {/* SVG Waveform Simulation in Vibrant Crimson */}
            <div className="h-14 sm:h-16 w-full overflow-hidden bg-[#050507] rounded-xl border border-white/5 relative p-2">
              <svg viewBox="0 0 600 50" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                {/* Reference Grid Lines */}
                <line x1="0" y1="12" x2="600" y2="12" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="25" x2="600" y2="25" stroke="rgba(255,255,255,0.1)" />
                <line x1="0" y1="38" x2="600" y2="38" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                {/* CAN-High Waveform in Glowing Bright Crimson */}
                <path
                  d={`M 0 16 Q 25 ${10 + (pulsePhase % 6)}, 50 16 T 100 16 T 150 ${8 + (pulsePhase % 7)} T 200 16 T 250 16 T 300 ${8 + (pulsePhase % 5)} T 350 16 T 400 16 T 450 ${8 + (pulsePhase % 6)} T 500 16 T 550 16 T 600 16`}
                  fill="none"
                  stroke="#FF1E27"
                  strokeWidth="2.4"
                  className="drop-shadow-[0_0_8px_#FF1E27]"
                />
                {/* CAN-Low Waveform (Inverted Silver/Grey) */}
                <path
                  d={`M 0 34 Q 25 ${38 - (pulsePhase % 6)}, 50 34 T 100 34 T 150 ${40 - (pulsePhase % 7)} T 200 34 T 250 34 T 300 ${40 - (pulsePhase % 5)} T 350 34 T 400 34 T 450 ${40 - (pulsePhase % 6)} T 500 34 T 550 34 T 600 34`}
                  fill="none"
                  stroke="#D1D5DB"
                  strokeWidth="1.6"
                  strokeOpacity="0.85"
                />
              </svg>
            </div>

            {/* Bottom 4 Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-[#D1D5DB]">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0E1015] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="truncate">Component Soldering</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0E1015] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="truncate">100% Bench Load Tested</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0E1015] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="truncate">TriCore / BDM Flashed</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0E1015] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="truncate">Romford Workshop C4</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll To Explore Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-[#9CA3AF] hover:text-red-400 text-xs font-mono transition-colors group cursor-pointer"
            aria-label="Scroll to services section"
          >
            <span>SCROLL TO EXPLORE SERVICES</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
