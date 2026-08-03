"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NovaAvatar } from "./NovaAvatar";

const SECTION_MESSAGES: Record<string, string> = {
  vision: "This is our vision - human-centered intelligence guiding every system we build.",
  "space-tour": "Welcome aboard. These stations map the full Praverse innovation journey.",
  "future-tech-ecosystem": "Here's how AI, infrastructure, and venture work connect across Praverse.",
  domains: "These are our core innovation domains - from pharma AI to biochips and photonics.",
  "ai-core": "Our AI Core: production-ready ML systems built for regulated industries.",
  research: "Explore our published research in federated learning, vision AI, and robotics.",
  partner: "Interested in collaborating? I can connect you with the Praverse team.",
};

const SECTION_IDS = Object.keys(SECTION_MESSAGES);

export function FloatingNova() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (dismissed || !activeSection || !SECTION_MESSAGES[activeSection]) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 max-w-xs sm:bottom-6 sm:right-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pointer-events-auto relative flex items-start gap-3 rounded-lg border border-cyan-300/20 bg-slate-950/80 p-3 pr-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl"
        >
          <NovaAvatar size="sm" className="shrink-0" />
          <p className="text-xs leading-5 text-slate-200 sm:text-sm">
            {SECTION_MESSAGES[activeSection]}
          </p>
          <button
            type="button"
            aria-label="Dismiss Nova"
            onClick={() => setDismissed(true)}
            className="absolute right-2 top-2 text-slate-400 transition hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
