import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AskAiModal } from './components/AskAiModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { CaseStudiesListPage } from './pages/CaseStudiesListPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isAskAiOpen, setIsAskAiOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Route matching
  const renderRoute = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} onOpenAskAi={() => setIsAskAiOpen(true)} />;
    }

    // 2. About
    if (currentPath === '/about' || currentPath === '/about-us') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 3. Services Overview
    if (currentPath === '/services') {
      return <ServicesOverviewPage onNavigate={navigate} />;
    }

    // 4. Service Detail: /services/:slug
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServiceDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 5. Industries
    if (currentPath === '/industries') {
      return <IndustriesPage onNavigate={navigate} />;
    }

    // 6. Technologies
    if (currentPath === '/technologies') {
      return <TechnologiesPage onNavigate={navigate} />;
    }

    // 7. Case Studies
    if (currentPath === '/case-studies') {
      return <CaseStudiesListPage onNavigate={navigate} />;
    }

    // 8. Case Study Detail: /case-studies/:slug
    if (currentPath.startsWith('/case-studies/')) {
      const slug = currentPath.replace('/case-studies/', '');
      return <CaseStudyDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 9. Insights / Blog
    if (currentPath === '/insights' || currentPath === '/blog') {
      return <BlogListPage onNavigate={navigate} />;
    }

    // 10. Individual Blog Article: /insights/:slug or /blog/:slug
    if (currentPath.startsWith('/insights/') || currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/insights/', '').replace('/blog/', '');
      return <BlogDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 11. Careers
    if (currentPath === '/careers' || currentPath === '/career') {
      return <CareersPage onNavigate={navigate} />;
    }

    // 12. Contact
    if (currentPath === '/contact' || currentPath === '/get-in-touch') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 13. Start a Project / RFP
    if (currentPath === '/start-a-project') {
      return <StartProjectPage onNavigate={navigate} />;
    }

    // 14. Legal
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/terms' || currentPath === '/terms-and-conditions') {
      return <TermsPage onNavigate={navigate} />;
    }

    // Fallback 404
    return (
      <div className="max-w-2xl mx-auto py-32 px-4 text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-slate-900">Page Not Found</h1>
        <p className="text-base text-slate-600">The requested route does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-900">
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenAskAi={() => setIsAskAiOpen(true)}
      />

      <main className="flex-1">
        {renderRoute()}
      </main>

      <Footer onNavigate={navigate} />

      {/* Global Ask AI / Command Palette Modal */}
      <AskAiModal
        isOpen={isAskAiOpen}
        onClose={() => setIsAskAiOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
