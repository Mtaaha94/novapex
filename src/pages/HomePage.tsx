import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ProductShowcaseMockup } from '../components/home/ProductShowcaseMockup';
import { WhatWeBuildSection } from '../components/home/WhatWeBuildSection';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { AccountabilitySection } from '../components/home/AccountabilitySection';
import { TechRadarSection } from '../components/home/TechRadarSection';
import { LatestInsightsSection } from '../components/home/LatestInsightsSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenAskAi: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAskAi }) => {
  return (
    <div className="w-full">
      <HeroSection onNavigate={onNavigate} onOpenAskAi={onOpenAskAi} />
      <ProductShowcaseMockup onNavigate={onNavigate} />
      <WhatWeBuildSection onNavigate={onNavigate} />
      <CaseStudiesSection onNavigate={onNavigate} />
      <ProcessSection onNavigate={onNavigate} />
      <AccountabilitySection onNavigate={onNavigate} />
      <TechRadarSection onNavigate={onNavigate} />
      <LatestInsightsSection onNavigate={onNavigate} />
    </div>
  );
};
