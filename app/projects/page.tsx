import { SectionLabel } from "@/components/section-label";
import { SystemCard } from "@/components/system-card";
import { systems } from "@/lib/portfolio";

export const metadata = {
  title: "Systems",
  description: "Active systems designed and built by Daril Nofriansyah.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell page-enter">
      <section>
        <SectionLabel>System index</SectionLabel>
        <h1 className="page-title mt-6">Active systems and working infrastructure.</h1>
        <p className="page-intro mt-7">
          Practical products, backend infrastructure, automation, and quality
          engineering—each organized around a responsibility it is intended to
          carry.
        </p>
      </section>

      <section aria-labelledby="systems-heading" className="mt-16">
        <h2 id="systems-heading" className="sr-only">
          Systems
        </h2>
        <div className="grid items-start gap-5 md:grid-cols-2">
          {systems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </div>
      </section>
    </div>
  );
}
