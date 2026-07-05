import { projects } from "@/data/profile";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ScrollReveal>
        <div className="rounded-[8px] border border-white/70 bg-white/84 px-5 py-10 shadow-[0_24px_80px_rgba(23,23,23,0.1)] ring-1 ring-white/70 backdrop-blur-xl md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase text-neutral-500">
            /Selected Work
          </p>
          <h1 className="mt-8 max-w-4xl text-4xl font-black uppercase leading-tight text-neutral-950 md:text-6xl">
            Selected work and practice projects.
          </h1>

          <ProjectGallery projects={projects} />
        </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
