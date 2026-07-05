const particles = [
  "left-[8%] top-[18%] h-1.5 w-1.5 delay-0",
  "left-[18%] top-[68%] h-1 w-1 delay-300",
  "left-[32%] top-[28%] h-1 w-1 delay-700",
  "left-[48%] top-[82%] h-1.5 w-1.5 delay-1000",
  "left-[62%] top-[18%] h-1 w-1 delay-500",
  "left-[78%] top-[58%] h-1.5 w-1.5 delay-150",
  "left-[90%] top-[32%] h-1 w-1 delay-1000",
  "left-[88%] top-[86%] h-1.5 w-1.5 delay-700",
];

export function BackgroundEffects() {
  return (
    // Decorative background only; pointer-events-none keeps it from blocking clicks.
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute right-[-8rem] top-10 h-96 w-96 rounded-full bg-white/45 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/4 h-96 w-96 rounded-full bg-white/35 blur-3xl" />
      <div className="absolute right-[12%] top-[28%] h-72 w-72 rounded-full bg-orange-200/28 blur-3xl" />
      <div className="absolute left-[6%] bottom-[18%] h-64 w-64 rounded-full bg-orange-100/24 blur-3xl" />

      {particles.map((className) => (
        <span
          key={className}
          className={`absolute rounded-full bg-orange-400/55 shadow-[0_0_18px_rgba(251,146,60,0.45)] ${className} animate-particle-drift`}
        />
      ))}
    </div>
  );
}
