"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NovaAvatarProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-12 w-12",
  md: "h-20 w-20",
  lg: "h-40 w-40",
};

export function NovaAvatar({ className, size = "md" }: NovaAvatarProps) {
  return (
    <motion.div
      className={cn("relative", sizeMap[size], className)}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]"
        role="img"
        aria-label="Nova, the Praverse robot guide"
      >
        <defs>
          <linearGradient id="nova-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id="nova-visor" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0891b2" />
          </radialGradient>
        </defs>

        <ellipse cx="50" cy="92" rx="22" ry="4" fill="#22d3ee" opacity="0.15" />

        <rect x="44" y="14" width="12" height="10" rx="3" fill="url(#nova-body)" stroke="#22d3ee" strokeOpacity="0.4" />
        <motion.circle
          cx="50"
          cy="10"
          r="3.5"
          fill="#67e8f9"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <rect x="22" y="22" width="56" height="46" rx="18" fill="url(#nova-body)" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.5" />

        <rect x="30" y="32" width="40" height="20" rx="10" fill="url(#nova-visor)" opacity="0.9" />
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 42px" }}
        >
          <circle cx="40" cy="42" r="4" fill="#0f172a" />
          <circle cx="60" cy="42" r="4" fill="#0f172a" />
        </motion.g>

        <rect x="14" y="36" width="8" height="22" rx="4" fill="url(#nova-body)" stroke="#22d3ee" strokeOpacity="0.4" />
        <rect x="78" y="36" width="8" height="22" rx="4" fill="url(#nova-body)" stroke="#22d3ee" strokeOpacity="0.4" />

        <rect x="32" y="70" width="36" height="18" rx="8" fill="url(#nova-body)" stroke="#22d3ee" strokeOpacity="0.4" />
        <circle cx="50" cy="79" r="4" fill="#a78bfa" opacity="0.85" />
      </svg>
    </motion.div>
  );
}
