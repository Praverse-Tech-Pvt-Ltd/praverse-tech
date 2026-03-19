
'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { TIMELINE } from '@/lib/data';
import { ProximityText } from '@/components/ui/ProximityText';

export function InnovationTimeline() {

  return (
    <AnimatedSection className="section-padding bg-muted" staggerChildren={0.08}>
      <div className="container mx-auto max-w-5xl">
        <AnimatedItem className="mb-20 text-center">
          <h2 className="prose-heading">Our Innovation Timeline</h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed"><ProximityText>Key milestones in our journey to build trustworthy AI systems.</ProximityText></p>
        </AnimatedItem>
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2" />

          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedItem
                key={item.year}
                direction="up"
                delay={index * 0.05}
                className="relative mb-12 md:mb-16"
              >
                <div className="relative flex flex-col gap-4 md:flex-row md:items-start group">
                  <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2 md:top-8 z-10">
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <div className="absolute h-full w-full animate-ping rounded-full bg-primary/40 opacity-75 duration-1000" />
                      <div className="relative h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <div
                    className={`ml-10 rounded-2xl border border-border/40 bg-card/40 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-card hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/10 hover:-translate-y-2 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                      }`}
                  >
                    <p className="text-xl font-black bg-gradient-to-br from-primary via-primary/80 to-accent bg-clip-text text-transparent md:text-2xl drop-shadow-sm"><ProximityText>{item.year}</ProximityText></p>
                    <h3 className="mt-4 text-xl font-bold md:text-2xl text-foreground tracking-tight group-hover:text-primary transition-colors"><ProximityText>{item.event}</ProximityText></h3>
                    <p className="mt-4 text-sm text-muted-foreground md:text-base leading-relaxed"><ProximityText>{item.description}</ProximityText></p>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
