export const site = {
  name: "Daril Nofriansyah",
  role: "Builder and systems learner",
  summary:
    "I build practical digital systems while learning the infrastructure, data, and automation tools that make them useful.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/learning", label: "Learning" },
  { href: "/contact", label: "Contact" },
] as const;

export const capabilities = [
  "Brand-forward landing pages",
  "Responsive UI systems",
  "Product storytelling",
  "Motion-aware interfaces",
  "Front-end implementation",
] as const;

export const featuredProjects = [
  {
    title: "Veyra",
    type: "Automation product",
    summary:
      "A Telegram financial assistant coach powered by an n8n workflow system, designed to help users reflect on spending and build better money habits.",
    impact:
      "Explores conversational guidance, workflow automation, and practical personal finance support inside a familiar chat interface.",
    stack: ["Telegram", "n8n", "Workflow Automation"],
  },
  {
    title: "Daril Nofriansyah Portfolio",
    type: "Landing page",
    summary:
      "This portfolio landing page, built as a clean public home for projects, learning notes, and contact details.",
    impact:
      "Creates a lightweight base that can grow into case studies, documentation, and project updates over time.",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
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
      "Learning how to explore data, build dashboards, and make operational metrics easier to understand.",
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
      "Building modern web interfaces with routing, metadata, server rendering, and polished responsive layouts.",
  },
  {
    title: "Nginx Proxy Manager",
    status: "Self-hosting and routing",
    summary:
      "Understanding reverse proxies, SSL certificates, domains, and routing services cleanly on a server.",
  },
] as const;

export const contactMethods = [
  {
    label: "Email",
    value: "hello@darilnofriansyah.dev",
    href: "mailto:hello@darilnofriansyah.dev",
  },
  {
    label: "GitHub",
    value: "github.com/darilnofriansyah",
    href: "https://github.com/darilnofriansyah",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/darilnofriansyah",
    href: "https://www.linkedin.com/in/darilnofriansyah",
  },
] as const;
