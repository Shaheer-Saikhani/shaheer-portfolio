import { services, skillGroups } from "@/data/profile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function SkillsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ScrollReveal>
        <p className="text-sm font-semibold uppercase text-neutral-500">
          /Skills
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-black uppercase leading-tight text-neutral-950 md:text-5xl">
          Tools and technologies I am practicing.
        </h1>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              delay={index % 3 === 0 ? 0 : index % 3 === 1 ? 100 : 200}
            >
              <article className="group flex min-h-full flex-col rounded-[8px] border border-white/70 bg-white/76 p-5 shadow-[0_18px_46px_rgba(23,23,23,0.07)] backdrop-blur-xl hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_26px_70px_rgba(23,23,23,0.12)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase text-orange-700">
                      /{String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-black uppercase text-neutral-950">
                      {group.title}
                    </h2>
                  </div>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white group-hover:bg-orange-500">
                    -&gt;
                  </span>
                </div>
                <p className="mt-4 leading-7 text-neutral-600">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-black/10 group-hover:ring-orange-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
        <div className="mt-14 rounded-[8px] bg-white/84 p-5 shadow-[0_20px_60px_rgba(23,23,23,0.08)] ring-1 ring-white/70 backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold uppercase text-neutral-500">
            /Services
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[8px] border border-white/70 bg-white/55 p-5 shadow-sm backdrop-blur hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <h2 className="text-xl font-black uppercase text-neutral-950">
                  {service.title}
                </h2>
                <p className="mt-4 leading-7 text-neutral-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
