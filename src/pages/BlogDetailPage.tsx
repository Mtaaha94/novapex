import React, { useEffect } from 'react';
import { ArrowRight, ChevronRight, Clock, Calendar, BookOpen, Share2, Check, User, Sparkles } from 'lucide-react';
import { articlesData } from '../data/articlesData';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug, onNavigate }) => {
  const article = articlesData.find(a => a.slug === slug) || articlesData[0];

  const relatedArticles = articlesData.filter(a => 
    article.relatedArticleSlugs?.includes(a.slug) || (a.id !== article.id && a.category === article.category)
  ).slice(0, 2);

  // Injects Schema.org BlogPosting Structured Data dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': article.title,
      'description': article.summary,
      'author': {
        '@type': 'Organization',
        'name': article.author.name
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Novapex Digital Engineering',
        'url': 'https://novapexglobal.com'
      },
      'datePublished': article.date,
      'mainEntityOfPage': `https://novapexglobal.com/insights/${article.slug}`
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('/insights')} className="hover:text-slate-900">Insights</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium truncate max-w-xs">{article.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-slate-400 font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-400 font-mono">{article.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
          {article.summary}
        </p>

        {/* Author Bylines */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              NE
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-900">{article.author.name}</div>
              <div className="text-xs text-slate-500">{article.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
              }}
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs flex items-center gap-1.5"
              title="Copy link"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>
      </section>

      {/* Article Content Layout: Sidebar TOC + Main Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Table of Contents Box */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="sticky top-24 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">TABLE OF CONTENTS</div>
            <nav className="space-y-2 text-xs">
              {article.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="block text-slate-600 hover:text-indigo-600 transition-colors leading-relaxed"
                >
                  {toc.title}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('/start-a-project')}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors text-center"
              >
                Discuss Technical Strategy
              </button>
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <main className="lg:col-span-8 space-y-12">
          {article.content.map((sec) => (
            <section key={sec.sectionId} id={sec.sectionId} className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {sec.heading}
              </h2>

              <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
                {sec.body.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {sec.callout && (
                <div className="p-5 rounded-2xl bg-indigo-50/70 border-l-4 border-indigo-600 text-indigo-950 text-sm font-medium italic my-6">
                  "{sec.callout}"
                </div>
              )}

              {sec.codeSnippet && (
                <div className="rounded-2xl bg-slate-950 text-slate-200 p-5 font-mono text-xs overflow-x-auto border border-slate-800 space-y-2 my-6">
                  {sec.codeSnippet.caption && (
                    <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                      {sec.codeSnippet.caption}
                    </div>
                  )}
                  <pre className="leading-relaxed">
                    <code>{sec.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
                #{tag}
              </span>
            ))}
          </div>
        </main>
      </div>

      {/* Related Insights */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 border-t border-slate-200 mt-20 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900">Related Technical Papers</h3>
            <button
              onClick={() => onNavigate('/insights')}
              className="text-xs font-semibold text-indigo-600 hover:underline"
            >
              All Articles →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/insights/${rel.slug}`)}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg transition-all cursor-pointer space-y-3 group"
              >
                <div className="text-xs text-indigo-600 font-semibold">{rel.category.split('/')[0]}</div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">{rel.summary}</p>
                <div className="text-xs font-semibold text-slate-900 flex items-center gap-1 pt-2">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
