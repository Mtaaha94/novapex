import React, { useState, useEffect, useMemo } from 'react';
import { Search, Sparkles, X, ArrowRight, BookOpen, Layers, Briefcase, Cpu, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { articlesData } from '../data/articlesData';
import { technologiesData } from '../data/technologiesData';

interface AskAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const AskAiModal: React.FC<AskAiModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'services' | 'cases' | 'articles'>('all');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open if parent handles it
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Pre-baked consultative responses for common technical architecture queries
  const aiKnowledgeBase: Record<string, { summary: string; recommendedServices: string[]; recommendedCases: string[] }> = {
    'mvp': {
      summary: 'For commercial MVPs, Novapex engineers a production-ready, feature-complete release in 8 to 12 weeks. We deploy Next.js with Tailwind on the frontend, NestJS/Node.js or Python FastAPI on the backend, and PostgreSQL with Stripe for automated billing.',
      recommendedServices: ['custom-software-development', 'web-development'],
      recommendedCases: ['rentvault-self-storage-management-saas']
    },
    'ai': {
      summary: 'Novapex integrates enterprise-grade AI using deterministic JSON schemas, vector retrieval (pgvector/Qdrant), and human-in-the-loop validation queues. We avoid unconstrained chat hallucinations by restricting LLMs to structured API calls with strict confidence thresholds.',
      recommendedServices: ['ai-machine-learning'],
      recommendedCases: ['agritrade-global-agricultural-marketplace-ai']
    },
    'offline': {
      summary: 'Our mobile engineering team utilizes SQLite with WatermelonDB and Conflict-Free Replicated Data Types (CRDTs). The app executes 100% locally in zero-connectivity field conditions and automatically performs background delta synchronization when cellular networks are restored.',
      recommendedServices: ['mobile-app-development'],
      recommendedCases: ['apexsafety-fire-safety-operating-system', 'fleetpulse-heavy-equipment-rental-operations']
    },
    'backend': {
      summary: 'For high-concurrency enterprise workloads (50k+ req/sec), we architect event-driven microservices using Node.js / NestJS, Apache Kafka for durable event streaming, Redis for distributed caching, and clustered PostgreSQL with read replicas.',
      recommendedServices: ['backend-engineering', 'data-engineering-analytics'],
      recommendedCases: ['agritrade-global-agricultural-marketplace-ai']
    },
    'erp': {
      summary: 'We build bespoke ERP and operational platforms that replace brittle spreadsheets and costly enterprise per-seat licenses. We engineer bidirectional API adapters to integrate with SAP, Salesforce, or Oracle without operational downtime.',
      recommendedServices: ['erp-enterprise-software'],
      recommendedCases: ['fleetpulse-heavy-equipment-rental-operations']
    }
  };

  const handleAiConsult = (topicKey: string, promptText: string) => {
    setIsAiLoading(true);
    setQuery(promptText);
    setTimeout(() => {
      const entry = aiKnowledgeBase[topicKey] || {
        summary: `Novapex engineers scalable, production-grade digital solutions tailored to "${promptText}". Our cross-functional squads span architecture, UX/UI, full-stack engineering, and AI automation with 100% intellectual property ownership transferred to you.`,
        recommendedServices: ['web-development', 'backend-engineering'],
        recommendedCases: ['agritrade-global-agricultural-marketplace-ai']
      };
      setAiAnswer(entry.summary);
      setIsAiLoading(false);
    }, 400);
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { services: servicesData.slice(0, 3), cases: caseStudiesData.slice(0, 2), articles: articlesData.slice(0, 2), tech: technologiesData.slice(0, 4) };

    const services = servicesData.filter(s => s.title.toLowerCase().includes(q) || s.overview.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    const cases = caseStudiesData.filter(c => c.title.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q));
    const articles = articlesData.filter(a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q)));
    const tech = technologiesData.filter(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.tags.some(tag => tag.toLowerCase().includes(q)));

    return { services, cases, articles, tech };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="relative border-b border-slate-100 flex items-center px-4 py-3.5 bg-slate-50/50">
          <div className="flex items-center gap-2 text-indigo-600 mr-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (aiAnswer) setAiAnswer(null);
            }}
            placeholder="Ask AI or search services, case studies, tech stack..."
            className="w-full text-base bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 font-normal"
            autoFocus
          />
          {query && (
            <button 
              onClick={() => { setQuery(''); setAiAnswer(null); }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="ml-2 hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 border border-slate-200 px-2 py-0.5 rounded bg-white">
            ESC
          </div>
        </div>

        {/* AI Quick Prompts Pills */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Prompts:
          </span>
          <button
            onClick={() => handleAiConsult('mvp', 'How does Novapex deliver an enterprise MVP in 8-12 weeks?')}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shrink-0 transition-all font-medium"
          >
            MVP Timeline & Stack
          </button>
          <button
            onClick={() => handleAiConsult('ai', 'How do you engineer enterprise AI with zero hallucinations?')}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shrink-0 transition-all font-medium"
          >
            AI & RAG Architecture
          </button>
          <button
            onClick={() => handleAiConsult('offline', 'How does offline-first sync work for mobile field apps?')}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shrink-0 transition-all font-medium"
          >
            Offline Mobile Sync
          </button>
          <button
            onClick={() => handleAiConsult('backend', 'What backend architecture supports 50k+ req/sec?')}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shrink-0 transition-all font-medium"
          >
            50k req/s Backend
          </button>
        </div>

        {/* Body Results & AI Consultation Output */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI Response Card */}
          {isAiLoading && (
            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-3 text-indigo-700 text-sm animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Analyzing technical architecture and Novapex engineering standards...</span>
            </div>
          )}

          {aiAnswer && (
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-indigo-700 tracking-wide uppercase">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" /> Novapex Technical Advisor
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Architecture Matrix</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {aiAnswer}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('/start-a-project');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all flex items-center gap-1.5"
                >
                  Schedule Technical Scoping <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('/services');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100 transition-all"
                >
                  Explore Engineering Capabilities
                </button>
              </div>
            </div>
          )}

          {/* Categorized Live Search Results */}
          <div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Engineering Services ({searchResults.services.length})
            </div>
            <div className="space-y-1">
              {searchResults.services.map(s => (
                <div
                  key={s.id}
                  onClick={() => {
                    onClose();
                    onNavigate(`/services/${s.slug}`);
                  }}
                  className="p-2.5 rounded-xl hover:bg-slate-100/80 cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {s.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{s.tagline}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-700 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Case Studies ({searchResults.cases.length})
            </div>
            <div className="space-y-1">
              {searchResults.cases.map(c => (
                <div
                  key={c.id}
                  onClick={() => {
                    onClose();
                    onNavigate(`/case-studies/${c.slug}`);
                  }}
                  className="p-2.5 rounded-xl hover:bg-slate-100/80 cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {c.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{c.summary}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-700 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Technical Insights ({searchResults.articles.length})
            </div>
            <div className="space-y-1">
              {searchResults.articles.map(a => (
                <div
                  key={a.id}
                  onClick={() => {
                    onClose();
                    onNavigate(`/insights/${a.slug}`);
                  }}
                  className="p-2.5 rounded-xl hover:bg-slate-100/80 cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 group-hover:text-purple-600 transition-colors">
                        {a.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{a.readTime} • {a.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-700 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700">Novapex Digital Engineering</span>
            <span>•</span>
            <span>Global Delivery</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onNavigate('/start-a-project');
            }}
            className="text-slate-900 font-semibold hover:underline flex items-center gap-1"
          >
            Start a Project <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
