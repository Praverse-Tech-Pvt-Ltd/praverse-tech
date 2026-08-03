"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Atom,
  Bot,
  BrainCircuit,
  Cpu,
  Eye,
  FlaskConical,
  Network,
  Orbit,
  RadioTower,
  Stethoscope,
} from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UniverseBackground } from "./UniverseBackground";
import { NovaGuide } from "./NovaGuide";

const stations = [
  {
    label: "AI Core",
    description: "Production-ready ML systems, explainability, validation, and deployment.",
    href: "/machine-learning",
    icon: BrainCircuit,
    accent: "text-cyan-200",
    orbit: "left-[48%] top-[4%]",
  },
  {
    label: "HealthMate",
    description: "Humanoid healthcare assistance and intelligent patient support workflows.",
    href: "/healthmate",
    icon: Stethoscope,
    accent: "text-emerald-200",
    orbit: "left-[74%] top-[16%]",
  },
  {
    label: "Pharma AI",
    description: "FDA 483 intelligence, regulatory automation, GMP workflows, and compliance support.",
    href: "/pharma-ai",
    icon: FlaskConical,
    accent: "text-violet-200",
    orbit: "left-[84%] top-[47%]",
  },
  {
    label: "Federated Learning",
    description: "Privacy-preserving model training for sensitive healthcare and wearable data.",
    icon: Network,
    accent: "text-pink-200",
    orbit: "left-[68%] top-[76%]",
  },
  {
    label: "Vision AI",
    description: "Medical imaging, computer vision, diagnostics, and multimodal perception.",
    icon: Eye,
    accent: "text-teal-200",
    orbit: "left-[38%] top-[86%]",
  },
  {
    label: "Robotics",
    description: "Humanoid robotics, simulation, reinforcement learning, and industrial intelligence.",
    href: "/humanoid-robotics",
    icon: Bot,
    accent: "text-blue-200",
    orbit: "left-[12%] top-[67%]",
  },
  {
    label: "Biochips",
    description: "Early-stage diagnostic biochips and smart sensing research directions.",
    icon: Atom,
    accent: "text-sky-200",
    orbit: "left-[8%] top-[34%]",
  },
  {
    label: "Photonics",
    description: "Integrated photonic sensors and optical computing exploration for next-gen sensing.",
    icon: Orbit,
    accent: "text-indigo-200",
    orbit: "left-[24%] top-[12%]",
  },
  {
    label: "Infrastructure",
    description: "Cloud, edge, AIoT, GPU infrastructure vision, and deployment orchestration.",
    icon: Cpu,
    accent: "text-orange-200",
    orbit: "left-[50%] top-[48%]",
  },
  {
    label: "Research",
    description: "Publications, applied experiments, venture lab concepts, and collaboration pathways.",
    href: "/blog",
    icon: RadioTower,
    accent: "text-fuchsia-200",
    orbit: "left-[21%] top-[48%]",
  },
];

export function SpaceTour() {
  return (
    <AnimatedSection
      id="space-tour"
      className="relative overflow-hidden bg-slate-950 section-padding"
      staggerChildren={0.12}
      amount={0.2}
    >
      <UniverseBackground intensity="strong" />
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <AnimatedItem className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
              Praverse Space Tour
            </p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-normal text-white md:text-5xl">
              Travel through the innovation stations already shaping Praverse.
            </h2>
            <p className="text-base leading-8 text-slate-300 md:text-lg">
              The same AI, healthcare, robotics, pharma, infrastructure, and
              research work is now arranged as an ecosystem journey.
            </p>
            <NovaGuide
              eyebrow="Nova briefing"
              title="I will guide the route."
              message="Start at the AI Core, then move through HealthMate, regulated pharma intelligence, robotics, sensing research, infrastructure, and publications. Every station maps to work already present in Praverse."
              className="max-w-xl"
            />
          </AnimatedItem>

          <AnimatedItem>
            <div className="hidden min-h-[680px] lg:block">
              <div className="relative mx-auto h-[660px] max-w-[760px]">
                <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
                <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/15" />
                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-center shadow-2xl shadow-cyan-950/60 backdrop-blur-xl">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">
                      Core
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Praverse
                    </p>
                  </div>
                </div>

                {stations.map((station, index) => {
                  const Icon = station.icon;
                  const stationCard = (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="group w-44 rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/85"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                          <Icon className={cn("h-4 w-4", station.accent)} />
                        </div>
                        <h3 className="text-sm font-semibold tracking-normal text-white">
                          {station.label}
                        </h3>
                      </div>
                      <p className="text-xs leading-5 text-slate-300">
                        {station.description}
                      </p>
                    </motion.div>
                  );

                  return (
                    <div
                      key={station.label}
                      className={cn("absolute -translate-x-1/2 -translate-y-1/2", station.orbit)}
                    >
                      {station.href ? (
                        <Link href={station.href} aria-label={`Explore ${station.label}`}>
                          {stationCard}
                        </Link>
                      ) : (
                        stationCard
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 lg:hidden">
              {stations.map((station, index) => {
                const Icon = station.icon;
                const item = (
                  <div className="relative rounded-lg border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <Icon className={cn("h-5 w-5", station.accent)} />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-xs font-semibold text-cyan-200/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-base font-semibold tracking-normal text-white">
                            {station.label}
                          </h3>
                        </div>
                        <p className="text-sm leading-6 text-slate-300">
                          {station.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return station.href ? (
                  <Link key={station.label} href={station.href}>
                    {item}
                  </Link>
                ) : (
                  <div key={station.label}>{item}</div>
                );
              })}
            </div>
          </AnimatedItem>
        </div>

        <AnimatedItem className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="secondary" className="rounded-lg">
            <Link href="#domains">Explore domains</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-white/20 bg-white/5 text-white hover:bg-white/10">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
