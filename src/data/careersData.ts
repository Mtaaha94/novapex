import { CareerPosition } from '../types';

export const careersData: CareerPosition[] = [
  {
    id: 'staff-distributed-systems',
    title: 'Staff Distributed Systems Engineer',
    department: 'Backend Engineering',
    location: 'Remote (US / Europe / Global)',
    type: 'Full-time',
    experience: '7+ years',
    summary: 'Lead the architecture of high-concurrency microservices, event streams (Kafka/Redis), and multi-tenant database clusters for global enterprise clients.',
    responsibilities: [
      'Architect resilient microservices and distributed event streams handling 50k+ req/sec.',
      'Design PostgreSQL, MongoDB, and Redis caching topologies with strict high availability.',
      'Conduct rigorous code reviews, load testing, and chaos engineering drills.',
      'Mentor senior engineers in domain-driven design and zero-downtime database migrations.'
    ],
    requirements: [
      'Deep mastery of TypeScript (Node.js/NestJS), Go, or Python in production environments.',
      'Proven track record with Apache Kafka, Redis streams, and distributed lock mechanics.',
      'Solid expertise in PostgreSQL indexing, query plan analysis, and connection pooling.',
      'Strong communication skills for collaborating directly with client engineering leads.'
    ],
    techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'AWS']
  },
  {
    id: 'senior-frontend-architect',
    title: 'Senior Next.js & Frontend Architect',
    department: 'Web Engineering',
    location: 'Remote (US / Europe / Global)',
    type: 'Full-time',
    experience: '5+ years',
    summary: 'Spearhead high-performance React and Next.js web platforms, crafting silky-smooth user experiences with perfect Core Web Vitals.',
    responsibilities: [
      'Build scalable, modular frontend architectures utilizing Next.js App Router and React 19.',
      'Develop accessible, token-driven design system component libraries with Tailwind CSS and Radix.',
      'Diagnose and optimize Interaction to Next Paint (INP) and Largest Contentful Paint (LCP).',
      'Integrate complex state machines, optimistic UI mutations, and real-time WebSockets.'
    ],
    requirements: [
      'Expert-level proficiency in TypeScript, React, Next.js, and modern CSS/Tailwind.',
      'Obsessive attention to UI detail, typography hierarchy, micro-interactions, and 60 FPS animations.',
      'Hands-on experience with bundle optimization, tree shaking, and streaming SSR.',
      'Knowledge of web accessibility guidelines (WCAG 2.1 AA).'
    ],
    techStack: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Motion']
  },
  {
    id: 'lead-mobile-engineer',
    title: 'Lead Mobile Engineer (React Native & Native Bridges)',
    department: 'Mobile Engineering',
    location: 'Remote (US / Europe / Global)',
    type: 'Full-time',
    experience: '6+ years',
    summary: 'Drive mobile architecture across iOS and Android, focusing on offline-first local databases, BLE hardware integrations, and native performance.',
    responsibilities: [
      'Architect cross-platform React Native apps with native Swift/Kotlin module bridges.',
      'Implement robust offline-first synchronization with SQLite and conflict-resolution engines.',
      'Interface with Bluetooth Low Energy (BLE), background GPS, and camera hardware.',
      'Automate CI/CD store builds and release management using Fastlane.'
    ],
    requirements: [
      'Extensive experience delivering production React Native apps to the App Store and Google Play.',
      'Working knowledge of native iOS (Swift) and Android (Kotlin) runtime internals.',
      'Experience with offline-first synchronization and background threading.',
      'Familiarity with Reanimated 3 and gesture-driven animations.'
    ],
    techStack: ['React Native', 'TypeScript', 'Swift', 'Kotlin', 'WatermelonDB', 'Fastlane']
  },
  {
    id: 'applied-ai-engineer',
    title: 'Applied AI & LLM Systems Engineer',
    department: 'Artificial Intelligence',
    location: 'Remote (US / Europe / Global)',
    type: 'Full-time',
    experience: '4+ years',
    summary: 'Design controlled agentic workflows, enterprise RAG pipelines, and deterministic tool-calling systems integrated into production business APIs.',
    responsibilities: [
      'Engineer deterministic agent pipelines with LangGraph, LlamaIndex, and strict JSON schemas.',
      'Build hybrid vector search indexing pipelines with pgvector, Qdrant, and BM25 ranking.',
      'Design human-in-the-loop validation dashboards for automated AI decisions.',
      'Implement semantic caching and token usage cost telemetry.'
    ],
    requirements: [
      'Proficiency in Python, FastAPI, and asynchronous concurrency.',
      'Demonstrated experience shipping production LLM applications (not just hobby chat scripts).',
      'Deep understanding of vector embeddings, chunking strategies, and retrieval evaluation.',
      'Focus on security, prompt injection defenses, and data privacy.'
    ],
    techStack: ['Python', 'FastAPI', 'pgvector', 'LangGraph', 'PyTorch', 'Redis', 'Docker']
  }
];
