import {
  achievements,
  blogs,
  certifications,
  education,
  experiences,
  profile,
  testimonials,
} from "@/data/profile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ScrollReveal>
        <p className="text-sm font-semibold uppercase text-neutral-500">
          /About Me
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <h1 className="text-4xl font-black uppercase leading-tight text-neutral-950 md:text-6xl">
            Building full stack foundations with clean frontend execution.
          </h1>
          <div className="space-y-5 text-base leading-8 text-neutral-600">
            <p>{profile.summary}</p>
            <p>
              I have worked on AI, full-stack, database, and core programming
              projects including MaternaSafe, a GDP analysis pipeline, a library
              management system, and C++ based systems.
            </p>
            <p>
              My current focus is strengthening full-stack development,
              software design, responsive UI, and clean GitHub collaboration
              through small, reviewable pull requests.
            </p>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <div className="mt-14 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-black/10 md:p-8">
            <p className="text-sm font-semibold uppercase text-neutral-500">
              /Education
            </p>
            <div className="mt-6 divide-y divide-black/10">
              {education.map((item) => (
                <article key={item.institution} className="py-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-neutral-950">
                        {item.institution}
                      </h2>
                      <p className="mt-1 text-neutral-600">{item.program}</p>
                    </div>
                    <p className="text-sm font-semibold text-neutral-500">
                      {item.period}
                    </p>
                  </div>
                  {item.details ? (
                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {item.details}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-black/10 md:p-8">
            <p className="text-sm font-semibold uppercase text-neutral-500">
              /Achievements
            </p>
            <div className="mt-6 space-y-4">
              {achievements.map((achievement) => (
                <article
                  key={achievement.title}
                  className="rounded-[8px] border border-black/10 bg-[#eeeeea] p-4"
                >
                  <h2 className="font-bold text-neutral-950">
                    {achievement.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {achievement.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <div className="mt-14 rounded-[8px] border border-white/70 bg-white/84 p-5 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-neutral-500">
                /Certifications
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase text-neutral-950 md:text-5xl">
                Certificates and participation.
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="rounded-[8px] border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase text-orange-700">
                  {certification.date}
                </p>
                <h3 className="mt-3 text-xl font-black text-neutral-950">
                  {certification.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-neutral-500">
                  {certification.issuer}
                </p>
                <p className="mt-4 leading-7 text-neutral-600">
                  {certification.description}
                </p>
                {certification.href ? (
                  <a
                    href={certification.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm font-bold uppercase text-neutral-950 hover:text-orange-600"
                  >
                    View certificate -&gt;
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <div className="mt-14 rounded-[8px] border border-white/70 bg-white/84 px-5 py-10 text-neutral-950 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-black uppercase md:text-5xl">
              /Learning Timeline
            </h2>
            <p className="text-sm font-semibold text-neutral-500">
              Experience foundation
            </p>
          </div>
          <div className="mt-8 divide-y divide-black/10">
            {experiences.map((experience) => (
              <article
                key={experience.organization}
                className="grid gap-3 py-5 md:grid-cols-[1fr_1fr_0.7fr] md:items-center"
              >
                <h3 className="font-semibold">{experience.organization}</h3>
                <p className="text-neutral-600">{experience.role}</p>
                <p className="text-neutral-500 md:text-right">
                  {experience.period}
                </p>
              </article>
            ))}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_0.8fr]">
          <section className="rounded-[8px] border border-white/70 bg-white/84 p-5 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:p-8">
            <p className="text-sm font-semibold uppercase text-neutral-500">
              /Blogs
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-neutral-950">
              Writing queue.
            </h2>
            <div className="mt-6 space-y-4">
              {blogs.map((blog) => (
                <article
                  key={blog.title}
                  className="rounded-[8px] border border-white/70 bg-white/58 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-xs font-bold uppercase text-orange-700">
                    {blog.status}
                  </p>
                  <h3 className="mt-2 font-bold text-neutral-950">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {blog.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[8px] border border-white/70 bg-white/84 p-5 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur-xl md:p-8">
            <p className="text-sm font-semibold uppercase text-neutral-500">
              /Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-neutral-950">
              Feedback.
            </h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.source}
                  className="rounded-[8px] border border-white/70 bg-white/58 p-4 shadow-sm backdrop-blur"
                >
                  <p className="leading-7 text-neutral-600">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-orange-700">
                    {testimonial.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
