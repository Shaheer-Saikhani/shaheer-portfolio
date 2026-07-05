"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // The pathname key remounts this wrapper on route changes, replaying the page-enter animation.
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
