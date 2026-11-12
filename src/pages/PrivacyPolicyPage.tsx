import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Privacy Policy</span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xs space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase">LEGAL COMPLIANCE</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
            <p className="text-xs text-slate-400 font-mono">Last updated: November 2026</p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed font-normal">
            <p>
              Novapex Digital Engineering (“Novapex”, “we”, “our”, or “us”) respects your privacy and is committed to protecting your personal and corporate data. This policy outlines our standards regarding data collection, processing, and storage when using our website (<a href="https://novapexglobal.com" className="text-indigo-600 underline">https://novapexglobal.com</a>) and our software engineering services.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly through our contact forms, project scoping tools, and career application portals. This includes your name, work email address, telephone number, organization name, project specifications, and professional qualifications.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Client Data & Codebase Confidentiality</h2>
            <p>
              Under our enterprise engineering agreements, client intellectual property, repositories, architecture specifications, API credentials, and internal databases are protected under strict bilateral Non-Disclosure Agreements (NDAs). We never utilize client data or private code to train public machine learning or third-party AI models.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Data Security & Storage</h2>
            <p>
              Novapex employs TLS 1.3 encryption in transit and AES-256 encryption at rest. Access to client staging environments and cloud infrastructures is governed by zero-trust identity policies and multi-factor authentication (MFA).
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. GDPR & CCPA Rights</h2>
            <p>
              If you reside in the European Union (GDPR) or California (CCPA), you retain the right to request access, rectification, or deletion of your personal records held by Novapex. Requests may be directed to <code>privacy@novapexglobal.com</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
