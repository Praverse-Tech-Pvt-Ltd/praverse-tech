"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Orbit, RadioTower, Sparkles } from "lucide-react";
import Iridescence from "@/components/common/Iridescence";
import { AnimatedLinkButton } from "@/components/ui/AnimatedLinkButton";
import { ProximityText } from "@/components/ui/ProximityText";
import { UniverseBackground } from "./UniverseBackground";
import { NovaAvatar } from "./NovaAvatar";

export function Hero() {
  const [shaderColor, setShaderColor] = useState<[number, number, number]>([
    0.5, 0.6, 0.8,
  ]);

  useEffect(() => {
    function parseHslVar(varName: string) {
      try {
        const raw = getComputedStyle(document.documentElement)
          .getPropertyValue(varName)
          .trim();
        if (!raw) return null;
        const parts = raw.split(/\s+/);
        const h = parseFloat(parts[0]);
        const s = parseFloat(parts[1]) / 100;
        const l = parseFloat(parts[2]) / 100;

        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        if (s === 0) {
          return [l, l, l] as [number, number, number];
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        const hk = (h % 360) / 360;
        const r = hue2rgb(p, q, hk + 1 / 3);
        const g = hue2rgb(p, q, hk);
        const b = hue2rgb(p, q, hk - 1 / 3);
        return [r, g, b] as [number, number, number];
      } catch (e) {
        return null;
      }
    }

    const parsed = parseHslVar("--primary");
    if (parsed) setShaderColor(parsed);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-slate-950 py-28 md:py-36">
      <Iridescence
        color={shaderColor}
        mouseReact
        amplitude={0.08}
        speed={0.8}
        className="absolute inset-0 z-0 opacity-50"
      />
      <UniverseBackground intensity="strong" className="z-[1]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent,rgba(2,6,23,0.56)_55%,rgba(2,6,23,0.96)_100%)]" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl space-y-6"
        >
          <NovaAvatar size="lg" className="mx-auto" />
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80 backdrop-blur">
            <RadioTower className="h-3.5 w-3.5" />
            Nova online - Praverse Universe
          </div>
          <h1 className="prose-heading text-foreground">
            Enter the Praverse Universe.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
            <ProximityText>
              Engineering human-centered intelligence across AI, robotics,
              healthcare, pharma automation, biochips, photonics, and AI
              infrastructure.
            </ProximityText>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            <ProximityText>
              Bringing validated innovations to market with precision and trust.
            </ProximityText>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <AnimatedLinkButton
            href="#space-tour"
            className="focus-ring border border-white/15 bg-white/10 text-white shadow-md backdrop-blur"
          >
            Start Space Tour <Orbit className="ml-2 h-4 w-4" />
          </AnimatedLinkButton>
          <AnimatedLinkButton
            href="#future-tech-ecosystem"
            className="focus-ring border border-white/15 bg-white/5 text-white shadow-md backdrop-blur hover:bg-white/10"
          >
            Explore the Ecosystem
          </AnimatedLinkButton>
          <AnimatedLinkButton
            href="/healthmate"
            className="focus-ring border-transparent bg-primary text-background shadow-md hover:brightness-110"
          >
            <span className="flex items-center gap-3">
              <span>Meet HealthMate</span>
              <span className="ml-1 inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-primary">
                Coming Soon
              </span>
            </span>
          </AnimatedLinkButton>
          <AnimatedLinkButton
            href="/contact"
            className="focus-ring border border-white/15 bg-white/5 text-white shadow-md backdrop-blur hover:bg-white/10"
          >
            Partner With Praverse
          </AnimatedLinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mx-auto mt-12 grid max-w-4xl gap-3 text-left sm:grid-cols-3"
        >
          {[
            "AI + regulated industries",
            "Healthcare robotics",
            "Research-driven infrastructure",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 backdrop-blur"
            >
              <Sparkles className="mb-3 h-4 w-4 text-cyan-200" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
