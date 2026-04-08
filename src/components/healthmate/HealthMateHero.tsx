"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./WaitlistDialog";
import { BriefingDialog } from "./BriefingDialog";
import {
  MENNIE_FULL_NAME,
  MENNIE_NAME,
  MENNIE_TEASER_VIDEO,
  MENNIE_WAITLIST_LABEL,
} from "@/lib/mennie";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type Particle = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
};

function seededRandom(seed: number) {
  const value = Math.sin(seed * 9999.91) * 10000;
  return value - Math.floor(value);
}

const PARTICLES: Particle[] = Array.from({ length: 100 }, (_, index) => {
  const seed = index + 1;
  return {
    startX: seededRandom(seed) * 100,
    startY: seededRandom(seed + 100) * 100,
    endX: seededRandom(seed + 200) * 100,
    endY: seededRandom(seed + 300) * 100,
    size: seededRandom(seed + 400) * 3 + 1,
    duration: seededRandom(seed + 500) * 10 + 10,
  };
});

export function HealthMateHero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showProtectionOverlay, setShowProtectionOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!showProtectionOverlay) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowProtectionOverlay(false);
    }, 1400);

    return () => window.clearTimeout(timeout);
  }, [showProtectionOverlay]);

  function toggleMute() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  }

  async function togglePlayback() {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
  }

  function triggerProtectionOverlay() {
    setShowProtectionOverlay(true);
  }

  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-0 opacity-50">
        {isClient &&
          PARTICLES.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                x: `${particle.startX}vw`,
                y: `${particle.startY}vh`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                x: `${particle.endX}vw`,
                y: `${particle.endY}vh`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          ))}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-radial-hero" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <div
            className="absolute bottom-0 left-1/2 h-full w-1/2 -translate-x-1/2 bg-gradient-to-t from-transparent via-primary/10 to-transparent"
            style={{
              maskImage: 'url("/humanoid-silhouette.svg")',
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "bottom center",
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-20 container flex min-h-[720px] items-center py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center lg:text-left"
          >
            <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Coming Soon
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              {MENNIE_NAME}
            </h1>
            <p className="mt-4 max-w-3xl text-base font-medium text-foreground/80 md:text-lg lg:max-w-2xl">
              {MENNIE_FULL_NAME}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:max-w-2xl">
              A next-generation care intelligence program designed to support
              healthcare environments with embodied assistance, guided
              interaction, and human-centered operational intelligence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <WaitlistDialog
                open={isWaitlistOpen}
                onOpenChange={setIsWaitlistOpen}
              >
                <Button size="lg" variant="secondary">
                  {MENNIE_WAITLIST_LABEL}
                </Button>
              </WaitlistDialog>
              <BriefingDialog
                open={isBriefingOpen}
                onOpenChange={setIsBriefingOpen}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/50 bg-transparent hover:bg-foreground/10"
                >
                  Request NDA Briefing
                </Button>
              </BriefingDialog>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.2rem] bg-primary/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between px-2 pt-1">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {MENNIE_NAME} teaser
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Coming-soon preview for the care intelligence launch
                  </p>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                  Protected preview
                </span>
              </div>
              <div
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black"
                onContextMenu={(event) => {
                  event.preventDefault();
                  triggerProtectionOverlay();
                }}
                onDragStart={(event) => {
                  event.preventDefault();
                  triggerProtectionOverlay();
                }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/70 via-black/20 to-transparent px-5 py-4">
                  <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    {MENNIE_NAME}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] text-white/70 backdrop-blur">
                    Streaming preview
                  </span>
                </div>
                <video
                  ref={videoRef}
                  className="aspect-[16/9] w-full object-cover"
                  src={MENNIE_TEASER_VIDEO}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  disableRemotePlayback
                  controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                  onClick={(event) => {
                    event.preventDefault();
                    triggerProtectionOverlay();
                  }}
                >
                  Your browser does not support the teaser video.
                </video>
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(4,8,17,0.18)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/75 via-black/15 to-transparent px-5 py-5">
                  <div className="flex items-end justify-between gap-4">
                    <p className="max-w-md text-sm leading-relaxed text-white/75">
                      A first look at {MENNIE_NAME}'s visual identity and launch
                      direction.
                    </p>
                    <div className="hidden rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] text-white/70 backdrop-blur md:inline-flex">
                      Preview only
                    </div>
                  </div>
                </div>
                {showProtectionOverlay && (
                  <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/82 backdrop-blur-sm">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center shadow-2xl">
                      <p className="text-sm font-semibold text-white">
                        Protected preview
                      </p>
                      <p className="mt-1 text-xs text-white/70">
                        Download, save, and capture actions are discouraged on
                        this teaser.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 pb-1">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Best-effort preview protection is enabled for browser actions.
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                    onClick={togglePlayback}
                  >
                    {isPlaying ? (
                      <Pause className="mr-2 h-4 w-4" />
                    ) : (
                      <Play className="mr-2 h-4 w-4" />
                    )}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                    onClick={toggleMute}
                  >
                    {isMuted ? (
                      <VolumeX className="mr-2 h-4 w-4" />
                    ) : (
                      <Volume2 className="mr-2 h-4 w-4" />
                    )}
                    {isMuted ? "Unmute" : "Mute"}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
