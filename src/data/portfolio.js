const portfolioData = {
  name: "Aaroh Bhardwaj",
  initials: "AB",
  startYear: 2022,
  resumeUrl: "/Aaroh_s_resume_2026.pdf",
  contact: {
    location: "Bengaluru, Karnataka",
    phone: "+91-7970932080",
    email: "aarohb.1507@gmail.com",
    website: "https://aarohb.com"
  },
  about: {
    tldr: "backend and infrastructure engineer building distributed systems, scalable APIs, and production-grade GenAI stacks",
    paragraphs: [
      "i focus on reliability, correctness, and observability in real-world deployments.",
      "i enjoy taking systems from architecture through production hardening and performance tuning."
    ],
    moreLink: "/things-i-believe"
  },
  highlights: [
    {
      title: "10K+ events/min ingestion",
      description: "built distributed metrics pipelines with Redis Streams, DLQs, and idempotent processors for high-load correctness."
    },
    {
      title: "sub-200ms retrieval",
      description: "implemented hybrid retrieval with reranking, semantic chunking, and caching to maintain low-latency RAG responses."
    },
    {
      title: "40% faster dashboards",
      description: "optimized APIs, caching, and database paths to cut dashboard latency and improve admin workflow speed."
    }
  ],
  experience: [
    {
      company: "Phyniks Dreamlabs LLP",
      logo: "P",
      url: "https://phyniks.com",
      role: "full stack developer intern",
      type: "internship",
      dates: "september 2025 - present",
      description: "built scalable NestJS backends with DTO validation, guards, query optimization, and Redis caching; developed SSR Next.js admin dashboards with sub-200ms TTFB"
    }
  ],
  projects: [
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
      name: "Invar",
      logo: "I",
      url: "https://github.com/aarohb1507/invar",
      liveUrl: "https://outstanding-mersey-aarohb-507-d991d9a2.koyeb.app/",
      image: "/images/invar.png",
      tech: "Node.js, Redis Streams, PostgreSQL, SSE",
      dates: "december 2025",
      description: "high-throughput metrics ingestion platform handling 10K+ events/min with 99.9% reliability, featuring decoupled hot/cold storage paths and real-time SSE delivery"
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
  skills: ["javascript", "typescript", "sql", "python", "c++", "node.js", "nestjs", "fastify", "nextjs", "docker", "postgresql", "mongodb", "redis", "rabbitmq", "redis streams", "rag pipelines", "vector search", "llm orchestration"],
  social: {
    twitter: "https://x.com/aarohcodes",
    linkedin: "https://linkedin.com/in/aaroh-bhardwaj",
    github: "https://github.com/aarohb1507"
  }
}

export default portfolioData
