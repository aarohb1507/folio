const portfolioData = {
  name: "Aaroh Bhardwaj",
  initials: "AB",
  startYear: 2022,
  about: {
    tldr: "backend-focused engineer building high-throughput distributed systems and production GenAI infrastructure",
    paragraphs: [
      "i specialize in scalable, reliable backend systems with strong emphasis on observability and performance.",
      "i enjoy working close to the infrastructure, taking features from idea to production."
    ],
    moreLink: "/things-i-believe"
  },
  experience: [
    {
      company: "Phyniks Dreamlabs LLP",
      logo: "P",
      url: "https://phyniks.com",
      role: "software development engineer intern",
      type: "internship",
      dates: "august 2025 - present",
      description: "designed scalable Node.js APIs with RBAC, JWT, and rate limiting; optimized PostgreSQL queries reducing latency by 40%; built Next.js dashboards"
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
      years: "november 2022 - june 2026",
      field: "B.E. Computer Science",
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
