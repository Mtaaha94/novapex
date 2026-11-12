import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calculator, ShieldCheck, Layers, Sparkles, AlertCircle, Clock, RefreshCw } from 'lucide-react';

interface StartProjectPageProps {
  onNavigate: (path: string) => void;
}

export const StartProjectPage: React.FC<StartProjectPageProps> = ({ onNavigate }) => {
  const [projectType, setProjectType] = useState<string>('SaaS Platform');
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(['Web Application (Next.js)', 'Backend & APIs']);
  const [timeline, setTimeline] = useState<string>('8–12 Weeks (MVP)');
  const [budgetTier, setBudgetTier] = useState<string>('$50,000 – $100,000');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [scopeDetails, setScopeDetails] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'offline_saved' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'SaaS Platform',
    'Mobile Application (iOS/Android)',
    'Enterprise ERP / Operational System',
    'AI & Automation Engine',
    'Marketplace / Trading Floor',
    'Legacy Modernization'
  ];

  const disciplines = [
    'Web Application (Next.js)',
    'Backend & APIs (Node/Kafka)',
    'Mobile App (React Native)',
    'AI / LLM Integration & RAG',
    'Database & Schema Design',
    'Figma UI/UX & Design Tokens',
    'Data Warehousing & BI Analytics',
    'Web3 / Smart Contracts'
  ];

  const timelines = [
    'Immediate (Next 2 weeks)',
    '4–8 Weeks (Sprint Zero)',
    '8–12 Weeks (MVP)',
    'Flexible / Long-Term Retainer'
  ];

  const budgets = [
    '$25,000 – $50,000 (Targeted MVP)',
    '$50,000 – $100,000 (Full Commercial Release)',
    '$100,000 – $250,000 (Multi-Product Ecosystem)',
    '$250,000+ (Global Enterprise Platform)'
  ];

  const toggleDiscipline = (item: string) => {
    if (selectedDisciplines.includes(item)) {
      setSelectedDisciplines(selectedDisciplines.filter(d => d !== item));
    } else {
      setSelectedDisciplines([...selectedDisciplines, item]);
    }
  };

  const handleStartSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) {
      setErrorMessage('Please fill in your name and email address.');
      setSubmittedStatus('error');
      return;
    }

    if (!consent) {
      setErrorMessage('Please confirm your privacy consent to proceed.');
      setSubmittedStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmittedStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/rfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType,
          selectedDisciplines,
          timeline,
          budgetTier,
          contactName: contactName.trim(),
          contactEmail: contactEmail.trim(),
          companyName: companyName.trim(),
          scopeDetails: scopeDetails.trim(),
          consent
        })
      });

      if (res.ok) {
        setSubmittedStatus('success');
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error occurred');
      }
    } catch {
      try {
        const stored = JSON.parse(localStorage.getItem('novapex_rfp_offline_queue') || '[]');
        stored.push({
          projectType,
          selectedDisciplines,
          timeline,
          budgetTier,
          contactName,
          contactEmail,
          companyName,
          scopeDetails,
          queuedAt: new Date().toISOString()
        });
        localStorage.setItem('novapex_rfp_offline_queue', JSON.stringify(stored));
        setSubmittedStatus('offline_saved');
      } catch {
        setErrorMessage('Failed to connect to Novapex API server. Please email your RFP to ny@novapexglobal.com.');
        setSubmittedStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Technical Scoping & RFP
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Start a project with Novapex.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Configure your technical scope, required engineering disciplines, and target timeline to receive an initial architectural breakdown and proposal.
          </p>
        </div>
      </section>

      {/* Main Scoping Planner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submittedStatus === 'success' && (
          <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-xl text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h2 className="text-3xl font-extrabold text-slate-900">Project Scope Verified by API</h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Thank you, <strong>{contactName}</strong> from <strong>{companyName || 'your team'}</strong>. Our Solutions Architecture council has received your scoping brief for <strong>{projectType}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-md mx-auto text-left space-y-1">
              <div>• Target Timeline: {timeline}</div>
              <div>• Budget Tier: {budgetTier}</div>
              <div>• Disciplines: {selectedDisciplines.join(', ')}</div>
            </div>
            <p className="text-xs text-slate-400">
              A Lead Architect will email you at <strong>{contactEmail}</strong> with an initial scoping assessment within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('/')}
                className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        )}

        {submittedStatus === 'offline_saved' && (
          <div className="p-10 rounded-3xl bg-white border border-amber-200 shadow-xl text-center space-y-6">
            <Clock className="w-16 h-16 text-amber-600 mx-auto" />
            <h2 className="text-3xl font-extrabold text-slate-900">Offline Draft Saved (Pending Server Sync)</h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Your scoping details for <strong>{projectType}</strong> are saved in your local browser queue. The server could not be reached, so it has <strong>not yet been transmitted</strong> to Novapex engineers.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleStartSubmit}
                className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retry Submission
              </button>
              <a
                href={`mailto:contact@novapexglobal.com?subject=Project RFP - ${encodeURIComponent(projectType)}&body=Name: ${encodeURIComponent(contactName)}%0AEmail: ${encodeURIComponent(contactEmail)}%0ATimeline: ${encodeURIComponent(timeline)}%0ABudget: ${encodeURIComponent(budgetTier)}%0AScope: ${encodeURIComponent(scopeDetails)}`}
                className="px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Send via Direct Email
              </a>
            </div>
          </div>
        )}

        {submittedStatus !== 'success' && submittedStatus !== 'offline_saved' && (
          <form onSubmit={handleStartSubmit} className="space-y-12">
            
            {submittedStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage || 'Failed to submit RFP. Please check inputs.'}</span>
              </div>
            )}

            {/* 1. Project Type */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">STEP 1</div>
              <h3 className="text-xl font-bold text-slate-900">What are we engineering?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {projectTypes.map((pt) => (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => setProjectType(pt)}
                    className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                      projectType === pt
                        ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Engineering Disciplines */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">STEP 2</div>
              <h3 className="text-xl font-bold text-slate-900">Required Engineering Capabilities</h3>
              <p className="text-xs text-slate-500">Select all that apply to your product roadmap:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {disciplines.map((disc) => {
                  const isChecked = selectedDisciplines.includes(disc);
                  return (
                    <div
                      key={disc}
                      onClick={() => toggleDiscipline(disc)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-medium transition-all ${
                        isChecked
                          ? 'border-indigo-600 bg-indigo-50/40 text-indigo-900'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span>{disc}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Timeline & Budget */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">STEP 3</div>
              <h3 className="text-xl font-bold text-slate-900">Delivery Velocity & Budget Framework</h3>
              
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-700">Target Timeline</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timelines.map((tl) => (
                    <button
                      key={tl}
                      type="button"
                      onClick={() => setTimeline(tl)}
                      className={`p-3.5 rounded-xl border text-xs font-medium transition-all text-left ${
                        timeline === tl
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3">
                <label className="block text-xs font-semibold text-slate-700">Budget Range</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {budgets.map((bg) => (
                    <button
                      key={bg}
                      type="button"
                      onClick={() => setBudgetTier(bg)}
                      className={`p-3.5 rounded-xl border text-xs font-medium transition-all text-left ${
                        budgetTier === bg
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {bg}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Contact & Details */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">STEP 4</div>
              <h3 className="text-xl font-bold text-slate-900">Your Contact & Brief</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Sarah Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="sarah@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enterprise Logistics Inc."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Project Notes (Optional)</label>
                <textarea
                  rows={4}
                  value={scopeDetails}
                  onChange={(e) => setScopeDetails(e.target.value)}
                  placeholder="Any particular technical constraints, third-party integrations (e.g. Stripe, SAP, Kafka), or key business goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                />
              </div>

              {/* Privacy Consent */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 select-none">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>
                    I authorize Novapex Digital Engineering to process this scoping inquiry in accordance with the{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('/privacy-policy')}
                      className="text-indigo-600 underline font-medium hover:text-indigo-800"
                    >
                      Novapex Privacy Policy
                    </button>
                    . All project concepts remain strictly confidential under mutual NDA.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Strict confidentiality. Mutual NDA executed upon request.</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting Scoping RFP...' : 'Submit Scoping Brief'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
