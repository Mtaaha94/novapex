import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAFBFD] pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Terms & Conditions</span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xs space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase">LEGAL AGREEMENT</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Terms of Service</h1>
            <p className="text-xs text-slate-400 font-mono">Last updated: November 2026</p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed font-normal">
            <p>
              Welcome to Novapex Digital Engineering. By accessing our website (<a href="https://novapexglobal.com" className="text-indigo-600 underline">https://novapexglobal.com</a>) or engaging our engineering teams for software development services, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Scope of Services</h2>
            <p>
              Novapex provides full-lifecycle digital product development, software engineering, architecture advisory, and technical consulting services. Specific deliverables, sprint schedules, milestones, and payment terms are formally governed by individual Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise specified in an active SOW, upon receipt of full milestone compensation, all custom source code, documentation, UI/UX designs, and technical assets developed specifically for the client are assigned 100% to the client.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Warranties & Disclaimers</h2>
            <p>
              Novapex warrants that all software engineering will be performed in a professional manner conforming to recognized modern engineering best practices. We do not guarantee uninterrupted uptime of third-party cloud infrastructure (AWS, GCP, Cloudflare) beyond established vendor SLAs.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of New York, USA, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
