export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
    bullets?: string[];
  }[];
  architecturePoints: string[];
  techStack: {
    name: string;
    category: string;
    icon?: string;
  }[];
  deliverables: string[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  businessValue: string[];
  faq: {
    q: string;
    a: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  year: string;
  summary: string;
  tag: string;
  projectStatus: 'Illustrative Concept' | 'Architecture Prototype' | 'Sample Interface Showcase' | 'Enterprise Reference Architecture';
  isIllustrative: boolean;
  disclaimer: string;
  isFlagship?: boolean;
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  challenge: string;
  engineeringApproach: string;
  solution: string;
  techStack: string[];
  deliverables: string[];
  keyHighlights: string[];
  accentColor?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  summary: string;
  featured?: boolean;
  tableOfContents: { id: string; title: string }[];
  content: {
    sectionId: string;
    heading: string;
    body: string[];
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
    callout?: string;
  }[];
  tags: string[];
  relatedArticleSlugs: string[];
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'Mobile' | 'AI & ML' | 'Data & Enterprise' | 'Distributed Systems';
  description: string;
  level: 'Core Enterprise' | 'Production Standard' | 'Emerging Technology';
  tags: string[];
}
