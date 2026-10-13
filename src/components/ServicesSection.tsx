import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/careEcuData';
import { ServiceItem } from '../types';
import { SectionHeader } from './SectionHeader';
import { SafeImage } from './SafeImage';
import { 
  Cpu, 
  Gauge, 
  Activity, 
  ShieldCheck, 
  Key, 
  Database, 
  Code, 
  LifeBuoy,
  ArrowRight,
  Clock,
  CheckCircle,
  X,
  Wrench,
  FileCheck,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ecu' | 'keys' | 'diagnostics' | 'coding'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Key': return <Key className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050507] relative border-t border-white/[0.06]">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badgeText="Full Automotive Electronics Spectrum"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          titlePrefix="Specialist Diagnostic &"
          titleHighlight="ECU Engineering Services"
          description="Component-level circuit diagnostics, proprietary calibration, key programming, and anti-theft immobiliser solutions performed in Romford by certified technicians."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar" role="tablist">
          {[
            { id: 'all', label: 'All Services (8)' },
            { id: 'ecu', label: 'ECU & Hardware Repairs' },
            { id: 'diagnostics', label: 'Diagnostics & Telemetry' },
            { id: 'keys', label: 'Keys & Immobiliser' },
            { id: 'coding', label: 'Remapping & Coding' },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white font-bold shadow-[0_0_20px_rgba(255,30,39,0.5)] scale-105'
                    : 'bg-[#0E1015] text-[#9CA3AF] hover:text-white hover:bg-[#161820] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#090A0E] border border-white/[0.08] hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(255,30,39,0.2)] interactive-card"
            >
              {/* Image Preview with SafeImage */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1015]">
                <SafeImage
                  src={service.imageUrl}
                  fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-[#090A0E]/40 to-transparent" />
                
                {/* Floating Technical Category Tag in Crimson */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-red-500/40 text-[10px] font-mono text-red-400 flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,30,39,0.2)]">
                  {getIcon(service.iconName)}
                  <span className="uppercase font-semibold">{service.category}</span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D1D5DB] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-500" />
                  <span>{service.turnaroundTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-red-400 transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action & Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-mono text-red-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>DIAGNOSTIC SCOPE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-[#161820] hover:bg-red-600 text-[#D1D5DB] hover:text-white text-[11px] font-mono transition-all cursor-pointer border border-white/5 hover:border-red-500"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bench Capability Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#0E1015] via-[#161820] to-[#0E1015] border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(255,30,39,0.15)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center justify-center text-red-500 shrink-0 shadow-[0_0_20px_rgba(255,30,39,0.35)]">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-base">
                Have an unusual or complex vehicle module fault?
              </div>
              <div className="text-xs font-mono text-[#9CA3AF] mt-0.5">
                We test ECUs, TCUs, BCMs, instrument clusters, CAS units, and steering locks on Romford simulation benches.
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectServiceForQuote('Custom Bench Diagnostic Assessment')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] hover:shadow-[0_0_25px_rgba(255,30,39,0.5)] text-white text-xs font-bold font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shadow-lg shadow-red-900/40"
          >
            Request Custom Assessment
          </button>
        </div>

      </div>

      {/* Comprehensive Service Deep-Dive Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveModalService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#090A0E] border border-red-500/40 rounded-2xl shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#161820] text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-500 shadow-[0_0_15px_rgba(255,30,39,0.3)]">
                {getIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider">
                  Care ECU Solutions &bull; {activeModalService.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Turnaround & Warranty Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1015] border border-white/10 text-xs font-mono text-[#D1D5DB]">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span>Turnaround: {activeModalService.turnaroundTime}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1015] border border-white/10 text-xs font-mono text-[#D1D5DB]">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Warranty: {activeModalService.warranty}</span>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-[#D1D5DB]/90 leading-relaxed mb-6">
              {activeModalService.fullDescription}
            </p>

            {/* Common Symptoms Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-[#9CA3AF] uppercase tracking-wider mb-3">
                Common Symptoms We Resolve:
              </h4>
              <ul className="space-y-2">
                {activeModalService.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supported Protocols / Hardware */}
            <div className="mb-8 p-4 rounded-xl bg-[#0E1015] border border-white/5">
              <h4 className="text-xs font-mono font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">
                Supported Protocols & Architectures:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.supportedProtocols.map((proto, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-[#161820] text-red-400 border border-red-500/20"
                  >
                    {proto}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 rounded-lg text-xs font-mono text-[#9CA3AF] hover:text-white cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForQuote(serviceName);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] hover:shadow-[0_0_25px_rgba(255,30,39,0.5)] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-900/40 transition-all cursor-pointer"
              >
                Book / Request Quote For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
