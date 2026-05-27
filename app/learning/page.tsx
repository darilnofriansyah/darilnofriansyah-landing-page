import { learningTopics } from "@/lib/portfolio";

export const metadata = {
  title: "Learning",
  description:
    "Current learning notes for n8n, Metabase, PostgreSQL, Next.js, and Nginx Proxy Manager.",
};

export default function LearningPage() {
  return (
    <div className="page-enter mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 lg:px-8 lg:py-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
          Documentation
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
          What I am learning right now.
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          A small living map of the tools I am studying while building Veyra,
          this portfolio, and the surrounding self-hosted stack.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <aside className="rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
            Current stack
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {learningTopics.map((topic) => (
              <span
                key={topic.title}
                className="rounded-full bg-[#091322]/80 px-3 py-1.5 text-xs text-slate-200"
              >
                {topic.title}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            The goal is not just to collect tools. It is to understand how
            automation, data, frontend, and deployment fit into one working
            system.
          </p>
        </aside>

        <div className="grid gap-4">
          {learningTopics.map((topic, index) => (
            <article
              key={topic.title}
              className="rounded-lg bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:bg-cyan-300/[0.06]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/60">
                    0{index + 1} / {topic.status}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {topic.title}
                  </h2>
                </div>
                <span className="text-sm text-cyan-100">Learning now</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {topic.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
