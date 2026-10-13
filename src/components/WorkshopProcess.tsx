import React, { useState } from 'react';
import { WORKSHOP_STAGES } from '../data/careEcuData';
import { SectionHeader } from './SectionHeader';
import { SafeImage } from './SafeImage';
import { 
  Cpu, 
  Search, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Activity, 
  Layers,
  Sparkles
} from 'lucide-react';

export const WorkshopProcess: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = WORKSHOP_STAGES[activeStageIndex];

  const getStageIcon = (step: string) => {
    switch (step) {
      case '01': return <Activity className="w-4 h-4" />;
      case '02': return <Search className="w-4 h-4" />;
      case '03': return <Wrench className="w-4 h-4" />;
      case '04': return <CheckCircle2 className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#050507] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badgeText="Surgical Diagnostic Engineering"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          titlePrefix="From Fault Detection to the"
          titleHighlight="Right Solution."
          description="A methodical 4-stage technical workflow that pinpoints elusive electronic faults without speculative parts replacement."
          align="center"
        />

        {/* 4-Stage Interactive Timeline Bar */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-[#FF1E27] -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_12px_#FF1E27]"
            style={{ width: `${(activeStageIndex / (WORKSHOP_STAGES.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {WORKSHOP_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPassed = idx < activeStageIndex;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-[#0E1015] border-red-500 shadow-[0_0_25px_rgba(255,30,39,0.4)] scale-[1.02]'
                      : isPassed
                      ? 'bg-[#090A0E] border-red-500/40 text-[#D1D5DB]'
                      : 'bg-[#090A0E] border-white/5 text-[#9CA3AF] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#FF1E27] text-white' : 'bg-white/5 text-[#9CA3AF]'
                    }`}>
                      STAGE {stage.step}
                    </span>
                    <div className={`p-1.5 rounded-full ${
                      isActive ? 'text-red-400 bg-red-950/60' : 'text-[#9CA3AF]'
                    }`}>
                      {getStageIcon(stage.step)}
                    </div>
                  </div>

                  <div className="font-display font-bold text-sm sm:text-base text-white">
                    {stage.shortName}
                  </div>
                  <div className="text-[11px] font-mono text-[#9CA3AF] truncate mt-1">
                    {stage.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Preview Card */}
        <div className="rounded-2xl bg-[#090A0E] border border-red-500/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Stage Image with SafeImage (6 Cols) */}
          <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto overflow-hidden bg-black min-h-[300px]">
            <SafeImage
              src={currentStage.imageUrl}
              fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt={currentStage.title}
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-transparent to-black/40" />

            {/* Badge in Crimson */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-red-500/40 text-xs font-mono text-red-400 font-semibold shadow-[0_0_12px_rgba(255,30,39,0.25)]">
              {currentStage.badge}
            </div>

            {/* Metrics Chips */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {currentStage.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-xs font-mono"
                >
                  <span className="text-[#9CA3AF]">{metric.label}: </span>
                  <span className="text-red-400 font-bold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Content & Technical Checkpoints (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>ROMFORD WORKSHOP BENCH PROTOCOL</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                {currentStage.title}
              </h3>

              <p className="text-sm text-[#D1D5DB]/85 leading-relaxed mb-8">
                {currentStage.description}
              </p>

              {/* Technical Execution Bullet Points */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono font-bold text-[#9CA3AF] uppercase tracking-wider">
                  Bench Procedures Performed:
                </h4>
                {currentStage.technicalDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#D1D5DB]">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_6px_#FF1E27]" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Step Navigation Buttons */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                disabled={activeStageIndex === 0}
                onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-lg text-xs font-mono text-[#9CA3AF] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                ← Previous Stage
              </button>

              <button
                onClick={() => {
                  if (activeStageIndex < WORKSHOP_STAGES.length - 1) {
                    setActiveStageIndex((prev) => prev + 1);
                  } else {
                    setActiveStageIndex(0);
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] hover:shadow-[0_0_20px_rgba(255,30,39,0.5)] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-red-950/40"
              >
                <span>{activeStageIndex === WORKSHOP_STAGES.length - 1 ? 'Replay Workflow' : 'Next Stage'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
