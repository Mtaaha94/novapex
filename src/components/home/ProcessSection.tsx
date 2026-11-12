import React from 'react';
import { Compass, Code, ShieldCheck, Gauge, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (path: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'We map domain models, user journeys, and technical feasibility before writing code. We define API contracts, state trees, and cloud topologies to eliminate costly downstream rework.',
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      bullets: ['Domain-Driven Design (DDD)', 'OpenAPI contract specification', 'High-fidelity Figma design systems']
    },
    {
      step: '02',
      title: 'Engineering & Integrations',
      description: 'Strictly typed TypeScript engineering across full-stack applications. Modular microservices, bidirectional WebSockets, and secure API bridges integrating with your ERP, CRM, and hardware devices.',
      icon: <Code className="w-5 h-5 text-indigo-600" />,
      bullets: ['Next.js, Node.js & React Native', 'Kafka event streaming & Redis queues', 'Automated database migration scripts']
    },
    {
      step: '03',
      title: 'Quality & Launch Gateways',
      description: 'Production is not an afterthought. We implement automated integration tests, zero-downtime deployment pipelines, and observability monitoring before opening traffic to customers.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      bullets: ['Zero-downtime rolling deploys', 'Core Web Vitals & INP optimization', 'SOC2-ready security & encryption audit']
    },
    {
      step: '04',
      title: 'Observability & Scaling',
      description: 'Once deployed, our squads monitor telemetry, latency percentiles, and business conversion rates. We continuously tune AI models, scale database partitions, and roll out customer-requested features.',
      icon: <Gauge className="w-5 h-5 text-indigo-600" />,
      bullets: ['Prometheus & Grafana telemetry', 'Autonomous AI prompt evaluation', 'SLA-backed engineering support']
    }
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
            ENGINEERING METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From product decision to reliable production.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A battle-tested 4-phase delivery framework that guarantees predictability, transparent velocity, and enterprise-grade code quality.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-indigo-600">
                    {s.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    {s.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 space-y-1.5">
                {s.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Scoping CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Have an intricate software architecture challenge?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Book an initial architecture scoping session with our principal engineers.</p>
          </div>
          <button
            onClick={() => onNavigate('/start-a-project')}
            className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            Start Technical Scoping <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
