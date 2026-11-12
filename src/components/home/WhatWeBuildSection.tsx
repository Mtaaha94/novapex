import React from 'react';
import { ArrowRight, Code2, Sparkles, Smartphone, Server, Building2, Database, Layers } from 'lucide-react';

interface WhatWeBuildSectionProps {
  onNavigate: (path: string) => void;
}

export const WhatWeBuildSection: React.FC<WhatWeBuildSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: 'web-apps',
      slug: 'web-development',
      title: 'Websites & web applications',
      description: 'High-performance Next.js and React platforms, enterprise SaaS portals, and customer dashboards built with sub-second page loads and accessible design systems.',
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      tag: 'Next.js • React • TypeScript',
      stat: '< 0.8s LCP'
    },
    {
      id: 'ai-ops',
      slug: 'ai-machine-learning',
      title: 'AI connected to operations & APIs',
      description: 'Controlled agentic workflows, deterministic LLM tool-calling, and custom RAG pipelines connected directly to your business databases with mandatory human-in-the-loop review.',
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      tag: 'LLMs • RAG • Agents',
      stat: 'Zero hallucination guardrails'
    },
    {
      id: 'mobile-apps',
      slug: 'mobile-app-development',
      title: 'iOS & Android mobile apps',
      description: 'React Native and native mobile applications with offline-first local databases, BLE hardware integrations, GPS tracking, and buttery 120 FPS gestures for field operations and consumers.',
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      tag: 'React Native • Flutter • Swift',
      stat: 'Offline-First Sync'
    },
    {
      id: 'backend-eng',
      slug: 'backend-engineering',
      title: 'Backend engineering & event streams',
      description: 'Resilient microservices, high-throughput Kafka and Redis streams, and clustered PostgreSQL architectures engineered to maintain data consistency under 50k+ req/sec.',
      icon: <Server className="w-5 h-5 text-blue-600" />,
      tag: 'Node.js • Kafka • PostgreSQL',
      stat: '99.99% Availability'
    },
    {
      id: 'erp-enterprise',
      slug: 'erp-enterprise-software',
      title: 'ERP & enterprise business software',
      description: 'Bespoke operational platforms, inventory tracking, and billing backbones tailored specifically to your workflows without exorbitant recurring per-seat software licensing.',
      icon: <Building2 className="w-5 h-5 text-amber-600" />,
      tag: 'Custom ERP • RBAC • CRM',
      stat: 'Tailored to your IP'
    },
    {
      id: 'data-analytics',
      slug: 'data-engineering-analytics',
      title: 'Data engineering & BI analytics',
      description: 'Automated ETL/ELT pipelines, Snowflake and BigQuery warehousing, and interactive executive reporting suites that eliminate weekly manual spreadsheets.',
      icon: <Database className="w-5 h-5 text-cyan-600" />,
      tag: 'dbt • Airflow • Power BI',
      stat: 'Real-Time Insights'
    }
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Softech layout with purple label + split headline/desc) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
              WHAT WE BUILD
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Digital products, AI & mobile. <br className="hidden sm:inline" />
              One team.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We design what users see — and what has to work behind it. From customer-facing interfaces to mission-critical backend architecture.
            </p>
          </div>
        </div>

        {/* 6 Modular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => onNavigate(`/services/${pillar.slug}`)}
              className="p-8 rounded-2xl bg-[#FAFBFD] hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {pillar.stat}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 font-medium">{pillar.tag}</span>
                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-1">
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explorer Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>Explore all 9 engineering specializations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
