import React from 'react';
import { ShieldCheck, Users, Lock, Zap, ArrowRight, Check } from 'lucide-react';

interface AccountabilitySectionProps {
  onNavigate: (path: string) => void;
}

export const AccountabilitySection: React.FC<AccountabilitySectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: 'Zero Outsourced Handoffs',
      description: 'Your project is built by dedicated, senior full-time engineers. No junior contractor relays, no opaque offshore subcontracting.',
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      bullets: ['Dedicated squad model', 'Daily direct Slack/Teams sync', 'Direct engineer-to-client communication']
    },
    {
      title: '100% IP & Code Ownership',
      description: 'All source code, Figma design systems, database schemas, and infrastructure scripts belong exclusively to you from sprint one.',
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      bullets: ['Zero vendor lock-in', 'Clean MIT/Apache licensing', 'Continuous GitHub repository sync']
    },
    {
      title: 'Production-Grade Quality',
      description: 'Strict TypeScript across all tiers, automated regression suites, and 99.99% uptime architectures built for enterprise compliance.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      bullets: ['Core Web Vitals certification', 'SOC2 and GDPR aligned controls', 'Zero-downtime blue/green rollouts']
    },
    {
      title: 'Controlled AI & Determinism',
      description: 'We reject probabilistic hallucinations in transactional workflows. Strict JSON schemas, human-in-the-loop reviews, and zero data leakage.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      bullets: ['Private VPC model deployments', 'Mandatory human approval queues', 'Predictable token budget caps']
    }
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      {/* Subtle grid on dark */}
      <div className="absolute inset-0 bg-subtle-grid-dark opacity-35 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <span>THE NOVAPEX COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Not just development. <br />
            Accountability for the whole product.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Software houses often deliver code and walk away. Novapex assumes full engineering stewardship—ensuring your architecture withstands peak traffic, scales with user growth, and drives verified business outcomes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/10 w-fit">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                {p.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Accountability Stat Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-white/[0.03] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">IP Ownership Transferred</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">99.99%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">SLA Availability Target</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">&lt; 100ms</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Core API Response Time</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Strict Static Typing Compliance</div>
          </div>
        </div>

      </div>
    </section>
  );
};
