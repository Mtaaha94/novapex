import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Cpu, Code2, Layers, HelpCircle, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = servicesData.find(s => s.slug === slug) || servicesData[0];

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('/services')} className="hover:text-slate-900">Services</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-white border-b border-slate-100 overflow-hidden mt-4">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            {service.category}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-indigo-900 font-medium">
            {service.tagline}
          </p>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            {service.heroDescription}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('/start-a-project')}
              className="px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md flex items-center gap-2"
            >
              Start Technical Scoping <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/case-studies')}
              className="px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-all shadow-2xs"
            >
              View Related Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Overview & Key Pillars */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">OVERVIEW</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Engineering Architecture & Philosophy
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {service.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
                <div className="text-xs font-bold font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded w-fit">
                  Pillar {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{feat.description}</p>
                {feat.bullets && (
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {feat.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Specs & Tech Stack */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">STANDARDS</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Architectural Guardrails & Quality
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Every production delivery adheres to rigorous engineering benchmarks to guarantee stability, security, and developer ergonomics.
            </p>
            <div className="space-y-3 pt-2">
              {service.architecturePoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-10 pt-6 lg:pt-0">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">TECH STACK</div>
            <h3 className="text-xl font-bold text-slate-900">Core Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <div key={tech.name} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-2 text-xs font-medium text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">({tech.category})</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WHAT WE DELIVER</div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {service.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4-Step Delivery Process */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">DELIVERY METHODOLOGY</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How We Execute: 4 Sprints to Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((ps) => (
              <div key={ps.step} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="text-2xl font-black font-mono text-indigo-600">{ps.step}</div>
                <h3 className="text-base font-bold text-slate-900">{ps.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{ps.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Value */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">BUSINESS VALUE</div>
          <h2 className="text-2xl sm:text-3xl font-bold">Measurable Commercial Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {service.businessValue.map((bv, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <p className="text-sm text-slate-200 leading-relaxed font-normal">{bv}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
