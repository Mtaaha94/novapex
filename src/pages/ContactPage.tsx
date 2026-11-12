import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, ShieldCheck, AlertCircle, Clock, RefreshCw } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Web & SaaS Platform Development',
    budget: '$50k - $100k',
    message: '',
    consent: false,
    honeypot: '' // Anti-spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'offline_saved' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Web & SaaS Platform Development',
    'Backend & Distributed Systems',
    'iOS & Android Mobile Apps',
    'AI & LLM Workflows (Enterprise)',
    'ERP & Business Systems Modernization',
    'Data Engineering & BI Analytics',
    'UI/UX Design Systems',
    'Web3 & Smart Contracts'
  ];

  const budgets = [
    '< $25k (Scoping & Architecture Audit)',
    '$25k - $50k (Targeted MVP Sprint)',
    '$50k - $100k (Full Commercial Release)',
    '$100k+ (Enterprise Multi-Product Ecosystem)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields marked with *');
      setSubmissionStatus('error');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please confirm your privacy consent to proceed.');
      setSubmissionStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setErrorMessage('');

    try {
      // Real backend API submission to /api/contact
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          serviceInterest: formData.serviceInterest,
          budget: formData.budget,
          message: formData.message.trim(),
          consent: formData.consent,
          timestamp: new Date().toISOString()
        })
      });

      if (res.ok) {
        setSubmissionStatus('success');
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error occurred');
      }
    } catch {
      // Save as offline draft and explicitly inform user that server delivery is pending
      try {
        const stored = JSON.parse(localStorage.getItem('novapex_contact_offline_queue') || '[]');
        stored.push({ ...formData, queuedAt: new Date().toISOString() });
        localStorage.setItem('novapex_contact_offline_queue', JSON.stringify(stored));
        setSubmissionStatus('offline_saved');
      } catch {
        setErrorMessage('Could not establish connection to the Novapex API server. Please email us directly.');
        setSubmissionStatus('error');
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
            Let’s Connect
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Discuss your technical product.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Have an existing codebase to modernize or a new software platform to build? Connect with a Novapex solutions architect for an initial technical consultation.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Hubs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">INQUIRY FORM</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Send a Message</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">We respond within 24 hours with an initial technical assessment.</p>
            </div>

            {submissionStatus === 'success' && (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Inquiry Delivered to Novapex Server</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your project inquiry has been verified and securely logged on our server. An Engineering Lead will contact you at <strong>{formData.email}</strong> within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmissionStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      serviceInterest: 'Web & SaaS Platform Development',
                      budget: '$50k - $100k',
                      message: '',
                      consent: false,
                      honeypot: ''
                    });
                  }}
                  className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

            {submissionStatus === 'offline_saved' && (
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-4">
                <Clock className="w-12 h-12 text-amber-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Offline Draft Saved (Server Unreachable)</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Your message has been saved into your local browser queue because the backend server is currently offline or unreachable. It has <strong>not yet been transmitted</strong> to Novapex engineers.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleSubmit}
                    className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Retry Transmission
                  </button>
                  <a
                    href={`mailto:contact@novapexglobal.com?subject=Project Inquiry - ${encodeURIComponent(formData.serviceInterest)}&body=${encodeURIComponent(formData.message)}`}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Send via Email
                  </a>
                </div>
              </div>
            )}

            {submissionStatus !== 'success' && submissionStatus !== 'offline_saved' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="website_url_check"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                {submissionStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage || 'Failed to submit inquiry. Please verify all inputs.'}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Discipline</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Budget Allocation</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Overview & Technical Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current state, target architecture, or key operational challenges..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>
                      I agree to the processing of corporate contact details in accordance with the{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('/privacy-policy')}
                        className="text-indigo-600 underline font-medium hover:text-indigo-800"
                      >
                        Novapex Privacy Policy
                      </button>
                      . Mutual Non-Disclosure Agreements (NDA) are executed upon request.
                    </span>
                  </label>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>TLS 1.3 encrypted submission. Zero public AI data sharing.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting to Server...' : 'Send Inquiry'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Global Hubs & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">DELIVERY MODEL</div>
              <h2 className="text-2xl font-extrabold text-slate-900">Global Remote Collective</h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Novapex operates as a modern remote-first software engineering partner. Our senior architects and engineering squads work across the Americas, the UK, and Europe, maintaining regional advisory points of contact for client leadership.
              </p>
            </div>

            <div className="space-y-4">
              {/* New York */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-indigo-600" /> Americas Client Advisory Hub
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  New York Client Hub (Americas Advisory)<br />New York, NY 10007, United States
                </p>
                <div className="text-xs text-slate-700 font-mono pt-1">
                  ny@novapexglobal.com
                </div>
              </div>

              {/* London */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-indigo-600" /> UK & European Advisory Hub
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  London Client Hub (UK & European Advisory)<br />London, E14 5JP, United Kingdom
                </p>
                <div className="text-xs text-slate-700 font-mono pt-1">
                  london@novapexglobal.com
                </div>
              </div>

              {/* Singapore */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-indigo-600" /> Asia-Pacific Advisory Hub
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Singapore Client Hub (Asia-Pacific Representation)<br />Singapore 018981
                </p>
                <div className="text-xs text-slate-700 font-mono pt-1">
                  singapore@novapexglobal.com
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Clock className="w-4 h-4" /> 24-HOUR TECHNICAL RESPONSE
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Every inquiry is triaged directly by an active Engineering Lead or Solutions Architect. We review architectural requirements before scheduling a technical discovery session.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
