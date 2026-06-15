import Link from "next/link";
import { featuredProjects } from "@/lib/portfolio";

const aegis = featuredProjects.find((project) => project.title === "Aegis");

const workflowSteps = [
  {
    label: "Detect",
    description:
      "n8n catches a workflow failure and passes the error context into the alert flow.",
  },
  {
    label: "Summarize",
    description:
      "Aegis formats the workflow name, failing step, timestamp, and useful error detail for quick scanning.",
  },
  {
    label: "Notify",
    description:
      "The Telegram bot sends the alert to the right chat so the issue is visible without opening n8n first.",
  },
] as const;

const alertDetails = [
  "Workflow name and execution status",
  "Failed node or step context",
  "Error message preview",
  "Timestamp for incident tracking",
  "Direct handoff for follow-up action",
] as const;

export const metadata = {
  title: "Aegis",
  description:
    "Aegis is a Telegram bot for system monitoring, starting with n8n workflow error notifications.",
};

export default function AegisPage() {
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
            Monitoring bot
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
            Aegis
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            {aegis?.summary}
          </p>
        </div>

        <div className="rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/60">
            First use case
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            n8n workflow error notification
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The current version focuses on making failed automations hard to
            miss: when an n8n workflow errors, Aegis can turn that failure into
            a readable Telegram alert for faster triage.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {workflowSteps.map((step, index) => (
          <article
            key={step.label}
            className="rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/60">
              0{index + 1}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              {step.label}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {step.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Alert payload
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Built for quick incident awareness.
          </h2>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            The goal is not a full monitoring suite yet. It is a practical
            notification layer that makes automation failures visible where
            day-to-day coordination already happens.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {alertDetails.map((item) => (
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
              {aegis?.stack.map((item) => (
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
