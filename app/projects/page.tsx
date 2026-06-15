import { featuredProjects } from "@/lib/portfolio";
import { ProjectIdCard } from "./project-id-card";

export const metadata = {
  title: "Projects",
  description: "Selected portfolio projects by Daril Nofriansyah.",
};

export default function ProjectsPage() {
  return (
    <div className="page-enter mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 lg:px-8 lg:py-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
          Projects
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
          Three current projects, built while learning in public.
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          The focus right now is practical: automation, useful interfaces, and
          a portfolio foundation that can keep growing with the work.
        </p>
      </section>

      <section className="grid gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectIdCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </div>
  );
}
