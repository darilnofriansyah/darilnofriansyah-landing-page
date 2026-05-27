import Link from "next/link";
import { contactMethods } from "@/lib/portfolio";

export const metadata = {
  title: "Contact",
  description: "Contact Daril Nofriansyah for portfolio and frontend work.",
};

export default function ContactPage() {
  return (
    <div className="page-enter mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 lg:px-8 lg:py-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
          Contact
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
          Let&apos;s build something sharp and memorable.
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          Reach out for portfolio redesigns, landing pages, or product sites
          that need a more confident visual identity.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
            Contact details
          </p>
          <div className="mt-5 space-y-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center justify-between rounded-lg bg-white/[0.045] px-4 py-4 transition-colors hover:bg-cyan-300/[0.08]"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-200/55">
                    {method.label}
                  </p>
                  <p className="mt-2 text-sm text-white">{method.value}</p>
                </div>
                <span className="text-cyan-200">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
            Quick note
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              I like projects with a clear audience, a focused message, and a
              visual direction that feels intentional from the first screen.
            </p>
            <p>
              If you already have a brief, send it over. If not, a short
              description of the goal is enough to start.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@darilnofriansyah.dev"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(103,232,249,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Email Daril
            </a>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/[0.08] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-cyan-300/[0.12]"
            >
              Review projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
