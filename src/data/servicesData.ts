import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Web Application Development',
    category: 'Software Engineering',
    tagline: 'High-throughput, reactive web applications built for zero-downtime global scale.',
    heroDescription: 'From high-concurrency SaaS applications to responsive customer portals, we engineer web platforms that combine sub-second interactive latency with fault-tolerant distributed architectures.',
    overview: 'Novapex designs and engineers web platforms that power modern digital enterprises. Using modern TypeScript frameworks like React and Next.js combined with robust state machines, micro-frontends, and edge delivery, we build applications that convert visitors and run uninterrupted under peak load.',
    keyFeatures: [
      {
        title: 'Modern Single-Page & SSR Architectures',
        description: 'Server-side rendering, incremental static regeneration (ISR), and edge caching to achieve perfect Core Web Vitals and instant page transitions.',
        bullets: ['Next.js App Router and React 19', 'Edge runtime rendering and CDN caching', 'Micro-frontend federation for enterprise scale']
      },
      {
        title: 'State Architecture & Performance',
        description: 'Predictable, type-safe data flows with optimized virtual DOM updates and streaming server responses.',
        bullets: ['Optimistic UI mutations', 'Real-time WebSockets and Server-Sent Events', 'Sub-100ms Interaction to Next Paint (INP)']
      },
      {
        title: 'Enterprise Design Systems & Accessibility',
        description: 'Accessible, component-driven UI systems created with Tailwind CSS, shadcn/ui, and Radix primitives.',
        bullets: ['WCAG 2.1 AA accessibility compliance', 'Dynamic theme tokens and responsive layouts', 'Automated component regression testing in Storybook']
      }
    ],
    architecturePoints: [
      'Edge CDN acceleration with Cloudflare and AWS CloudFront',
      'Hydration optimization and bundle splitting',
      'API gateway integration with schema validation (Zod / tRPC)',
      'Automated accessibility and Lighthouse CI gates'
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'shadcn/ui', category: 'Components' },
      { name: 'Vite', category: 'Build Tool' },
      { name: 'Angular', category: 'Enterprise Web' },
      { name: 'GraphQL / REST', category: 'API' }
    ],
    deliverables: [
      'Production-ready, audited TypeScript codebase',
      'Comprehensive component design system',
      'Automated CI/CD deployment pipelines',
      'Lighthouse 95+ score certification',
      'Full API integration and end-to-end test suite'
    ],
    processSteps: [
      { step: '01', title: 'Technical Discovery', desc: 'Component architecture, state graph definition, and API contract design.' },
      { step: '02', title: 'Design System & Skeletons', desc: 'Atomic component library, design tokens, and core layout assembly.' },
      { step: '03', title: 'Feature Sprints & Integration', desc: 'Backend integration, real-time sync, and edge deployment.' },
      { step: '04', title: 'Optimization & Security Audit', desc: 'Core Web Vitals tuning, bundle reduction, and pentest verification.' }
    ],
    businessValue: [
      '40% faster time-to-market with reusable design systems',
      'Near-instant page loads improving organic conversion rates',
      'Zero vendor lock-in with clean open standards'
    ],
    faq: [
      {
        q: 'Do you build single-page apps (SPAs) or server-rendered sites (SSR)?',
        a: 'We evaluate your user journeys and SEO requirements. Generally, we deploy Next.js with hybrid rendering: public content uses SSR/ISR for SEO, while authenticated dashboards run high-speed client-side state engines.'
      },
      {
        q: 'How do you handle legacy migration?',
        a: 'We use the Strangler Fig pattern, systematically routing traffic to newly engineered micro-frontends without interrupting active business operations.'
      }
    ]
  },
  {
    id: 'backend-eng',
    slug: 'backend-engineering',
    title: 'Backend Engineering & Distributed Systems',
    category: 'Architecture & Cloud',
    tagline: 'Resilient APIs, event-driven pipelines, and distributed data systems engineered for 99.99% availability.',
    heroDescription: 'We build the mission-critical core behind digital products: fault-tolerant microservices, low-latency API gateways, and distributed event systems that maintain data consistency at massive scale.',
    overview: 'Modern applications demand backends that never bottleneck user experience. Novapex engineers distributed systems using Node.js, NestJS, Go, Python, and event streams like Apache Kafka and Redis. We specialize in high-concurrency transactional systems, complex database modeling, and automated cloud infrastructure.',
    keyFeatures: [
      {
        title: 'Event-Driven Microservices',
        description: 'Decoupled services communicating over Apache Kafka, RabbitMQ, or Redis streams for elastic horizontal scaling.',
        bullets: ['Distributed saga patterns for multi-service transactions', 'Idempotent event processing and dead-letter queues', 'Event sourcing and CQRS architecture']
      },
      {
        title: 'Database Architecture & Cache Engineering',
        description: 'Optimized relational and document schemas with intelligent multi-tier caching.',
        bullets: ['PostgreSQL & MongoDB clustering with read replicas', 'Redis in-memory caching with BullMQ worker queues', 'Sub-millisecond query optimization and index tuning']
      },
      {
        title: 'Secure API Gateways & Real-Time Comms',
        description: 'Strictly typed API surfaces with OAuth2/mTLS security and bidirectional WebSockets.',
        bullets: ['High-throughput GraphQL, REST, and gRPC endpoints', 'WebSocket & SSE clusters with auto-reconnection', 'Rate limiting, circuit breakers, and DDoS mitigation']
      }
    ],
    architecturePoints: [
      'Zero-trust network architecture with mutual TLS (mTLS)',
      'Distributed tracing using OpenTelemetry and Prometheus',
      'Database connection pooling with PgBouncer',
      'Automated blue/green zero-downtime rolling deploys'
    ],
    techStack: [
      { name: 'Node.js', category: 'Runtime' },
      { name: 'NestJS', category: 'Framework' },
      { name: 'Express.js', category: 'Framework' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'Redis', category: 'Cache / Queue' },
      { name: 'Apache Kafka', category: 'Event Stream' },
      { name: 'BullMQ', category: 'Job Processing' },
      { name: 'Docker & Kubernetes', category: 'DevOps' }
    ],
    deliverables: [
      'Microservice source code with strict static typing',
      'OpenAPI (Swagger) interactive documentation',
      'Infrastructure as Code (Terraform / Docker Compose)',
      'Load testing reports (up to 50k req/sec validation)',
      'Prometheus and Grafana observability dashboards'
    ],
    processSteps: [
      { step: '01', title: 'Data & Domain Modeling', desc: 'Domain-Driven Design (DDD) bounded contexts and ER diagramming.' },
      { step: '02', title: 'API Contract Specification', desc: 'OpenAPI/Protobuf specifications before writing implementation code.' },
      { step: '03', title: 'Service Development', desc: 'Test-driven development, database migration scripts, and message buses.' },
      { step: '04', title: 'Stress & Chaos Testing', desc: 'Simulating node failures, latency injection, and peak concurrency spikes.' }
    ],
    businessValue: [
      '99.99% uptime guarantees backed by fault-tolerant architecture',
      'Sub-50ms average backend response times under peak customer load',
      'Linear infrastructure cost scaling rather than exponential bloat'
    ],
    faq: [
      {
        q: 'Which database do you recommend: PostgreSQL or MongoDB?',
        a: 'We match data shapes to database strengths. Relational transactional records (billing, orders, inventory) run on PostgreSQL, while dynamic product catalogs and polymorphic event logs leverage MongoDB.'
      },
      {
        q: 'How do you handle background processing for heavy tasks?',
        a: 'We deploy dedicated BullMQ worker clusters with Redis, isolating heavy operations (PDF generation, data ingestion, external API calls) from the main API thread.'
      }
    ]
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    category: 'Native & Cross-Platform',
    tagline: 'Native performance and fluid 120Hz micro-interactions for iOS and Android.',
    heroDescription: 'From consumer apps with millions of active users to rugged field-service operational tools, we build mobile software with offline-first synchronization, native device integration, and premium UX.',
    overview: 'Novapex engineers iOS and Android applications that delight users and drive real business operations. Whether utilizing cross-platform engines like React Native and Flutter or pure native Swift and Kotlin, our mobile engineering ensures smooth gestures, robust biometric security, and rock-solid background synchronization.',
    keyFeatures: [
      {
        title: 'Offline-First Synchronization',
        description: 'Full app functionality in zero-connectivity environments with automatic conflict-free background synchronization.',
        bullets: ['Local SQLite / WatermelonDB local databases', 'Bidirectional sync engines with CRDT conflict resolution', 'Background task queues with battery-efficient scheduling']
      },
      {
        title: 'Hardware & Sensor Integration',
        description: 'Direct communication with device capabilities and external hardware accessories.',
        bullets: ['BLE (Bluetooth Low Energy) for industrial and medical hardware', 'GPS geofencing and real-time background tracking', 'Camera scanners, barcode reading, and biometric authentication']
      },
      {
        title: 'Native 120 FPS Interaction Design',
        description: 'Silky smooth gestures and haptic feedback that feels natural in the user’s hand.',
        bullets: ['Reanimated 3 and native thread animations', 'Adaptive layouts for foldables, tablets, and phones', 'Instant cold starts and minimal binary payload footprint']
      }
    ],
    architecturePoints: [
      'Clean Architecture (Domain, Data, Presentation layers)',
      'Automated App Store & Google Play distribution pipelines (Fastlane)',
      'Encrypted Keychain and Keystore secure token storage',
      'Real-time crash reporting and ANR telemetry'
    ],
    techStack: [
      { name: 'React Native', category: 'Cross-Platform' },
      { name: 'Flutter', category: 'Cross-Platform' },
      { name: 'Swift (iOS)', category: 'Native' },
      { name: 'Kotlin (Android)', category: 'Native' },
      { name: 'WatermelonDB', category: 'Offline DB' },
      { name: 'Fastlane', category: 'CI/CD' },
      { name: 'Firebase Push', category: 'Notifications' }
    ],
    deliverables: [
      'Compiled iOS (.ipa) and Android (.aab) production builds',
      'Complete native and JavaScript/Dart source code repository',
      'Automated Fastlane deployment script suite',
      'App Store Optimization (ASO) asset package',
      'Offline sync test verification suite'
    ],
    processSteps: [
      { step: '01', title: 'Mobile UX & Device Flows', desc: 'Gesture mapping, touch target auditing, and offline state flows.' },
      { step: '02', title: 'Core Native Architecture', desc: 'Offline storage engine, authentication, and bridge configuration.' },
      { step: '03', title: 'Hardware Integration', desc: 'Camera, Bluetooth, Push, and Geolocation pipeline wiring.' },
      { step: '04', title: 'Store Review & Release', desc: 'Apple App Store and Google Play compliance review and staged rollout.' }
    ],
    businessValue: [
      'Single codebase reaching 100% of iOS and Android users',
      'Operational continuity for field teams working without cellular reception',
      'Top-tier App Store ratings driven by crash-free sessions (>99.8%)'
    ],
    faq: [
      {
        q: 'Should we choose React Native, Flutter, or Native?',
        a: 'For 90% of business products, React Native or Flutter cuts engineering costs in half without compromising UX. If your app requires heavy 3D rendering or proprietary OS-level integrations, we use native Swift and Kotlin.'
      },
      {
        q: 'How do you handle app store updates?',
        a: 'We configure Over-The-Air (OTA) updates using CodePush for instantaneous bug fixes, paired with Fastlane for major version binary releases.'
      }
    ]
  },
  {
    id: 'ai-ml',
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning Engineering',
    category: 'Applied Artificial Intelligence',
    tagline: 'Controlled AI workflows, agentic automation, and enterprise LLMs integrated directly into your business processes.',
    heroDescription: 'We move AI beyond gimmicks and chat widgets into production value. We build autonomous agent pipelines, computer vision systems, and proprietary LLM workflows that connect directly with your databases and business APIs with strict human-in-the-loop validation.',
    overview: 'Novapex engineers production AI systems that solve complex operational challenges. From automated document processing and intelligent dispatch algorithms to semantic search and autonomous business workflows, our AI engineering balances cutting-edge model capability with enterprise compliance, cost control, and deterministic error handling.',
    keyFeatures: [
      {
        title: 'Controlled Agentic Workflows',
        description: 'Multi-agent orchestration systems that execute multi-step business logic with deterministic fallbacks.',
        bullets: ['Tool use and API execution with strict schema validation', 'Human-in-the-loop review queues for high-risk actions', 'Context compaction and structured output guarantees']
      },
      {
        title: 'Enterprise RAG & Semantic Search',
        description: 'Retrieval-Augmented Generation over internal documents, ERPs, and databases with verifiable citations.',
        bullets: ['Hybrid vector and full-text keyword retrieval', 'Hierarchical document chunking and metadata filtering', 'Zero data leakage outside enterprise tenant boundaries']
      },
      {
        title: 'Computer Vision & Automation',
        description: 'Edge and cloud computer vision models for automated inspection, OCR, and classification.',
        bullets: ['Automated damage and quality inspection', 'Real-time document and invoice parsing', 'Custom fine-tuned lightweight vision models']
      }
    ],
    architecturePoints: [
      'Model-agnostic orchestration layer (FastAPI, Python)',
      'Vector databases (pgvector, Pinecone, Qdrant)',
      'Strict token budgeting and semantic caching (Redis)',
      'Comprehensive prompt evaluation and automated regression testing'
    ],
    techStack: [
      { name: 'Python', category: 'Language' },
      { name: 'FastAPI', category: 'Backend' },
      { name: 'PyTorch', category: 'ML Engine' },
      { name: 'Gemini / Claude / OpenAI', category: 'LLMs' },
      { name: 'pgvector / Qdrant', category: 'Vector DB' },
      { name: 'LangGraph & LlamaIndex', category: 'Agent Frameworks' },
      { name: 'OpenCV', category: 'Computer Vision' }
    ],
    deliverables: [
      'Microservice APIs with structured JSON output contracts',
      'Automated document ingestion and vectorization pipelines',
      'Admin monitoring console for agent trace inspection',
      'Cost and latency optimization benchmarks',
      'Security boundary and PII redaction audit'
    ],
    processSteps: [
      { step: '01', title: 'Data Audit & Feasibility', desc: 'Evaluating dataset quality, latency targets, and deterministic thresholds.' },
      { step: '02', title: 'RAG Pipeline & Embeddings', desc: 'Custom chunking, vector indexing, and evaluation benchmark setup.' },
      { step: '03', title: 'Agent Logic & Tool Calling', desc: 'Connecting LLMs to production database APIs with safety limits.' },
      { step: '04', title: 'Fine-Tuning & Deployment', desc: 'Distillation into fast models, semantic caching, and real-time monitoring.' }
    ],
    businessValue: [
      '80% reduction in manual document triage and data entry',
      'Instantaneous semantic search across millions of corporate documents',
      'Full audit trail and governance for AI-assisted decisions'
    ],
    faq: [
      {
        q: 'Will our proprietary data be used to train public models?',
        a: 'Never. We deploy zero-retention enterprise API endpoints or self-hosted open-weights models (such as Llama 3 or Mistral) inside your private cloud VPC.'
      },
      {
        q: 'How do you prevent hallucinations in critical operations?',
        a: 'We use strict schema validation (JSON schema enforcement), grounded RAG with exact document citations, and mandatory human review stages for financial or legal actions.'
      }
    ]
  },
  {
    id: 'blockchain-web3',
    slug: 'blockchain-development',
    title: 'Blockchain & Smart Contract Engineering',
    category: 'Distributed Ledgers',
    tagline: 'Audited smart contracts, decentralized protocols, and Web3 infrastructure built for security.',
    heroDescription: 'We build enterprise blockchain applications, audited smart contracts, and decentralized data layers that deliver cryptographic transparency, tamper-proof record keeping, and automated settlement.',
    overview: 'Novapex provides end-to-end Web3 engineering for businesses requiring immutable audit trails, asset tokenization, and decentralized execution. We engineer gas-optimized, rigorously audited smart contracts and integrate them seamlessly with web2 enterprise systems.',
    keyFeatures: [
      {
        title: 'Audited Smart Contract Protocols',
        description: 'Secure, gas-optimized contracts written in Solidity and Rust with exhaustive formal verification.',
        bullets: ['ERC-20, ERC-721, and ERC-1155 token standards', 'Multi-signature treasuries and timelock governance', 'Formal verification and automated fuzzing tests']
      },
      {
        title: 'Web3 & Enterprise Systems Bridge',
        description: 'Reliable indexers and event listeners syncing on-chain state to relational databases.',
        bullets: ['Subgraphs and custom blockchain indexers', 'EIP-712 typed signature authorizations', 'Fiat-to-crypto and automated payment gateways']
      },
      {
        title: 'Supply Chain & Provenance Tracking',
        description: 'Tamper-proof physical asset verification and supply chain custody logging.',
        bullets: ['Zero-knowledge proofs for private verification', 'Decentralized identity (DID) credentials', 'High-throughput Layer 2 rollups (Arbitrum, Base, Polygon)']
      }
    ],
    architecturePoints: [
      'Multi-sig access control with OpenZeppelin security contracts',
      'High-speed RPC node clustering with automatic failover',
      'Gas optimization reducing transaction costs by up to 60%',
      'Formal mathematical verification prior to mainnet launch'
    ],
    techStack: [
      { name: 'Solidity', category: 'Smart Contracts' },
      { name: 'Rust', category: 'Solana / Near' },
      { name: 'Hardhat & Foundry', category: 'Tooling' },
      { name: 'Ethers.js / Viem', category: 'Web3 Library' },
      { name: 'The Graph', category: 'Indexing' },
      { name: 'IPFS / Arweave', category: 'Decentralized Storage' }
    ],
    deliverables: [
      'Audited smart contract codebase with 100% test coverage',
      'Formal third-party security audit coordination report',
      'Web3 frontend dApp or SDK connector',
      'Subgraphs and real-time event indexing pipeline',
      'Mainnet deployment and multisig administration handover'
    ],
    processSteps: [
      { step: '01', title: 'Cryptoeconomic Architecture', desc: 'Incentive design, tokenomics modeling, and threat vector analysis.' },
      { step: '02', title: 'Contract Engineering', desc: 'Clean, gas-efficient Solidity/Rust development with unit tests.' },
      { step: '03', title: 'Security Fuzzing & Audit', desc: 'Automated Slither, Echidna fuzz testing, and external security audit.' },
      { step: '04', title: 'Mainnet Deployment & Integration', desc: 'Multi-sig setup, verified contract deployment, and frontend integration.' }
    ],
    businessValue: [
      'Provable transparency eliminates inter-party reconciliation disputes',
      'Automated programmatic escrow and instantaneous global settlements',
      'Zero single points of failure for critical transactional ledgers'
    ],
    faq: [
      {
        q: 'Which blockchain network should our business build on?',
        a: 'We generally deploy on Ethereum Layer 2 networks (Base, Arbitrum, Polygon) or high-throughput chains like Solana to keep transaction fees under a fraction of a cent while enjoying massive enterprise security.'
      },
      {
        q: 'How do you guarantee contract security?',
        a: 'We adhere to the OpenZeppelin battle-tested security standard, perform rigorous invariant fuzzing using Foundry, and mandate third-party external code audits before mainnet deployment.'
      }
    ]
  },
  {
    id: 'erp-enterprise',
    slug: 'erp-enterprise-software',
    title: 'ERP & Enterprise Software Development',
    category: 'Enterprise Solutions',
    tagline: 'Custom enterprise platforms, unified ERPs, and automated workflow backbones.',
    heroDescription: 'We replace fragile spreadsheets and disjointed legacy software with unified enterprise platforms tailored specifically to your company’s unique operational processes and vendor networks.',
    overview: 'Off-the-shelf software rarely fits intricate business workflows. Novapex engineers bespoke enterprise resource planning (ERP) platforms, customer relationship systems, and internal operational engines that streamline inventory, billing, dispatch, and compliance into a single source of truth.',
    keyFeatures: [
      {
        title: 'Unified Operational Backbones',
        description: 'Single cohesive software suite interconnecting inventory, finance, logistics, and personnel.',
        bullets: ['Real-time multi-warehouse inventory tracking', 'Automated purchase orders and vendor reconciliations', 'Custom rule-based approval workflows']
      },
      {
        title: 'Legacy Modernization & API Bridges',
        description: 'Bi-directional bridges integrating seamlessly with SAP, Oracle, Microsoft Dynamics, and Salesforce.',
        bullets: ['Zero-downtime data migration pipelines', 'REST and webhook wrappers over legacy mainframes', 'Incremental modernization without business stoppage']
      },
      {
        title: 'Fine-Grained Role-Based Access (RBAC)',
        description: 'Enterprise governance with granular permission hierarchies and immutable audit logging.',
        bullets: ['SSO integration with Okta, Azure AD, and Google Workspace', 'Field-level access control and redaction', 'Tamper-resistant audit trails for compliance inspections']
      }
    ],
    architecturePoints: [
      'Domain-driven service architecture with tenant isolation',
      'High-performance reporting engine using PostgreSQL read replicas',
      'Automated background reconciliation jobs',
      'SOC2 and GDPR compliance data residency controls'
    ],
    techStack: [
      { name: 'TypeScript', category: 'Language' },
      { name: 'React / Next.js', category: 'Frontend' },
      { name: 'Node.js / NestJS', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Redis', category: 'Cache' },
      { name: 'Apache Kafka', category: 'Event Bus' },
      { name: 'Docker / Kubernetes', category: 'Cloud' }
    ],
    deliverables: [
      'Fully customized enterprise ERP web platform',
      'Automated data migration scripts from legacy systems',
      'Executive analytics and operational dashboards',
      'Role-based permission configuration matrix',
      'Interactive staff training documentation and video walkthroughs'
    ],
    processSteps: [
      { step: '01', title: 'Workflow & Process Mapping', desc: 'Shadowing operational teams to map actual physical and digital workflows.' },
      { step: '02', title: 'Data Schema Harmonization', desc: 'Normalizing disparate legacy tables into a unified domain model.' },
      { step: '03', title: 'Iterative Module Delivery', desc: 'Shipping inventory, finance, and CRM modules in prioritized stages.' },
      { step: '04', title: 'Parallel Run & Cutover', desc: 'Running side-by-side with old software to verify zero data loss before cutover.' }
    ],
    businessValue: [
      'Eliminates repetitive manual data re-entry across incompatible systems',
      'Real-time operational visibility across regional business units',
      'Saves hundreds of thousands annually compared to rigid enterprise licensing'
    ],
    faq: [
      {
        q: 'Why build custom ERP instead of buying SAP or NetSuite?',
        a: 'Commercial enterprise suites charge punitive per-seat licenses and force your business to conform to rigid generic workflows. A custom Novapex system aligns 100% with your competitive advantages, with zero recurring per-user software tax.'
      },
      {
        q: 'How do you handle change management for non-technical employees?',
        a: 'We design intuitive, clutter-free interfaces inspired by consumer software, eliminating the steep learning curve typical of traditional ERP software.'
      }
    ]
  },
  {
    id: 'custom-software',
    slug: 'custom-software-development',
    title: 'Custom Software Development & SaaS Platforms',
    category: 'Product Engineering',
    tagline: 'Multi-tenant B2B SaaS platforms, customer portals, and high-margin digital products.',
    heroDescription: 'From inception to market launch, we design, engineer, and scale custom software platforms that turn operational IP into competitive moats and recurring revenue engines.',
    overview: 'Whether launching a breakthrough vertical SaaS startup or transforming an established industry incumbent, Novapex delivers full-lifecycle product engineering. We build multi-tenant cloud software with automated billing, self-service onboarding, and high-velocity feature deployment.',
    keyFeatures: [
      {
        title: 'Multi-Tenant SaaS Architecture',
        description: 'Secure tenant isolation with pooled computing and dedicated database schemas.',
        bullets: ['Automated subdomains and custom white-label domains', 'Stripe Billing, usage-based metering, and tiered subscriptions', 'Instant self-serve workspace onboarding']
      },
      {
        title: 'Interactive Dashboards & Data Visualization',
        description: 'Real-time charts, pivot tables, and exportable executive reports.',
        bullets: ['Sub-second query times over millions of records', 'Automated PDF/Excel export engines', 'Configurable user dashboard widgets']
      },
      {
        title: 'Public APIs & Developer Ecosystems',
        description: 'Robust public developer APIs and webhook notification infrastructure.',
        bullets: ['Developer portal with interactive API playgrounds', 'Reliable outgoing webhooks with retry backoffs', 'SDK generation for TypeScript, Python, and Go']
      }
    ],
    architecturePoints: [
      'Row-level security (RLS) and schema-per-tenant isolation',
      'Event-driven billing reconciliation with Stripe and Chargebee',
      'Zero-downtime database migrations with automated rollbacks',
      'Automated end-to-end integration test suites'
    ],
    techStack: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Redis', category: 'Cache' },
      { name: 'Stripe', category: 'Payments' },
      { name: 'AWS / GCP', category: 'Cloud' }
    ],
    deliverables: [
      'Full-stack multi-tenant SaaS codebase',
      'Stripe subscription and billing engine',
      'User management, auth, and tenant switching',
      'Developer documentation and OpenAPI schema',
      'Automated deployment scripts and CI pipeline'
    ],
    processSteps: [
      { step: '01', title: 'Product Architecture & Scoping', desc: 'Mapping user personas, user journeys, and core monetization mechanics.' },
      { step: '02', title: 'Rapid Prototype & Validation', desc: 'Clickable wireframes and UX prototype testing with early design partners.' },
      { step: '03', title: 'Production Engineering', desc: 'Building multi-tenant infrastructure, auth, billing, and core features.' },
      { step: '04', title: 'Launch & Growth Instrumentation', desc: 'Product analytics, onboarding funnels, and performance monitoring.' }
    ],
    businessValue: [
      'Rapid path from concept to commercial subscription revenue',
      'Institutional-grade security posture satisfying enterprise procurement',
      'High retention driven by delightful, frictionless user experience'
    ],
    faq: [
      {
        q: 'How long does it take to launch an MVP?',
        a: 'We typically deliver a production-ready, feature-complete MVP in 8 to 12 weeks, ready for paying customer onboarding.'
      },
      {
        q: 'Who owns the intellectual property (IP)?',
        a: 'You own 100% of the intellectual property, source code, designs, and architectural assets from day one.'
      }
    ]
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Product Strategy',
    category: 'Design & Experience',
    tagline: 'Intuitive user research, cohesive design systems, and pixel-perfect interactive experiences.',
    heroDescription: 'Great software is defined by clarity and speed. We craft user interfaces that reduce cognitive friction, accelerate user workflows, and elevate your brand into an industry benchmark.',
    overview: 'Novapex merges deep UX research with refined visual craft. Our design team creates comprehensive design systems, interactive Figma prototypes, and responsive layouts that look stunning and translate cleanly into production code.',
    keyFeatures: [
      {
        title: 'Deep User Research & Journey Mapping',
        description: 'Qualitative customer interviews, task analysis, and journey mapping to uncover core pain points.',
        bullets: ['User persona definition and scenario planning', 'Workflow bottlenecks identification and streamlining', 'Information architecture and site hierarchy planning']
      },
      {
        title: 'Comprehensive Design Systems',
        description: 'Scalable component libraries built in Figma with design tokens synced directly to Tailwind CSS.',
        bullets: ['Atomic design principles for massive scalability', 'Full accessibility auditing (contrast, typography scale)', 'Micro-interaction specs and motion guidelines']
      },
      {
        title: 'Interactive High-Fidelity Prototypes',
        description: 'Realistic clickable prototypes for customer validation and executive sign-off.',
        bullets: ['Realistic state flows (empty, error, loading, edge states)', 'Mobile, tablet, and widescreen desktop variations', 'Seamless developer handoff with CSS token inspection']
      }
    ],
    architecturePoints: [
      'Tokens-as-Code pipeline syncing Figma to Tailwind',
      'WCAG 2.1 AA compliant color palettes and typography scales',
      'Responsive auto-layout components ready for engineering',
      'Comprehensive interaction specifications'
    ],
    techStack: [
      { name: 'Figma', category: 'Design' },
      { name: 'Tokens Studio', category: 'Design Tokens' },
      { name: 'Storybook', category: 'Documentation' },
      { name: 'Motion', category: 'Animation' },
      { name: 'Tailwind CSS', category: 'Styling' }
    ],
    deliverables: [
      'Complete Figma design file with organized components and variants',
      'Comprehensive design token specification (colors, typography, spacing)',
      'Clickable user journey prototypes',
      'Developer handoff documentation with component state matrices',
      'Custom vector icon and illustration kit'
    ],
    processSteps: [
      { step: '01', title: 'Discovery & UX Auditing', desc: 'Understanding user personas, business objectives, and competitor benchmarks.' },
      { step: '02', title: 'Wireframes & Information Architecture', desc: 'Structuring page flows and content hierarchy without visual distractions.' },
      { step: '03', title: 'High-Fidelity Visual Design', desc: 'Applying color, typography, micro-interactions, and brand personality.' },
      { step: '04', title: 'Design System & Handoff', desc: 'Organizing reusable components, variants, and design tokens for engineering.' }
    ],
    businessValue: [
      'Reduces developer rework by up to 50% through unambiguous specs',
      'Significantly increases user conversion and task completion rates',
      'Creates a coherent, recognizable brand presence across all digital touchpoints'
    ],
    faq: [
      {
        q: 'Do you provide design files in Figma?',
        a: 'Yes, all designs are created in organized Figma files using modern features such as Auto Layout, Variants, Variables, and Component Properties.'
      },
      {
        q: 'How do designers collaborate with engineers at Novapex?',
        a: 'Our designers and engineers work side-by-side in integrated squads. Designers speak code (HTML/Tailwind), and engineers understand design tokens, eliminating communication gaps.'
      }
    ]
  },
  {
    id: 'data-analytics',
    slug: 'data-engineering-analytics',
    title: 'Data Engineering & Business Intelligence',
    category: 'Data & Analytics',
    tagline: 'Scalable data pipelines, automated warehousing, and executive business intelligence dashboards.',
    heroDescription: 'Transform disparate data silos into actionable competitive intelligence. We build automated data pipelines, lakehouses, and interactive Power BI and custom analytics platforms.',
    overview: 'Modern business requires instant, reliable insight. Novapex designs modern data stacks that ingest, clean, and model data from hundreds of operational sources into high-performance warehouses, empowering executives and field teams with real-time analytics.',
    keyFeatures: [
      {
        title: 'Modern Data Warehousing & Lakehouses',
        description: 'Scalable analytical databases designed for lightning-fast aggregation queries.',
        bullets: ['Snowflake, BigQuery, and Databricks architecture', 'Dimensional data modeling (star and snowflake schemas)', 'dbt for version-controlled, testable SQL transformations']
      },
      {
        title: 'Automated ETL/ELT Ingestion Pipelines',
        description: 'Batch and streaming data pipelines connecting ERPs, CRMs, APIs, and databases.',
        bullets: ['Apache Airflow and Dagster orchestration', 'Incremental data loading with Change Data Capture (CDC)', 'Automated data freshness and quality monitoring']
      },
      {
        title: 'Interactive BI Dashboards & Embedded Analytics',
        description: 'Custom web dashboards and Power BI/Looker reporting suites for decision makers.',
        bullets: ['Real-time KPI scorecards and trend forecasting', 'Customer-facing embedded analytics portals', 'Scheduled PDF and Slack/Email alert digests']
      }
    ],
    architecturePoints: [
      'Change Data Capture (Debezium / Fivetran) streaming into storage',
      'Data quality assertion tests with Great Expectations and dbt-expectations',
      'Role-based data masking and GDPR anonymization',
      'Sub-second embedded analytics via ClickHouse and DuckDB'
    ],
    techStack: [
      { name: 'Python', category: 'Language' },
      { name: 'SQL', category: 'Query' },
      { name: 'Power BI', category: 'BI Tool' },
      { name: 'Snowflake / BigQuery', category: 'Data Warehouse' },
      { name: 'dbt', category: 'Transformation' },
      { name: 'Apache Airflow', category: 'Orchestration' },
      { name: 'ClickHouse', category: 'OLAP' }
    ],
    deliverables: [
      'Production data pipeline repository with dbt models',
      'Centralized data warehouse schema and data dictionary',
      'Executive Power BI or custom React analytics dashboards',
      'Automated data quality monitoring and alert system',
      'Self-service business query documentation'
    ],
    processSteps: [
      { step: '01', title: 'Data Source Inventory', desc: 'Auditing existing databases, APIs, ERP tables, and business KPIs.' },
      { step: '02', title: 'Warehouse Schema Design', desc: 'Creating star schemas and staging tables optimized for business queries.' },
      { step: '03', title: 'Pipeline Orchestration', desc: 'Configuring Airflow DAGs, dbt transformations, and data validation.' },
      { step: '04', title: 'Dashboard & Report Build', desc: 'Designing intuitive executive dashboards and embedding analytics into portals.' }
    ],
    businessValue: [
      'Eliminates manual weekly reporting spreadsheets, saving hours every week',
      'Instantaneous visibility into operational margins, revenue, and inventory',
      'Single source of truth eliminates conflicting internal metrics'
    ],
    faq: [
      {
        q: 'Can you integrate data from legacy on-premises databases?',
        a: 'Yes. We establish secure VPN/mTLS data collectors that stream or batch sync on-premises SQL and ERP records into modern cloud warehouses with zero disruption.'
      },
      {
        q: 'Do you offer embedded customer analytics?',
        a: 'Yes. We engineer high-speed customer-facing analytics directly into your SaaS platform or client portal using technologies like ClickHouse and Apache ECharts.'
      }
    ]
  }
];
