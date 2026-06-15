import Link from "next/link";
import { featuredProjects } from "@/lib/portfolio";

const veyra = featuredProjects.find((project) => project.title === "Veyra");

const currentFeatures = [
  {
    label: "Finance record",
    description:
      "Records spending and income through manual chat input, with email automation available for captured transaction details.",
  },
  {
    label: "Budget tracking",
    description:
      "Supports custom budgets and threshold tracking so users can see when spending is getting close to a limit.",
  },
  {
    label: "Daily and weekly analytics",
    description:
      "Summarizes recent financial activity into daily and weekly views that are easy to review from Telegram.",
  },
  {
    label: "Free text analytics",
    description:
      "Lets users ask questions in natural language and receive analytics from their recorded finance data.",
  },
] as const;

const roadmapItems = [
  "Subscription tracking",
  "User personalized dashboard",
] as const;

export const metadata = {
  title: "Veyra",
  description:
    "Veyra is a Telegram financial assistant for finance records, budget tracking, analytics, and free text finance chat.",
};

export default function VeyraPage() {
  return (
    <div className="page-enter mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 lg:px-8 lg:py-16">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div className="max-w-3xl space-y-5">
          <Link
            href="/projects"
            className="inline-flex text-sm font-medium text-cyan-100 transition-colors hover:text-white"
          >
            Back to projects
          </Link>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Automation product
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
            Veyra
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            {veyra?.summary}
          </p>
        </div>

        <div className="rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/60">
            Current focus
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Personal finance inside Telegram
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Veyra is built around the habits users already have: record money
            activity in chat, automate what can be captured from email, and ask
            follow-up questions without opening a separate dashboard.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {currentFeatures.map((feature, index) => (
          <article
            key={feature.label}
            className="rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/60">
              0{index + 1}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              {feature.label}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {feature.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Future
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Growing from assistant to finance workspace.
          </h2>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            The next direction is to make recurring costs easier to understand
            and give each user a more personalized view of their financial
            patterns.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {roadmapItems.map((item) => (
            <div key={item} className="flex gap-3 text-sm text-slate-200">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.6)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-200/60">
              Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {veyra?.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#091322]/80 px-3 py-1.5 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-300/[0.12] px-5 text-sm font-semibold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-cyan-300/[0.18]"
          >
            Discuss a similar build
          </Link>
        </div>
      </section>
    </div>
  );
}
