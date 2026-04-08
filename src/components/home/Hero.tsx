"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Iridescence from "@/components/common/Iridescence";
import { AnimatedLinkButton } from "@/components/ui/AnimatedLinkButton";
import { ProximityText } from "@/components/ui/ProximityText";
import { MENNIE_WAITLIST_LABEL } from "@/lib/mennie";

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
      } catch {
        return null;
      }
    }

    const parsed = parseHslVar("--primary");
    if (parsed) setShaderColor(parsed);
  }, []);

  return (
    <section className="relative w-full section-padding overflow-hidden">
      <Iridescence
        color={shaderColor}
        mouseReact
        amplitude={0.1}
        speed={1}
        className="absolute inset-0 z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="mx-auto inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
            Applied AI Products and Intelligent Systems
          </p>
          <h1 className="prose-heading text-foreground">
            AI products for healthcare, pharma, and industrial intelligence.
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
            <ProximityText>
              Praverse Tech builds applied intelligent systems that help
              regulated teams move from complex workflows to deployable AI
              products with clarity, control, and speed.
            </ProximityText>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/75">
            <ProximityText>
              Available today: regulatory AI workflows, healthcare intelligence
              programs, and industrial decision-support systems.
            </ProximityText>
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/65 md:text-base">
            <ProximityText>
              From applied AI systems to healthcare innovation, we help turn
              complex ideas into deployable products.
            </ProximityText>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <AnimatedLinkButton
            href="/contact"
            className="bg-primary text-background border-transparent shadow-md hover:brightness-110 focus-ring"
          >
            Discuss a Project <ArrowRight className="ml-2 h-4 w-4" />
          </AnimatedLinkButton>
          <AnimatedLinkButton
            href="/healthmate"
            className="focus-ring bg-white/10 text-white border-transparent shadow-md"
          >
            <span className="flex items-center gap-3">
              <span>{MENNIE_WAITLIST_LABEL}</span>
              <span className="ml-1 inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-primary">
                In Development
              </span>
            </span>
          </AnimatedLinkButton>
        </motion.div>
      </div>
    </section>
  );
}
