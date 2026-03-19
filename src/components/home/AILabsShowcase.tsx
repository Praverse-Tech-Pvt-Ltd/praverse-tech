"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import { Card, CardContent } from "../ui/card";
import { Eye, Brain, Cpu, Orbit } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { ProximityText } from "@/components/ui/ProximityText";

const tabs = [
  {
    id: "vision",
    label: "Vision AI",
    icon: Eye,
    imageId: "lab-vision-ai",
    title: "Medical Imaging Analysis",
    description:
      "Our vision models analyze retinal scans with superhuman accuracy, detecting subtle anomalies to assist in early diagnosis of diseases like diabetic retinopathy.",
  },
  {
    id: "language",
    label: "Language AI",
    icon: Brain,
    imageId: "project-fda",
    title: "FDA 483 Response Generation",
    description:
      "We leverage large language models to draft comprehensive and compliant responses to regulatory observations, saving pharma companies weeks of work.",
  },
  {
    id: "edge",
    label: "Edge AI",
    icon: Cpu,
    imageId: "lab-edge-ai",
    title: "Real-Time Edge Inference",
    description:
      "We optimize and deploy lightweight deep learning models on embedded systems for real-time applications, from industrial monitoring to wearable health tech.",
  },
  {
    id: "simulation",
    label: "Simulation",
    icon: Orbit,
    imageId: "lab-simulation",
    title: "Humanoid Digital Twins",
    description:
      "In our virtual labs, we train humanoid robots in physics-based environments, accelerating development and testing of complex navigation and interaction algorithms.",
  },
];

export function AILabsShowcase() {
  return (
    <AnimatedSection
      className="section-padding bg-muted"
      staggerChildren={0.18}
      amount={0.3}
    >
      <div className="container">
        <AnimatedItem className="mx-auto mb-12 md:mb-20 max-w-2xl text-center">
          <h2 className="prose-heading">AI Labs & Experiments</h2>
          <p className="mt-4 md:mt-6 text-base text-muted-foreground md:text-lg leading-relaxed px-2 md:px-0">
            <ProximityText>
              Experimental research and development across vision, language, edge
              computing, and simulation.
            </ProximityText>
          </p>
        </AnimatedItem>

        <Controller />
      </div>
    </AnimatedSection>
  );
}

function Controller() {
  return (
    <div className="w-full h-[550px] md:h-[600px] overflow-hidden -mt-4 md:-mt-16 relative z-10">
      <ScrollStack>
        {tabs.map((tab) => {
          const image = PlaceHolderImages.find((p) => p.id === tab.imageId);
          return (
            <ScrollStackItem key={tab.id} itemClassName="bg-card text-card-foreground border border-border/60 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between h-auto md:min-h-[320px]">
              <div className="flex-1 w-full space-y-3 md:space-y-4 text-center md:text-left flex flex-col justify-center">
                <div className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto md:mx-0 shrink-0">
                  <tab.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold leading-tight">{tab.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-3 md:line-clamp-none"><ProximityText>{tab.description}</ProximityText></p>
              </div>
              <div className="flex-1 relative w-full h-[160px] md:h-full mt-2 md:mt-0 rounded-lg overflow-hidden bg-muted shrink-0 min-h-[160px] md:min-h-[200px]">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={tab.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/20 mix-blend-overlay pointer-events-none" />
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  );
}
