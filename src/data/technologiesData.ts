import { TechItem } from '../types';

export const technologiesData: TechItem[] = [
  // Frontend
  {
    name: 'React 19 & Next.js',
    category: 'Frontend',
    description: 'Server Components, incremental static regeneration, and sub-second edge routing for global web platforms.',
    level: 'Core Enterprise',
    tags: ['SSR', 'Edge Runtime', 'Turbopack', 'Micro-frontends']
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Strict static typing across frontend, backend, and API boundaries for zero runtime type errors.',
    level: 'Core Enterprise',
    tags: ['Type Safety', 'Shared Schemas', 'Refactoring Resilience']
  },
  {
    name: 'Tailwind CSS & shadcn/ui',
    category: 'Frontend',
    description: 'Accessible, token-driven design systems based on Radix primitives and utility-first styling.',
    level: 'Core Enterprise',
    tags: ['Design Systems', 'WCAG 2.1 AA', 'Responsive Tokens']
  },
  {
    name: 'Vite & Webpack',
    category: 'Frontend',
    description: 'Lightning-fast module bundling, hot module replacement, and modern asset pipeline optimization.',
    level: 'Production Standard',
    tags: ['Asset Optimization', 'Tree Shaking', 'Bundle Analysis']
  },

  // Backend & Cloud
  {
    name: 'Node.js & NestJS',
    category: 'Backend & Cloud',
    description: 'Enterprise TypeScript backend architectures with dependency injection, OpenAPI generation, and CQRS modules.',
    level: 'Core Enterprise',
    tags: ['Microservices', 'REST', 'GraphQL', 'gRPC']
  },
  {
    name: 'PostgreSQL & pgvector',
    category: 'Backend & Cloud',
    description: 'Battle-tested relational persistence with JSONB document support and native high-dimensional vector search.',
    level: 'Core Enterprise',
    tags: ['ACID Compliance', 'Read Replicas', 'Vector Indexing']
  },
  {
    name: 'MongoDB & Atlas',
    category: 'Backend & Cloud',
    description: 'High-velocity document data store for polymorphic catalogs, dynamic attributes, and flexible audit trails.',
    level: 'Production Standard',
    tags: ['Document DB', 'Sharding', 'Full-Text Search']
  },
  {
    name: 'Redis & BullMQ',
    category: 'Backend & Cloud',
    description: 'Ultra-low latency in-memory data structures, distributed locks, rate limiters, and background task queues.',
    level: 'Core Enterprise',
    tags: ['In-Memory Cache', 'Job Scheduling', 'Distributed Locks']
  },
  {
    name: 'Docker & Kubernetes',
    category: 'Backend & Cloud',
    description: 'Immutable containerization, declarative orchestrations, and automated auto-scaling across AWS, GCP, and Azure.',
    level: 'Core Enterprise',
    tags: ['DevOps', 'Zero-Downtime Deploys', 'K8s Operators']
  },

  // Mobile
  {
    name: 'React Native',
    category: 'Mobile',
    description: 'Native iOS and Android delivery with shared business logic, 120 FPS Reanimated UI, and native bridge modules.',
    level: 'Core Enterprise',
    tags: ['Cross-Platform', 'Native Threads', 'OTA Updates']
  },
  {
    name: 'Flutter & Dart',
    category: 'Mobile',
    description: 'High-performance Skia/Impeller rendered multi-platform apps with custom canvas graphics and hardware APIs.',
    level: 'Production Standard',
    tags: ['Pixel-Perfect', 'Desktop & Mobile', 'Hardware Sensors']
  },
  {
    name: 'Swift & Kotlin Native',
    category: 'Mobile',
    description: 'Deep operating-system level integration for BLE accessories, background location, and Apple/Google Health services.',
    level: 'Core Enterprise',
    tags: ['BLE', 'Geofencing', 'Hardware SDKs']
  },

  // AI & ML
  {
    name: 'Python & FastAPI',
    category: 'AI & ML',
    description: 'Asynchronous microservices powering machine learning model inference and automated data pipelines.',
    level: 'Core Enterprise',
    tags: ['Pydantic', 'AsyncIO', 'Low Latency Inference']
  },
  {
    name: 'LLM Orchestration (LangGraph / LlamaIndex)',
    category: 'AI & ML',
    description: 'Stateful multi-agent workflows, tool execution loops, context pruning, and automated fallback arbitration.',
    level: 'Production Standard',
    tags: ['Agents', 'Tool Calling', 'Human in the Loop']
  },
  {
    name: 'PyTorch & Computer Vision',
    category: 'AI & ML',
    description: 'Deep neural networks for image classification, visual defect inspection, OCR parsing, and edge deployment.',
    level: 'Production Standard',
    tags: ['Neural Nets', 'Edge Inference', 'Object Detection']
  },

  // Data & Enterprise
  {
    name: 'Apache Kafka',
    category: 'Distributed Systems',
    description: 'Distributed event streaming backbone processing millions of operational events with guaranteed ordering.',
    level: 'Core Enterprise',
    tags: ['Event Sourcing', 'CQRS', 'Real-time Streaming']
  },
  {
    name: 'Power BI & Embedded Analytics',
    category: 'Data & Enterprise',
    description: 'Executive reporting suites, DAX modeling, automated data refreshes, and tenant-embedded analytics portals.',
    level: 'Core Enterprise',
    tags: ['Business Intelligence', 'Executive KPIs', 'Data Modeling']
  },
  {
    name: 'Snowflake & dbt',
    category: 'Data & Enterprise',
    description: 'Cloud data warehousing with version-controlled, testable SQL transformation pipelines.',
    level: 'Production Standard',
    tags: ['Data Lakehouse', 'ELT Pipelines', 'Data Quality CI']
  },
  {
    name: 'Solidity & Foundry (Web3)',
    category: 'Distributed Systems',
    description: 'Audited smart contracts for decentralized asset tokenization, escrow settlements, and cryptographic provenance.',
    level: 'Emerging Technology',
    tags: ['Smart Contracts', 'Gas Optimization', 'Fuzz Testing']
  }
];
