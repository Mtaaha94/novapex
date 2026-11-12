export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  stats: { label: string; value: string }[];
  featuredTech: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'agriculture-commodities',
    slug: 'agriculture-commodities',
    name: 'Agriculture & Global Commodities',
    tagline: 'Digital trading floors, harvest logistics, and AI grain verification.',
    description: 'We digitize traditional agricultural commodity chains—from farmgate purchase contracts to international port container manifests—with real-time marketplace bidding and verified escrow payments.',
    challenges: [
      'Fragmented dealer networks and paper-based inspection sheets',
      'High counterparty risk and slow banking settlement windows',
      'Rural connectivity deadzones preventing timely field data logging'
    ],
    solutions: [
      'Real-time WebSocket trading platforms with multi-currency escrow',
      'Offline-first mobile inspection apps with automated GPS tagging',
      'Computer vision models estimating grain grade from camera samples'
    ],
    stats: [
      { label: 'Trade Volume Enabled', value: '$100M+' },
      { label: 'Settlement Speed', value: 'Instant' },
      { label: 'Inspection Time', value: '-60%' }
    ],
    featuredTech: ['Next.js', 'React Native', 'Apache Kafka', 'Computer Vision']
  },
  {
    id: 'field-services-equipment',
    slug: 'field-services-equipment',
    name: 'Field Services & Equipment Rental',
    tagline: 'Mission-critical operating systems for heavy machinery and field technicians.',
    description: 'We engineer vertical SaaS platforms and mobile tools for equipment rental depots, fire safety inspectors, and industrial maintenance contractors who need zero-downtime field apps.',
    challenges: [
      'Missed statutory safety certification deadlines incurring severe liabilities',
      'Untracked equipment damage during customer return handovers',
      'Manual dispatch routing wasting fuel and driver hours'
    ],
    solutions: [
      'QR and NFC equipment scanning with instant digital protocols',
      'Automated 8-point condition photo capture and electronic signing',
      'CAN-bus telematics engine hour tracking and billing automation'
    ],
    stats: [
      { label: 'Fleet Assets Tracked', value: '250k+' },
      { label: 'Inspection Protocol Time', value: '4 seconds' },
      { label: 'Damage Recovery Rate', value: '+35%' }
    ],
    featuredTech: ['React Native', 'Flutter', 'TimescaleDB', 'IoT Hardware APIs']
  },
  {
    id: 'proptech-storage',
    slug: 'proptech-storage',
    name: 'PropTech & Smart Facility Management',
    tagline: 'Contactless tenant onboarding, smart locks, and facility automation.',
    description: 'Modernizing commercial real estate and self-storage with interactive 2D facility floorplans, mobile keyless access, and automated subscription billing.',
    challenges: [
      'High overhead costs of maintaining physical front-desk staffing',
      'Fragmented hardware locks and disparate billing systems',
      'Slow manual identity verification and paper lease signing'
    ],
    solutions: [
      'Interactive vector map visualizers with real-time unit availability',
      'Cloud smart-lock API integrations for instant Bluetooth/PIN access',
      'Automated recurring Stripe credit card billing and delinquency lockouts'
    ],
    stats: [
      { label: 'Move-In Time', value: '2.5 min' },
      { label: 'Self-Service Rate', value: '92%' },
      { label: 'Facilities Powered', value: '60+' }
    ],
    featuredTech: ['Next.js', 'TypeScript', 'Stripe Connect', 'Smart Lock APIs']
  },
  {
    id: 'fintech-digital-assets',
    slug: 'fintech-digital-assets',
    name: 'Fintech & Digital Assets',
    tagline: 'Audited transactional ledgers, institutional custody, and payment rails.',
    description: 'We build compliant fintech architectures, payment gateways, and audited smart contracts with bank-grade security and sub-second settlement.',
    challenges: [
      'Regulatory scrutiny and stringent AML/KYC audit requirements',
      'High-frequency transactional concurrency spikes and race conditions',
      'Smart contract vulnerability vectors and exploit risks'
    ],
    solutions: [
      'Formal mathematical verification of smart contracts using Foundry',
      'Event-driven ledger systems with strict double-entry accounting',
      'Multi-signature custody treasuries and timelocked governance'
    ],
    stats: [
      { label: 'Transactions Processed', value: '10M+' },
      { label: 'Smart Contract Audits', value: '100% Passed' },
      { label: 'Uptime Reliability', value: '99.99%' }
    ],
    featuredTech: ['Solidity', 'Go', 'PostgreSQL', 'Redis', 'The Graph']
  },
  {
    id: 'supply-chain-logistics',
    slug: 'supply-chain-logistics',
    name: 'Supply Chain & Freight Logistics',
    tagline: 'End-to-end container tracking, route optimization, and vendor portals.',
    description: 'Connecting global shippers, 3PL warehouses, and carrier flatbeds into unified real-time dispatch systems with automated customs and bill of lading documentation.',
    challenges: [
      'Disjointed legacy EDI formats causing data transmission blackouts',
      'Excessive demurrage and detention fees from delayed paperwork',
      'Lack of real-time GPS visibility for high-value cargo'
    ],
    solutions: [
      'Modern REST & Webhook bridges over legacy EDI/AS2 feeds',
      'Automated electronic Bill of Lading generation with digital verification',
      'Real-time Mapbox telemetry dispatch dashboard with geofence triggers'
    ],
    stats: [
      { label: 'Container Turnaround', value: '-22%' },
      { label: 'Demurrage Cost Saved', value: '$1.4M' },
      { label: 'Tracked Freight Routes', value: '450+' }
    ],
    featuredTech: ['Next.js', 'NestJS', 'Mapbox GL', 'Apache Kafka', 'PostgreSQL']
  }
];
