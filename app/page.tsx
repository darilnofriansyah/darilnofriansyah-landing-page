import Link from "next/link";
import {
  AboutSection,
  ContactCtaSection,
  FeaturedWorkSection,
  HeroSection,
} from "@/components/home-sections";
import { NexusRelationshipDiagram } from "@/components/nexus-relationship-diagram";
import { SectionLabel } from "@/components/section-label";

export default function Home() {
  return (
    <div className="page-enter">
      <HeroSection />
      <FeaturedWorkSection />

      <section
        id="nexus"
        className="border-y border-zinc-800 bg-zinc-950 text-zinc-50"
      >
        <div className="archive-section section-space">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <SectionLabel className="text-zinc-400">
                The Nexus Initiative
              </SectionLabel>
              <h2 className="entity-display mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                Every system begins
                <br />
                with a responsibility.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
                Nexus is a growing family of AI-integrated systems. Each entity
                is designed around a specific responsibility, while Nexus Core
                provides the shared infrastructure beneath them.
              </p>
              <Link
                href="/nexus"
                className="button mt-9 h-12 border border-zinc-700 bg-zinc-900 px-6 text-zinc-50 hover:border-indigo-500 hover:bg-zinc-800"
              >
                Enter Nexus Archive
              </Link>
            </div>
            <NexusRelationshipDiagram />
          </div>
        </div>
      </section>

      <AboutSection />
      <ContactCtaSection />
    </div>
  );
}
