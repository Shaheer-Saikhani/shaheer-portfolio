import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-medium text-white">Built by {profile.name}</p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="hover:text-orange-300">
            {profile.email}
          </a>
          <a href={profile.resumeHref} download className="hover:text-orange-300">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
