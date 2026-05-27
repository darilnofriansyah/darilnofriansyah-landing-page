import Link from "next/link";
import { featuredProjects } from "@/lib/portfolio";

export const metadata = {
  title: "Projects",
  description: "Selected portfolio projects by Daril Nofriansyah.",
};

export default function ProjectsPage() {
  return (
    <div className="page-enter mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 lg:px-8 lg:py-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
          Projects
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
          Two current projects, built while learning in public.
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          The focus right now is practical: automation, useful interfaces, and
          a portfolio foundation that can keep growing with the work.
        </p>
      </section>

      <section className="grid gap-6">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="grid gap-6 rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-colors hover:bg-cyan-300/[0.06] lg:grid-cols-[0.22fr_0.78fr] lg:items-start"
          >
            <div className="space-y-2 text-sm uppercase tracking-[0.28em] text-sky-200/60">
              <p>0{index + 1}</p>
              <p>{project.type}</p>
            </div>
            <div>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.summary}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-300/[0.12] px-5 text-sm font-semibold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-cyan-300/[0.18]"
                >
                  Discuss a similar build
                </Link>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/55">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    {project.impact}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/55">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#091322]/80 px-3 py-1.5 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
