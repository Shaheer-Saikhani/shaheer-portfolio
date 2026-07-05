"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
};

const delayClasses: Record<NonNullable<ScrollRevealProps["delay"]>, string> = {
  0: "",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    // IntersectionObserver lets each section animate when it enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? "is-visible" : ""} ${delayClasses[delay]} ${className}`}
    >
      {children}
    </div>
  );
}
