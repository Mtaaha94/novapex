import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudiesData';

interface CaseStudiesSectionProps {
  onNavigate: (path: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigate }) => {
  const flagshipCases = caseStudiesData.filter(c => c.isFlagship);

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFBFD] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Softech) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
              ILLUSTRATIVE ENGINEERING SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Products designed for day-to-day business.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Original software architectures, prototypes and interface systems engineered by Novapex to demonstrate high-concurrency order books, offline IoT sync, and telematics dispatch.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/case-studies')}
            className="self-start md:self-auto px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-900 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <span>View all showcases</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Flagship Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipCases.map((study) => (
            <div
              key={study.id}
              onClick={() => onNavigate(`/case-studies/${study.slug}`)}
              className="rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Color Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
                style={{ backgroundColor: study.accentColor || '#6366f1' }}
              ></div>

              <div className="space-y-6">
                {/* Meta Tags */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {study.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[11px] font-semibold">
                    {study.projectStatus}
                  </span>
                </div>

                {/* Title & Client */}
                <div className="space-y-2">
                  <div className="text-xs font-bold tracking-wide uppercase text-slate-400">
                    {study.client}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {study.title}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {study.summary}
                </p>

                {/* Verified Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.techStack.length > 5 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-50 text-slate-400 text-xs font-mono">
                      +{study.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Bottom */}
              <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 font-medium">Read engineering architecture</span>
                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-1.5">
                  Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
