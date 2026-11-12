import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { articlesData } from '../../data/articlesData';

interface LatestInsightsSectionProps {
  onNavigate: (path: string) => void;
}

export const LatestInsightsSection: React.FC<LatestInsightsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Softech) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
              INSIGHTS & ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How we design, build and evolve digital products.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Practical technical essays, architecture case studies, and engineering post-mortems from the Novapex engineering team.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/insights')}
            className="self-start md:self-auto px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-900 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <span>Read all insights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid (Exact layout from Softech homepage featured articles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onNavigate(`/insights/${article.slug}`)}
              className="p-8 rounded-3xl bg-[#FAFBFD] hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                  <span className="text-indigo-600 font-semibold uppercase tracking-wider text-[11px]">
                    {article.category.split('/')[0].trim()}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{article.date}</span>
                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
