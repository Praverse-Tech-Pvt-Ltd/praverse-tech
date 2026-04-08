
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { CURRENT_OFFERINGS } from '@/lib/data';
import MagicBento from './MagicBento';
import { ProximityText } from '@/components/ui/ProximityText';

export function Domains() {
  return (
    <AnimatedSection
      id="domains"
      className="section-padding bg-background"
      staggerChildren={0.12}
      amount={0.35}
    >
      <div className="container">
        <AnimatedItem className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="prose-heading">
            What We Offer Today
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">
            <ProximityText>
              Current offerings across healthcare, pharma, and industrial intelligence, with active programs surfaced ahead of longer-horizon research.
            </ProximityText>
          </p>
        </AnimatedItem>

        <AnimatedItem>
          <MagicBento
            items={CURRENT_OFFERINGS}
            textAutoHide={false}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
