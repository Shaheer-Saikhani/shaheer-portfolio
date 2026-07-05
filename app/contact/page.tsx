import { contactLinks, profile } from "@/data/profile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const primaryLinks = contactLinks.filter((link) =>
    ["Email", "GitHub", "LinkedIn", "LeetCode"].includes(link.label),
  );
  const secondaryLinks = contactLinks.filter((link) =>
    ["Phone", "Location"].includes(link.label),
  );

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[8px] border border-white/70 bg-white/84 px-5 py-12 shadow-[0_24px_80px_rgba(23,23,23,0.1)] backdrop-blur-xl md:px-10 md:py-16">
            <div className="pointer-events-none absolute -right-20 top-8 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-black/10">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Available for feedback
                </p>
                <h1 className="mt-8 max-w-4xl text-4xl font-black uppercase leading-tight text-neutral-950 md:text-6xl">
                  Have a project or review in mind?
                </h1>
                <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
                  I am open to feedback, learning opportunities, portfolio
                  review, and full-stack development practice work.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-full bg-neutral-950 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-lg"
                  >
                    Email Me -&gt;
                  </a>
                  <a
                    href={profile.resumeHref}
                    download
                    className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-950 shadow-sm hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700 hover:shadow-lg"
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="rounded-[8px] bg-neutral-950 p-5 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-orange-400" />
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-white/45">
                    contact.json
                  </p>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  {primaryLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="group flex items-center justify-between gap-4 rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-white/75 hover:border-orange-300/40 hover:bg-white/10 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <span className="text-right text-white/45 group-hover:text-orange-200">
                        {link.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-8 grid gap-3 md:grid-cols-2">
              {secondaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-[8px] border border-white/70 bg-white/58 p-5 shadow-sm backdrop-blur hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase text-orange-700">
                    {link.label}
                  </p>
                  <p className="mt-2 font-semibold text-neutral-950">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
