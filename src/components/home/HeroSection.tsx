import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
  onOpenAskAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenAskAi }) => {
  return (
    <section className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 bg-[#FAFBFD] overflow-hidden border-b border-slate-100">
      {/* Subtle Graph Grid & Soft Ambient Purple/Indigo Gradient (Faithful to Softech) */}
      <div className="absolute inset-0 bg-subtle-grid opacity-70 pointer-events-none"></div>
      
      {/* Soft gradient aura top-left (visible in Softech screenshot) */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-purple-200/40 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-blue-100/30 via-slate-100/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow Pill Badge (Exact from Softech) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-[13px] font-semibold tracking-wider uppercase shadow-2xs mb-8 transition-transform hover:scale-[1.02]">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
          <span>PRODUCT ENGINEERING • WEB • MOBILE • AI</span>
        </div>

        {/* Large Bold Hero Headline (Exact typography proportions from Softech with user positioning) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] sm:leading-[1.06] mb-6">
          Engineering Scalable <br className="hidden sm:inline" />
          Digital Products for <br className="hidden sm:inline" />
          Global Businesses.
        </h1>

        {/* Subtitle (Matching Softech copy layout) */}
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-10">
          From strategy and UX to engineering, integrations and AI — one team accountable from the first product decision through production and growth.
        </p>

        {/* Two CTAs Side-by-Side (Exact Pill Styles) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-14">
          {/* Primary: See our work -> */}
          <button
            onClick={() => onNavigate('/case-studies')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
          >
            <span>See our work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary: Discuss your project */}
          <button
            onClick={() => onNavigate('/start-a-project')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm transition-all shadow-2xs flex items-center justify-center cursor-pointer active:scale-95"
          >
            Discuss your project
          </button>
        </div>

        {/* Architecture & Engineering Capabilities Proofline */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
            Full-Lifecycle Product Studio
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
            9 Core Engineering Disciplines
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
            Web • Mobile • Distributed Systems • Applied AI
          </span>
        </div>

      </div>
    </section>
  );
};
