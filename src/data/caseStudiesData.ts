import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'agritrade-marketplace',
    slug: 'agritrade-global-agricultural-marketplace-ai',
    title: 'AgriTrade Global — B2B Agricultural Marketplace, Mobile App & AI Quality Verification',
    client: 'Conceptual Case Study: Bulk Agricultural Trading Architecture',
    industry: 'Agriculture & Global Commodities',
    category: 'Marketplace / Mobile / AI / FinTech',
    year: '2025–2026',
    isFlagship: true,
    tag: 'Marketplace / Mobile App / AI Workflows',
    projectStatus: 'Sample Interface Showcase',
    isIllustrative: true,
    disclaimer: 'Illustrative Engineering Showcase: Represents an architecture blueprint and interface prototype engineered by Novapex to demonstrate WebSocket bidding order books, multi-stage escrow workflows, and edge computer vision crop quality verification. All figures represent design benchmarks.',
    summary: 'A conceptual digital commodity trading architecture comprising a mobile app, high-concurrency web platform, escrow settlements, real-time freight dispatch, and automated AI quality inspection.',
    challenge: 'Agricultural bulk trade suffers from fragmented communication, opaque pricing, delayed settlements, and high fraud rates in quality grading. Global buyers require a unified platform connecting certified producers with international commodity buyers while processing multi-stage payment releases.',
    engineeringApproach: 'Novapex architected an event-driven microservice system with real-time bidding engines, automated escrow payment triggers, and an offline-first mobile app for field inspectors. We integrated a computer-vision pipeline running lightweight edge models to analyze crop photo samples and generate preliminary grain quality scorecards with human expert sign-off.',
    solution: 'We engineered: 1) A high-performance Next.js B2B marketplace with live WebSocket trade orders, 2) A cross-platform React Native mobile app for farm inspectors with offline image capture and GPS geotagging, 3) An escrow payment orchestration engine integrated with banking rails, and 4) An operations command center for dispute arbitration and shipping manifest tracking.',
    techStack: [
      'Next.js',
      'React Native',
      'Node.js & NestJS',
      'PostgreSQL',
      'Apache Kafka',
      'Redis',
      'Python (Computer Vision)',
      'Docker & AWS'
    ],
    deliverables: [
      'Multi-currency B2B web marketplace platform',
      'iOS & Android native field inspection mobile apps',
      'Automated escrow and billing integration engine',
      'Computer vision crop grade estimation service',
      'Operational admin suite with role-based permissions'
    ],
    metrics: [
      { label: 'Architecture Capacity', value: '50k req/s', description: 'Benchmarked Peak Event Concurrency' },
      { label: 'Dispute Reduction Target', value: '70%+', description: 'Target through verified audit trails' },
      { label: 'Inspector Sync Latency', value: '< 1.2s', description: 'Target delta sync upon network restore' }
    ],
    keyHighlights: [
      'Real-time WebSocket order book handling high concurrency during harvest peaks',
      'Zero-data-loss offline sync engine enabling inspectors to work in remote rural regions',
      'Automated multi-currency milestone releases reducing payment disputes to near zero'
    ],
    accentColor: '#16a34a'
  },
  {
    id: 'apexsafety-os',
    slug: 'apexsafety-fire-safety-operating-system',
    title: 'ApexSafety OS — Commercial Industrial Safety & Fire Protection Operating System',
    client: 'Conceptual Case Study: Field Service & Inspection Architecture',
    industry: 'Field Service & Industrial Safety',
    category: 'Vertical SaaS / Field Service / IoT',
    year: '2025',
    isFlagship: true,
    tag: 'Vertical SaaS / Industrial Safety / IoT',
    projectStatus: 'Architecture Prototype',
    isIllustrative: true,
    disclaimer: 'Illustrative Engineering Showcase: Represents an operational software architecture prototype designed for industrial safety and municipal compliance companies. Metrics indicate technical target benchmarks.',
    summary: 'A specialized vertical SaaS platform prototype for fire safety and industrial compliance inspection companies — covering equipment tagging, automated pressure testing protocols, digital certificates, and recurring maintenance cycles.',
    challenge: 'Industrial fire safety companies face compliance liabilities due to paper inspection sheets, missed statutory certification deadlines, and fragmented field technician reporting across hundreds of commercial facilities.',
    engineeringApproach: 'Novapex built a secure, field-hardened mobile workflow connected to an enterprise cloud backend. Field technicians scan QR/NFC tags on fire hydrants, suppression systems, and extinguishers to log pressure measurements, photograph wear, and automatically compile tamper-resistant statutory inspection certificates for municipal authorities.',
    solution: 'We delivered: 1) An offline-capable mobile app with QR/NFC scanning and automated digital signatures, 2) A dynamic protocol generator that outputs legally binding PDF certificates conforming to national fire safety standards, 3) An enterprise customer portal where building managers view live compliance status and upcoming re-certification countdowns.',
    techStack: [
      'React',
      'React Native',
      'TypeScript',
      'PostgreSQL',
      'Express.js',
      'PDFKit Engine',
      'Redis Queue',
      'Google Cloud Platform'
    ],
    deliverables: [
      'Technician iOS and Android mobile app with NFC/QR support',
      'Municipal compliant PDF protocol generation engine',
      'Building owner compliance management web portal',
      'Automated notification and recurring inspection scheduler',
      'Complete field operations dashboard'
    ],
    metrics: [
      { label: 'Target Asset Scale', value: '200k+', description: 'Designed for high-density IoT tagged assets' },
      { label: 'PDF Protocol Generation', value: '< 5 sec', description: 'Server-side automated cryptographic signing' },
      { label: 'Offline Resiliency', value: '100%', description: 'Full local database operation in underground vaults' }
    ],
    keyHighlights: [
      'Automated legal PDF certificate generator with tamper-proof cryptographic checksums',
      'Automated preventative maintenance alerts preventing missed statutory deadlines',
      'NFC/QR scanning verifying physical presence of technician at each equipment unit'
    ],
    accentColor: '#dc2626'
  },
  {
    id: 'fleetpulse-rental',
    slug: 'fleetpulse-heavy-equipment-rental-operations',
    title: 'FleetPulse — Commercial Heavy Equipment Rental & Telematics Operations System',
    client: 'Conceptual Case Study: Telematics & Logistics Architecture',
    industry: 'Equipment Rental & Construction Logistics',
    category: 'B2B Operations / Logistics / Telematics',
    year: '2024–2025',
    isFlagship: true,
    tag: 'Mobile App / Equipment Rental / B2B Logistics',
    projectStatus: 'Sample Interface Showcase',
    isIllustrative: true,
    disclaimer: 'Illustrative Engineering Showcase: Represents a heavy equipment dispatch and telematics operations platform architecture. Demonstrates CAN-bus data ingestion, live geofencing, and mobile return inspection.',
    summary: 'An end-to-end equipment rental management platform and mobile driver app connecting branch depots, telematics GPS tracking, machinery dispatch, and customer digital return handovers.',
    challenge: 'Equipment rental operations involve expensive fleets of boom lifts, excavators, and generators across regional depots. Companies struggle with equipment hoarding, inaccurate engine hour billing, transport dispatch delays, and disputes over return damage.',
    engineeringApproach: 'Novapex engineered a unified operations layer integrating GPS telematics hardware with an intuitive dispatch calendar and mobile driver app. The system correlates CAN-bus engine hours with billing contracts, automates condition photo capture upon drop-off and pickup, and tracks transport flatbeds in real-time.',
    solution: 'A responsive operations dashboard for branch managers, a customer self-service machinery booking portal, and a ruggedized mobile driver app for vehicle drop-offs, pre-start checks, and damage recording with customer signature capture.',
    techStack: [
      'Next.js 14',
      'Flutter',
      'NestJS',
      'PostgreSQL',
      'TimescaleDB (Telematics)',
      'Mapbox GL',
      'AWS IoT Core'
    ],
    deliverables: [
      'Branch operations and fleet allocation matrix web system',
      'Logistics driver and mechanic mobile app',
      'Telematics IoT stream processing pipeline for hour meter billing',
      'Customer rental booking and extension portal',
      'Damage appraisal and return inspection module'
    ],
    metrics: [
      { label: 'Telemetry Stream Latency', value: '< 250ms', description: 'TimescaleDB sensor ingestion pipeline' },
      { label: 'Target Utilization Uplift', value: '+20%', description: 'Through automated dispatch optimization' },
      { label: 'Condition Inspection', value: '8-Point Photo', description: 'Mandatory high-res cryptographic audit' }
    ],
    keyHighlights: [
      'Direct integration with IoT telematics for automated overtime and weekend engine usage billing',
      'Automated vehicle return inspection with mandatory 8-point high-res photo capture',
      'Live driver dispatch tracking reducing idle delivery truck miles'
    ],
    accentColor: '#ea580c'
  },
  {
    id: 'rentvault-proptech',
    slug: 'rentvault-self-storage-management-saas',
    title: 'RentVault — Next-Generation Self-Storage Management & Smart-Lock SaaS',
    client: 'Conceptual Case Study: PropTech Facility Automation',
    industry: 'PropTech & Commercial Real Estate',
    category: 'Vertical SaaS / Smart Facility / PropTech',
    year: '2025–2026',
    isFlagship: true,
    tag: 'SaaS / Self Storage / PropTech / IoT',
    projectStatus: 'Architecture Prototype',
    isIllustrative: true,
    disclaimer: 'Illustrative Engineering Showcase: Represents a multi-tenant PropTech SaaS platform connecting interactive vector floor plans, automated recurring billing, and hardware smart locks.',
    summary: 'A cloud-native SaaS platform concept for self-storage operators, connecting physical facility units with online customer onboarding, automated recurring card billing, and IoT smart-door gate integrations.',
    challenge: 'Traditional self-storage software is cumbersome and requires physical front-desk personnel for leasing units and distributing physical keys. Modern operators require 100% contactless digital leasing and keyless door dispatch.',
    engineeringApproach: 'Novapex engineered a multi-tenant SaaS architecture supporting interactive 2D SVG facility floor plans, instant identity verification, automated dynamic pricing based on unit occupancy, and hardware API webhooks for smart locks like Nokē and Salto.',
    solution: 'Tenants choose their unit on an interactive map, sign digital lease agreements on their mobile phones, pay via automated monthly credit card subscription, and receive an instant digital Bluetooth / PIN key on their phone to access the gate and their storage locker immediately.',
    techStack: [
      'Next.js App Router',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe Billing & Connect',
      'Redis & BullMQ',
      'IoT Smart Lock APIs'
    ],
    deliverables: [
      'Multi-facility management administrative console',
      'Interactive 2D unit map visualizer with dynamic availability',
      'Contactless tenant move-in and digital lease signing flow',
      'Automated recurring subscription and late-fee collection engine',
      'Hardware smart-gate integration webhook gateway'
    ],
    metrics: [
      { label: 'Self-Serve Move-in Target', value: '< 3 min', description: 'From website landing to mobile PIN dispatch' },
      { label: 'Multi-Tenant Isolation', value: 'Row-Level RLS', description: 'PostgreSQL cryptographic tenant security' },
      { label: 'Recurring Billing Success', value: '99%+', description: 'Stripe smart retries with card updater' }
    ],
    keyHighlights: [
      'Interactive vector facility floor plans with real-time unit occupancy color-coding',
      'Instantaneous Bluetooth and numerical keypad PIN dispatch upon successful Stripe payment',
      'Automated delinquent unit lockouts and auction readiness documentation'
    ],
    accentColor: '#0284c7'
  },
  {
    id: 'medixflow-clinical',
    slug: 'medixflow-clinical-workflow-automation',
    title: 'MedixFlow — HIPAA-Compliant Clinical Protocol & Patient Intake Engine',
    client: 'Illustrative Case Study: MedixFlow Health Architecture',
    industry: 'HealthTech & Clinical Operations',
    category: 'Healthcare / Compliance / Enterprise SaaS',
    year: '2025',
    isFlagship: false,
    tag: 'Healthcare / HIPAA / Workflow Automation',
    projectStatus: 'Illustrative Concept',
    isIllustrative: true,
    disclaimer: 'Illustrative Engineering Concept: An illustrative enterprise healthtech architecture designed for zero-trust clinical workflows, automated patient intake, and FHIR/HL7 standards under HIPAA compliance.',
    summary: 'An illustrative enterprise healthtech concept: A zero-trust clinical workflow and automated patient triage engine designed for high-volume outpatient clinics with strict HIPAA compliance.',
    challenge: 'Outpatient surgery centers lose medical staff hours to redundant patient questionnaire entries, manual insurance pre-authorizations, and pre-op clearance tracking.',
    engineeringApproach: 'Novapex engineered a zero-knowledge encrypted clinical pipeline utilizing FHIR/HL7 standards with end-to-end encryption at rest and in transit. Dynamic triage logic guides patients through customized medical screening before their appointments.',
    solution: 'A mobile-friendly patient onboarding intake portal, electronic signature capture, direct EHR integration adapters, and an automated clinical clearance dashboard for triage nurses.',
    techStack: [
      'React 19',
      'FastAPI',
      'PostgreSQL with pgcrypto',
      'FHIR / HL7 v2 APIs',
      'Docker',
      'AWS HIPAA Eligible Services'
    ],
    deliverables: [
      'Responsive patient intake web application',
      'Clinical nurse triage and scheduling console',
      'FHIR compliant API integration layer',
      'HIPAA compliance and security audit package'
    ],
    metrics: [
      { label: 'Intake Target Completion', value: '90%+', description: 'Target before clinic arrival' },
      { label: 'Manual Intake Reduction', value: '-60%', description: 'Target clinical interview reduction' },
      { label: 'HIPAA Audit Trail', value: '100% Immutable', description: 'All PHI access cryptographically logged' }
    ],
    keyHighlights: [
      'Zero-knowledge encryption ensuring private medical data is protected at all layers',
      'FHIR standard interoperability connecting with legacy hospital electronic health records'
    ],
    accentColor: '#0d9488'
  },
  {
    id: 'traceblock-supply',
    slug: 'traceblock-cross-border-supply-chain-ledger',
    title: 'TraceBlock — Cryptographic Provenance & Cross-Border Supply Chain Ledger',
    client: 'Illustrative Case Study: Global Trade Alliance Prototype',
    industry: 'Logistics & International Trade',
    category: 'Blockchain / Supply Chain / Smart Contracts',
    year: '2024–2025',
    isFlagship: false,
    tag: 'Web3 / Smart Contracts / Supply Chain',
    projectStatus: 'Illustrative Concept',
    isIllustrative: true,
    disclaimer: 'Illustrative Engineering Concept: An illustrative Web3 enterprise concept demonstrating tamper-proof cryptographic container custody tracking utilizing smart contracts on Layer 2 rollups.',
    summary: 'An illustrative Web3 enterprise concept: A tamper-proof cryptographic container custody tracking network utilizing smart contracts on an Ethereum Layer-2 rollup for international bill-of-lading settlement.',
    challenge: 'International maritime cargo involves multiple customs brokers, freight forwarders, and shipping carriers, leading to lost paper bills of lading and costly demurrage penalties at container ports.',
    engineeringApproach: 'Novapex engineered an immutable document hashing protocol on Base Layer-2 rollup. Each container handover produces a cryptographically signed receipt verifying GPS location, timestamp, and carrier authorization.',
    solution: 'A decentralized smart contract registry, customs clearance API gateway, and carrier mobile app for dockside QR custody scanning with instantaneous smart contract state transition.',
    techStack: [
      'Solidity',
      'Foundry',
      'Base L2 Rollup',
      'Node.js',
      'The Graph',
      'React / Tailwind CSS'
    ],
    deliverables: [
      'Audited Solidity smart contract suite',
      'Dockside carrier scanner mobile web application',
      'Carrier custody tracking explorer portal',
      'OpenAPI gateway for port authority integration'
    ],
    metrics: [
      { label: 'Document Issuance Target', value: '< 60 sec', description: 'Instantaneous smart contract minting' },
      { label: 'Layer 2 Gas Cost Target', value: '< $0.02', description: 'Per verified container checkpoint' },
      { label: 'Custody Reconciliation', value: '100% Cryptographic', description: 'Multi-sig carrier authorization' }
    ],
    keyHighlights: [
      'Immutable cryptographic custody chain recognized across port jurisdictions',
      'Sub-penny transaction fees through gas-optimized Layer-2 smart contracts'
    ],
    accentColor: '#6366f1'
  }
];
