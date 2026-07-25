import Link from "next/link";
import {
  AboutSection,
  ArchiveTimeline,
  HeroSection,
  PhilosophySection,
} from "@/components/home-sections";
import { NexusRelationshipDiagram } from "@/components/nexus-relationship-diagram";
import { ResearchCard } from "@/components/research-card";
import { SectionLabel } from "@/components/section-label";
import { SystemCard } from "@/components/system-card";
import { researchEntries, systems } from "@/lib/portfolio";

export default function Home() {
  return (
    <div className="page-enter">
      <HeroSection />
      <PhilosophySection />

      <section
        id="systems"
        className="archive-section section-space scroll-mt-24 border-t border-zinc-300"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Active systems</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
              Systems built around clear responsibilities.
            </h2>
          </div>
          <Link href="/projects" className="text-link w-fit text-sm font-medium">
            View system index
          </Link>
        </div>
        <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
          {systems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950 text-zinc-50">
        <div className="archive-section section-space">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <SectionLabel className="text-zinc-400">
                The Nexus Initiative
              </SectionLabel>
              <h2 className="entity-display mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                Every system begins
                <br />
                with a responsibility.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
                Nexus is a growing family of AI-integrated systems. Each entity
                is designed around a specific responsibility, while Nexus Core
                provides the shared infrastructure beneath them.
              </p>
              <Link
                href="/nexus"
                className="button mt-9 h-12 border border-zinc-700 bg-zinc-900 px-6 text-zinc-50 hover:border-indigo-500 hover:bg-zinc-800"
              >
                Enter Nexus Archive
              </Link>
            </div>
            <NexusRelationshipDiagram />
          </div>
        </div>
      </section>

      <section className="archive-section section-space">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <SectionLabel>Research</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-zinc-950">
              Notes from systems in progress.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
              Architecture notes, AI-integrated agent experiments, automation patterns,
              postmortems, design studies, and technical lessons will live
              here as they are documented.
            </p>
            <Link
              href="/research"
              className="text-link mt-7 inline-flex text-sm font-medium"
            >
              Open research index
            </Link>
          </div>
          <div className="grid gap-x-8 md:grid-cols-3">
            {researchEntries.map((entry) => (
              <ResearchCard key={entry.title} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <ArchiveTimeline />
      <AboutSection />
    </div>
  );
}
