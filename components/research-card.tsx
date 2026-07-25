type ResearchCardProps = {
  entry: {
    type: string;
    title: string;
    summary: string;
    status: string;
  };
};

export function ResearchCard({ entry }: ResearchCardProps) {
  return (
    <article className="border-t border-zinc-300 py-6">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-zinc-500">
        {entry.type}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
        {entry.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{entry.summary}</p>
      <p className="mt-5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-500">
        {entry.status}
      </p>
    </article>
  );
}
