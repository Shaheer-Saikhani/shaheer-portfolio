"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#e8ecef]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-black/10"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {profile.name}
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-neutral-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={
                pathname === item.href
                  ? "rounded-full bg-neutral-950 px-3 py-2 text-white shadow-sm"
                  : "rounded-full px-3 py-2 transition hover:bg-white hover:text-neutral-950 hover:shadow-sm"
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-neutral-950 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
