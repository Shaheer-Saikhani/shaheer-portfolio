"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/profile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ProjectGalleryProps = {
  projects: Project[];
};

const filters = ["All", "AI", "Data", "DSA", "Game"] as const;

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(
    "All",
  );

  // The filter state only changes what is displayed; project data still stays in data/profile.ts.
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow-lg"
                  : "rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-600 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-300 hover:text-neutral-950 hover:shadow-md"
              }
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="text-sm font-semibold text-neutral-500">
          {filteredProjects.length} project
          {filteredProjects.length === 1 ? "" : "s"} shown
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ScrollReveal
            key={project.slug}
            delay={index === 0 ? 0 : index === 1 ? 100 : 200}
          >
            <article
              id={project.slug}
              className="group relative overflow-hidden rounded-[8px] border border-white/70 bg-white/72 p-5 shadow-[0_18px_48px_rgba(23,23,23,0.08)] backdrop-blur-xl hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_28px_70px_rgba(23,23,23,0.14)]"
            >
              <div className="absolute right-5 top-5 z-10 rounded-full border border-orange-300/60 bg-orange-100/80 px-3 py-1 text-xs font-bold uppercase text-orange-900">
                {project.category}
              </div>

              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[8px] bg-neutral-950 p-5 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(251,146,60,0.32),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
                <div className="relative w-full rounded-[8px] border border-white/10 bg-white/5 p-4 text-left shadow-2xl">
                  <div className="mb-4 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-orange-200/80">
                    {project.type}
                  </p>
                  <p className="mt-3 text-2xl font-black uppercase leading-tight md:text-3xl">
                    {project.title}
                  </p>
                  <div className="mt-5 space-y-2">
                    <span className="block h-2 w-10/12 rounded-full bg-white/18" />
                    <span className="block h-2 w-8/12 rounded-full bg-white/12" />
                    <span className="block h-2 w-6/12 rounded-full bg-orange-300/35" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase text-neutral-500">
                    {project.type}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-neutral-950">
                    {project.title}
                  </h2>
                </div>
                <a
                  href={project.actionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-lg font-semibold text-white shadow-md hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-xl"
                  aria-label={`${project.actionLabel} for ${project.title}`}
                >
                  -&gt;
                </a>
              </div>

              <p className="mt-4 leading-7 text-neutral-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-black/10 group-hover:ring-orange-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.actionHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-bold uppercase text-neutral-950 hover:text-orange-600"
              >
                {project.actionLabel} -&gt;
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
