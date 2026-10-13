import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/careEcuData';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (initialService?: string) => void;
  onOpenPostalModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenPostalModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor scroll for header background styling & section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'before-after', 'process', 'gallery', 'reviews', 'why-us', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Before & After', href: '#before-after', id: 'before-after' },
    { label: 'How We Work', href: '#process', id: 'process' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Engineering Announcement & Contact Bar */}
      <div className="hidden lg:block bg-[#050507] border-b border-white/[0.06] text-[10px] font-mono text-[#9CA3AF] py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
              <span className="text-white font-medium">Romford Workshop Open:</span> Mon-Fri 09:00 - 18:00
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-[#9CA3AF]">
              <ShieldCheck className="w-3 h-3 text-[#FF1E27]" />
              12-Month Hardware Guarantee &bull; 10+ Years Bench Expertise
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPostalModal}
              className="text-[#D1D5DB] hover:text-[#FF1E27] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              UK-Wide Postal Repair Instructions
            </button>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FF1E27] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FF1E27]" />
              <span>Direct: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Responsive Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050507]/95 backdrop-blur-md border-b border-[#FF1E27]/30 shadow-[0_10px_35px_rgba(0,0,0,0.95)] py-2'
            : 'bg-[#050507]/85 backdrop-blur-sm border-b border-white/[0.06] py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo */}
          <a
            href="#"
            className="group outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27] rounded-lg transition-transform"
            aria-label="Care ECU Solutions Homepage"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links (Visible on lg and above: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase transition-all duration-200 relative outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27] ${
                    isActive
                      ? 'text-white font-bold bg-[#FF1E27]/20 border border-[#FF1E27]/40 shadow-[0_0_10px_rgba(255,30,39,0.25)]'
                      : 'text-[#D1D5DB]/80 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-[2px] bg-[#FF1E27] rounded-full shadow-[0_0_6px_#FF1E27]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5">
            {/* Phone link on sm+ */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1015] border border-white/10 text-[11px] font-mono font-medium text-white hover:border-[#FF1E27]/60 hover:bg-[#161820] transition-all group"
              aria-label={`Call Care ECU Solutions on ${BUSINESS_INFO.phoneDisplay}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF1E27] group-hover:scale-125 transition-transform shadow-[0_0_6px_#FF1E27]" />
              <Phone className="w-3 h-3 text-[#FF1E27]" />
              <span className="hidden xl:inline">{BUSINESS_INFO.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Quote Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              data-cursor="magnetic"
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(255,30,39,0.4)] hover:shadow-[0_0_25px_rgba(255,51,75,0.65)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out" />
              <span className="relative flex items-center gap-1.5">
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle Button (Visible on < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0E1015] border border-white/10 text-white hover:text-[#FF1E27] hover:border-[#FF1E27]/50 focus:outline-none focus:ring-2 focus:ring-[#FF1E27] transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>


        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#090A0E] border-l border-red-500/30 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo showSubtitle={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-[#161820] text-white/70 hover:text-white border border-white/10 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between transition-all ${
                    activeSection === link.id
                      ? 'bg-red-950/60 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(255,30,39,0.2)]'
                      : 'text-[#D1D5DB] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPostalModal();
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-xs font-mono text-[#D1D5DB] hover:text-red-400 bg-[#0E1015] border border-white/5 cursor-pointer flex items-center justify-between"
              >
                <span>📦 UK-Wide Postal Repair Guide</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E1015] border border-white/15 text-white font-mono text-sm font-semibold hover:border-red-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white text-center font-bold tracking-wider text-xs font-mono uppercase shadow-lg shadow-red-950/40 cursor-pointer"
            >
              Request Diagnostics Quote
            </button>

            <p className="text-[11px] font-mono text-center text-[#9CA3AF] mt-1">
              Unit C4 Seedbed Centre, Romford RM7 0AZ
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
