import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Code2, Server, Smartphone, BrainCircuit, Blocks, Building2, Palette, Database, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServicesOverviewPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Software Engineering', 'Architecture & Cloud', 'Native & Cross-Platform', 'Applied Artificial Intelligence', 'Distributed Ledgers', 'Enterprise Solutions', 'Product Engineering', 'Design & Experience', 'Data & Analytics'];

  const filteredServices = selectedFilter === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedFilter);

  const serviceIcons: Record<string, React.ReactNode> = {
    'web-development': <Code2 className="w-6 h-6 text-indigo-600" />,
    'backend-engineering': <Server className="w-6 h-6 text-indigo-600" />,
    'mobile-app-development': <Smartphone className="w-6 h-6 text-indigo-600" />,
    'ai-machine-learning': <BrainCircuit className="w-6 h-6 text-purple-600" />,
    'blockchain-development': <Blocks className="w-6 h-6 text-emerald-600" />,
    'erp-enterprise-software': <Building2 className="w-6 h-6 text-blue-600" />,
    'custom-software-development': <Layers className="w-6 h-6 text-cyan-600" />,
    'ui-ux-design': <Palette className="w-6 h-6 text-pink-600" />,
    'data-engineering-analytics': <Database className="w-6 h-6 text-amber-600" />
  };

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Engineering Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Full-lifecycle digital product development.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From technical discovery and UX design systems to high-throughput cloud architectures, controlled AI pipelines, and mobile apps. Explore our nine core engineering specializations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate(`/services/${service.slug}`)}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {serviceIcons[service.slug] || <Layers className="w-6 h-6 text-indigo-600" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-700 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    {service.heroDescription}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 pt-2">
                  {service.architecturePoints.slice(0, 3).map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.techStack.slice(0, 3).map((t) => (
                    <span key={t.name} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono">
                      {t.name}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-1">
                  Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
