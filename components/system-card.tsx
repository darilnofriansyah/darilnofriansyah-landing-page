import Link from "next/link";

type SystemCardProps = {
  system: {
    title: string;
    category: string;
    description: string;
    status: string;
    stack: readonly string[];
    infrastructure?: string;
    entities?: readonly {
      title: string;
      category: string;
      description: string;
      href: string;
      accent: "aegis" | "veyra";
    }[];
    href: string;
    linkLabel?: string;
    accent: "violet" | "graphite" | "steel" | "sage";
  };
};

export function SystemCard({ system }: SystemCardProps) {
  return (
    <article className={`system-card accent-${system.accent}`}>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-zinc-500">
            {system.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
            {system.title}
          </h3>
        </div>
        <span className="status-dot" aria-hidden="true" />
      </div>
      <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600">
        {system.description}
      </p>
      {system.infrastructure ? (
        <div className="mt-7 border-y border-zinc-200 py-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-400">
            Infrastructure
          </p>
          <p className="mt-1.5 text-sm font-medium text-zinc-900">
            {system.infrastructure}
          </p>
        </div>
      ) : null}
      {system.entities ? (
        <div className="mt-5 grid gap-3 lg:grid-cols-2">
          {system.entities.map((entity) => (
            <Link
              key={entity.title}
              href={entity.href}
              className={`entity-record entity-${entity.accent}`}
              aria-label={`View system: ${entity.title}`}
            >
              <div className="entity-record-copy">
                <p className="truncate font-mono text-[0.6rem] uppercase tracking-[0.14em] text-zinc-500">
                  {entity.category}
                </p>
                <h4 className="entity-display mt-2 text-2xl font-semibold leading-none text-zinc-950">
                  {entity.title}
                </h4>
                <p className="mt-2 line-clamp-3 text-xs leading-5 text-zinc-600">
                  {entity.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
      {system.stack.length ? (
        <div className="mt-7 flex flex-wrap gap-2">
          {system.stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-8 flex items-end justify-between gap-4 border-t border-zinc-200 pt-5">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-zinc-400">
            Status
          </p>
          <p className="mt-1 text-sm font-medium text-zinc-800">
            {system.status}
          </p>
        </div>
        <Link
          href={system.href}
          className="text-link text-sm font-medium text-zinc-950"
          aria-label={`${system.linkLabel ?? "View system"}: ${system.title}`}
        >
          {system.linkLabel ?? "View system"}
        </Link>
      </div>
    </article>
  );
}
