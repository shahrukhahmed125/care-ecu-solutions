import React from 'react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from '../data/careEcuData';
import { SectionHeader } from './SectionHeader';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

export const ReviewMarquee: React.FC = () => {
  // Split reviews into two distinct sets
  const rowOneReviews = CUSTOMER_REVIEWS.slice(0, 4);
  const rowTwoReviews = CUSTOMER_REVIEWS.slice(4, 8);

  // Duplicate for seamless infinite marquee loop
  const rowOneDuplicated = [...rowOneReviews, ...rowOneReviews, ...rowOneReviews];
  const rowTwoDuplicated = [...rowTwoReviews, ...rowTwoReviews, ...rowTwoReviews];

  const renderCard = (review: typeof CUSTOMER_REVIEWS[0], keySuffix: string | number) => (
    <div
      key={`${review.id}-${keySuffix}`}
      className="w-[340px] sm:w-[400px] shrink-0 p-6 rounded-2xl bg-[#090A0E] border border-white/[0.08] hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_10px_30px_rgba(255,30,39,0.2)] group select-none mr-6"
    >
      <div>
        {/* Rating & Source Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-red-500">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
            ))}
          </div>

          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#161820] border border-white/5 text-[10px] font-mono text-[#9CA3AF]">
            <CheckCircle2 className="w-3 h-3 text-red-500" />
            <span>{review.source}</span>
          </span>
        </div>

        {/* Review Quote */}
        <p className="text-xs sm:text-sm text-[#D1D5DB]/90 leading-relaxed italic mb-6">
          "{review.reviewText}"
        </p>
      </div>

      {/* Author and Vehicle Details */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div>
          <div className="font-display font-bold text-sm text-white group-hover:text-red-400 transition-colors">
            {review.author}
          </div>
          <div className="text-[11px] font-mono text-[#9CA3AF]">
            {review.vehicle}
          </div>
        </div>

        <span className="text-[10px] font-mono text-red-400 px-2 py-1 rounded bg-red-950/60 border border-red-500/30">
          {review.serviceType.split('&')[0]}
        </span>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-24 bg-[#050507] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Crimson Lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Unified Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Verified Customer Feedback"
          badgeIcon={<MessageSquare className="w-3.5 h-3.5" />}
          titlePrefix="Trusted by Drivers Who"
          titleHighlight="Value Getting It Right."
          description="Over 5,000 satisfied vehicle owners and trade garages across the UK trust our bench diagnostics, immobiliser recovery, and remapping expertise."
          align="center"
        />
      </div>

      {/* Marquee Row 1: Moves Right to Left */}
      <div className="relative w-full overflow-hidden mb-6 py-2">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left">
          {rowOneDuplicated.map((rev, idx) => renderCard(rev, `r1-${idx}`))}
        </div>
      </div>

      {/* Marquee Row 2: Moves Left to Right */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-right">
          {rowTwoDuplicated.map((rev, idx) => renderCard(rev, `r2-${idx}`))}
        </div>
      </div>

      {/* Verified Google Badge in Red */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0E1015] border border-red-500/30 text-xs font-mono text-[#D1D5DB] shadow-[0_0_20px_rgba(255,30,39,0.15)]">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span>Independent Google Rating: 5.0 ★ &bull; Verified Romford Auto Electricians</span>
        </div>
      </div>
    </section>
  );
};
