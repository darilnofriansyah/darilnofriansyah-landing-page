type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 ${className}`}
    >
      {children}
    </p>
  );
}
