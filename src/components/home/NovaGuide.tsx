"use client";

import { motion } from "framer-motion";
import { Radio, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { NovaAvatar } from "./NovaAvatar";

type NovaGuideProps = {
  eyebrow?: string;
  title?: string;
  message: string;
  align?: "left" | "center";
  className?: string;
};

export function NovaGuide({
  eyebrow = "Nova online",
  title = "Praverse ecosystem guide",
  message,
  align = "left",
  className,
}: NovaGuideProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950/55 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative flex gap-4">
        <NovaAvatar size="sm" className="shrink-0" />
        <div className={cn("space-y-2", align === "center" && "mx-auto")}>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            <Radio className="h-3.5 w-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-xl font-semibold tracking-normal text-white md:text-2xl">
            {title}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            {message}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-violet-200/80">
            <Sparkles className="h-3.5 w-3.5" />
            Guided journey mode
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
