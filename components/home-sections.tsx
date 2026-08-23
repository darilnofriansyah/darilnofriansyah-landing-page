import Link from "next/link";
import { featuredProjects } from "@/lib/portfolio";
import { SectionLabel } from "./section-label";

export function InitiativePanel() {
  return (
    <aside className="initiative-panel" aria-labelledby="initiative-title">
      <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-4">
        <SectionLabel>Current initiative</SectionLabel>
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.15em] text-indigo-600">
          Active
        </span>
      </div>
      <h2
        id="initiative-title"
        className="entity-display mt-7 text-5xl font-semibold leading-none text-zinc-950"
      >
        Nexus
      </h2>
      <p className="mt-4 text-sm leading-7 text-zinc-600">
        A connected ecosystem of AI-integrated systems designed around specific
        human responsibilities.
      </p>
      <dl className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200 text-sm">
        <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
          <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-500">
            Status
          </dt>
          <dd className="text-zinc-900">Active</dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
          <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-500">
            Entities
          </dt>
          <dd className="text-zinc-900">Veyra, Aegis</dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
          <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-500">
            Infrastructure
          </dt>
          <dd className="text-zinc-900">Nexus Core</dd>
        </div>
      </dl>
      <Link href="/nexus" className="text-link mt-7 inline-flex text-sm font-medium">
        Open initiative record
      </Link>
    </aside>
  );
}

export function HeroSection() {
  return (
    <section className="archive-section grid min-h-[calc(100svh-4rem)] items-center gap-14 py-16 lg:grid-cols-[minmax(0,1.28fr)_minmax(19rem,0.72fr)] lg:py-24">
      <div className="max-w-4xl">
        <SectionLabel>Engineer · Builder · Automator</SectionLabel>
        <h1 className="mt-7 text-[clamp(2.85rem,6.4vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-zinc-950">
          Systems engineering for work that needs to hold up.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          I design and build automation, backend services, AI-integrated products,
          and quality engineering systems from idea to deployment.
        </p>
        <div className="hero-actions mt-9 flex flex-wrap gap-3">
          <Link className="button" href="#featured-work">View Featured Work</Link>
          <Link className="button button-secondary" href="/contact">Contact</Link>
        </div>
        <dl className="mt-12 grid max-w-2xl gap-5 border-t border-zinc-300 pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="metadata-label">Based in</dt>
            <dd className="mt-1.5 text-zinc-800">Indonesia</dd>
          </div>
          <div>
            <dt className="metadata-label">Current focus</dt>
            <dd className="mt-1.5 text-zinc-800">Nexus</dd>
          </div>
          <div>
            <dt className="metadata-label">Availability</dt>
            <dd className="mt-1.5 text-zinc-800">Available for collaboration</dd>
          </div>
        </dl>
      </div>
      <InitiativePanel />
    </section>
  );
}

export function FeaturedWorkSection() {
  return (
    <section
      id="featured-work"
      className="archive-section featured-work section-space scroll-mt-24"
    >
      <header className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Systems built around responsibility, not decoration.</h2>
      </header>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article className="featured-project" key={project.title}>
            <div className="featured-project-identity">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <ul aria-label={`${project.title} technology`}>
                {project.stack.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="featured-project-summary">
              <p>{project.summary}</p>
              <p>{project.impact}</p>
              {"href" in project ? (
                <Link className="text-link" href={project.href}>
                  Read case study
                </Link>
              ) : (
                <span>Current site</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactCtaSection() {
  return (
    <section
      className="archive-section contact-cta section-space"
      aria-labelledby="contact-cta-title"
    >
      <p className="eyebrow">Start a conversation</p>
      <h2 id="contact-cta-title">
        Have a system that needs a clearer technical foundation?
      </h2>
      <p>Share the responsibility, constraints, and what needs to work.</p>
      <Link className="button" href="/contact">
        Contact
      </Link>
    </section>
  );
}

export function AboutSection() {
  const disciplines = [
    "Systems engineering",
    "Automation building",
    "Backend development",
    "AI-integrated product building",
  ] as const;

  return (
    <section
      id="about"
      className="archive-section section-space scroll-mt-24 border-t border-zinc-300"
    >
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <SectionLabel>About Daril</SectionLabel>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl">
            I build end-to-end systems,
            <br />
            not isolated demos.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600">
            My work connects product thinking, backend services, automation,
            quality engineering, and deployment into systems that can carry a
            real responsibility.
          </p>
        </div>
        <ul className="divide-y divide-zinc-200 border-y border-zinc-300">
          {disciplines.map((discipline) => (
            <li key={discipline} className="py-4 text-sm text-zinc-800">
              {discipline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
