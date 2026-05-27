import Link from "next/link";
import { capabilities, featuredProjects, site } from "@/lib/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page-enter mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-10 lg:px-8 lg:py-16">
      <section className="relative flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-x-0 top-16 mx-auto h-72 max-w-3xl bg-cyan-300/10 blur-3xl" />
        <div className="relative flex max-w-4xl flex-col items-center">
          <div
            aria-hidden="true"
            className="mb-8 grid h-16 w-16 place-items-center rounded-[1.35rem] text-3xl font-semibold text-cyan-100"
          >
            <Image
              src="/logo.svg"
              alt="Daril Logo"
              width={64}
              height={64}
            />
          </div>

          <p className="text-sm uppercase tracking-[0.35em] text-sky-200/70">
            {site.role}
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Daril Nofriansyah
          </h1>
          <h2 className="mt-5 text-2xl font-medium leading-tight text-cyan-100 sm:text-3xl">
            Building &amp; Learning
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Building practical tools, learning the stack behind them, and
            documenting the path from automation to deployment.
          </p>

          <div className="mt-9 flex flex-row flex-wrap justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-12 min-w-36 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(103,232,249,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
              <span className="text-base leading-none">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 min-w-36 items-center justify-center rounded-full bg-white/[0.08] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-cyan-300/[0.12]"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold text-white">
            A sharper frame for the work.
          </h2>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            The page should feel like a guided workspace: readable, fast to
            scan, and flexible enough to show different kinds of projects.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item} className="flex gap-3 text-sm text-slate-200">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.6)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Current project
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                {featuredProjects[0].title}
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white/[0.08] px-5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-cyan-300/[0.12]"
            >
              More work
              <span className="text-base leading-none">→</span>
            </Link>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
            {featuredProjects[0].summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {featuredProjects[0].stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#091322]/80 px-3 py-1.5 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <div className="grid gap-4">
          {featuredProjects.slice(1).map((project) => (
            <article
              key={project.title}
              className="rounded-lg bg-white/[0.045] p-5 transition-transform hover:-translate-y-0.5 hover:bg-cyan-300/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/65">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="text-cyan-200">↗</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {project.summary}
              </p>
              <p className="mt-4 text-sm leading-7 text-cyan-100">
                {project.impact}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
