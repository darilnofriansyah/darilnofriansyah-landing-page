import Link from "next/link";
import { SectionLabel } from "./section-label";

type ProjectDetailPageProps = {
  category: string;
  title: string;
  entity: "aegis" | "veyra";
  numberedFeatures?: boolean;
  summary: string;
  focus: {
    label: string;
    title: string;
    description: string;
  };
  features: readonly {
    label: string;
    description: string;
  }[];
  detail: {
    label: string;
    title: string;
    description: string;
    items: readonly string[];
  };
  stack: readonly string[];
};

export function ProjectDetailPage({
  category,
  title,
  entity,
  numberedFeatures = false,
  summary,
  focus,
  features,
  detail,
  stack,
}: ProjectDetailPageProps) {
  return (
    <div className={`entity-theme entity-${entity} page-shell page-enter`}>
      <Link href="/projects" className="text-link inline-flex text-sm font-medium">
        Back to systems
      </Link>

      <section className="entity-hero mt-10">
        <div className="entity-hero-copy">
          <SectionLabel>{category}</SectionLabel>
          <h1 className="entity-display entity-title mt-6">{title}</h1>
          <p className="page-intro mt-7">{summary}</p>
        </div>
        <aside className="entity-focus">
          <SectionLabel>{focus.label}</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-zinc-950">
            {focus.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-600">
            {focus.description}
          </p>
        </aside>
      </section>

      <section
        aria-label={`${title} capabilities`}
        className="entity-dossier mt-16"
      >
        {features.map((feature, index) => (
          <article key={feature.label} className="entity-dossier-row">
            <p className="metadata-label">
              {numberedFeatures
                ? `Step ${String(index + 1).padStart(2, "0")}`
                : "Capability"}
            </p>
            <h2 className="entity-display text-3xl font-semibold leading-none text-zinc-950">
              {feature.label}
            </h2>
            <p className="text-sm leading-7 text-zinc-600">
              {feature.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-20 grid gap-10 border-t border-zinc-300 pt-12 lg:grid-cols-[0.48fr_1fr]">
        <div>
          <SectionLabel>{detail.label}</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-zinc-950">
            {detail.title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600">
            {detail.description}
          </p>
        </div>
        <ul className="divide-y divide-zinc-200 border-y border-zinc-300">
          {detail.items.map((item) => (
            <li key={item} className="py-5 text-sm text-zinc-800">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="entity-stack surface mt-16 flex flex-col gap-7 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <SectionLabel>Verified stack</SectionLabel>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
        <Link href="/contact" className="button button-dark h-11 px-5">
          Discuss a related system
        </Link>
      </section>
    </div>
  );
}
