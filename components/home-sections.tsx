import Link from "next/link";
import { archivePhases, responsibilityAreas } from "@/lib/portfolio";
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
          Building systems
          <br />
          that augment
          <br />
          human capability.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          I design and build practical AI-integrated products, automation platforms,
          backend services, and quality engineering systems from idea to
          production.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/#systems" className="button button-dark h-12 px-6">
            Explore Systems
          </Link>
          <a
            href="https://github.com/darilnofriansyah"
            className="button h-12 border border-zinc-300 bg-white px-6 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100"
          >
            View GitHub
          </a>
        </div>
        <dl className="mt-12 grid max-w-2xl gap-5 border-t border-zinc-300 pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="metadata-label">Base</dt>
            <dd className="mt-1.5 text-zinc-800">Indonesia</dd>
          </div>
          <div>
            <dt className="metadata-label">Building since</dt>
            <dd className="mt-1.5 text-zinc-800">2024</dd>
          </div>
          <div>
            <dt className="metadata-label">Current focus</dt>
            <dd className="mt-1.5 text-zinc-800">Nexus</dd>
          </div>
        </dl>
      </div>
      <InitiativePanel />
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="archive-section section-space border-t border-zinc-300">
      <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
        <SectionLabel>Working philosophy</SectionLabel>
        <div>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl">
            Systems should take responsibility,
            <br />
            not attention.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600">
            Technology should quietly handle repetitive, fragmented, and
            error-prone responsibilities so people can focus on judgment,
            creativity, and meaningful decisions.
          </p>
          <ol className="mt-12 grid border-t border-zinc-300 sm:grid-cols-2">
            {responsibilityAreas.map((area, index) => (
              <li
                key={area}
                className="flex gap-5 border-b border-zinc-200 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <span className="font-mono text-[0.68rem] text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-zinc-900">{area}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ArchiveTimeline() {
  return (
    <section id="archive" className="archive-section section-space scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <SectionLabel>System archive</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-zinc-950">
            A record of systems taking shape.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
            Relative phases describe the progression without inventing dates or
            milestones that are not yet documented.
          </p>
        </div>
        <ol className="border-t border-zinc-300">
          {archivePhases.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 border-b border-zinc-200 py-6 sm:grid-cols-[3rem_9rem_1fr] sm:gap-5"
            >
              <span className="font-mono text-[0.68rem] text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-500">
                {item.phase}
              </span>
              <div>
                <h3 className="text-base font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
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
