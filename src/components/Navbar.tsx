import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Menu, X, ArrowRight, Code2, Server, Smartphone, BrainCircuit, Blocks, Building2, Palette, Database, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAskAi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenAskAi }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<'US' | 'EU' | 'UK'>('US');
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsRegionMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceIcons: Record<string, React.ReactNode> = {
    'web-development': <Code2 className="w-4 h-4 text-indigo-600" />,
    'backend-engineering': <Server className="w-4 h-4 text-indigo-600" />,
    'mobile-app-development': <Smartphone className="w-4 h-4 text-indigo-600" />,
    'ai-machine-learning': <BrainCircuit className="w-4 h-4 text-purple-600" />,
    'blockchain-development': <Blocks className="w-4 h-4 text-emerald-600" />,
    'erp-enterprise-software': <Building2 className="w-4 h-4 text-blue-600" />,
    'custom-software-development': <Layers className="w-4 h-4 text-cyan-600" />,
    'ui-ux-design': <Palette className="w-4 h-4 text-pink-600" />,
    'data-engineering-analytics': <Database className="w-4 h-4 text-amber-600" />
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', isDropdown: true },
    { label: 'Industries', href: '/industries' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('/')} 
          className="cursor-pointer flex items-center gap-2 group select-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans group-hover:text-slate-800 transition-colors">
              novapex
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
          {navLinks.map((item) => {
            if (item.isDropdown) {
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                      currentPath.startsWith('/services') || isServicesOpen
                        ? 'text-slate-900 bg-slate-100/70'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-slate-900' : 'text-slate-400'}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isServicesOpen && (
                    <div 
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-6 grid grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-150 z-50"
                    >
                      <div className="col-span-2 pb-3 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Engineering Disciplines</div>
                          <div className="text-sm text-slate-500 font-normal">Full-lifecycle digital product development from strategy to scale</div>
                        </div>
                        <button
                          onClick={() => {
                            setIsServicesOpen(false);
                            onNavigate('/services');
                          }}
                          className="text-xs font-semibold text-slate-900 hover:text-indigo-600 flex items-center gap-1 group"
                        >
                          All Services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Core Software & Web</div>
                        {servicesData.slice(0, 5).map((s) => (
                          <div
                            key={s.id}
                            onClick={() => {
                              setIsServicesOpen(false);
                              onNavigate(`/services/${s.slug}`);
                            }}
                            className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer flex items-start gap-3 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                              {serviceIcons[s.slug] || <Layers className="w-4 h-4 text-indigo-600" />}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {s.title}
                              </div>
                              <div className="text-xs text-slate-500 line-clamp-1">{s.tagline}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Enterprise & Applied AI</div>
                        {servicesData.slice(5).map((s) => (
                          <div
                            key={s.id}
                            onClick={() => {
                              setIsServicesOpen(false);
                              onNavigate(`/services/${s.slug}`);
                            }}
                            className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer flex items-start gap-3 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
                              {serviceIcons[s.slug] || <Layers className="w-4 h-4 text-indigo-600" />}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {s.title}
                              </div>
                              <div className="text-xs text-slate-500 line-clamp-1">{s.tagline}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="col-span-2 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span>Available for Q1/Q2 engineering sprints</span>
                        </div>
                        <button
                          onClick={() => {
                            setIsServicesOpen(false);
                            onNavigate('/start-a-project');
                          }}
                          className="text-xs font-semibold text-slate-900 hover:text-indigo-600 flex items-center gap-1.5"
                        >
                          Start Technical Scoping <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = currentPath === item.href;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.href)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-slate-900 bg-slate-100/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Utilities (faithful to Softech) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Ask AI Pill Button with Cmd+K */}
          <button
            onClick={onOpenAskAi}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/90 bg-white/90 hover:bg-slate-50 text-slate-700 text-xs font-medium shadow-2xs hover:border-indigo-300 transition-all cursor-pointer group"
            title="Ask AI or Quick Search (Cmd+K)"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Ask AI</span>
            <span className="sm:hidden">AI</span>
            <span className="hidden md:inline-block font-mono text-[10px] text-slate-400 bg-slate-100 px-1 rounded ml-0.5">
              ⌘K
            </span>
          </button>

          {/* Region Toggle (like Softech flags) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsRegionMenuOpen(!isRegionMenuOpen)}
              className="px-2 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg flex items-center gap-1.5 transition-colors border border-transparent hover:border-slate-200"
            >
              <span>{selectedRegion === 'US' ? '🇺🇸' : selectedRegion === 'UK' ? '🇬🇧' : '🇪🇺'}</span>
              <span className="font-semibold text-slate-800">{selectedRegion}</span>
            </button>
            {isRegionMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-50 text-xs">
                <button
                  onClick={() => { setSelectedRegion('US'); setIsRegionMenuOpen(false); }}
                  className="w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                >
                  <span>🇺🇸</span> <span>United States</span>
                </button>
                <button
                  onClick={() => { setSelectedRegion('UK'); setIsRegionMenuOpen(false); }}
                  className="w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                >
                  <span>🇬🇧</span> <span>United Kingdom</span>
                </button>
                <button
                  onClick={() => { setSelectedRegion('EU'); setIsRegionMenuOpen(false); }}
                  className="w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                >
                  <span>🇪🇺</span> <span>European Union</span>
                </button>
              </div>
            )}
          </div>

          {/* Primary CTA (Black Pill Button) */}
          <button
            onClick={() => onNavigate('/contact')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all shadow-xs cursor-pointer active:scale-95"
          >
            Get in Touch
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAskAi();
              }}
              className="p-2.5 rounded-xl bg-indigo-50/80 text-indigo-700 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Ask AI / Search
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('/start-a-project');
              }}
              className="p-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              Start a Project
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate(item.href);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPath === item.href
                    ? 'text-slate-900 bg-slate-100 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('/careers');
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Careers
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-3">
            <span>Region: {selectedRegion}</span>
            <button
              onClick={() => {
                setSelectedRegion(selectedRegion === 'US' ? 'UK' : selectedRegion === 'UK' ? 'EU' : 'US');
              }}
              className="font-semibold text-indigo-600 underline"
            >
              Change Region
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
