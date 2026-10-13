import React, { useState } from 'react';
import { FAQ_DATA } from '../data/careEcuData';
import { SectionHeader } from './SectionHeader';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Repair Process', 'Postal Service', 'Keys & Remapping'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#08090C] relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badgeText="Automotive Electronics FAQ"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
          titlePrefix="Frequently Asked"
          titleHighlight="Questions"
          description="Everything you need to know regarding bench testing, postal repairs, warranties, and immobiliser reprogramming."
          align="center"
        />

        {/* Search and Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., turnaround time, water damage, postal)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#090A0E] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-xs sm:text-sm font-mono focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white font-bold shadow-[0_0_15px_rgba(255,30,39,0.4)]'
                    : 'bg-[#0E1015] text-[#9CA3AF] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#0E1015] border-red-500/50 shadow-[0_0_20px_rgba(255,30,39,0.15)]'
                    : 'bg-[#090A0E] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-red-600 text-white'
                        : 'bg-[#161820] text-[#9CA3AF]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#D1D5DB]/85 leading-relaxed border-t border-white/[0.04]">
                    <p className="mt-3">{faq.answer}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-500/30">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-xs font-mono text-[#9CA3AF] bg-[#090A0E] rounded-2xl border border-white/5">
              No matching questions found for "{searchQuery}". Contact our team directly for bespoke guidance.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
