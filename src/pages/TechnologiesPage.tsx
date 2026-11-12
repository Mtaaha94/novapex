import React, { useState } from 'react';
import { ArrowRight, Cpu, Layers, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { technologiesData } from '../data/technologiesData';

interface TechnologiesPageProps {
  onNavigate: (path: string) => void;
}

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTier, setActiveTier] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & Cloud', 'Mobile', 'AI & ML', 'Data & Enterprise', 'Distributed Systems'];
  const tiers = ['All', 'Core Enterprise', 'Production Standard', 'Emerging Technology'];

  const filtered = technologiesData.filter((t) => {
    const matchesCat = activeCategory === 'All' || t.category === activeCategory;
    const matchesTier = activeTier === 'All' || t.level === activeTier;
    return matchesCat && matchesTier;
  });

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Architecture Radar
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Production technology radar.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Our technology decisions prioritize long-term maintainability, strictly typed safety, high-throughput concurrency, and zero vendor lock-in. Explore our verified production stack.
          </p>
        </div>
      </section>

      {/* Filter Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tiers */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs bg-slate-100 p-1 rounded-xl">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  activeTier === tier
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-medium ${
                    item.level === 'Core Enterprise' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    item.level === 'Production Standard' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                    'bg-purple-50 text-purple-700 border border-purple-200'
                  }`}>
                    {item.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <ShieldCheck className="w-4 h-4" /> ZERO LOCK-IN ARCHITECTURAL STANDARDS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Clean code, open standards, and total repository sovereignty.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-normal">
            We never use obscure proprietary frameworks that hold your company hostage. Every application is built with standard TypeScript, well-documented REST/GraphQL APIs, and Docker containerization. Any engineer on earth can pull down your repository and run it locally in minutes.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/start-a-project')}
              className="px-6 py-3 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              Discuss Tech Stack Alignment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
