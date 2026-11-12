import React, { useState } from 'react';
import { ArrowRight, Search, Clock, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { articlesData } from '../data/articlesData';

interface BlogListPageProps {
  onNavigate: (path: string) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'AI & Machine Learning', 'Web Engineering', 'Mobile Engineering', 'Backend & Distributed Systems'];

  const filteredArticles = articlesData.filter((art) => {
    const matchesFilter = filter === 'All' ? true : art.category.includes(filter);
    const matchesSearch = 
      !search.trim() || 
      art.title.toLowerCase().includes(search.toLowerCase()) || 
      art.summary.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const featured = articlesData.find(a => a.featured) || articlesData[0];

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Engineering Insights
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Architectural perspectives & deep dives.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Written by the Novapex Editorial Team and principal engineers: field notes on production-grade AI, low-latency web platforms, offline-first mobile sync, and distributed event systems.
          </p>
        </div>
      </section>

      {/* Featured Article Card */}
      {featured && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div
            onClick={() => onNavigate(`/insights/${featured.slug}`)}
            className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group border border-slate-800"
          >
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 font-semibold uppercase tracking-wider">
                  Featured Publication
                </span>
                <span className="text-slate-400 font-mono">{featured.date}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                {featured.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {featured.summary}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <span>By {featured.author.name}</span>
                <span className="text-slate-500 font-mono">({featured.author.role})</span>
              </div>
              <span className="font-semibold text-white group-hover:text-indigo-300 flex items-center gap-1.5">
                Read Full Paper <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 space-y-4">
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
              placeholder="Search engineering insights..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-slate-900 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onNavigate(`/insights/${article.slug}`)}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
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

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{article.date}</span>
                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
