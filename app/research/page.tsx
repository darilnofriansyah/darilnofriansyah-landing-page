import { ResearchCard } from "@/components/research-card";
import { SectionLabel } from "@/components/section-label";
import { learningTopics, researchEntries } from "@/lib/portfolio";

export const metadata = {
  title: "Research",
  description:
    "Architecture notes, automation patterns, experiments, and technical lessons from Daril Nofriansyah.",
};

export default function ResearchPage() {
  return (
    <div className="page-shell page-enter">
      <section>
        <SectionLabel>Research index</SectionLabel>
        <h1 className="page-title mt-6">Working notes from systems in progress.</h1>
        <p className="page-intro mt-7">
          An evolving archive of architecture notes, AI-integrated agent
          experiments, automation patterns, postmortems, design studies, and
          technical lessons.
        </p>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.38fr_1fr]">
        <div>
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Planned notes
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
            These topics are currently being developed into practical notes
            based on active projects and experiments.
          </p>
        </div>
        <div className="grid gap-x-8 md:grid-cols-3">
          {researchEntries.map((entry) => (
            <ResearchCard key={entry.title} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-zinc-300 pt-12">
        <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          Current study areas
        </h2>
        <div className="mt-8 overflow-hidden border-y border-zinc-300 bg-white/70">
          {learningTopics.map((topic) => (
            <article
              key={topic.title}
              className="grid gap-4 border-b border-zinc-200 p-6 last:border-b-0 md:grid-cols-[12rem_0.65fr_1.35fr] md:items-start sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
                {topic.status}
              </p>
              <h3 className="entity-display text-3xl font-semibold leading-none text-zinc-950">
                {topic.title}
              </h3>
              <p className="text-sm leading-7 text-zinc-600">
                {topic.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
