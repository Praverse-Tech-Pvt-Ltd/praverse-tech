"use client";

import { cn } from "@/lib/utils";

type UniverseBackgroundProps = {
  className?: string;
  intensity?: "soft" | "strong";
};

export function UniverseBackground({
  className,
  intensity = "soft",
}: UniverseBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        intensity === "strong" ? "opacity-100" : "opacity-70",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(168,85,247,0.16),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.14),transparent_32%)]" />
      <div className="absolute inset-0 universe-starfield" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/10" />
    </div>
  );
}
