import Link from "next/link";
import {
  contactLinks,
  experiences,
  profile,
  projects,
  services,
} from "@/data/profile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HeroSection() {
  // Only the public coding/profile links are shown in the hero.
  const socialLinks = contactLinks.filter((link) =>
    ["GitHub", "LinkedIn", "LeetCode"].includes(link.label),
  );

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <ScrollReveal>
          <div className="relative min-h-[720px] overflow-hidden rounded-[8px] border border-white/70 bg-white/85 px-5 py-8 shadow-[0_24px_80px_rgba(23,23,23,0.12)] backdrop-blur-xl md:min-h-[760px] md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-24 text-center text-[17vw] font-black uppercase leading-none text-neutral-950/[0.035]">
              Developer
            </div>

            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-black/10">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Full-stack portfolio
              </p>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-300 hover:text-neutral-950 hover:shadow-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid gap-8 pt-24 md:grid-cols-[1fr_0.72fr] md:items-end md:pt-32">
              <div>
                <p className="mb-5 inline-flex rounded-full border border-orange-300/70 bg-orange-100/70 px-4 py-2 text-sm font-bold uppercase text-orange-900 shadow-sm">
                  {profile.title}
                </p>
                <h1 className="max-w-5xl text-[clamp(3.2rem,12vw,10rem)] font-black uppercase leading-[0.86] text-neutral-950">
                  <span className="block text-transparent [-webkit-text-stroke:2px_#171717]">
                    Shaheer
                  </span>
                  <span className="block">Saikhani</span>
                </h1>
              </div>

              <div className="relative">
                <div className="absolute -right-2 -top-10 hidden rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow-xl md:block">
                  CS @ FAST NUCES
                </div>
                <div className="rounded-[8px] border border-neutral-900/10 bg-neutral-950 p-5 text-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-orange-400" />
                      <span className="h-3 w-3 rounded-full bg-white/40" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-xs font-semibold uppercase text-white/45">
                      profile.ts
                    </p>
                  </div>
                  <pre className="mt-5 overflow-hidden text-sm leading-7 text-white/75">
                    <code>{`const shaheer = {
  role: "Full Stack Developer",
  stack: ["React", "Node", "FastAPI"],
  focus: "AI + Web Apps",
  status: "building"
};`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
              <div>
                <p className="max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                  {profile.summary}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/projects"
                    className="rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                  >
                    Explore Projects -&gt;
                  </Link>
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-full border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold text-neutral-950 shadow-sm hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg"
                  >
                    Email Me
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-neutral-800">
                <Link
                  href="/projects#maternasafe"
                  className="rounded-full border border-white/70 bg-white/60 px-4 py-3 text-center shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:text-orange-700 hover:shadow-md"
                >
                  AI: MaternaSafe
                </Link>
                <Link
                  href="/projects#gdp-analysis-pipeline"
                  className="rounded-full border border-white/70 bg-white/60 px-4 py-3 text-center shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:text-orange-700 hover:shadow-md"
                >
                  Data Pipeline
                </Link>
                <Link
                  href="/projects#tetris-game"
                  className="rounded-full border border-white/70 bg-white/60 px-4 py-3 text-center shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:text-orange-700 hover:shadow-md"
                >
                  C++ Games
                </Link>
                <Link
                  href="/skills"
                  className="rounded-full border border-white/70 bg-white/60 px-4 py-3 text-center shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:text-orange-700 hover:shadow-md"
                >
                  Skills Overview
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <ScrollReveal>
          <div className="rounded-[8px] bg-white/86 px-5 py-10 shadow-[0_20px_60px_rgba(23,23,23,0.08)] ring-1 ring-white/70 backdrop-blur-xl md:px-10 md:py-14">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-neutral-500">
                  /Selected Work
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-neutral-950 md:text-6xl">
                  Completed projects.
                </h2>
              </div>
              <Link
                href="/projects"
                className="w-fit rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-sm hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700 hover:shadow-lg"
              >
                View all work -&gt;
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.slice(0, 3).map((project, index) => (
                <ScrollReveal
                  key={project.title}
                  delay={index === 0 ? 0 : index === 1 ? 100 : 200}
                >
                  <article className="group rounded-[8px] border border-white/70 bg-white/50 p-4 backdrop-blur hover:-translate-y-1.5 hover:bg-white hover:shadow-xl">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-[8px] bg-neutral-950 p-5 text-center">
                      <p className="text-2xl font-black uppercase text-white">
                        {project.title}
                      </p>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-neutral-500">
                          {project.type}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-neutral-950">
                          {project.title}
                        </h3>
                      </div>
                      <Link
                        href={`/projects#${project.slug}`}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white shadow-md group-hover:bg-orange-500"
                        aria-label={`Open ${project.title} project`}
                      >
                        -&gt;
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[8px] border border-white/70 bg-white/82 px-5 py-12 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:px-10 md:py-14">
            <div className="pointer-events-none absolute right-8 top-6 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="relative">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase text-neutral-500">
                    /Service
                  </p>
                  <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight text-neutral-950 md:text-6xl">
                    How I build.
                  </h2>
                </div>
                <Link
                  href="/skills"
                  className="w-fit rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-sm hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700 hover:shadow-lg"
                >
                  View skills -&gt;
                </Link>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {services.map((service, index) => (
                  <article
                    key={service.title}
                    className="group min-h-full rounded-[8px] border border-orange-200/80 bg-orange-50/80 p-6 text-neutral-950 shadow-lg backdrop-blur hover:-translate-y-1.5 hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p
                        className={
                          "text-sm font-semibold uppercase text-orange-700"
                        }
                      >
                        /{String(index + 1).padStart(2, "0")}
                      </p>
                      <span
                        className={
                          "inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white group-hover:bg-orange-500"
                        }
                      >
                        -&gt;
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-black uppercase leading-tight">
                      {service.title}
                    </h3>
                    <p
                      className="mt-5 leading-7 text-neutral-700"
                    >
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <ScrollReveal>
          <div className="rounded-[8px] border border-white/70 bg-white/84 px-5 py-12 text-neutral-950 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:px-10 md:py-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <h2 className="text-4xl font-black uppercase md:text-6xl">
                /Experience
              </h2>
              <p className="text-sm font-semibold text-neutral-500">
                Learning timeline
              </p>
            </div>
            <div className="mt-10 divide-y divide-black/10">
              {experiences.map((experience) => (
                <article
                  key={experience.organization}
                  className="grid gap-3 py-6 md:grid-cols-[1fr_1fr_0.7fr] md:items-center"
                >
                  <h3 className="text-xl font-semibold">
                    {experience.organization}
                  </h3>
                  <p className="text-neutral-600">{experience.role}</p>
                  <p className="text-neutral-500 md:text-right">
                    {experience.period}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <ScrollReveal>
          <div className="rounded-[8px] border border-white/70 bg-white/84 px-5 py-16 text-center shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:px-10 md:py-24">
            <p className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-black/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for feedback
            </p>
            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black uppercase leading-tight text-neutral-950 md:text-6xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-600">
              I am open to feedback, learning opportunities, and portfolio
              review while I continue improving the final version.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
            >
              Contact Me -&gt;
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
