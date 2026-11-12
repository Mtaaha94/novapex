import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, BarChart3, TrendingUp, Layers } from 'lucide-react';
import { industriesData } from '../data/industriesData';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Vertical Domain Expertise
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Industries engineered for tomorrow.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Generic software agencies attempt to build everything with identical templates. Novapex immerses deep into industry domain logic—understanding physical equipment workflows, compliance mandates, and operational economics.
          </p>
        </div>
      </section>

      {/* Industries Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {industriesData.map((ind, idx) => (
          <div
            key={ind.id}
            className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-2xs hover:shadow-xl transition-all duration-300 space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold font-mono text-indigo-600 uppercase tracking-wider">
                  Vertical {idx + 1} • Domain Focus
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {ind.name}
                </h2>
                <p className="text-base sm:text-lg text-indigo-900 font-medium">
                  {ind.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {ind.description}
                </p>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {ind.featuredTech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Box */}
              <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  VERIFIED INDUSTRY BENCHMARKS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {ind.stats.map((st, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="text-2xl font-black font-mono text-slate-900">{st.value}</div>
                      <div className="text-xs text-slate-500 font-medium">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenges vs Solutions Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" /> Industry Pain Points
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {ind.challenges.map((ch, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Novapex Engineering Solution
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {ind.solutions.map((sol, solIdx) => (
                    <li key={solIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">Domain-tailored squads ready for scoping</span>
              <button
                onClick={() => onNavigate('/start-a-project')}
                className="font-semibold text-slate-900 hover:text-indigo-600 flex items-center gap-1.5"
              >
                Discuss {ind.name} Architecture <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
