import Image from "next/image";
import Link from "next/link";

const entities = [
  {
    name: "Nexus Core",
    responsibility: "Shared Infrastructure",
    href: "/projects",
    action: "Open system index",
    accent: "nexus",
    image: "/nexus/nexus-core.png",
  },
  {
    name: "Aegis",
    responsibility: "Reliability and Protection",
    href: "/projects/aegis",
    action: "Open record",
    accent: "aegis",
    image: "/nexus/aegis.png",
  },
  {
    name: "Veyra",
    responsibility: "Financial Intelligence",
    href: "/projects/veyra",
    action: "Open record",
    accent: "veyra",
    image: "/nexus/veyra.png",
  },
] as const;

export const metadata = {
  title: "Nexus Initiative",
  description:
    "A connected ecosystem of AI-integrated systems, each designed around a specific human responsibility.",
};

export default function NexusPage() {
  return (
    <div className="min-h-[calc(100svh-4rem)] bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="border-l-2 border-indigo-500 pl-5">
          <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-indigo-300">
            Nexus Initiative
          </p>
          <h1 className="entity-display mt-7 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.78] tracking-[-0.035em]">
            Systems with
            <br />
            responsibility.
          </h1>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          A connected ecosystem of AI-integrated systems, each designed around a
          specific human responsibility.
        </p>

        <section aria-labelledby="entities-heading" className="mt-16">
          <h2
            id="entities-heading"
            className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400"
          >
            Entity index
          </h2>
          <div className="mt-6 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 md:grid-cols-3">
            {entities.map((entity) => (
              <Link
                key={entity.name}
                href={entity.href}
                className={`nexus-entity-card entity-${entity.accent}`}
              >
                <div className="nexus-entity-art" aria-hidden="true">
                  <Image
                    src={entity.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 20vw, 60vw"
                  />
                </div>
                <div className="nexus-entity-copy">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-400">
                    {entity.responsibility}
                  </p>
                  <h3 className="entity-display mt-4 text-4xl font-semibold leading-none text-white">
                    {entity.name}
                  </h3>
                  <p className="mt-auto pt-8 text-sm text-zinc-400">
                    {entity.action}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-6 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-zinc-400">
            The Nexus archive expands as each system develops.
          </p>
          <Link
            href="/"
            className="button h-11 w-fit border border-zinc-700 bg-zinc-900 px-5 text-zinc-100 hover:border-indigo-500 hover:bg-zinc-800"
          >
            Return to Daril&apos;s archive
          </Link>
        </div>
      </div>
    </div>
  );
}
