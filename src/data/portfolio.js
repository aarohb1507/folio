const portfolioData = {
  name: "Aaroh Bhardwaj",
  initials: "AB",
  startYear: 2022,
  resumeUrl: "/Aaroh_s_resume.pdf",
  contact: {
    location: "Bengaluru, Karnataka",
    email: "aarohb.1507@gmail.com"
  },
  about: {
    tldr: "backend systems engineer | ai infrastructure",
    paragraphs: [
      "i work closest to the parts of a product where data, latency, and correctness meet.",
      "i enjoy taking production data platforms from architecture through hardening, then measuring whether the decisions actually held up."
    ],
    moreLink: "/things-i-believe"
  },
  experience: [
    {
      company: "Growify Digital",
      logo: "G",
      role: "ai engineer intern",
      type: "internship",
      dates: "august 2026 - present",
      highlights: [
        "built loop, a NestJS + Next.js data platform replacing Funnel.io and Power BI across Shopify, Meta Ads, Google Ads, Google Sheets and GA4 — live in production",
        "designed a sync engine with 28–60 day restatement windows, idempotent upserts and success-only cursors — stored totals reconcile with Meta and Shopify exactly",
        "reached 169 Google Ads client accounts through one manager-account OAuth sign-in, with signed state, scope checks and country totals that always add up to campaign totals",
        "diagnosed Meta's CPU-based rate limiting from usage headers, rebuilt syncs as batched per-entity requests, and reduced stored data 18x through correct-grain aggregation",
        "integrated roasify with loop through a brand-scoped partner API, so it can automatically read ad data and Shopify metrics — 27/27 production integration checks passing",
        "ran production and dev on one server with nginx, HTTPS and one-click GitHub Actions deploys that ship no secrets and fail on a bad health check"
      ],
      initiative: {
        name: "Loop",
        label: "data platform + ai analyst",
        description: "five ad and commerce sources, one reconciled model, a ceo dashboard, a roasify integration — and an ai layer next",
        link: "/loop"
      }
    },
    {
      company: "Phyniks Dreamlabs LLP",
      logo: "P",
      url: "https://phyniks.com",
      role: "full stack developer intern",
      type: "internship",
      dates: "september 2025 - january 2026",
      highlights: [
        "built scalable NestJS backends with DTO validation, guards, query optimization, and Redis caching",
        "developed SSR Next.js admin dashboards with sub-200ms TTFB"
      ]
    }
  ],
  projects: [
    {
      name: "Invar",
      logo: "I",
      url: "https://github.com/aarohb1507/invar",
      liveUrl: "https://outstanding-mersey-aarohb-507-d991d9a2.koyeb.app/",
      image: "/images/invar.png",
      tech: "Node.js, Redis Streams, PostgreSQL, SSE",
      dates: "december 2025",
      description: "high-throughput metrics ingestion platform handling 5k+ events/min with 90% reliability, featuring decoupled hot/cold storage paths and real-time SSE delivery"
    },
    {
      name: "SentinelRAG",
      logo: "S",
      url: "https://github.com/aarohb1507/sentinal-rag",
      liveUrl: "https://sentinal-web-711220270423.asia-south1.run.app/",
      image: "/images/sentinalrag.png",
      tech: "Node.js, Fastify, Python, PostgreSQL (pgvector), Redis, Docker",
      dates: "january 2026",
      description: "enterprise-grade RAG system with hybrid retrieval, LLM reranking, and sub-200ms latency, featuring semantic chunking, Redis caching, and full per-stage observability"
    },
    {
      name: "NexusFeed",
      logo: "N",
      url: "https://github.com/aarohb1507/nexusfeed",
      liveUrl: "https://nexusfeed.vercel.app/",
      image: "/images/nexusfeed.png",
      tech: "Node.js, RabbitMQ, Redis, Docker, Nginx",
      dates: "november 2025",
      description: "scalable event-driven microservices backend with API Gateway, caching, and 99.8% uptime"
    }
  ],
  education: [
    {
      institution: "Acharya Institute of Technology",
      logo: "A",
      years: "2022 - 2026 (expected)",
      field: "B.E. Computer Science & Software Engineering",
      url: "https://linkedin.com/in/aaroh-bhardwaj"
    }
  ],
  skills: ["javascript", "typescript", "sql", "python", "go", "node.js", "nestjs", "fastify", "nextjs", "docker", "postgresql", "mongodb", "redis", "rabbitmq", "redis streams", "rag pipelines", "vector search", "llm orchestration", "data pipelines", "oauth", "google ads api", "github actions", "nginx"],
  social: {
    twitter: "https://x.com/aarohcodes",
    linkedin: "https://linkedin.com/in/aaroh-bhardwaj",
    github: "https://github.com/aarohb1507"
  }
}

export default portfolioData
