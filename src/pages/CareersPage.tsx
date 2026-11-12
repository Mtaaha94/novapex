import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Briefcase, Clock, X, Send } from 'lucide-react';
import { careersData } from '../data/careersData';
import { CareerPosition } from '../types';

interface CareersPageProps {
  onNavigate: (path: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState<CareerPosition | null>(null);
  const [appliedRole, setAppliedRole] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantGithub, setApplicantGithub] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantEmail || !applicantName) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Join Novapex
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build software that actually works in production.
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            No endless corporate bureaucracy. No slide-deck theater. At Novapex, we empower senior engineers and designers to build transformative digital products directly with enterprise founders and CTOs.
          </p>
        </div>
      </section>

      {/* Perks / Culture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">ASYNC-FIRST FREEDOM</div>
            <h3 className="text-xl font-bold text-slate-900">Work from Anywhere</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We value deep work over calendar-clogging meetings. As long as your code is pristine and deadlines are hit, manage your own schedule from anywhere globally.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600">TOP-TIER COMPENSATION</div>
            <h3 className="text-xl font-bold text-slate-900">Competitive Global Packages</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We pay top-percentile global rates, accompanied by annual hardware allowances, conference stipends, and continuous learning budgets.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">DIRECT IMPACT</div>
            <h3 className="text-xl font-bold text-slate-900">High-Liability Engineering</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              You will architect systems processing millions of dollars in commodity trade, fire safety protocols, and heavy telematics fleets.
            </p>
          </div>
        </div>
      </div>

      {/* Open Roles List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Open Engineering Positions</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Currently interviewing for Q1/Q2 senior squads</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full font-semibold">
            {careersData.length} Roles Open
          </span>
        </div>

        <div className="space-y-4">
          {careersData.map((role) => (
            <div
              key={role.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                    {role.department}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg">{role.location}</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg">{role.type}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {role.summary}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {role.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-xs font-mono border border-slate-100">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedRole(role)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                >
                  View Responsibilities & Specs
                </button>
                <button
                  onClick={() => {
                    setAppliedRole(role.title);
                    setSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  Apply for Role <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Role Details Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600">{selectedRole.department}</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedRole.title}</h3>
                <div className="text-xs text-slate-400 mt-1 font-mono">{selectedRole.location} • {selectedRole.experience}</div>
              </div>
              <button onClick={() => setSelectedRole(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{selectedRole.summary}</p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Responsibilities</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedRole.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Requirements</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedRole.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedRole(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setAppliedRole(selectedRole.title);
                  setSelectedRole(null);
                  setSubmitted(false);
                }}
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Proceed to Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {appliedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase">Application</span>
                <h3 className="text-xl font-bold text-slate-900">{appliedRole}</h3>
              </div>
              <button onClick={() => setAppliedRole(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-base">Application Received</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, {applicantName}. Our engineering lead will review your GitHub and technical background and respond within 48 hours.
                </p>
                <button
                  onClick={() => setAppliedRole(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">GitHub / Portfolio URL</label>
                  <input
                    type="url"
                    value={applicantGithub}
                    onChange={(e) => setApplicantGithub(e.target.value)}
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Note on Recent Complex Architecture</label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Tell us about a tough distributed systems or performance bug you resolved..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Strictly confidential</span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
