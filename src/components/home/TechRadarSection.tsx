import React, { useState } from 'react';
import { ArrowRight, Cpu, Layers, CheckCircle } from 'lucide-react';
import { technologiesData } from '../../data/technologiesData';

interface TechRadarSectionProps {
  onNavigate: (path: string) => void;
}

export const TechRadarSection: React.FC<TechRadarSectionProps> = ({ onNavigate }) => {
  const categories = ['All', 'Frontend', 'Backend & Cloud', 'Mobile', 'AI & ML', 'Data & Enterprise', 'Distributed Systems'] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered = selectedCategory === 'All' 
    ? technologiesData 
    : technologiesData.filter(t => t.category === selectedCategory);

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFBFD] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
              TECHNOLOGY RADAR
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise technology stack. <br />
              Chosen for velocity and scale.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              We do not chase transient hype. Our production stacks are chosen for proven concurrency, long-term ecosystem stability, and zero vendor lock-in.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/technologies')}
            className="self-start md:self-auto px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-900 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <span>Explore Full Tech Radar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 9).map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-slate-900">
                    {tech.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                    {tech.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {tech.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
