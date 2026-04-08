"use client";
import Image from "next/image";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProximityText } from "@/components/ui/ProximityText";

const visionImage = PlaceHolderImages.find((p) => p.id === "lab-vision-ai");

export function Vision() {
  return (
    <AnimatedSection
      className="section-padding bg-muted"
      staggerChildren={0.25}
    >
      <div className="container">
        <div className="grid gap-12 items-center md:grid-cols-2 lg:gap-16">
          <AnimatedItem
            direction="left"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 bg-background/40 shadow-2xl backdrop-blur"
          >
            {visionImage && (
              <Image
                src={visionImage.imageUrl}
                alt={visionImage.description}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                data-ai-hint={visionImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem direction="right" className="space-y-6 lg:space-y-8">
            <h2 className="prose-heading">What Praverse Does</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                <ProximityText>
                  We build AI products and applied intelligent systems for teams
                  working in healthcare, pharma, and industrial operations.
                </ProximityText>
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                <ProximityText>
                  Our work spans product strategy, workflow design, model
                  development, and deployment thinking so ideas can move beyond
                  prototypes into real operating environments.
                </ProximityText>
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                <ProximityText>
                  We keep the long-horizon deep-tech vision, but we lead with
                  what we can build, validate, and deliver now.
                </ProximityText>
              </p>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
