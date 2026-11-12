import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldAlert, Cpu, Wrench, Award, Check } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

interface CaseStudyDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onNavigate }) => {
  const study = caseStudiesData.find(c => c.slug === slug) || caseStudiesData[0];

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('/case-studies')} className="hover:text-slate-900">Case Studies</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium truncate max-w-xs">{study.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white border-b border-slate-100 overflow-hidden mt-4">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold font-mono">
              {study.tag}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {study.projectStatus}
            </span>
            <span className="text-xs text-slate-400 font-mono">{study.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            {study.summary}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">{m.label}</div>
                {m.description && (
                  <div className="text-[11px] text-slate-400 mt-0.5">{m.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Breakdown Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Transparent Illustrative Showcase Notice */}
        <div className="p-5 rounded-2xl bg-indigo-50/90 border border-indigo-200/90 flex items-start gap-3.5 text-xs sm:text-sm text-indigo-950 shadow-2xs">
          <ShieldAlert className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">Engineering Showcase Notice: </span>
            <span>{study.disclaimer}</span>
          </div>
        </div>

        {/* The Business Challenge */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
            <ShieldAlert className="w-4 h-4" /> THE BUSINESS CHALLENGE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why traditional software failed the operational requirements
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {study.challenge}
          </p>
        </section>

        {/* Engineering Approach & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              ENGINEERING APPROACH
            </div>
            <h3 className="text-xl font-bold text-slate-900">Architecture & Technical Strategy</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {study.engineeringApproach}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              DELIVERED SOLUTION
            </div>
            <h3 className="text-xl font-bold text-slate-900">The Implemented Ecosystem</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Deliverables & Technology Stack */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xs grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">PRODUCTION DELIVERABLES</div>
            <ul className="space-y-2.5">
              {study.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-100 md:pl-8 pt-6 md:pt-0">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">TECHNOLOGY STACK</div>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase">Key Technical Highlights</div>
              <ul className="space-y-2 text-xs text-slate-600">
                {study.keyHighlights.map((kh, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{kh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Have a similar enterprise challenge?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Talk directly with the engineering squad that architected this platform.</p>
          </div>
          <button
            onClick={() => onNavigate('/start-a-project')}
            className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-1.5"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
