"use client";

import { Cpu, Rocket, Server, Sparkles } from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";
import { ProximityText } from "@/components/ui/ProximityText";
import { UniverseBackground } from "./UniverseBackground";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "GPU & AI Cloud Infrastructure",
    description:
      "A vision for dedicated GPU clusters and cloud-native AI infrastructure powering training, inference, and edge deployment across the Praverse ecosystem.",
    icon: Server,
    accent: "text-cyan-200",
  },
  {
    title: "Venture Lab",
    description:
      "Our product incubation arm - validating early-stage future-tech concepts, from biochips to robotics, before they graduate into standalone ventures.",
    icon: Rocket,
    accent: "text-violet-200",
  },
  {
    title: "Edge AI & AIoT Platforms",
    description:
      "Compact, efficient intelligence deployed on sensors, kiosks, and embedded devices - bringing Praverse research closer to the real world.",
    icon: Cpu,
    accent: "text-emerald-200",
  },
];

export function FutureTechEcosystem() {
  return (
    <AnimatedSection
      id="future-tech-ecosystem"
      className="relative overflow-hidden bg-slate-950 section-padding"
      staggerChildren={0.12}
      amount={0.25}
    >
      <UniverseBackground intensity="soft" />
      <div className="container relative z-10">
        <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
            Future-Tech Ecosystem
          </p>
          <h2 className="prose-heading mt-4 text-white">
            Beyond AI - building the infrastructure of what comes next.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
            <ProximityText>
              Praverse incubates and connects the platforms, infrastructure,
              and ventures that will carry our research from the lab to the
              real world.
            </ProximityText>
          </p>
        </AnimatedItem>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <AnimatedItem key={pillar.title}>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className={cn("h-5 w-5", pillar.accent)} />
                  </div>
                  <h3 className="relative mt-4 text-lg font-semibold tracking-normal text-white">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-300">
                    {pillar.description}
                  </p>
                  <div className="relative mt-4 inline-flex items-center gap-2 text-xs font-medium text-cyan-200/70">
                    <Sparkles className="h-3.5 w-3.5" />
                    Praverse Universe
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
