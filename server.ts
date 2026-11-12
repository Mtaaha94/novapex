import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory lead and RFP storage (ready for MongoDB connection)
interface LeadEntry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  budget: string;
  message: string;
  consent: boolean;
  receivedAt: string;
  ip?: string;
}

const leadsDatabase: LeadEntry[] = [];
const rfpDatabase: any[] = [];

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // 1. Backend API: Lead Contact Submission with Server-Side Validation & Anti-Spam
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, email, phone, company, serviceInterest, budget, message, consent, honeypot } = req.body;

    // Honeypot spam check
    if (honeypot) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(422).json({ error: 'Valid full name (minimum 2 characters) is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(422).json({ error: 'A valid email address is required' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(422).json({ error: 'Project description must be at least 10 characters' });
    }

    if (consent !== true) {
      return res.status(422).json({ error: 'Privacy consent is mandatory to process inquiries' });
    }

    const newLead: LeadEntry = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      company: company?.trim(),
      serviceInterest: serviceInterest || 'General Product Engineering',
      budget: budget || 'Unspecified',
      message: message.trim(),
      consent: true,
      receivedAt: new Date().toISOString(),
      ip: req.ip
    };

    leadsDatabase.push(newLead);
    console.log(`[Novapex API] Lead recorded successfully: ${newLead.id} from ${newLead.email}`);

    return res.status(200).json({
      success: true,
      leadId: newLead.id,
      message: 'Inquiry successfully validated and logged by Novapex API.'
    });
  });

  // 2. Backend API: Project Scoping RFP Submission
  app.post('/api/rfp', (req: Request, res: Response) => {
    const { projectType, selectedDisciplines, timeline, budgetTier, contactName, contactEmail, companyName, scopeDetails } = req.body;

    if (!contactName || !contactEmail) {
      return res.status(422).json({ error: 'Name and email are required for RFP submission' });
    }

    const rfpEntry = {
      id: `rfp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      projectType,
      selectedDisciplines: Array.isArray(selectedDisciplines) ? selectedDisciplines : [],
      timeline,
      budgetTier,
      contactName: String(contactName).trim(),
      contactEmail: String(contactEmail).trim().toLowerCase(),
      companyName: String(companyName || '').trim(),
      scopeDetails: String(scopeDetails || '').trim(),
      submittedAt: new Date().toISOString()
    };

    rfpDatabase.push(rfpEntry);
    console.log(`[Novapex API] Project RFP recorded: ${rfpEntry.id}`);

    return res.status(200).json({
      success: true,
      rfpId: rfpEntry.id,
      message: 'RFP scoping data validated and stored successfully.'
    });
  });

  // 3. Backend API: Health & Telemetry
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      service: 'Novapex Digital Engineering API Gateway',
      environment: process.env.NODE_ENV || 'development',
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    });
  });

  // 4. Secure Admin Gate (Authentication & Authorization enforcement)
  app.get('/admin*', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Novapex Secure Admin Console"');
      return res.status(401).send(`
        <!DOCTYPE html>
        <html>
        <head><title>401 Unauthorized - Novapex Admin Gateway</title></head>
        <body style="font-family: sans-serif; background: #0f172a; color: #fff; padding: 40px; text-align: center;">
          <h2>Novapex Security Gate: Authentication Required</h2>
          <p style="color: #94a3b8;">Direct access to /admin is restricted to authenticated engineering leads.</p>
          <a href="/" style="color: #818cf8;">Return to Novapex Homepage</a>
        </body>
        </html>
      `);
    }

    // In a full production deployment, verify JWT or bcrypt admin credentials
    return res.status(403).send('Forbidden: Insufficient administrative privileges.');
  });

  // Route-Specific SEO Metadata Map
  const routeMetaMap: Record<string, { title: string; description: string; h1: string }> = {
    '/': {
      title: 'Novapex Digital Engineering | Custom Software & AI Development',
      description: 'Novapex Digital Engineering builds scalable web applications, mobile apps, enterprise software, AI-powered solutions and digital products for businesses worldwide.',
      h1: 'Engineering Scalable Digital Products for Global Businesses.'
    },
    '/about': {
      title: 'About Us | Novapex Digital Engineering',
      description: 'Learn about Novapex Digital Engineering: a global software engineering partner delivering scalable web, mobile, and enterprise solutions.',
      h1: 'Engineering Scalable Digital Products for Global Businesses.'
    },
    '/about-us': {
      title: 'About Us | Novapex Digital Engineering',
      description: 'Learn about Novapex Digital Engineering: a global software engineering partner delivering scalable web, mobile, and enterprise solutions.',
      h1: 'Engineering Scalable Digital Products for Global Businesses.'
    },
    '/services': {
      title: 'Engineering Capabilities & Services | Novapex Digital Engineering',
      description: 'Explore full-lifecycle digital product development: Web, Backend, Mobile, Enterprise AI, ERP Systems, and Data Engineering.',
      h1: 'Full-Lifecycle Digital Product Development.'
    },
    '/services/web-development': {
      title: 'Web Application Development | Novapex Digital Engineering',
      description: 'High-performance React and Next.js web applications engineered for sub-second latencies and global scale.',
      h1: 'Web Application Development.'
    },
    '/services/backend-engineering': {
      title: 'Backend Engineering & Distributed Systems | Novapex Digital Engineering',
      description: 'Fault-tolerant microservices, high-throughput Kafka and Redis streams, and clustered PostgreSQL architectures.',
      h1: 'Backend Engineering & Distributed Systems.'
    },
    '/services/mobile-app-development': {
      title: 'Mobile Application Development | Novapex Digital Engineering',
      description: 'Cross-platform React Native and native iOS/Android applications with offline-first synchronization.',
      h1: 'Mobile Application Development.'
    },
    '/services/ai-machine-learning': {
      title: 'Enterprise AI & Machine Learning | Novapex Digital Engineering',
      description: 'Controlled agentic workflows, deterministic LLM tool-calling, and enterprise RAG with human oversight.',
      h1: 'AI & Machine Learning Engineering.'
    },
    '/services/blockchain-development': {
      title: 'Blockchain & Distributed Ledger Engineering | Novapex Digital Engineering',
      description: 'Enterprise smart contract development, cryptographic audit trails, and multi-signature security protocols.',
      h1: 'Blockchain & Distributed Systems.'
    },
    '/services/erp-enterprise-software': {
      title: 'ERP & Enterprise Software Development | Novapex Digital Engineering',
      description: 'Custom enterprise resource planning, modular RBAC architectures, and automated business operations backbones.',
      h1: 'ERP & Enterprise Software.'
    },
    '/services/custom-software-development': {
      title: 'Custom Software Architecture & Engineering | Novapex Digital Engineering',
      description: 'End-to-end bespoke product engineering designed to scale with your intellectual property and business operations.',
      h1: 'Custom Software Architecture.'
    },
    '/services/ui-ux-design': {
      title: 'UI/UX Design Systems & Product Interface Engineering | Novapex Digital Engineering',
      description: 'Design systems, accessibility-first interfaces, interaction design, and high-fidelity product prototypes.',
      h1: 'UI/UX Design Systems.'
    },
    '/services/data-engineering-analytics': {
      title: 'Data Engineering & Real-Time Analytics | Novapex Digital Engineering',
      description: 'Automated ETL/ELT data pipelines, Snowflake/BigQuery warehousing, and executive business intelligence dashboards.',
      h1: 'Data Engineering & Analytics.'
    },
    '/industries': {
      title: 'Industries & Enterprise Domains | Novapex Digital Engineering',
      description: 'Specialized software engineering for Agriculture, Industrial Safety, Field Services, FinTech, and Logistics.',
      h1: 'Industry Engineering Specializations.'
    },
    '/technologies': {
      title: 'Technology Stack & Engineering Radars | Novapex Digital Engineering',
      description: 'Our evaluated technology radar: React, Next.js, Node.js, Python, PostgreSQL, Kafka, Redis, and PyTorch.',
      h1: 'Evaluated Technology Stack.'
    },
    '/case-studies': {
      title: 'Case Studies & Engineering Showcases | Novapex Digital Engineering',
      description: 'Explore architectural blueprints and software showcases across agricultural trading, industrial safety, and telematics.',
      h1: 'Case Studies & Production Deliveries.'
    },
    '/case-studies/agritrade-global-agricultural-marketplace-ai': {
      title: 'AgriTrade Global Architecture Prototype | Novapex Case Studies',
      description: 'Sample interface showcase of a B2B agricultural marketplace, real-time WebSocket order books, and edge AI quality verification.',
      h1: 'AgriTrade Global Architecture Blueprint.'
    },
    '/case-studies/apexsafety-fire-safety-operating-system': {
      title: 'ApexSafety OS Industrial Safety Prototype | Novapex Case Studies',
      description: 'Architecture blueprint for commercial fire protection, offline-first technician tablets, and IoT gateway telemetry.',
      h1: 'ApexSafety OS Engineering Blueprint.'
    },
    '/case-studies/fleetpulse-heavy-equipment-rental-operations': {
      title: 'FleetPulse Telematics Dispatch Blueprint | Novapex Case Studies',
      description: 'Conceptual telematics dispatch architecture featuring live GPS geofencing and automated equipment telematics ingestion.',
      h1: 'FleetPulse Telematics Dispatch Architecture.'
    },
    '/case-studies/rentvault-self-storage-management-saas': {
      title: 'RentVault Self-Storage SaaS Architecture | Novapex Case Studies',
      description: 'Cloud property management platform architecture with Bluetooth digital unit key provisioning and automated ledger billing.',
      h1: 'RentVault Self-Storage Architecture.'
    },
    '/case-studies/medixflow-clinical-workflow-automation': {
      title: 'MedixFlow Clinical Workflow Prototype | Novapex Case Studies',
      description: 'FHIR-compliant clinical orchestration blueprint with automated physician scheduling and HIPAA-compliant data pipelines.',
      h1: 'MedixFlow Clinical Workflow Architecture.'
    },
    '/case-studies/traceblock-cross-border-supply-chain-ledger': {
      title: 'TraceBlock Supply Chain Ledger Architecture | Novapex Case Studies',
      description: 'Distributed ledger architecture for tamper-evident bill-of-lading notarization and customs escrow clearance.',
      h1: 'TraceBlock Supply Chain Ledger.'
    },
    '/insights': {
      title: 'Technical Insights & Engineering Papers | Novapex Digital Engineering',
      description: 'Technical articles on Next.js Core Web Vitals, enterprise RAG workflows, offline mobile synchronization, and Kafka streaming.',
      h1: 'Architectural Perspectives & Deep Dives.'
    },
    '/blog': {
      title: 'Technical Insights & Engineering Papers | Novapex Digital Engineering',
      description: 'Technical articles on Next.js Core Web Vitals, enterprise RAG workflows, offline mobile synchronization, and Kafka streaming.',
      h1: 'Architectural Perspectives & Deep Dives.'
    },
    '/insights/engineering-reliable-ai-workflows-in-production': {
      title: 'Engineering Reliable AI Workflows in Production | Novapex Insights',
      description: 'Architectural patterns for production-grade agentic systems: deterministic tool calling, evaluation suites, and human oversight.',
      h1: 'Engineering Reliable AI Workflows in Production.'
    },
    '/insights/optimizing-nextjs-web-vitals-enterprise-scale': {
      title: 'Optimizing Next.js Core Web Vitals at Enterprise Scale | Novapex Insights',
      description: 'Techniques for sub-second Largest Contentful Paint, streaming SSR, and zero-layout-shift design systems.',
      h1: 'Optimizing Next.js Core Web Vitals at Scale.'
    },
    '/insights/offline-first-mobile-architecture-field-operations': {
      title: 'Offline-First Mobile Architecture for Field Operations | Novapex Insights',
      description: 'Local SQLite delta queues, CRDT conflict resolution, and deterministic background sync in React Native.',
      h1: 'Offline-First Mobile Architecture for Field Operations.'
    },
    '/insights/high-throughput-event-streaming-kafka-redis': {
      title: 'High-Throughput Event Streaming with Kafka & Redis | Novapex Insights',
      description: 'Partitioning strategies, consumer backpressure mitigation, and dead-letter queue architectures for 50k+ req/sec.',
      h1: 'High-Throughput Event Streaming with Kafka & Redis.'
    },
    '/careers': {
      title: 'Careers & Engineering Squads | Novapex Digital Engineering',
      description: 'Join Novapex Digital Engineering. Senior remote-first squads building production software for global enterprises.',
      h1: 'Build Software That Works in Production.'
    },
    '/contact': {
      title: 'Contact Engineering Leadership | Novapex Digital Engineering',
      description: 'Initiate a technical scoping consultation with a Novapex Solutions Architect. 24-hour response promise.',
      h1: 'Discuss Your Technical Product.'
    },
    '/get-in-touch': {
      title: 'Contact Engineering Leadership | Novapex Digital Engineering',
      description: 'Initiate a technical scoping consultation with a Novapex Solutions Architect. 24-hour response promise.',
      h1: 'Discuss Your Technical Product.'
    },
    '/start-a-project': {
      title: 'Start a Project & RFP Scoping | Novapex Digital Engineering',
      description: 'Configure your technical scope, required engineering disciplines, and target timeline with Novapex.',
      h1: 'Start a Project with Novapex.'
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Novapex Digital Engineering',
      description: 'Novapex Digital Engineering privacy policy, client data processing standards, and security safeguards.',
      h1: 'Privacy Policy.'
    },
    '/terms': {
      title: 'Terms of Service | Novapex Digital Engineering',
      description: 'Terms of service, engineering engagement standards, and intellectual property terms for Novapex.',
      h1: 'Terms of Service.'
    }
  };

  // Mount Vite development server middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  // Fallback HTML handler: injects route-specific SEO tags and pre-rendered titles
  app.use('*', async (req: Request, res: Response, next) => {
    const url = req.originalUrl.split('?')[0];

    try {
      const templatePath = path.resolve(__dirname, 'index.html');
      let template = fs.readFileSync(templatePath, 'utf-8');

      // Transform through Vite
      template = await vite.transformIndexHtml(url, template);

      // Inject route-specific metadata if matched or generate fallback
      const cleanUrl = url.replace(/\/$/, '') || '/';
      let meta = routeMetaMap[url] || routeMetaMap[cleanUrl];

      if (!meta) {
        // Dynamic fallback generation for nested routes
        const titleSlug = cleanUrl.split('/').pop()?.replace(/-/g, ' ') || 'Digital Product';
        const formattedTitle = titleSlug.charAt(0).toUpperCase() + titleSlug.slice(1);
        meta = {
          title: `${formattedTitle} | Novapex Digital Engineering`,
          description: `Learn more about ${formattedTitle} at Novapex Digital Engineering, building scalable digital products for global businesses.`,
          h1: formattedTitle
        };
      }

      template = template.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
      template = template.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
      template = template.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://novapexglobal.com${cleanUrl}" />`);
      template = template.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
      template = template.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
      template = template.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="https://novapexglobal.com${cleanUrl}" />`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`[Novapex Server] Full-stack engine running on http://0.0.0.0:${port}`);
  });
}

startServer();
