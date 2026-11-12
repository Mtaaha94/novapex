import React, { useState } from 'react';
import { ArrowRight, Search, CheckCircle2, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

interface CaseStudiesListPageProps {
  onNavigate: (path: string) => void;
}

export const CaseStudiesListPage: React.FC<CaseStudiesListPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'Flagship', 'Marketplace', 'Vertical SaaS', 'Mobile App', 'PropTech', 'Illustrative Project'];

  const filtered = caseStudiesData.filter((c) => {
    const matchesFilter = 
      filter === 'All' 
        ? true 
        : filter === 'Flagship' 
          ? c.isFlagship 
          : c.category.includes(filter) || c.projectStatus.includes(filter);

    const matchesSearch = 
      !search.trim() || 
      c.title.toLowerCase().includes(search.toLowerCase()) || 
      c.summary.toLowerCase().includes(search.toLowerCase()) ||
      c.client.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Proven Scale & Engineering
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Case studies & production deliveries.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Explore how Novapex designs, engineers, and scales digital products across high-liability verticals—from agricultural trading and fire safety to heavy equipment logistics and self-storage SaaS.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-10 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search case studies..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-slate-900 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((study) => (
            <div
              key={study.id}
              onClick={() => onNavigate(`/case-studies/${study.slug}`)}
              className="rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 p-8 sm:p-10 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
                style={{ backgroundColor: study.accentColor || '#6366f1' }}
              ></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {study.tag}
                  </span>
                  <span>{study.year}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold tracking-wide uppercase text-slate-400">
                    {study.client} • {study.projectStatus}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {study.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {study.summary}
                </p>

                {/* Verified Metrics */}
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

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
    </div>
  );
};
