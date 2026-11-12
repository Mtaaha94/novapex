import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, TrendingUp, Sparkles, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/90 pt-16 pb-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top High-Impact CTA Banner (Identical layout to Softech) */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-subtle-grid-dark opacity-40 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              Product studio • Technology and growth
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Let’s build your product end-to-end: from strategy and UX/UI to development and growth.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              We deliver holistically: discovery & architecture, premium design system, development (web/mobile/enterprise), integrations, SEO + tracking, AI automations and long-term growth. One team — one ownership.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/start-a-project')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 active:scale-95"
              >
                Book a free consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/services')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold transition-all"
              >
                View services
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="text-slate-300 hover:text-white text-sm font-medium underline-offset-4 hover:underline ml-2 flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" /> Email us directly
              </button>
            </div>

            {/* 3 Proof Points (Exact from Softech) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Quality & security
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Architecture, testing, observability and production-grade standards.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                  SEO + conversion
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  SSR/ISR, schema, content and tracking — we measure outcomes, not just deliver pages.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  AI & automations
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Agents, workflows, integrations — real savings in time and operating costs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Remote Delivery Hubs & Newsletter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8 border-b border-slate-200">
          {/* Offices / Advisory Hubs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Global Remote Delivery & Regional Advisory Hubs
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Novapex operates as a remote-first digital engineering collective. Senior squads are distributed across North America, the UK, and Europe, providing 24/7 follow-the-sun development with regional advisory contact points.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1.5">
                <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-600" /> Americas Advisory
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  New York Client Hub<br />New York, NY 10007, USA
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-600" /> UK & Europe Hub
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  London Client Hub<br />London, E14 5JP, UK
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-600" /> Asia-Pacific Hub
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Singapore Client Hub<br />Singapore 018981
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
            <div className="font-semibold text-slate-900 text-sm">Stay in touch</div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Monthly: trends (SEO/AI/Cloud), launch checklists and short case studies — no spam.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing to Novapex Insights!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-slate-900 bg-white"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Matrix (Faithful to Softech footer columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => onNavigate('/')}>
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                novapex
              </span>
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Global Software Engineering & Digital Product Development Partner. Engineering Scalable Digital Products for Global Businesses.
            </p>
            <div className="text-xs text-slate-400 font-mono">
              novapexglobal.com
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Company</div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => onNavigate('/about')} className="hover:text-slate-900">About Novapex</button></li>
              <li><button onClick={() => onNavigate('/services')} className="hover:text-slate-900">Services</button></li>
              <li><button onClick={() => onNavigate('/industries')} className="hover:text-slate-900">Industries</button></li>
              <li><button onClick={() => onNavigate('/case-studies')} className="hover:text-slate-900">Case Studies</button></li>
              <li><button onClick={() => onNavigate('/insights')} className="hover:text-slate-900">Insights & Blog</button></li>
              <li><button onClick={() => onNavigate('/careers')} className="hover:text-slate-900">Careers <span className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-medium">Hiring</span></button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-slate-900">Contact</button></li>
            </ul>
          </div>

          {/* Development */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Development</div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => onNavigate('/services/web-development')} className="hover:text-slate-900">Web Applications (SaaS)</button></li>
              <li><button onClick={() => onNavigate('/services/backend-engineering')} className="hover:text-slate-900">Backend Engineering</button></li>
              <li><button onClick={() => onNavigate('/services/mobile-app-development')} className="hover:text-slate-900">Mobile Apps (iOS / Android)</button></li>
              <li><button onClick={() => onNavigate('/services/custom-software-development')} className="hover:text-slate-900">Custom Software & Platforms</button></li>
              <li><button onClick={() => onNavigate('/services/ui-ux-design')} className="hover:text-slate-900">UI/UX Design Systems</button></li>
              <li><button onClick={() => onNavigate('/technologies')} className="hover:text-slate-900">Technology Radar</button></li>
            </ul>
          </div>

          {/* Growth & AI */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Enterprise & AI</div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => onNavigate('/services/ai-machine-learning')} className="hover:text-slate-900">AI & LLM Automations</button></li>
              <li><button onClick={() => onNavigate('/services/erp-enterprise-software')} className="hover:text-slate-900">ERP & Enterprise Systems</button></li>
              <li><button onClick={() => onNavigate('/services/data-engineering-analytics')} className="hover:text-slate-900">Data Engineering & BI</button></li>
              <li><button onClick={() => onNavigate('/services/blockchain-development')} className="hover:text-slate-900">Web3 & Smart Contracts</button></li>
              <li><button onClick={() => onNavigate('/start-a-project')} className="hover:text-slate-900 font-semibold text-indigo-600">Project Cost Estimator</button></li>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Case Studies</div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => onNavigate('/case-studies/agritrade-global-agricultural-marketplace-ai')} className="hover:text-slate-900">AgriTrade Marketplace</button></li>
              <li><button onClick={() => onNavigate('/case-studies/apexsafety-fire-safety-operating-system')} className="hover:text-slate-900">ApexSafety Field OS</button></li>
              <li><button onClick={() => onNavigate('/case-studies/fleetpulse-heavy-equipment-rental-operations')} className="hover:text-slate-900">FleetPulse Operations</button></li>
              <li><button onClick={() => onNavigate('/case-studies/rentvault-self-storage-management-saas')} className="hover:text-slate-900">RentVault PropTech</button></li>
              <li><button onClick={() => onNavigate('/case-studies')} className="hover:text-slate-900 text-slate-900 font-medium">All Case Studies →</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Trust & Legal Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 Novapex Digital Engineering. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <Globe className="w-3.5 h-3.5 text-indigo-600" /> Global Delivery
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-slate-900">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-900">
              Terms & Conditions
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-slate-900">
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
