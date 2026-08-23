export const site = {
  name: "Daril Nofriansyah",
  role: "Systems Engineer",
  summary:
    "Systems engineer building practical AI-integrated products, automation platforms, backend services, and quality engineering systems.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Systems" },
  { href: "/research", label: "Research" },
  { href: "/#featured-work", label: "Work" },
  { href: "/#about", label: "About" },
] as const;

export const systems = [
  {
    title: "Nexus",
    category: "AI-Integrated Systems Initiative",
    description:
      "A connected ecosystem of AI-integrated systems designed around specific human responsibilities.",
    status: "Active",
    stack: [],
    infrastructure: "Nexus Core",
    entities: [
      {
        title: "Aegis",
        category: "Reliability and Protection",
        description:
          "Structured errors, defensive behavior, resilience, and operational protection.",
        href: "/projects/aegis",
        accent: "aegis",
      },
      {
        title: "Veyra",
        category: "Financial Intelligence",
        description:
          "Transaction tracking, budgeting, analytics, and financial accountability.",
        href: "/projects/veyra",
        accent: "veyra",
      },
    ],
    href: "/nexus",
    linkLabel: "Open Nexus archive",
    accent: "violet",
  },
  {
    title: "Test Case Generator",
    category: "Quality Engineering",
    description:
      "An AI-integrated tool that generates structured test cases for faster, more consistent test design.",
    status: "Active",
    stack: [],
    href: "/contact",
    linkLabel: "Discuss the tool",
    accent: "sage",
  },
] as const;

export const featuredProjects = [
  {
    title: "Aegis",
    type: "Reliability and protection",
    href: "/projects/aegis",
    summary:
      "A Telegram bot for system monitoring, starting with n8n workflow error notifications so failed automations are surfaced quickly in chat.",
    impact:
      "Turns silent workflow failures into clear operational alerts, helping small automation stacks recover faster and stay visible.",
    stack: ["Telegram Bot", "n8n", "System Monitoring"],
  },
  {
    title: "Veyra",
    type: "Financial intelligence",
    href: "/projects/veyra",
    summary:
      "A Telegram financial assistant powered by an n8n workflow system, designed to help users reflect on spending and build better money habits.",
    impact:
      "Explores conversational guidance, workflow automation, and practical personal finance support inside a familiar chat interface.",
    stack: ["Telegram", "n8n", "Workflow Automation"],
  },
  {
    title: "Daril Nofriansyah Portfolio",
    type: "Engineering archive",
    summary:
      "This portfolio, built as a public archive for systems, research notes, and the work behind the Nexus initiative.",
    impact:
      "Creates a calm, durable base for technical documentation, case studies, and project updates.",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
  },
] as const;

export const responsibilityAreas = [
  "Financial awareness",
  "Protection and reliability",
  "Automation",
  "Knowledge and experimentation",
] as const;

export const researchEntries = [
  {
    type: "Automation pattern",
    title: "Workflow automation with n8n",
    summary:
      "Patterns for connecting services and turning repeated tasks into reliable n8n workflows.",
    status: "Planned",
  },
  {
    type: "Architecture note",
    title: "Data systems with PostgreSQL",
    summary:
      "Notes on schema design, relationships, and building dependable PostgreSQL data layers.",
    status: "Planned",
  },
  {
    type: "Technical lesson",
    title: "Self-hosted service routing",
    summary:
      "Notes on reverse proxies, TLS certificates, domains, and clean routing for self-hosted services.",
    status: "Planned",
  },
] as const;

export const learningTopics = [
  {
    title: "n8n",
    status: "Workflow automation",
    summary:
      "Designing automated workflows, connecting services, and turning repeated tasks into reliable systems.",
  },
  {
    title: "Metabase",
    status: "Analytics and dashboards",
    summary:
      "Exploring data, building dashboards, and making operational information easier to understand.",
  },
  {
    title: "PostgreSQL",
    status: "Relational database",
    summary:
      "Practicing schema design, querying, relationships, and the data layer behind useful products.",
  },
  {
    title: "Next.js",
    status: "Frontend application framework",
    summary:
      "Building modern web interfaces with routing, metadata, server rendering, and responsive layouts.",
  },
  {
    title: "Nginx Proxy Manager",
    status: "Self-hosting and routing",
    summary:
      "Understanding reverse proxies, SSL certificates, domains, and routing services cleanly on a server.",
  },
] as const;

export const archivePhases = [
  {
    phase: "Foundation",
    title: "QA automation foundations",
    description: "Web, mobile, and API quality engineering systems.",
  },
  {
    phase: "Expansion",
    title: "Backend and API systems",
    description: "Services, data models, automation, and deployment practice.",
  },
  {
    phase: "Infrastructure",
    title: "Nexus Core",
    description: "The shared API and orchestration layer for connected systems.",
  },
  {
    phase: "Active system",
    title: "Veyra",
    description: "Financial intelligence built around practical accountability.",
  },
  {
    phase: "Active system",
    title: "Aegis",
    description: "Reliability, structured errors, and operational protection.",
  },
  {
    phase: "Open direction",
    title: "Next systems",
    description:
      "New entities shaped by defined responsibilities as the initiative expands.",
  },
] as const;

export const contactMethods = [
  {
    label: "Email",
    value: "darilnofriansyah@gmail.com",
    href: "mailto:darilnofriansyah@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/darilnofriansyah",
    href: "https://github.com/darilnofriansyah",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/daril-nofriansyah",
    href: "https://www.linkedin.com/in/daril-nofriansyah",
  },
] as const;
