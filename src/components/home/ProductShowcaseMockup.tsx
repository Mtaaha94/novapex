import React, { useState } from 'react';
import { ArrowRight, Activity, ShieldCheck, Cpu, Smartphone, Database, Zap, Layers, Server, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

interface ProductShowcaseMockupProps {
  onNavigate: (path: string) => void;
}

export const ProductShowcaseMockup: React.FC<ProductShowcaseMockupProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'agritrade' | 'apexsafety' | 'fleetpulse'>('agritrade');

  return (
    <section className="w-full py-12 sm:py-16 bg-[#FAFBFD] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Concept Product Demonstrations • Sample Interfaces
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Original software architecture blueprints.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Illustrative software interface prototypes engineered by Novapex to demonstrate design systems, WebSocket order books, field safety protocols, and telematics telemetry.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setActiveTab('agritrade')}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'agritrade'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>AgriTrade B2B Trading Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab('apexsafety')}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'apexsafety'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span>ApexSafety Field OS</span>
          </button>
          <button
            onClick={() => setActiveTab('fleetpulse')}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'fleetpulse'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>FleetPulse Telematics Dispatch</span>
          </button>
        </div>

        {/* Realistic Browser / Terminal Frame */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300">
          {/* Mockup Window Header */}
          <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-3 text-slate-300 font-sans text-xs font-medium hidden sm:inline">
                {activeTab === 'agritrade' && 'AgriTrade Global — Commodity Order Matching Engine v4.2'}
                {activeTab === 'apexsafety' && 'ApexSafety OS — Municipal Compliance & Hydrant Telemetry Node'}
                {activeTab === 'fleetpulse' && 'FleetPulse Logistics — CAN-bus Telematics & Dispatch Operations'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <Activity className="w-3 h-3 animate-pulse" /> Sub-45ms latency
              </span>
              <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                TLS 1.3
              </span>
            </div>
          </div>

          {/* Tab 1: AgriTrade Terminal */}
          {activeTab === 'agritrade' && (
            <div className="p-6 sm:p-8 text-white space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">24H Trading Volume</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">$3,428,900</div>
                  <div className="text-[10px] text-emerald-300 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +14.2% vs previous session
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Escrow Locked</div>
                  <div className="text-2xl font-bold font-mono text-white">$12,850,000</div>
                  <div className="text-[10px] text-slate-400">Multi-sig smart contract vault</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">AI Quality Inspection</div>
                  <div className="text-2xl font-bold font-mono text-indigo-400">Grade 1 (99.2%)</div>
                  <div className="text-[10px] text-indigo-300">Soybean Moisture: 11.4%</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Active Vessel Charters</div>
                  <div className="text-2xl font-bold font-mono text-white">42 Ships</div>
                  <div className="text-[10px] text-slate-400">Rotterdam, Santos, New Orleans</div>
                </div>
              </div>

              {/* Order Book & Matching Stream */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-semibold text-slate-300">Live Commodity Bidding Stream (WebSocket)</span>
                    <span className="font-mono text-indigo-400">Kafka Partition 04</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2 rounded bg-white/5">
                      <span className="text-emerald-400 font-bold">BID: Non-GMO Corn (5,000 MT)</span>
                      <span className="text-slate-300">$218.50 / MT</span>
                      <span className="text-slate-400">FOB New Orleans</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">MATCHED</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-white/5">
                      <span className="text-emerald-400 font-bold">BID: Milling Wheat (12,000 MT)</span>
                      <span className="text-slate-300">$242.00 / MT</span>
                      <span className="text-slate-400">CIF Alexandria</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">MATCHED</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-white/5">
                      <span className="text-amber-400 font-bold">ASK: Rapeseed Oil (2,500 MT)</span>
                      <span className="text-slate-300">$985.00 / MT</span>
                      <span className="text-slate-400">FOB Hamburg</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">PENDING ESCROW</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="text-xs font-semibold text-slate-300 border-b border-slate-800 pb-2">
                    Edge AI Computer Vision
                  </div>
                  <div className="space-y-2 text-xs text-slate-400 font-mono">
                    <div className="flex justify-between">
                      <span>Inference Model:</span>
                      <span className="text-white">CropVision-v3.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Defect Ratio:</span>
                      <span className="text-emerald-400">0.08% (Certified)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Human Verification:</span>
                      <span className="text-white">Inspector #8492 Signed</span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('/case-studies/agritrade-global-agricultural-marketplace-ai')}
                        className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-sans font-semibold transition-colors flex items-center justify-center gap-1.5"
                      >
                        Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: ApexSafety OS */}
          {activeTab === 'apexsafety' && (
            <div className="p-6 sm:p-8 text-white space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Tagged Safety Assets</div>
                  <div className="text-2xl font-bold font-mono text-red-400">184,210</div>
                  <div className="text-[10px] text-slate-400">NFC & QR crypto tags</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Protocol Render Time</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">4.1 sec</div>
                  <div className="text-[10px] text-slate-400">Legally signed PDF certificate</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Active Field Inspectors</div>
                  <div className="text-2xl font-bold font-mono text-white">328 Technicians</div>
                  <div className="text-[10px] text-emerald-300">100% Offline-First Sync</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Statutory Compliance</div>
                  <div className="text-2xl font-bold font-mono text-white">99.98%</div>
                  <div className="text-[10px] text-slate-400">Zero municipal audit fines</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="font-semibold text-slate-300">Field Inspection Protocol Live Feed</span>
                  <span className="font-mono text-slate-400">Municipal Fire Authority API</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-slate-300">Hydrant #HD-8912 • Pressure: 14.8 Bar</span>
                    <span className="text-slate-400">Static / Dynamic Flow Certified</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">CERTIFICATE ISSUED</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-slate-300">Extinguisher Bank #B4-Basement</span>
                    <span className="text-slate-400">Weight & CO2 Seal Verified</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">NEXT DUE: 2027-11</span>
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onNavigate('/case-studies/apexsafety-fire-safety-operating-system')}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-sans font-semibold transition-colors flex items-center gap-1.5"
                  >
                    View ApexSafety Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: FleetPulse Telematics */}
          {activeTab === 'fleetpulse' && (
            <div className="p-6 sm:p-8 text-white space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Connected Heavy Units</div>
                  <div className="text-2xl font-bold font-mono text-amber-400">4,280 Units</div>
                  <div className="text-[10px] text-slate-400">CAN-bus telematics link</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Fleet Utilization</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">82.4%</div>
                  <div className="text-[10px] text-emerald-300">+24% vs baseline</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Dispatched Transport Flatbeds</div>
                  <div className="text-2xl font-bold font-mono text-white">64 Active</div>
                  <div className="text-[10px] text-slate-400">Live GPS route telemetry</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">Damage Resolution</div>
                  <div className="text-2xl font-bold font-mono text-white">91% Faster</div>
                  <div className="text-[10px] text-slate-400">8-Point timestamped photos</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="font-semibold text-slate-300">Live Telematics Engine Telemetry Stream</span>
                  <span className="font-mono text-amber-400">TimescaleDB • IoT Core</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-slate-300">Boom Lift #BL-480 (Caterpillar)</span>
                    <span className="text-slate-400">Hours: 842.4h • Fuel: 78% • Branch #02</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">ON RENTAL</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-slate-300">Excavator #EX-220 (Komatsu)</span>
                    <span className="text-slate-400">Hours: 1,412.0h • Geofence: Active Site B</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">ON RENTAL</span>
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onNavigate('/case-studies/fleetpulse-heavy-equipment-rental-operations')}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-sans font-semibold transition-colors flex items-center gap-1.5"
                  >
                    View FleetPulse Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
