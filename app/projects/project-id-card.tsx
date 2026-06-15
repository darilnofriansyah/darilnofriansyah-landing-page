import Link from "next/link";
import Image from "next/image";

type ProjectCard = {
  title: string;
  type: string;
  summary: string;
  impact: string;
  stack: readonly string[];
  href?: string;
  image?: string;
};

type ProjectIdCardProps = {
  project: ProjectCard;
  index: number;
};

const cardAccents = [
  {
    band: "from-cyan-300 via-sky-300 to-teal-200",
    portrait: "bg-cyan-300/14 text-cyan-100",
  },
  {
    band: "from-fuchsia-300 via-cyan-300 to-sky-200",
    portrait: "bg-fuchsia-300/12 text-fuchsia-100",
  },
  {
    band: "from-emerald-300 via-cyan-300 to-blue-200",
    portrait: "bg-emerald-300/12 text-emerald-100",
  },
] as const;

export function ProjectIdCard({ project, index }: ProjectIdCardProps) {
  const accent = cardAccents[index % cardAccents.length];
  const projectId = `PRJ-${String(index + 1).padStart(3, "0")}`;

  return (
    <article className="relative overflow-hidden rounded-lg bg-white/[0.045] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_24px_60px_rgba(0,0,0,0.18)] transition-colors hover:bg-cyan-300/[0.06]">
      <div className={`h-2 rounded-t-md bg-gradient-to-r ${accent.band}`} />

      <div className="relative grid gap-6 p-5 lg:grid-cols-[13rem_1fr] lg:p-6">
        <aside className="grid gap-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-sky-200/60">
            <span>{projectId}</span>
            <span>Active</span>
          </div>

          <div
            className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-md border border-white/10 ${accent.portrait}`}
          >
            <div className="absolute inset-x-4 top-4 h-px bg-white/20" />
            <div className="absolute inset-x-4 bottom-4 h-px bg-white/20" />

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-[#050816]/56 text-5xl font-semibold">
                {project.title.charAt(0)}
              </div>
            )}
          </div>

          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 15 }).map((_, lineIndex) => (
              <span
                key={lineIndex}
                className="h-1 rounded-full bg-cyan-100/20"
                style={{ opacity: 0.25 + (lineIndex % 5) * 0.12 }}
              />
            ))}
          </div>
        </aside>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-200/65">
                  {project.type}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  {project.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.href ? (
                  <Link
                    href={project.href}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.18)] transition-colors hover:bg-cyan-200"
                  >
                    View project
                  </Link>
                ) : null}
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-300/[0.12] px-5 text-sm font-semibold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-cyan-300/[0.18]"
                >
                  Discuss a similar build
                </Link>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              {project.summary}
            </p>

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

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.24em] text-sky-100/50">
            <span>Daril systems</span>
            <span>ID card template</span>
          </div>
        </div>
      </div>
    </article>
  );
}
