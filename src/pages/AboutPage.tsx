import React from 'react';
import { ArrowRight, ShieldCheck, Award, Users, CheckCircle2, Globe, HeartHandshake, Zap, Target } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Architectural Accountability',
      desc: 'We do not believe in handing over brittle prototypes and disappearing. We stand behind our architecture with strict 99.99% uptime guarantees and production SLA support.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />
    },
    {
      title: 'Zero Outsourced Relays',
      desc: 'Every line of code is written by dedicated senior engineers in our direct squads. We never broker your project out to third-party subcontractors.',
      icon: <Users className="w-5 h-5 text-purple-600" />
    },
    {
      title: 'Commercial Velocity',
      desc: 'Speed matters. We design reusable component design systems and microservices that launch commercial MVPs in 8 to 12 weeks without cutting architectural corners.',
      icon: <Zap className="w-5 h-5 text-amber-600" />
    },
    {
      title: 'Uncompromised IP Ownership',
      desc: 'All source code, Git histories, Figma design tokens, and deployment scripts belong 100% to your company from day one.',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />
    }
  ];

  const milestones = [
    { year: '2021', title: 'Founding & Distributed Squad Model', desc: 'Established Novapex to bridge the gap between high-level management consulting and hands-on, production-grade software engineering.' },
    { year: '2023', title: 'Global Delivery Expansion', desc: 'Opened permanent engineering and advisory hubs in New York, London, and Singapore to support 24/7 follow-the-sun enterprise releases.' },
    { year: '2024', title: 'Enterprise AI & Deterministic RAG Practice', desc: 'Pioneered schema-bounded AI workflows, preventing hallucinations in high-liability logistics, fire safety, and agricultural trade.' },
    { year: '2026', title: '120+ Products Shipped & Proven Scale', desc: 'Trusted by international market leaders across North America and Europe, processing tens of millions in daily GMV.' }
  ];

  return (
    <div className="w-full bg-[#FAFBFD] pb-20">
      {/* Hero Header */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            About Novapex
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Engineering scalable digital products for global businesses.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            Novapex is a specialized digital product engineering partner. We combine strategic product discovery, consumer-grade UX craft, and resilient distributed systems engineering.
          </p>
        </div>
      </section>

      {/* Core Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-white">9</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Core Engineering Disciplines</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-indigo-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">IP & Code Ownership to Client</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-emerald-400">8–12w</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Target Commercial MVP Sprint</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-white">3</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Global Regional Advisory Hubs</div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-600">OUR PHILOSOPHY</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why traditional software outsourcing is broken.
          </h2>
          <div className="text-base sm:text-lg text-slate-600 space-y-4 leading-relaxed font-normal">
            <p>
              For decades, enterprise clients have been caught between two unsatisfactory options: hiring massive management consulting firms that charge astronomical fees for strategy decks without shipping working code, or hiring low-cost body shops that deliver unmaintainable spaghetti code with zero business accountability.
            </p>
            <p>
              Novapex was founded on a different principle: <strong>Unified Product Accountability</strong>. When you partner with us, our cross-functional squads own the entire lifecycle. Product strategists, UI/UX researchers, frontend architects, backend engineers, and QA leads collaborate in tight sync from sprint zero.
            </p>
          </div>
        </div>

        {/* 4 Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {values.map((v, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="p-3 rounded-xl bg-slate-100 w-fit">{v.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">OUR TIMELINE</div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-10">Engineering Evolution</h2>
        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start gap-6">
              <div className="text-xl font-bold font-mono text-indigo-600 px-3 py-1 rounded-lg bg-indigo-50 shrink-0">
                {m.year}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Ready to build something extraordinary?</h2>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Schedule an introductory discovery session with our senior architects to discuss your technical requirements.
        </p>
        <button
          onClick={() => onNavigate('/start-a-project')}
          className="px-7 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md inline-flex items-center gap-2"
        >
          Start a Project <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
